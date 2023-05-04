<template>
  <div>
    <h1>Pesquisa Exemplo</h1>
    <form @submit.prevent="getSearch()">
      <div class="col">
        <input
          type="text"
          v-model="search"
          placeholder="Pesquise sua sala..."
        />
        <button type="submit">Pesquisar</button>
      </div>
      <input v-if="result" type="text" v-model="response" />
    </form>
  </div>
</template>

<script>
export default {
  name: "SearchComponent",

  data() {
    return {
      search: "",
      result: false,
      response: "Resultado de teste",
    };
  },

  mounted() {},

  methods: {
    getSearch(){
        this.result = true;
    }
  },
};
</script>

<style lang="scss" scoped>
</style>