create table books(
id serial primary key,
name varchar)

insert into books (name) values ('onebook')

select count(*) from books;