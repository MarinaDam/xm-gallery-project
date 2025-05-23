# Use Node 18.19.0 base image
FROM node:18.19.0

# Install Chromium for Karma
RUN apt-get update && apt-get install -y chromium \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Set CHROME_BIN for Karma to use Chromium
ENV CHROME_BIN=/usr/bin/chromium

# Optional: Ensure Chromium dependencies
RUN apt-get update && apt-get install -y \
    libatk-bridge2.0-0 \
    libgtk-3-0 \
    libasound2 \
    libnss3 \
    libxshmfence1 \
    libx11-xcb1 \
    fonts-liberation \
    libappindicator3-1 \
    xdg-utils \
    chromium \
    --no-install-recommends && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

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

