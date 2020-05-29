<template>
    <div class="component">
        <h2>{{$route.query.device}} backup {{$route.query.date}}</h2>

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
    import Treeselect from '@riophae/vue-treeselect'
    import '@riophae/vue-treeselect/dist/vue-treeselect.css'
    import {LOAD_CHILDREN_OPTIONS} from '@riophae/vue-treeselect'


    const simulateAsyncOperation = fn => {
        setTimeout(fn, 2000)
    }
    export default {
        name: 'backUp',
        components: {Treeselect},

        data() {
            return {
                value: null,
                options: this.$route.query.data,
                methods: {},
            }
        },
        methods: {
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
        max-width: 900px;
    }
    h2{
        color: #fff;
        margin-bottom: 30px;
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
