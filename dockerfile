# get base image 
FROM node:20-alpine

# set the working directory 
WORKDIR /app 

# copy the package.json file
COPY package*.json ./ 

# install dependencies
RUN npm install 

# copy the sourse code 
COPY . .

# expose the port
EXPOSE 5000

# start the app
CMD [ "npm" , "start" ]