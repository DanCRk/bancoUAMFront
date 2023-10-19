FROM node:20.5.0-alpine3.18
RUN addgroup react && adduser -S -G react react
USER react
WORKDIR /app/
COPY --chown=react package*.json .
RUN npm install --force
COPY --chown=react . .
EXPOSE 4200
CMD ["npm", "start"]