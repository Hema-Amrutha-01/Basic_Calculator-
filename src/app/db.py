import sqlite3
DATABASE_NAME = "explain.db"


def get_db():
    conn = sqlite3.connect(DATABASE_NAME)
    return conn


def create_tables():
    table = """CREATE TABLE IF NOT EXISTS calculate(
                expression text,exectime  text)
            """
   # x="""alter table calculate add column userid text; """
    
    db = get_db()
    cursor = db.cursor()
    cursor.execute(table)