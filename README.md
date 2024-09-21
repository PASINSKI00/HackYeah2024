### How to Run Docker for Development and Production

1. **Development Environment**:

   - To run the application in development mode with hot-reloading:

   ```bash
   docker compose up --build
   ```

2. **Production Environment**:

   - To run the application in production mode:

   ```bash
   docker compose -f docker-compose.prod.yml up --build
   ```
