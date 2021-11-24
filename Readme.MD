# Assignment Update operators 
This assignment allows you to practice update operators. 😊

### Install the following modules: 
+ mongoose 
+ express
+ dotenv
+ cors

`npm install mongoose express dotenv cors`

### 1. Set up your server
Set up the `server.js` and configure everything accordingly. You will notice some things are missing, try to find what and wire up.


### 2. Assignment Update Operators 
Let's build our API for order management. The following functionality is required: 

#### Task 1. Inserting songs 
Create a new `post` route which allows you to ceate a new song into the database. 


#### Task 2. Update a song by ID  
Create a new `patch` route which allows you to update the song by ID.  

#### Task 3. List customers
Create a new `get` route which allows you to get a list from all the customers. 
Use the `limit` and `skip` methods to paginate the results. 

#### Task 4 . Inserting orders
Create a new `post` route which allows you to create a new order into the database. 
Make sure there's a reference to the User who ordered the order.

#### Task 5. List orders
Create a new `get` route which allows you to fetch a list of all the orders in the system. 
Use the `limit` and `skip` methods to paginate the results. 

#### Task 6. List orders by Customer
Create a new `get` route which allows you to fetch a list of all the orders by customer. Make sure you include the customer using the `populate` function.

Example of query using `skip`, `limit` and `populate`.
````javascript
    const results = await mySchema.find({})
    .populate('other')
    .skip(3)
    .limit(3)
````



