<template>
  <section>
    <div class="main">
      <router-link to="/">
          <img src="../../assets/logo.png" class="home-unime"/>
      </router-link>
      <div>
        <router-link to="/">
          <button>Buscar sala</button>
        </router-link>
          <button>Minhas salas</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.home-unime {
  border: none;
  cursor: pointer;
}
.main {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
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
</style>