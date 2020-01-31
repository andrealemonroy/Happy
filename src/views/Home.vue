<template>
  <div class="container">
    <br />
    <Logo />
    <br />
    <div class="card">
      <Row type="flex" justify="center">
        <Col :xxs="22" :xs="22" :lg="24">
          <h1>BIENVENIDO</h1>
        </Col>
      </Row>
      <br />
      <Row type="flex" justify="center">
        <Col :xxs="20" :xs="20" :lg="20">
          <p>PARA INGRESAR A HAPPYLAND ADVENTURE ES NECESARIO:</p>
          <br />
          <br />
        </Col>
      </Row>
      <Row type="flex" justify="space-around">
        <Col :xxs="20" :xs="20" :lg="7">
          <Button @click="nextPage">REGISTRAR AQUÍ</Button>
        </Col>
        <Col :xxs="20" :xs="20" :lg="7"
          ><Button @click="searchFatherPage">BUSCAR CUENTA</Button></Col
        >
      </Row>
      <br />
      <br />
      <br />
      <Row type="flex" justify="center">
        <Col :xs="8" :lg="4">
          <img
            style="max-width: 100%"
            src="https://i.ibb.co/4sYqrgG/HAPPY-KIDS-SIN-HAPPYLAND.jpg"
          />
        </Col>
        <Col :xs="{ span: 4, offset: 1 }" :lg="{ span: 2, offset: 1 }">
          <img
            style="max-width: 100%"
            src="https://i.ibb.co/rQx39dZ/logo-ok-Fun-Kids-sin-happyland.jpg"
          />
        </Col>
      </Row>
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
