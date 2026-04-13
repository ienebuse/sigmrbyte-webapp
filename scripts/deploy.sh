#!/bin/bash
# Deployment script for updating the webapp after changes
set -e


WEB_APP_DIR="/var/www/sigmrbyte-webapp"

# Go to project directory and pull latest changes
cd "$WEB_APP_DIR"
git pull

# Build frontend


cd frontend
export NVM_DIR="$HOME/.nvm"
if [ ! -s "$NVM_DIR/nvm.sh" ]; then
	curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
fi
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm install 20
nvm use 20
npm run build
cd "$WEB_APP_DIR"


# Restart Nginx (if config changed)
sudo nginx -t && sudo systemctl restart nginx

# Renew SSL certificate (optional, safe to run anytime)
sudo certbot renew --quiet

echo "Deployment complete."
