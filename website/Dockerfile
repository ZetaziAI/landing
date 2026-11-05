FROM node:22-slim AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:22-slim AS runner

WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3030

COPY --from=builder /app ./

EXPOSE 3030

CMD ["npx", "vinext", "start", "-p", "3030", "-H", "0.0.0.0"]
