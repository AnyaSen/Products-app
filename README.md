# Products app

<p align="center">
<img  src="./frontend/public/favicon.svg" width="100" alt='Product page' 
</p>

## Description

The microservice provides a list of available products and allows to add new products to the list. Each product has its name, price, and description. Additionally, a product may have one of three tags assigned (Gluten-free, Lactose-free, or Vegan). This app adapts to several screen sizes.

On the front page, a list of products is shown, to access more information about a product, click on it. To create a new product, click the plus button located in the header, a form will appear. Fill in the form and submit the product by pressing an orange button with a tick. You will be redirected to the product list, where the new product will be displayed.

## Demo link

> The app is deployed on Heroku, and it may take some time to initially load the application.

[Click to go to demo](https://manageproductsmicroservice.herokuapp.com/)

## Technologies used

The page was built utilizing the following technologies:

- React
- Redux
- Node.js
- Express
- MongoDB
- Mongoose
- TypeScript
- JavaScript
- Sass (scss)
- Cypress
- Heroku

The app was end-to-end tested with Cypress.

## How to get the app locally?

1. `git clone https://github.com/AnyaSen/Products-app.git`

2. `cd Products-app && npm install`

3. `cd frontend && npm install`

4. Add .env file (provided by email) to the root

5. From the root: `npm run dev`

## How to test the app locally?

Run E2E tests (from the root): `npm run cypress` (The app should be running)

Test app manually: please find a demo folder containing a mock product image and info at the root.
