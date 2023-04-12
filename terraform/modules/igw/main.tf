resource "aws_internet_gateway" "terra-igw" {
  tags = {
    "Name" = var.igw_tag_name
  }
}