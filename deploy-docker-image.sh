#!/bin/bash

# Ustawienie zmiennych
DOCKER_IMAGE_NAME="nextjs-frontend"
DOCKER_TAG="latest"
# Zmień na swój registry, jeśli używasz
DOCKER_REGISTRY="your-registry-url"

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

# Tagowanie obrazu (odkomentuj, jeśli używasz registry)
# docker tag $DOCKER_IMAGE_NAME:$DOCKER_TAG $DOCKER_REGISTRY/$DOCKER_IMAGE_NAME:$DOCKER_TAG

# Push do registry (odkomentuj i dostosuj, jeśli używasz)
# echo "Pushing image to registry..."
# docker push $DOCKER_REGISTRY/$DOCKER_IMAGE_NAME:$DOCKER_TAG

# Uruchomienie kontenera lokalnie (opcjonalne)
echo "Running container locally..."
docker run -d -p 3000:3000 --name nextjs-frontend-container $DOCKER_IMAGE_NAME:$DOCKER_TAG

echo "Deployment process completed."

# Powrót do głównego katalogu projektu
cd ..