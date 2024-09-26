provider "digitalocean" {
    token = var.do_token
}

variable "region_do" {
    type = string
    default = "fra1"
}

variable "app_platform_region_do" {
    type = string
    default = "fra"
}

resource "digitalocean_project" "do-project" {
  name        = "${var.environment}-hackyeah2024-project"
  purpose     = "Web Application"
  environment = var.environment == "prod" ? "Production" : "Development"
  is_default = false
  resources   = [
    digitalocean_database_cluster.postgres-db-cluster.urn,
    digitalocean_app.backend-app.urn,
    digitalocean_app.frontend-app.urn
  ]
}

resource "digitalocean_database_cluster" "postgres-db-cluster" {
  name       = "${var.environment}-postgres-db-cluster-hackyeah2024"
  engine     = "pg"
  version    = "15"
  size       = "db-s-1vcpu-1gb"
  region     = var.region_do
  node_count = 1
  lifecycle {
    prevent_destroy = false
  }
}

resource "digitalocean_database_db" "hackyeah2024-db" {
  cluster_id = digitalocean_database_cluster.postgres-db-cluster.id
  name       = "hackyeah2024-db"
}

resource "digitalocean_app" "backend-app" {
  spec {
    name   = "hackyeah-backend-app"
    region = var.app_platform_region_do

    # domain {
    #   name = "${var.environment}-api.hackyeah2024.com"
    #   zone = "hackyeah2024.com"
    # }

    service {
      name = "${var.environment}-backend-service"
      instance_count = 1
      http_port = 8080
      instance_size_slug = "basic-xs"
      
      env {
        key = "SPRING_PROFILES_ACTIVE"
        value = "${var.environment}"
      }

      env {
        key = "DB_USERNAME"
        value = digitalocean_database_cluster.postgres-db-cluster.user
      }

      env {
        key = "DB_PASSWORD"
        value = digitalocean_database_cluster.postgres-db-cluster.password
      }

      env {
        key = "DB_HOST"
        value = digitalocean_database_cluster.postgres-db-cluster.host
      }

      env {
        key = "DB_PORT"
        value = digitalocean_database_cluster.postgres-db-cluster.port
      }

      env {
        key = "DB_NAME"
        value = digitalocean_database_db.hackyeah2024-db.name
      }
      
      image {
        registry_type = "DOCR"
        repository = "backend-api-hackyeah"
        tag = "${var.backend_image_tag}"

        deploy_on_push {
          enabled = var.deploy_backend_on_push
        }
      }
    }
  }
}

resource "digitalocean_database_firewall" "db-trusted-sources" {
  cluster_id = digitalocean_database_cluster.postgres-db-cluster.id

  rule {
    type  = "app"
    value = digitalocean_app.backend-app.id
  }

  rule {
    type  = "ip_addr"
    value = chomp(data.http.myip.body)
  }
}

resource "digitalocean_app" "frontend-app" {
  spec {
    name   = "hackyeah-frontend-app"
    region = var.app_platform_region_do

    # domain {
    #   name = var.environment == "prod" ? "hackyeah2024.com" : "${var.environment}.hackyeah2024.com"
    #   zone = "hackyeah2024.com"
    # }

    service {
      name = "${var.environment}-frontend-service"
      instance_count = 1
      http_port = 80
      instance_size_slug = "basic-xxs"
      
      image {
        registry_type = "DOCR"
        repository = "frontend-app-hackyeah"
        tag = "${var.frontend_image_tag}"

        deploy_on_push {
          enabled = var.deploy_backend_on_push
        }
      }
    }
  }
}