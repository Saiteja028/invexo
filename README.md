# Invexo

A full-stack stock tracking and portfolio management application built with React and Node.js.

## Features

- User authentication (register/login)
- Real-time stock search and tracking
- Market data visualization
- Personal stock portfolio management
- Dashboard with market insights

## Tech Stack

**Frontend:**
- React 19 with Vite
- React Router for navigation
- Axios for API calls
- Styled Components & CSS

**Backend:**
- Node.js with Express
- MongoDB with Mongoose
- JWT authentication
- Yahoo Finance API integration
- CORS enabled

## Quick Start

### Prerequisites
- Node.js
- MongoDB
- Git

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd invexo
```

2. Install server dependencies
```bash
cd server
npm install
```

3. Install client dependencies
```bash
cd ../client/react
npm install
```

4. Environment Setup
Create `.env` files in both server and client directories:

**Server (.env):**
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_LIFETIME=your_jwt_lifetime
```

**Client (.env):**
```
VITE_API_URL=http://localhost:3000
```

### Running the Application

1. Start the server (from server directory):
```bash
npm start
```

2. Start the client (from client/react directory):
```bash
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend: http://localhost:3000

## Project Structure

```
invexo/
├── client/react/          # React frontend
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   └── contextapi/    # Context providers
└── server/                # Node.js backend
    ├── controllers/       # Route handlers
    ├── models/           # Database schemas
    ├── routers/          # API routes
    └── middleware/       # Custom middleware
```

## API Endpoints

- `POST /api/v1/auth/register` - User registration
- `POST /api/v1/auth/login` - User login
- `GET /api/v1/stocks` - Get stock data
- `GET /api/v1/markets` - Get market data

## License

MIT
