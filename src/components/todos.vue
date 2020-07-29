<template>
    <div class="container" >
        <div class="container container_margin items_decor">
            <div class="items_decorID items_marginRight">
                <span>{{i}}</span>
            </div>
            <div class="marginTodoItem items_decorTodo items_marginRight">
                <span >{{todo}}</span>
            </div>
            <div>
                <button class="items_decorButton items_marginRight" v-on:click="setComplete(id)">{{isComplete ? 'Completed' : 'Not completed'}}</button>
            </div>
            <div>
                <button class="items_decorButton" v-on:click="deleteTodo(id)">Delete todo</button>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'todoList',
        props: ['setComplete', 'id', 'todo', 'isComplete', 'deleteTodo', 'i']

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
    .items_decor {
        border-radius: .25rem;
        box-shadow: 0 0 .5rem #606060;
        padding: .5rem .75rem;
        font-family: Arial, sans-serif;
        width: 30rem;
    }
    .items_decorID {
        width: 1.5rem;
    }
    .items_decorTodo {
        width: 15rem;
        text-align: left;
    }
    .items_decorButton {
        width: 7.5rem;
        background-color: #550092;
        color: #fff;
        padding: .25rem .5rem;
        border: none;
        border-radius: .25rem;
        box-shadow: 0 0 .2rem #606060;
        transition: .25s;
    }
    .items_decorButton:hover {
        cursor: pointer;
        background-color: rgba(85, 0, 146, 0.75);
        transition: .25s;
    }
    .items_marginRight {
        margin-right: .5rem;
    }
</style>
