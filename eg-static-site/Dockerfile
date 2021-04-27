FROM nginx:latest
EXPOSE 80
# COPY nginx.conf /etc/nginx/nginx.conf
COPY ./static /var/www
CMD ["nginx", "-g", "daemon off;"]
