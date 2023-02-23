<template>
  <div>
    <h1>Users Table</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.username }}</td>
        </tr>
      </tbody>
    </table>
    <div>
    <h1>Hello from Vue1!</h1>
    <vue2-hello-world />
  </div>
  </div>

  <div>
    <h1>Email Sender</h1>
    <label for="recipient">Recipient:</label>
    <input type="text" id="recipient" v-model="recipient">
    <button @click="sendEmail">Send Email</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    axios.get('http://localhost/project-soa/php1/index.php')
      .then(response => {
        this.users = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    sendEmail() {
      axios.post('http://localhost/project-soa/php1/send-email.php', {
      })
    }
  },
  components: {
    Vue2HelloWorld: () => import('vue2/HelloWorld'),
  },
  
};
</script>
