<template>
    <form>
        <h2>Choise of device for backup files</h2>
        <select v-model="selected" @change="chengeDevice">
            <option value="" disabled selected>choose
                device
            </option>
            <option value="Apple iPhone 11 Pro">Apple iPhone 11 Pro</option>
            <option value="Samsung Galaxy S20">Samsung Galaxy S20</option>
            <option value="Laptop DELL G5">Laptop DELL G5</option>
        </select>
        <router-link :to="{ path: 'data:selected',  query: {device: selected, id: id }}"><input class="btn" type="submit"
                                                                                               value="choise device">
        </router-link>
    </form>
</template>

<script>
    export default {
        name: 'Devices',
        data() {
            return {
                selected: '',
                id: 0,
            }
        },
        methods: {
            chengeDevice() {
                switch (this.selected) {
                    case 'Apple iPhone 11 Pro' :
                        this.id = 0;
                        break;
                    case 'Samsung Galaxy S20':
                        this.id = 1;
                        break;
                    case 'Laptop DELL G5' :
                        this.id = 2;
                        break;
                }
            }
        }
    }
</script>

<style scoped>
    form {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 50%;
        max-width: 800px;
    }

    h2 {
        margin-bottom: 30px;
        color: #ffffff;

    }

    select {
        padding: 5px;
        margin-bottom: 30px;
        width: 100%;
        border-radius: 15px;
        background-color: #fff;
        color: dodgerblue;
        padding: 15px;
        border: none;
        font-size: 18px;
        box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);

        outline: none;
    }


</style>
