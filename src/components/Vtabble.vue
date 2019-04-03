<template>
    <section class="tabble" v-model="selected">
       <mt-tabbar class="tabContent">
           <router-link  class="tablink"  v-for="(tab,key) in tablist"  :to='tab.path' :id = 'tab.id' :key=key >
               <mt-tab-item>
                   <span  :class="['iconfont',tab.iconClass,{'blue':selected == tab.id}]"></span>
               </mt-tab-item>
               <div>
                   {{tab.title}}
               </div>
           </router-link>
       </mt-tabbar>
    </section>
</template>

<script >
    
export default{
        name:'Vtabble',
        data(){
            return{
                    tablist:[
                            {path:'/',title:'首页',iconClass:'iconshu',id:'/'},
                            {path:'/type',title:'分类',iconClass:'iconfenlei',id:'/type'},
                            {path:'/shelf',title:'书架',iconClass:'iconjiaoshi_shujia',id:'/shelf'},
                            {path:'/person',title:'我的',iconClass:'icongeren',id:'/person'}
                    ],
                   
            }
           
        },

computed: {
    selected: {
      get() {
        return this.$route.path;
      }
    }
  }



    }
</script>

<style lang="less">
.tabble{
          position: fixed;
          bottom: 0;
          z-index: 888;
          width: 100%;
          height: 8vh;  
          background-color: #fff;
          font-size: 14px;
          border-top: none;
          background-image: none;
    .mint-tabbar{
          justify-content: space-around;
          .mint-tab-item{
            padding: 8px 0 4px 0;
          }
          }
    
       .tablink{
        display:block;
        color: grey;
        text-decoration: none;
        outline: none;
        .iconfont{
            color: grey;
        font-size: 20px;
        }
            .blue{
                color: #2195d4de;
            }
        }
    }

</style>