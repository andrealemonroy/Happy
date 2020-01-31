<template>
  <Row type="flex" justify="center">
    <Col :xxs="20" :xs="20" :lg="8" :xl="9" :xxl="7">
      <img
        style="margin: auto; text-align: center; max-width: 100%"
        src="../assets/images/logo-happy.jpg"
      />
    </Col>
  </Row>
</template>
<style>
.NuxtLogo {
  animation: 1s appear;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
