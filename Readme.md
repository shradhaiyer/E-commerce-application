<h1> E Commerce Application </h1>
This is a fully functional e-commerce site which can be used as is or customized based on product requirements. 




### DEPENDENCIES
 - React 
 - Express
 - Braintree Account (https://www.braintreepayments.com/sales-apply)
 - Mongo DB Atlas Free Cluster (https://www.mongodb.com/basics/create-database) 


### STEPS TO REPRODUCE

1. Fork the repository
2. cd to server and run `npm i`
3. Create a braintree account and generate the following - `BRAINTREE_MERCHANT_ID`, `BRAINTREE_PUBLIC_KEY`, `BRAINTREE_PRIVATE_KEY`
4. Create a Mondo DB Cluster on Atlas and copy the cluster URI.
4 . Create a `.env`  file in server and attach the following Keys to it: 
    * MONGO_URI
    * JWT_SECRET 
    * REACT_APP_API_URL
    * BRAINTREE_MERCHANT_ID
    * BRAINTREE_PUBLIC_KEY
    * BRAINTREE_PRIVATE_KEY
    * PORT=8080
5. Run `npm start`. This should start your server
6. cd to client and run `npm i` 
7. Create a `.env`  file in server and attach the following Keys to it: 
     * REACT_APP_API_URL ( URL of the server)
8. Run `npm start`. This should start your client


### FINAL PRODUCT
USER SIGN IN/ SIGN UP:
![image](https://user-images.githubusercontent.com/66390588/222865349-1c0d0e66-e2dc-4b81-9593-b12ffe8dbdc2.png)

Main Shopping Page:
![image](https://user-images.githubusercontent.com/66390588/222868422-7c2c54af-a2da-441c-9e45-a7e8bebff352.png)

SEARCH FOR PRODUCTS:

![out](https://user-images.githubusercontent.com/66390588/222868578-9322c425-8466-4337-a968-33e9e32f1acd.gif)

GET RELATED PRODUCTS:
![image](https://user-images.githubusercontent.com/66390588/222868882-3329c9e9-8e2c-4078-b3a7-e517dae5a1a3.png)

ADD PRODUCTS TO CART:
![image](https://user-images.githubusercontent.com/66390588/222868977-8d98449a-95f0-48a6-a4a5-960951fad173.png)

Admin - Add Product:
![image](https://user-images.githubusercontent.com/66390588/222868836-767271fd-e567-4f4b-9e50-19ea7d1c7547.png)



