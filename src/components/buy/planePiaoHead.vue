<template>
  <div class="head">
    <i class="iconfont icon-jiantou4" @click="back"></i>
    <a href="#" class="jipiao"><span>{{this.$store.state.leftCity}}</span><i class="iconfont icon-single-arrow"></i><span>{{this.$store.state.rightCity}}</span></a>
    <a href="#" @click="sousuo"><i class="iconfont icon-sousuo"></i></a>
  </div>
</template>

<script>
    export default {
        name: "planePiaoHead",
      methods:{
        back(){
          this.$router.push({
            path:'/planeTime'
          })
        },
        sousuo(){
          this.$router.push({
            path:'/planeTicket'
          })
        }
      }
    }
</script>

<style scoped>
  .head{
    width: 100%;
    display: flex;
    height: 0.5rem;
    justify-content: space-between;
    font-size: 0.16rem;
    line-height: 0.5rem;
    position: fixed;
    top: 0;
    z-index: 9;
    box-sizing: border-box;
    padding:0 0.1rem;
    /*background: rgba(27, 169, 186, 0);*/
    transition: all 0.5s;
    background: rgb(27, 169, 186);
    color: rgb(0, 0, 0);
  }
  .head a{
    color: #fff;
    font-size: 0.16rem;
  }
  .head i{
    font-size: 0.22rem;
    color: #fff;

  }
  .jipiao{
    text-indent: -0.2rem;
  }
  .head span{
    margin: 0 0.05rem;
  }
</style>
