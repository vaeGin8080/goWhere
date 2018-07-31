<template>
  <div class="pro-top">

    <div class="pro-top-left">
      <div class="stime">
        <a>{{this.$store.state.startMonthL}}--{{this.$store.state.startDateL}}</a>
        <span>{{list.stime}}</span>
        <a>{{list.slocal}}</a>
      </div>
      <div class="gogo">
        <a href=""></a>
        <div class="top-line"></div>
      </div>
      <div class="stime">
        <a>{{this.$store.state.startMonthR}}--{{this.$store.state.startDateR}}</a>
        <span>{{list.etime}}</span>
        <a>{{list.elocal}}</a>
      </div>
    </div>

    <div class="pro-foot">{{list.psize}}</div>

  </div>

</template>

<script>
    export default {
        name: "planePiaoMessage",
      props:['list']
    }
</script>

<style scoped>
  .pro-top{
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 0.5rem;
    padding: 0.15rem 0;
  }
  .pro-top-left{
    width: 100%;
    height: 0.67rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .pro-top-left a{
    color: #000;
  }
  .pro-top-left span{
    color: #999;
  }
  .pro-top-left .stime{
    width: 1.15rem;
    font-size: 0.12rem;
    display: flex;
    flex-direction: column;
    margin: 0 0.5rem;
    justify-content: flex-end;
  }
  .pro-top-left .stime a{
    font-size: 0.10rem;
    width:0.68rem;
  }
  .pro-top-left .stime span{
    font-size: 0.22rem;
    color: black;
    margin: 0.05rem 0;
  }
  .gogo{
    position: relative;
    display: flex;
    flex-direction: column;
  }
  .gogo a{
    font-size: 0.12rem;
    margin-bottom: 0.2rem;
  }
  .top-line{
    border-bottom: 1px solid #999;
    width: 0.8rem;
    margin-bottom: 0.25rem;
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
    top: 0.12rem;
  }
  .pro-foot{
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 0.12rem;
    margin-top: 0.2rem;
  }
</style>
