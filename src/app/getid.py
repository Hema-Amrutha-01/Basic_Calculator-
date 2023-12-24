from flask import Flask,request,jsonify
import xml.etree.ElementTree as ET
import xmltodict
app = Flask(__name__)

@app.route("/getId", methods = ["POST"])
def getId():
    try:
        re = request.form['data']
        print(re)
        root = ET.Element('root')
        for k, v in data.items():
            person = ET.SubElement(root, k)
            for i in v:
                sub = ET.SubElement(person, i)
        tree = ET.ElementTree(root)
        tree.write('order.xml')
       
    except Exception as e :
        print(e)
    return "SUCCESS"
if __name__ == "__main__":

    app.run(port=8080, debug=True, use_reloader=True)

