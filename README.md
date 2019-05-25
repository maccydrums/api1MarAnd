# api1MarAnd:
## Marcus Andersson

curl -X POST "localhost:3000/students" -H "accept: application/json" -H "Content-Type: application/json" -d '{"student":{"email":"jonasforsberg@live.com", "name":"Jonas Forsberg"}, "address":{"gata":"Chokladvägen 55B", "postnummer":"302 43", "ort":"Linköping"}}' | jq