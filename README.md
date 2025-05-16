## Build Steps

1. **Clone the repository**: Clone the repository using the following command: `git clone https://

2. **Install dependecies**:
   npm install

3. **FireBase configuration**

- This project uses Firebase for backend services. To run this project locally, you'll need to set up your own Firebase project and add the configuration to a
  `.env` file. Follow these steps:

  - Create a `.env` file in the root directory of the project.
  - Add the following configuration to the `.env` file:
    ```
    VITE_FIREBASE_API_KEY=your_firebase_api_key
    ```
  - Replace `your_firebase_api_key` with your actual Firebase API key.

  - Alternatively, You can copy the code from `.env-sample` file in the root directory of the project and replace with your actual Firebase API key.

4. **Start the Client**: It will run on localhost: 5173 . Start the application using the following command:
   npm run dev

5. **Set up Stripe Payment API keys**: SIgn up for the Stripe Accoutn and get your API Keys.

- Add your Stripe API keys to the .env file in the server folder of the project.
- Add the code mentioned below in .env file.
  STRIPE_SECRET_KEY= `Your Stripe secret Key`
- Replace `Your Stripe secret Key` with your actual Stripe secret key.

6. **Start the Server**: Start the server in different terminal and keep it running. It will run on localhost port 4242

   cd server
   node server.js

7. **Open the browser**: Open the browser and navigate to
   `http://localhost:5173/`

## Requirements/Purpose of Project

# React e-cShop Website

## Outline

This project is designed to reinforce your React learnings and make sure that you are comfortable with most aspect of the framework.
With this project you will practice how to:

- Fetch Data within a React App
- Use react-router
- Use Firebase/Firestore

## MVP

At a minimum your e-shop website should have Three pages:

- Home Page

  - This will contain:
    - A Grid of products
    - Carousel of featured products
      - Firstly, manually put some info in
      - Next step, dynamically load products that have isFeatured: true

- Product Page (with id parameter) Similar to a product page on another site, allows you to add to cart and select product variants

  - All products should be stored in Firestore:
  - You should store the following information:
    - quantity
    - variants (could be colors, sizes, etc)
    - price per unit
    - name
    - image url
    - favourited or not (boolean)
      All data should be stored in Firestore and fetched by the frontend, there should be NO static product data in the react application

- Cart
  - A list of all products added to the user's cart and a total price
  - You should not be able to add more items than are in stock to the cart
  - You may want to adjust quantity of products from the Cart page
  - You should be able to remove products from the cart

## Bonus

- Implement Stripe "Payment" with a developer account

  - Remove items from stock when paid for

- TIPS :

1. Make sure your site is scoped to one category of products
2. When stripe is in test mode you can use `4242 4242 4242 4242` as a valid credit card number.
3. The more cart stuff you do the more opportunity to showcase business logic

- This will seperate you from other devs

## Useful links

- [React-router-dom](https://reactrouter.com/docs/en/v6/getting-started/overview)
- [Dummy JSON](https://dummyjson.com/)
- [Fake Store](https://fakestoreapi.com/)
