<template>
    <form>
        <h2>Choise of device for backup files</h2>
        <select v-model="selected">
            <option value="" disabled selected>choose
                device</option>
            <option value="iPhone">Apple iPhone 11 Pro</option>
            <option value="samsung">Samsung Galaxy S20</option>
            <option value="dell">Laptop DELL G5</option>
        </select>
        <router-link :to="{ path: 'data:selected', params: {device: 444}, query: {name:selected }}"><input class="btn" type="submit" value="choise device"></router-link>
    </form>
</template>

<script>
    export default {
        name: 'Devices',
        data() {
            return {
                selected: '',
            }
        },
    }
</script>

<style scoped>
    form{
        width: 80%;
    }
    h2{
        margin-bottom: 30px;
    }
    select{
        padding:5px;
        margin-bottom: 30px;
        width: 100%;
    }
    input{

    }

    option{
        padding: 10px 20px;

    }

</style>
