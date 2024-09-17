provider "digitalocean" {
    token = var.do_token
}

variable "region_do" {
    type = string
    default = "fra1"
}

# ---- Put resources here ----