CREATE DATABASE 测试数据库
  DEFAULT CHARACTER SET utf8
  COLLATE utf8_general_ci;


CREATE TABLE 测试用例 (
  主键 INTEGER      AUTO_INCREMENT PRIMARY KEY,
  名字 VARCHAR(255) DEFAULT '',
  说明 TEXT         DEFAULT ''
);

INSERT INTO 测试用例 (名字, 说明) VALUES
  ('甲', '测试用例甲'),
  ('乙', '测试用例乙'),
  ('丙', '测试用例丙'),
  ('丁', '测试用例丁');
