# Assignment Update operators 
This assignment allows you to practice update operators. 😊

### Install the following modules: 
+ mongoose 
+ express
+ dotenv
+ cors

`npm install mongoose express dotenv cors`

### 1. Set up your server
Set up the `server.js` and configure everything accordingly.Add a new songRoutes and wire it up with the server. 

### 2. Assignment Update Operators 
We will practice the update operators.

#### Task 1. Inserting songs 
Create a new `post` route which allows you to ceate a new song into the database. 

#### Task 2. Update a song by ID  
Create a new `patch` route which allows you to update the song by ID. Make sure all fields can be updated except the `tags`.  

#### Task 3. Update the tags array of a song by ID
Create a new `patch` route which allows you to add tags to the array. Make sure that each tag can only be added once. 

Tip: 

````javascript 


````


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



