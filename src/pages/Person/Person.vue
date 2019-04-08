<template>
    <section>
       <div class="personTop">
           <div class="left">
               <img src="">
               <span>{{userName}}</span>
               <div class="right">
                   <img src="@/assets/imgs/tongzhi.png">
               </div>
           </div>
       </div>
       <div class="personVIP">
        <div>
            <p class="count">0本</p>
            <p>读完</p>
        </div>
          <div class="vipIn">
             <div>
                <img src="@/assets/imgs/icon_vip.png">
                     开通VIP享受更多特权
            </div>  
            <span>开通</span>   
          </div>     
       </div>
       <div class="personlist" >
        <ul>
            <div class="bord"></div>
            <li v-for="person in 3">
                <div class="left">
                    <span>{{personlist[person-1].listsrver}}</span>
                    <span></span>
                </div>
                <div class="right">
                    <span>{{personlist[person-1].listright}}</span>
                    <span></span>
                </div>
            </li>
            <div class="bord"></div>
            <li v-for="person in 4">
                <div class="left">
                    <span>{{personlist[person-1].listsrver}}</span>
                    <span></span>
                </div>
                <div class="right">
                    <span>{{personlist[person-1].listright}}</span>
                    <span></span>
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
                          listicon:'',
                          listsrver:'我的积分' ,
                          listright:0.00,
                           
                        },
                        {
                          listicon:'',
                          listsrver:'分享给好友' ,
                          listright:''

                           
                        },
                        {
                          listicon:'',
                          listsrver:'余额' ,
                          listright:0.00 +'币',


                        },
                        {
                          listicon:'',
                          listsrver:'我的下载' ,
                           
                        },
                        {
                          listicon:'',
                          listsrver:'我的购买书单' ,
                           
                        },
                        {
                          listicon:'',
                          listsrver:'设置' ,
                           
                        },
                        {
                          listicon:'',
                          listsrver:'联系我们' ,
                           
                        },
                       
                ]

            }
        },
        methods:{

        },



     }
</script>

 <style lang="less">

     .bord{
        border-bottom: 1px solid #E8E8E8FF;
    }
        li{
            padding: 10px 0;
            display: flex;justify-content: space-between;
        }
     
 </style>