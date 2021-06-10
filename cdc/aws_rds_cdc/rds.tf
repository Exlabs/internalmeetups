resource "aws_db_instance" "db_source" {
  identifier        = "mysql-db-source"
  allocated_storage = 10
  engine            = "mysql"
  engine_version    = "8.0"
  instance_class    = "db.t3.micro"
  name              = var.db_name_mysql
  username          = var.db_username_mysql
  password          = var.db_password_mysql
}

resource "aws_db_instance" "db_target" {
  identifier        = "postgres-db-target"
  allocated_storage = 10
  engine            = "postgres"
  instance_class    = "db.t3.micro"
  name              = var.db_name_postgres
  username          = var.db_username_postgres
  password          = var.db_password_postgres
}
