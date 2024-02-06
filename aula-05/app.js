app.component('item', {
    template: '<p>Item teste. {{ 1 + 1 }}</p>'
});

app = Vue.createApp({
    data() {
        return {
            isVisible: true,
            message: "ola"
        }
    }
}).mount('#app');
