CREATE DATABASE chat;
USE chat;

CREATE TABLE messages (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `author` VARCHAR( 255) NOT NULL,
  `body` VARCHAR( 255 ) NOT NULL,
  `created_at` DATETIME NOT NULL,

  PRIMARY KEY ( `id` ) 
);

CREATE TABLE users (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `name` VARCHAR( 255) NOT NULL,
  `email` VARCHAR( 255 ) NOT NULL,
  `pw` VARCHAR( 255 ) NOT NULL,

  PRIMARY KEY ( `id` ) 
);

CREATE TABLE todolist (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `text` VARCHAR( 255) NOT NULL,
  `completed` BOOLEAN

  PRIMARY KEY ( `id` ) 
);