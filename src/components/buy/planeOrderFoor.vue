<template>
    <div class="plane-foot">
      <a href="#">
        <p>￥</p><b>{{this.$store.state.totalPrice}}</b>
      </a>
      <span @click="submit">提交订单</span>
    </div>
</template>

<script>
  import { Indicator } from 'mint-ui';

  export default {
        name: "planeOrderFoor",
      methods:{
          submit(){
            Indicator.open('抢票中...');
            setTimeout(()=>{
              Indicator.close();
              this.$toast('购买成功!')
              this.$router.push({
                path:'/plantTicket'
              })
            },500);
          }
      }
    }
</script>

<style scoped>
    .plane-foot{
      width: 100%;
      height: 0.43rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      border-top: 1px solid #dce1e6;
      position: fixed;
      bottom: 0;
    }
  .plane-foot a{
    font-size: 0.22rem;
    color: #ff8205;
    padding: 0 0.05rem 0 0.15rem;
    display: flex;
    align-items: center;
    line-height: 0.44rem;
  }
  .plane-foot b{
    margin-left: 0.1rem;
  }
    .plane-foot p{
      font-size: 0.16rem;
    }
  .plane-foot span{
    width: 40%;
    height: 100%;
    background: #ff8205;
    color: #fff;
    font-size: 0.16rem;
    text-align: center;
    line-height: 0.43rem;
  }
</style>
