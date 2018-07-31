<template>
    <div class="zti">
    <plane-head :list="isHover"></plane-head>
      <div class="content">
        <plane-search @fshowMo="yshowMo"></plane-search>
        <plane-nav :items="List.nav"></plane-nav>
        <plane-love :items="List.love"></plane-love>

      </div>
      <mo-tai-window v-if="show" @fhideMo="yhideMo"></mo-tai-window>
      <router-view></router-view>

    </div>
</template>

<script>
    import PlaneHead from "../components/buy/planeHead";
    import PlaneSearch from "../components/buy/planeSearch";
    import MoTaiWindow from "../components/buy/moTaiWindow";
    import PlaneNav from "../components/buy/plane-nav";
    import PlaneLove from "../components/buy/planeLove";
    export default {
        name: "planeTicket",
      components: {PlaneLove, PlaneNav, MoTaiWindow, PlaneSearch, PlaneHead},
      data(){
          return{
            isHover : false,
            show:false,
            List:[],
            scrollTop:0
          }
      },
      watch:{
          scrollTop:{
            handler:function(o,n){
              // console.log(o,n)

            },
            deep:true
          }
      },
      methods:{
        handleScroll(){
          this.scrollTop = document.querySelector(".content").scrollTop;
          if(this.scrollTop<20){
            this.isHover = false
          }else if(this.scrollTop>=20){
            this.isHover = true
          }

        },
        yshowMo(i){
          this.show = i
        },
        yhideMo(i){
          this.show = i
        }
      },
      mounted(){
        window.addEventListener("scroll",this.handleScroll,true)

      },
      destroyed(){
        window.removeEventListener("scroll",this.handleScroll,true)
      },
      created(){
        // Fetch.fetchData("http://localhost:3000/api/choose",this.List)
        fetch("http://localhost:3000/api/plane").then(response=>{
          if(response.ok){
            response.json().then(data=>{
              this.List = data;
              console.log(this.List)
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
    background: #F1F1F1;
  }

  .content{
    flex: 1;
    width: 100%;
    overflow-y: scroll;
  }




</style>
