<template>
  <div>
    <div v-for="(message, index) in messages" :key="index">
      {{ getMessageWithOrdinal(index + 1) }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    messages: Array,
  },
  methods: {
    getMessageWithOrdinal(messageNumber) {
      const suffix = this.getOrdinalSuffix(messageNumber);
      return `Message ${messageNumber}${suffix}: ${this.messages[messageNumber - 1]}`;
    },
    getOrdinalSuffix(number) {
      const j = number % 10;
      const k = number % 100;
      if (j === 1 && k !== 11) {
        return 'st';
      }
      if (j === 2 && k !== 12) {
        return 'nd';
      }
      if (j === 3 && k !== 13) {
        return 'rd';
      }
      return 'th';
    },
  },
  updated() {
    // Calculate ordinal message when the component is updated
    const latestMessageNumber = this.messages.length;
    const latestMessageOrdinal = this.getMessageWithOrdinal(latestMessageNumber);
    console.log(`Latest Message: ${latestMessageOrdinal}`);
  },
};
</script>

<style scoped>

div {
  margin-bottom: 10px;
  border: 1px solid #ddd;
  padding: 8px;
  background-color: #f9f9f9;
}
</style>
