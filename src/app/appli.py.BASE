import db
import datetime
import sqlite3
db.create_tables()
def insert_data(exp):
    currenttime=datetime.date.today().isoformat()
    da = db.get_db()
    cursor = da.cursor()
    statement = "INSERT INTO calculate VALUES (?, ?)"
    cursor.execute(statement, (exp,currenttime))
    da.commit()  
    return "success"
def extract_rows(n):
    try:
        da = db.get_db()
        cursor = da.cursor()
        query=f"select * from calculate limit {n}"
        for row in cursor.execute(query):
            print(row)  
        return "Retrieved"  
    except sqlite3.Error as e:
        print("error occured ")
    da.commit()
