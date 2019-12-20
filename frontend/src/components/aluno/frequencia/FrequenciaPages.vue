<template>
  <div id="content">
      <div class="container">
          <div class="row">
              <div class="col-md">
                  <h5>Entrada</h5>
                  <div class="card shadow">
                      <div class="card-body">
                          <ul class="list-group">
                              <li class="list-group-item"
                              v-for="entrada in entradas" v-bind:key="entrada">
                                  {{ entrada }}
                              </li>
                          </ul>
                          <br>
                         <div class="input-group">
                                <input v-on:keyup.enter="addEntrada(entrada)" v-model="entrada" type="text" class="form-control" placeholder="Horário da entrada">
                                <div class="input-group-append">
                                    <button v-on:click="addEntrada(entrada)" class="btn btn-info"><span class="fa fa-plus"></span></button>
                                </div>
                          </div>
                      </div>
                  </div>
              </div>
             
             <div class="col-md">
                  <h5>Saída</h5>
                  <div class="card shadow">
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

            <div class="input-group mt-4 ml-3">
                <span class="fa fa-plus efeito efeito-btn" v-on:click="addFrequenci(entrada, saida)"></span>        
            </div>

          </div>
          <br>
          <h5>Datas de entrada e saida</h5>
          <div class="card shadow">
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
            dates: ['']
        }
    },
    methods: {
        addEntrada(entrada) {
            if(entrada != '') {
                this.entradas.push(entrada)
                this.entrada = ''
                this.generateDate()
            }
        },
        addFrequenci(entrada, saida) {
            if(entrada != '' && saida != '') {
                this.entradas.push(entrada)
                this.saidas.push(saida)
                this.saida = ''
                this.entrada= ''
                this.generateDate()
            }
        },
        addSaida(saida) {
            if(saida != '') {
                this.saidas.push(saida)
                this.saida = ''
                this.generateDate()
            }
        },
        generateDate() {
            this.dates = []
            for(const entrada of this.entradas) {
                this.dates.push(entrada)
            }
            for(const saida of this.saidas) {
                this.dates.push(saida)
            }
        }
    }
}
</script>

<style>
    .efeito {
        border: none;
        color: white;
        padding: 10px;
        font-size: 14px;
        line-height: 14px;
        border-radius: 100%;
        position: relative;
        box-sizing: border-box;
        cursor: pointer;
        transition: all 400ms ease;
    }

    .efeito-btn {
        background: #17a2b8;
        transform-style: preserve-3d;
    }
    .efeito-btn:after {
        top: -100%;
        left: 0px;
        width: 90px;
        padding: 10px;
        position: absolute;
        background: #17a2b8;
        border-radius: 10px;
        
        content: 'Adicionar';
        transform-origin: left bottom;
        transform: rotateX(90deg);
    }

    .efeito-btn:hover {
        transform-origin: center bottom;
        transform: rotateX(-90deg) translateY(100%);
    }
</style>