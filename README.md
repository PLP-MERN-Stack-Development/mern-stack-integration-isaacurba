# 🚀 MERN Stack Blog Application

A full-stack blog application built with MongoDB, Express.js, React.js, and Node.js. This project demonstrates a complete CRUD workflow, user authentication, image uploads, and interactive features like comments and search.

## ✨ Features

### Authentication & Security
- User Registration and Login (JWT-based authentication)
- Password hashing with bcrypt
- Protected routes (only logged-in users can write/edit/delete posts)

### Blog Management (CRUD)
- **Create:** Write posts with rich text content, category selection, and cover image upload
- **Read:** View paginated lists of posts and detailed single post views
- **Update:** Edit existing posts and update cover images
- **Delete:** Remove posts (Author only)

### Advanced Features
- 🖼️ **Image Uploads:** Local file storage using Multer
- 🔍 **Search & Pagination:** Filter posts by keyword and navigate through pages
- 💬 **Comments System:** Logged-in users can discuss posts
- 🏷️ **Categories:** Organize posts by topics

### UI/UX
- Responsive design using Tailwind CSS
- Dynamic Navbar (changes based on login state)
- Loading states and error handling

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- React Router DOM
- Axios

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose ODM)

### Utilities
- Multer (File uploads)
- JWT (Authentication)
- BCrypt (Password hashing)
- Express Validator (Input validation)

## ⚙️ Setup & Installation

Follow these steps to run the project locally.

### Prerequisites
- Node.js (v18+) installed
- MongoDB installed locally or a MongoDB Atlas connection string

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/PLP-MERN-Stack-Development/mern-stack-integration-isaacurba
   cd mern-blog-app
   ```

2. **Backend Setup**
   ```bash
   cd server
   npm install
   ```

   Create a `.env` file in the `server/` directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/mern-blog  # or your MongoDB Atlas URI
   JWT_SECRET=your_super_secret_key_123
   NODE_ENV=development
   ```

   Start the backend server:
   ```bash
   npm run dev
   ```

3. **Frontend Setup**
   ```bash
   cd ../client
   npm install
   ```

   Create a `.env` file in the `client/` directory (optional, for production):
   ```
   VITE_API_BASE_URL=http://localhost:5000/api
   ```

   Start the frontend development server:
   ```bash
   npm run dev
   ```

4. **Access the Application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

## 📖 Usage

1. **Register** a new account or **Login** with existing credentials
2. **Create Posts** by clicking "Create Post" (requires login)
3. **Browse Posts** on the home page with search and pagination
4. **View Details** by clicking on any post card
5. **Edit/Delete** your own posts from the post detail page
6. **Add Comments** to posts (requires login)

## 🔌 API Documentation

### Authentication Endpoints
- `POST /api/auth/register` - Register a new user
  - Body: `{ username, email, password }`
- `POST /api/auth/login` - Login user
  - Body: `{ email, password }`

### Post Endpoints
- `GET /api/posts` - Get all posts (with pagination and search)
  - Query params: `page`, `limit`, `search`
- `GET /api/posts/:id` - Get single post by ID
- `POST /api/posts` - Create new post (requires auth)
  - Body: FormData with `title`, `content`, `category`, `featuredImage` (file)
- `PUT /api/posts/:id` - Update post (requires auth, author only)
- `DELETE /api/posts/:id` - Delete post (requires auth, author only)

### Category Endpoints
- `GET /api/categories` - Get all categories
- `POST /api/categories` - Create new category

### File Uploads
- Images are served from `/uploads/` endpoint
- Supported formats: JPEG, PNG, etc. (configured in Multer middleware)

## 📁 Project Structure

```
mern-blog-app/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── services/       # API service functions
│   │   ├── utils/          # Utility functions
│   │   └── hooks/          # Custom React hooks
│   ├── package.json
│   └── vite.config.js
├── server/                 # Node.js backend
│   ├── config/             # Database configuration
│   ├── controllers/        # Route controllers
│   ├── middleware/         # Custom middleware
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   ├── uploads/            # Uploaded files
│   ├── package.json
│   └── server.js           # Main server file
└── README.md
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 📧 Contact

For questions or support, please open an issue on GitHub.
