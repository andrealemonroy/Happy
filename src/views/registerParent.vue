<template>
  <section class="center mt-60 font-20">
    <h1>INGRESA TU INFORMACIÓN AL REGISTRO</h1>
    <Form
      ref="parentForm"
      :model="parentForm"
      :rules="validateForm"
      class="mt-60"
      label-position="top"
    >
      <Row type="flex" justify="space-around">
        <Col span="7">
          <FormItem prop="names" label="Nombre"
            ><Input v-model="parentForm.names" placeholder="ej. Andrea"></Input
          ></FormItem>
        </Col>
        <Col span="7">
          <FormItem prop="surname" label="Apellidos completos"
            ><Input
              v-model="parentForm.surname"
              placeholder="ej. Sánchez López"
            ></Input
          ></FormItem>
        </Col>
        <Col span="7">
          <FormItem prop="identityDocumentNumber" label="DNI"
            ><Input
              v-model="parentForm.identityDocumentNumber"
              placeholder="ej. 12345678"
            ></Input
          ></FormItem>
        </Col>
      </Row>
      <Row type="flex" justify="space-around">
        <Col span="7">
          <FormItem prop="email" label="Correo electrónico"
            ><Input
              v-model="parentForm.email"
              placeholder="ej. happyland@gmail.com"
            ></Input
          ></FormItem>
        </Col>
        <Col span="7">
          <FormItem prop="phoneNumber" label="Celular"
            ><Input
              v-model="parentForm.phoneNumber"
              placeholder="987654321"
            ></Input
          ></FormItem>
        </Col>
        <Col span="7">
          <FormItem prop="gender" label="Género">
            <RadioGroup v-model="parentForm.gender">
              <Radio label="female">Femenino</Radio>
              <Radio label="male">Masculino</Radio>
            </RadioGroup>
          </FormItem>
        </Col>
      </Row>
      <Row type="flex" justify="space-around">
        <Col span="7">
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
        <Col :xs="{ span: 22 }" :lg="{ span: 8 }">
          <p>Fecha de nacimiento</p>
          <Row type="flex" justify="center">
            <Col :xs="{ span: 7 }" :lg="{ span: 6 }">
              <FormItem prop="birthhday" label="DÍA">
                <Select
                  v-model="parentForm.birthhday"
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
                  v-model="parentForm.birthmonth"
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
                  v-model="parentForm.birthyear"
                  class="day"
                  placeholder="AAAA"
                  filterable
                >
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
                  <Option value="1970">1970</Option>
                  <Option value="1969">1969</Option>
                  <Option value="1968">1968</Option>
                  <Option value="1967">1967</Option>
                  <Option value="1966">1966</Option>
                  <Option value="1965">1965</Option>
                  <Option value="1964">1964</Option>
                  <Option value="1963">1963</Option>
                  <Option value="1962">1962</Option>
                  <Option value="1961">1961</Option>
                  <Option value="1960">1960</Option>
                  <Option value="1959">1959</Option>
                  <Option value="1958">1958</Option>
                  <Option value="1957">1957</Option>
                  <Option value="1956">1956</Option>
                  <Option value="1955">1955</Option>
                  <Option value="1954">1954</Option>
                  <Option value="1953">1953</Option>
                  <Option value="1952">1952</Option>
                  <Option value="1951">1951</Option>
                  <Option value="1950">1950</Option>
                  <Option value="1949">1949</Option>
                  <Option value="1948">1948</Option>
                  <Option value="1947">1947</Option>
                  <Option value="1946">1946</Option>
                  <Option value="1945">1945</Option>
                  <Option value="1944">1944</Option>
                  <Option value="1943">1943</Option>
                  <Option value="1942">1942</Option>
                  <Option value="1941">1941</Option>
                  <Option value="1940">1940</Option>
                  <Option value="1939">1939</Option>
                  <Option value="1938">1938</Option>
                  <Option value="1937">1937</Option>
                  <Option value="1936">1936</Option>
                  <Option value="1935">1935</Option>
                  <Option value="1934">1934</Option>
                  <Option value="1933">1933</Option>
                  <Option value="1932">1932</Option>
                  <Option value="1931">1931</Option>
                  <Option value="1930">1930</Option>
                  <Option value="1929">1929</Option>
                  <Option value="1928">1928</Option>
                  <Option value="1927">1927</Option>
                  <Option value="1926">1926</Option>
                  <Option value="1925">1925</Option>
                  <Option value="1924">1924</Option>
                  <Option value="1923">1923</Option>
                  <Option value="1922">1922</Option>
                  <Option value="1921">1921</Option>
                  <Option value="1920">1920</Option>
                  <Option value="1919">1919</Option>
                  <Option value="1918">1918</Option>
                  <Option value="1917">1917</Option>
                  <Option value="1916">1916</Option>
                  <Option value="1915">1915</Option>
                  <Option value="1914">1914</Option>
                  <Option value="1913">1913</Option>
                  <Option value="1912">1912</Option>
                  <Option value="1911">1911</Option>
                  <Option value="1910">1910</Option>
                  <Option value="1909">1909</Option>
                  <Option value="1908">1908</Option>
                  <Option value="1907">1907</Option>
                  <Option value="1906">1906</Option>
                  <Option value="1905">1905</Option>
                  <Option value="1904">1904</Option>
                  <Option value="1903">1903</Option>
                  <Option value="1902">1902</Option>
                  <Option value="1901">1901</Option>
                  <Option value="1900">1900</Option>
                </Select>
              </FormItem>
            </Col>
          </Row>
        </Col>
        <!-- <Col span="7">
          <FormItem prop="birthday" label="Fecha de nacimiento">
            <DatePicker
              format="dd-MM-yyyy"
              placeholder="Día(DD) - Mes(MM) - Año(AAAA)"
              v-model="parentForm.birthday"
            ></DatePicker>
          </FormItem>
        </Col> -->
        <Col span="7"></Col>
      </Row>
      <br />
      <Row type="flex" justify="space-between">
        <Col span="6"
          ><button class="return" @click="goBack">
            <Icon type="ios-arrow-back" />REGRESAR
          </button>
        </Col>
        <Col span="6"><Button @click="nextPage">CONTINUAR</Button> </Col>
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
    const isAdult = (rule, value, callback) => {
      if (value === "" || typeof value === "undefined") {
        callback(new Error("Fecha de nacimiento es requerida"));
      } else if (moment(value).isAfter(moment().subtract(15, "years"))) {
        callback(new Error("Debe ser mayor de 15 años"));
      } else {
        callback();
      }
    };
    return {
      parentForm: {
        names: "",
        surname: "",
        identityDocumentNumber: "",
        birthhday: "",
        birtmonth: "",
        birthyear: "",
        email: "",
        phoneNumber: "",
        gender: "",
        specialOffer: "mail"
        // names: "Andrea",
        // surname: "Monroy Carrillo",
        // identityDocumentNumber: "76282636",
        // birthhday: "17",
        // birthmonth: "05",
        // birthyear: "1995",
        // email: "andreale17@icloud.com",
        // phoneNumber: "978893562",
        // gender: "female",
        // specialOffer: "email"
      },
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
        identityDocumentNumber: [
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
        ],
        birthhday: [
          {
            required: true,
            message: "requerido",
            trigger: "blur"
          }
        ],
        birthmonth: [
          {
            required: true,
            message: "requerido",
            trigger: "blur"
          }
        ],
        birthyear: [
          {
            required: true,
            message: "requerido",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    async nextPage() {
      this.$refs["parentForm"].validate(async valid => {
        if (valid) {
          try {
            this.parentForm.birthday = moment(`${this.parentForm.birthhday}`+'-'+`${this.parentForm.birthmonth}`+'-'+`${this.parentForm.birthyear}`, 'DD-MM-YYYY').format();
            // if (
            //   moment(this.parentForm.birthday).isAfter(
            //     moment().subtract(18, "years")
            //   )
            // ) {
            //   this.parentForm.notAdult = true;
            // } else {
            //   this.parentForm.notAdult = false;
            // }

            console.log(this.parentForm.birthday);
            if (
              moment(this.parentForm.birthday).isAfter(
                moment().subtract(18, "years")
              )
            ) {
              this.$Notice.error({
                title: "Es menor de edad",
                desc: "Debe ser mayor de edad para poder registrarse."
              });
            } else {
              Api.registerParent(this.parentForm).then(res => {
                console.log(res);
                if (res.status === 200) {
                  localStorage.setItem("data", JSON.stringify(this.parentForm));
                  localStorage.setItem("parentId", res.data._id);
                  this.$router.push("/address");
                } else {
                  this.$Notice.error({
                    title: "Error en el registro",
                    desc: res.response.data.message
                  });
                }
              });
            }
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
    goBack() {
      this.$router.push("/about");
    }
  }
};
</script>
