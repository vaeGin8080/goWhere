<template>
      <li class="product" @click="goWhere(idx)">
        <div class="pro-top">

          <div class="pro-top-left">
            <div class="stime">
              <a>{{items.stime}}</a>
              <span>{{items.slocal}}</span>
            </div>
           <div class="gogo">
             <div class="top-line"></div>
            </div>
            <div class="stime">
              <a>{{items.etime}}</a>
              <span>{{items.elocal}}</span>
            </div>
          </div>

          <div class="pro-top-right">
            <a href="#"><b>￥</b>{{items.price}}</a>
            <span>{{items.zhekou}}</span>
          </div>
        </div>
        <div class="pro-foot">{{items.psize}}</div>
      </li>

</template>

<script>
  import { Indicator } from 'mint-ui';
    export default {
        name: "planeProduct",
      props:["items","idx"],
      methods:{
        goWhere(i){
          Indicator.open('正在拼命加载中...');
          setTimeout(()=>{
            Indicator.close();
          },1000);
          this.$router.push({
            path:'/planePiao',
            query:{
              id:i
            }
          })
        }
      }
    }
</script>

<style scoped>
    .product{
      width: 100%;
      height: 0.87rem;
      display: flex;
      box-sizing: border-box;
      flex-direction: column;
      justify-content:space-between;
      align-items: center;
      padding: 0.1rem 0.15rem;
      border-bottom: 1px solid rgba(197, 197, 197, 0.3);
      font-size: 0.12rem;
    }
    .pro-top{
      width: 100%;
      height: 0.46rem;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
    }
  .pro-top-left{
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .pro-top-left a{
    font-size: 0.16rem;
    color: #000;
  }
  .pro-top-left span{
     color: #999;
  }
    .pro-top-left .stime{
      display: flex;
      flex-direction: column;
    }
    .pro-top-left .stime a{
      font-size: 0.16rem;
    }
  .gogo{
    position: relative;
  }
  .top-line{
    border-bottom: 1px solid #999;
    width: 0.8rem;
  }
  .top-line:after{
    content: "";
    width: 6px;
    height: 6px;
    display: inline-block;
    transform: rotate(-60deg);
    transform-origin: bottom right;
    border-right: 1px solid #999;
    position: absolute;
    right: 0;
    top: -0.07rem;
  }

  .pro-top-right{
    width: 35%;
    height: 100%;
    display: flex;
    flex-direction: column;
    font-size: 0.12rem;
  }
  .pro-top-right a{
    font-size: 0.16rem;
    color: #ff8205;
  }
    .pro-top-right b{
      font-size: 0.14rem;
      color: #ff8205;
    }
  .pro-foot{
    width: 100%;
    display: flex;
    justify-content: flex-start;

  }
</style>
