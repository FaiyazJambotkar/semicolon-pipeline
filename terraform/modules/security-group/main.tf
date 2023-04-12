resource "aws_security_group" "terra-sg" {

  name   = var.sg_tag_name
  vpc_id = var.vpc_id_conn

  ingress {
    description = "Allow http port"
    from_port   = var.sg_ingress_httpport
    to_port     = var.sg_ingress_httpport
    protocol    = var.sg_ingress_tcp_protocol
    cidr_blocks = [var.sg_ingress_cidr_block]
  }

  ingress {
    description = "Allow ssh to instance"
    from_port   = var.sg_ingress_sshports
    to_port     = var.sg_ingress_sshports
    protocol    = var.sg_ingress_tcp_protocol
    cidr_blocks = [var.sg_ingress_cidr_block]
  }

  ingress {
    description = "Allow https port"
    from_port   = var.sg_ingress_https_port
    to_port     = var.sg_ingress_https_port
    protocol    = var.sg_ingress_tcp_protocol
    cidr_blocks = [var.sg_ingress_cidr_block]
  }

  ingress {
    description = "Allow connection to blogapp"
    from_port   = var.sg_ingress_app_port
    to_port     = var.sg_ingress_app_port
    protocol    = var.sg_ingress_tcp_protocol
    cidr_blocks = [var.sg_ingress_cidr_block]
  }

  egress {
    from_port   = var.sg_egress_ports
    to_port     = var.sg_egress_ports
    protocol    = var.sg_egress_protocol
    cidr_blocks = [var.sg_egress_cidr_block]
  }
}