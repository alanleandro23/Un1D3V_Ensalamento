<template>
  <section>
    <div class="main">
      <router-link to="/">
        <img src="../../../assets/logo.png" class="home-unime"/>
      </router-link>
      <div class="btn-container">
        <router-link :to="{ name: 'search', params: { name: 'search' } }" style="text-decoration: none">
          <btnNavbar class="buscar-sala">
            <template #icon>
              <img id="buscarSala" src="../../../assets/buscarSala.png">
            </template>
            <template #title>
              <div class="label" id="textBuscarSala"> Buscar Sala</div>
            </template>
          </btnNavbar>
        </router-link>
        <router-link :to="{ name: 'myrooms', params: { name: 'myrooms' } }" style="text-decoration: none">
          <btnNavbar class="minhas-salas">
            <template #icon>
              <img id="minhasSalas" src="../../../assets/minhasSalas.png">
            </template>
            <template #title>
              <div class="label" id="textMinhasSala" slot="title"> Minhas Salas</div>
            </template>
          </btnNavbar>
        </router-link>
        
      </div>
    </div>
  </section>
</template>

<script>
import btnNavbar from '../buttons/btnNavbar.vue';

export default {
  components: {btnNavbar},
  methods: {
    // Outra forma de utilizar vue router
    // toSearch() {
    //   this.$router.push({
    //     name: "example",
    //     params: { name: "search" },
    //   });
    // },
  },
};
</script>

<style scoped>
.btnNavbar{
  display: inline-flex;
  flex-direction: row;
  align-items: baseline;
}
.home-unime {
  border: none;
  cursor: pointer;
}

.main {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: blue;
}

.main img {
  width: 120px;
}

.slide-enter,
.slide-leave-to {
  transform: translate(-50px);
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s;
}

.btn-container {
  display: flex;
  flex-direction: row;
  align-items: center;
}

#buscarSala{
  margin-left: 10px;
  margin-right: 10px; 
  margin-left: 5px;
  text-align: left;
}

.buscar-sala {
  justify-content: center;
  margin-right: 10px;
  background-color: red;
  width: 153px;
  height: 32px;
  align-items: center;
  border-radius: 1%;
  color: white;
  font-family: 'Roboto';
  border-radius: 5px;
  
}
.textMinhasSalas{
  color: black;
  font-weight: bolder;
}

.minhas-salas {
  margin-left: 10px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  color: black;
  line-height: 21px;  
}

</style>
