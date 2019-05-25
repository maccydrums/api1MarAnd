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

* POST
```
curl -X POST "localhost:3000/students" -H "accept: application/json" -H "Content-Type: application/json" -d '{"student":{"email":"carham@hotmail.com", "name":"Charlie Carham"}, "address":{"gata":"Framtidsvägen 7A", "postnummer":"352 22", "ort":"Växjö"}}' | jq
```

* PATCH
```
curl -X PATCH "localhost:3000/students/_id" -H "accept: application/json" -H "Content-Type: application/json" -d '{"student":{"email":"micke2@live.com", "name":"Mikael Ahlén"}, "address":{"gata":"Chokladvägen 55B", "postnummer":"302 43", "ort":"Växjö"}}' | jq
```

* DELETE
```
curl -X DELETE "localhost:3000/students/_id" -H "accept: application/json" | jq
```
