<template>
  <section class="center mt-60 font-20">
    <div v-if="login">
      <Row type="flex" justify="center">
        <Col>
          <br />
          <h1 class="mt-60">Ingresa para ver los datos</h1>
          <br />
          <br />
          <Form
            ref="loginForm"
            :model="loginForm"
            :rules="loginFormValidate"
            label-position="top"
          >
            <FormItem prop="user" label="Usuario">
              <Input v-model="loginForm.user"></Input>
            </FormItem>
            <FormItem prop="key" label="Clave">
              <Input v-model="loginForm.key"></Input>
            </FormItem>
            <Button @click="access">Ingresar</Button>
          </Form>
        </Col>
      </Row>
    </div>
    <div v-else>
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
              <td>{{ item.email }}</td>
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
              <td></td>
            </tr>
          </tbody>
        </table>
      </Row>
    </div>
  </section>
</template>
<script>
import "../assets/css/style.css";
import * as Api from "../../server/index";
import moment from "moment";
export default {
  data() {
    return {
      login: true,
      parents: [],
      data: {},
      notAdult: false,
      loginForm: {
        user: "",
        key: ""
      },
      loginFormValidate: {
        user: [
          {
            required: true,
            message: "Es requerido",
            trigger: "blur"
          }
        ],
        key: [
          {
            required: true,
            message: "Es requerido",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    deleteParentYoung(idParent) {
      Api.deleteParentYoung(idParent)
        .then(res => {
          console.log(res);
          this.$router.go();
          this.$Notice.info({
            title: "Eliminado con éxito"
          });
        })
        .catch(err => {
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
  },
  access() {
    this.$refs["loginForm"].validate(async valid => {
      if (valid) {
        if (this.loginForm.user == "iwaver" && this.loginForm.key == "1234") {
          this.login = false;
        }
      }
    });
  }
};
</script>
