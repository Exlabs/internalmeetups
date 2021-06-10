resource "aws_security_group" "default_sg" {
  name = "rds-sg"
}

resource "aws_security_group_rule" "postgres" {
  type              = "ingress"
  from_port         = 5432
  to_port           = 5432
  protocol          = "tcp"
  cidr_blocks       = ["0.0.0.0/0"]
  security_group_id = aws_security_group.default_sg.id
}

resource "aws_security_group_rule" "mysql" {
  type              = "ingress"
  from_port         = 3306
  to_port           = 3306
  cidr_blocks       = ["0.0.0.0/0"]
  protocol          = "tcp"
  security_group_id = aws_security_group.default_sg.id
}

resource "aws_security_group_rule" "egress_all" {
  type              = "egress"
  from_port         = 0
  to_port           = 65535
  cidr_blocks       = ["0.0.0.0/0"]
  protocol          = "tcp"
  security_group_id = aws_security_group.default_sg.id
}


resource "aws_db_instance" "db_source" {
  identifier             = "mysql-db-source"
  allocated_storage      = 10
  engine                 = "mysql"
  engine_version         = "8.0"
  instance_class         = "db.t3.micro"
  name                   = var.db_name_mysql
  username               = var.db_username_mysql
  password               = var.db_password_mysql
  vpc_security_group_ids = [aws_security_group.default_sg.id]
}

resource "aws_db_instance" "db_target" {
  identifier             = "postgres-db-target"
  allocated_storage      = 10
  engine                 = "postgres"
  instance_class         = "db.t3.micro"
  name                   = var.db_name_postgres
  username               = var.db_username_postgres
  password               = var.db_password_postgres
  vpc_security_group_ids = [aws_security_group.default_sg.id]
}
