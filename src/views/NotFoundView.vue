<template>
   <div>
      <ResultNotFound>
        <h1 id="error" slot="title">Error 404 - Not Found!</h1>
        <p slot="msg-error">A paǵina que você<br> procura não existe</p>
      </ResultNotFound>
   </div>
</template>
  
<script>
import ResultNotFound from '@/components/ResultNotFound.vue'
import NavBar from '@/components/layouts/Header.vue'

export default {
    name: 'NotFoundView',
    components: {
      ResultNotFound,
      NavBar
    }
  }
</script>


<style>
  #error{
    text-align: center;
  }
  .title, .subtitle{
    text-align: left;
  }
</style>