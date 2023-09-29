<template>
  <div>
    <button @click="showAlert">Cliquez ici</button>
    <p>Nombre de clics : {{clickCount}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clickCount: 0,
    };
  },
  methods: {
    showAlert() {
      this.clickCount++;
      alert('Vous avez cliqué sur le bouton!');
    },
  },
};

</script>

<style scoped>

</style>