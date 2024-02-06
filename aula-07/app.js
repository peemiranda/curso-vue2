app = new Vue({
    el: "#app",
    data: {
        numero: 10
    },

    beforeCreate: function () {
        console.log("BeforeCreate", this.numero)
    },
    created: function () {
        console.log("create", this.numero)
    },
    beforeMount: function () {
        console.log("beforeMount", this.numero)
    },
    Mounted: function () {
        console.log("Mounted", this.numero)
    },
    beforeUpdate: function () {
        console.log("beforeUpdate", this.numero)
    },
    updated: function () {
        console.log("updated", this.numero)
    },
    beforeDestroy: function () {
        console.log("beforeDestroy", this.numero)
    },
    destroyed: function () {
        console.log("destroyed", this.numero)
    }
}).mount('#app');
