FROM node:14
WORKDIR /usr/src/app
RUN apt-get update && apt-get install -y git
RUN git clone https://github.com/tonyfgr/express.git .
RUN npm install
EXPOSE 9000
CMD ["node", "index.js"]