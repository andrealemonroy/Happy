<template>
  <section class="center mt-60">
    <h1>¿TE GUSTARÍA REGISTRAR UN MENOR DE EDAD?</h1>
    <br />
    <Button @click="childInfo">SÍ</Button>
    <Button @click="listChilds">NO</Button>
  </section>
</template>
<script>
export default {
  methods: {
    childInfo() {
      this.$router.push("/registerChild");
    },
    listChilds() {
      this.$router.push("/listOfChilds");
    }
  }
};
</script>
