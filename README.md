# api1MarAnd:
## Marcus Andersson

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
curl -X POST "localhost:3000/students" -H "accept: application/json" -H "Content-Type: application/json" -d '{"student":{"email":"carham@hotmail.com", "name":"Charlie Carham", "address":{"gata":"Framtidsvägen 7A", "postnummer":"352 22", "ort":"Växjö"}}}' | jq
```

* PATCH
```
curl -X PATCH "localhost:3000/students/5ce923a558184a53e0983652" -H "accept: application/json" -H "Content-Type: application/json" -d '
{ "student": { "email":"kalle@mail.com", "name": "Kalle Karlsson", "address": { "gata": "Kalle 10",  "postnummer":"kalle 33", "ort":"kalle" }}}' -i
```

* DELETE
```
curl -X DELETE "localhost:3000/students/5ce923a558184a53e0983652" -H "accept: application/json" -i
```

* PUT
```
 curl -X PUT "localhost:3000/students/5ce923a558184a53e0983652" -H "accept: application/json" -H "Content-Type: application/json" -d '{ "student": { "email":"carham@mail.com", "name": "Cara Carham"}, "address": { "gata": "Carstreet 10",  "postnummer":"353 33", "ort":"Cartown" }}' -i

```