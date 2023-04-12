resource "aws_internet_gateway_attachment" "terra-igw-attach" {
  vpc_id              = var.vpc_id_conn
  internet_gateway_id = var.igw_id
}