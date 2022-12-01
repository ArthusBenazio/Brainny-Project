CREATE DATABASE Brainny;

USE Brainny;

CREATE TABLE IF NOT EXISTS `Brainny`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(120) NOT NULL,
  `email` VARCHAR(120) NOT NULL,
  `password` VARCHAR(225) NOT NULL,
  `role` VARCHAR(45) NOT NULL,
  `isAdmin` TINYINT DEFAULT 0, 
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `brainny`.`registered_time` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `time_registred` VARCHAR(45) NOT NULL,
  `id_user` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `id_user_idx` (`id_user` ASC) VISIBLE,
  CONSTRAINT `id_user`
    FOREIGN KEY (`id_user`)
    REFERENCES `brainny`.`user` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
    ENGINE = InnoDB;

INSERT INTO user (name, email, password, role) values ('Artur Bernardo', 'teste@teste', '123456', 'assistente');
INSERT INTO user (name, email, password, role, isAdmin) values ('Thor Gamalho', 'teste2@teste', '456789', 'manager', 1);

SELECT * FROM user;

SELECT * FROM registered_time;

-- DROP TABLE user;
-- DROP TABLE registered_time;
-- DROP DATABASE brainny;