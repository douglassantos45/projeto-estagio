<template>
<div>
    <div id="content">
    <div class="container">
        <h3 class="h3 mb-3 card-body text-uppercase">plano de estágio supervisionado interno/externo</h3>
        <div class="admin-pages-tabs">
            <b-card title="Card Title" no-body>
                <b-tabs card>
                    <b-tab title="Plano de Estágio">
                    <div>
                        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                            <b-form-group id="input-group-4">
                                <div class="form-group">
                                    <label>Nome:</label><br>
                                    <label for="">Professor Orientador:</label><br>
                                    <label for="">Técnico Supervisor:</label><br>
                                    <label for="">Período:</label>
                                </div>
                            </b-form-group>

                           <Objetivo /> 
                           <Competencia />
                           <Atividade />

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
</div>
</template>

<script>
import Atividade from '../planoEstagio/Atividade'
import Objetivo from '../planoEstagio/Objetivo'
import Competencia from '../planoEstagio/Competencia'

export default {
    name: 'Content',
    components: { Atividade, Objetivo, Competencia },
     data() {
      return {
        form: {
          email: '',
          name: '',
          checked: []
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
        this.form.email = ''
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
  #content {
    margin-top: 100px;
  }
</style>