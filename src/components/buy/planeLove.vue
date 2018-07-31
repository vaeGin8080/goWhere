<template>
    <div class="plane-love">
      <div class="plane-love-header">
        <div class="love-line"></div>
        <span>猜你喜欢</span>
        <div class="love-line"></div>
      </div>
      <div class="plane-love-city">
        <div><span>{{this.$store.state.leftCity}}</span>-<span>{{this.$store.state.rightCity}}</span></div>
      </div>
      <div class="plane-love-date">
        <div class="l-date" v-for="(l,index) in items">
          <div>
            <span>{{l.lovedate}}</span>
            <span>{{l.loveweek}}</span>
          </div>
          <a href="#">￥<span>{{l.lovemoney}}</span></a>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "planeLove",
      props:["items","cityL","cityR"]
    }
</script>

<style scoped>
  .plane-love{
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 0.1rem;
    padding: 0.15rem 0.1rem;
    box-sizing: border-box;
    background: #fbfbfb;
    border-radius: 0.1rem;
  }
  .plane-love-header{
    width: 95%;
    height: 0.21rem;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .love-line{
    width: 25%;
    height: 1px;
    background-color: #bfbfbf;
  }
  .plane-love-header span{
    font-size: 0.16rem;
    color: #666;
  }
  .plane-love-city{
    width: 100%;
    height: 0.51rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.16rem;
  }
  .plane-love-city span{
    margin: 0 0.2rem;
  }
  .plane-love-date{
    width: 100%;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  .plane-love-date .l-date{
    width: 47%;
    height: 0.41rem;
    display: flex;
    justify-content: space-between;
    font-size: 0.14rem;
    align-items: center;
    border: 1px solid #e5e5e5;
    box-sizing: border-box;
    padding: 1px 3px;
    margin: 0.05rem 0;

  }
  .plane-love-date .l-date a{
    font-size: 0.14rem;
    color: #ff8205;
    margin-right: 0.1rem;
  }
  .plane-love-date .l-date a span{
    font-size: 0.14rem;
    color: #ff8205 !important;
  }
  .plane-love-date .l-date span{
    color: #000;
    margin-right: 0.1rem;
  }
  .plane-love-date .week{
    color: #c5c5c5;
  }

</style>
