<template>
  <div class="user-admin">

    <div class="card mb-3 shadow mb-4 table-radius">
        <div class="card-header">   
            <h6 class="m-0 font-weight-bold text-primary"> <i class="fa fa-building-o"></i> Empresas</h6>
        </div>
        <div class="card-body  ">
            <div class="form-group input-group">
                <div class="form-inline my-2 my-lg-0 top_search input-group-addon input-group-btn ml-auto">
                    <input type="search"
                        class="form-control mr-sm border-b" placeholder="Pesquisar..." 
                        aria-label="Search"  
                        v-model="filter"
                        id="filterInput">
                    </div>
                </div>
            <div class="table-responsive">
                <div class="maxWidth" id="tabela">

                <b-table v-model="searched" class="table table-striped projects table-sm 
                table-edit"
                    id="my-table" :per-page="perPage"
                    :current-page="currentPage"
                    striped hover :items="items" :fields="fields">
                    <template slot="actions" slot-scope="data">
                        <a title="Visualizar" href="#" >
                            <i class="fa fa-picture-o mr-2"></i>
                        </a>
                        <b-button variante="info" class="btn btn-info btn-sm mr-1 circle" hidden>
                        </b-button>
                        <a title="Editar" href="javascript:void(0)">
                            <i class="fa fa-edit mr-2 "></i>
                        </a>
                        <a title="Remover" href="#">
                            <i class="fa fa-remove mr-2"></i>
                        </a>
                    </template>
                </b-table>

                <hr />

                <b-pagination v-model="currentPage" :total-rows="rows"
                    :per-page="perPage"
                    aria-controls="my-table">
                </b-pagination>

                </div>
                <div class=" small text-muted">Última Atualização as 11:59 PM</div>
            </div>
        </div>
    </div>
    
    <div class="d-flex flex-row-reverse bd-highlight">
    <div class="mt-1 p-2 bd-highlight">
        <FormModal />
    </div>
    </div>
    <!-- FIM USER ADM -->
  </div>
</template>

<script>

import FormModal from './Form_Modal'

export default {
    name: 'Table',
    components: {
        FormModal
    },
    data: function() {
        return {

            perPage: 5,
            currentPage: 1,
            mode: 'save', //Troca entre o modo de exclusão e salvar, Altera o botão do formulário atraves do ID
            user: {}, //O proprio usuários que vai ser cadastrado
            users: [], //Array para exibição dos dados dos usuários
            fields: [ //Alterar as descrição da tabela
                { key: 'id', sortable: true },
                { key: 'nome', label:'Nome', sortable: true },
                { key: 'cnpj', label: 'CNPJ'},
                { key: 'representanteL', label: 'Representante Legal'},
                { key: 'contato', label: 'Contato' },
                { key: 'areaAtuacao', label: 'Área Atuação', sortable: false},
                { key: 'cep', label:'CEP' },
                { key: 'actions', label: 'Ações' }
            ],
            //Acessando os dados dos usuários do backend
            /*methods: {
                //Criando a função para acessar o array de usuários
                loadUsers() {
                    const url = `${baseApiUrl}/users`
                    axios.get(url).then(res => {
                        //Passandos os dados da response para o array Users
                        this.users = res.data
                    })
                }
            },
            //Carregando a função loadUsers
            mounted() {
                //Chamando a função
                this.loadUsers
            },*/
            items: [
                { isActive: true, id: 1, nome: 'Jickerson', last_name: 'Macdonald', cnpj: '143.243.234-98', representanteL: 'Jose Carlos Vieira', contato: '(74) 9 9434-8683', areaAtuacao: 'Informática', cep: '44670000' },
                { isActive: true, id: 2, nome: 'Eickerson', last_name: 'Scdonald', cnpj: '943.243.234-98', representanteL: 'Osse Carlos Vieira', contato: '(74) 3542-4250', areaAtuacao: 'Informática', cep: '44670000' },
                { isActive: true, id: 3, nome: 'Dickerson', last_name: 'Macdonald', cnpj: '643.243.234-98', representanteL: 'Xeose Carlos Vieira', contato: '(74) 4003-1000', areaAtuacao: 'Informática', cep: '44670000' },
                { isActive: true, id: 4, nome: 'Eickerson', last_name: 'Pcdonald', cnpj: '0300 313 9000', representanteL: 'Tose Carlos Vieira', contato: '(74) 9 9434-8683', areaAtuacao: 'Informática', cep: '44670000' },
                { isActive: true, id: 5, nome: 'Cickerson', last_name: 'Acdonald', cnpj: '343.243.234-98', representanteL: 'Hose Carlos Vieira', contato: '(74) 9 9434-8683', areaAtuacao: 'Informática', cep: '44670000' },
                { isActive: true, id: 6, nome: 'Eickerson', last_name: 'Scdonald', cnpj: '943.243.234-98', representanteL: 'Obsse Carlos Vieira', contato: '(74) 9 9434-8683', areaAtuacao: 'Informática', cep: '44670000' },
                { isActive: true, id: 7, nome: 'Jickerson', last_name: 'Macdonald', cnpj: '143.243.234-98', representanteL: 'Pose Carlos Vieira', contato: '(74) 4003-1000', areaAtuacao: 'Informática', cep: '44670000' },
                { isActive: true, id: 8, nome: 'Eickerson', last_name: 'Gcdonald', cnpj: '99987-4865', representanteL: 'Ose Carlos Vieira', contato: '(74) 9 9434-8683', areaAtuacao: 'Informática', cep: '44670000' },
                { isActive: true, id: 9, nome: 'Dickerson', last_name: 'Facdonald', cnpj: '0300 313 9000', representanteL: 'Xkose Carlos Vieira', contato: '(74) 9 9434-8683', areaAtuacao: 'Informática', cep: '44670000' },
                { isActive: true, id: 10, nome: 'Eickerson', last_name: 'Bcdonald', cnpj: '943.243.234-98', representanteL: 'MOse Carlos Vieira', contato: '(74) 3542-4250', areaAtuacao: 'Informática', cep: '44670000' },
                { isActive: true, id: 11, nome: 'Cickerson', last_name: 'Ocdonald', cnpj: '343.243.234-98', representanteL: 'Teose Carlos Vieira', contato: '(74) 9 9434-8683', areaAtuacao: 'Informática', cep: '44670000' },
                { isActive: true, id: 12, nome: 'Eickerson', last_name: 'Acdonald', cnpj: '943.243.234-98', representanteL: 'Ose Carlos Vieira', contato: '(16) 3254-7003', areaAtuacao: 'Informática', cep: '44670000' }
            ]
        }
    },
    methods: {
    },
    computed: {
        rows() {
            return this.items.length
        }
    }
}
</script>


<style>
    .table-radius {
        border-radius: 9px;
    }
    .table thead th {
        vertical-align: bottom;
        border-bottom: 2px solid #ddd;
        background: #FFF;
        padding: 8px;
        border-top: none;
    }
    .table-striped tbody tr:nth-of-type(odd) {
        background-color: white;
    }

    th {
        color: #57708c;
    }

    .table-sm th, .table-sm td {
    padding: 0.3rem;
    }
    .table th, .table td {
        padding: 0.75rem;
        vertical-align: top;
        border-top: 1px solid #dee2e6;
    }
    .table-edit td {
        cursor: default;
    }
    .table-edit td {
        color: #5A738E;
        text-decoration: none;
        font-size: 14px;
    }

    .btn-group-xs>.btn, .btn-sm {
        padding: 1px 5px;
        font-size: 13px;
        line-height: 1.5;
        border-radius: 3px;
    }
    .btn-danger, .btn-info {
        margin-left: 2px;
    }
    
    .circle {
        border-radius: 100px;
    }

    .circle:hover {
        width: 26px;
        height: 26px;
        transition: 1s;
    }

    .table .fa-picture-o {
        color: #23CCEF;
    }

    .table .fa-remove {
        color: #FB404B;
    }

    .table .fa-edit {
        color: #FFA534;
    }

    .table a .fa {
        font-size: 15px;
        padding: 3px;
    }

    .table a .fa:hover {
        font-size: 18px;
        transition: .3s;
        padding: 0px;
    }


</style>