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
       <mt-swipe :auto="4000" >
          <mt-swipe-item>
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554712799645&di=83e6c5b61b226991a2b0dba9294ec67b&imgtype=0&src=http%3A%2F%2Fimg1.gtimg.com%2Fjiangsu%2Fpics%2Fhv1%2F3%2F195%2F2161%2F140568753.jpg">
        </mt-swipe-item>
          <mt-swipe-item>
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554712953400&di=6c38cfa1ce26fa1316e3ff0470cb36f1&imgtype=0&src=http%3A%2F%2Fp0.so.qhimgs1.com%2Ft01ff38d8b8b867cc90.jpg">
        </mt-swipe-item>
          <mt-swipe-item>
              <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554713127795&di=dba791cc167d61237fd6421669ea6c43&imgtype=0&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Farchive%2F78f301141a2f4b93f1fe498b43dabdc7857e238e.jpg">
          </mt-swipe-item>
        </mt-swipe>
      
       <!-- 首页横向菜单 -->
      
       <mt-navbar v-model="selected" >
          <mt-tab-item v-for="(home,i) in hometype"  :id="home.id" :key="i"  >
             <span  @click="homeNav(i)" :class="{ 'choice' : selected == home.id}">{{home.name}}</span> 
      </mt-tab-item>
     </mt-navbar>
       
       <!-- tab-container -->

        <mt-tab-container v-model="selected" >
          <mt-tab-container-item :id='0'>
            <!-- 猜你喜欢列表 -->
              <div class="gusseType" v-show="gusslike">
                      <div class="gusscelike">
                         <span class="title">猜你喜欢</span> 
                         <router-link to="#">更多></router-link>
                      </div>
                
                  <ul class="gusscelist">
                      <li v-for="list in 12" class="gussceIn" :key="list">
                          <img src="@/assets/imgs/book/book2.png">
                          <div>
                              <p>书名</p>
                              <p>作者</p>
                          </div>
                      </li>
                  </ul>
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
            <div class="booklist" v-for="n in 10" :key="n">
                <img src="1.png">
                <div class="listdetial">
                    <p class="whrite">作者：</p>
                    <p class="story">简介：</p>
                </div>
            </div>
          </mt-tab-container-item>
        </mt-tab-container>
       

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
                    selected:0,//默认显示热门

            }
        },
        methods:{
            homeNav(i){
                this.hometypeId = this.hometype[i].name;
                // this.gusslike = false;
            },
            //轮播
          
           
        }





     }
</script>

<style lang="less">
@import "../../assets/css/Pubilc.css";

.homeHead{
    display: flex;
    justify-content: space-between;
     padding:0 10px 6px 10px;
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
.mint-navbar .mint-tab-item .choice{
  color: #D13637FF;
  border-bottom: 3px solid #ef4f4fc4;
  padding: 8px 2px;
  font-weight: bold;
}
 .border{
        border: 1px solid #535353FF;
        margin-right: 10px;
    }
    // 轮播

.mint-swipe{
        height: 20vh;
        img{
            width: 100%;
            border-radius: 5px
        }
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
//首页导航
.mint-navbar .mint-tab-item.is-selected{
  border-bottom: none;
}
.mint-tab-item-label{
  text-align: center;
}
// 首页导航菜单里面列表
.mint-tab-container-item{
  .booklist{
          border-bottom: 1px solid #E8E8E8FF;
          text-align: left;
          display: flex;
     img{
      padding: 20px 0
     }
     div{
          padding: 10px 0;
          margin-left: 10px;
     }

     }
 }
 // 猜你喜欢
.gusseType{
        .gusscelike{
            display: flex;
            justify-content:space-between;
            padding:10px;
            
            span{
                font-size: 16px
            }

        }
        .gusscelist{
            display: flex;
            flex-wrap: wrap;
            padding: 4px 10px;
            justify-content: space-between;
            height: 72vh;
            overflow: scroll;
        }
        .gussceIn{
            width: 28vw;
            text-align: center;
            margin:10px 0;
            img{
                width: 100px;
            }
        }

   }
</style>