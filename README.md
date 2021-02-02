# Products app

<p align="center">
<img  src="./frontend/public/favicon.svg" width="100" alt='Product page' 
</p>

## Description

The microservice provides a list of available products and allows to add new products to the list. Each product has its name, price, and description. Additionally, a product may have one of three tags assigned (Gluten-free, Lactose-free, or Vegan).

On the front page, a list of products is shown, to access more information about a product, click on it. To create a new product, click the plus button located in the header, a form will appear. Fill in the form and submit the product by pressing an orange button with a tick. You will be redirected to the product list, where the new product will be displayed.

## Demo link

[Click to go to demo](https://manageproductsmicroservice.herokuapp.com/)

<!-- ## Demo video

[Click to watch the video]()

<a href=''><img src='' alt='Video image'></a> -->

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

The app was tested with Cypress.

## How to get the app locally?

1. `git clone https://github.com/AnyaSen/Products-app.git`

2. `npm install`

3. `cd frontend` and `npm install`

4. From the root: `npm run dev`

_To run tests: `npm run cypress`_
