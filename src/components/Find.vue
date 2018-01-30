<template>
    <div class="find">
       <h1>{{ msg }}</h1>
    </div>
</template>
    
<script>
export default {
    name: "component_name",
    data () {
        return {
             msg:'发现'
        };
    }
}
</script>
    
<style lang="css" scoped>
    h1{
        color:green;
    }
</style>