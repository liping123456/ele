<template>
    <div class="home">
       <h1>{{ msg }}</h1>
    </div>
</template>
    
<script>
export default {
    name: "component_name",
    data () {
        return {
             msg:'外卖'
        };
    }
}
</script>
    
<style lang="less" scoped>
    h1{
        color:red;
    }
</style>