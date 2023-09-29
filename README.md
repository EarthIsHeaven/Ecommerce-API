# Ecommerce-API

This is a ecommerce website where users can : - 

Manage products:

I have used mangoose for storing name, description, price, stock quantity, categories, and images. I have also implemented CRUD (Create, Read, Update, Delete) operations for managing products. The API endpoints is created for adding, updating, deleting, and fetching product data. 

Shopping Cart Functionality: 

Users can Implement features like adding/removing items, updating quantities, and calculating the total price.

How to use this API?


1. Endpoints for Product Management: 

GET "/posts"

This endpoint is used to retrieve a list of all products/items present in the database or store. 

GET "/posts/:id"

This endpoint allows clients to retrieve information about a specific item by providing its unique identifier (ID) as a parameter in the URL. 

POST "/posts"

Clients can use this endpoint to add a new item to the database or store. They would typically send a JSON payload with the details of the new item in the request body. This is how new products are added to the catalog.

PATCH "/posts/:id"

This endpoint is used to update the details of a specific item. Clients would provide the ID of the item they want to update in the URL and send the updated information in the request body. 

DELETE "/posts/:id"

Clients can use this endpoint to remove a specific item from the database or store. The ID of the item to be deleted is provided as a parameter in the URL. 


2. Endpoints for Shopping Cart Functionality: 

POST "/addToCart/:id"

This endpoint is related to managing a user's shopping cart. When a client wants to add a specific item to their cart, they can make a POST request to this endpoint with the item's ID. 

DELETE "/addToCart/:id"

Clients can use this endpoint to remove a specific item from their shopping cart. By providing the item's ID in the URL, the server knows which item to remove from the user's cart.

PATCH "/addToCart/:id"

This endpoint allows clients to update the quantity of a product in their shopping cart. When the user wants to change the quantity, they can send a request to this endpoint with the item's ID and the new quantity. The server will adjust the price accordingly.


3. Endpoints for Order Processing:

POST "/buyNow/:id"

This endpoint is used to initiate the purchase of items in a user's shopping cart. When the user is ready to make a payment, they can use this endpoint to move the items from their cart to a "buy" database or page. This step typically precedes the actual payment processing.