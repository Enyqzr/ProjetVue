<script>

import City from "../components/City.vue";

export default {
  components: {
    City
  },
  data() {

    return {
      cities: [
        {
          id: 1,
          name: 'Ville 1',
          weather: 'Ensoleillé',
          temperature: 22.0,
          updatedAt: new Date()
        },
        {
          id: 2,
          name: 'Ville 2',
          weather: 'Peu nuageux',
          temperature: 19.5,
          updatedAt: new Date()
        }
      ]
    }
  }

}

</script>
<template>
  <div>
    <h1>Météo - Liste des villes</h1>
    <City name="Lyon" weather="Très beau temps" temperature=21.5 :update-at="new Date()"></City>
  </div>
</template>


