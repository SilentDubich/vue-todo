<template>
    <div id="app">
        <TodoInput v-bind:addTodo="addTodo" v v-bind:text="this.$store.state.text" v-bind:updateText="currentText"/>
        <div :class="$style.container_err" v-if="this.$store.state.error.todo">
            <p :class="$style.item_err">{{this.$store.state.error.todo}}</p>
        </div>
        <div v-if="this.$store.state.todos.length">
            <div v-for="(todo, i) in this.$store.state.todos" :key="todo.id">
                <TodoList
                        v-bind:id="todo.id"
                        v-bind:i="i + 1"
                        v-bind:todo="todo.todo"
                        v-bind:isComplete="todo.isComplete"
                        v-bind:delete-todo="deleteTodo"
                        v-bind:set-complete="setComplete"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import TodoList from './components/todos'
    import TodoInput from './components/todoInput'
    import {mapMutations} from "vuex";

    export default {
        name: 'App',
        methods: {
            ...mapMutations([
                'todoAdd',
                'completeSet',
                'setTodos',
                'textCurrent',
                'todoDelete'
            ]),
            addTodo() {
                this.todoAdd()
            },
            setComplete(id) {
                this.completeSet(id)
            },
            currentText(text) {
                this.textCurrent(text)
            },
            deleteTodo(id) {
                this.todoDelete(id)
            }
        },
        created() {
            this.setTodos()
        },
        components: {
            TodoList,
            TodoInput
        }
    }
</script>

<style module>
    #app {
        margin: 0 auto;
    }
    .container_err {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .item_err{
        border-radius: .25rem;
        box-shadow: 0 0 .5rem #606060;
        padding: .25rem .5rem;
        font-family: Arial, sans-serif;
        margin: 0 0 1rem 0;
    }
</style>
