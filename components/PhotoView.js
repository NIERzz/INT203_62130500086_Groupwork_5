app.component('photo-view',{
props:{
    popup: Boolean,
    bigphos: String,
},
template:
/*html*/
`
    <div v-show="popup" class="text-right bg-black px-9 pb-9">
    <button v-on:click="$emit('popupfunc',-1)" class="m-1 text-2xl text-white">X</button>
    <img :src="bigphos">
    </div>
`,
methods:{
    
}






})