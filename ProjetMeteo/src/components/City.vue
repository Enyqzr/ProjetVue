<template>

<p> Le nom de ma ville : {{name}}</p>
  <p>Météo : {{weather}}</p>
  <p>Température :  {{temperature}}</p>
  <p>Mis a jour :  {{toString}}</p>
</template>

<script>
export default  {
  props: {
    name: String,
    weather: String,
    temperature: Number,
    updateAt: Date,
  },
  computed:{
    toString(){
      return this.updateAt.toLocaleString()
    }
  }
}









</script>