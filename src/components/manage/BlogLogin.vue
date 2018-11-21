<template>
  <div>
    <blog-header></blog-header>
    <hr/>
    <div>
      用户名:<input type="text" v-model="loginInfoVo.username" placeholder="请输入用户名" />
      <br/>
      密码：<input type="password" v-model="loginInfoVo.password" placeholder="请输入密码" />
      <br/>
      <button v-on:click="login">登录</button>
      <br/>
      登录验证情况：<textarea cols="30" rows="10" v-model="responseResult"></textarea>
    </div>
    <hr/>
    <blog-footer></blog-footer>
  </div>

</template>
<script>
  import blogHeader from '@/components/common/BlogHeader.vue'
  import blogFooter from '@/components/common/BlogFooter.vue'
  export default{
    name:'BlogLogin',
    components:{blogHeader,blogFooter},
    data(){
      return{
        LoginInfoVo:{username:'',passwword:''},
        responseResult:[]
      }
    },
    methods:{
      login(){
        this.$axios.post('/login',{
          username:this.LoginInfoVo.username,
          password:this.LoginInfoVo.username
        }).then(successMessage=>{
          this.responseResult = JSON.stringify(successResponse.data)
          if(successResponse.data.code == 200){
            this.$router.replace(path:'index')
          }
        }).catch(failResponse =>{})
      }
    }
  }
</script>
