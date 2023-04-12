resource "aws_route_table" "terra-rt" {
  vpc_id = var.vpc_id_conn

  tags = {
    "Name" = var.rt_tag_name
  }

  route {
    cidr_block = var.rt_cidr_block
    gateway_id = var.igw_id
  }
}
