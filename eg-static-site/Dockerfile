FROM nginx:latest
EXPOSE 80
# COPY nginx.conf /etc/nginx/nginx.conf
COPY ./static /var/www
CMD ["nginx", "-g", "daemon off;"]
# dsx move daemon off to config file
