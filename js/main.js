// Descrizione:
// Attraverso l’apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.


const { createApp } = Vue;

createApp({
    data() {
        return {
            // array che conterrà le mail generate
            arrayEmail: [],
            // Numero fisso di email.da generare
            numberEmail: 10
        }
    },
    methods: {
        genera(numberEmail) {
            // Svuota l'array prima di generarne di nuove
            this.arrayEmail = [];
            // ciclo
            for (let i = 0; i < numberEmail; i++){
                // apposita API di Boolean
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((result) => {
                    // push delle email che verranno generate dal ciclo
                    this.arrayEmail.push(result.data.response);
                });
            }
        }
    },
    mounted(){
        // Genera l'email quando il numero prestabilito è raggiunto
        this.genera(this.numberEmail);
    }

}).mount('#app');