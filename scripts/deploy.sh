#!/bin/bash
# Deployment script for updating the webapp after changes
set -e

WEB_APP_DIR="/var/www/sigmrbyte-webapp"

# Pull latest changes
git pull

# Build frontend
cd frontend
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install 20
nvm use 20
npm run build
cd "$WEB_APP_DIR"

# Reload Nginx (if config changed)
sudo nginx -t && sudo systemctl reload nginx

# Renew SSL certificate (optional, safe to run anytime)
sudo certbot renew --quiet

echo "Deployment complete."
