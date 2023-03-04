<template>
    <div class="container">
      <h2>Agregar tarea</h2>
      <form v-on:submit.prevent="addTaskMethod" class="row">
        <div class="form-group col-lg-6">
          <label for="title">Título</label>
          <input type="text" id="title" v-model="title" class="form-control">
        </div>
        <div class="form-group col-lg-6">
          <label for="description">Descripción</label>
          <input type="text" id="description" v-model="description" class="form-control">
        </div>
        <div class="form-group col-12">
          <button type="submit" class="btn btn-primary">Guardar</button>
        </div>
      </form>
    </div>
</template>
<script>
    export default{
        computed:{
            token(){
                return localStorage.getItem('token');
            }
        },
        data(){
            return{
                title:'',
                description:''
            }
        },
        methods:{
            addTaskMethod(){
                const paiload={
                    token: this.token,
                    userObj:{
                        title: this.title,
                        description: this.description
                    }
                }
                this.$store.dispatch('postTask',paiload);
                this.$router.push('/tasks');
            }
        }
    }
</script>