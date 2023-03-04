<template>
    <div class="container">
      <h2>Editar tarea</h2>
      <form v-on:submit.prevent="editMethod" class="row">
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
            },
            task(){
                return this.$store.getters.getTask;
            }
        },
        mounted(){
            const payload={
                token: this.token,
                id: this.$route.params.id
            }
            this.$store.dispatch('fetchTask',payload);
        },
        data(){
            return{
                title: '',
                description:''
            }
        },
        watch:{
            task(newVal){
                this.title=newVal.title;
                this.description=newVal.description;
            }
        },
        methods:{
            async editMethod(){
                const payload={
                    token: this.token,
                    taskObj:{
                        id: this.task.id,
                        title: this.title,
                        description: this.description
                    }
                }
                await this.$store.dispatch('putTask', payload);
                this.$router.push('/tasks');
            }
        }
    }
</script>