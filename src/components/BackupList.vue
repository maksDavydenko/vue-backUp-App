<template>
    <div class="backup">
        <h3 class="backup__header">Previus backups</h3>
        <div class="backup__inner">
            <div class="backup-item" v-for="item in backupInfo" :key="item">
                <router-link :to="{ path: 'backup', query: {device:item.device, data: item.data, date: item.date}}">
                    <div>
                        <h4 class="backup-item__header">{{item.device}}</h4>
                        <p>{{item.date}}</p>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BackupList',
        props: {
            backupInfo: {
                require: true,
                type: Object,
            }
        }
    }
</script>

<style scoped>
    h3 {
        margin-bottom: 20px;
    }

    .backup {
        padding: 10px;
        margin-left: 20px;
        width: 20%;
        background: #fff;
        border-radius: 10px;
    }


    .backup-item {
        margin-bottom: 20px;
        padding: 10px;
        border: 1px solid dodgerblue;
        border-radius: 20px;
    }


    .backup-item__header {
        color: #000;
        margin-bottom: 10px;
    }

    .backup__header {
        color: #000
    }

    @media screen and (max-width: 900px) {
        .backup__inner {
            width: 100%;
            display: flex;
            overflow-x: scroll;
        }
        .backup{
            width: 100%;
            margin-left: 0px;
        }
        .backup-item{
            margin: 0px 20px;
        }
    }
</style>
