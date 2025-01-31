# GadgetHeaven ✨

Welcome to **GadgetHeaven**, your one-stop destination for the latest and most innovative gadgets! This responsive e-commerce platform allows users to explore, purchase, and wishlist a variety of gadgets with a seamless and engaging shopping experience. The site is designed with a structured navigation system, categorized product listings, and persistent user data management for a smooth shopping journey.

## 🌐 Live Website
**Live Site:** [GadgetHeaven on Surge](https://srk-gadget-heaven.netlify.app/)

## 📑 Project Overview
**GadgetHeaven** follows a **modern UI/UX** based on a detailed **Figma design**, ensuring a structured and visually appealing experience for users. The application includes a robust navigation system, product filtering, and shopping functionalities such as a wishlist and cart with data persistence.

## 🎯 Key Features
### 🛒 Smart Shopping Experience
- **Dynamic Navigation:** Structured navbar with active route indicators.
- **Gadget Categories:** Sidebar for filtering products by category.
- **Detailed Product Pages:** Each gadget features specifications, pricing, and buttons for cart/wishlist actions.
- **Wishlist & Cart Management:** Persistent cart and wishlist with total price calculation and sorting functionality.
- **Error Handling:** Custom **404 page** and edge case management.

### 📊 Interactive Dashboard
- **View & Manage Wishlist & Cart:** Users can toggle between the two tabs.
- **Sort Cart by Price:** Sort items in descending order.
- **Total Price Calculation:** Displays the total price of selected items.

### 🚀 Additional Enhancements
- **Toast Notifications:** Alerts for key actions like adding items to cart and wishlist.
- **Purchase Confirmation Modal:** Displays a message and redirects users after a successful purchase.
- **Statistics Page (Optional):** Provides a composed chart displaying product prices and ratings for user insights.

## 📱 Technologies Used
- **React** (Frontend framework)
- **Context API** (State management)
- **React Router** (Navigation and routing)
- **React-Toastify** (User notifications)
- **LocalStorage** (Data persistence)
- **Vite** (Optimized development experience)

## 🛠 Setup and Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/programming-hero-web-course-4/b10a8-gadget-heaven-smmaksudulhaque2000.git
   ```
2. Navigate to the project folder:
   ```sh
   cd gadgetheaven
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Run the application:
   ```sh
   npm start
   ```
5. Open the live application in your browser at: [Live Site](https://srk-gadget-heaven.netlify.app/)

## 🎨 Application Structure
### 🏠 Home Page
- **Banner Section:** Styled per Figma design with a Dashboard link.
- **Categories Sidebar:** Filter products by category.
- **Product Cards:** Displays image, name, price, and details button.

### 🔍 Product Details Page
- Displays complete product information.
- Includes buttons to add to cart and wishlist.

### 📊 Dashboard Page
- Displays items in **Cart and Wishlist**.
- **Sort Cart by price**.
- Shows the **total price of cart items**.

### 📈 Statistics Page
- Displays a composed chart for **product prices and ratings**.

### ❌ 404 Page
- Custom error page for invalid routes.

## 📂 Project Structure
```
gadgetheaven/
├── public/
├── src/
│   ├── components/   # Reusable React components (Navbar, Sidebar, etc.)
│   ├── context/      # Context API setup
│   ├── data/         # JSON data for gadgets
│   ├── pages/        # Pages (Home, Dashboard, Details, 404)
│   ├── App.js
│   ├── index.js
│   ├── styles/       # CSS/Styled Components
├── README.md
├── package.json
└── vite.config.js
```

## 🧩 React Fundamentals Used
- **JSX:** Component structuring.
- **State & Props:** Handling dynamic data.
- **Context API:** Managing cart and wishlist across components.
- **React Router:** Handling routes and navigation.
- **React Hooks:** `useState`, `useEffect`, `useContext`, `useLocation`.
- **Conditional Rendering:** Displaying different UI based on state and routes.

## 📝 Additional Functionalities
- **Dynamic Page Titles & Favicon:** Enhances user experience.
- **Cart Budget Limit:** Restricts purchases over **$1000**.
- **Fully Responsive Design:** Optimized for mobile, tablet, and desktop devices.

## 💡 Future Enhancements
- **Remove Items from Wishlist:** Direct removal option for wishlist items.
- **Expanded Statistics Page:** More analytics on product trends.
- **Custom Backgrounds:** Unique background colors for different pages.
- **Enhanced Budget Handling:** Better feedback on cart limit violations.

## 📜 License
This project is licensed under the **MIT License**.

## 🏆 Acknowledgments
- **Figma** for UI inspiration.
- **React-Toastify** for user-friendly notifications.
- **Vite** for enhanced development experience.

---
We hope you enjoy using **GadgetHeaven**! 🚀 Feel free to report issues or contribute enhancements on GitHub.

