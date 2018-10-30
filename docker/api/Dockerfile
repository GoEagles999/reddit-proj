FROM node:alpine
RUN mkdir -p /home/reddit
WORKDIR /home/reddit
COPY . /home/reddit
RUN npm install
RUN npm start
EXPOSE 3000