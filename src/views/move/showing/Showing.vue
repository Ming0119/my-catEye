<template>
  <div class="showing-box">
      <dl v-for="(item,index) in list" :key="index">
          <dt>
              <img :src="item.img" alt="" @click="butEvDetail(item)">
          </dt>
            <dd class="name">
                {{item.nm}}
            </dd>
            
            <dd class="bune"> 
                    <span class="xp">选票</span>
                    <span  class="gp">购票</span>    
            </dd>
           
      </dl>
     
  </div>
</template>

<script>
export default {
    data() {
        return {
            list:[]
        }
    },
    
    created() {
        this.getMovieData()
    },
    methods:{
        getMovieData(){
            this.$http.get('/api/movieList').then(res=>{
                this.list=res.data.list.movieList
            })
        },
        butEvDetail(item){
            this.$router.push({
                path: `/detail/${item.id}`
            })
        }
    }
}
</script>

<style lang="scss">
.showing-box {
  width: 100%;
  dl {
    width: 100%;
    display: flex;
    dt {
     flex:6; 
     display: flex;
     justify-content: center;
     align-items: center;
     img {
       width: 80%;
       height: 80%;  
     }
    }
    dd {
      flex:4;
      display: flex;
      justify-content: center;
      align-items: center;
        .xp{
            display: inline-block;
            width: 2.5rem;
            height: 1.875rem;
            border-radius: 20px;
            background: red;
            color: #fff;
            text-align: center;
            line-height: 1.875rem;
        }
    }
  } 
}
</style>