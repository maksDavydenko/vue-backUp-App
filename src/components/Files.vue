<template>
    <div class="component">
        <h2>{{$route.query.device}} file tree</h2>
        <h3>Choise of folders and files to create backup</h3>
        <button class="btn" @click="createBackup">create backup</button>

    <div class="wrap">

        <treeselect class="tree" v-model="value"
                    :multiple="true"
                    :options="options"
                    :always-open="true"
                    :append-to-body="true"
                    :load-options="true"
                    placeholder="Search files"

        >
            <label slot="option-label" slot-scope="{ node }" :class="labelClassName">
                <div class="file-wrap">
                    <div class="file-info file-info_name">{{node.label}}</div>
                    <div class="file-info file-info_size">{{node.raw.size}}</div>
                    <div class="file-info file-info_last-modification">{{node.raw.date}}</div>
                </div>
            </label>
        </treeselect>
        <div class="backup">
            <h3 class="backup__header">Previus backups</h3>
            <div class="backup-item" v-for="item in backupInfo" :key="item">
            <router-link  :to="{ path: 'backup', query: {device:item.device, data: item.data, date: item.date}}">
                <div>
                    <h4 class="backup-item__header">{{item.device}}</h4>
                    <p>{{item.date}}</p>
                </div>
                </router-link>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    import Treeselect from '@riophae/vue-treeselect'
    import '@riophae/vue-treeselect/dist/vue-treeselect.css'
    import { LOAD_CHILDREN_OPTIONS } from '@riophae/vue-treeselect'
    import data from './data'

    const simulateAsyncOperation = fn => {
        setTimeout(fn, 2000)
    }

    export default {
        name: 'files',
        components: {Treeselect},
        props: ['device'],

        data() {
            return {
                value: null,
                backupArr: [],
                backupInfo:  JSON.parse(localStorage.getItem('backupInfo')) === null ? [] : JSON.parse(localStorage.getItem('backupInfo')),

                options: data[this.$route.query.id].files,
                methods: {},
            }
        },
        methods: {
            createBackup() {
                this.backupArr = [];
                const detailedDate = [];

                function deepItems(arr) {
                    arr.forEach(i => {
                        detailedDate.push(i);
                        i.children != null ? deepItems(i.children) : null
                    })
                }

                this.options.forEach(i=>{
                    detailedDate.push(i);
                    i.children != null ? deepItems(i.children) : null
                });

                let date = '';

                detailedDate.forEach(i => {
                    this.value.forEach(j => {
                        if (i.id === j) {
                            const today = new Date();

                            const day = today.getDate();
                            const month = today.getMonth() + 1 < 10 ? '0' + (today.getMonth() + 1) : today.getMonth() + 1;
                            const year = today.getFullYear();

                            const hours = today.getHours() < 10 ? '0' + today.getHours() : today.getHours();
                            const minutes = today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes();
                            const seconds = today.getSeconds() < 10 ? '0' + today.getSeconds() : today.getSeconds();

                            date = `${year}-${month}-${day} | ${hours}:${minutes}:${seconds}`;

                            i.date = date;
                            this.backupArr.push(i);

                        }
                    })
                })

                this.backupInfo.push({
                    device: this.$route.query.device,
                    date: date,
                    data: this.backupArr
                })
                localStorage.setItem('backupInfo', JSON.stringify(this.backupInfo));

            },
            loadOptions({action, parentNode, callback}) {
                if (action === LOAD_CHILDREN_OPTIONS) {
                    switch (parentNode.id) {
                        case 'success': {
                            simulateAsyncOperation(() => {
                                parentNode.children = [{
                                    id: 'child',
                                    label: 'Child option',
                                }]
                                callback()
                            })
                            break
                        }
                        case 'no-children': {
                            simulateAsyncOperation(() => {
                                parentNode.children = []
                                callback()
                            })
                            break
                        }
                        case 'failure': {
                            simulateAsyncOperation(() => {
                                callback(new Error('Failed to load options: network error.'))
                            })
                            break
                        }
                        default: /* empty */
                    }
                }
            }
            },
            mounted() {
            }
        }
</script>

<style scoped>
    .component{
        max-width: 70vw;
    }
    h2{
        color: #fff;
        margin-bottom: 20px;

    }
    h3{        margin-bottom: 20px;
        color: #fff;

    }

    .wrap{
        display: flex;
        justify-content: space-between;

    }
    .tree{
        width: 80%;
    }
    .backup{
        padding: 10px;
        margin-left: 20px;
        width: 20%;
        background: #fff;
        border-radius: 10px;
    }


    .backup-item{
        margin-bottom: 20px;
        padding: 10px;
        border: 1px solid dodgerblue;
        border-radius: 20px;
    }


    .backup-item__header{
        color: #000;
        margin-bottom: 10px;
    }
    .backup__header{
        color: #000
    }
    .file-wrap{
        padding: 10px 15px;
        display: flex;
        justify-content: space-between;
    }

    /*.file-info_name{*/
    /*  width: 40%;*/
    /*}*/
    /*.file-info_size{*/
    /*    width: 25%;*/
    /*}*/
    /*.file-info_last-modification{*/
    /*    width: 35%;*/
    /*}*/
    /*.file-info_size,*/
    /*.file-info_last-modification{*/
    /*    text-align: right;*/

    /*}*/


    .btn{
        padding: 10px;
        position: absolute;
        bottom: 40px;
        left: 50%;
        transform: translate(-50%,0);
        z-index: 999;

    }

</style>
