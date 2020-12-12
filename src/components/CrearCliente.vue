<template>
  
  <div id="Cliente">
    
    <!-- El formulario para acceder: -->

    <form id="form1" onsubmit="getFormvalue()">
     
        <input class="boton" type="submit" value="Crear">
        <input class="boton" type="submit" value="Buscar">
        <input class="boton" type="submit" value="Modificar">
        <input class="boton" type="submit" value="Eliminar"><br>

        
        <br>Nombre y Apellido: 
        <input type="text" name="nombre" value><br><br>
        Teléfono:
        <input type="text" name="telefono" value><br><br>
        Cédula:
        <input type="text" name="cedula" value><br><br>
        Fecha de nacimiento:
        <input type="text" name="cedula" value><br><br>
        Dirección
        <input type="text" name="direccion" value><br><br>
        Barrio:
        <input type="text" name="barrio" value><br><br>
      </form>
  
  </div>
</template>

<script>
 import axios from 'axios';
  export default {
      name: 'UserBalance',
      data: function (){
          return {
              username: "",
              balance: 0
          }
      },
      created: function() {

          this.username = this.$route.params.username

          let self = this
          axios.get("https://restaurante-back-g1.herokuapp.com/crear/cliente/" + this.username)
              .then((result) => {
                  self.balance = result.data.balance
              })
              .catch((error) => {
                  alert("ERROR Servidor");
              });
      }
  }

export default {
  name: "Cliente",
  data: function() {
    return {
      cliente: "none"
    };
  },
  created: function() {
    this.cliente = this.$route.params.cliente;
  },

methods: {

  submit : function(){
    this.$refs.form.submit()
  },

      getCliente: function(){
        if(this.$route.name != "cliente"){
          let cliente = localStorage.getItem("current_cliente")
          this.$router.push({name: "cliente", params:{ cliente: cliente }})
        }
      },

    },

    beforeCreate: function(){
      localStorage.setItem('current_cliente', 'juan')
      localStorage.setItem('isAuth', true)

      this.$router.push({name: "cliente", params:{ cliente: 'juan' }})
    }
  };


</script>

<style>
#Cliente {
  height: auto;
  top: 0%;
  text-align: center;
  background: transparent;
  position: relative;
  justify-content: space-evenly;
  display: flex;
}
#Cliente h2 {
  font-size: 8em;
  color: #fbfbfb;
}
#Cliente button{
    color: #E5E7E9;
    background: #f5a018;
    border: 1px solid #E5E7E9;
    border-radius: 5px;
    padding: 20px 20px;
  }
  #Cliente button button:hover{
    color: #f1f1f1;
    background: #E5E7E9;
    border: 1px solid #E5E7E9;
  }
  #form1 {
  color: #E5E7E9;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid #E5E7E9;
  border-radius: 5px;
  padding: 25px 25px;
  justify-content: left;
  justify-items: left;
  text-align: left;
  position: relative;
  top: 0%;
  }
#form1 .boton {
  color: #E5E7E9;
  background: #181818;
  border: 1px solid #E5E7E9;
  border-radius: 5px;
  padding: 5px 5px;
  vertical-align: middle;
}
</style>