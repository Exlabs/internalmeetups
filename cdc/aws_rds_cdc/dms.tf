resource "aws_dms_replication_instance" "dms_instance" {
  allocated_storage          = 10
  apply_immediately          = true
  engine_version             = "3.4.4"
  multi_az                   = false
  publicly_accessible        = false
  replication_instance_class = "dms.t3.micro"
  replication_instance_id    = "dms-replication-instance"
  vpc_security_group_ids     = [aws_security_group.default_sg.id]
}


resource "aws_dms_endpoint" "dms_endpoint_source" {
  database_name = aws_db_instance.db_source.name
  endpoint_id   = "source-pg"
  endpoint_type = "source"
  engine_name   = "postgres"
  password      = aws_db_instance.db_source.password
  port          = aws_db_instance.db_source.port
  server_name   = aws_db_instance.db_source.address
  username      = aws_db_instance.db_source.username
}

resource "aws_dms_endpoint" "dms_endpoint_target" {
  database_name = aws_db_instance.db_target.name
  endpoint_id   = "target-mysql"
  endpoint_type = "target"
  engine_name   = "mysql"
  password      = aws_db_instance.db_target.password
  port          = aws_db_instance.db_target.port
  server_name   = aws_db_instance.db_target.address
  username      = aws_db_instance.db_target.username
}
