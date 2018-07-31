<template>
  <div class="plane-m">
    <div class="plane-message">
        <div class="plane-message-left">
          <a href="#"><b>￥</b>{{items.price}}</a>
          <span>经济舱</span>
        </div>
        <div class="plane-message-right">
          <p>机建+燃油 ￥60</p>
          <span>支付后一小时出现</span>
        </div>
    </div>
    <div class="guize">
      <span>退改签规则</span>
      <span>儿童/婴儿票说明</span>
      <span>活动及购票须知</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "planeOrderMessage",
      props:["items","idx"]
    }
</script>

<style scoped>
  .plane-m{
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding-top: 0.1rem;
  }
    .plane-message{
      width: 100%;
      display: flex;
      box-sizing: border-box;
      height: 0.59rem;
    }
  .plane-message-left{
    width: 35%;
    height: 100%;
    box-sizing: border-box;
    padding: .1rem .2rem 0 .3rem;
    display: flex;
    font-size: 0.14rem;
    flex-direction: column;
  }
    .plane-message-left a{
      font-size: 0.16rem;
      color: #ff8205;
      display: flex;
      margin-right: 0.1rem;
      align-items: center;
      justify-content: center;
      margin-bottom: 0.02rem;
    }
    .plane-message-left b{
      font-size: 0.14rem;
      color: #ff8205;

    }
  .plane-message-right{
    width: 65%;
    height: 0.44rem;
    margin:auto;
    display: flex;
    flex-direction: column;
    font-size: 0.12rem;
    border-left: 1px dotted #a9a9a9;
    justify-content: flex-start;
    align-items: flex-start;
    box-sizing: border-box;
    padding-left: 0.1rem;
    line-height: 0.22rem;

  }
  .plane-message-right span{
    margin-bottom: 0.05rem;
    color: #a9a9a9;
  }
  .plane-m .guize{
    width: 100%;
    height: 0.4rem;
    display: flex;
    box-sizing: border-box;
    padding: .07rem 0.15rem 0.15rem;
    justify-content: space-around;
    align-items: center;
    font-size: 0.14rem;
    color: #1ba9ba;
    border-bottom: 1px solid #e1e5e9;
  }
</style>
