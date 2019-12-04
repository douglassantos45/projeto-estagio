<template>
  <div class="user-admin">

    <div class="card mb-3 shadow mb-4 table-radius">
        <div class="card-header">   
            <h6 class="m-0 font-weight-bold text-primary"> <i class="fa fa-building-o"></i> Frequência</h6>
        </div>
        <div class="card-body  ">

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

import FormModal from '../FormModal'

export default {
    name: 'FrequenciaPages',
    components: { FormModal },
    data: function() {
        return {

            perPage: 5,
            currentPage: 1,
            mode: 'save', //Troca entre o modo de exclusão e salvar, Altera o botão do formulário atraves do ID
            user: {}, //O proprio usuários que vai ser cadastrado
            users: [], //Array para exibição dos dados dos usuários
            fields: [ //Alterar as descrição da tabela
                { key: 'date', sortable: true },
                { key: 'entrada', label:'Entrada', sortable: true },
                { key: 'saida', label: 'Saída'},
                { key: 'name', label: 'Nome'},
                { key: 'actions', label: 'Ações' }
            ],
            items: [
                { isActive: true, date: '02/12/2019', entrada: '09:00', saida: '17:00', name: 'Douglas Silva Santos'},
                { isActive: true, date: '02/12/2019', entrada: '09:00', saida: '17:00', name: 'Douglas Silva Santos'}
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

</style>