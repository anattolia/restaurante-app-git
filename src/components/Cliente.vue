<template>
  <div id="Cliente">
    <!-- El formulario para acceder: -->
    <form id="form1" onsubmit="getFormvalue()">
        "Nombre y apellido: "<br>
        <input type="text" name="nombre" value><br><br>
         "Teléfono: "<br>
        <input type="text" name="telefono" value><br><br>
        "Cédula: "<br>
        <input type="text" name="cedula" value><br><br>
        "Dirección: "<br>
        <input type="text" name="direccion" value><br><br>
        "Barrio: "<br>
        <input type="text" name="barrio" value><br><br>
        <input type="submit" value="Crear">
        <input type="submit" value="Buscar">
        <input type="submit" value="Modificar">
        <input type="submit" value="Eliminar">
      </form>
    <h2>
      Hola <span> {{ cliente }}, </span> ¡Bienvenido!
    </h2>
  </div>
</template>

<script>
export default {
  name: "Cliente",
  data: function() {
    return {
      cliente: "none"
    };
  },
  created: function() {
    this.cliente = this.$route.params.cliente;
  }
};
</script>

<style>
#User {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #06080c80;
}
#User h2 {
  font-size: 50px;
  color: #d6d6d6;
}
#User span {
  color: #f5a018;
  font-weight: bold;
}
</style>