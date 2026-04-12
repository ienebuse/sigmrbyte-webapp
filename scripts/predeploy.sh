#!/bin/bash
# Predeployment script for initial server setup
set -e

echo "===== Update and install dependencies ====="
sudo apt update && sudo apt upgrade -y
sudo apt install -y nginx certbot python3-certbot-nginx git nodejs npm

# Clone the repo (if not already cloned)
# git clone <YOUR_REPO_URL> /var/www/sigmrbyte-webapp
# cd /var/www/sigmrbyte-webapp

echo "===== Build frontend ====="
cd frontend
npm install
npm run build
cd ..

echo "===== Set up Nginx config ====="
sudo cp nginx/nginx.conf /etc/nginx/sites-available/sigmrbyte
sudo ln -sf /etc/nginx/sites-available/sigmrbyte /etc/nginx/sites-enabled/sigmrbyte
sudo nginx -t
sudo systemctl reload nginx

# Obtain SSL certificate (replace with your domain)
sudo certbot --nginx -d sigmrbyte.com -d www.sigmrbyte.com --non-interactive --agree-tos -m your@email.com

echo "===== Enable firewall (optional) ====="
sudo ufw allow 'Nginx Full'
sudo ufw enable

echo "===== Initial setup complete ====="
