<template>
  <div id="content">
      <div class="container">
          <div class="row">
              <div class="col-md">
                  <h5>Entrada</h5>
                  <div class="card">
                      <div class="card-body">
                          <ul class="list-group">
                              <li class="list-group-item"
                              v-for="entrada in entradas" v-bind:key="entrada">
                                  {{ entrada }}
                              </li>
                          </ul>
                          <br>
                         <div class="input-group">
                                <input v-on:keyup.enter="addSaida(saida)" v-model="entrada" type="text" class="form-control" placeholder="Horário da entrada">
                                <div class="input-group-append">
                                    <button v-on:click="addEntrada(entrada)" class="btn btn-info"><span class="fa fa-plus"></span></button>
                                </div>
                          </div>
                      </div>
                  </div>
              </div>
             
             <div class="col-md">
                  <h5>Saída</h5>
                  <div class="card">
                      <div class="card-body">
                          <ul class="list-group">
                              <li class="list-group-item"
                              v-for="saida in saidas" v-bind:key="saida">
                                  {{ saida }}
                              </li>
                          </ul>
                          <br>
                           <div class="input-group">
                                <input v-on:keyup.enter="addSaida(saida)" v-model="saida" type="text" class="form-control" placeholder="Horário da entrada">
                                <div class="input-group-append">
                                    <button v-on:click="addSaida(saida)" class="btn btn-info"><span class="fa fa-plus"></span></button>
                                </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <br>
          <h5>Datas de entrada e saida</h5>
          <div class="card">
              <div class="card-body">
                  <ul class="list-group">
                      <li class="list-group-item" v-for="date in dates" v-bind:key="date">
                          {{ date }}
                      </li>
                  </ul>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'FrequenciaPages',

    data() {
        return {
            entrada: '',
            saida: '',
            entradas: [],
            saidas: [],
            dates: ['', '']
        }
    },
    methods: {
        addEntrada(entrada) {
            this.entradas.push(entrada)
            this.entrada = ''
            this.generateDate()
        },
        addSaida(saida) {
            this.saidas.push(saida)
            this.saida = ''
            this.generateDate()
        },
        generateDate() {
            this.dates = []
            for(const entrada of this.entradas) {
                for(const saida of this.saidas) {
                    this.dates.push(entrada, saida)
                }
            }
        }
    }
}
</script>

<style>

</style>