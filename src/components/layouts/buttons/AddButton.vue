<template>
    <div class="add-room-button">
      <div class="add-room-icon">
          <img src="../../../assets/Adicionar.png" alt="">
      </div>
      <button class="add-room-btn" @click="addRoom()">Adicionar às minhas salas</button>
    </div>
</template>

<script>
  export default {
    methods: {
      addRoom() {
        document.querySelector('.add-room-button').classList.toggle("disabled");
      }
    }
  }
</script>
  
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');

.add-room-button {
  position: absolute;
}

.add-room-icon {
  position: absolute;
  width: 40px;
  height: 32px;
  left: 0;
  top: 0;
  background: #007FDB;
  border-radius: 3px 0px 0px 3px;
  display: flex;
  justify-content:center;
  align-items: center;
 
}

.add-room-btn {
  position: absolute;
  left: 40px;
  width: 229px;
  height: 32px;
  background: #0D99FF;
  border-radius: 0px 3px 3px 0px;
  color: #FFFFFF;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  border: none;
  cursor: pointer;
}
/*classe para desativar botão*/
.disabled{
    opacity:0.5;
}

</style>