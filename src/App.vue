<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span>Menú</button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
            <router-link class="nav-link" to="/">Inicio</router-link>
            </li>
            <li class="nav-item" v-if="!token">
            <router-link class="nav-link" to="/register">Registrarse</router-link>
            </li>
            <li class="nav-item" v-if="token">
            <router-link class="nav-link" to="/tasks">Ver tareas</router-link>
            </li>
            <li class="nav-item" v-if="!token">
            <router-link class="nav-link" to="/login">Iniciar sesión</router-link>
            </li>
            <li class="nav-item" v-if="token">
            <router-link class="nav-link" to="/add">Agregar tarea</router-link>
            </li>
            <li class="nav-item" v-if="token">
            <a class="nav-link" @click="logout">Cerrar sesión</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:{
    token(){
      return this.$store.getters.getToken;
    }
  },
  methods:{
    logout(){
      this.$store.dispatch('logoutAction');
      this.$router.push('/');
    }
  }
}
</script>