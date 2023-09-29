```






<template>

<div>

  <h1 :style="{color: Rouge ? 'purple' : ''}">{{message}}</h1>

<h2 :style="{color: Rouge ? 'purple' : ''}">Deuxième titre</h2>

  <input v-model="newMessage" type="text" placeholder="Tapez ici pour modifier">

<button @click="updateMessage">Appuyez Moi</button>

  <input type="checkbox" v-model="Rouge">

  <input type="checkbox" v-model="toggle">

  <img :style ="{display: toggle ? 'inline' : 'none'}" :src="image">

</div>

</template>


<script>


export default {

  data(){

    return {

    message:"Hello World",

    newMessage: "",

    toggle: false,

    Rouge: false,

      image: 'https://assets.turbologo.com/blog/fr/2021/09/21101525/anime-logo.png'

    };

  },

  methods: {

  updateMessage() {

  this.message = this.newMessage;

  }

}


}

</script>




```