# Członkowie zespołu:
- Katarzyna Poręba  
- Krystian Pasiński
- Bartłomiej Smalec
- Kacper Pawlak
- Daniel 

<br />

# Our Open Source TechStack:
- Java
- Spring Boot
- Spring Security
- Spring Hibernate
- Next.js 
- Tailwind
- React
- Cloud


<br />


![alt text](./resources/Slide%204_3%20-%201.png)
![alt text](./resources/Slide%204_3%20-%202.png)
![alt text](./resources/Slide%204_3%20-%203.png)
![alt text](./resources/Slide%204_3%20-%204.png)
![alt text](./resources/Slide%204_3%20-%205.png)
![alt text](./resources/Slide%204_3%20-%206.png)
![alt text](./resources/Slide%204_3%20-%207.png)

<br />

# Pomysły:

  - Trackowanie dziennej emisji

  - Widoczne trendy emisji w czasie

  - Super logo

  - Dynamiczne pobieranie danych o zielenii

<br />

# Aspekty techniczne:

  - dostępne na **wszystkich platformach**

  - używane sprawdzone nowoczesne technologie **OpenSource**

  - REST API - **jeden backend** dla wszystkich platform

<br />

# Design:

  - **intuicyjny** i **nowoczesny** design

  - **przyjazny** i **przejrzysty** dla użytkownika

  - elementy **kolorystycznie** nawiązujące do **Miasta Kraków**

  - wysoka **responsywność**

  - jasno zdefiniowana nawigacja

  - **interaktywny** interfejs

  - dostępność w internecie

<br />

# Powiązanie z kategorią: 

  - wpasowana w tematykę zrównoważonego rozwoju i ochrony środowiska, pomagając użytkownikom zrozumieć ich wpływ na emisję CO2

  - podnosi świadomość na temat zmian wpływu działalności człowieka na środowisko oraz sposobów redukcji emisji

<br />

# WOW! Factor:

  - wspaniałe logo nawiązujące do Krakowa

  - wspaniały design

  - dostępność aplikacji z internetu

  - wykorzystanie chmury

  - zautomatyzowane CD



<br/>
<br/>
<br/>

## Information for Developers


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
   Start docker
   ./deploy-frontend-docker-image.sh
   ```

   - backend
   ```bash
   Start docker
   trigger 'publish image latest' build configuration in IntellijIdea
   ```
   

</br>

### How to create cloud enviroment
   If not Krystian then ask Krystian

   else 
   ```bash
   terraform plan -var-file="variables/prod.tfvars"  
   terraform apply -var-file="variables/prod.tfvars"  
   ```

