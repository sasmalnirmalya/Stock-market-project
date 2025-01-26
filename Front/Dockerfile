# Use the official Node.js image as the base image
FROM node:16 AS build

# Set the working directory
WORKDIR /usr/local/app

# Copy package.json and package-lock.json
COPY ./ /usr/local/app/

# Install dependencies
RUN npm install

# Copy the rest of the application code
#COPY . .

# Build the application
RUN npm run build

FROM nginx:latest

# Specify the command to run the application
COPY --from=build /usr/local/app/dist/front /usr/share/nginx/html

EXPOSE 80
