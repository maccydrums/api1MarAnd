# Marcus Andersson - inlämningsuppgfit 1

## Instructions
```
Go inside server folder and run:

npm install 
->
npm run dev
```
```
Go inside vue-app folder and run:

npm install 
->
npm run serve
```
---

* GET
```
curl localhost:3000/students | jq
```

* GET {_id}
```
curl localhost:3000/students/5ce91a496534cc4e1345ffbc | jq
```

* GET with params
```
curl -X GET "localhost:3000/students?name=Charlie+Carham" | jq
```

* POST
```
curl -X POST "localhost:3000/students" -H "accept: application/json" -H "Content-Type: application/json" -d '{
    "student": {
      "email": "becca.karlsson@live.com",
      "name": "Rebecca Karlsson",
      "address": {
        "gata": "Storgatan 11B",
        "postnummer": "341 40",
        "ort": "Göteborg"
        },
      },
    }' | jq
```

* PATCH
```
curl -X PATCH "localhost:3000/students/5ce923a558184a53e0983652" -H "accept: application/json" -H "Content-Type: application/json" -d '{
    "student": {
      "email":"kalle@mail.com",
      "name": "Kalle Karlsson",
      "address": {
        "gata": "Kalle 10",
        "postnummer":"kalle 33",
        "ort":"kalle"
        }
      }
    }' -i
```

* DELETE
```
curl -X DELETE "localhost:3000/students/5ce923a558184a53e0983652" -H "accept: application/json" -i
```

* PUT
```
 curl -X PUT "localhost:3000/students/5ce923a558184a53e0983652" -H "accept: application/json" -H "Content-Type: application/json" -d '{
   "student": {
      "email":"carham@mail.com",
      "name": "Cara Carham",
      "address": {
        "gata": "Carstreet 10",
        "postnummer":"353 33",
        "ort":"Cartown"
        }
      }
    }' -i
```
---
## Teoretisk del:
* Hur används HTTP-protokollet när du surfar in på en websida? Beskriv vilken metod, path, URI, response code och body som skickas in och svarar. Om du har svårt att bestämma dig för en url, ta ex. http://www.smp.se/kultur-noje/

* Beskriv HTTP-protokollets vanligaste metoder och vad de gör.

* "http://localhost:3000/users?username=something" är en URI, beskriv vilka delar den består av och vad de kallas.

* På vilka tre sätt kan man skicka in parametrar i en HTTP-request? Ge exempel med curl.


## Feedback:
* Kursens takt:
* Kursmaterial:
* Format: