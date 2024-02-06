app = new Vue({
    el: "#app",
    data: {
        pessoas: [
            {id: 1, nome: "Pedro", idade: 19, ativo: true},
            {id: 2, nome: "Luiz", idade: 19, ativo: true},
            {id: 3, nome: "Caio", idade: 25, ativo: true},
            {id: 4, nome: "Gabriel", idade: 21, ativo: false},
            {id: 5, nome: "Morishita", idade: 20, ativo: true},
            {id: 6, nome: "Isa", idade: 17, ativo: true},
            {id: 7, nome: "Wellington", idade: 39, ativo: false},
            {id: 8, nome: "Yuri Alberto", idade: 29, ativo: false},
            {id: 9, nome: "Neto", idade: 49, ativo: true}
        ]
    },
    computed: {
        pessoasAtivas: function() {
            return this.pessoas.filter(function(pessoa, index) {
                return pessoa.ativo
            })
        }
    }
})