<template>
  <div>
    <b-table v-model="searched" class="table table-striped projects table-sm 
        table-edit"
        id="my-table" :per-page="perPage"
        :current-page="currentPage"

        striped hover :items="items" :fields="fields">
        <template slot="actions" slot-scope="data">
            <a title="Visualizar" href="#">
                <i class="fa fa-picture-o mr-2"></i>
            </a>
            <b-button variante="info" class="btn btn-info btn-sm mr-1 circle" hidden>
            </b-button>
            <a title="Editar" @click="edit_Plano(this)">
                <i class="fa fa-edit mr-2 "></i>
            </a>
            <a title="Remover" href="#">
                <i class="fa fa-remove mr-2" @click="deletar(items.id)"></i>
            </a>
        </template>
    </b-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {

        fields: [ //Alterar as descrição da tabela
          { key: 'id', sortable: true },
          { key: 'nome', label:'Estagiário', sortable: true },
          { key: 'curso', label: 'Curso'},
          { key: 'matricula', label: 'Matricula'},
          { key: 'contato', label: 'Contato' },
          { key: 'actions', label: 'Ações' }
        ],
        items: [
          { id: 40, nome: 'João Carlos Santos', curso: 'Zootecnia', matricula: '092341425241', contato: '(74) 99943224', actions: ''},
          { id: 40, nome: 'Carlos Santos Almeida', curso: 'Informática', matricula: '6453214234', contato: '(74) 56321343432', actions: ''},
          { id: 40, nome: 'Julia Campelo', curso: 'Zootecnia', matricula: '234122424', contato: '(74) 98987562', actions: ''},
          { id: 40, nome: 'Andressa Vanesa', curso: 'Alimentos', matricula: '112324341', contato: '(74) 113424565', actions: ''}
        ],
      }
    },
    methods: {
      deletar(id) {
        this.items.splice(id, 1)
      },
      edit_Plano() {
        this.show = true;
      }
    }
  }
</script>