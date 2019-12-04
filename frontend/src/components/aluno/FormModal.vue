<template>
  <div>
    <b-button title="Cadastrar Frequência" class="button-plus btn btn-primary btn-lg shadow mr-2" v-b-modal.modal-lg variant="primary"><i class="fa fa-plus"></i></b-button>

      <b-modal id="modal-lg" size="lg" title="Cadastrar Frequência">

        <b-form @submit="onSubmit" @reset="onReset" v-if="show" >
          <div class="form-row">
                <div class="col">
                  <label for="">Entrada:</label>
                  <input type="text"  v-model="form.entrada" required  class="form-control" placeholder="Informe a hora da entrada">
                </div>
              
                <div class="col">
                  <label for="">Saída:</label>
                  <input type="text"  v-model="form.saida" required  class="form-control" placeholder="Informe a hora de saída">
                </div>
          </div>
          <div class="mt-4">
            <b-button type="submit" variant="success">Cadastrar</b-button>
            <b-button type="reset" variant="danger">Limpar</b-button>
          </div>
        </b-form>

    </b-modal>

</div>
</template>

<script>
export default {
    data() {
      return {
        form: {
          entrada: '',
          saida: ' ',
        },
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
        this.form.entrada = ''
        this.form.saida = ''
  
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