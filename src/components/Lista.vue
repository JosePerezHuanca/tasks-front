<template>
    <div class="table-responsive">
        <table class="table table-striped table-hover">
            <thead><th>id</th><th>Título</th><th>Descripción</th><th>Detalles</th><th>Editar</th><th>Borrar</th></thead>
            <tbody>
                <tr v-for="task in tasks"><td>{{ task.id }}</td><td>{{ task.title }}</td><td>{{ task.description }}</td><td><router-link :to="`/tasks/details/${task.id}`">Detalles</router-link></td><td><router-link :to="`/tasks/edit/${task.id}`">Editar</router-link></td><td><button @click="removeMethod(task.id)">Borrar</button></td></tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    export default{
        computed:{
            tasks(){
                return this.$store.getters.getTasks;
            },
            token(){
                return localStorage.getItem('token');
            }
        },
        created(){
            this.$store.dispatch('fetchTasks', this.token)
        },
        methods:{
            async removeMethod(idParam){
                const paiload={
                    token: this.token,
                    id: idParam
                }
                await this.$store.dispatch('deleteTask', paiload);
                this.$router.push('/tasks');
            }
        }
    }
</script>