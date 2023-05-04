<template>
  <div class="container">
    <img class="image" src="../../../assets/Frame.png" >
    <button class="share">Compartilhar </button>
  </div>
</template>

<script>
export default {
  name: 'ButtonShare'
}
</script>

<style scoped>
.share{
  font-family: Roboto;
  background-color: rgb(10, 110, 10);
  color: white;
  cursor: pointer;
}
.image{
  width: 20px;
  margin: 10;
  background-color: rgb(18, 73, 18);
}
.container {
  max-width: 150px;
  display: flex;
  cursor: pointer;
}
</style>