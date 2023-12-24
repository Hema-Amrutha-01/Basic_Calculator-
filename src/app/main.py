from flask import Flask, jsonify, request
import appli
import applir
import dbr
from flask_cors import CORS
import  db
import main2
x="N"
app = Flask(__name__)
CORS(app,resources={r"/*":{"origins":"*","methods":["GET","POST"]}})
#login 
@app.route("/can", methods=["POST"])
def fetch_try():
    try:
       ex= request.get_json()
       user = ex["user"]
       password=ex["password"]
       result = applir.check(user,password)

       if result=="Login Successful":
           global x
           x=user
       return jsonify({"result":result})
    except Exception as e:
        print("error")

#registration 
@app.route("/cant", methods=["POST"])
def add_user():
    try:
        ex= request.get_json()
        user = ex["user"]
        password=ex["password"]
        repass=ex["repass"]
        if password!=repass:
            result="password and confirm Pssword does not match..! "
        else:
           result = applir.insert_data2(user,password)
        print(result)
        return jsonify({"result":result})
    except Exception as e:
        print("error")
#adding data trail1
@app.route("/applican", methods=["POST"])
def insert_try():
    try:
       ex1= request.get_json()
       expression = ex1["expression"]
       result = appli.insert_data(expression,x)
       return jsonify({"result":result}),400
    except Exception as e:
        print("error")
#retrieving data history
@app.route("/applicant", methods=["POST"])
def get_try():
    try:
        ex1= request.get_json()
        n = ex1["n"]
        result= appli.extract_rows(n,x)
        return jsonify({"result":result}),200
    except Exception as e:
        print("error")

@app.route("/icant", methods=["POST"])
def log_try():
    try:
        global x
        x="N"
        
        return jsonify({"result":"Logout Successful"}),200
    except Exception as e:
        print("error")

print(x)
'''@app.route("/applican", methods=["DELETE"])

def del_try():

    ex2=request.get_json()

    expression1=ex2["expression1"]

    result1=appli.del_data(expression1)

    return jsonify({"result":result1}),300'''
if __name__ == "__main__":

    db.create_tables()
    app.run(port=8080, debug=True, use_reloader=True)

