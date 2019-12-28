<template>
  <div class="upcoming-box">
      <div class="swipt-box">
          <SwipterBar :swpirData="swpirData"></SwipterBar>
      </div>
      <div class="upcoming-con">
          <dl class="upcoming" v-for="(item, index) in upcomingData" :key="index">
       <dt>
         <img :src="item.img" alt="">
       </dt>
       <dd>
         {{item.nm}}
       </dd>
     </dl>

      </div>
  </div>
</template>

<script>
import SwipterBar from '../../../components/SwipteBar'
export default {
    data() {
        return {
            swpirData:[],
            upcomingData:[]
        }
    },
    components:{
        SwipterBar
    },
    created(){
            this.getswipeData()
            this.getupcomingData()
    },
    methods:{
        //轮播图数据
        getswipeData(){
            this.$http.get('/api/carousel').then(res=>{
                this.swpirData=res.data.list.coming
            })
        },
        //即将上映数据
        getupcomingData(){
            this.$http.get('/app/upcoming').then(res=>{
                this.upcomingData=res.data.list.coming
            })
        }
    }
}
</script>

<style lang="scss">
    .upcoming-box{
        width: 100%;
        height: 100%;
        .swipt-box{
            width: 100%;
            height: 100%;
            margin-top:1.25rem;
        }
        .upcoming {
    width: 100%;
    display: flex;
    dt {
      flex:6;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 80%;
        height: 90%;
      }
    }
    dd {
      flex:4;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
    }

</style>