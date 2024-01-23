<template>
  <header> 
    <nav class="d-flex justify-content-center 
    bglight border border-bottom 
    border-dark p-3 w-100">
    <RouterLink to="/ChatRoom1">ChatRoom1</RouterLink> | 
    <RouterLink to="/ChatRoom2">ChatRoom2</RouterLink>
    </nav> 
  </header> 
  <RouterView/>
 <div id="app">
  <MessageComponent :messages="messages" />
  <ChatInput @message-sent="addMessage" />
  <UserProfile />
  </div>
</template>

<script>
import MessageComponent from "@/components/MessageComponent.vue";
import ChatInput from "@/components/ChatInput.vue";
import UserProfile from '@/components/UserProfile';



export default {
  components: {
    MessageComponent,
    ChatInput,
    UserProfile,
  },
  data() {
    return {
      messages: [],
    };
  },
  methods: {
    addMessage({ username, message }) {
      // Format the message with the username
      const formattedMessage = `${username}: ${message}`;
      this.messages.push(formattedMessage);
  },
},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
