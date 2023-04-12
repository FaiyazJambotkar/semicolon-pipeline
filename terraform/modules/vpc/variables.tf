variable "vpc_cidr_block" {
  type    = string
  default = "10.0.0.0/16"
}

variable "vpc_instance_tenancy" {
  type    = string
  default = "default"
}

variable "vpc_tag_name" {
  type    = string
  default = "f-terra-vpc"
}