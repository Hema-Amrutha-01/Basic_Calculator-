import dbr
import sqlite3
dbr.create_tables()
def insert_data2(us,pa):
    da = dbr.get_db()
    cursor = da.cursor()
    statement = "INSERT INTO login  VALUES (?, ?)"
    cursor.execute(statement, (us,pa))
    da.commit() 
    return " user added "
def extract_rows(n):
    try:
        da = dbr.get_db()
        cursor = da.cursor()
        query=f"select * from login limit {n}"

        for row in cursor.execute(query):
            print(row) 
        return "retireved"
    except sqlite3.Error as e:
        print("error occured ")
    da.commit()
def check(user,password):
    try:
        x="error"
        da = dbr.get_db()
        cursor = da.cursor()
        statement = f"select id  from login where id = '{user}' and password ='{password}'"
        cursor.execute (statement)
        if not cursor.fetchone():
            x="username or password in correct"
        else:
            x="Login Successful"
        da.commit()
        
        return x
    except Exception as e:
        print("error")

