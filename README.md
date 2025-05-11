# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

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
