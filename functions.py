import json
import string
import random
import pymongo
import os

usernamedb=os.getenv("usernamedb")
password=os.getenv("password")

def readfile():
    filepath="text.txt"
    with open(filepath,"r") as file:
        response=json.load(file)
    return response

def adddata(data):
    filepath="text.txt"
    originaldata=readfile()
    for i in originaldata:
        if data["id"]==i["id"]:
            response="False"
            return response
    originaldata.append(data)
    with open(filepath,"w") as file:
        json.dump(originaldata,file,indent=2) 
    response="True"
    return response

def putdata(data):
    filepath="text.txt"
    with open(filepath,"w") as file:
        json.dump(data,file,indent=2) 
        
def generateapikey():
    letters = string.ascii_letters
    return ''.join(random.choice(letters) for _ in range(20))

def addapikey(data):
    status="False"
    try:
        apikey=generateapikey()
        data["apikey"]=apikey
        connection_url = f"mongodb+srv://{usernamedb}:{password}@cluster0.znfsndq.mongodb.net/?retryWrites=true&w=majority"
        client = pymongo.MongoClient(connection_url)
        db = client["API'S"]
        collection = db["Apikey"]
        collection.update_one({},{"$push":{"API":data}})
        status="True"
    except Exception as e:
        print("Err occ: ",e)
    finally:
        client.close()
        return {"Status":status,"apikey":apikey}
    
def checkapikey(apikey):
    connection_url = f"mongodb+srv://{usernamedb}:{password}@cluster0.znfsndq.mongodb.net/?retryWrites=true&w=majority"
    client = pymongo.MongoClient(connection_url)
    db = client["API'S"]
    collection = db["Apikey"]
    e=collection.find_one({})
    for i in e["API"]:
        if i.get("apikey")==apikey:
            client.close()
            return True
    client.close()
    return False