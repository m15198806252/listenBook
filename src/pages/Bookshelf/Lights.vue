<template>
    <section>

        <div v-if="startlight"class="startIn">
            <button class="start" @click="runLights" >开 始</button>
        </div>
       <!-- 跑马灯 -->
       <template v-else>
        <section class="light-container" >
             <ul>
                <div id="top">
                    <li class="red" style="animation-delay: 0s;"></li>
                    <li class="orange" style="animation-delay: 0.2s;"></li>
                    <li class="blue" style="animation-delay:0.4s;"></li>
                    <li class="puper" style="animation-delay: 0.6s;"></li>
                </div>
                <div id="right">
                    <li class="red" style="animation-delay: 0.8s;"></li>
                    <li class="puper" style="animation-delay: 1s;"></li>
                    <li class="green" style="animation-delay: 1.2s;"></li>
                    <li class="blue" style="animation-delay: 1.4s;"></li>
                </div>
                <div id="buttom">
                    <li class="orange" style="animation-delay: 1.6s;"></li>
                    <li class="red" style="animation-delay: 1.8s;"></li>
                    <li class="green" style="animation-delay: 2s;"></li>
                    <li class="pink" style="animation-delay: 2.2s;"></li>
                </div>
                <div id="left">
                    <li class="green" style="animation-delay: 2.4s;"></li>
                    <li class="pink" style="animation-delay: 2.6s;"></li>
                    <li class="blue " style="animation-delay: 2.8s; transform: rotateX(180deg);"></li>
                    <li class="puper" style="animation-delay:3.0s;"></li>
                </div>
            </ul>
        </section>
        
       </template>
    </section>
</template>

<script >
     export default{
        name:'Lights',
        data(){
            return{
                startlight:true,//默认为不开始跑马灯

            }
        },
        methods:{
                    runLights(){
                        this.startlight = !this.startlight;
                    }
        },
     }
</script>

<style lang="less">
@import "../../assets/css/Pubilc.css";
.startIn{
    height: 100vh;
    .start{
        width: 98vw;
        position: fixed;
        top:45vh;
        left: 1vw;
        height: 40px;
        background: none;
        outline: none;
        border: none;
        font-size: 16px;
        background: skyblue;
        border-radius: 5px;
        color: #525658;
    }
}
.light-container{
    height: 100vh;
}
ul{
                margin:auto;
                padding: 0;
                position: relative;
                width: 240px;
                height: 320px;
                border: 1px solid black;
                border-radius: 30px;
                box-sizing: border-box;
                top:24%;
            }
            li{
                list-style: none;
                width: 40px;
                height: 40px;
                margin: 10px;
                border-radius: 50%;
                animation: chioce;
                animation-duration: 3s;

                animation-iteration-count: infinite;
                box-sizing: border-box;
                
            }
            .red{
                background: red;
            }
            .blue{
                background: skyblue;
                transform: rotate(180deg);
            }
            .pink{
                background: pink;
                transform: rotate(180deg)
            }
            .orange{
                background: orangered;
            }
            .puper{
                background: palevioletred;
            }.green{
                background: olivedrab;
            }
            #top{
                display: flex;
                }
            #right{
                position:absolute;
                right: 0;
                }
            #buttom{
                display: flex;
                position: absolute;
                bottom: 0;
                transform:rotate(180deg);
                }
            #left{
                    transform:rotateX(180deg);
            }
            
            @keyframes chioce{
                0{
                    border: none;
                }
                0.1%,22%{
                    border: 2px solid black;
                }
                23%,33.33%{
                    border: none;
                }
            }


</style>