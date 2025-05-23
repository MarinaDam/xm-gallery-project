# Use Node 18.19.0 base image
FROM node:18.19.0

# Set working directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Run unit tests (optional — can also run this via CI)
RUN npm test

# Expose Angular dev server port
EXPOSE 4200

# Start Angular app
CMD ["npm", "start"]
