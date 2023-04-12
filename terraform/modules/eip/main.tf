resource "aws_eip" "terra-eip" {
  vpc      = true
  instance = var.ec2_id
}