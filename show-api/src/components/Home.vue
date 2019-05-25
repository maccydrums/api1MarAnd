<template>
  <div class="hello">
    <h2>Students</h2>
    <ul v-for="user in users"
    :key="user.student.name"
    >
      <li>{{ user.student.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function(){
      return {
        users: []
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
h3 {
  margin: 40px 0 0;
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
