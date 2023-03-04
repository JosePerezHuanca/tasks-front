<template>
    <div class="container">
      <h2>Registrate</h2>
      <form v-on:submit.prevent="createUserMethod" class="row">
        <div class="form-group col-lg-4">
          <label for="name">Nombre de usuario</label>
          <input type="text" id="name" v-model="name" class="form-control">
        </div>
        <div class="form-group col-lg-4">
          <label for="passw">Contraseña</label>
          <input type="text" id="passw" v-model="password" class="form-control">
        </div>
        <div class="form-group col-lg-4">
          <label for="passw2">Repite la contraseña</label>
          <input type="text" id="passw2" v-model="password2" class="form-control">
        </div>
        <div class="form-group col-12">
          <button type="submit" class="btn btn-primary">Guardar</button>
        </div>
      </form>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                name: '',
                password: '',
                password2:''
            }
        },
        methods:{
            createUserMethod(){
                this.$store.dispatch('registerAction',{
                    userName: this.name,
                    password: this.password,
                    passwordR: this.password2
                })
                .then(()=> this.$router.push('/'))
            }
        }
    }
</script>