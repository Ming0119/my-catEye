<template>
  <div>
     <p>账号：<input type="text" v-model="username"></p> 
     <p>密码：<input type="password" v-model="pwd"></p>
    <button @click="btnEvLogin">登入</button>
  </div>
</template>

<script>
export default {
data() {
    return {
        username:'',
        pwd:''
    }
},
methods:{
    btnEvLogin(){
        if(this.username&&this.pwd){
            this.$http.get('/app/login',{
                 params: {
                    user: this.username,
                    pwd: this.pwd
                 }
            }).then(res=>{
                if(res.data.errCode===0){
                    localStorage.setItem('token',res.data.token)
                     this.$router.push({
                    path: '/movie/released'
             })
                 res.data.push(params)
                }else {
             alert('登陆失败请重新登陆')
          }
            })
        }
    }
}
}
</script>

<style>

</style>