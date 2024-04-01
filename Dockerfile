# Utiliza una imagen base de Node.js para construir tu aplicación SPA
FROM node:alpine as build-stage

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Ahora, cambia a usar la imagen base de Nginx para servir la aplicación
FROM nginx:alpine

# Copia los archivos construidos de la SPA al directorio de Nginx
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Aquí es donde copias tu archivo de configuración de Nginx personalizado
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
