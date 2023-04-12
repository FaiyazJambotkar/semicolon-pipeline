variable "rt_cidr_block" {
  type    = string
  default = "0.0.0.0/0"
}

variable "rt_tag_name" {
  type    = string
  default = "f-terra-rt"
}

variable "vpc_id_conn" {}

variable "igw_id" {}