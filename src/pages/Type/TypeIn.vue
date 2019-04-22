<template>
    <section>
      <div class="typeHead">
           <strong  class="title" >分 类</strong>
            <router-link to='/type' class="search">
               <img src="../../assets/imgs/search.png">
            </router-link>
       </div>
       <!-- 顶部导航 -->
        <mt-navbar v-model="selected"  class="Topnav">
          <mt-tab-item v-for="(type,i) in typeNav"  :id="type.id" :key="i" :class="{'chioce':typeindex ==i}">
             <span  @click="Type(i)">{{type.name}}</span> 
         </mt-tab-item>
         <img src="@/assets/imgs/next.png" class="more">
     </mt-navbar>
        <!-- 灰色 -->
     <div class="grey"></div>
        <div class="typeContent">
            <div v-for="(name ,i) in typeNav " class="typeIn">
                <div class="typename">
                    <span class="border"></span>
                    <span class="title">{{name.name}}</span>
                     <router-link to="#">更多></router-link>
                </div>
                <ul class="typebox">
                    <li class="booklist" v-for=" book in 3">
                        <img src="@/assets/imgs/book/book2.png">
                        <div>
                            <p>书名：小小的我</p>
                            <p>作者：是黑暗</p>
                        </div>
                    </li>
              </ul>
            </div>
        </div>

    </section>
</template>

<script >
     export default{
        name:'TypeIn',
        data(){
            return{
                    //分类页横向导航 
                     typeNav:[
                            {name:'文 学',id:0},
                            {name:'军 事',id:1},
                            {name:'玄 幻',id:2},
                            {name:'都 市',id:3},
                            {name:'恐 怖',id:4},
                            {name:'历 史',id:5},
                    ],
                    typeindex:0
                   
                    
            }
        },
        methods:{
                selected(){
                    
                },
                Type(i){
                  this.typeindex = i
                  console.log(this.typeindex,i)
                }
        },




     }
</script>
<style lang="less">
.chioce{
      border-bottom: 3px solid orange;padding:0 10px
}

.typeHead{
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
// 顶部导航条
.Topnav{
    // padding: 0 10px;
}
.mint-tab-item-label{
    font-size: 16px;
    color: gray;
    text-align: center;
    .is-selected{
      border-bottom: none;
    }
}
// 书本列表
.typeContent{
    padding:0 10px;
    height: 73vh;
    overflow: scroll;
}
.typeIn{
    margin:15px 0;
}
.typename{
    padding: 10px 0;
    text-align: left;
    span{
        font-size: 14px;
        font-weight: bold;
        color: #5a5a5a
    }
    a{
        float: right;
    }
}
.typebox{
     display: flex;
    justify-content: space-between;
.booklist{
            width: 28vw;
            text-align: center;
           
            img{
                width: 100px;
            }
        }
} 
</style>