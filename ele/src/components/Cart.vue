<template>
    <div class="cart">
       <h1>{{ msg }}</h1>
    </div>
</template>
    
<script>
export default {
    name: "component_name",
    data () {
        return {
             msg:'订单'
        };
    }
}
</script>
    
<style lang="css" scoped>
    h1{
        color:purple;
    }
</style>