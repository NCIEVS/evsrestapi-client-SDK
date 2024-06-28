import requests
import datetime

headers = {'accept': 'application/json',
           'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'}
time1 = datetime.datetime.now()
site = 'https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/C3224/pathsFromRoot?include=summary'
x = requests.get(site, headers=headers)
time2 = datetime.datetime.now()
print(x.status_code)
print(time2 - time1)
print("site = " + site)
