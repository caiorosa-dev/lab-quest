# Lab Quest

Lab Quest is an educational platform developed in collaboration with the Química Social community project at Univali. It aims to make learning chemistry engaging and interactive, fostering scientific literacy among children, youth, and adults.

## Technologies Used

Lab Quest leverages a modern tech stack to deliver its features effectively:

### Backend

- **Node.js**: Utilized for server-side operations, requiring version 20 or higher.
- **Prisma**: Integrated for database migrations and management.
- **Swagger**: Provides API documentation for easy access and understanding.
- **NestJS**: A progressive Node.js framework for building efficient and scalable server-side applications.

### Infrastructure

- **Yarn**: Employed as the package manager for handling project dependencies.
- **Docker**: Used to manage the database and other essential services through containerization.

### Frontend

- **React**: Utilized for building the user interface.
- **Tailwind CSS**: Used for styling the application with utility-first CSS.

## Requirements

Before you begin, ensure you have met the following requirements:

- **Node.js**: Version 20 or higher is required. You can download it from [nodejs.org](https://nodejs.org/).
- **Yarn**: This project uses Yarn as the package manager. You can install it globally using npm:
  ```sh
  npm install --global yarn
  ```
- **Docker**: Docker is required to run the database and other services. You can download it from [docker.com](https://www.docker.com/).

## Getting Started

Follow these steps to get the project up and running:

1. **Clone the repository**:

   ```sh
   git clone <repository-url>
   cd lab-quest
   ```

2. **Install dependencies**:
   Navigate to the root of the project and run:

   ```sh
   yarn install
   ```

3. **Set up the environment**:
   Create a `.env` file in the root directory and add the necessary environment variables. You can use `.env.example` as a reference if available.

4. **Start the database and other services**:
   Use Docker Compose to start the necessary services:

   ```sh
   docker-compose up -d
   ```

   This will start the PostgreSQL database and any other services defined in the `docker-compose.yml` file.

5. **Run database migrations**:
   Ensure the database schema is up to date by running:

   ```sh
   yarn prisma migrate dev
   ```

6. **Start the development server**:
   You can start the development server for both the API and the web application using:

   ```sh
   yarn dev
   ```

7. **Access the application**:
   - The web application should be accessible at `http://localhost:3000`.
   - The dashboard application should be accessible at `http://localhost:3001`.
   - The api application should be accessible at `http://localhost:3333`.
   - The API documentation (Swagger) can be accessed at `http://localhost:3333/docs`.

## Additional Commands

- **Build the project**:

  ```sh
  yarn build
  ```

- **Lint the code**:
  ```sh
  yarn lint
  ```

## Development & Design Team

Here are the key contributors:

- **Caio Rosa ([caiorosa-dev](https://github.com/caiorosa-dev))**: Project leader, contributed to all aspects of development (API, app, and dashboard) and design.
- **André Melo ([andregabrielmelo](https://github.com/andregabrielmelo))**: Contributed to design, and development of the API and app.
- **Jordan Lippert ([JordanLippert](https://github.com/JordanLippert))**: Contributed to the development of the dashboard.

## License

This project is licensed under the AGPL-3.0 License. See the [LICENSE](LICENSE) file for more information.
