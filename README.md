# Full Stack Food Delivery Website/App

## Stack
- MongoDB
- Express
- React.js
- Node.js
- Stripe

## Application Link
[Tomato Food Delivery App](https://food-del-frontend-0ont.onrender.com/)

## Frontend
- Fully responsive frontend with redirects to multiple pages including login/signup, cart, and orders.
- Automatically sorted menu through item mapping depending on user food category input.
- Navbar with seamless scrolling to desired sections on the home page.
- Visually keeps track of the number of items of desired food in order (e.g., can add/subtract food item from order).

## Login/Signup
- Two separate components for login/signup.
- Automatically adds user to the database on successful signup and restricts signup if the email is already in the database.

## Cart
- All items added to the cart appear with quantity, price, total, and option to remove.
- After selecting 'Proceed to Checkout,' the user is redirected to the place order page where contact info and payment method are selected.

## Orders
- Once complete, the order is added to the database with the user's ID, and the order is automatically placed on the 'Orders' page.
- User has the option of selecting 'COD (Cash on Delivery)' which will immediately place the order and payment will be processed 'in person' OR 'STRIPE' which will redirect the user to Stripe's payment verification. If the latter option is selected, the order will only be placed if Stripe deems the payment successful.

## Admin
Consists of three tabs: Add Item, List Item, Orders.
- Includes functionality for admin to add new food items to the database/menu, view all items currently on the menu, and view all orders with the ability to update status.

### Add Item
- Add new item to the database including image, name, description, category, and price.
- Once added, the item is automatically displayed on the application under the set category.

### List Items
- View all items currently on the menu with respective data.
- Admin has the option to remove a food item from the database by selecting 'x' next to the food item.

### Orders
- View and track all active/completed orders placed in the frontend and currently in the database.
- Admin has the option to update delivery status which the user will be able to view in the frontend after selecting 'Track Order' on the orders page.

