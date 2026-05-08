-- Audit log driven by database trigger
--
-- Replaces application-side logging of status transitions with a trigger that
-- fires on any INSERT or UPDATE of kyc_records.status. The application sets
-- two transaction-local config values before the write so the trigger can
-- record the actor and any extra metadata:
--
--   SELECT set_config('app.actor', 'ai-service', true);
--   SELECT set_config('app.audit_meta', '{"trust_score": 87}', true);
--
-- Both default to NULL (interpreted as actor 'system' and no metadata) when
-- the caller does not set them. SET LOCAL semantics ensure values are scoped
-- to the surrounding transaction only.

CREATE OR REPLACE FUNCTION kyc_audit_trigger()
RETURNS TRIGGER AS $$
DECLARE
    v_actor    TEXT;
    v_metadata TEXT;
    v_meta_jsonb JSONB;
BEGIN
    IF TG_OP = 'UPDATE' AND NEW.status IS NOT DISTINCT FROM OLD.status THEN
        RETURN NEW;
    END IF;

    v_actor    := COALESCE(NULLIF(current_setting('app.actor', true), ''), 'system');
    v_metadata := NULLIF(current_setting('app.audit_meta', true), '');
    BEGIN
        v_meta_jsonb := CASE WHEN v_metadata IS NULL THEN NULL ELSE v_metadata::jsonb END;
    EXCEPTION WHEN others THEN
        v_meta_jsonb := NULL;
    END;

    INSERT INTO kyc_audit_log (kyc_id, from_status, to_status, actor, metadata)
    VALUES (
        NEW.id,
        CASE WHEN TG_OP = 'INSERT' THEN NULL ELSE OLD.status END,
        NEW.status,
        v_actor,
        v_meta_jsonb
    );

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_kyc_audit ON kyc_records;
CREATE TRIGGER trg_kyc_audit
    AFTER INSERT OR UPDATE OF status ON kyc_records
    FOR EACH ROW EXECUTE FUNCTION kyc_audit_trigger();
