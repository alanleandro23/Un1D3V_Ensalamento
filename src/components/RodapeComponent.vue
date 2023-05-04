<template>
    <div class="container">
        <div class="imagem">
            <img src="../assets/image/Un1d3v.svg" alt="Un1d3v">
        </div>
        <div class="footer">
            <p>Desenvolvido com todo amor e carinho por:</p>
            <p><span class="Uni">UN1D3V- </span> Núcleo de Desenvolvimento Unime (Lauro de Freitas)</p> 
        </div>
    </div>
</template>

<script>
    export default {
        name: "RodapeComponent"
    }
</script>

<style scoped>
    .container{
        position: absolute;
        bottom: 0%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 95%;
    }
    .imagem{
        width: 110px;
        height: 82px;
        
    }
    .Uni {
        color: brown;
    }
</style>