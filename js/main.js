

const { createApp } = Vue;


  createApp({
    data() {
      return {
        images : [
            {
               image: "./img/01.webp"
            },
            {
                image: "./img/02.webp"
             } , 
             {
                image: "./img/03.webp"
             } , 
             {
                image: "./img/04.webp"
             } , 
             {
                image: "./img/05.webp"
             } , 
        ],

        ActiveIndex : 0,
      }
    },

    mounted() {
        this.AutoPlay();
    },

    methods : {

        AutoPlay(){
            this.startInterval = setInterval(() => {
                this.NextImage();
            }, 3000);
        },

        PreviousImage(){
            if(this.ActiveIndex === 0){
                this.ActiveIndex = this.images.length - 1;
            }else{
                this.ActiveIndex--;
            }
            
        },

        NextImage(){
            if(this.ActiveIndex === this.images.length - 1){
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
        },


    }
  }).mount('#app')