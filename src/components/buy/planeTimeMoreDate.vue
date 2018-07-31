<template>
    <div class="time-header">
      <a href="#">
        <span>{{this.$store.state.startMonthL}}--{{this.$store.state.startDateL-2}}</span>
        <span>{{week[this.$store.state.startMonthL-2]}}</span>
        <span>￥560</span>
      </a>
      <a href="#">
        <span>{{this.$store.state.startMonthL}}--{{this.$store.state.startDateL-1}}</span>
        <span>{{week[this.$store.state.startMonthL-1]}}</span>
        <span>￥560</span>
      </a>
      <a href="#">
        <span>{{this.$store.state.startMonthL}}--{{this.$store.state.startDateL}}</span>
        <span>{{week[this.$store.state.startMonthL]}}</span>
        <span>￥560</span>
      </a>
      <a href="#">
        <span>{{this.$store.state.startMonthL}}--{{this.$store.state.startDateL+1}}</span>
        <span>{{week[this.$store.state.startMonthL+1]}}</span>
        <span>￥660</span>
      </a>
      <a href="#">
        <span>{{this.$store.state.startMonthL}}--{{this.$store.state.startDateL+2}}</span>
        <span>{{week[this.$store.state.startMonthL+2]}}</span>
        <span>￥600</span>
      </a>
      <a href="#" class="rili" @click="goCalendar(3)">
        <i class="iconfont icon-dingdan1"></i>
      </a>
    </div>

</template>

<script>
    export default {
        name: "planeTimeMoreDate",
      components: {},
      data(){
          return{
            week:["周日","周一","周二","周三","周四","周五","周六","周日","周一","周二","周三","周四","周五","周六"]
          }
      },
      methods:{
        goCalendar(i){
          this.$router.push({
            path:'/calender',
            query:{
              id:i
            }
          })
        }
      }
    }
</script>

<style scoped>
    .time-header{
      width: 100%;
      height: 0.59rem;
      background: rgb(27, 169, 186);
      color: rgb(0, 0, 0);
      display: flex;
      justify-content: flex-start;
      align-items: center;
      box-sizing: border-box;
      margin-top: 0.5rem;
    }
  .time-header a{
    width: 16.6%;
    height: 100%;
    font-size: 0.12rem;
    display: flex;
    flex-direction: column;
    color: #fff;
  }
    .time-header a span{
      margin: 0.01rem 0;
    }
    .time-header .rili{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .time-header .rili i {
      font-size: 0.35rem;
    }
</style>
