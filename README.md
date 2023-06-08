# Weather App

This is a Weather App built with Nuxt.js, Tailwind CSS, and Pinia.

Features

- Get the current weather for any location by searching for a city.
- View the 3-day forecast for any location.

## App Screenshot

![app-screenshot](https://github.com/zynpcelik/Weather-app/blob/master/assets/screenshots/weatherAppScreenshot.png)

## Getting Started

To get started with the project, clone the repository and install the dependencies:

    git clone https://github.com/zynpcelik/Weather-app.git.
    cd Weather-app
    yarn install

Create a .env file in the root of the project with the following contents:

    API_KEY=<your Weather API key>

Start the development server :

    yarn dev

Visit http://localhost:3000/ in your browser.

## Deployment

To deploy this app, you can follow these steps:

Build the app for production:

    yarn build

Optionally, you can also generate a static version of the app:

    yarn generate

API

This app uses the weatherapi to retrieve weather data. You will need to create an account to obtain an API key.

License

This project is licensed under the MIT License.
