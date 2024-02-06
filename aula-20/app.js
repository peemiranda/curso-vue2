app = new Vue({
    el: "#app",
    data: {
        listaDeTarefas: [],
        todo: {
            text: ''
        },
    },
    methods: {
        cadastraTarefas: function(e) {
            this.listaDeTarefas.push(this.todo.text);
            this.todo.text = '';
        },
        removeTarefa: function(index) {
            this.listaDeTarefas.splice(index, 1);
        } 
    },
})