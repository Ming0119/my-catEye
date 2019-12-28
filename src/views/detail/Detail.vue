<template>
  <div>
       <dl class="upcoming" v-for="(item, index) in detaliData" :key="index">
       <dt>
         <img :src="item.img" alt="">
       </dt>
       <dd>
         {{item.nm}}
       </dd>
     </dl>
    
  </div>
</template>

<script>
export default {
    data() {
        return {
           detaliData:[] 
        }
    },
    created(){
        console.log(this.$route.params.id);
        this.getDetailData()
    },
    methods:{
       getDetailData(){
            this.$http.get('/app/detail',{
              params:{
                  id: this.$route.params.id
                  }
            }).then(res=>{
                this.detaliData=res.data.list
            })
        }
    }
}
</script>

<style>

</style>