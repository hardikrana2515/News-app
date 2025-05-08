# NewsPulse

NewsPulse is a modern news application built using React, Tailwind CSS, and React Router. It fetches real-time news from the NewsAPI and provides a seamless user experience with features like category filtering, pagination, and a responsive design.

## Features

- **Real-Time News**: Fetches the latest news using the NewsAPI.
- **Category Filtering**: Browse news by categories such as Business, Entertainment, Health, Science, Sports, and Technology.
- **Pagination**: Smooth navigation between pages of news articles.
- **Responsive Design**: Optimized for all screen sizes using Tailwind CSS.
- **Search Functionality**: Quickly search for news articles.
- **Loading Spinner**: Displays a spinner while fetching data.
- **Fallback Message**: Alerts users if there is an issue with the internet connection.

## Project Structure
📁 tailwind-app/
├── 📄 .gitignore
├── 📄 eslint.config.js
├── 📄 index.html
├── 📄 package.json
├── 📄 README.md
├── 📄 vite.config.js

├── 📁 public/
│   ├── 📄 vite.svg
│   └── 📁 images/
│       └── 🖼️ ChatGPT Image Apr 15, 2025, 03_30_56 PM.png

├── 📁 src/
│   ├── 📄 .env.local               # Environment variables (API keys etc.)
│   ├── 📄 App.css                 # Global CSS
│   ├── 📄 App.jsx                 # Root React component
│   ├── 📄 index.css               # Tailwind + Base styles
│   ├── 📄 main.jsx                # React DOM entry point

│   ├── 📁 assets/                 # Static assets like PDFs, logos, SVGs
│   │   ├── 📄 BE-SEM6REGULARSUMMEREXAMINATION-2025_220170107118.pdf
│   │   ├── 🖼️ ChatGPT Image Apr 15, 2025, 03_32_57 PM.png
│   │   └── 📄 react.svg

│   └── 📁 components/             # App Components
│       ├── 📄 About.jsx           # About page
│       ├── 📄 navbar.jsx          # Navbar with search input
│       ├── 📄 News.jsx            # News fetcher and renderer
│       ├── 📄 NewsItem.jsx        # Single news card
│       └── 📄 spinner.jsx         # Loading spinner

## Installation and Setup
 Clone the repository:
   ```bash
   git clone <repository-url>
   cd tailwind-app
   npm install
   npm run dev
   ```
You can replace `<repository-url>` with the actual URL of your Git repository if applicable.

>Scripts
npm run dev: Starts the development server.
npm run build: Builds the app for production.
npm run preview: Previews the production build.
npm run lint: Runs ESLint to check for code quality issues.
Technologies Used
React: For building the user interface.
Tailwind CSS: For styling the application.
React Router: For routing and navigation.
NewsAPI: For fetching real-time news data.

>Components
Navbar: Contains navigation links and the search bar.
News: Fetches and displays news articles.
NewsItem: Represents a single news article.
Search: Provides a search bar for filtering news.
Spinner: Displays a loading spinner while fetching data.
About: Displays information about the app and its developer.

>React Components and Hooks
This project utilizes functional components and React hooks such as `useState` and `useEffect` to manage state and side effects efficiently.

>Developer
This project is developed and maintained by Hardik Rana, a third-year Computer Engineering student, NCC cadet.


