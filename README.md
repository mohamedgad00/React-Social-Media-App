# React Social Media App

A modern social media application built with React, featuring post management, user authentication, and a responsive UI. This project was created as part of the ITI React course.

## 🚀 Features

- **User Authentication**: Secure login system with protected routes
- **Post Management**: Create, view, and manage posts with real-time updates
- **Search Functionality**: Search through posts to find specific content
- **Responsive Design**: Fully responsive layout using Bootstrap 5
- **Modern UI**: Clean and intuitive interface with Font Awesome icons
- **Real-time Notifications**: SweetAlert2 integration for user feedback
- **Mock API**: JSON Server for backend simulation

## 🛠️ Technologies Used

- **React 19.1.0** - Modern UI library
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing
- **Bootstrap 5** - Responsive CSS framework
- **Axios** - HTTP client for API requests
- **JSON Server** - Mock REST API
- **SweetAlert2** - Beautiful alert messages
- **Lucide React** - Modern icon library
- **Font Awesome** - Icon toolkit
- **date-fns** - Date formatting and manipulation

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (version 14 or higher)
- npm or yarn package manager

## 🔧 Installation

1. Clone the repository:

```bash
git clone https://github.com/mohamedgad00/React-Social-Media-App.git
cd final-project
```

2. Install dependencies:

```bash
npm install
```

## 🚀 Running the Application

The application requires two servers to run simultaneously:

### Start the Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Start the JSON Server (in a separate terminal)

```bash
npx json-server api/db.json --port 3000
```

The API will be available at `http://localhost:3000`

## 🔐 Login Credentials

Use the following credentials to access the application:

- **Email**: `mohamed-gad@gmail.com`
- **Password**: `admin`

## 📁 Project Structure

```
final-project/
├── api/
│   └── db.json              # Mock database for JSON Server
├── public/                  # Static assets
├── src/
│   ├── assets/             # Images and other assets
│   ├── components/         # Reusable React components
│   │   ├── ActiveFriends.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── PostCard.jsx
│   │   ├── PostForm.jsx
│   │   ├── PostsList.jsx
│   │   └── Sidebar.jsx
│   ├── layout/             # Layout components
│   │   ├── MainLayout.jsx
│   │   └── SharedLayout.jsx
│   ├── pages/              # Page components
│   │   ├── Home.jsx
│   │   └── Login.jsx
│   ├── routes/             # Route protection
│   │   └── ProtectedRoute.jsx
│   ├── styles/             # CSS files
│   │   ├── globalStyle.css
│   │   └── login.css
│   └── main.jsx            # Application entry point
├── eslint.config.js        # ESLint configuration
├── index.html              # HTML template
├── package.json            # Project dependencies
├── vite.config.js          # Vite configuration
└── README.md               # Project documentation
```

## 🎨 Key Components

- **Navbar**: Top navigation with search functionality
- **Sidebar**: Left sidebar with navigation links
- **ActiveFriends**: Right sidebar showing active friends
- **PostForm**: Form for creating new posts
- **PostsList**: Display all posts with search filtering
- **PostCard**: Individual post display component
- **ProtectedRoute**: Route guard for authenticated pages

## 🔨 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 📝 API Endpoints

The JSON Server provides the following endpoints:

- `GET /posts` - Fetch all posts
- `GET /posts/:id` - Fetch a single post
- `POST /posts` - Create a new post
- `PUT /posts/:id` - Update a post
- `DELETE /posts/:id` - Delete a post

## 🌟 Features in Detail

### Authentication

- Login page with form validation
- Protected routes requiring authentication
- Session management using localStorage

### Post Management

- Create posts with title and body
- Real-time post updates
- Search and filter posts
- Formatted timestamps using date-fns

### Responsive Design

- Mobile-first approach
- Bootstrap grid system
- Adaptive layouts for different screen sizes

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Mohamed Gad - ITI React Course Final Project

## 🙏 Acknowledgments

- ITI (Information Technology Institute) for the React course
- All the open-source libraries that made this project possible

---

**Note**: This is a learning project created for educational purposes. The authentication system uses hardcoded credentials and should not be used in production environments.
