<template>
    <section>
        <div class="buscador-main">
            <h1 class="buscador-title">LOCALIZE A <span id="buscador-title-suasala">SUA SALA</span></h1>
            <p class="buscador-title">Informe seu RA, Curso ou Disciplina</p>
            <form action="">
                <input type="text" class="buscador-input" v-model="input" placeholder="Ex.: Medicina Veterinária" name="buscador">
                <button type="submit" class="buscador-button">Buscar sala</button>
            </form>
        </div>
    </section>
</template>

<script>
    export default{
        data() {
            return {
                input: null
            }
        },
    }
</script>

<style>
    .buscador-main {
        background-color: white;
        padding: 20px;
        width: 755px;
        margin-left: auto;
        margin-right: auto;
        border-radius: 5px;
    }
    .buscador-title {
        text-align: left;
    }
    #buscador-title-suasala {
        color: red;
    }
    .buscador-button {
        color: white;
        background-color: red;
        padding: 10px;
        box-sizing: border-box;
        border: 2px solid red;
        border-left: none;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }
    .buscador-input {
        width: 87%;
        padding: 10px;
        display: inline-block;
        border: 2px solid #FFB0B0;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        box-sizing: border-box;
    }
    .buscador-input::-webkit-input-placeholder {
        opacity: 0.5;
    }
</style>