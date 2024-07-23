# FULL STACK FOOD DELIVERY WEBSITE/APP  

Stack: MongoDB, Express, React.js, Node.js, Stripe

Application Link: [Tomato Food Delivery App](https://food-del-frontend-0ont.onrender.com/)

## FRONTEND:  

  - fully responsive frontend with redirects to mulitple pages including login/signup, cart & orders
  - automatic sorted menu through item mapping depending on user food category input
  - navbar with seamless scrolling to desired section on home page
  - visually keeps track of number of items of desired food in order (ie. can add/subtract food item from order)

  ### LOGIN/SIGNUP:  
  
    - two separate components for login/signup
    - automatically adds user to database on successful signup and restricts signup if email already in database
    
  ### CART:  
  
    - all items added to cart appear with quantity, price, total & option to remove
    - after selecting 'Proceed to Checkout', user is redirected to place order page where contact info and payment method is selected
  
  ### ORDERS:  
  
    - Once complete, the order is added to the database with the user's ID and the order is automatically placed on the 'Orders' page
    - User has option of selecting 'COD (Cash on Delivery)' which will immediately place the order and payment will be processed 'in person' OR 'STRIPE' which will redirect the user to Stripe's payment verification. If the later option is selected, the order will only be placed if Stripe deems the payment successful

## ADMIN:  

  - consists of three tabs (Add Item, List Item, Orders)
  - includes functionality for admin to add new food items to database/menu, view all items currently on menu, and view all orders with the ability to update status

  ### ADD ITEM:  
  
    - add new item to database including image, name, description, category, price
    - once added, item is automatically displayed on application under set category

  ### LIST ITEMS:  
  
    - view all items currently on menu with respective data
    - admin has option to remove food item from database by selecting 'x' next to food item

  ### ORDERS:  
  
    - view and track all active/completed orders placed in frontend and currently in database
    - admin has option to update delivery status which the user will be able to view in the frontend after selecting 'Track Order' on orders page
