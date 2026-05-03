-- Add file_mime_type column to store original uploaded file MIME type
ALTER TABLE kyc_records
ADD COLUMN file_mime_type VARCHAR(100);

-- Set default MIME type for existing records based on file extension
UPDATE kyc_records
SET file_mime_type = 'image/jpeg'
WHERE document_path LIKE '%.jpg' OR document_path LIKE '%.jpeg';

UPDATE kyc_records
SET file_mime_type = 'image/png'
WHERE document_path LIKE '%.png';

UPDATE kyc_records
SET file_mime_type = 'application/pdf'
WHERE document_path LIKE '%.pdf';
