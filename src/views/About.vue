<template>
  <section class="center vertical-middle mt-60 ">
    <Row type="flex" justify="center">
      <Col :xxs="20" :xs="20" :lg="24">
        <h1>REGISTRO DE RESPONSABILIDAD</h1>
      </Col>
    </Row>
    <br />
    <br />
    <Row type="flex" justify="center" class="font-20">
      <Col :xxs="2" :xs="20" :lg="20">
        <h3>
          ESTE PROCESO TE PERMITIRÁ FIRMAR DIGITALMENTE TU REGISTRO DE
          RESPONSABILIDAD.
        </h3>
      </Col>
    </Row>
    <br />
    <br />
    <Row type="flex" justify="center" class="font-20">
      <Col :xxs="22" :xs="22" :lg="18">
        <p class="justify">
          Ten en cuenta que debes tener al menos 18 años para poder solicitar el
          REGISTRO de responsabilidad. Si no tienes 18 años, solicita a tus
          padres o tutor que completen este proceso.
        </p>
      </Col>
    </Row>
    <br />
    <br />
    <Row type="flex" justify="space-between">
      <Col :xxs="24" :xs="24" :lg="10"
        ><button class="return" @click="goBack">
          <Icon type="ios-arrow-back" />REGRESAR
        </button>
      </Col>
      <Col :xxs="24" :xs="24" :lg="10"
        ><Button @click="nextPage">CONTINUAR</Button>
      </Col>
    </Row>
  </section>
</template>
<script>
import "../assets/css/style.css";

export default {
  methods: {
    nextPage() {
      this.$router.push({ path: "/registerParent" });
    },
    goBack() {
      this.$router.push("/");
    }
  }
};
</script>
