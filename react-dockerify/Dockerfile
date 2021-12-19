# To run this file, use the following commands:
# To Build -> "docker build -t [name] ."
# To Run -> "docker run -it [name] sh"   
# (where sh means shell, because alpine uses shell. Allow us to run it in shell session form.)
# To Start -> "docker run [name] npm start"

# alphine does not come with many features like bash. It uses shell in behind. 
# So if you get an error, when you are working with bash thats reason for it.

FROM node:16.13.1-alpine3.14
RUN addgroup app && adduser -S -G app app
USER app
WORKDIR /app
RUN mkdir data
# COPY package*.json .
COPY --chown=app:node package*.json .
RUN npm install --log-level=warn
# COPY . . 
COPY --chown=app:node . .
ENV API_URL=http://api.myapp.com/
EXPOSE 3000

# Shell form
# /bin/sh (linux)
# cmd (windows)

# "CMD npm start"

# Exec form
CMD [ "npm", "start" ]
ENTRYPOINT [ "npm", "start" ]

# The above code select all files in the directory
# You can also mention like this "COPY . /app/"
# "COPY ["hello world.txt", "."]"  // for selecting few files in directory
# "ADD file.zip ." --> it will unzipped for us.
# "ADD" used for many purposes like add data from external url like it. 
# But "COPY" is a usual way to adding files and directories into an image.

# Notes
# Stable Instruction should be on top and changing Instructions should be on bottom in dockerfile
