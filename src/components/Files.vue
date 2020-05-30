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
            <BackupList v-bind:backupInfo="backupInfo"/>
        </div>
    </div>
</template>

<script>
    import Treeselect from '@riophae/vue-treeselect'
    import '@riophae/vue-treeselect/dist/vue-treeselect.css'
    import {LOAD_CHILDREN_OPTIONS} from '@riophae/vue-treeselect'
    import data from './data'
    import BackupList from './BackupList';

    const simulateAsyncOperation = fn => {
        setTimeout(fn, 2000)
    }

    export default {
        name: 'files',
        components: {BackupList, Treeselect},
        props: ['device'],

        data() {
            return {
                value: null,
                backupArr: [],
                backupInfo: JSON.parse(localStorage.getItem('backupInfo')) === null ? [] : JSON.parse(localStorage.getItem('backupInfo')),

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

                this.options.forEach(i => {
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
    .component {
        max-width: 70vw;
    }

    h2 {
        color: #fff;
        margin-bottom: 20px;

    }

    h3 {
        margin-bottom: 20px;
        color: #fff;

    }

    .wrap {
        display: flex;
        justify-content: space-between;

    }

    .tree {
        width: 80%;
    }

    .file-wrap {
        padding: 10px 15px;
        display: flex;
        justify-content: space-between;
    }

    .btn {
        padding: 10px;
        position: fixed;
        bottom: 40px;
        left: 50%;
        transform: translate(-50%, 0);
        z-index: 9999;
    }

</style>
