# declare latest version for node js
FROM node:latest

# Create app directory
WORKDIR /whale

# Copy package.json and package-lock.json
COPY . . 

# Install app dependencies
RUN npm install

# 3000 is the port that the app runs on
EXPOSE 3000

# Run the app
CMD ["npm","run" ,"dev"]
