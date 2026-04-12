#!/bin/bash
# Deployment script for updating the webapp after changes
set -e

# Pull latest changes
git pull

# Build frontend
cd frontend
npm install
npm run build
cd ..

# Reload Nginx (if config changed)
sudo nginx -t && sudo systemctl reload nginx

# Renew SSL certificate (optional, safe to run anytime)
sudo certbot renew --quiet

echo "Deployment complete."
