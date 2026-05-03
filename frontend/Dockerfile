# ── Frontend Dockerfile (multi-stage) ───────────────────────────────────────
# Stage 1 — Build the React app
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2 — Serve with Nginx on port 8080
FROM nginx:alpine

# Remove default config
RUN rm /etc/nginx/conf.d/default.conf

# Copy built assets
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy startup script that substitutes BACKEND_URL and starts nginx
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

# Copy nginx template
COPY nginx.conf.template /etc/nginx/nginx.conf.template

EXPOSE 8080

CMD ["/docker-entrypoint.sh"]
