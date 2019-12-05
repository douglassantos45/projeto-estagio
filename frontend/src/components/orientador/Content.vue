<template>
<div class="container">
    <h2 class="mt-4 h2 mb-3 card-body">Conteúdo</h2>
    <div class="admin-pages-tabs">
        <b-card title="Card Title" no-body>
            <b-tabs card>
                <b-tab title="Plano de Estágio">
                   <div>
                        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                        <b-form-group id="input-group-4">
                            <div class="form-group">
                                <label>Objetivo</label>
                                <textarea class="form-control" id="objetivo" rows="3"></textarea>
                            </div>
                        </b-form-group>

                        <b-form-group id="input-group-4">
                            <div class="form-group">
                                <label>Competências</label>
                                <textarea class="form-control" id="competencias" rows="3"></textarea>
                            </div>
                        </b-form-group>

                        <b-form-group id="input-group-4">
                            <div class="form-group">
                                <label>Atividades a serem desenvolvidas</label>
                                <textarea class="form-control" id="atividades" rows="3"></textarea>
                            </div>
                        </b-form-group>

                        <b-button type="submit" variant="success">Confirmar</b-button>
                        <b-button type="reset" variant="danger">Limpar</b-button>
                        </b-form>

                    </div>
                </b-tab>
            </b-tabs>
        </b-card>
    </div>
</div>
</template>

<script>

export default {
    name: 'Content',
     data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
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
    .container {
        margin-top: 0px;
        padding: 0px;
    }
</style>