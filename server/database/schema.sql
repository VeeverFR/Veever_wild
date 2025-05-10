CREATE TABLE user (
  id int unsigned primary key auto_increment not null,
  email varchar(255) not null unique,
  password varchar(255) not null,
  firstname varchar(255) not null,
  lastname varchar(255) not null,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP not null,
  updated_at TIMESTAMP
);

CREATE TABLE admin (
  id int unsigned primary key auto_increment not null,
  user_id int unsigned not null,
  foreign key(user_id) references user(id)
  ON DELETE CASCADE
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
  gender_id int unsigned not null,
  foreign key(user_id) references user(id)
  ON DELETE CASCADE,
  foreign key(gender_id) references gender(id)
);


CREATE TABLE phone (
  id int unsigned auto_increment primary key not null,
  phone_number varchar(10),
  client_id int unsigned not null,
  foreign key(client_id) references client(id)
  ON DELETE CASCADE
);

CREATE TABLE reservation (
  id int unsigned primary key auto_increment not null,
  is_reserved BOOLEAN not null default 0
);

CREATE TABLE client_reservation (
  id int unsigned primary key auto_increment not null,
  client_id int unsigned not null,
  reservation_id int unsigned not null,
  foreign key(client_id) references client(id),
  foreign key(reservation_id) references reservation(id)
  ON DELETE CASCADE
);

CREATE TABLE reservation_date (
  id int unsigned primary key auto_increment not null,
  is_confirmed BOOLEAN not null default 0,
  reservation_id int unsigned not null,
  foreign key(reservation_id) references reservation(id)
  ON DELETE CASCADE
);

CREATE TABLE chr (
  id int unsigned primary key auto_increment not null,
  name varchar(255) not null,
  address varchar(255) not null,
  description text not null,
  average_budget int unsigned not null
);

CREATE TABLE client_chr (
  id int unsigned primary key auto_increment not null,
  client_id int unsigned not null,
  chr_id int unsigned not null,
  foreign key(client_id) references client(id),
  foreign key(chr_id) references chr(id)
);

CREATE TABLE chr_reservation (
  id int unsigned primary key auto_increment not null,
  reservation_id int unsigned not null,
  chr_id int unsigned not null,
  foreign key(reservation_id) references reservation(id)
  ON DELETE CASCADE,
  foreign key(chr_id) references chr(id)
);

CREATE TABLE restaurant (
  id int unsigned primary key auto_increment not null,
  chr_id int unsigned not null,
  type varchar(255) not null,
  foreign key(chr_id) references chr(id)
  ON DELETE CASCADE
);

CREATE TABLE hotel (
  id int unsigned primary key auto_increment not null,
  chr_id int unsigned not null,
  type varchar(255) not null,
  foreign key(chr_id) references chr(id)
  ON DELETE CASCADE
);

CREATE TABLE activity (
  id int unsigned primary key auto_increment not null,
  chr_id int unsigned not null,
  duration int not null,
  foreign key(chr_id) references chr(id)
  ON DELETE CASCADE
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
  ON DELETE CASCADE
);

CREATE TABLE client_keyword (
  id int unsigned primary key auto_increment not null,
  client_id int unsigned not null,
  keyword_id int unsigned not null,
  foreign key(client_id) references client(id)
  ON DELETE CASCADE,
  foreign key(keyword_id) references keyword(id)
  ON DELETE CASCADE
);

CREATE TABLE illustration (
  id int unsigned primary key auto_increment not null,
  link varchar(255) not null
);

CREATE TABLE illustration_keyword (
  id int unsigned primary key auto_increment not null,
  illustration_id int unsigned not null,
  keyword_id int unsigned not null,
  foreign key(illustration_id) references illustration(id),
  foreign key(keyword_id) references keyword(id)
);

CREATE TABLE illustration_chr (
  id int unsigned primary key auto_increment not null,
  illustration_id int unsigned not null,
  chr_id int unsigned not null,
  foreign key(illustration_id) references illustration(id),
  foreign key(chr_id) references chr(id)
);

-- INSERT INTO illustration (link)
-- VALUES
-- ('assets/images/activity-images/SPALesSourcesDeCaudalie1_desktop.webp'),
-- ('assets/images/activity-images/SPALesSourcesDeCaudalie1_mobile.webp'),
-- ('assets/images/activity-images/SPALesSourcesDeCaudalie2_desktop.jpg'),
-- ('assets/images/activity-images/SPALesSourcesDeCaudalie2_mobile.jpg'),
-- ('assets/images/activity-images/SPALesSourcesDeCaudalie3_desktop.jpg'),
-- ('assets/images/activity-images/SPALesSourcesDeCaudalie3_mobile.jpg');

-- INSERT INTO illustration_chr (chr_id, illustration_id)
-- VALUES
-- (1, 1),
-- (1, 2),
-- (1, 3),
-- (1, 4),
-- (1, 5),
-- (1, 6);