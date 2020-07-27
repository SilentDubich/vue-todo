<template>
    <div>
        <p>Hello world epta!</p>
        <p>{{msg + msg}}</p>
        <p>{{reversed}}</p>
        <div v-for="todo in todos" :key="todo.id">{{todo.id}} {{todo.todo}}
            {{todo.isComplete}}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Hello',
        props: {
            msg: String,
            todos: [Object]
        },
        computed: {
            reversed: function () {
                console.log(this.msg)
                return this.msg.split("").reverse().join('')
            }
        }
    }
</script>
