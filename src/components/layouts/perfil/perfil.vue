<template>
    <div>
        <ul>
            <li>Nome:{{ name }}</li>
            <li>Sobrenome:{{ surname }}</li>
            <li>Cep: {{ zipcode }}</li>
            <li>Complemento:{{ complement }} </li>
        </ul>
    </div>

</template>

<script>
    
    export default{
        name: 'Perfil',
        props: {
            name:{
                type: String,
                required: true
            },
            surname:{
                type:String,
                required:true
            },
            zipcode:{
                type:String,
                required: true
            },
            complement:{
                type:String,
                required:false
            },
        },
        data(){
            return{
                name: 'Gilson',
                surname: 'Marcos',
                zipcode:'42700000',
                complement: 'Casa com um coqueiro em frente'

            }
        }
    }
</script>

