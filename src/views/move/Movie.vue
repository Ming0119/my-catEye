<template>
  <div class="movie-box">
      <div class="nav">
          <router-link to="/movie/showing">正在热映</router-link>
          <router-link to="/movie/upcoming">即将上映</router-link>
      </div>
     <div class="main">
         <router-view></router-view>
     </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.movie-box{
    width: 100%;
    height: 100%;
    .nav{
        width: 100%;
        height: 3.125rem;
        margin-top: 30px;
         position: sticky;
    left:0;
    top:0;
       
        a{ 
            background: #eee;
            display: inline-block;
            width: 50%;
            height: 100%;
            text-align: center;
            line-height: 3.125rem;
            color: #000;
            font-size: 18px;
            text-decoration: none;
              &.router-link-exact-active {
            background: red;
      color: #fff;
    }

        }
    }
}
</style>