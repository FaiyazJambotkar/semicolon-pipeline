variable "sg_tag_name" {
  type    = string
  default = "f-terra-sg"
}

variable "sg_ingress_tcp_protocol" {
  type    = string
  default = "tcp"
}

variable "sg_ingress_httpport" {
  type    = number
  default = 80
}

variable "sg_ingress_sshports" {
  type    = number
  default = 22
}

variable "sg_ingress_https_port" {
  type    = number
  default = 443  
}

variable "sg_ingress_app_port" {
  type    = number
  default = 3000
}

variable "sg_ingress_cidr_block" {
  type    = string
  default = "0.0.0.0/0"
}

variable "sg_egress_ports" {
  type    = number
  default = 0
}

variable "sg_egress_protocol" {
  type    = string
  default = "-1"
}

variable "sg_egress_cidr_block" {
  type    = string
  default = "0.0.0.0/0"
}

variable "vpc_id_conn" {}