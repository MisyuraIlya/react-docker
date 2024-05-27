FROM node:lts-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL
COPY . .
RUN REACT_APP_API_URL=${REACT_APP_API_URL} npm run build
CMD ["npx", "serve", "-s", "build", "-l", "3000"]
