<template>
    <ul class="uls">
        <plane-product v-for="(l,index) in list" :items="l" :idx="index" ></plane-product>

    </ul>
</template>

<script>
    import PlaneProduct from "./planeProduct";
    export default {
        name: "planeProductList",
      components: {PlaneProduct},
      props:["list"],
      methods:{

      }
    }
</script>

<style scoped>
  .uls{
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
</style>
