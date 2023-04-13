variable "ec2_ami" {
  type    = string
  default = "ami-0d50e5e845c552faf"
}

variable "ec2_instance_type" {
  type    = string
  default = "t2.micro"
}

variable "ec2_auto_assign_pub_ip" {
  type    = bool
  default = true
}

variable "ec2_tag_name" {
  type    = string
  default = "SemiColon-ec2"
}


variable "key_name" {
  type    = string
  default = "f-terra-kp"
}

variable "connection_type" {
  type    = string
  default = "ssh"
}

variable "connection_username" {
  type    = string
  default = "ubuntu"
}

variable "private_key_path" {
  type = string
}

variable "sg_id" {}

variable "subnet_id" {}
