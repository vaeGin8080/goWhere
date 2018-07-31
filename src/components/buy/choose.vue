<template>
  <div>
  <mt-header title="多个按钮" style="background:#04D9DD;height: 0.5rem;font-size: 0.16rem">
    <router-link to="/" slot="left">
      <mt-button icon="back">返回</mt-button>
      <mt-button >关闭</mt-button>
    </router-link>
    <mt-button icon="more" slot="right"></mt-button>
  </mt-header>
  <mt-index-list class="tittle">
    <mt-index-section :index="c.title" v-for="c in chooseList">
      <div  @click="goto(p)" v-for="p in c.cityList"><mt-cell :title="p" ></mt-cell></div>
    </mt-index-section>
  </mt-index-list>
  </div>
</template>

<script>

    export default {
        name: "choose",
      props:["list"],
      data(){
          return{
            chooseList:[]
          }
      },
      methods:{
          goto(i){
            if(this.$route.query.id ==1){     //点击左边城市返回的值
              this.$router.push({
                path:'/',
                query:{
                  cityL:i
                }
              })
            }else if (this.$route.query.id ==2){  //点击右边城市返回的值
              this.$router.push({
                path:'/',
                query:{
                  cityR:i
                }
              })
            }


          },
        handleScroll(){                                       //打印出滚动的距离
          var scrollTop = document.querySelector(".tittle").scrollTop
          console.log(scrollTop)
        }
      },
      created(){                                      //后台获取数据渲染城市列表
          fetch("http://localhost:3000/api/choose").then(response=>{
            if(response.ok){
              response.json().then(data=>{
                this.chooseList = data;
              })
            }
          })

      },
      mounted(){
          window.addEventListener("scroll",this.handleScroll,true) //监听滚动条
      },
      destroyed(){
          window.removeEventListener("scroll",this.handleScroll,true) //离开页面时销毁事件监听
      }


    }
</script>

<style scoped>
    .tittle{
      font-size: 0.22rem;
    }
</style>
