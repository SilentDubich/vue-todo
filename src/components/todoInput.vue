<template>
    <div>
        <div>
            <input v-on:change="actualText" ref="head" v-bind:value="currentText" type="text" placeholder="Your todo">
        </div>
        <div>
            <button v-on:click="addTodo">Add todo</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'todoInput',
        props: ['addTodo', 'currentText', 'updateText'],
        methods: {
            actualText: function () {
                let refText = this.$refs.head.value
                this.updateText(refText)
            }
        }
    }
</script>
