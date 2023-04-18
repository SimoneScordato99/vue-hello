const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Ciao sono Simone!!!',
      scrittura: "",
      immagine: "https://www.adesso-online.de/sites/adesso.spotlight-verlag.de/files/2018-10/ciao_compleanno.jpg"
    }
  },
  methods: {
    scrivi(){
        this.scrittura= "Ciaooooooo"
    },
    
  },
}).mount('#app')