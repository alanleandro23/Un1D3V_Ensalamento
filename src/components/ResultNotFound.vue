<template>
    <div class="container">
        <slot name="ResultNotFound">
					<slot name="title"></slot>
					<slot name="subtitle"></slot>

					<div class="card-gray">
						<div class="balon-and-mascot">
							<div class="balon-dialog">
								<h2 class="balon-title">Desculpe!</h2>
								<slot name="msg-error"></slot>
							</div>
							<img src="../assets/mascote.svg" alt="" srcset="">
						</div>
					</div>
        </slot>
    </div>
</template>

<script>

export default {
	name: 'ResultNotFound',
}

</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
   
}
h1{
    font-weight: 900;
    font-size: 32px;
   
    
}
h2{
    font-weight: 400;
    font-size: 24px;
}
h2 span{
    font-weight: 700;
    font-size: 24px;
    color: red;
}
.container{
    width: 833px;
    margin: 0 auto; /* Centraliza o container */
}
.card-gray{ 
    height: 352px;
    border-radius: 8px;
    background: #F5F5F5;
    margin: 44px auto;
    padding-top: 66px;
}
.balon{
    width: 325px;
    height: 145px;
    border-radius: 8px;
    background-color: white;
    border: solid 1px gray;
    
  
}
.balon-dialog {
    background: #ffffff;
    border-radius: 8px;
    border: 1px solid gray;
    position: relative;
    width: 325px;
    height: 145px;
    margin-bottom: 100px;
    
    
}
.balon-dialog::before{
    content:"";
    width: 25px;
    height: 25px;
    display: block;
    position: absolute;
    top: 82px;
    left: 312px;
    background-color: white;
    border: 1px solid;
    border-color: transparent gray gray transparent;
    transform: rotate(-45deg);
}
.balon-title{
    padding: 24px 0px 0px ;
    font-size: 32px;
    font-weight: 900;
}
.balon-dialog p {
   
    font-weight: 400;
    font-size: 24px;
}
.balon-and-mascot{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 20px 95px ;
}  
</style>
