app = new Vue({
    el: "#app",
    data: {
        dataSource: pessoas,
        filtroGrid: ""
    },
    computed: {
        dataSourceGrid: function () {
            const $this = this;
            if($this.grid === "") {
                return $this.dataSource;
            }

            return $this.dataSource.filter(function (v, i) {
                for (const key in v) {
                    if (v.hasOwnProperty(key)) {
                        result = v[key].toString().toLowerCase().indexOf($this.filtroGrid.toLowerCase()) > -1;
                        if(result) {
                            return true;
                        }
                    }
                }
                return false;
            });
        }
    },
    methods: {
        removeItem: function (index) {
            this.dataSource.splice(index, 1);
        }
    }
})