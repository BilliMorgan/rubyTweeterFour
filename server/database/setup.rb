require 'sqlite3'
db = SQLite3::Database.new "twitter.db"

#Create a table

db.execute <<-SQL
create table posts(
  tweet varchar(5000)
);
SQL