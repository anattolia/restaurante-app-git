<template>
  <div id="Cliente">
    
    <div id="CrearCliente">
      <h2>
        El cliente <span> {{ cliente }}, </span> se creó correctamente.
      </h2>
    </div>
  
  </div>
</template>

<script>

import axios from "axios";
export default {
  name: "CrearCliente",
  data: function() {
    return {
      cliente: ""
    };
  },
  created: function() {
    this.cliente = this.$route.params.cliente;
    let self = this;
    axios
      .get("https://cajero-api2.herokuapp.com/cliente/crear/" + this.cliente)
      .then(result => {
        self.cliente = result.data.cliente;
      })
      .catch(error => {
        alert("ERROR Servidor");
      });
  },
}

    
</script>

<style>
#Cliente {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
}
#Cliente h2 {
  font-size: 50px;
  color: #181818;
}
#Cliente span {
  color: #f5a018;
  font-weight: bold;
}
#form1 .boton {
  color: #E5E7E9;
  background: #181818;
  border: 1px solid #E5E7E9;
  border-radius: 5px;
  padding: 5px 5px;
  
}
</style>