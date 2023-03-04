<template>
    <div class="container">
      <h2>Acceder</h2>
      <form v-on:submit.prevent="loginUser" class="row">
        <div class="form-group col-lg-6">
          <label for="name">Nombre de usuario</label>
          <input type="text" id="name" v-model="name" class="form-control">
        </div>
        <div class="form-group col-lg-6">
          <label for="passw">Contraseña</label>
          <input type="text" id="passw" v-model="password" class="form-control">
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
            password: ''
        }
    },
    methods:{
        loginUser(){
            this.$store.dispatch('loginAction',{
                userName: this.name,
                password: this.password
            })
            .then(()=> this.$router.push('/'))
        }
    }
}
</script>