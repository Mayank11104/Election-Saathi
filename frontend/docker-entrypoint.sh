#!/bin/sh
# Inject BACKEND_URL into nginx config at container startup
envsubst '${BACKEND_URL}' < /etc/nginx/nginx.conf.template > /etc/nginx/conf.d/default.conf
echo "Nginx config generated. BACKEND_URL=${BACKEND_URL}"
cat /etc/nginx/conf.d/default.conf
# Start nginx
exec nginx -g 'daemon off;'
