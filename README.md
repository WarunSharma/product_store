# product_store
# Product Store

A full-stack MERN (MongoDB, Express, React, Node.js) application for managing products.

## Features

- Add, update, and delete products
- View all products in a responsive grid
- Product image upload and preview
- Light/Dark mode toggle
- Optimistic UI updates

## Tech Stack

- **Frontend:** React, Chakra UI, Zustand, Vite
- **Backend:** Node.js, Express
- **Database:** MongoDB

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- MongoDB

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/product_store.git
   cd product_store
   ```

2. **Install backend dependencies:**
   ```sh
   cd backend
   npm install
   ```

3. **Install frontend dependencies:**
   ```sh
   cd ../frontend
   npm install
   ```

4. **Set up environment variables:**
   - Create a `.env` file in the `backend` folder with your MongoDB URI and PORT.

5. **Start the backend server:**
   ```sh
   cd backend
   npm run dev
   ```

6. **Start the frontend dev server:**
   ```sh
   cd ../frontend
   npm run dev
   ```

7. **Visit:**  
   - Frontend: [http://localhost:5173](http://localhost:5173)
   - Backend API: [http://localhost:3000/api/product](http://localhost:3000/api/product)

## Folder Structure

```
product_store/
  backend/
    server.js
    routes/
    models/
    ...
  frontend/
    src/
      components/
      pages/
      store/
      ...
```

## License

MIT

---

Feel free to update this README with screenshots, deployment instructions, or any extra features you add!