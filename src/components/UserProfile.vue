
<template>
    <div>
      <h2>User Profile</h2>
      <p>Username: {{ userStore.username }}</p>
      <p>Email: {{ userStore.email }}</p>
  
      <button @click="updateUser">Update User</button>
      <button @click="clearUser">Clear User</button>
    </div>
  </template>
  
  <script>
  import { useUserStore } from '@/store/user';
  
  export default {
    setup() {
      const userStore = useUserStore();
  
      const updateUser = () => {
        userStore.setUser({
          username: 'john_doe',
          email: 'john@example.com',
        });
      };
  
      const clearUser = () => {
        userStore.clearUser();
      };
  
      return {
        userStore,
        updateUser,
        clearUser,
      };
    },
  };
  </script>
  