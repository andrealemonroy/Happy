<template>
  <section class="center mt-60 font-20 scroll">
    <h1>INGRESA LA INFORMACION DEL MENOR DE EDAD</h1>
    <Form
      ref="childForm"
      :model="childForm"
      :rules="validateChildForm"
      class="mt-60"
      label-position="top"
    >
      <Row type="flex" justify="space-around">
        <Col span="7">
          <FormItem prop="names" label="Nombre"
            ><Input v-model="childForm.names" placeholder="ej. Andrea"></Input
          ></FormItem>
        </Col>
        <Col span="7">
          <FormItem prop="surname" label="Apellidos"
            ><Input
              v-model="childForm.surname"
              placeholder="ej. Sánchez López"
            ></Input
          ></FormItem>
        </Col>
        <Col :xs="{ span: 22 }" :lg="{ span: 7 }">
          <FormItem prop="relative" label="Parentesco">
            <Select placeholder="Seleccione" v-model="childForm.relative">
              <Option value="Hijo(a)">Hijo(a)</Option>
              <Option value="Hermano(a)">Hermano(a)</Option>
              <Option value="Primo(a)">Primo(a)</Option>
              <Option value="Sobrino(a)">Sobrino(a)</Option>
              <Option value="Nieto(a)">Nieto(a)</Option>
              <Option value="Otro">Otro</Option>
            </Select>
          </FormItem>
          <FormItem v-if="otherRelative" prop="relative" label="Parentesco">
            <Input
              placeholder="Ingrese parentesco"
              v-model="otherRelativeModel"
            />
          </FormItem>
        </Col>
      </Row>
      <Row type="flex" justify="space-around">
        <Col :xs="{ span: 22 }" :lg="{ span: 7 }">
          <FormItem
            prop="identityDocumentNumber"
            label="DNI del menor de edad (OPCIONAL)"
            ><Input
              v-model="childForm.identityDocumentNumber"
              placeholder="ej. 12345678"
            ></Input
          ></FormItem>
        </Col>
        <Col :xs="{ span: 22 }" :lg="{ span: 7 }">
          <FormItem prop="birthday" label="Fecha de nacimiento">
            <input
              v-model="childForm.birthday"
              type="date"
              required="required"
            />
          </FormItem>
        </Col>
        <Col span="7">
          <FormItem prop="gender" label="Género">
            <RadioGroup v-model="childForm.gender">
              <Radio label="female">Femenino</Radio>
              <Radio label="male">Masculino</Radio>
            </RadioGroup>
          </FormItem>
        </Col>
        <Col span="7"> </Col>
      </Row>

      <Row type="flex" justify="space-between">
        <Col span="6"
          ><button class="return" @click="backToListOfChilds">
            <Icon type="ios-arrow-back" />REGRESAR
          </button>
        </Col>
        <Col span="6"><Button @click="toListOfChilds">CONTINUAR</Button> </Col>
      </Row>
    </Form>
  </section>
</template>
<script>
import "../assets/css/style.css";
import * as Api from "../../server/index";
import localStorage from "localStorage";
import moment from "moment";
export default {
  data() {
    return {
      childForm: {
        names: "",
        surname: "",
        identityDocumentNumber: "",
        gender: "",
        birthday: ""
      },
      otherRelative: false,
      otherRelativeModel: "",
      validateChildForm: {
        names: [
          {
            required: true,
            message: "El nombre es requerido",
            trigger: "blur"
          }
        ],
        surname: [
          {
            required: true,
            message: "El apellido es requerido",
            trigger: "blur"
          }
        ],
        gender: [
          { required: true, message: "El género es requerido", trigger: "blur" }
        ],
        relative: [
          {
            required: true,
            message: "El parentesco es requerido",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    async toListOfChilds() {
      this.$refs["childForm"].validate(async valid => {
        if (valid) {
          if (this.childForm.relative == "Otro") {
            this.otherRelative = true;
            delete this.childForm.relative;
            if (this.otherRelativeModel != "") {
              this.childForm.relative = this.otherRelativeModel;
            } else {
              this.$Notice.error({
                title: "Error en el registro",
                desc: "Debe completar el parentesco"
              });
            }
          }

          if (
            this.childForm.relative == "Hijo(a)" ||
            this.childForm.relative == "Hermano(a)"
          ) {
            const age = moment().diff(this.childForm.birthday, "years");
            this.childForm.age = age;
          }
          Api.registerChild(this.childForm)
            .then(res => {
              if (res.status === 200) {
                const idParent = localStorage.getItem("parentId");
                Api.registerChildToParent(res.data, idParent).then(res => {
                  console.log(res);
                  console.log("guardado con éxito");
                  this.$router.push({ path: "/listOfChilds" });
                });
              } else {
                this.$Notice.error({
                  title: "Error en el registro",
                  desc: "Ya existe el registro del menor de edad"
                });
              }
            })
            .catch(error => {
              this.$Notice.error({
                title: "Error en el registro",
                desc: "Ya existe el registro del menor de edad"
              });
            });
        } else {
          this.$Notice.error({
            title: "Hay campos inválidos en el formulario"
          });
        }
      });
    },
    backToListOfChilds() {
      this.$router.push({ path: "/listOfChilds" });
    }
  }
};
</script>
