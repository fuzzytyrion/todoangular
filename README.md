# create user defined bridge

docker network create pup-net

# connect sql db to network

docker network connect pup-net azuresqledge

# build the api
# in api folder:

docker build -f DockerFile -t todo-api . 

# run api on network

docker run -d --name api-net --network pup-net -p 8000:80 todo-api

# build angular app
# in todo-app folder

docker build -f DockerFile -t todo-app .

# run angular app on network

docker run -d --name app-net -p 5001:80 todo-app