# Pokemon React App

This React application retrieves a list of Pokemon from the [PokeAPI](https://pokeapi.co/) and stores the list persistently using TypeScript, Redux Toolkit, and RTK Query. Upon clicking an item in the list, the application displays the details of the corresponding Pokemon.

## Features

- Retrieves a list of Pokemon from the PokeAPI
- Stores the list persistently using Redux Toolkit and RTK Query
- Displays details of the selected Pokemon when clicked
- Written in TypeScript for type safety
- Unit tests for both screens ensure reliability and correctness

## Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/mbilalsiddique1/pokedox.git
```

2. Navigate to the project directory:

```bash
cd pokedox
```

3. Install dependencies:

```bash
npm install
```

## Configuration

The application start script can be configured to use different BASE API URLs. You can set the BASE API URLs by modifying environment variables in a `.env` file:

```
REACT_APP_BASE_API_URL=https://pokeapi.co/api/v2/
```

## Running the Application

To run the application, use the following command:

```bash
npm start
```

This will start the development server, and the application will be accessible at [http://localhost:3000](http://localhost:3000).

## Testing

To run unit tests, use the following command:

```bash
npm test
```

This will run all unit tests and display the coverage report. The application aims to achieve at least 60% coverage of unit and integration testing to ensure reliability and correctness.

## API Endpoints

- **GET** - [https://pokeapi.co/api/v2/pokemon/](https://pokeapi.co/api/v2/pokemon/): Retrieves a list of Pokemon.
- **GET** - [https://pokeapi.co/api/v2/pokemon/1/](https://pokeapi.co/api/v2/pokemon/1/): Retrieves details of a specific Pokemon (e.g., Pokemon with ID 1).

---

This README provides detailed instructions on how to run the application, configure environment variables.
