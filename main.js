const app = Vue.createApp({
    data() {
        return {
            photos: [{
                    url: 'images/photo1.jfif',
                    alt: 'grow tower under grey sky',
                    show: true
                },
                {
                    url: 'images/photo2.jfif',
                    alt: 'Green grass field during daytime',
                    show: true
                },
                {
                    url: 'images/photo3.jfif',
                    alt: 'gray concrete castle on green grass field',
                    show: true
                }
            ],
            searchbtn: true,
            cancelbtn: false,
            inputbtn: false,
            searchphoto: '',
            popup: false,
            bigphos: "",

        }
    },
    methods: {
        toggleheart(index) {
            this.photos[index].done = !this.photos[index].done
        },
        mouseclicksearch() {
            this.searchbtn = false
            this.cancelbtn = true
            this.inputbtn = true
        },
        mouseclickcancel() {
            this.cancelbtn = false
            this.searchbtn = true
            this.inputbtn = false
            for (i = 0; i < this.photos.length; i++) {
                this.photos[i].show = true;
            }
        },
        searchingphoto(input) {
            this.searchphoto = input;
            if (this.searchphoto) {
                for (i = 0; i < this.photos.length; i++) {
                    if (this.photos[i].alt.toLowerCase().includes(this.searchphoto.toLowerCase())) {
                        this.photos[i].show = true;
                    } else {
                        this.photos[i].show = false;
                    }
                }
            }
        },
        popupfunc(index){
            if(index == -1){
                this.popup = false;
                this.bigphos = "";
                return;
            } 
            else  {
            this.popup = true;
            this.bigphos = this.photos[index].url;
            }
        }

    },

    computed: {
        countphoto() {
            return this.photos.filter(t => !t.done).length
        },
        checkItems(){
            let count = 0
            for(let i = 0; i< this.photos.length;i++){
                if(this.photos[i].show == true) count++;
            }
            if(count == 0) return "No photo.";
        }
    },


}
)