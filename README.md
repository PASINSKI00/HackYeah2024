INFO:

Oszacowanie wartosci emisji poszczegolnych sektorow

Indywidualne dzialania mieszkancow	
Obliczane na podstawie:
    - ilosci spalonego paliwa * wskaznik emisji paliwa
    - ilosci zuzytego pradu * wskaznik emisji energii elektrycznej
    - typu i kalorycznosci diety * wskaznik emisji zwiazanej z dieta


Transport	
Obliczany na podstawie 
    - raportowanej ilosci sprzedanego paliwa w krakowie * wskaznik emisji paliwa
    - ilosci energii elektrycznej zuzytej w komunikacji miejskiej * wskaznik emisji energii elektrycznej
    - ilosci energii elektrycznej zuzytej do ladowania pojazdow elektrycznych pobieranej z * wskaznik emisji energii elektrycznej

Sektor usługowy	
Obliczany na podstawie sum zmiennych dla biznesow zarejestrowanych w Krakowie:
    - raportu KOBIZE (paliwa, piece, klimatyzacje itp.)
    - Ilosci energii elektrycznej zuzytej w sektorze usługowym * wskaznik emisji energii elektrycznej

Wydarzenia
Obliczany na podstawie zmiennych: 
    - Ilosc uczestnikow * wskaznik sredniej emisji zwiazanej z transportem,
    - Ilosc energii elektrycznej zuzytej podczas wydarzenia * wskaznik emisji energii elektrycznej,


wskaznik emisji paliwa
    diesel'a 2.3kg CO2/l
    benzyny 2.7kg CO2/l
wskaznik emisji energii elektrycznej 0.685kg CO2/kWh
wskaznik emisji zwiazanej z dieta 
    Keto			3kg / 1000 kcal
    Miesna			2.7kg / 1000 kcal
    Wszystkozerna	2.3kg / 1000 kcal
    Bez miesna		1.7kg / 1000 kcal
    Wegetarianska	1.2kg / 1000 kcal
    weganska		0.7kg / 1000 kcal
wskaznik sredniej emisji zwiazanej z transportem 
    dostosowywany dynamicznie na podstawie informacji podawanych przez uzytkownikow oraz zbieranych przy kupowaniu biletow



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

