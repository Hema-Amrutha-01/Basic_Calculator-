import sqlite3
DATABASE_NAME = "explain.db"


def get_db():
    conn = sqlite3.connect(DATABASE_NAME)
    return conn


def create_tables():
    table2 = """CREATE TABLE IF NOT EXISTS login( id text,
                password  text)
            """
    db = get_db()
    cursor = db.cursor()
    cursor.execute(table2)