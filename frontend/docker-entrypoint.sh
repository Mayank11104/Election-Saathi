#!/bin/sh
# Inject BACKEND_URL into nginx config at container startup
# Only replace ${BACKEND_URL} — leave nginx vars like $uri, $host untouched
envsubst '${BACKEND_URL}' < /etc/nginx/nginx.conf.template > /etc/nginx/conf.d/default.conf
echo "Nginx config ready. BACKEND_URL=${BACKEND_URL}"
# Start nginx in foreground (required for Docker)
exec nginx -g 'daemon off;'
