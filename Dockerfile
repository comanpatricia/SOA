FROM php:7.4-apache
COPY ./src/ /var/www/html/
COPY ./default.conf /etc/apache2/sites-available/
RUN a2enmod proxy proxy_http
RUN a2ensite default