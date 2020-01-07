<template>
  <section class="center mt-60 font-20">
    <h1>Lista de familiares titulares</h1>
    <br />
    <p>
      A continuación se muestra la lista de familiares tutelares:
    </p>
    <br />
    <br />
    <Row type="flex" justify="center">
      <table class="table">
        <thead>
          <tr>
            <th>Fecha de creación</th>
            <th>Nombres y apellidos</th>
            <th>Código de validación</th>
            <th>Número de DNI</th>
            <th>Correo</th>
            <th>Niños asignados</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in parents[0]" :key="index">
            <td>{{ item.date.slice(0, 10) }}</td>
            <td>{{ item.names }} {{ item.surname }}</td>
            <td>{{ item.fatherRandom }}</td>
            <td>{{ item.identityDocumentNumber }}</td>
            <td>{{item.email}}</td>
            <td>
              <Select placeholder="Niños asignados">
                <Option
                  v-for="child in item.childs"
                  value="child._id"
                  :key="child._id"
                  >{{ child.names }} {{ child.surname }}</Option
                >
              </Select>
            </td>
            <td>
              <Button
                type="warning"
                @click="generateContract(item._id)"
              >
                VER CONTRATO
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </Row>
  </section>
</template>
<script>
import "../assets/css/style.css";
import * as Api from "../../server/index";
import moment from "moment";
export default {
  data() {
    return {
      parents: [],
      data: {},
      notAdult: false
    };
  },
  methods: {
    deleteParentYoung(idParent) {
      Api.deleteParentYoung(idParent).then(res => {
        console.log(res);
        this.$router.go();
        this.$Notice.info({
          title: "Eliminado con éxito"
        });
      }).catch(err =>{
        this.$Notice.error({
          title: "Hubo un problema"
        });
      });
    }
  },
  async created() {
    let payload = { ...(await Api.getAllParents()).data };
    this.parents.push(payload);
    console.log(this.parents);
  }
};
</script>
