<template>
  
  <div class="home">
    <Buscador/>
    <ButtonShare />
    <AddButton />
    <GridVue 
      :course="'Sistemas de Informação'"
      :discipline="'Estagio Supervisionado'"
      :shift="'Noturno'"
      :teacher="'Paulo'"
      :classroom="'Laboratorio 102'"
    />

    <GridVue 
      :course="'Sistemas de Informação'"
      :discipline="'Estagio Supervisionado'"
      :shift="'Noturno'"
      :teacher="'Paulo'"
      :classroom="'Laboratorio 102'"
    />
  </div>
 
</template>

<script>
// @ is an alias to /src
import AddButton from '@/components/layouts/buttons/AddButton.vue'
import GridVue from '@/components/Grid.vue';
import Buscador from "@/components/modules/Buscador.vue";
import ButtonShare from '@/components/layouts/buttons/ButtonShare.vue';

export default {
  name: 'HomeView', 
  components: {
    GridVue,
    Buscador,
    AddButton,
    ButtonShare
  }
}
</script>

<style>
#error{
  text-align: center;
}

#error{
  text-align: center;
}
.title, .subtitle{
  text-align: left;
}

.share{
  font-family: Roboto;
  background-color: rgb(10, 110, 10);
  color: white;
}
.image{
  width: 20px;
  margin: 10;
 background-color: rgb(18, 73, 18);

}
.row{
  display: flex;
  justify-content: right;
}
</style>