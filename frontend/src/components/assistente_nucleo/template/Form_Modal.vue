<template>
  <div>
    <b-button title="Cadastrar Empresa" class="button-plus btn btn-primary btn-lg shadow mr-2" v-b-modal.modal-lg variant="primary"><i class="fa fa-plus"></i></b-button>

      <b-modal id="modal-lg" size="lg" title="Cadastrar Empresa">

        <b-form @submit="onSubmit" @reset="onReset" v-if="show">

          <b-form-group id="input-group-2" label="Nome:" label-for="input-2">
            <b-form-input 
              id="input-2" v-model="form.name" required placeholder="Informe o nome da Empresa">
            </b-form-input> 
          </b-form-group>
          

          <b-form-group id="input-group-3" label="Instituto:" label-for="input-3">
            <b-form-select
              id="input-3" v-model="form.istituto" :options="istitutos" required
            ></b-form-select>
          </b-form-group>
          <b-button type="submit" variant="success">Cadastrar</b-button>
          <b-button type="reset" variant="danger">Limpar</b-button>
        </b-form>

    </b-modal>

</div>
</template>

<script>
export default {
    data() {
      return {
        form: {
          name: '',
          istituto: null,
          checked: []
        },
        istitutos: [{ text: 'Selecionar', value: null }, 'Senhor do Bonfim', 'Campinhos', 'Alagoinhas', 'Catu'],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
}
</script>

<style>
    .button-plus {
        border-radius: 100px;
        height: 55px;
        width: 55px;
        margin-top: -10px;
        margin-bottom: -15px;
    }
    .button-plus:hover{
      height: 65px;
      width: 65px;
      transition: .7s;
      margin-top: -10px;
      margin-bottom: -25px;
      
    }

    .btn .btn-success {
      color: #fff;
      background-color: #3ac47d;
      border-color: #3ac47d;
    }

    .btn-success.btn-shadow {
      box-shadow: 0 0.125rem 0.625rem rgba(58, 196, 125, 0.4), 0 0.0625rem 0.125rem rgba(58, 196, 125, 0.5);
    }

    
</style>