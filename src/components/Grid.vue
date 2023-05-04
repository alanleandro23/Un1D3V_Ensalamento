<template>
  <div class="content">

    <div class="row">
      <div class="titles">
        <p>Curso: {{ course }}</p>
        <p>Disciplina: {{ discipline }}</p>
        <p>Turno: {{ shift }}</p>
        <p>Professor: {{ teacher }}</p>
        <p>Sala: {{ classroom }}</p>
      </div>

    </div>

  </div>
</template>

<script>

export default {
  name: 'Grid',
  props: { 
    course: {
      type: String,
      required: false
    },
    discipline: {
      type: String,
      required: false
    },
    shift:{ 
      type: String,
      required: false
    },
    teacher: {
      type: String,
      required: false
    },
    classroom: {
      type: String,
      required: false
    }
  }
  
  }
</script>

<style>
.content{
  display:grid;
  flex-direction: row;
  justify-content: center;
}

.row{
  display:grid;
  flex-direction: row;
  justify-content: center;
}
.row{
  
  width: 833px;
  height: 172px;
  top:40%;
  left: 18%;

  background:  #F5F5F5;
  border-radius: 8px;

  justify-content: start;
 
}

.titles{
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;

  color: #333333;

}

p{
  padding: 0px;
  margin: 20px;
  height: 7px;
}
</style>