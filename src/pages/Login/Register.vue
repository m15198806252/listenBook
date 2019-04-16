<template>
    <section>
        <div class="page-hd"><img class="img-block" src="1.png"></div>
        <div class="page-bd">
              <form @submit.prevent='register($event)' novalidate>
                <mt-field class='input-container' v-model="form.username" type='name' placeholder='请输入用户名'></mt-field>
                <mt-field class='input-container' v-model="form.phone" type='tel' placeholder='请输入手机号码'></mt-field>
                <mt-field class='input-container captcha-container' v-model="form.code" type='text' placeholder='请输入验证码'>
                  <button  class="mint-button btn-captcha mint-button--normal" type='button' @click='getSms'>获取短信验证码</button>
                  <button  class="mint-button btn-show-captcha mint-button--normal" type='button' disabled>{{leftTime}}s后重新获取</button>
                </mt-field>
                <mt-field class='input-container' v-model="form.password" :type='pwdType' placeholder='请输入密码(6~12位字母和数字组合)'>
                  <img class="img-block" v-show='pwdType == "password"' src="1.png" >
                  <img class="img-block" v-show='pwdType == "text"' src="1.png" >
                </mt-field>
                <input type="submit" class="mint-button btn-primary mint-button--danger mint-button--large" value="立刻注册" :disabled="!agreement">
              </form>
        </div>
    </section>
</template>

<script >
     export default{
        name:'Register',
        data(){
            return{
                    form:[],
                    pwdType:'',

            }
        },
        methods:{
            register(){
                console.log("注册")
            },
            getSms(){

            },

        }






     }
</script>

<style  lang="less">
 .register-page{
    
 }
    .mint-cell-wrapper{
      background-size:120% 0px !important;
    }
    input{
      border: none;
    }
    .Rheader{
      background-color: #fc5253 !important;
      color: #fff !important;
      font-size: 16px;
  }
 
    
</style>