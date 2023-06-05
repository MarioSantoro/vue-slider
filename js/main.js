

const { createApp } = Vue;


  createApp({
    data() {
      return {
        image : ["./img/01.webp" , "./img/02.webp" , "./img/03.webp" , "./img/04.webp" , "./img/05.webp"],
        ActiveIndex : 0,
      }
    },

    mounted() {
        this.startInterval = setInterval(() => {
          this.NextImage();
        }, 3000);
    },

    methods : {
        PreviousImage(){
            if(this.ActiveIndex === 0){
                this.ActiveIndex = this.image.length - 1;
            }else{
                this.ActiveIndex--;
            }
            
        },

        NextImage(){
            if(this.ActiveIndex === this.image.length - 1){
                this.ActiveIndex = 0;
            }else{
                this.ActiveIndex++;
            }
            
        },

        goToImage(ActiveIndex){
            this.ActiveIndex = ActiveIndex;
        },

        stopInterval() {
            clearInterval(this.startInterval);
          }
    }
  }).mount('#app')