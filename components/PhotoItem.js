app.component('photo-item',{
    props:{
        photos: {
            type: Array,
            require: true,
        }
    },
template:
/*html*/
`<ul class="flex flex-col space-y-5 ">
                  <li v-show="photo.show" v-for="(photo,index) in photos" class="flex items-center mt-5 ">
                    <button v-on:click="popupfunc(index)" ><img :src="photo.url" width="200" height="200"></button>
                    <span  class="text-xl font-medium ml-5 w-64" >{{ photo.alt }}</span>
                    <span v-show="photo.done" class="ml-5"><img src="images/heart.png" width="25"></span>
                  </li>
                  <li> {{ checkItems }} </li>
                </ul>`,


methods:{
    popupfunc(index){
        this.$emit('popup',index)
    },
    
  

},
computed:{

    checkItems(){
        let count = 0
        for(let i = 0; i< this.photos.length;i++){
            if(this.photos[i].show == true) count++;
        }
        if(count == 0) return "No photo.";
    }

}

})




























