# Tienes que tener buildeado el proyecto usar [ng build]
FROM nginx:alpine
LABEL authors="ecortez"

COPY dist usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
