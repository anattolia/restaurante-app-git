<template>
  <div id="app">
    <div class="header">
      <img src="./assets/logo_carb.png" />
      <h1>Asados <br />Carbón de Leña</h1>

      <nav>
        <button v-on:click="init" v-if="is_auth">Inicio</button>
        <button v-on:click="getCliente" v-if="is_auth">Cliente</button>
        <button v-if="is_auth">Inventario</button>
        <button v-if="is_auth">Ventas</button>
        <button v-if="is_auth">Cerrar Sesión</button>
      </nav>
    </div>
    <div class="main-component">
      <router-view></router-view>
    </div>
    <div class="footer">
      <p>
        Calle 48 # 27-01. Barrancabermeja, Colombia<br />
        Teléfonos: +57 323 590 9805 - 6220238 - 6021901<br />
        E-mail: carbonlena@hotmail.com
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: function() {
    return {
      is_auth: localStorage.getItem("isAuth") || false,
    };
  },

  methods: {
    init: function() {
      if (this.$route.name != "user") {
        let username = localStorage.getItem("current_username");
        this.$router.push({ name: "user", params: { username: username } });
      }
    },

    getBalance: function() {
      if (this.$route.name != "user_balance") {
        let username = localStorage.getItem("current_username");
        this.$router.push({
          name: "user_balance",
          params: { username: username },
        });
      }
    },

    getCliente: function() {
      if (this.$route.name != "cliente") {
        let cliente = localStorage.getItem("current_cliente");
        this.$router.push({ name: "cliente", params: { cliente: cliente } });
      }
    },
  },

  beforeCreate: function() {
    localStorage.setItem("current_username", "juan");
    localStorage.setItem("isAuth", true);

    this.$router.push({ name: "user", params: { username: "juan" } });
  },
};
</script>

<style>
body {
  margin: 0 0 0 0;
  background-color: #19191a;
  background-image: url("./assets/carnep.jpg");
  background-size: 100%;
  overflow: hidden;
}
.header {
  margin: 0%;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 100px;

  background-color: #19191a;
  color: #f5a018;

  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f5a018;

  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
.header h1 {
  width: 20%;
  text-align: center;
  font-size: 1.9em;
}
.header img {
  width: 8%;
  margin-left: 3em;
  justify-content: space-around;
}
.header nav {
  height: 100%;
  width: 45%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  font-size: 1em;
}
.header nav button {
  color: #19191a;
  background: #f5a018;
  border: 1px solid #e5e7e9;
  border-radius: 5px;
  padding: 10px 20px;
}
.header nav button:hover {
  color: #19191a;
  background: #e5e7e9;
  border: 1px solid #e5e7e9;
}
.main-component {
  height: 50%;
  margin: 10% 35% 10% 35%;
  text-align: center;
  background: transparent;
  color: #f5a018;
}
.footer {
  margin: 0;
  padding: 4%;
  width: 100%;
  height: 50%;
  min-height: 100px;
  background-color: #19191a;
  color: #f5a018;
  border-top: 1px solid #f5a018;
  position: fixed;
  display: flex;
  overflow: hidden;
  font-family: Arial, Helvetica, sans-serif;
}
.footer h2 {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer p {
  width: 100%;
  height: 100%;
  justify-content: center;
  justify-items: center;
  vertical-align: middle;
  text-align: center;
  font-size: 0.8em;
}
</style>
