const { createApp } = Vue;

createApp({
    data(){
        return {
            titolo: "Io sono un titolo creato con Vuejs",
            immagine: "https://picsum.photos/200/300"
        }
    }
}).mount("#app")