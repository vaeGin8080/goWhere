<template>
  <div class="zti">
    <div class="head" :class="{headhover:isHover}">
      <a href="#" @click="back">返回</a>
      <a href="#" style="text-indent: -0.25rem" class="rili">日历</a>
      <a href="#"></a>
    </div>
    <div class="content" ref="viewbox">
      <div class="calendar" v-for="(n,index) in 12" style="width: 100%;box-sizing: border-box">
        <!-- 年份 月份 -->
        <div class="month" style="border-top: 1px solid #E2E6EA;background: white;">
          <ul>
            <!--点击会触发pickpre函数，重新刷新当前日期 @click(vue v-on:click缩写) -->
            <li class="arrow" style="border-top: 1px solid #E2E6EA;background: white;"></li>
            <li class="year-month" >
              <span class="choose-month" style="font-size: 16px">{{currentYear}}年{{ index+1 }}月</span>
            </li>
            <li class="arrow" @click="pickNext(currentYear,currentMonth)">❯</li>
          </ul>
        </div>
        <!-- 星期 -->
        <ul class="weekdays" style="height: 15px;font-size: 12px;background: white">
          <li style="color:black;font-size: 14px" v-for="(i,index2) in week" @click="bend(n,i)">{{week[index2]}}</li>

        </ul>
        <!-- 日期 -->
        <ul class="days">
          <!-- 核心 v-for循环 每一次循环用<li>标签创建一天 -->
          <li  v-for="dayobject in days" @click="bend(n,dayobject.day.getDate())">
            <!--本月-->
            <!--如果不是本月  改变类名加灰色-->

            <span v-if="dayobject.day.getMonth()+1 != currentMonth" class="other-month">{{ dayobject.day.getDate() }}</span>

            <!--如果是本月  还需要判断是不是这一天-->
            <span v-else>
          <!--今天  同年同月同日-->
                <span v-if="dayobject.day.getFullYear() == new Date().getFullYear() && dayobject.day.getMonth() == new Date().getMonth() && dayobject.day.getDate() == new Date().getDate()" class="active">{{ dayobject.day.getDate() }}</span>
                <span v-else>{{ dayobject.day.getDate() }}</span>
            </span>

          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
      name: "calender",
      data() {
        return {
          currentDay: 1,
          currentMonth: 1,
          currentYear: 1970,
          currentWeek: 1,
          days: [],
          week:["日","一","二","三","四","五","六"],
          sendday:{month:new Date().getMonth()+1,date:new Date().getDate()},
          isHover:false
        }
      },
      created: function() {  //在vue初始化时调用
        this.initData(null);
      },
      methods: {
        handleScroll(){
          var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
          console.log(scrollTop)
          if(scrollTop>=0){
              this.isHover = true
          }
        },
        initData: function(cur) {
          var leftcount=0; //存放剩余数量
          var date;


          if (cur) {
            date = new Date(cur);
          } else {
            var now=new Date();
            var d = new Date(this.formatDate(now.getFullYear() , now.getMonth() , 1));
            d.setDate(38);
            date = new Date(this.formatDate(d.getFullYear(),d.getMonth() + 1,1));
          }
          this.currentDay = date.getDate();
          this.currentYear = date.getFullYear();
          this.currentMonth = date.getMonth() + 1;

          this.currentWeek = date.getDay(); // 1...6,0
          if (this.currentWeek == 0) {
            this.currentWeek = 7;
          }
          var str = this.formatDate(this.currentYear , this.currentMonth, this.currentDay);
          this.days.length = 0;
          // 今天是周日，放在第一行第7个位置，前面6个
          //初始化本周
          for (var i = this.currentWeek - 1; i >= 0; i--) {
            var d = new Date(str);
            d.setDate(d.getDate() - i);
            var dayobject={}; //用一个对象包装Date对象  以便为以后预定功能添加属性
            dayobject.day=d;
            this.days.push(dayobject);//将日期放入data 中的days数组 供页面渲染使用


          }
          //其他周
          for (var i = 1; i <= 38 - this.currentWeek; i++) {
            var d = new Date(str);
            d.setDate(d.getDay() + i);
            var dayobject={};
            dayobject.day=d;
            this.days.push(dayobject);
          }

        },
        pickPre: function(year, month) {

          // setDate(0); 上月最后一天
          // setDate(-1); 上月倒数第二天
          // setDate(dx) 参数dx为 上月最后一天的前后dx天
          var d = new Date(this.formatDate(year , month , 1));
          d.setDate(0);
          this.initData(this.formatDate(d.getFullYear(),d.getMonth() + 1,1));
        },
        pickNext: function(year, month) {
          var d = new Date(this.formatDate(year , month , 1));
          d.setDate(35);
          this.initData(this.formatDate(d.getFullYear(),d.getMonth() + 1,1));
        },
        pickYear: function(year, month) {
          alert(year + "," + month);
        },

        // 返回 类似 2016-01-02 格式的字符串
        formatDate: function(year,month,day){
          var y = year;
          var m = month;
          if(m<10) m = "0" + m;
          var d = day;
          if(d<10) d = "0" + d;
          return y+"-"+m+"-"+d
        },

        bend(index,i){                              //点击任意时间返回月份和天数
          this.sendday.month = index;
          this.sendday.date = i;
          if(this.$route.query.id == 1){
            this.$router.push({
              path:'/',
              query:{
                monthL:this.sendday.month,
                dateL:this.sendday.date
              }
            })
          }else if (this.$route.query.id == 2){
            this.$router.push({
              path:'/',
              query:{
                monthR:this.sendday.month,
                dateR:this.sendday.date
              }
            })
          }else if (this.$route.query.id == 3){
            this.$router.push({
              path:'/planeTime',
              query:{
                monthR:this.sendday.month,
                dateR:this.sendday.date
              }
            })
          }

        },
        back(){                                     //点击back返回对应值,
          this.$router.push({
            path:'/planeTicket',
            query:{
              month:this.sendday.month,           //如果直接点返回就返回当天的值
              date:this.sendday.date
            }
          })
        }

      },
      mounted(){
        window.addEventListener("scroll",this.handleScroll,true)
      },
      destroyed(){
        window.removeEventListener("scroll",this.handleScroll,true)
      }

    }

</script>

<style scoped>

  .zti{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .content{
    flex: 1;
    width: 100%;
    overflow-y: scroll;
  }
  .head{
    width: 100%;
    display: flex;
    height: 0.5rem;
    justify-content: space-between;
    font-size: 0.16rem;
    line-height: 0.5rem;
    background:#1BA9BA;
    box-sizing: border-box;
    padding-left: 0.1rem;
  }
  .head a{
    color: #fff;
  }

   .headhover{
    position: fixed;
    top: 0;
    z-index: 9;
  }



  .change{

    /*height:84px !important;*/

    height:250px !important;

  }

  .days{

    /*transition:all 0.5s;*/

    overflow:hidden;

    position:relative;

    height:210px;

  }

  .days span{

    display: inline-block;

    height: 40px;

    width:40px;

    text-align: center;

    line-height:40px;

    position: absolute;

    top: 0;

    left: 0;

    right: 0;

    bottom: 0;

    margin: auto;

  }

  .background{

    position: absolute;

    top: 100px;

    height: 211px;

    width: 100%;

    z-index: -1;

    overflow: hidden;

    transition: all 0.5s;

  }

  .dbg{

    background-color: #E1E1E1;

    height: 42.2px;

  }

  .lbg{

    background-color: #D5D5D5;

    height: 42.2px;

  }

  #calendar{

    width:100%;

    /*height: 640px;*/

    height: 850px;

    margin: 0 auto;

    transition:all 0.5s;

    overflow:hidden;

  }

  .month ul {

    margin: 0;

    padding: 0;

    display: flex;

    justify-content: space-between;

  }

  .year-month {

    display: flex;

    flex-direction: column;

    align-items: center;

    justify-content: space-around;

  }

  .month{

    width: 100%;

    background: #FAFAFA;

    padding:15px;

    font-size: 20px;

    text-align: left;

    color:#000;

  }

  .top-time{

    padding-left:30px;

  }

  .weekdays {

    margin: 0;

    height: 48px;

    padding: 10px 0;

    font-size: 20px;

    background-color: #D5D5D5;

    display: flex;

    flex-wrap: wrap;

    color: #212121;

    justify-content: space-around;

  }

  .weekdays li {

    display: inline-block;

    width: 13.6%;

    text-align: center;

  }

  .days {

    padding: 0;

    margin: 0;

    display: flex;

    flex-wrap: wrap;

    justify-content: space-around;

  }

  .days li {

    list-style-type: none;

    display: inline-block;

    height: 42px;

    width: 14.2%;

    text-align: center;

    font-size: 14px;



    color: #212121;

    position: relative;

  }

  .days li .active {

    border-radius: 50%;

    background: #ffa516;

    color: #fff;

    height:30px;

    width:30px;

    line-height:30px;

  }

  .days li .other-month {

    color: rgba(0,0,0,0);

  }

  .weekend{

    /*color:#61212121 !important;*/

  }

  .arrowL{

    font-size: 23px;

  }

  .everyDay{

    width: 30px;

    height: 30px;

    line-height: 30px;

    text-align: center;

    margin: 3px auto;

  }

  .circle{

    width: 4px;

    height: 4px;

    border-radius: 50%;

    background-color: #F2553D;

    position: absolute;

    bottom: 1px;

    left: 49%;

  }

  .o{

    width: 4px;

    height: 4px;

    border-radius: 50%;



    border: 1px solid #F2553D;

    position: absolute;

    bottom: 1px;

    left: 49%;

  }

  .otherday{

    width: 30px;

    height: 30px;

    border-radius: 50%;

    background-color: #ffeac8;

  }



  .fadeOut{

    animation-name: fadeOut;

    animation-duration: 0.5s;

    animation-timing-function: ease-in-out;

    /* animation-delay: 1s;*/

  }

  .fadeIn{

    animation-name: fadeIn;

    animation-duration: 0.5s;

    animation-timing-function: ease-in-out;

  }



  @keyframes fadeOut{

    0%{

      transform: translateX(0);

      opacity: 1;

    }

    100%{

      transform: translateX(-100%);

      opacity: 0;

    }

  }

  @keyframes fadeIn{

    0%{

      transform: translateX(100%);

      opacity: 0;

    }

    100%{

      transform: translateX(0);

      opacity: 1;

    }

  }



  .fadeOutR{

    animation-name: fadeOutR;

    animation-duration: 0.5s;

    animation-timing-function: ease-in-out;

    /* animation-delay: 1s;*/

  }

  .fadeInR{

    animation-name: fadeInR;

    animation-duration: 0.5s;

    animation-timing-function: ease-in-out;

  }



  @keyframes fadeOutR{

    0%{

      transform: translateX(0);

      opacity: 1;

    }

    100%{

      transform: translateX(100%);

      opacity: 0;

    }

  }

  @keyframes fadeInR{

    0%{

      transform: translateX(-100%);

      opacity: 0;

    }

    100%{

      transform: translateX(0);

      opacity: 1;

    }

  }
</style>
