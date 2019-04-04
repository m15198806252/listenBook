<template>
    <section>
       <div class="homeHead">
           <strong v-if=" hometypeId=='热 门'" class="title" >热 门</strong>
           <strong v-else-if="hometypeId== '精 品'" class="title">精 品</strong>
           <strong v-else-if="hometypeId == '免 费'" class="title">免 费</strong>
            <router-link to='/type' class="search">
               <img src="../../assets/imgs/search.png">
            </router-link>
       </div>
      
       <!-- 首页横向菜单 -->
      
       <mt-navbar v-model="selected" >
          <mt-tab-item v-for="(home,i) in hometype"  :id="home.id" >
         <span  @click="homenav(i)">{{home.name}}</span> 
      </mt-tab-item>
     </mt-navbar>
       
       <!-- tab-container -->

        <mt-tab-container v-model="selected" >
          <mt-tab-container-item :id='0'>
            <p class="grey" ></p>
            <div class="booklist" v-for="n in 5">
                <img src="1.png">
                <div class="listdetial">
                    <p class="whrite">作者：</p>
                    <p class="story">简介：</p>
                </div>
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item :id='1'>
            <p class="grey"></p>
            <div class="booklist" v-for="n in 3">
                <img src="1.png">
                <div class="listdetial">
                    <p class="whrite">作者：</p>
                    <p class="story">简介：</p>
                </div>
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item :id="2">
            <p class="grey"><span class="border"></span>全部限免</p>
            <div class="booklist" v-for="n in 10">
                <img src="1.png">
                <div class="listdetial">
                    <p class="whrite">作者：</p>
                    <p class="story">简介：</p>
                </div>
            </div>
          </mt-tab-container-item>
        </mt-tab-container>
        <!-- 猜你喜欢列表 -->
        <div class="gusseType" v-show="gusslike">
           
                <div class="gusscelike">
                   <span class="title">猜你喜欢</span> 
                   <router-link to="#">更多></router-link>
                </div>
          
            <ul class="gusscelist">
                <li v-for="list in 12" class="gussceIn">
                    <img src="@/assets/imgs/book/book2.png">
                    <div>
                        <p>书名</p>
                        <p>作者</p>
                    </div>
                </li>
            </ul>


 
 </div>

    </section>
</template>

<script >
     export default{
        name:'Home',
        data(){
            return{
                hometype:[
                            {name:'热 门',id:0},
                            {name:'精 品',id:1},
                            {name:'免 费',id:2},
                    ],
                    selected:'0',
                    hometypeId:'热 门',//首页头部提示默认第一个
                    gusslike:true,//猜你喜欢
            }
        },
        methods:{
            homenav(i){
                this.hometypeId = this.hometype[i].name;
                this.gusslike = false;
            },
           
        }





     }
</script>

<style lang="less">
@import "../../assets/css/Pubilc.css";

.homeHead{
    display: flex;
    justify-content: space-between;
     padding:0 20px 6px 20px;
     line-height: 56px;
     border-bottom: 1px solid #f2f2f2;
     height: 56px;

  .title{
        font-size: 20px;
        color: #474747;
        
    }
    .search{
       display: inline-block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-top: 8px;
        background: #F8F8F8;
        img{
            width: 16px;
            height: 16px;
            margin: 14px;
        }
    }
}
 .border{
        border: 1px solid #535353FF;
        margin-right: 10px;
    }
.mint-tab-container-item{
    height: 77vh;
    overflow: scroll;
}
.mint-tab-item-label{
    font-size: 14px;
}
.grey{
    height: 4vh;
    background:#eaeaea;
    line-height: 4vh;
}
.booklist{
        border-bottom: 1px solid #E8E8E8FF;
        text-align: left;
        display: flex;
   img{
    padding: 20px 0
   }
   div{
        padding: 20px 0;
        margin-left: 10px;
   }

   }
.gusseType{
        .gusscelike{
            display: flex;
            justify-content:space-between;
            padding:  20px;
            span{
                font-size: 16px
            }

        }
        .gusscelist{
            display: flex;
            flex-wrap: wrap;
            padding: 4px 20px;
            justify-content: space-between;
        }
        .gussceIn{
            width: 28vw;
            text-align: center;
            img{
                width: 100px;
            }
        }

   }
</style>