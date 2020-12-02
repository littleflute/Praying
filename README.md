# Praying
A website that praying for everyone
https://cccc-engineer.github.io/Praying/

check out our organization forum website:https://lihaoz8.wixsite.com/main/blog

[How to start this project?]

1. Start backend server
  - cd mybackend
  - node app.js

2. Make sure your MYSQLWorkbench is running on the background

3. Start frontend webpage
  - cd myfrontend
  - npm install
  - npm start

[Set up process]

1. Install NodeJS on your computer (for npm)

2. Install MYSQL and MYSQLWorkbench on your computer

3. Open MYSQLWorkbench, you will see MySQL Connections:
  - Click on '+' to add a connection
  - Name a 'Connection Name', you can leave the other parameters as default values, click on 'OK'
  - Right Click in the "SCHEMAS" section, click on "create schema", then create tables
  - In the MYSQL table, create field type and field name, assign values to it

4. Contact Bill if you have any further questions

[TroubleShoot]

*If you see 'Access denied for user...'
Put this command in the query: ALTER USER 'root'@'localhost' IDENTIFIED BY '9112345';
Note: '9112345' is the default password as administrators
Go to Navigation tab -> Query -> 'Execute Current statement'
