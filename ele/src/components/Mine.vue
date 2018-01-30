<template>
    <div class="mine">
       <h1>{{ msg }}</h1>
    </div>
</template>
    
<script>
export default {
    name: "component_name",
    data () {
        return {
             msg:'我的'
        };
    }
}
</script>
    
<style lang="css" scoped>
    h1{
        color:blue;
    }
</style>