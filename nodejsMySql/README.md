helpful commands:
- Spin up MySql container on docker:
  docker run --name ms -p 3306:3306 -e MYSQL_ROOT_PASSWORD=password mysql
- SSH Into container:
  docker exec -it ms bash 
  mysql -u user -ppasssword
- DB Commands
  create database test;
  use test;
  CREATE TABLE EMPLOYEES (ID INT PRIMARY KEY AUTO_INCREMENT, NAME TEXT, SSN CHAR(10));
  INSERT INTO EMPLOYEES (NAME, SSN) VALUES ('ABHISHEK', '11111');
  INSERT INTO EMPLOYEES (NAME, SSN) VALUES ('JOHN', '22222');
  INSERT INTO EMPLOYEES (NAME, SSN) VALUES ('SSMITH', '33333');
  INSERT INTO EMPLOYEES (NAME, SSN) VALUES ('JASON', '44444');
  INSERT INTO EMPLOYEES (NAME, SSN) VALUES ('BOB', '555555');
  INSERT INTO EMPLOYEES (NAME, SSN) VALUES ('ALICE', '6666666');
  SELECT * FROM EMPLOYEES;

