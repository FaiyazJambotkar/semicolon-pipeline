resource "aws_subnet" "terra-subnet" {

  vpc_id            = var.vpc_id_conn
  cidr_block        = var.subnet_cidr_block
  availability_zone = var.subnet_az

  tags = {
    "Name" = var.subnet_tag_name
  }

  map_public_ip_on_launch = var.subnet_auto_assign_ip
}