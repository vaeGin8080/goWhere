<template>
    <div class="plane-nav">
      <div class="plane-nav-left">
        <span>{{this.$store.state.startMonthL}}-{{this.$store.state.startDateL}}</span>
        <span>{{List.elocal}}</span>
        <span>{{List.elocal}}</span>
      </div>
      <i class="iconfont icon-danjiantouyou"></i>

    </div>
</template>

<script>
    export default {
        name: "planeOrdernav",
        data(){
          return{
            List:[]
          }
        },
        created(){
          let id = this.$route.query.id;
          fetch("http://localhost:3000/api/plane?id="+id).then(response=>{
            if(response.ok){
              response.json().then(data=>{
                this.List = data;
                console.log(data)
              })
            }
          })
        }

    }
</script>

<style scoped>
   .plane-nav{
     width: 100%;
     height: 0.38rem;
     box-sizing: border-box;
     padding: 0 0.15rem;
     display: flex;
     justify-content: space-between;
     align-items: center;
     margin-top: 0.5rem;
     border-bottom: 1px dotted #a9a9a9;
   }
  .plane-nav-left{
    width: 75%;
    height: 100%;
    font-size: 0.16rem;
    display: flex;
    align-items: center;
  }
  .plane-nav-left span{
    margin: 0 0.1rem;
    font-size: 0.12rem;
    white-space: nowrap;
  }
  .plane-nav i{
    font-size: 0.16rem;
  }
</style>
