<template>
  <div class="hello">
    <h2>Students</h2>
    <!-- <ul v-for="user in users"
    :key="user.student.name"
    >
      <li>{{ user.student.name }}</li>
    </ul> -->
    <v-table :data="users">
    <thead slot="head">
        <th>Namn</th>
        <th>Email</th>
        <th>Address</th>
    </thead>
    <tbody slot="body" slot-scope="{displayData}">
        <tr v-for="row in displayData" :key="row.id">
          <td>
            <b-list-group-item button>
              {{row.student.name}}
            </b-list-group-item>
          </td>
          <td>
            <b-list-group-item button>
              {{row.student.email}}
            </b-list-group-item>
          </td>
          <td>
            <b-list-group-item button>
              {{row.student.address.gata}}, 
              {{row.student.address.postnummer}},
              {{row.student.address.ort}}
            </b-list-group-item>
          </td>
          <td>
             <b-button id="knapp" variant="outline-success">Delete</b-button>
          </td>
        </tr>
    </tbody>
  </v-table>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      users: [],
      items: [
        { name: 40, email: 'Dickerson', address: 'Macdonald' },
        { name: 40, email: 'Dickerson', address: 'Macdonald' }
      ]
    }
  },
  methods: {
    fetchData: function () {
      const myRequest = new Request('http://localhost:3000/students')

      fetch(myRequest)
        .then((response) => { return response.json() })
        .then((data) => {
          this.users = data
        }).catch( error => { console.log(error); });
    }
  },

  mounted() {
    this.fetchData()
    console.log(this.users)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 900px;
  background-color: transparent;
}
#knapp {
  height: 50px;
  width: 80px;
}
h2 {
  margin-top: 20px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
