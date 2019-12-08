<template>
<div>
     <b-form-group id="input-group-4">
        <div class="form-group">
            <label>Atividades a serem desenvolvidas</label>
            <div v-for="(formulario, id) in formulario" v-bind:key="id">
                <span class="float-right" style="cursor:pointer" @click="del_form(id)">x</span>
                <input type="text" name="nome[]" class="form-control mb-2 col-6" placeholder="Nome" v-model="formulario.nome">
                
            </div>
            <a @click="add_form(this)" style="cursor:pointer; color:blue" class="mb-5"><i class="fa fa-plus"></i></a>
        </div>
    </b-form-group>
</div>

</template>

<script>
  export default {
    name: 'Atividade',
    data() {
       return {
            formulario:[{nome:''}]
       }
    },
    methods: {
        add_form() {
            this.formulario.push({nome:''})
        },
        del_form(id) {
            this.formulario.splice(id, 1)
        }
    }   
  }
</script>

<style>

</style>