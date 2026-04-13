#!/bin/bash
# Predeployment script for initial server setup
set -e

echo "===== Update and install dependencies ====="
sudo apt update && sudo apt upgrade -y
sudo apt install -y nginx certbot python3-certbot-nginx git nodejs npm

echo "===== Clone the repo (if not already cloned) ====="
git clone git@github.com:ienebuse/sigmrbyte-webapp.git /var/www/sigmrbyte-webapp || true
cd /var/www/sigmrbyte-webapp

echo "===== Build frontend ====="
cd frontend
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install 20
nvm use 20
npm run build
cd ..

echo "===== Set up Nginx config ====="
if grep -q '^user' nginx/nginx.conf; then
	echo "ERROR: nginx/nginx.conf contains a 'user' directive. Only server blocks are allowed in site configs. Please remove it."
	exit 1
fi

sudo cp nginx/nginx.conf /etc/nginx/sites-available/sigmrbyte
sudo ln -sf /etc/nginx/sites-available/sigmrbyte /etc/nginx/sites-enabled/sigmrbyte
sudo nginx -t
sudo systemctl restart nginx

# Obtain SSL certificate (replace with your domain)
sudo certbot --nginx -d sigmrbyte.com -d www.sigmrbyte.com --non-interactive --agree-tos -m your@email.com

echo "===== Enable firewall (optional) ====="
sudo ufw allow 'Nginx Full'
sudo ufw enable

echo "===== Initial setup complete ====="
