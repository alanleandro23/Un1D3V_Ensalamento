<template>

    <div>
        <ul>
            <li>Nome: {{name}}</li>
            <li>Sobrenome: {{surname}}</li>
            <li>Cep: {{zipcode}}</li>
            <li v-if="complement">Complemento: {{complement}}</li>
            <li v-else>Sem Complemento</li>


        </ul>
    </div>
</template>

<script>
export default{
    name: 'Perfil',

            props:{
                name:{
                    type: String,
                    required: true
                },
                surname:{
                    type: String,
                    required: true
                },
                zipcode:{
                    type: String,
                    required: true
                },
                complement:{
                    type: String,
                    required: false
                }
            }
        
    }


</script>