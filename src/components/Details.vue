<template>
    <div class="container-md p-3 border">
      <h2 class="mb-4">Detalles</h2>
      <ul v-if="task" class="list-unstyled">
        <li><strong>Título:</strong> {{ task.title }}.</li>
        <li><strong>Descripción:</strong> {{ task.description }}.</li>
      </ul>
    </div>
</template>
<script>
    export default{
        computed: {
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
            this.$store.dispatch('fetchTask', payload)
        }
    }
</script>