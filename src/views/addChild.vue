<template>
      <section class="center mt-60">
        <h1>¿TE GUSTARÍA REGISTRAR UN MENOR DE EDAD?</h1>
        <br />
        <Button @click="toRegisterChild">SÍ</Button>
        <Button @click="toContract">NO</Button>
      </section>
</template>
<script>
export default {
  methods: {
    toRegisterChild() {
     this.$router.push({ path: "/registerChild" });
    },
    toContract() {
      this.$router.push({ path: "/contract" });
    }
  }
};
</script>
