readonly IMAGE_NAME="frontend-app-hackyeah"

echo "Building and publishing $IMAGE_NAME image"

rm -rf dist &&\
# Build app
docker build -t $IMAGE_NAME . &&\
doctl registry login &&\
docker tag $IMAGE_NAME registry.digitalocean.com/container-registry-smallstepdiet/$IMAGE_NAME &&\
docker push registry.digitalocean.com/container-registry-smallstepdiet/$IMAGE_NAME
