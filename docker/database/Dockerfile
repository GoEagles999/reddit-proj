FROM mysql:8.0
RUN mkdir -p /home/reddit
WORKDIR /home/reddit
COPY . /home/reddit
CMD ['./init-data']