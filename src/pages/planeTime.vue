<template>
    <div class="zti">
      <plane-time-head></plane-time-head>
      <plane-time-more-date></plane-time-more-date>
      <div class="content">
        <plane-product-list :list="List"></plane-product-list>
      </div>
    </div>
</template>

<script>
    import PlaneTimeHead from "../components/buy/planeTimeHead";
    import PlaneTimeMoreDate from "../components/buy/planeTimeMoreDate";
    import PlaneProductList from "../components/buy/planeProductList";
    export default {
        name: "planeTime",
      components: {PlaneProductList, PlaneTimeMoreDate, PlaneTimeHead},
      data(){
          return{
            List:[]
          }
      },
      methods:{

      },
      created(){
        fetch("http://localhost:3000/api/plane").then(response=>{
          if(response.ok){
            response.json().then(data=>{
              this.List = data.planeTime.planeDate;
              // console.log(this.List)\
            })
          }
        })
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
    overflow-y: scroll;
  }
</style>
