app = new Vue({
    el: "#app",
    data: {
        numero: 3,
        frutasEx1: ["Maca", "Uva", "Pera", "Abacaxi"],
        frutasEx2: [{
            nome: 'Maca',
        }, {
            nome: 'Uva'
        }, {
            nome: 'Manga'
        }, {
            nome: 'Abacaxi'
        }],
        pessoasEx3: {
            nome: "Pedro",
            sexo: "Masculino",
            idade: 19,
            created: new Date().toLocaleDateString(),
            list: [0,2,3,4]
        }
    }
})