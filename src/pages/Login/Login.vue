<template>
    <section>
         <div class="page-hd"><img class="img-block" src="1.png"></div>

    <div class="page-bd">
      <form @submit.prevent='login($event)' novalidate>
        <mt-field class='input-container' v-model='form.phone' type='tel' placeholder='请输入手机号码'></mt-field>
        <mt-field class='input-container' v-model="form.password" :type='pwdType' placeholder='请输入密码'>
          <img class="img-block" v-show='pwdType == "password"' src="1.png" @click='toggleEye'>
          <img class="img-block" v-show='pwdType == "text"' src="1.png" @click='toggleEye'>
        </mt-field>
        <input type="submit" class="mint-button btn-primary mint-button--danger mint-button--large" value="登 录">
      </form>
      <div class="register">
          <router-link class="btn-to-forget text-center" to='/forget-password'>忘记密码？立刻找回</router-link>
          <router-link class='btn-primary-plain' type='danger' size='large' plain to='/register'>还没有账号？立刻注册</router-link>
      </div>
    </div>
    </section>

</template>


<script >
    export default{
        name:'Login',
        data(){
            return{
                    form:[],
            }
        },
        methods:{
                    login(){
                        console.log("登录")
                    }
        }
    }
</script>
<style lang="less">
.register-page{
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
    .page-hd{
      .img-block{
        width: 125px;
        height: 58px;
        margin-top: 38px;
      }
    }
    .page-bd{
      .input-container{
        .img-block{
          vertical-align: middle;
          display: block;
          width: 100%;
          height: 100%;
          margin-left: -1px;
        }
      }
      .text-center{
        color: #fc5253!important;
        margin-top: 13px;
      }
      .btn-primary-plain{
        border: 1px solid #fc5253 !important;
        padding: 10px 30%;
        border-radius: 6px;
        background-color: transparent;
        color: #fc5253 !important;
      }
    }

  }
    .register{
        display: flex;
        justify-content: space-between;
        padding: 10px ;
    }
</style>