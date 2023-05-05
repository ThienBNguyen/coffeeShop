Coffee Shop E-commerce App https://trunghoa.netlify.app/
This is a Coffee Shop E-commerce application built using React.js for the frontend, Node.js with Express.js for backend routing, and MongoDB as the NoSQL database. 
The app allows users to select drinks and desserts, make purchases using Stripe API for payment, and view their purchased items in their user dashboard.

Features
User authentication: Users can sign up and log in to their accounts to make purchases.
Product selection: Users can browse and select drinks and desserts from the menu.
Shopping cart: Users can add items to their cart, view the cart, and make purchases.
Payment integration: Purchases are processed using Stripe API for secure and seamless transactions.
User dashboard: Users can view their purchase history and saved items in their dashboard.

Installation
Clone the repository: git clone https://github.com/ThienBNguyen/coffeeShop.git
Navigate to the project directory: 
Navigate to the frontend directory: cd client
Run npm install to install the required packages.
Install dependencies for the backend:
Navigate to the backend directory: cd server
Run npm install to install the required packages.
Set up MongoDB:
Install MongoDB and ensure it is running on your local machine.

Create a new MongoDB database.
Update the MongoDB connection string in backend/config/database.js.

Set up Stripe API:
Sign up for a Stripe account and obtain your API keys.
Update the Stripe API keys in frontend/src/components/PaymentView/PaymentForm.jsx.

Start the application:
In the frontend directory, run npm start to start the frontend server.
In the backend directory, run npm start to start the backend server.

Usage
Open your browser and navigate to http://localhost:3000 to access the Coffee Shop E-commerce application.
Sign up for a new account or log in if you already have one.
Browse the menu and add drinks and desserts to your cart.
Review your cart and proceed to the checkout page.

Enter your payment details and complete the purchase using Stripe.
After a successful purchase, you can view your order history and saved items in your user dashboard.

Contributing
Contributions are welcome! If you would like to contribute to this project, please fork the repository and create a new branch for your feature or bug fix. Submit a pull request with your changes, and we will review and merge it if it aligns with the project's goals.

License
This project is licensed under the MIT License. Feel free to modify and distribute it as per the license terms.
