<template>
    <div class="win">
      <div class="text">
        <div class="text-content">
          <p>儿童/婴儿票预订说明</p>
          <p>1、国内儿童票价是成人票价的5折</p><p>2、儿童乘机须成人陪同，1名成人最多携2名儿童</p>
          <p>3、儿童须和成人购买同等舱位机票</p><p>儿童票 2周岁（含）-12周岁（不含）</p><p>4、儿童如单独乘机，请提前至航空公司售票处申请购买</p>
          <p>5、部分成人价格允许儿童购买，根据航空公司公布的成人价格政策确定儿童是否允许购买成人票</p>
          <p>婴儿票 14天（含）-2周岁（不含）</p><p>1、国内婴儿票是成人全价票的1折但不占座位</p><p>2、目前去哪儿暂不支持婴儿国际机票的在线购买，若需要可联系航空公司添购</p>
          <p>3、婴儿乘机须成人陪同，1名成人最多携1婴儿</p><p>购买、乘机证件</p><p>1、婴儿、儿童买国内机票：使用身份证或户口簿或《出生医学证明》（仅婴儿）购票乘机</p>
          <p>2、婴儿、儿童买国际机票：使用护照、港澳通行证、台湾通行证、台胞证、回乡证等有效证件购票乘机</p><p>*按航班起飞当日的实际年龄区分</p>
        </div>
        <div class="sub" @click="hideMo(false)"><span>确定</span></div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "moTaiWindow",
      methods:{
          hideMo(i){
            this.$emit("fhideMo",i)
          }
      }
    }
</script>

<style scoped>
  .win{
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.42);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }
  .text{
    width: 2.9rem;
    height: 3.28rem;

  }
  .text-content{
    overflow: hidden;
    width: 100%;
    height: 3.5rem;
    border-radius: 4px;
    background-color: white;
    font-size: 0.18rem;
    overflow-y: scroll;
    z-index: 666;
    text-align: left;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0.2rem;
    border-bottom: 1px solid #E1E5E9;
    display: flex;
    flex-direction: column;

  }
  .sub{
    width: 100%;
    height: 0.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
  }
  .sub span{
    font-size: 0.16rem;
  }
</style>
