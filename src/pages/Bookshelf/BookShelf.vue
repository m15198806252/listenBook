<template>
    <section>
       <div class="shelfHead">
           <strong  class="title" >书 架</strong>
            <router-link to='/type' class="search">
               <img src="../../assets/imgs/search.png">
            </router-link>
       </div>
       <!-- 书架列表 -->
       <div class="shelfContent">
            <div v-for="(name ,i) in shelfType " class="typeIn">
                <div class="typename">
                    <span class="border"></span>
                    <span class="title">{{name.name}}</span>
                     <router-link to="#">更多></router-link>
                </div>
                <ul class="shelfbox">
                    <li class="booklist" v-for=" book in 6">
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

        name:"BookShelf",
        data(){
            return{
                //书架分类
                shelfType:[
                        {name:'我的收藏'},
                        {name:'历史记录'}
                    ]
            }
        },
        methods:{

        },





    }
</script>

<style lang="less">
.shelfHead{
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
.shelfContent{
     padding:0 10px;
    height: 84vh;
    overflow: scroll;
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
    .shelfbox{
          display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
.booklist{
            width: 28vw;
            text-align: center;
           
            img{
                width: 100px;
            }
        }
    }
}
    
</style>