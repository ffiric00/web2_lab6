<template>
  <div>
   
    <label for="messageInput">Type your message:</label>
    <input v-model="newMessage" @keyup.enter="sendMessage" id="messageInput" placeholder="Type your message" />
  <div>
    <label for="usernameInput">Username:</label>
    <!-- Use v-model for two-way binding -->
    <input v-model="username" id="usernameInput" placeholder="Enter your username" />
  </div>
  <p>Message Length: {{ messageLength }}</p> 
  <div>
    <UserList />
  </div>
</div>
</template>


<script>
import UserList from "@/components/UserList.vue"; 


export default {
  components: {
    UserList, 
  },
  data() {
   
    return {
      username: "",      
      newMessage: "",
      messages: [],
    };
  },
  computed: {
    messageLength() {
      return this.newMessage.length;
    },
  },
  methods: {
    sendMessage() {
      // Emit both username and newMessage
      this.$emit("message-sent", { username: this.username, message: this.newMessage });
      this.newMessage = "";
    },
    updateMessage() {
    
    },
  },
};
</script>

<style scoped>

label {
  font-weight: bold;
}

input {
  margin-bottom: 10px;
  width: 100%;
  padding: 8px;
}

p {
  color: #888;
}
</style>
