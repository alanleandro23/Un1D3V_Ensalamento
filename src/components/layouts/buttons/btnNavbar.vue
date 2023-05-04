<template>
    <div class="topbutton">
        <slot name="icon"></slot>
        <slot name="title"></slot>
    </div>    
</template>
<script>
export default {

}
</script>

<style scoped>

.topbutton {
    display: flex;
    justify-content: space-around;
}
.topbutton img {
    max-width: 18px;
}

</style>