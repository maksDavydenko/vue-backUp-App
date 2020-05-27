<template>
    <form>
        <h2>Choise device for backup files</h2>
        <p><select multiple name="hero[]">
            <option disabled>Выберите героя</option>
            <option value="Чебурашка">Samsung</option>
            <option value="Крокодил Гена">Крокодил Гена</option>
            <option value="Шапокляк">Шапокляк</option>
            <option value="Крыса Лариса">Крыса Лариса</option>
        </select></p>
        <p><input type="submit" value="Отправить"></p>

    </form>
</template>

<script>
    export default {
        name: 'Devices'
    }
</script>

<style scoped>
    select{
        width: 100%;
    }
    option{
        color: dodgerblue;
    }
</style>
