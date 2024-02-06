const tableHead = {
    template: `                        
        <thead>                     
            <tr>
                <th class="text-center">{{ 'Name' | capitalize }} </th>
                <th class="text-center">{{ 'Email' | capitalize }} </th>
                <th class="text-center">{{ 'Phone' | capitalize }} </th>
                <th class="text-center">{{ 'Date' | capitalize }} </th>
                <th class="text-center">{{ 'Balance' | capitalize }} </th>
                <th class="text-center">{{ 'Acoes' | capitalize }} </th>
            </tr>
        </thead>
    `
}

const tableFoot = {
    template: "#table-foot",
    props: {
        filtroGrid: String,
        dataSource: Array,
        dataSourceGrid: Array
    }
}

const tableBody = {
    template: `
        <tbody>
            <tr v-for="pessoa in dataSourceGrid">
                <th class="text-center">{{ pessoa.name | capitalize }}</th>
                <th class="text-center">{{ pessoa.email }}</th>
                <th class="text-center">{{ pessoa.phone | phoneMaskBr }}</th>
                <th class="text-center">{{ pessoa.date | dateMaskBr }}</th>
                <th class="text-center">{{ pessoa.balance | moneyMaskBr}}</th>
                <th class="text-center">
                    <button class="btn btn-danger" @click.prevent="removeItem($event, key)">
                        <i class="fa fa-times">x</i>
                    </button>
                </th>
            </tr>
        </tbody>
    `,
    props: {
        dataSourceGrid: Array,
        dataSource: Array
    },
    methods: {
        removeItem: function (index) {
            this.dataSource.splice(index, 1);
        }
    }
}

const tableGrid = {
    template: `
        <div class="row">
        <div class="col">
            <table class="table table-striped table-bordered table-hover">
                <table-head class="thead-dark"/>
                    
                </thead>
                
                <table-body
                    :dataSourceGrid="dataSourceGrid"
                    :dataSource="dataSource"
                />
                <table-foot
                    :filtroGrid="filtroGrid"
                    :dataSource="dataSource"
                    :dataSourceGrid="dataSourceGrid"
                    />
                </table>
            </div>
        </div>
    `,
    components: {
        tableFoot: tableFoot,
        tableBody: tableBody,
        tableHead: tableHead
    },
    props: {
        dataSource: Array,
        filtroGrid: String,
        dataSourceGrid: Array
    }

}


// Vue.component('table-foot', tableFoot);

// Vue.component('table-body', tableBody);

// Vue.component('table-head', tableHead);

Vue.component('tableGrid', tableGrid);

Vue.component('DataGrid', {
    template: '#DataGrid',
    data: function () {
        return {
            filtroGrid: ""
        }
    },
    computed: {
        dataSourceGrid: function () {
            const $this = this;
            if ($this.grid === "") {
                return $this.dataSource;
            }

            return $this.dataSource.filter(function (v, i) {
                for (const key in v) {
                    if (v.hasOwnProperty(key)) {
                        result = v[key].toString().toLowerCase().indexOf($this.filtroGrid.toLowerCase()) > -1;
                        if (result) {
                            return true;
                        }
                    }
                }
                return false;
            });
        }
    },
    props: ['dataSource']
})