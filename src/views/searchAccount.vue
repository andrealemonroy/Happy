<template>
  <section class="center">
    <Row v-if="!seeChilds" style="margin: 10px" type="flex" justify="start">
      <Button @click="goBack"> <Icon type="ios-arrow-back" />REGRESAR </Button>
    </Row>
    <Form
      ref="searchForm"
      :model="searchForm"
      :rules="validateForm"
      class="mt-40"
      label-position="top"
    >
      <Row v-if="!foundIt && !seeChilds" type="flex" justify="space-around">
        <Col :xs="20" :sm="24" :md="12" :lg="9">
          <FormItem prop="email" label="Correo electrónico">
            <Row type="flex" justify="center">
              <Col :lg="11">
                <Input
                  v-model="searchForm.partOneMail"
                  placeholder="ej. happyland"
                ></Input>
              </Col>
              <Col :lg="2" class="vertical-middle font-20">@</Col>
              <Col :lg="11"
                ><Input
                  v-model="searchForm.partTwoMail"
                  placeholder="ej. gmail.com"
                ></Input
              ></Col>
            </Row>
          </FormItem>
        </Col>
        <!-- <Col :xs="20" :sm="24" :md="12" :lg="6">
          <FormItem prop="birthday" label="Fecha de nacimiento">
            <DatePicker
              format="dd-MM-yyyy"
              placeholder="DD-MM-AAAA"
              v-model="searchForm.birthday"
            ></DatePicker>
          </FormItem>
        </Col> -->
        <Col :xs="{ span: 22 }" :lg="{ span: 9 }">
          <FormItem prop="birthday" label="Fecha de nacimiento">
            <input
              v-model="searchForm.birthday"
              type="date"
              required="required"
            />
          </FormItem>
        </Col>
        <Col class="vertical-middle" :xs="20" :sm="24" :md="12" :lg="4">
          <Button @click="searchParent">BUSCAR</Button>
        </Col>
      </Row>
    </Form>
    <div class="col-full">
      <Form
        class="form"
        ref="parentForm"
        role="form"
        :model="parentForm"
        :rules="validateParentForm"
        label-position="top"
      >
        <Row v-if="foundIt && !seeChilds" type="flex" justify="space-around">
          <Col :lg="20">
            <Row type="flex" justify="space-between">
              <Col :lg="11">
                <FormItem prop="names" label="Nombres">
                  <Input
                    v-model="parentForm.names"
                    placeholder="Nombres"
                  ></Input>
                </FormItem>
              </Col>
              <Col :lg="11">
                <FormItem prop="surname" label="Apellidos">
                  <Input
                    v-model="parentForm.surname"
                    placeholder="Apellidos"
                  ></Input>
                </FormItem>
              </Col>
            </Row>
            <Row type="flex" justify="space-between">
              <Col :lg="11">
                <FormItem
                  prop="identityDocumentNumber"
                  label="DNI (documento de identidad)"
                >
                  <Input
                    element-id="idn"
                    v-model="parentForm.identityDocumentNumber"
                  ></Input>
                </FormItem>
              </Col>
              <!-- <Col :lg="11">
                <FormItem prop="birthday" label="Fecha de nacimiento">
                  <DatePicker
                    format="dd-MM-yyyy"
                    placeholder="DD-MM-AAAA"
                    v-model="parentForm.birthday"
                  ></DatePicker>
                </FormItem>
              </Col> -->
              <Col :xs="{ span: 22 }" :lg="{ span: 11 }">
                <FormItem prop="birthday" label="Fecha de nacimiento">
                  <input
                    v-model="parentForm.birthday"
                    type="date"
                    required="required"
                  />
                </FormItem>
              </Col>
            </Row>
            <Row type="flex" justify="space-between">
              <Col :lg="11">
                <FormItem prop="phoneNumber" label="Número telefónico">
                  <Input
                    placeholder="Número telefónico"
                    v-model="parentForm.phoneNumber"
                  ></Input>
                </FormItem>
              </Col>
              <Col :lg="11">
                <FormItem prop="district" label="Distrito">
                  <Select v-model="parentForm.district" placeholder="Distrito">
                    <Option value="LIMA">LIMA</Option>
                    <Option value="ANCON">ANCON</Option>
                    <Option value="ATE">ATE</Option>
                    <Option value="BARRANCO">BARRANCO</Option>
                    <Option value="BREÑA">BREÑA</Option>
                    <Option value="CARABAYLLO">CARABAYLLO</Option>
                    <Option value="CHACLACAYO">CHACLACAYO</Option>
                    <Option value="CHORRILLOS">CHORRILLOS</Option>
                    <Option value="CIENEGUILLA">CIENEGUILLA</Option>
                    <Option value="COMAS">COMAS</Option>
                    <Option value="EL AGUSTINO">EL AGUSTINO</Option>
                    <Option value="INDEPENDENCIA">INDEPENDENCIA</Option>
                    <Option value="JESUS MARIA">JESUS MARIA</Option>
                    <Option value="LA MOLINA">LA MOLINA</Option>
                    <Option value="LA VICTORIA">LA VICTORIA</Option>
                    <Option value="LINCE">LINCE</Option>
                    <Option value="LOS OLIVOS">LOS OLIVOS</Option>
                    <Option value="LURIGANCHO">LURIGANCHO</Option>
                    <Option value="LURIN">LURIN</Option>
                    <Option value="MAGDALENA DEL MAR">MAGDALENA DEL MAR</Option>
                    <Option value="MIRAFLORES">MIRAFLORES</Option>
                    <Option value="PACHACAMAC">PACHACAMAC</Option>
                    <Option value="PUCUSANA">PUCUSANA</Option>
                    <Option value="PUEBLO LIBRE">PUEBLO LIBRE</Option>
                    <Option value="PUENTE PIEDRA">PUENTE PIEDRA</Option>
                    <Option value="PUNTA HERMOSA">PUNTA HERMOSA</Option>
                    <Option value="PUNTA NEGRA">PUNTA NEGRA</Option>
                    <Option value="RIMAC">RIMAC</Option>
                    <Option value="SAN BARTOLO">SAN BARTOLO</Option>
                    <Option value="SAN BORJA">SAN BORJA</Option>
                    <Option value="SAN ISIDRO">SAN ISIDRO</Option>
                    <Option value="SAN JUAN DE LURIGANCHO"
                      >SAN JUAN DE LURIGANCHO</Option
                    >
                    <Option value="SAN JUAN DE MIRAFLORES"
                      >SAN JUAN DE MIRAFLORES</Option
                    >
                    <Option value="SAN LUIS">SAN LUIS</Option>
                    <Option value="SAN MARTIN DE PORRES"
                      >SAN MARTIN DE PORRES</Option
                    >
                    <Option value="SAN MIGUEL">SAN MIGUEL</Option>
                    <Option value="SANTA ANITA">SANTA ANITA</Option>
                    <Option value="SANTA MARIA DEL MAR"
                      >SANTA MARIA DEL MAR</Option
                    >
                    <Option value="SANTA ROSA">SANTA ROSA</Option>
                    <Option value="SANTIAGO DE SURCO">SANTIAGO DE SURCO</Option>
                    <Option value="SURQUILLO">SURQUILLO</Option>
                    <Option value="VILLA EL SALVADOR">VILLA EL SALVADOR</Option>
                    <Option value="VILLA MARIA DEL TRIUNFO"
                      >VILLA MARIA DEL TRIUNFO</Option
                    >
                  </Select>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col :lg="11">
                <FormItem prop="line" label="Dirección">
                  <Input
                    v-model="parentForm.line"
                    placeholder="Dirección"
                  ></Input>
                </FormItem>
              </Col>
              <Col :lg="11">
                <button
                  style="width:200px; padding: 5px auto; height: 48px; border-radius: 30px; background-color: #338dc8; color: #fff; border: 2px solid #000"
                  @click="goSeeChilds"
                >
                  VER MENORES DE EDAD
                </button>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row v-if="seeChilds && foundIt" type="flex" justify="center">
          <Col :lg="20">
            Listado de menores de edad
            <!-- <List v-if="this.childs.length > 0" header="Menores de edad">
              <ListItem v-for="child in childs" :key="child._id">
                <RadioGroup
                  v-if="
                    child.relative == 'Hijo(a)' ||
                      child.relative == 'Hermano(a)'
                  "
                  v-model="near"
                >
                  <Radio label="true" v-model="child._id">
                    {{ child.names }} {{ child.surname }} -
                    {{ child.relative }} - {{ child.age }} años</Radio
                  >
                </RadioGroup>
                <RadioGroup v-else v-model="noNear">
                  <Radio v-model="child._id">
                    {{ child.names }} {{ child.surname }} -
                    {{ child.relative }} - {{ child.age }} años</Radio
                  >
                </RadioGroup>
                <button
                  style="margin-left: 40px"
                  class="delete"
                  @click="deleteChild(child.child)"
                >
                  Eliminar
                </button>
              </ListItem>
            </List> -->
            <Select v-model="model16" multiple :max-tag-count="2">
              <Option
                v-for="child in childs"
                :key="child._id"
                :value="child._id"
              >
                {{ child.names }} {{ child.surname }} - {{ child.relative }} -
                {{ child.age }} años</Option
              >
            </Select>
            <Row type="flex" justify="space-around">
              <Col span="7">
                <Button @click="seeData">REGRESAR</Button>
              </Col>
              <Col span="7">
                <Button @click="print">IMPRIMIR TICKET</Button>
              </Col>
              <Col span="7">
                <Button @click="addChild">AÑADIR NIÑO</Button>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row v-if="foundIt && !seeChilds" type="flex" justify="end">
          <Col :lg="5">
            <Button @click="updateParent">
              ACTUALIZAR
            </Button>
          </Col>
        </Row>
      </Form>
    </div>

    <div id="ticket-div">
      <div id="ticket">
        <img src="../assets/images/logo-happy.jpg" style="max-width: 150px" />
        <h1>TICKET</h1>
        <p>{{ this.actualMoment }}</p>
        <p>{{ this.ticketName }} {{ this.ticketSurname }}</p>
        <p>{{ this.ticketDNI }}</p>
        <p>{{ this.ticketBirthday.slice(0, 10) }}</p>
        <div v-if="this.ticketChilds.length > 0">
          <p>Menores de edad</p>
          <p v-for="child in childs" :key="child._id">
            Adriana Monroy - 76282636 - 12/12/2003
            {{ child.names }} {{ child.surname }} -
            {{ child.identityDocumentNumber }} -
            {{ child.birthday.slice(0, 10) }}
          </p>
        </div>
        <p>Gracias por tu registro. Presenta este ticket y DNI en caja.</p>
        <p>
          En tu próxima visita solo busca tu registro con tu correo electrónico
        </p>
      </div>
    </div>
  </section>
</template>
<script>
import "../assets/css/style.css";
import * as Api from "../../server/index";
import localStorage from "localStorage";
import moment from "moment";
import print from "print-js";
export default {
  data() {
    const validatePhoneNumber = (rule, value, callback) => {
      const reg = new RegExp("^([0-9]{9,})$");
      if (value === "" || !value) {
        callback(new Error("Número telefónico es requerido"));
      } else if (value.length !== 9) {
        callback(new Error("Debe ser sólo 9 dígitos"));
      } else if (!reg.test(value)) {
        callback(new Error("Formato número telefónico es inválido"));
      } else {
        callback();
      }
    };
    const validateidentityDocumentNumber = (rule, value, callback) => {
      // /[^0-9]/gi
      const reg = new RegExp("^([A-Z0-9]{8,9})$");
      if (value === "") {
        callback(new Error("No puede estar vacío"));
      } else if (value.length !== 8 || isNaN(value)) {
        callback(new Error("El número de documento debe ser de 8 números"));
      } else if (!reg.test(value)) {
        callback(new Error("Formato inválido"));
      } else {
        callback();
      }
    };
    const validateMail = (rule, value, callback) => {
      if (
        this.searchForm.partOneMail == "" ||
        this.searchForm.partTwoMail == "" ||
        typeof this.searchForm.partOneMail == "undefined" ||
        typeof this.searchForm.partTwoMail == "undefined"
      ) {
        callback(new Error("El correo electrónico es requerido"));
      } else {
        callback();
      }
    };

    return {
      // near: "true",
      //       noNear: "",
      model16: [],
      actualMoment: "",
      foundIt: false,
      childs: [],
      idParent: "",
      seeChilds: false,
      searchForm: {
        partOneMail: "andreale17",
        partTwoMail: "icloud.com",
        birthday: "1995-05-17"
        // email: "",
        // birthday: ""
      },
      ticketName: "",
      ticketSurname: "",
      ticketDNI: "",
      ticketBirthday: "",
      ticketChilds: [],
      parentForm: {
        names: "",
        surname: "",
        identityDocumentNumber: "",
        email: "",
        phoneNumber: "",
        gender: "",
        line: "",
        district: "",
        specialOffer: ""
      },
      parent: {},
      validateForm: {
        email: [
          {
            validator: validateMail,
            trigger: "change"
          }
        ],
        birthday: [
          {
            required: true,
            message: "requerido",
            trigger: "blur"
          }
        ]
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
            required: true,
            message: "El correo electrónico es requerido",
            trigger: "blur"
          },
          { type: "email", message: "Formato inválido", trigger: "blur" }
        ],
        phoneNumber: [
          { required: true, validator: validatePhoneNumber, trigger: "change" }
        ],
        dni: [
          {
            required: true,
            validator: validateidentityDocumentNumber,
            trigger: "change"
          }
        ],
        gender: [
          { required: true, message: "El género es requerido", trigger: "blur" }
        ],
        specialOffer: [
          {
            required: true,
            message: "Este campo es requerido",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    updateParent() {
      this.$refs["parentForm"].validate(async valid => {
        if (valid) {
          this.idParent = localStorage.getItem("parentId");
          this.parentForm.email = this.searchForm.email;
          Api.updateParent(idParent, this.parentForm)
            .then(res => {
              this.$Notice.success({
                title: "Se actualizó correctamente"
              });
            })
            .catch(error => {
              console.log(error);
            });
        } else {
          this.$Notice.error({
            title: "Hay campos inválidos en el formulario"
          });
        }
      });
    },
    goBack() {
      this.$router.push("/");
    },
    searchParent() {
      this.$refs["searchForm"].validate(async valid => {
        if (valid) {
          moment.locale("es");
          this.actualMoment = moment().format("LLLL");
          this.searchForm.email =
            `${this.searchForm.partOneMail}` +
            "@" +
            `${this.searchForm.partTwoMail}`;
          Api.getFatherByEmail(this.searchForm)
            .then(res => {
              if (res.status == 200) {
                console.log(res.data);
                this.foundIt = true;
                this.ticketName = res.data.names;
                this.ticketSurname = res.data.surname;
                this.ticketDNI = res.data.identityDocumentNumber;
                this.ticketBirthday = res.data.birthday;
                this.ticketChilds = res.data.childs;
                this.parentForm.names = res.data.names;
                this.parentForm.surname = res.data.surname;
                this.parentForm.identityDocumentNumber =
                  res.data.identityDocumentNumber;
                this.parentForm.phoneNumber = res.data.phoneNumber;
                this.parentForm.birthday = res.data.birthday.slice(0, 10);
                this.parentForm.specialOffer = res.data.specialOffer;
                this.parentForm.gender = res.data.gender;
                this.parentForm.line = res.data.line;
                this.parentForm.district = res.data.district.toUpperCase();
                this.childs = res.data.childs;
                localStorage.setItem("parentId", res.data._id);
              } else if (res.notFatherFound) {
                this.foundIt = false;
                this.$Notice.error({
                  title: "No se encontró su registro",
                  desc: "Por favor, verique los datos ingresados o regístrese"
                });
              }
            })
            .catch(error => {
              if (error.response.statusText == "Not Found") {
                this.foundIt = false;
                this.$Notice.error({
                  title: "No se encontró su registro",
                  desc: "Por favor, verique los datos ingresados o regístrese"
                });
              } else {
                this.$Notice.error({
                  title: "Ocurrió un error",
                  desc: "Por favor, intente nuevamente"
                });
              }
            })
            .finally(() => {
              // this.btnDisabled = false
            });
          // try {

          //   localStorage.setItem("data", JSON.stringify(this.parentForm));
          //   this.$router.push("/address");
          // } catch (error) {
          //   this.$Notice.error({
          //     title: "No se pudo completar el registro"
          //   });
          // }
        } else {
          this.$Notice.error({
            title: "Hay campos inválidos en el formulario"
          });
        }
      });
    },
    print() {
      printJS({
        printable: "ticket",
        type: "html",
        maxWidth: 200
      });
      // localStorage.setItem("goToContract", this.model16);
      // this.$router.push("/registro");
    },
    // deleteChild(id) {
    //   debugger;
    //   Api.deleteChild(id).then(res => {
    //     this.$Notice.success({
    //       title: "Niño eliminado con éxito"
    //     });
    //   });
    //   this.$router.push("/contract");
    // },
    addChild() {
      this.$router.push("/registerChild");
    },
    goSeeChilds() {
      this.seeChilds = true;
    },
    seeData() {
      this.seeChilds = false;
    }
  }
};
</script>
