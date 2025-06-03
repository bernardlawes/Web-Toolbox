# Secure File Download Snippet (PHP + JavaScript)

This repository provides a simple and secure pattern for triggering file downloads using a combination of PHP and JavaScript. It supports direct file serving via PHP with token-based validation and a frontend script to trigger the download without opening a new tab or navigating away from the page.

## 🔧 Features

- Secure file delivery with `Content-Disposition: attachment` headers
- Silent download triggered via JavaScript (no tab opened)
- Optional token or query parameter validation
- Compatible with static files and dynamic download endpoints

## 📁 Files

- `download.php` — Handles file validation and sends download headers
- `download.js` — Uses `fetch + Blob` or a direct anchor method to trigger download

## 🚀 Usage

1. Add `download.php` to your server and ensure target files are accessible.
2. Link `download.js` to your HTML and bind it to your download button.
3. Trigger the download programmatically: