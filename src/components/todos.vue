<template>
    <div>
        <div class="container container_margin">
            <div>
                <span>{{id}}</span>
            </div>
            <div class="marginTodoItem">
                <span>{{todo}}</span>
            </div>
            <div>
                <button v-on:click="setComplete(id)">{{isComplete ? 'Completed' : 'Not completed'}}</button>
            </div>
            <div>
                <button v-on:click="deleteTodo(id)">Delete todo</button>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'todoList',
        props: ['setComplete', 'id', 'todo', 'isComplete', 'deleteTodo']

    }
</script>

<style>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .marginTodoItem {
        margin: 0 1rem;
    }
    .container_margin {
        margin-bottom: 1rem;
    }
</style>
