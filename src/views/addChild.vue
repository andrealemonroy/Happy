<template>
  <section class="center mt-60">
    <h1>¿Vas a registrar un menor de edad?</h1>
    <br />
    <Button @click="childInfo">Sí</Button>
    <Button @click="listChilds">No</Button>
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
