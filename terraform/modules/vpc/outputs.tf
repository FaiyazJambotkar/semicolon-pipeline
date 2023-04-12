output "vpc_id_conn" {
  value = aws_vpc.terra-vpc.id
}

output "vpc_cidr" {
  value = aws_vpc.terra-vpc.cidr_block
}
