FROM nginx:1.17.6-alpine
ENV NGINX_PORT 80
ENV HOSTNAME docker

COPY nginx.conf /etc/nginx/nginx.conf
RUN rm -fr /etc/nginx/conf.d
COPY conf.d /etc/nginx/conf.d
#NGINX_HOST=foobar.com

