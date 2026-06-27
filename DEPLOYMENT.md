# Deployment Guide for Hostinger

## Prerequisites
- Node.js 18+ and pnpm installed locally
- Hostinger account with FTP access
- FTP client (FileZilla, WinSCP) or Hostinger File Manager

## Local Build

```bash
# Install dependencies
pnpm install

# Build the project
pnpm build
```

The optimized build will be in `artifacts/web-app/dist/`

## Upload to Hostinger

### Option 1: Using Hostinger File Manager (Easiest)
1. Log into Hostinger control panel
2. Go to File Manager
3. Navigate to your public_html folder (or desired subdirectory)
4. Upload all files from `artifacts/web-app/dist/` to this folder
5. Ensure `.htaccess` file is present (see below)

### Option 2: Using FTP
1. Connect via FTP using credentials from Hostinger
2. Navigate to public_html
3. Upload all files from `artifacts/web-app/dist/`
4. Upload `.htaccess` file

## .htaccess Configuration

Create `.htaccess` in your public_html (or deployment directory):

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Enable GZIP compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html
  AddOutputFilterByType DEFLATE text/plain
  AddOutputFilterByType DEFLATE text/xml
  AddOutputFilterByType DEFLATE text/css
  AddOutputFilterByType DEFLATE text/javascript
  AddOutputFilterByType DEFLATE application/xml
  AddOutputFilterByType DEFLATE application/xhtml+xml
  AddOutputFilterByType DEFLATE application/rss+xml
  AddOutputFilterByType DEFLATE application/javascript
  AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Enable browser caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresDefault "access plus 1 year"
  ExpiresByType text/html "access plus 1 day"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType image/* "access plus 1 year"
</IfModule>
```

## Verify Deployment

1. Visit your domain in browser
2. Test navigation (all routes should work)
3. Check console for errors (F12 → Console tab)
4. Test on mobile devices

## Troubleshooting

### Blank Page
- Check browser console for errors
- Verify all files were uploaded
- Check `.htaccess` is present

### 404 Errors on Navigation
- Ensure `.htaccess` is uploaded and configured correctly
- Verify mod_rewrite is enabled on Hostinger

### Slow Loading
- Verify GZIP compression is enabled in `.htaccess`
- Check browser cache (hard refresh: Ctrl+Shift+R)
- Enable caching rules in `.htaccess`

## Updating the Site

1. Make changes locally
2. Run `pnpm build`
3. Re-upload files from `artifacts/web-app/dist/` to Hostinger
4. Clear browser cache and refresh
