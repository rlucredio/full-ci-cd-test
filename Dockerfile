FROM node:alpine

# Set workdir
WORKDIR /usr/src/app

# Copy app
COPY . .

ENV NODE_ENV dev

# Install dependencies
##RUN npm install --production --silent && mv node_modules ../
RUN npm install --silent

# Expose port
EXPOSE 1337

#Launch App
CMD ["npm", "start"]
