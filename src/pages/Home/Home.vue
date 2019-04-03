<template>
    <section>
       <div class="homeHead">
           <strong class="title">书城</strong>
            <router-link to='/type' class="search">
               <img src="../../assets/imgs/search.png">
            </router-link>
       </div>
       <ul class="homeType">
        <router-link to="#" v-for=" home in hometype">
            <li>{{home.name}}</li>
        </router-link>
       </ul>
    </section>
</template>

<script >
     export default{
        name:'Home',
        data(){
            return{
                hometype:[
                    {name:'热门',id:0},
                    {name:'精品',id:1},
                    {name:'免费',id:2},
                    ]
            }
        },





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
.homeType{
    display: flex;
    width: 100vw;
    a{
        width: 30%
       
    }
    li{
    }
}
    
</style>