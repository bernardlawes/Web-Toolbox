<?php

// Clean output buffer *before* any headers
if (ob_get_level()) {
    ob_end_clean();
}

$token  = $_GET['token'] ?? 'undefined';

// Derive the file path from the token using a simple logic that both validated the token and 
// determines the file to be downloaded.
// In a real application, you would validate the token and derive the file path securely
// like from a database or a secure mapping
// Here, we will just simulate a file download for demonstration purposes
// For this demonstration, we'll assume the file is always 'resume.pdf' in a 'downloads' directory
$filePath = __DIR__ . '/downloads/resume.pdf';  // adjust as needed

// Validate file
if (!file_exists($filePath)) {
    http_response_code(404);
    exit('File not found.');
}

// Get MIME type
$mimeType = mime_content_type($filePath) ?: 'application/octet-stream';

// Send headers
header('Content-Description: File Transfer');
header("Content-Type: $mimeType");
header('Content-Disposition: attachment; filename="' . basename($filePath) . '"');
header('Expires: 0');
header('Cache-Control: must-revalidate');
header('Pragma: public');
header('Content-Length: ' . filesize($filePath));

// Read file and flush it to output
flush();
readfile($filePath);
exit;
