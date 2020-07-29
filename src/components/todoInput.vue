<template>
    <div :class="$style.display">
        <div :class="$style.marginRight">
            <input :class="$style.inputForm" ref="head" v-on:change="actualText" :value="text" placeholder="Your todo">
        </div>
        <div>
            <button :class="$style.button" v-on:click="addTodo">Add todo</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'todoInput',
        props: ['addTodo', 'text', 'updateText'],
        methods: {
            actualText: function () {
                let refText = this.$refs.head.value
                this.updateText(refText)
            }
        }
    }
</script>

<style module>
    .inputForm {
        border: none;
        border-radius: .25rem;
        box-shadow: 0 0 .2rem #606060;
        padding: .25rem .5rem;
        width: 24.5rem;
        font-family: Arial, sans-serif;
    }
    .display {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 1rem;
    }
    .button {
        background-color: #550092;
        color: #fff;
        padding: .25rem .5rem;
        border: none;
        border-radius: .25rem;
        box-shadow: 0 0 .2rem #606060;
        transition: .25s;
        width: 5rem;
        font-family: Arial, sans-serif;
    }
    .button:hover {
        cursor: pointer;
        background-color: rgba(85, 0, 146, 0.75);
        transition: .25s;
    }
    .marginRight {
        margin-right: 1rem;
    }
</style>
