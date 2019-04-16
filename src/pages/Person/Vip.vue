<template>
    <section class=" memberPay">
       <div class="member">
          <div class="memberleft">
            <div class="name" >
                <div >
                    <span class="nikname">{{userInfo.nickname}}</span>
                </div>
                <div class="time">
                  <span>会员至：</span>
                  <span>2018-06-09</span>
                </div>
            </div>
          </div>
           <router-link to ="#" class="renew">续费图币</router-link>
       </div>
       <ul class="viplist">
         <li v-for='vip in vipList'>
          <div class="yellow viptype">{{vip.name}}</div>
          <div class="introduce" >
            <strong class="pric">￥{{userInfo.expire == 0?  vip.firstPrice:vip.discount}}</strong> 
            <span class="money">￥{{vip.money}}</span>
            <div  v-if = 'vip.dayPrice == 0'>不限张数，终身免费</div>
            <div v-else> 每日低至元{{vip.dayPrice}}元</div>
          </div>
          <router-link :to='{path:"/vippay",query:{order_amount:vip.discount,id:vip.id,username:userInfo.nickname,type:0}}' >
            <span class="yellow">购买</span>
            <img src="@/assets/imgs/next.png">
          </router-link>
        </li>
       </ul>
    </section>
</template>

<script >
     export default{
         name:'Vip',
            data(){
                return{
                 //用户信息
                    userInfo:{
                                nickname:'莲蓉包',
                                age:0,
                            },
                       
                    vipList:[
                                {name:'12个月',discount:196,money:200,dayPrice:1.25},
                                {name:'6个月',discount:52,money:60,dayPrice:1.25},
                                {name:'季度',discount:25,money:30,dayPrice:1.25},
                                {name:'一个月',discount:15,money:18,dayPrice:0.26},
                    ],//vip充值列表
                   
                }
            },
     }
</script>
<style lang="less">
.memberPay{
      background:#F9F9F9;
      height: 90vh;
  .member{
        display: flex;
        justify-content: space-between;
        padding: 20px;
     .memberleft{
      display: flex;
      img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      .name{
        text-align: left;
        line-height: 24px;
        margin-left: 10px;
      }
    }
    .time{
      font-size: 12px;
      color: #6F6E6BFF;
    }

    .renew{
      background: #f1b525FF;
      padding: 0px 20px;
      border-radius: 22px;
      display: inline-block;
      height: 34px;
      line-height: 34px;
      color: white;
      font-size: 14px;
    }
  }
   .yellow{
      color: #F1B525FF;
    }
}
.viplist{
      background:white;
      padding: 20px;

  li{
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    .viptype{
      width: 24%;
      font-size: 16px;
    }
    .introduce{
      font-size: 12px;
      text-align: left;
     position: relative;
     width: 33%;

    }
    .pric{
      margin:0 0 6px 0;
      font-size: 16px;
      display: inline-block;

    }
    .money{
      font-size: 14px;
      position: absolute;
     top: -5px;
     left: 52px;
     text-decoration: line-through;
    }
    a{
      display: flex;
      img{
        height: 14px;
        margin: 5px 0 0 10px
      }
    }
   
  }

}
    
</style>
