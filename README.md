# Advice Page

This project is a simple Next.js application that fetches advice from an API and displays it on a web page. The page has a button that allows you to fetch new advice from the API and dynamically changes the background color with each button click.

## Features

- Fetches advice from the API and displays it on the page.
- Changes the background color with each button click.
- Built with Next.js and Tailwind CSS.

## API

The application uses the [Advice Slip API](https://api.adviceslip.com/advice) to fetch random advice. The API provides random advice slips or allows you to retrieve specific advice by ID.

- Endpoint: `https://api.adviceslip.com/advice`
  - Makes a GET request to retrieve a random advice slip.
- Endpoint: `https://api.adviceslip.com/advice/{slip_id}`
  - Makes a GET request to retrieve a specific advice slip by ID.

## Color-Changing Background

The application features a color-changing background on each button click. When the button is clicked, a new background color is generated from a predefined set of colors using Tailwind CSS classes.

## Installation

1. Clone the repository.
2. Install the dependencies by running `npm install`.
3. Start the development server with `npm run dev`.

## Usage

1. Open the application in your browser.
2. Click the "Get New Advice" button to fetch new advice and see the background color change.
3. Repeat step 2 to fetch more advice and experience different background colors.

## Technologies Used

- Next.js: A React framework for building server-side rendered and static websites.
- Tailwind CSS: A utility-first CSS framework for building responsive and customizable user interfaces.

Feel free to explore and customize the code according to your needs.

