<template>
  <section class="center mt-60 font-20 scroll">
    <h1>INGRESA LA INFORMACION DEL MENOR DE EDAD</h1>
    <Form
      ref="childForm"
      :model="childForm"
      :rules="validateForm"
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
        <Col span="7">
          <FormItem prop="identityDocumentNumber" label="DNI del menor de edad (OPCIONAL)"
            ><Input
              v-model="childForm.identityDocumentNumber"
              placeholder="ej. 12345678"
            ></Input
          ></FormItem>
        </Col>
      </Row>
      <Row type="flex" justify="space-around">
        <Col span="7">
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
        <Col :xs="{ span: 22 }" :lg="{ span: 8 }">
          <p>Fecha de nacimiento</p>
          <Row type="flex" justify="center">
            <Col :xs="{ span: 7 }" :lg="{ span: 6 }">
              <FormItem prop="birthhday" label="DÍA">
                <Select
                  v-model="childForm.birthhday"
                  name="day"
                  class="day"
                  placeholder="DD"
                  filterable
                >
                  <Option value="01">01</Option>
                  <Option value="02">02</Option>
                  <Option value="03">03</Option>
                  <Option value="04">04</Option>
                  <Option value="05">05</Option>
                  <Option value="06">06</Option>
                  <Option value="07">07</Option>
                  <Option value="08">08</Option>
                  <Option value="09">09</Option>
                  <Option value="10">10</Option>
                  <Option value="11">11</Option>
                  <Option value="12">12</Option>
                  <Option value="13">13</Option>
                  <Option value="14">14</Option>
                  <Option value="15">15</Option>
                  <Option value="16">16</Option>
                  <Option value="17">17</Option>
                  <Option value="18">18</Option>
                  <Option value="19">19</Option>
                  <Option value="20">20</Option>
                  <Option value="21">21</Option>
                  <Option value="22">22</Option>
                  <Option value="23">23</Option>
                  <Option value="24">24</Option>
                  <Option value="25">25</Option>
                  <Option value="26">26</Option>
                  <Option value="27">27</Option>
                  <Option value="28">28</Option>
                  <Option value="29">29</Option>
                  <Option value="30">30</Option>
                  <Option value="31">31</Option>
                </Select>
              </FormItem>
            </Col>
            <Col :xs="{ span: 8, offset: 1 }" :lg="{ span: 8 }">
              <FormItem prop="birthmonth" label="MES">
                <Select
                  v-model="childForm.birthmonth"
                  class="day"
                  placeholder="MM"
                  filterable
                >
                  <Option value="01">Enero</Option>
                  <Option value="02">Febrero</Option>
                  <Option value="03">Marzo</Option>
                  <Option value="04">Abril</Option>
                  <Option value="05">Mayo</Option>
                  <Option value="06">Junio</Option>
                  <Option value="07">Julio</Option>
                  <Option value="08">Agosto</Option>
                  <Option value="09">Septiembre</Option>
                  <Option value="10">Octubre</Option>
                  <Option value="11">Noviembre</Option>
                  <Option value="12">Diciembre</Option>
                </Select>
              </FormItem>
            </Col>
            <Col :xs="{ span: 7, offset: 1 }" :lg="{ span: 6 }">
              <FormItem prop="birthyear" label="AÑO">
                <Select
                  v-model="childForm.birthyear"
                  class="day"
                  placeholder="AAAA"
                  filterable
                >
                  <Option value="2020">2020</Option>
                  <Option value="2019">2019</Option>
                  <Option value="2018">2018</Option>
                  <Option value="2017">2017</Option>
                  <Option value="2016">2016</Option>
                  <Option value="2015">2015</Option>
                  <Option value="2014">2014</Option>
                  <Option value="2013">2013</Option>
                  <Option value="2012">2012</Option>
                  <Option value="2011">2011</Option>
                  <Option value="2010">2010</Option>
                  <Option value="2009">2009</Option>
                  <Option value="2008">2008</Option>
                  <Option value="2007">2007</Option>
                  <Option value="2006">2006</Option>
                  <Option value="2005">2005</Option>
                  <Option value="2004">2004</Option>
                  <Option value="2003">2003</Option>
                  <Option value="2002">2002</Option>
                  <Option value="2001">2001</Option>
                  <Option value="2000">2000</Option>
                  <Option value="1999">1999</Option>
                  <Option value="1998">1998</Option>
                  <Option value="1997">1997</Option>
                  <Option value="1996">1996</Option>
                  <Option value="1995">1995</Option>
                  <Option value="1994">1994</Option>
                  <Option value="1993">1993</Option>
                  <Option value="1992">1992</Option>
                  <Option value="1991">1991</Option>
                  <Option value="1990">1990</Option>
                  <Option value="1989">1989</Option>
                  <Option value="1988">1988</Option>
                  <Option value="1987">1987</Option>
                  <Option value="1986">1986</Option>
                  <Option value="1985">1985</Option>
                  <Option value="1984">1984</Option>
                  <Option value="1983">1983</Option>
                  <Option value="1982">1982</Option>
                  <Option value="1981">1981</Option>
                  <Option value="1980">1980</Option>
                  <Option value="1979">1979</Option>
                  <Option value="1978">1978</Option>
                  <Option value="1977">1977</Option>
                  <Option value="1976">1976</Option>
                  <Option value="1975">1975</Option>
                  <Option value="1974">1974</Option>
                  <Option value="1973">1973</Option>
                  <Option value="1972">1972</Option>
                  <Option value="1971">1971</Option>
                </Select>
              </FormItem>
            </Col>
          </Row>
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
      <Button @click="nextPage">CONTINUAR</Button>
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
    const validateBirthhday = (rule, value, callback) => {
      if (
        (this.childForm.relative == "Hijo(a)" ||
          this.childForm.relative == "Hermano(a)") &&
        (value === "" || !value)
      ) {
        callback(new Error("Es requerido"));
      } else {
        callback();
      }
    };
    const validateBirthmonth = (rule, value, callback) => {
      if (
        (this.childForm.relative == "Hijo(a)" ||
          this.childForm.relative == "Hermano(a)") &&
        (value === "" || !value)
      ) {
        callback(new Error("Es requerido"));
      } else {
        callback();
      }
    };
    const validateBirthyear = (rule, value, callback) => {
      if (
        (this.childForm.relative == "Hijo(a)" ||
          this.childForm.relative == "Hermano(a)") &&
        (value === "" || !value)
      ) {
        callback(new Error("Es requerido"));
      } else {
        callback();
      }
    };
    const validateidentityDocumentNumber = (rule, value, callback) => {
      // /[^0-9]/gi
      const reg = new RegExp("^([A-Z0-9]{8,9})$");
      if (value.length !== 8 || isNaN(value)) {
        callback(new Error("El número de documento debe ser de 8 números"));
      } else if (!reg.test(value)) {
        callback(new Error("Formato inválido"));
      } else {
        callback();
      }
    };
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
      validateForm: {
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
        ],
        birthhday: [
          {
            validator: validateBirthhday,
            trigger: "blur"
          }
        ],
        birthmonth: [
          {
            validator: validateBirthmonth,
            trigger: "blur"
          }
        ],
        birthyear: [
          {
            validator: validateBirthyear,
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    async nextPage() {
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
          this.childForm.birthday = moment(
            `${this.childForm.birthhday}` +
              "-" +
              `${this.childForm.birthmonth}` +
              "-" +
              `${this.childForm.birthyear}`,
            "DD-MM-YYYY"
          ).format();
          const age = moment().diff(this.childForm.birthday, "years");
          this.childForm.age = age;
          Api.registerChild(this.childForm)
            .then(res => {
              if (res.status === 200) {
                const idParent = localStorage.getItem("parentId");
                Api.registerChildToParent(res.data, idParent).then(res => {
                  console.log(res);
                  console.log("guardado con éxito");
                  this.$router.push("/listOfChilds");
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
    }
  }
};
</script>
