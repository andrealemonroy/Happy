<template>
  <section class="center mt-60 font-20">
    <h1>REVISIÓN DE LOS MENORES BAJO TUTELA</h1>
    <br />
    <p>
      A continuación, se muestra la lista de menores de edad registrados.<br>
      Agrega a más menores a tu registro y/o continúa con el proceso
    </p>
    <br />
    <br />
    <Row type="flex" justify="center">
      <Col :lg="{ span: 8 }"> </Col>
      <Col :lg="{ span: 12 }">
        <List class="list" style="margin: auto">
          <ListItem v-for="child in childs" :key="child.child"
            >{{ child.names }}  {{ child.surname }} - {{ child.relative }}  
            <template slot="action">
              <li>
                <button class="delete" @click="deleteChild(child.child)">
                  ELIMINAR
                </button>
              </li>
            </template>
          </ListItem>
        </List>
      </Col>
      <Col :lg="{ span: 2 }"> </Col>
    </Row>
    <br />
    <br />

    <Row type="flex" justify="space-between">
      <Col span="6">
        <Button @click="registerChild">AGREGAR</Button>
      </Col>
      <Col span="6"> <Button @click="nextPage">CONTINUAR</Button> </Col>
    </Row>
  </section>
</template>
<script>
import "../assets/css/style.css";
import * as Api from "../../server/index";
import localStorage from "localStorage";
export default {
  data() {
    return {
      childs: []
    };
  },
  methods: {
    registerChild() {
      this.$router.push("/registerChild");
    },
    async deleteChild(child) {
      Api.deleteChild(child)
        .then(res => {
          console.log(res);
          this.getChilds();
        })
        .catch(error => {});
    },
    async nextPage() {
      this.$router.push("/contract");
    },
    async getChilds() {
      const idParent = localStorage.getItem("parentId");
      this.childs = (await Api.getFatherById(idParent)).data.childs;
      console.log(this.childs);
    }
  },
  async created() {
    return await this.getChilds();
  }
  // beforeCreate() {
  //   this.childs = this.getChilds();
  // Api.getFatherById(idParent)
  //   .then(res => {
  //     console.log(res);
  //     this.childs = res.data.childs;
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });
  // }
};
</script>
