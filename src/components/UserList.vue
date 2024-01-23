
<template>
    <div>
      <h2>User List</h2>
      <ul>
        <li v-for="(user, index) in userList" :key="index">{{ user }}</li>
      </ul>
      <input v-model="newUser" @keyup.enter="addUser" placeholder="Enter a new user" />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newUser: "",
        userList: [],
      };
    },
    methods: {
      addUser() {
        if (this.newUser.trim() !== "") {
          this.userList.push(this.newUser.trim());
          this.newUser = "";
        }
      },
    },
  };
  </script>
  
  <style scoped>

  h2 {
    color: #007bff;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 8px;
  }
  </style>
  