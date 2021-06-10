# Specify the provider and access details
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.27"
    }
  }

}

// Top level config
// -----------
provider "aws" {
  region = var.aws_region

  default_tags {
    tags = {
      Application = "cdc-test-exlabs"
    }
  }
}
