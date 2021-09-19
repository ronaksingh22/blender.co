#! Etherscan Transaction and Balaance scraper

import json
import requests

address=input("Enter addess: ")

#returns 10 last records from the oldest to the newest
#However, this can give 10,000 records max
url_1="http://api.etherscan.io/api?module=account&action=txlist&address="+ address + \
     "&startblock=0&endblock=99999999&page=10&offset=10&sort=desc&apikey=YourApiKeyToken"

response= requests.get(url_1)
                        
address_content=response.json()
result_1= address_content.get("result")

for n, transaction in enumerate(result_1, start=1):
    hash= transaction.get("hash")
    time_stamp=transaction.get("timeStamp")
    tx_from=transaction.get("from")
    tx_to=transaction.get("to")
    value=transaction.get("value")
    confirmations=transaction.get("confirmations")
                                  
    print("Transaction ID: ", n)
    print("hash: ", hash)
    print("Time Stamp", time_stamp)
    print("from: ", tx_from)
    print("to: ", tx_to)
    print ("value: ", value)
    print ("confirmations: ", confirmations)
    print ("\n")



#Scraping Balance ether 

url_2=("https://api.etherscan.io/api?module=account&action=balance&address="+ address +"&tag=latest&apikey=YourApiKeyToken")

results=requests.get(url_2)
#results=requests.get(url)

addr_content=results.text

dic_addr_content=json.loads(addr_content)

print ("BALANCE: \n" + dic_addr_content["result"] +" "+ "ether")


#END
