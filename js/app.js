const { createApp } = Vue
  createApp({
    // dati dell'app
    data(){
      return {
        // array di oggetti delle slides
        slides: [
          {
            image: 'img/01.webp',
            title: 'Marvel\'s Spiderman Miles Morale',
            text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
          }, {
            image: 'img/02.webp',
            title: 'Ratchet & Clank: Rift Apart',
            text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
          }, {
              image: 'img/03.webp',
              title: 'Fortnite',
              text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
            }, {
              image: 'img/04.webp',
              title: 'Stray',
              text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
          }, {
              image: 'img/05.webp',
              title: "Marvel's Avengers",
              text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
          }
        ],
        // counter slide attiva
        activeImg: 0,
        // autoplay
        autoplay: false
      }
    },
    // metodi dell'app
    methods: {
      goNext(){
        if (this.activeImg < this.slides.length -1) {
          this.activeImg++
        }else{
          this.activeImg = 0
        }
      },
      goPrev(){
        if (this.activeImg > 0) {
          this.activeImg--
        }else{
          this.activeImg = this.slides.length -1
        }
      },
      goTo(index){
        this.activeImg = index
      },
      //* bonus 2 ~~~~~~~~~~
      setAutoplay(){
        if (!this.autoplay) {
          console.log('Autoplay Started');
          this.autoplay = setInterval( ()=> {
            this.goNext()
          },3000)
        }
      },
      stopAutoplay(){
        if (this.autoplay) {
          console.log('Autoplay stopped');
          clearInterval(this.autoplay)
          this.autoplay = false
        }
      },
      //* ~~~~~~~~~~~~~~~~~~
      doesWork(){
        console.log('yes it works');
      }
    },
    created(){
      this.setAutoplay()
    }
  }).mount('#app')








console.log('js ok');





/* 
createApp({
    data() {
      return {
        movie: {
          images:[

          ],
          activeImg: 0,
          title:'the mandalorian',
          category:'action',
          length:120,
        }
      }
    }
    methods: {
      goNext(){
        if (this.movie.activeImg < this.movie.images.length -1 ) {
          this.movie.activeImg++
        }else{
          this.movie.activeImg = 0
        }
      },       

      goPrev(){
        if (this.movie.activeImg > 0) {
          this.movie.activeImg--
        } else {
          this.movie.activeImg = this.movie.images.length
        }
      }
    }
  }).mount('#app') */