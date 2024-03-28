# Use a Node.js runtime as the base image for the build stage
FROM node:20-alpine as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app
RUN yarn run build

# Use nginx as the base image for serving static files
FROM nginx:alpine

# Set the working directory in the nginx container
WORKDIR /usr/share/nginx/html

# Copy the built React app from the previous stage (build stage) to the nginx server directory
COPY --from=build /app/dist .

# Expose port 80 to the outside world
EXPOSE 80

# Command to start nginx server
CMD ["nginx", "-g", "daemon off;"]
