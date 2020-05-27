<template>
    <div class="wrap">
        <button @click="createBackup">backup files</button>

        <treeselect v-model="value"
                    :multiple="true"
                    :options="options"
                    :always-open="true"
                    :append-to-body="true"
                    :load-options="true"
                    :value-consists-of="valueConsistsOf"

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
</template>

<script>
    // import the component
    import Treeselect from '@riophae/vue-treeselect'
    import '@riophae/vue-treeselect/dist/vue-treeselect.css'
    import { LOAD_CHILDREN_OPTIONS } from '@riophae/vue-treeselect'

    import data from './data'

    const simulateAsyncOperation = fn => {
        setTimeout(fn, 2000)
    }
    export default {
        name: 'files',
        // register the component
        components: {Treeselect},

        data() {
            return {
                value: null,
                backupArr: [],
                options: data,
                methods: {},
            }
        },
        methods: {
            createBackup(){
               const arr = this.options.flat()
                arr.forEach(i => {
                   this.value.forEach(j => {
                       if(i.id === j){
                           this.backupArr.push(i);
                       }
                   })
                })
            },
            loadOptions({ action, parentNode, callback }) {
                // Typically, do the AJAX stuff here.
                // Once the server has responded,
                // assign children options to the parent node & call the callback.

                if (action === LOAD_CHILDREN_OPTIONS) {
                    switch (parentNode.id) {
                        case 'success': {
                            simulateAsyncOperation(() => {
                                parentNode.children = [ {
                                    id: 'child',
                                    label: 'Child option',
                                } ]
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
            },
        },
    }
</script>

<style scoped>
    .wrap{
        display: flex;
        justify-content: center;
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

</style>
