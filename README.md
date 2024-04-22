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
--data-raw '{
    
    "name": "xxx",

    
    "email": "xxx@xxx.com",

    
    "password": "xxx"
}'

# LOGIN
$ curl --location 'localhost:3001/auth/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    
    "email": "qqq@qqq.com",

    
    "password": "qqq"
}'

# CREATE PRODUCT
$ curl --location 'localhost:3002/products' \
--header 'Authorization: "authorization field from login request"' \
--header 'Content-Type: application/json' \
--data '{
    
  "name": "",

  
  "sku": "",

  
  "price": 0
}'

# GET ALL PRODUCTS
$ curl --location 'localhost:3002/products' \
--header 'Authorization: "authorization field from login request"' \
--data ''

# GET ORDER'S PRODUCTS BY SKU
$ curl --location 'localhost:3002/products/order?sku=sku1%sdk2' \
--header 'Authorization: "authorization field from login request"' \

# GET ALL ORDERS
$ curl --location 'localhost:3000/orders' \
--header 'Authorization: "authorization field from login request"' \

# GET ORDER BY ID
$ curl --location 'localhost:3000/orders/:id' \
--header 'Authorization: "authorization field from login request"' \

# GET LAST MONTH TOTAL SOLD PRICE
$ curl --location 'localhost:3000/orders/total' \
--header 'Authorization: "authorization field from login request"' \

# GET HIGHER AMOUNT ORDER
$ curl --location 'localhost:3000/orders/higher-order' \
--header 'Authorization: "authorization field from login request"' \
```
