<template>
    <div id="app">
        <TodoInput v-bind:add-todo="addTodo" v v-bind:currentText="text" v-bind:updateText="currentText"/>
        <div v-if="todos.length">
            <div v-for="todo in todos" :key="todo.id">
                <TodoList
                        v-bind:id="todo.id"
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

    export default {
        name: 'App',
        data: () => ({
            phone: '9000 000 000',
            todos: [],
            text: '',
            maxID: 0,
        }),
        methods: {
            addTodo: function () {
                console.log(this.todos)
                let todo = {id: this.maxID + 1, todo: this.text, isComplete: false}
                localStorage.setItem('id', (this.maxID + 1).toString())
                localStorage.setItem('todos', JSON.stringify([...this.todos, {id: this.maxID + 1, todo: this.text, isComplete: false}]))
                this.maxID++
                this.text = ''
                return this.todos.push(todo)
            },
            setComplete: function (id) {
                localStorage.setItem('todos', JSON.stringify(this.todos.map(el => el.id === id ? {id: el.id, todo: el.todo, isComplete: !el.isComplete} : el)))
                return this.todos.map(el => el.id === id ? el.isComplete = !el.isComplete : el)
            },
            currentText: function (text) {
                return this.text = text
            },
            deleteTodo: function (id) {
                localStorage.setItem('todos', JSON.stringify(this.todos.filter( el => el.id !== id && el)))
                return this.todos = this.todos.filter( el => el.id !== id && el)
            }
        },
        mounted() {
            this.maxID = +localStorage.id && JSON.parse(localStorage.getItem('id')) || 0
            this.todos = localStorage.todos && JSON.parse(localStorage.getItem('todos'))
        },
        components: {
            // HelloWorld,
            TodoList,
            TodoInput
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
