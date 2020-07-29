import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        count: 0,
        todos: [],
        maxID: 0,
        text: '',
        error: {
            todo: null
        }
    },
    mutations: {
        todoAdd (state) {
            if (state.text.length > 0) {
                let todo = {id: state.maxID + 1, todo: state.text, isComplete: false}
                localStorage.setItem('id', (state.maxID + 1).toString())
                localStorage.setItem('todos', JSON.stringify([...state.todos, {id: state.maxID + 1, todo: state.text, isComplete: false}]))
                state.maxID++
                state.text = ''
                state.error.todo = null
                return state.todos.push(todo)
            } else {
                return state.error.todo = 'Поле заметки пусто !'
            }

        },
        completeSet (state, id) {
            localStorage.setItem('todos', JSON.stringify(state.todos.map(el => el.id === id ? {id: el.id, todo: el.todo, isComplete: !el.isComplete} : el)))
            return state.todos.map(el => el.id === id ? el.isComplete = !el.isComplete : el)
        },
        textCurrent(state, text) {
            return state.text = text
        },
        todoDelete: function (state, id) {
            localStorage.setItem('todos', JSON.stringify(state.todos.filter( el => el.id !== id && el)))
            return state.todos = [...state.todos.filter( el => el.id !== id)]
        },
        setTodos(state) {
            state.maxID = +localStorage.id && JSON.parse(localStorage.getItem('id')) || 0
            state.todos = localStorage.todos && JSON.parse(localStorage.getItem('todos'))
        }
    }
})
