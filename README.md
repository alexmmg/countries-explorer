# Demo app - https://alexmmg.github.io/countries-explorer/

# Countries Explorer Application

This is a single-page application (SPA) built using **React**, **TypeScript**, and **GraphQL**. The application allows users to explore countries by searching, filtering by continent or language, and sorting by name or continent. Additionally, users can view detailed country information and check the current weather for a selected country.

## Features

- Search for countries by name.
- Filter countries by continent and language.
- Sort countries by name or continent.
- View detailed country information including languages, currencies
- Fetch and display the current weather for the selected country.

---

## Architecture and Design

### Architecture

The application uses a component-based architecture with the following structure:

- **Pages**: Contains the main page, `CountriesExplorer`.
- **Components**: Modular components for UI elements like filters, modal, and country list.
- **GraphQL Queries**: Encapsulated in separate files to decouple data fetching logic.
- **State Management**: React's `useState` and `useEffect` hooks for managing local state.
- **Styling**: Styled-components for consistent, scoped styles.

### Benefits

1. **Modular and Scalable**: Components are reusable and easy to maintain, reducing code duplication.
2. **Type Safety**: TypeScript ensures type checking at compile time, preventing runtime errors.
3. **Efficient Data Fetching**: GraphQL reduces over-fetching by allowing precise queries.
4. **Performance**: Debouncing the search input improves user experience by reducing unnecessary re-renders.

---

## Challenges Faced

### 1. **Managing Asynchronous State**

**Problem**: Ensuring smooth debounced search functionality without blocking user input.  
**Solution**: Used `useEffect` with a timeout for debouncing to update the search term after a delay.

### 2. **Integrating GraphQL**

**Problem**: Handling GraphQL queries with optional filters dynamically.  
**Solution**: Adjusted query variables and ensured undefined values are excluded from the request.

### 3. **Integrating GraphQL and Typing Queries**

**Problem**: Handling GraphQL queries dynamically with proper type safety.  
**Solution**: Used the `gql.tada`, to generate and apply TypeScript types for GraphQL queries and responses.
Using `gql.tada` ensures that all queries return strongly-typed data, preventing runtime errors due to mismatches.

#### Why This Approach Was Chosen:

- Provides **strict type safety** for GraphQL operations.
- Makes queries more readable and maintainable.
- Reduces manual work when the GraphQL schema changes.

#### Commands Used:

To generate types from the GraphQL schema:

#### If more time was available:

- Add unit tests for all components, including GraphQL integration.
- Implement better error handling for API failures.
- Optimize UI for accessibility and performance.

````bash
npm run generate

### Next Steps

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (>= 18.x)
- npm or Yarn
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/alexmmg/countries-explorer.git
   cd countries-explorer
````
