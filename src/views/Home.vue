<template>
  <div class="container">
    <br />
    <Logo />
    <br />
    <div class="card">
      <h1>BIENVENIDO</h1>
      <br />
      <p>PARA INGRESAR A HAPPYLAND ADVENTURE ES NECESARIO:</p>
      <br />
      <br />
      <Row type="flex" justify="space-around">
        <Col span="7">
          <Button @click="nextPage">REGISTRAR AQUÍ</Button>
        </Col>
        <Col span="7"
          ><Button @click="searchFatherPage">BUSCAR CUENTA</Button></Col
        >
      </Row>
      <br />
    </div>
  </div>
</template>

<script>
import Logo from "../components/Logo.vue";
import "../assets/css/style.css";
import * as Api from "../../server/index";
import localStorage from "localStorage";
export default {
  components: {
    Logo
  },
  methods: {
    nextPage() {
      this.$router.push("/about");
    },
    searchFatherPage() {
      this.$router.push("/searchAccount");
    }
  }
};
</script>

<style>
.card {
  text-align: center;
  font-family: "Montserrat-light";
  font-size: 22px;
}
</style>
