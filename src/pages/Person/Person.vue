<template>
    <section>
       <div class="personTop">
           <div class="left">
               <img src="@/assets/imgs/book/book1.png">
               <div>{{userName}}</div>
           </div>
           <div class="right">
              <img src="@/assets/imgs/tongzhi.png">
           </div>
           
       </div>
       <div class="personVIP">
            <div class="count">
                <p ><span>0</span>本</p>
                <p class="read">读完</p>
            </div>
            <div class="vipIn">
                 <div>
                    <img src="@/assets/imgs/icon_vip.png">
                         开通VIP享受更多特权
                 </div>  
               <span class="passvip" @click="vip">开通</span>   
          </div>     
       </div>
       <div class="personlist" >
        <ul>
            <div class="bord"></div>
            <li v-for="person in 3">
                <div class="left">
                    <span  :class="['iconfont',personlist[person-1].listicon]"></span>
                    <span>{{personlist[person-1].listsrver}}</span>
                </div>
                <div class="right">
                    <span>{{personlist[person-1].listright}}</span>
                    <span  :class="['iconfont',personlist[person-1].next]"></span>
                </div>
            </li>
            <div class="bord"></div>
            <li v-for="person in 4">
                <div class="left">
                    <span :class="['iconfont',personlist[person+2].listicon]"></span>
                    <span>{{personlist[person+2].listsrver}}</span>
                </div>
                <div class="right">
                    <span :class="['iconfont',personlist[person+2].next]"></span>
                </div>
            </li>
            <div class="bord"></div>
        </ul>
           
       </div>
    </section>
</template>

<script >
     export default{
        name:"Person",
        data(){
            return{
                userName:'流沙包',
                personlist:[
                        {
                          listicon:'iconjifen',
                          listsrver:'我的积分' ,
                          listright:0.00,
                           
                        },
                        {
                          listicon:'iconjiarubanji',
                          listsrver:'分享给好友' ,
                          next:'iconnext1'

                           
                        },
                        {
                          listicon:'iconyue',
                          listsrver:'余额' ,
                          listright:'0.00 币',
                          next:'iconnext1',


                        },
                        {
                          listicon:'iconxiazai',
                          listsrver:'我的下载' ,
                          next:'iconnext1',
                           
                        },
                        {
                          listicon:'icongoumai',
                          listsrver:'我的购买书单' ,
                          next:'iconnext1',
                           
                        },
                        {
                          listicon:'iconshezhi1',
                          listsrver:'设置' ,
                          next:'iconnext1',
                           
                        },
                        {
                          listicon:'iconlianxi',
                          listsrver:'联系我们', 
                          next:'iconnext1'

                        },
                       
                ]

            }
        },
        methods:{
                vip(){
                    console.log('去充值');
                    this.$router.push({path:"/vip"})
                }
        },



     }
</script>

 <style lang="less">

.personTop{
        display: flex;
        justify-content: space-between;
        padding: 60px 10px 20px 10px;
    .left{
        display: flex;
        line-height: 68px;
        img{
            border-radius: 50%;
            height: 68px;
            width: 68px;
            margin-right: 10px;
        }
    }
    .right{
        line-height: 68px;
        img{
            height: 20px
        }
    }
}
.personVIP{
    padding: 5px 10px ;
    .count{
        padding: 5px 20px;
        p:nth-child(1){
           
            margin-bottom: 10px;
        span{
             font-size: 20px;
            font-weight: bold;

            }
        }
    }
    .read{
            color:#898989FF;
    }
    .vipIn{
        display: flex;
        justify-content: space-between;
        padding: 10px 0;
         img{
                height: 18px;
                vertical-align: sub;
             }
        .passvip{
             background: #343434FF;
             color: #FFFFFFFF;
             padding: 3px 12px;
             border-radius: 2px;

        }

    }


}







 .personlist{
    padding: 14px 10px;
     .bord{
        border-bottom: 1px solid #E8E8E8FF;
    }
        li{
            padding: 10px 0;
            display: flex;justify-content: space-between;
            .left{
                span:nth-child(1){
                    font-size: 20px;
                }
            }
        }
 }    
 </style>