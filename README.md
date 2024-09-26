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

</br>

### How to run backend application locally using IntellijIdea IDE
   - trigger 'Local postgres containter setup' build configuration
   - trigger 'run api' build configuration
   
   application is now available at localhost:8080

</br>

### How to deploy changes to the Production environment
   - frontend

   ```bash
   ./deploy-frontend-docker-image.sh
   ```

   - backend

   trigger 'publish image latest' build configuration in IntellijIdea
   

</br>

### How to create cloud enviroment
   If not Krystian then ask Krystian

   else 
   ```bash
   terraform plan -var-file="variables/prod.tfvars"  
   terraform apply -var-file="variables/prod.tfvars"  
   ```

