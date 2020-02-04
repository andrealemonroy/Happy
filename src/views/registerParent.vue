<template>
  <section class="center mt-60">
    <h1>INGRESA TU INFORMACIÓN AL REGISTRO</h1>
    <Form
      ref="parentForm"
      :model="parentForm"
      :rules="validateParentForm"
      class="mt-60"
      label-position="top"
    >
      <Row type="flex" justify="space-around">
        <Col :lg="7">
          <FormItem prop="names" label="Nombre"
            ><Input v-model="parentForm.names" placeholder="ej. Andrea"></Input
          ></FormItem>
        </Col>
        <Col :lg="7">
          <FormItem prop="surname" label="Apellidos completos"
            ><Input
              v-model="parentForm.surname"
              placeholder="ej. Sánchez López"
            ></Input
          ></FormItem>
        </Col>
        <Col :xs="22" :lg="7">
          <FormItem prop="email" label="Correo electrónico">
            <Row type="flex" justify="center">
              <Col :xxs="22" :xs="22" :lg="11">
                <Input
                  v-model="parentForm.partOneMail"
                  placeholder="ej. happyland"
                ></Input>
              </Col>
              <Col :xxs="22" :xs="22" :lg="2" class="vertical-middle font-20"
                >@</Col
              >
              <Col :xxs="22" :xs="22" :lg="11"
                ><Input
                  v-model="parentForm.partTwoMail"
                  placeholder="ej. gmail.com"
                ></Input
              ></Col>
            </Row>
          </FormItem>
        </Col>
      </Row>
      <Row type="flex" justify="space-around">
        <Col :xs="{ span: 22 }" :lg="{ span: 7 }">
          <!-- <p>Fecha de nacimiento</p> -->
          <FormItem prop="birthday" label="Fecha de nacimiento">
            <input
              v-model="parentForm.birthday"
              type="date"
              required="required"
            />
          </FormItem>
        </Col>
        <Col :lg="7">
          <FormItem prop="identityDocumentType" label="Tipo de documento">
            <Select
              v-model="parentForm.identityDocumentType"
              placeholder="Tipo"
            >
              <Option value="DNI">DNI</Option>
              <Option value="PTP">PTP</Option>
              <Option value="CE">CE</Option>
              <Option value="PASSPORT">PASAPORTE</Option>
            </Select>
          </FormItem>
        </Col>
        <Col :lg="7">
          <FormItem prop="identityDocumentNumber" label="Número de documento"
            ><Input
              v-model="parentForm.identityDocumentNumber"
              placeholder="ej. 12345678"
            ></Input
          ></FormItem>
        </Col>
      </Row>
      <Row type="flex" justify="space-around">
        <Col :xs="22" :lg="7">
          <FormItem prop="phoneNumber" label="Celular"
            ><Input
              v-model="parentForm.phoneNumber"
              placeholder="987654321"
            ></Input
          ></FormItem>
        </Col>
        <Col :xs="22" :lg="7">
          <FormItem prop="gender" label="Género">
            <RadioGroup v-model="parentForm.gender">
              <Radio label="female">Femenino</Radio>
              <Radio label="male">Masculino</Radio>
            </RadioGroup>
          </FormItem>
        </Col>
        <Col :xs="22" :lg="7">
          <FormItem
            prop="specialOffer"
            label="Me gustaría recibir ofertas especiales a través de:"
          >
            <RadioGroup v-model="parentForm.specialOffer">
              <Radio label="mail">Email</Radio>
              <Radio label="sms">Mensaje de texto</Radio>
            </RadioGroup>
          </FormItem>
        </Col>
      </Row>
      <br />
      <Row type="flex" justify="space-between">
        <Col :xs="24" :lg="6"
          ><Button class="return" @click="backToAbout">
            <Icon type="ios-arrow-back" />REGRESAR
          </Button>
        </Col>
        <Col :xs="24" :lg="6"
          ><Button @click="toAddress">CONTINUAR</Button>
        </Col>
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
    const validatePhoneNumber = (rule, value, callback) => {
      const reg = new RegExp("^([0-9]{9,})$");
      if (value === "" || !value) {
        callback(new Error("Número telefónico es requerido"));
      } else if (value.length < 9 || value.length > 11) {
        callback(new Error("Ingrese un número válido"));
      } else {
        callback();
      }
    };
    const validateidentityDocumentNumber = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("No puede estar vacío"));
      } else if (isNaN(value)) {
        callback(new Error("Ingrese un número"));
      } else if (
        this.parentForm.identityDocumentType === "DNI" &&
        (value.length !== 8 || isNaN(value))
      ) {
        callback(new Error("Debe ser de 8 dígitos"));
      } else if (
        this.parentForm.identityDocumentType === "PTP" &&
        (value.length !== 9 || isNaN(value))
      ) {
        callback(new Error("Debe ser de 9 dígitos"));
      } else if (
        this.parentForm.identityDocumentType === "PASSPORT" &&
        (value.length !== 12 || isNaN(value))
      ) {
        callback(new Error("Debe ser de 12 dígitos"));
      } else if (
        this.parentForm.identityDocumentType === "CE" &&
        (value.length !== 12 || isNaN(value))
      ) {
        callback(new Error("Debe de ser de 12 dígitos"));
      } else {
        callback();
      }
    };
    const validateMail = (rule, value, callback) => {
      if (
        this.parentForm.partOneMail == "" ||
        this.parentForm.partTwoMail == "" ||
        typeof this.parentForm.partOneMail == "undefined" ||
        typeof this.parentForm.partTwoMail == "undefined"
      ) {
        callback(new Error("El correo electrónico es requerido"));
      } else {
        callback();
      }
    };
    const isAdult = (rule, value, callback) => {
      if (value === "" || typeof value === "undefined") {
        callback(new Error("Fecha de nacimiento es requerida"));
      } else if (moment(value).isAfter(moment().subtract(18, "years"))) {
        callback(new Error("Debe ser mayor de edad"));
      } else {
        callback();
      }
    };
    return {
      seconds: "",
      minutes: "",
      parentForm: {
        names: "",
        surname: "",
        identityDocumentType: "DNI",
        identityDocumentNumber: "",
        birthday: "",
        partOneMail: "",
        partTwoMail: "",
        email: "",
        phoneNumber: "",
        gender: "",
        specialOffer: "mail"
        // names: "Andrea",
        // surname: "Monroy Carrillo",
        // identityDocumentType: "DNI",
        // identityDocumentNumber: "76282636",
        // birthhday: "17",
        // birthmonth: "05",
        // birthyear: "1995",
        // email: "andreale17@icloud.com",
        // phoneNumber: "978893562",
        // gender: "female",
        // specialOffer: "mail"
      },
      validateParentForm: {
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
        email: [
          {
            validator: validateMail,
            trigger: "change"
          }
        ],
        phoneNumber: [{ validator: validatePhoneNumber, trigger: "change" }],
        identityDocumentNumber: [
          {
            required: true,
            validator: validateidentityDocumentNumber,
            trigger: "change"
          }
        ],
        gender: [
          {
            required: true,
            message: "El género es requerido",
            trigger: "change"
          }
        ],
        specialOffer: [
          {
            required: true,
            message: "Este campo es requerido",
            trigger: "blur"
          }
        ],
        birthday: [
          {
            required: true,
            validator: isAdult
          }
        ]
      }
    };
  },
  methods: {
    toAddress() {
      this.$refs["parentForm"].validate(valid => {
        if (valid) {
          try {
            this.parentForm.email =
              `${this.parentForm.partOneMail}` +
              "@" +
              `${this.parentForm.partTwoMail}`;
            Api.registerParent(this.parentForm).then(res => {
              if (res.status === 200) {
                localStorage.setItem("data", JSON.stringify(this.parentForm));
                localStorage.setItem("parentId", res.data._id);
                this.$router.push({ path: "/address" });
              } else {
                this.$Notice.error({
                  title: "Error en el registro",
                  desc: res.response.data.message
                });
              }
            });
          } catch (error) {
            console.log(error);
            this.$Notice.error({
              title: "No se pudo completar el registro"
            });
          }
        } else {
          this.$Notice.error({
            title: "Hay campos inválidos en el formulario"
          });
        }
      });
    },
    backToAbout() {
      this.$router.push("/about");
    }
  },
  created() {
    if (
      JSON.parse(localStorage.getItem("parentId")) != undefined ||
      JSON.parse(localStorage.getItem("parentId")) != null
    ) {
      const idParent = JSON.parse(localStorage.getItem("parentId"));
      Api.getFatherById(idParent).then(res => {
        this.parentForm.names = data.names;
        this.parentForm.surname = data.surname;
        this.parentForm.identityDocumentType = data.identityDocumentType;
        this.parentForm.identityDocumentNumber = data.identityDocumentNumber;
        this.parentForm.email = data.email;
        this.parentForm.phoneNumber = data.phoneNumber;
        this.parentForm.gender = data.gender;
        this.parentForm.specialOffer = data.specialOffer;
      });
    }

    // var duration = moment.duration({
    //   seconds: 0,
    //   hour: 0,
    //   minutes: 0
    // });
    // var interval = 1;
    // setInterval(function() {
    //   duration = moment.duration(duration.asSeconds() + interval, "seconds");
    //   //.asSeconds()
    //   console.log(Math.round(duration.asSeconds()) + "s");
    // }, 1000);
  }
};
</script>
