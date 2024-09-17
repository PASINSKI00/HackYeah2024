terraform {
    required_providers {
        digitalocean = {
            source  = "digitalocean/digitalocean"
            version = "~> 2.0"
        }
    }
}

variable "do_token" {
    type = string
    default = "ACCESS_TOKEN"
}

data "http" "myip" {
  url = "http://ipv4.icanhazip.com"
}
