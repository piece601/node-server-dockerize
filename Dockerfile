FROM node:12.5.0
COPY webserver.js /app/
WORKDIR /app
CMD node webserver.js
