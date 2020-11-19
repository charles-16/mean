FROM node:11.15.0-alpine as build-step
WORKDIR /app
COPY package.json ./
RUN npm install
#RUN npm install -g @angular/cli@v12.0.0
COPY . .

# generate build
CMD ng build --output-path=dist/sift-bias

#CMD ng serve 

FROM nginx:1.16.0-alpine as prod-step
COPY --from=build-step /app/dist/sift-bias /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

