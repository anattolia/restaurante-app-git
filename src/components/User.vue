<template>
  <div id="User">
    <h2>
      Hola <span> {{ username }}, </span> ¡Bienvenido!
    </h2>
  </div>
</template>

<script>
export default {
  name: "User",
  data: function() {
    return {
      username: "none"
    };
  },
  created: function() {
    this.username = this.$route.params.username;
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
  color: crimson;
  font-weight: bold;
}
</style>
