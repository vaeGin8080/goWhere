<template>
  <div class="people">
    <div class="plane-people">
      <div>乘机人</div>
      <div><i class="iconfont icon-person"></i><input type="text" placeholder="请填写乘机人姓名 必填" v-model="person"/></div>
    </div>
    <div class="plane-name">
      <div class="plane-p">
        <span>联系人</span>
       <input type="text" placeholder="请填写姓名 必填" v-model="name"/>
      </div>
      <div class="people-phone">
        <p><span>手机号</span><b>+86</b></p>
        <input type="text" placeholder="请接收航班信息 必填" v-model="phone"/>
      </div>
    </div>
    <div class="baoxiao">
      <div class="pz">
      <span>报销凭证</span>
      <mt-switch v-model="open"  @change.native="clickOpen"></mt-switch>
      </div>
      <ul v-if="open" class="open">
        <li>全国（￥20）</li>
        <li><span>凭证类型</span><span>行程单</span></li>
      </ul>
    </div>

  </div>
</template>

<script>
    export default {
        name: "planeOrderLogin",
      props:['items'],
      data(){
          return{
            person:"",
            name:"",
            phone:"",
            open:false
          }
      },
      methods:{
          clickOpen(){
            this.checked=!this.checked;
            if(this.checked){
              this.$store.state.totalPrice+=20
            }else{
              this.$store.state.totalPrice-=20
            }
          }
      },
      updated(){
      }
    }
</script>

<style scoped>
    .people{
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      font-size: 0.14rem;
      background: #eee;
    }
  .plane-people{
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.15rem;
    background: #fff;
  }
  .plane-people div{
    width: 100%;
    height: 0.42rem;
    display:flex;
    border: 1px solid #e1e5e9;
    box-sizing: border-box;
    align-items: center;
    justify-content: flex-start;
    padding: .07rem .15rem;
  }
    .plane-people div i{
      font-size: 0.2rem;
      margin-right: 0.5rem;
      margin-left: 0.1rem;
    }

  .plane-people input{
    border: 0;
    width: 70%;
    height: 100%;
    outline: none;
  }
  .plane-name{
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.15rem;
    background: #fff;
  }
  .plane-name div{
    width: 100%;
    height: 0.42rem;
    display:flex;
    border: 1px solid #e1e5e9;
    box-sizing: border-box;
    align-items: center;
    justify-content: flex-start;
    padding: .07rem .15rem;
  }
    .plane-name input{
      border: 0;
      outline: none;

    }
    .plane-p span{
      margin-right: 0.38rem;
    }
    .plane-name b{
      font-size: 0.14rem;
      margin-left: 0.3rem;
      margin-right: 0.3rem;
    }
    .people-phone p{
      display: flex;
    }
  .people-phone input{
    width: 60%;
  }
  .baoxiao{
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    padding: 0.07rem 0.15rem;
  }

  .pz{
    width: 100%;
    height: 0.44rem;
    display: flex;
    justify-content: space-between;
    font-size: 0.18rem;
    align-items: center;
  }
  .open{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .open li{
    text-align: left;
    height: 0.3rem;
    line-height: 0.3rem;
    border-top: 1px solid #dce1e6;
    font-size: 0.16rem;
    padding: 0.05rem 0;
  }
</style>
