
Components List:

LoginNav.js
MyAcctNav.js
Footer.js
Register.js
Login.js
Home.js
BuildSeq.js
SavedSeq.js
MangAcct.js


DATABASE TABLES

USER TABLE:
user_id
first_name
last_name
gender
email
phone
address
saved_sequences

YOGA POSES TABLE:
json object{}

* I need to eventually Lift state in my app.

Heroku db commands

Add a db to Heroku:
* heroku pg:push mylocaldb users --app karma-yoga-mats

Connect to Heroku from psql in iterm2:
* heroku psql -a karma-yoga-mats

Login to Heroku
* heroku login

Deploy to heroku
* git push heroku master