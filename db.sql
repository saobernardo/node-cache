create table users(
	id uuid,
	name varchar(255) not null,
	username varchar(255) not null,
	password varchar(500) not null,
	primary key(id)
);