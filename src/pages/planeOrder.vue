<template>
  <div class="zti">
    <plane-order-header></plane-order-header>
    <plane-ordernav></plane-ordernav>
    <plane-order-message :items="List"></plane-order-message>
    <plane-order-login :items="List"></plane-order-login>
    <plane-order-foor></plane-order-foor>
  </div>
</template>

<script>
    import PlaneOrderHeader from "../components/buy/planeOrderHeader";
    import PlaneOrdernav from "../components/buy/planeOrdernav";
    import PlaneOrderMessage from "../components/buy/planeOrderMessage";
    import PlaneOrderLogin from "../components/buy/planeOrderLogin";
    import PlaneOrderFoor from "../components/buy/planeOrderFoor";
    export default {
        name: "planeOrder",
      components: {PlaneOrderFoor, PlaneOrderLogin, PlaneOrderMessage, PlaneOrdernav, PlaneOrderHeader},
      data(){
          return{
            List:[]
          }
      },
      methods:{
      },
      mounted(){
        let id = this.$route.query.id;
        let ids = this.$route.query.ids;
        fetch("http://localhost:3000/api/plane?id="+id+"&ids="+ids).then(response=>{
          if(response.ok){
            response.json().then(data=>{
              this.List = data;
              console.log(data)
            })
          }
        })

        setTimeout(()=>{
          this.$store.state.totalPrice = parseInt(this.List.price);
        },500);

      }

    }
</script>

<style scoped>

</style>
