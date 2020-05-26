<template>
    <div >
<!--        <FileInfo :name="'name'" :size="4" :date="'2019'"/>-->

        <treeselect v-model="value"
                    :multiple="true"
                    :options="options"
                    :always-open="true"
                    :append-to-body="true"
        >
            <label slot="option-label" slot-scope="{ node, shouldShowCount, count, labelClassName }" :class="labelClassName">

                <div class="flex"><div>{{node.label}}</div>{{node.raw.size}}<div></div><div>{{node.raw.date}}</div></div>

<!--                <span v-if="shouldShowCount" :class="countClassName">({{ count }})</span>-->
            </label>
            <div slot="value-label" slot-scope="{ node }">{{ node.raw.customLabel }}</div>

            <!--            <div slot="value-label">{{ node.size}} {{node.date}}</div>-->
        </treeselect>
    </div>
</template>

<script>
    // import the component
    import Treeselect from '@riophae/vue-treeselect'
    import '@riophae/vue-treeselect/dist/vue-treeselect.css'
    // import FileInfo from './FileInfo';

    export default {
        name: 'files',
        // register the component
        components: {Treeselect},

        data() {
            // let item = `<div class="file-item"><span>ab</span><span>size 4kb</span><span>2020.04.11</span> </div>`;
            return {
                name: 'size',
                // define the default value
                value: null,
                // define options
                options: [ {
                    id: 'a',
                    label: 'a',
                    size: 4,
                    date: '2019',
                    children: [ {
                        id: 'aa',
                        label: 'fs'

                    }, {
                        id: 'ab',
                        label: 'tt',
                        size: 4,
                        date: '2019',
                    } ],
                }, {
                    id: 'b',
                    label: 'b',
                }, {
                    id: 'c',
                    label: 'c',
                } ],
            }
        },

        methods: {
            addInfo(){
                return `<div>this name</div>`
                // return <div><div class="name">${name}</div><div class="size">${size}</div> <div class="data">${date}</div></div>
            }
            // renderFileItem(name, size, date) {
            //
            //     return '<FileInfo :name="${name}" :size="size" :date="date"/>';
            // }
        },



    }
</script>

<style scoped>
    .flex{
        display: flex;
        justify-content: space-between;
    }
</style>
