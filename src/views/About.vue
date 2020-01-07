<template>
  <section class="center vertical-middle mt-60 font-20">
    <h1>REGISTRO DE RESPONSABILIDAD</h1>
    <br />
    <h3>
      ESTE PROCESO TE PERMITIRÁ FIRMAR DIGITALMENTE TU REGISTRO DE
      RESPONSABILIDAD.
    </h3>
    <br />
    <p class="justify" style="margin: 20px 100px">
      Ten en cuenta que debes tener al menos 18 años para poder solicitar el
      REGISTRO de responsabilidad. Si no tienes 18 años, solicita a tus padres o
      tutor que completen este proceso.
    </p>
    <br />
    <br />
    <Row type="flex" justify="space-between">
      <Col span="6"
        ><button class="return" @click="goBack">
          <Icon type="ios-arrow-back" />REGRESAR</button
        >
      </Col>
      <Col span="6"
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
