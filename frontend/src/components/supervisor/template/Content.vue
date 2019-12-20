<template>
  <div>
    <div class="container">
      <h3 class="h3 mt-5 mb-3 card-body text-uppercase">instrumento de avaliação para o supervisor</h3>
      <div class="admin-pages-tabs">
        <b-card title="Card Title" no-body>
          <b-tabs card>
            <b-tab title="Avaliação do Aluno">
              <div>
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                  <b-input-group>
                    <template v-slot:prepend>
                      <select class="form-control" v-model="estagiario">
                        <option
                          v-for="estagiario in estagiarios"
                          v-bind:key="estagiario.value"
                        >{{ estagiario.name }}</option>
                      </select>
                    </template>

                  </b-input-group>

                  <b-form-group id="input-group-4">
                    <div class="form-group mt-3">
                      <label>Estágiario: {{estagiario}}</label>
                      <br />
                      <label for>Área de Estágio:</label>
                      <br />
                      <label for>Supervisor: {{ estagiario.supervisor }}</label>
                      <br />
                      <label for>Período:</label>
                    </div>
                  </b-form-group>

                  <Avaliacao class="mt-4" />

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
import Avaliacao from "../avaliacao/Avaliacao";

export default {
  name: "Content",
  components: { Avaliacao },

  data() {
    return {
      estagiario: '',
      estagiarios: [
        { name: "Estagiario A", value: "A", supervisor: "Carlos" },
        { name: "Estagiario B", value: "B", supervisor: "João" },
        { name: "Estagiario C", value: "C", supervisor: "Fabricio" }
      ],
      
      checkedNames: [],
      show: true
    };
  },
  methods: {
    selectEstagiario(estagiario) {
      this.estagiario = estagiario;
    },
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.name = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>

<style>
</style>