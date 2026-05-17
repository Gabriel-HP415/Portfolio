# Stage 1: build static assets
FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
# npm install: lockfile may differ between Windows host and Linux container (optional native deps)
RUN npm install --no-audit --no-fund

COPY . .

# Vite bakes env at build time — pass key from docker compose / .env
ARG VITE_WEB3FORMS_ACCESS_KEY=""
ENV VITE_WEB3FORMS_ACCESS_KEY=$VITE_WEB3FORMS_ACCESS_KEY

RUN npm run build

# Stage 2: serve with nginx
FROM nginx:1.27-alpine AS production

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
