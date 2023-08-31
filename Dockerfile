FROM node:18-alpine

ENV PORT=3030
ENV JSREPORT_URL=https://f869-154-0-10-27.ngrok-free.app/api/report
# Install system dependencies
RUN apk update
RUN apk add --no-cache \
    sudo \
    curl \
    build-base \
    g++ \
    libpng \
    libpng-dev \
    jpeg-dev \
    pango-dev \
    cairo-dev \
    giflib-dev \
    python3;

#  add glibc and install canvas
RUN apk update && apk upgrade 
RUN apk --no-cache add ca-certificates wget  
RUN wget -q -O /etc/apk/keys/sgerrand.rsa.pub https://alpine-pkgs.sgerrand.com/sgerrand.rsa.pub 
RUN wget https://github.com/sgerrand/alpine-pkg-glibc/releases/download/2.29-r0/glibc-2.29-r0.apk 
RUN apk add --force-overwrite glibc-2.29-r0.apk 

WORKDIR /converter-pdf-png

COPY package*.json ./

# Install app dependencies
RUN npm install canvas
RUN npm install

# Bundle app source
COPY . .

EXPOSE 3030

CMD ["npm", "start"]
