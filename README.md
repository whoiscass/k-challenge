## Installation

```bash
$ npm install
```

## Running the app

```bash
# build and run docker containers
$ docker-compose up --build -V
```

## Endpoints

```bash
# CREATE USER
$ curl --location 'localhost:3001/auth/users' \
--header 'Authorization: "authorization field from login request"' \
--header 'Content-Type: application/json' \
--header 'Cookie: Authentication=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjI1OTk0MWY0YjIwNjI1ZDJjOTM4ZjEiLCJpYXQiOjE3MTM3NDAyMjgsImV4cCI6MTcxMzc0MzgyOH0.LP8Lzm2lMA5TIt-KRW4mLvbfBBz6KW_BBNtXdFwVMBs' \
--data-raw '{
    
    "name": "xxx",

    
    "email": "xxx@xxx.com",

    
    "password": "xxx"
}'
```
