FROM ubuntu
RUN apt update -y
RUN apt install apache2 -y
RUN apt install mysql-server -y
COPY * /var/www/html/
