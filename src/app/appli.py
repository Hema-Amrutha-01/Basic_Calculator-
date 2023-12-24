import db
import datetime
import sqlite3
db.create_tables()
def insert_data(exp,x):
    currenttime=datetime.date.today().isoformat()
    da = db.get_db()
    cursor = da.cursor()
    statement = "INSERT INTO calculate VALUES (?, ?,?)"
    cursor.execute(statement, (exp,currenttime,x))
    da.commit()  
    return "successfully stored"
def extract_rows(n,user):
    try:
        da = db.get_db()
        cursor = da.cursor()
        query=f"select * from calculate  where userid= '{user}' limit {n}"      
        for row in cursor.execute(query):
            print(row) 
        return cursor.execute(query).fetchall()
    except sqlite3.Error as e:
        print("error occured ")
    da.commit()

