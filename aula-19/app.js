app = new Vue({
    el: "#app",
    data: {
        numero: 0
    },
    methods: {
        greet: function(event) {
            event.preventDefault();
            alert("Ola Usuario")
            console.log(event.target.tagName)
        },
        message: function(name) {
            alert("Ola Usuario" + " " + name)
        }
    }
})