<template>
  <div id="app">
    <h1>{{msg}}</h1>
    <button v-on:click = "getExample()">Load Message</button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'app',
  data () {
    return {
      msg: 'What is the message?'
    }
  },
  methods:{
    getExample:function(){
      let vm = this;
      axios.get('/api/example').then(function(res){
        vm.msg = res.data;
      })
    }
  },
  beforeMount(){
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
