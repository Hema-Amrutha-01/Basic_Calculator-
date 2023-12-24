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
<<<<<<< HEAD
    return "successfully stored"
=======

    return "successfully stored"

>>>>>>> 265dbc5bb6bc21211e492d4480f72ef296e3a4c8
def extract_rows(n):

    try:

        da = db.get_db()

        cursor = da.cursor()

        query=f"select * from calculate limit {n}"
<<<<<<< HEAD
        
        for row in cursor.execute(query):
            print(row) 
        print(type(cursor.execute(query).fetchall())) 
        return cursor.execute(query).fetchall()
=======

       

        for row in cursor.execute(query):

            print(row)

        print(type(cursor.execute(query).fetchall()))

        return cursor.execute(query).fetchall()

>>>>>>> 265dbc5bb6bc21211e492d4480f72ef296e3a4c8
    except sqlite3.Error as e:

        print("error occured ")

    da.commit()

 

