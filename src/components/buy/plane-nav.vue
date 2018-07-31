<template>
  <div class="plane-nav">
    <a href="#" v-for="i in items">
      <i :class="i.class"></i>
      <span>{{i.title}}</span>
    </a>
  </div>
</template>

<script>
    export default {
        name: "plane-nav",
      props:["items"]
    }
</script>

<style scoped>
  .plane-nav{
    width: 94%;
    height: 1.5rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.06);
    border-radius: 0.1rem;
    margin-top: 0.2rem;
    background: #fff;
  }
  .plane-nav a{
    width: 33.3%;
    display: flex;
    font-size: 0.12rem;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #414141;
  }
  .plane-nav a i{
    font-size: 0.22rem;
  }
</style>
