# CS 1.6 API

This project provides a comprehensive API for Counter-Strike 1.6, offering data in handy JSON format about weapons,
equipment, maps, teams, game modes, and more.

## Features

- **Weapons**: Detailed information about all weapons available in CS 1.6.
- **Equipment**: Data on various equipment items.
- **Maps**: Information about different maps used in the game.
- **Teams**: Information about teams.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd cs-api
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory and add your MongoDB connection string:
   ```dotenv
   PORT=
   MONGODB=
   ENVIRONMENT=
   ```

### Running the Application

To start the application in development mode:

```sh
npm run dev
```

To start the application in production mode:

```sh
npm start
```

## API Endpoints

### Weapons

- `GET /api/weapons`: Retrieve a list of all weapons.
- `GET /api/weapons/:id`: Retrieve detailed information about a specific weapon.

### Equipment

- `GET /api/equipment`: Retrieve a list of all equipment.
- `GET /api/equipment/:id`: Retrieve detailed information about a specific equipment item.

### Maps

- `GET /api/maps`: Retrieve a list of all maps.
- `GET /api/maps/:id`: Retrieve detailed information about a specific map.

### Teams

- `GET /api/teams`: Retrieve a list of all teams.
- `GET /api/teams/:id`: Retrieve detailed information about a specific team.
- `GET /api/teams/[faction_name]`: Retrieve specific faction teams.

### Docker

To run the application using Docker, build the image and run the container:

```sh
docker build -t cs-api .
docker run -p 5000:5000 cs-api
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.
