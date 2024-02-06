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

Vue.filter('capitalize', function(value) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
)