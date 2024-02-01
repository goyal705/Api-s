from flask import Flask,jsonify,request,render_template
from functions import readfile,adddata,putdata,addapikey,checkapikey
app=Flask(__name__)

@app.route("/")
def index():
    return render_template("index2.html")

@app.route("/getrequest",methods=["GET"])
def get_request():
    response=readfile()
    if "apikey" in request.headers:
        a=checkapikey(request.headers["apikey"])
        if a:  
            return jsonify(response)
        else:
            return jsonify({"Status":"Apikey not correct "})
    else:
        return jsonify({"Status":"Apikey not found"})
        
    

@app.route("/postrequest",methods=["POST"])
def post_request():
    data=request.get_json()
    if "apikey" in request.headers:
        a=checkapikey(request.headers["apikey"])
        if a:        
            for key in data:
                if key=="":
                    return jsonify({"Request Failed":"Give all the fields"})
            response=adddata(data)
            if response=="True":
                return jsonify({"Request Successful":f"Data Added with id {data['id']}"})
            else:
                return jsonify({"Request Failed":"Data with same id exists"})
        else:
            return jsonify({"Status":"Apikey not correct "})
    else:
        return jsonify({"Status":"Apikey not found"})

@app.route("/putrequest/<int:id>",methods=["PUT"])
def put_request(id):
    data_to_update=request.get_json()
    
    if "apikey" in request.headers:
        a=checkapikey(request.headers["apikey"])
        if a:     
            if id!=data_to_update["id"]:
                return jsonify({"message":"id mismatches from payload"})
            existing_data=readfile()
            
            for user in existing_data:
                if user["id"]==id:
                    #user exists
                    index=existing_data.index(user)
                    existing_data[index]=data_to_update
                    putdata(existing_data)
                    message=f"User with id {id} information updated"
                    return jsonify({"message":message})
            existing_data.append(data_to_update)
            putdata(existing_data)
            message=f"User with id {id} information added"
            return jsonify({"message":message})
        else:
            return jsonify({"message":"Apikey not correct"})
    else:
        return jsonify({"message":"Apikey not presenet"})

@app.route("/deleterequest/<int:id>",methods=["DELETE"])
def delete_request(id):
    if "apikey" in request.headers:
        a=checkapikey(request.headers["apikey"])
        if a:    
            originaldata=readfile()
            data_to_delete=next((user for user in originaldata if user["id"]==id),None)
            if data_to_delete:
                originaldata.remove(data_to_delete)
                putdata(originaldata)
                message=f"User data with id {id} is deleted"
                return jsonify({"message":message})
            else:
                message=f"User data with id {id} not present"
                return jsonify({"message":message})
        else:
            return jsonify({"message":"Apikey not correct"})
    else:
        return jsonify({"message":"Apikey not present"})
        
        
@app.route("/getapikey",methods=["POST"])
def getapikey():
    data=request.get_json()
    response=addapikey(data)
    return response

if "__main__"==__name__:
    app.run(port=5001,debug=True)