# Whale API

## Overview

This project is a simple Node.js API built using the Express framework. It provides basic information about different whale species, including their name, weight, and length. The API is designed to run locally and serves a JSON response containing an array of whale objects.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express**: Minimal web framework for creating the API.
- **JavaScript (ES6+)**: The programming language used in this project.

## Features

1. **Whale Data**: The API provides static data about different whale species, including their name, weight, and length.
2. **JSON Response**: Whale data is served as a JSON object for easy integration with other applications or services.
3. **Local Server**: The API runs on a local server on port `3000`.

## Installation

### Prerequisites

- **Node.js** and **npm** (Node Package Manager) should be installed. You can download Node.js from [here](https://nodejs.org/).

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/whale-api.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd whale-api
   ```
3. **Install dependencies** (if any):
   ```bash
   npm install
   ```
4. **Start the server**:
   ```bash
   node index.js
   ```
   The server will start listening on `http://localhost:3000`.

## API Endpoints

### Get All Whales

- **Endpoint**: `/`
- **Method**: `GET`
- **Description**: Retrieves a list of whale species with their attributes.
- **Response**: 
  ```json
  [
    { "id": 1, "name": "Blue Whale", "weight": 200000, "length": 30 },
    { "id": 2, "name": "Sperm Whale", "weight": 80000, "length": 20 },
    { "id": 3, "name": "Killer Whale", "weight": 12000, "length": 10 }
  ]
  ```

## Usage

1. Start the server by running the following command in your terminal:
   ```bash
   node index.js
   ```
2. Open your browser or use a tool like `curl` or Postman to access the API:
   - Browser: Go to `http://localhost:3000` to view the whale data.
   - `curl`:
     ```bash
     curl http://localhost:3000
     ```
   - Postman: Send a `GET` request to `http://localhost:3000`.

You should see a JSON response containing the whale data.

## Contributing

Contributions are welcome! If you have suggestions for improving the API or want to add more functionality, feel free to fork the repository, make your changes, and submit a pull request.

## License

This project is open-source and available under the [MIT License](LICENSE).
