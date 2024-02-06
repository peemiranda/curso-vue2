app = new Vue({
    el: "#app",
    data: {
        forms: {
            input: '',
            textArea: '',
            checkBox: {
                checkNames: [],
                checked: undefined,
                checked2: undefined
            },
            radio: {
                checked: undefined
            },
            lazy: '',
            number: undefined,
            trim: '',
            select: {
                singles: '',
                multiple: []
            },
        }
    },
})