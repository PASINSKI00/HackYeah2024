terraform {
    required_providers {
        digitalocean = {
            source  = "digitalocean/digitalocean"
            version = "~> 2.0"
        }
    }
}

variable "environment" {}
variable "backend_image_tag" {}
variable "frontend_image_tag" {}
variable "deploy_backend_on_push" {}
variable "do_token" {
    type = string
    default = "ACCESS_TOKEN"
}

data "http" "myip" {
  url = "http://ipv4.icanhazip.com"
}
