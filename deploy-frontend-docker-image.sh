#!/bin/bash

# doctl auth init -t "API_TOKEN"
doctl registry login &&\
docker tag $IMAGE_NAME registry.digitalocean.com/container-registry-smallstepdiet/$IMAGE_NAME &&\
docker push registry.digitalocean.com/container-registry-smallstepdiet/$IMAGE_NAME


# Ustawienie zmiennych
DOCKER_IMAGE_NAME="frontend-app-hackyeah"
DOCKER_TAG="latest"
# Zmień na swój registry, jeśli używasz
DOCKER_REGISTRY="registry.digitalocean.com/container-registry-smallstepdiet"

# Przejście do katalogu frontend
cd frontend || exit

echo "Building Docker image for Next.js frontend..."
docker build -t $DOCKER_IMAGE_NAME:$DOCKER_TAG .

# Sprawdzenie, czy build się powiódł
if [ $? -eq 0 ]; then
    echo "Docker image built successfully."
else
    echo "Failed to build Docker image."
    exit 1
fi

# Uwierzytelnianie do docker registry
# doctl auth init -t "API_TOKEN"
doctl registry login &&\

# Tagowanie obrazu (odkomentuj, jeśli używasz registry)
docker tag $DOCKER_IMAGE_NAME:$DOCKER_TAG $DOCKER_REGISTRY/$DOCKER_IMAGE_NAME:$DOCKER_TAG

# Push do registry (odkomentuj i dostosuj, jeśli używasz)
# echo "Pushing image to registry..."
docker push $DOCKER_REGISTRY/$DOCKER_IMAGE_NAME:$DOCKER_TAG

# Sprawdzenie, czy build się powiódł
if [ $? -eq 0 ]; then
    echo "Docker image pushed successfully."
else
    echo "Failed to push Docker image."
    exit 1
fi

# Uruchomienie kontenera lokalnie (opcjonalne)
# echo "Running container locally..."
# docker run -d -p 3000:3000 --name nextjs-frontend-container $DOCKER_IMAGE_NAME:$DOCKER_TAG

echo "Deployment process completed."

# Powrót do głównego katalogu projektu
cd ..