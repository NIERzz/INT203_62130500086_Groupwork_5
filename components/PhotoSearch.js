app.component('photo-search',{
    props: {
        searchbtn: Boolean,
        cancelbtn: Boolean,
        inputbtn: Boolean,
        

    },
template:
/*html*/
`
<div class="flex justify-end">
<button v-show="searchbtn" @click="mouseclicksearch"><img src="images/search.png"></button>
</div>
<input  v-show="inputbtn" type="text" v-model="searchphoto" placeholder="Enter a new task ..." class="p-2 ml-40 mt-5 bg-white rounded flex-1 border-b-2 border-blue-300 " @keyup.enter="searchingphoto" />
<button v-show="cancelbtn" @click="mouseclickcancel" class="bg-blue-200 rounded ml-3 p-2 text-xl text-white hover:bg-blue-300 hover:text-black">Cancel</button>
`,
data(){
    return {
    searchphoto: ''

    }
},

methods: {
    mouseclicksearch(){
        this.$emit('clicksearch')

    },
    mouseclickcancel(){
        this.$emit('clickcancel')

    },
    searchingphoto(){
        this.$emit('searching',this.searchphoto)

    }




}

}









)