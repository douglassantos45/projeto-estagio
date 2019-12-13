<template>
<div>
     <b-form-group id="input-group-4">
        <div class="form-group">
            <label>Atividades a serem desenvolvidas</label>
            <div v-for="(formulario, id) in formulario" v-bind:key="id">
                <div class="input-group mt-2">
                    <input type="text" name="form[]" v-model="formulario.form" class="form-control col-6" placeholder="Horário da entrada">
                    <div class="input-group-append">
                        <a class="btn btn-info text-white" @click="add_form(this)"><span class="fa fa-plus"></span></a>

                        <a class="btn btn-danger text-white"  @click="del_form(id)"><span class="fa fa-remove"></span></a>
                    </div>
                </div>
            </div>
            <br>
        <a v-if="status" class="btn btn-info text-white" @click="add_form(this)"><span class="fa fa-plus"></span></a>
        </div>
    </b-form-group>
</div>

</template>

<script>
  export default {
    name: 'Atividade',
    data() {
       return {
            status: false,
            formulario:[{form:''}]
       }
    },
    methods: {
        add_form() {
            this.formulario.push({form:''})
            if(this.formulario.length != 0) {
                this.status = false;
            }
        },
        del_form(id) {
            this.formulario.splice(id, 1)
            if(this.formulario.length == 0) {
                this.status = true;
            }
        },
    }   
  }
</script>

<style>

</style>