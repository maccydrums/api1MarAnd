<template>
  <div class="hello">
    <h2>Students</h2>
    <v-table :data="users">
      <thead slot="head">
        <th>Namn</th>
        <th>Email</th>
        <th>Address</th>
      </thead>
      <tbody slot="body" slot-scope="{displayData}">
        <tr v-for="row in displayData" :key="row.id">
          <td>
            <b-list-group-item>{{row.student.name}}</b-list-group-item>
          </td>
          <td>
            <b-list-group-item>{{row.student.email}}</b-list-group-item>
          </td>
          <td>
            <b-list-group-item>
              {{row.student.address.gata}},
              {{row.student.address.postnummer}},
              {{row.student.address.ort}}
            </b-list-group-item>
          </td>
          <td>
            <b-button @click="onDelete" value="1" id="knapp" variant="outline-danger">Delete</b-button>
          </td>
        </tr>
      </tbody>
    </v-table>
    <div class="form">
      <h2>Add a student:</h2>
      <b-form @submit="onSubmit" v-if="show">
        <b-form-group id="input-group-1" label="Email:" label-for="input-1">
          <b-form-input id="input-1" v-model="form.email" type="email" required placeholder="Email"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Namn:" label-for="input-2">
          <b-form-input id="input-2" v-model="form.name" required placeholder="Skriv in namn"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Gata:" label-for="input-3">
          <b-form-input id="input-3" v-model="form.gata" required placeholder="Gata"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-4" label="Postnummer:" label-for="input-4">
          <b-form-input id="input-4" v-model="form.postnummer" required placeholder="Postnummer"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-5" label="Ort:" label-for="input-5">
          <b-form-input id="input-5" v-model="form.ort" required placeholder="Ort"></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      users: [],
      form: {
        email: "",
        name: "",
        gata: "",
        postnummer: "",
        ort: ""
      },
      show: true,
    };
  },
  methods: {
    onSubmit() {
      // evt.preventDefault();
      const newUser = {
        student: {
          email: this.form.email,
          name: this.form.name,
          address: {
            gata: this.form.gata,
            postnummer: this.form.postnummer,
            ort: this.form.ort
          }
        },
      };
      console.log(newUser);
      fetch('http://localhost:3000/students', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(newUser)
       })
        .catch((error) => {
          console.log(error);
        });
    },
    onDelete(evt) {
      evt.preventDefault();
      // fetch('http://localhost:3000/students', {
      //   method: 'DELETE',
      //   headers: { 'content-type': 'application/json' },
      //   body: JSON.stringify(newUser)
      //  })
      //   .catch((error) => {
      //     console.log(error);
      //   });
      this.$emit('on-Delete', console.log(this.value))
      // console.log(this.$refs.working.value);
    },
    fetchData: function() {
      const myRequest = new Request("http://localhost:3000/students");

      fetch(myRequest)
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.users = data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },

  mounted() {
    this.fetchData();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 900px;
  background-color: transparent;
}
#knapp {
  height: 50px;
  width: 80px;
}
.form {
  display: flex;
  flex-direction: column;
  margin-top: 90px;
  width: 60%;
}
#input-group-1,
#input-group-2,
#input-group-3,
#input-group-4,
#input-group-5 {
  text-align: left;
  font-weight: 600;
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
