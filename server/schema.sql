DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  message_id INT AUTO_INCREMENT PRIMARY KEY,
  user VARCHAR(24) NOT NULL,
  msg VARCHAR(50) NOT NULL,
  room VARCHAR(20) NOT NULL
);

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(20) NOT NULL
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/