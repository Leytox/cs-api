# Counter-Strike 1.6 API 🎮
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Node](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen)

A comprehensive RESTful API providing detailed information about Counter-Strike 1.6, including weapons, maps, equipment, and character classes.

![CS API Banner](https://github.com/user-attachments/assets/0ce9d088-86f5-4095-bc88-79f22855519b)

## 📋 Table of Contents
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Docker Support](#docker-support)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features
- **Comprehensive Data**: Detailed information about weapons, maps, equipment, and character classes
- **RESTful Architecture**: Clean and intuitive API endpoints
- **Documentation**: Interactive Swagger documentation
- **Docker Support**: Easy deployment with Docker
- **Rate Limiting**: Protected against abuse
- **Input Validation**: Secure request validation
- **CORS Support**: Cross-Origin Resource Sharing enabled
- **Pagination**: Efficient data retrieval
- **Error Handling**: Consistent error responses

## 🔧 Requirements
- Node.js >= 16.0.0
- MongoDB >= 4.4
- Docker (optional)

## 🚀 Installation

### Local Setup
1. Clone the repository:
```bash
git clone https://github.com/Leytox/cs-api.git
cd cs-api
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file:
```env
PORT=5000
MONGODB=mongodb://localhost:27017/cs-api
ENVIRONMENT=development
```

### 🐳 Docker Setup
1. Using Docker Compose:
```bash
# Development
npm run docker:dev:up

# Production
npm run docker:up
```

## 🏃‍♂️ Running the Application

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

## 📚 API Documentation

### Base URL
```
http://localhost:5000/api/v1
```

### Authentication
Currently, the API is publicly accessible and doesn't require authentication.

### Endpoints

#### Weapons API
```http
GET /weapons
GET /weapons/{id}
GET /weapons/name/{name}
GET /weapons/type/{type}
GET /weapons/country/{country}
```

**Example Response:**
```json
{
  "name": "AK-47",
  "type": "Rifle",
  "price": 2500,
  "countryOfOrigin": "Soviet Union",
  "faction": ["Terrorist"],
  "caliber": "7.62mm",
  "clipCapacity": 30,
  "rateOfFire": 600,
  "weight": 4.79,
  "muzzleVelocity": 715,
  "muzzleEnergy": 2108,
  "image": "/images/weapons/ak47.png"
}
```

#### Maps API
```http
GET /maps
GET /maps/{id}
GET /maps/name/{name}
GET /maps/scenario/{scenario}
GET /maps/developer/{developer}
```

**Example Response:**
```json
{
  "name": "de_dust2",
  "scenario": "Bomb/Defuse",
  "developers": ["David Johnston"],
  "background": "Middle Eastern",
  "counterTerroristsMission": "Prevent Terrorists from bombing",
  "terroristsMission": "Plant the bomb and defend until detonation"
}
```

#### Equipment API
```http
GET /equipment
GET /equipment/{id}
GET /equipment/name/{name}
GET /equipment/faction/{faction}
```

#### Classes API
```http
GET /classes
GET /classes/{id}
GET /classes/name/{name}
GET /classes/faction/{faction}
```

### Query Parameters

#### Pagination
```
?limit=10    // Number of items per page (default: 10, max: 100)
?offset=0    // Number of items to skip (default: 0)
```

### Status Codes
```
200 - Success
400 - Bad Request
404 - Not Found
429 - Too Many Requests
500 - Internal Server Error
```

### Error Response Format
```json
{
  "error": "Error Type",
  "message": "Detailed error message",
  "details": []
}
```

## 🐳 Docker Support

### Development Environment
```bash
npm run docker:dev:build
npm run docker:dev:up
npm run docker:dev:down
```

### Production Environment
```bash
npm run docker:build
npm run docker:up
npm run docker:down
```

### Environment Variables
- `PORT`: API port (default: 5000)
- `MONGODB`: MongoDB connection string
- `ENVIRONMENT`: Application environment (development/production)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
   ```bash
   git checkout -b feature/my-feature
   ```
3. Commit your changes
   ```bash
   git commit -m "Add some feature"
   ```
4. Push to the branch
   ```bash
   git push origin feature/my-feature
   ```
5. Open a Pull Request

### Contribution Guidelines
- Follow the existing code style
- Write meaningful commit messages
- Update documentation as needed
- Add tests for new features
- Ensure all tests pass before submitting PR

## 📝 License
This project is unlicensed

## 👥 Authors
- Ilya "Leytox" Devder - [GitHub](https://github.com/Leytox)

## 🙏 Acknowledgments
- Counter-Strike community
- Valve Corporation
