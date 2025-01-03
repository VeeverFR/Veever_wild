CREATE TABLE user (
  id int unsigned primary key auto_increment not null,
  email varchar(255) not null unique,
  password varchar(255) not null,
  firstname varchar(255) not null,
  lastname varchar(255) not null,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP not null,
  update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE admin (
  id int unsigned primary key auto_increment not null,
  user_id int unsigned not null,
  foreign key(user_id) references user(id)
);

CREATE TABLE gender (
  id int unsigned primary key auto_increment not null,
  type varchar(255) not null
);

CREATE TABLE client (
  id int unsigned primary key auto_increment not null,
  user_id int unsigned not null,
  birthdate date not null,
  nickname varchar(255) not null,
  gender int unsigned not null,
  foreign key(user_id) references user(id),
  foreign key(gender_id) references gender(id)
);

CREATE TABLE phone (
  id int unsigned primary key auto_increment not null,
  phone_number varchar(10),
  client_id int unsigned not null,
  foreign key(client_id) references client(id)
);

CREATE TABLE reservation (
  id int unsigned primary key auto_increment not null,
  is_reserved BOOLEAN not null default 0
);

CREATE TABLE reservation_date (
  id int unsigned primary key auto_increment not null,
  is_confirmed BOOLEAN not null default 0,
  reservation_id int unsigned not null,
  foreign key(reservation_id) references reservation(id)
);

CREATE TABLE chr (
  id int unsigned primary key auto_increment not null,
  address varchar(255) not null,
  min_price int unsigned not null,
  max_price int unsigned not null
);

CREATE TABLE chr_reservation (
  id int unsigned primary key auto_increment not null,
  reservation_id int unsigned not null,
  foreign key(reservation_id) references reservation(id),
  chr_id int unsigned not null,
  foreign key(chr_id) references chr(id)
);

CREATE TABLE restaurant (
  id int unsigned primary key auto_increment not null,
  chr_id int unsigned not null,
  foreign key(chr_id) references chr(id)
);

CREATE TABLE hotel (
  id int unsigned primary key auto_increment not null,
  chr_id int unsigned not null,
  foreign key(chr_id) references chr(id)
);

CREATE TABLE activity (
  id int unsigned primary key auto_increment not null,
  chr_id int unsigned not null,
  foreign key(chr_id) references chr(id)
);

CREATE TABLE keyword (
  id int unsigned primary key auto_increment not null,
  name varchar(255) not null
);

CREATE TABLE chr_keyword (
    id int unsigned primary key auto_increment not null,
  chr_id int unsigned not null,
  keyword_id int unsigned not null,
  foreign key(chr_id) references chr(id),
  foreign key(keyword_id) references keyword(id)
);

CREATE TABLE client_keyword (
  id int unsigned primary key auto_increment not null,
  client_id int unsigned not null,
  keyword_id int unsigned not null,
  foreign key(client_id) references client(id),
  foreign key(keyword_id) references keyword(id)
);

CREATE TABLE form_item (
  id int unsigned primary key auto_increment not null,
  name varchar(255) not null
);

CREATE TABLE question (
  id int unsigned primary key auto_increment not null,
  order int not null,
  form_item_id int unsigned not null,
  foreign key(form_item_id) references form_item(id)
);

CREATE TABLE answer (
  id int unsigned primary key auto_increment not null,
  is_checked BOOLEAN not null default 0,
  question_id int unsigned not null,
  keyword_id int unsigned not null,
  foreign key(question_id) references question(id),
  foreign key(keyword_id) references keyword(id)
);