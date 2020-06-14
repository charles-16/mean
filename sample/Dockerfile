FROM node:11.15.0-alpine as build-step
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
CMD ng serve 

FROM nginx:1.16.0-alpine as prod-step
COPY --from=build-step /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

