<template>
    <div>
        <h2>{{$route.query.name}} file tree</h2>
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
    </div>
    </div>
</template>

<script>
    // import the component
    import Treeselect from '@riophae/vue-treeselect'
    import '@riophae/vue-treeselect/dist/vue-treeselect.css'
    import { LOAD_CHILDREN_OPTIONS } from '@riophae/vue-treeselect'
// import selected from ''
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
                value1: null,
                backupArr: [],
                options: data,
                methods: {},
                // nameDevice: this.device
            }
        },
        methods: {
            createBackup() {
                const arr = this.options.flat();
                arr.forEach(i => {
                    this.value.forEach(j => {
                        if (i.id === j) {
                            const today = new Date();

                            const day = today.getDate();
                            const month = today.getMonth() + 1 < 10 ? '0' + (today.getMonth() + 1) : today.getMonth() + 1;
                            const year = today.getFullYear();
                            const hours = today.getHours() < 10 ? '0' + today.getHours() : today.getHours();
                            const minutes = today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes();
                            const seconds = today.getSeconds() < 10 ? '0' + today.getSeconds() : today.getSeconds();

                            i.date = `${year}-${month}-${day} | ${hours}:${minutes}:${seconds}`;
                            this.backupArr.push(i);
                        }
                    })
                })
                alert(this.$route.params)

            },
            loadOptions({action, parentNode, callback}) {
                // Typically, do the AJAX stuff here.
                // Once the server has responded,
                // assign children options to the parent node & call the callback.

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

                // alert(this.selected);
                // alert(this.device);
                console.log(this.$route.params)
                // alert(this.$route.params.device)
            }
        }
</script>

<style scoped>
    h2{
        color: #fff;
        margin-bottom: 20px;

    }
    h3{        margin-bottom: 20px;
        color: #fff;
    }

    .tree{
        /*margin-top: 30px;*/
    }
    .wrap{
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    .file-wrap{
        padding: 10px 15px;
        display: flex;
        justify-content: space-between;
    }

    .file-info_size,
    .file-info_last-modification{
        text-align: center;
    }

    .btn{
        padding: 10px;
        position: absolute;
        bottom: 40px;
        left: 50%;
        transform: translate(-50%,0);
        z-index: 999;

    }

</style>
