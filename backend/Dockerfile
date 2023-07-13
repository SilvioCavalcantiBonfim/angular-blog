FROM node:20-alpine As development

# Create app directory
WORKDIR /home/node/backend
# Copy application dependency manifests to the container image.
# A wildcard is used to ensure copying both package.json AND package-lock.json (when available).
# Copying this first prevents re-running npm install on every code change.
COPY --chown=node:node package*.json ./

ENV DATABASE_URL=mysql://root:root@db:3306/blog
# Install app dependencies using the `npm ci` command instead of `npm install`
RUN npm ci

COPY --chown=node:node . .

# RUN apt-get update -y && apt-get install -y openssl

# RUN npm install prisma

RUN npx prisma generate

# Bundle app source
# Use the node user from the image (instead of the root user)
USER node

###################
# BUILD FOR PRODUCTION
###################

FROM node:20-alpine As build

WORKDIR /home/node/backend

COPY --chown=node:node package*.json ./

# In order to run `npm run build` we need access to the Nest CLI which is a dev dependency. In the previous development stage we ran `npm ci` which installed all dependencies, so we can copy over the node_modules directory from the development image
COPY --chown=node:node --from=development /home/node/backend/node_modules ./node_modules

COPY --chown=node:node . .

# Run the build command which creates the production bundle
RUN npm run build

# Set NODE_ENV environment variable
ENV NODE_ENV production

# Running `npm ci` removes the existing node_modules directory and passing in --only=production ensures that only the production dependencies are installed. This ensures that the node_modules directory is as optimized as possible
RUN npm ci --only=production --omit=dev && npm cache clean --force

USER node

###################
# PRODUCTION
###################

FROM node:20-alpine As production

# RUN apt-get update -y && apt-get install -y openssl
# Copy the bundled code from the build stage to the production image
COPY --chown=node:node --from=build /home/node/backend/node_modules ./node_modules
COPY --chown=node:node --from=build /home/node/backend/dist ./dist
ENV DATABASE_URL=mysql://root:root@db:3306/blog
# Start the server using the production build