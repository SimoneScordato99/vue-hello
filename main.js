const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Ciao sono Simone!!!',
      scrittura: ""
    }
  },
  methods: {
    scrivi(){
        this.scrittura= "Ciaooooooo"
    }
  },
}).mount('#app')