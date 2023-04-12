variable "subnet_cidr_block" {
  type    = string
  default = "10.0.0.0/24"
}

variable "subnet_az" {
  type    = string
  default = "us-west-1a"
}

variable "subnet_tag_name" {
  type    = string
  default = "f-terra-subnet"
}

variable "subnet_auto_assign_ip" {
  type    = bool
  default = true
}

variable "vpc_id_conn" {}