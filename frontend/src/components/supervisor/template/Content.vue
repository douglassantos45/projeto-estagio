<template>
  <div>
    <div class="container ">
        <h3 class="h3 mt-5 mb-3 card-body text-uppercase">instrumento de avaliação para o supervisor</h3>
        <div class="admin-pages-tabs">
            <b-card title="Card Title" no-body>
                <b-tabs card>
                    <b-tab title="Avaliação do Aluno">
                    <div>
                        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                            <b-form-group id="input-group-4">
                                <div class="form-group">
                                    <label>Estágiario:</label><br>
                                    <label for="">Área de Estágio:</label><br>
                                    <label for="">Supervisor:</label><br>
                                    <label for="">Período:</label>
                                </div>
                            </b-form-group>

                           <Avaliacao />

                            <b-button type="submit" variant="success">Confirmar</b-button>
                            <b-button type="reset" variant="danger">Limpar</b-button>
                        </b-form>

                        </div>
                    </b-tab>
                </b-tabs>
            </b-card>
        </div>
    </div>

</div>
</template>

<script>
import Avaliacao from '../avaliacao/Avaliacao'

export default {
    name: 'Content',
    components: { Avaliacao },
    
     data() {
      return {
        form: {
          name: '',
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
        this.form.name = ''
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

</style>