<template>
  <div id="app">
    <div class="header">
        <h3>猫眼电影</h3>
    </div>
    <main class="main"><router-view/></main>
    <div class="footer">
        <FooterBar></FooterBar>
    </div>

  </div>
</template>



<script>
import FooterBar from './components/FooterBar'
export default {
    components:{
        FooterBar
    }
}
</script>


<style lang="scss">
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
html,body{
    width: 100%;
    height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
   width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 14px;
}

.header{
    width: 100%;
    height: 2.8125rem;
    background: skyblue
}
.main{
    flex: 1;
    overflow: auto;
}
.footer{
    width: 100%;
    height: 2.8125rem;
    background: #ccc;
    a{
        display: inline-block;
        
        width: 33%;
        height: 2.8125rem;
        text-align: center;
        line-height: 2.8125rem;
        text-decoration: none;
        color: #000;
        &.router-link-exact-active {
            background: orangered;
      color: #fff;
    }
    }
}
// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }

</style>
