DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE rooms (
  id INT AUTO_INCREMENT PRIMARY KEY,
  roomname VARCHAR(20)
);

CREATE TABLE messages (
  message_id INT AUTO_INCREMENT PRIMARY KEY,
  user VARCHAR(24),
  text VARCHAR(20),
  campus VARCHAR(20),
  created_at VARCHAR(24),
  github_handle VARCHAR(24),
  updated_at VARCHAR(20),
  room INT,
  FOREIGN KEY (room) REFERENCES rooms(id)
);

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(20)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/