terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">=4.5"
    }
  }
}

provider "aws" {
  region = "us-west-1"
}