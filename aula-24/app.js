Vue.filter('phoneMaskBr', function(value) {
    if(value.length === 11) {
        return value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
    }else {
        return value
    }
})
Vue.filter('dateMaskBr', function(value) {
    const date = new Date(value)
    if (date !== undefined){
        return date.toLocaleDateString() + " " + date.toLocaleTimeString()
    }
    return value
})

Vue.filter('moneyBr', function(value) {
    if (typeof value === 'number') {
        return value.toLocaleString('pt-BR')
    }
    return value
})

app = new Vue({
    el: "#app",
    data: {
        pessoa: {
            name: "pedro",
            email: "pedro.henrique@metadil.com.br",
            phone: "11999999999",
            date: "2020-04-08T12:00:00-03:00",
            balance: 100.10 
        }
    },
    filters: {
        capitalize: function(value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
        },
    }
})