# E-Commerce Cart Project

## Overview
This is a modern React-based e-commerce application with a fully functional shopping cart. The project uses **Zustand** for simple, performant, and persistent state management. The application is deployed on Netlify.

## Technologies Used
- **React** — Frontend library
- **Zustand** + **persist** middleware — State management (with localStorage persistence)
- **Vite** — Build tool and development server
- **Netlify** — Deployment platform

## Project Setup

### Prerequisites
- Node.js (version 18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repository-url>
   cd <project-folder>

Install dependencies:Bashnpm install
Run the development server:Bashnpm run dev
Open your browser and go to http://localhost:5173 (or the port shown in your terminal).

Build for Production
Bashnpm run build
The production build will be generated in the dist/ folder.
Deployment
This project is deployed on Netlify.

Build Command: npm run build
Publish Directory: dist

## Features

- Add items to cart (automatically handles duplicate items by increasing quantity)
- Remove items from cart
- Update item quantity
- Clear entire cart
- Real-time calculation of total price and total number of items
- Cart data persists across browser sessions using localStorage