module "terra-vpc" {
  source = "./modules/vpc"
}

module "terra-igw" {
  source = "./modules/igw"

  depends_on = [
    module.terra-vpc
  ]
}

module "terra-igw-attach" {
  source = "./modules/igw-attachment"

  igw_id      = module.terra-igw.igw_id
  vpc_id_conn = module.terra-vpc.vpc_id_conn

  depends_on = [
    module.terra-igw
  ]
}

module "terra-subnet" {
  source = "./modules/subnet"

  vpc_id_conn = module.terra-vpc.vpc_id_conn

  depends_on = [
    module.terra-igw
  ]
}

module "terra-route-table" {
  source = "./modules/route-table"

  vpc_id_conn = module.terra-vpc.vpc_id_conn
  igw_id      = module.terra-igw.igw_id

  depends_on = [
    module.terra-subnet
  ]
}

module "terra-rt-association" {
  source = "./modules/rt-association"

  subnet_id = module.terra-subnet.subnet_id
  rt_id     = module.terra-route-table.rt_id

  depends_on = [
    module.terra-route-table
  ]
}

module "terra-security-group" {
  source = "./modules/security-group"

  vpc_id_conn = module.terra-vpc.vpc_id_conn

  depends_on = [
    module.terra-vpc
  ]
}

module "terra-ec2" {
  source = "./modules/ec2"

  sg_id            = module.terra-security-group.sg_id
  subnet_id        = module.terra-subnet.subnet_id
  private_key_path = var.private_key_path

  depends_on = [
    module.terra-security-group
  ]
}

module "terra-eip" {
  source = "./modules/eip"

  ec2_id = module.terra-ec2.ec2_id

  depends_on = [
    module.terra-igw
  ]
}

variable "private_key_path" {
  description = "Path to the private key file for SSH access"
  type        = string

  default = ""
}
