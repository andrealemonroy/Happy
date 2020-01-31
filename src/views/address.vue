<template>
  <section class="center mt-60">
    <h1>INGRESA LA INFORMACIÓN DE TU DIRECCIÓN</h1>
    <Form
      ref="addressForm"
      :model="addressForm"
      :rules="validateRegisterForm"
      class="mt-60"
    >
      <Row>
        <Col span="8" offset="8">
          <FormItem prop="city" label="Departamento">
            <Select
              v-model="addressForm.city"
              placeholder="Seleccione"
              filterable
              @on-change="getDistricts"
            >
              <Option value="Lima">Lima</Option>
              <Option value="">Seleccione</Option>
              <Option value="Amazonas">Amazonas</Option>
              <Option value="Ancash">Ancash</Option>
              <Option value="Apurímac">Apurímac</Option>
              <Option value="Arequipa">Arequipa</Option>
              <Option value="Ayacucho">Ayacucho</Option>
              <Option value="Cajamarca">Cajamarca</Option>
              <Option value="Callao">Callao</Option>
              <Option value="Cuzco">Cuzco </Option>
              <Option value="Huancavelica">Huancavelica</Option>
              <Option value="Huánuco">Huánuco</Option>
              <Option value="Ica">Ica</Option>
              <Option value="Junín">Junín</Option>
              <Option value="La_Libertad">La Libertad</Option>
              <Option value="Lambayeque">Lambayeque</Option>

              <Option value="Loreto">Loreto</Option>
              <Option value="Madre de Dios">Madre de Dios</Option>
              <Option value="Moquegua">Moquegua</Option>
              <Option value="Pasco">Pasco</Option>
              <Option value="Piura">Piura</Option>
              <Option value="Puno">Puno</Option>
              <Option value="San_Martín">San Martín</Option>
              <Option value="Tacna">Tacna</Option>
              <Option value="Tumbes">Tumbes</Option>
              <Option value="Ucayali">Ucayali</Option>
            </Select>
          </FormItem>
        </Col>
        <Col span="8" offset="8">
          <FormItem prop="district" label="Distrito" placeholder="Seleccione">
            <Select
              v-model="addressForm.district"
              placeholder="Distrito"
              filterable
              v-if="showSelectDistricts"
            >
              <Option value="LIMA">LIMA</Option>
              <Option value="ANCON">ANCON</Option>
              <Option value="ATE">ATE</Option>
              <Option value="BARRANCO">BARRANCO</Option>
              <Option value="BREÑA">BREÑA</Option>
              <Option value="CALLAO">CALLAO</Option>
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
              <Option value="SAN MARTIN DE PORRES">SAN MARTIN DE PORRES</Option>
              <Option value="SAN MIGUEL">SAN MIGUEL</Option>
              <Option value="SANTA ANITA">SANTA ANITA</Option>
              <Option value="SANTA MARIA DEL MAR">SANTA MARIA DEL MAR</Option>
              <Option value="SANTA ROSA">SANTA ROSA</Option>
              <Option value="SANTIAGO DE SURCO">SANTIAGO DE SURCO</Option>
              <Option value="SURQUILLO">SURQUILLO</Option>
              <Option value="VILLA EL SALVADOR">VILLA EL SALVADOR</Option>
              <Option value="VILLA MARIA DEL TRIUNFO"
                >VILLA MARIA DEL TRIUNFO</Option
              >
            </Select>

            <Input
              v-else
              v-model="addressForm.district"
              placeholder="Distrito"
            ></Input>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="8" offset="8">
          <FormItem prop="address" label="Dirección"
            ><Input
              v-model="addressForm.address"
              placeholder="Ingrese su dirección aquí"
            ></Input
          ></FormItem>
        </Col>
      </Row>

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
    return {
      showSelectDistricts: false,
      addressForm: {
        address: "",
        district: ""
      },
      validateRegisterForm: {
        address: [
          {
            required: true,
            message: "La dirección es requerida",
            trigger: "blur"
          }
        ],
        district: [
          {
            required: true,
            message: "El distrito es requerido",
            trigger: "blur"
          }
        ],
        city: [
          {
            required: true,
            message: "La ciudad es requerida",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    nextPage() {
      this.$refs["addressForm"].validate(async valid => {
        if (valid) {
          const data = JSON.parse(localStorage.getItem("data"));
          const parentId = localStorage.getItem("parentId");
          data.line = this.addressForm.address;
          data.district = this.addressForm.district;
          data.city = this.addressForm.city;
          Api.updateParent(parentId, data)
            .then(res => {
              console.log(res);
              this.$router.push("/addChild");
              this.$Notice.info({
                title: "Registro exitoso"
              });
            })
            .catch(error => {
              console.log(error);
              this.$Notice.error({
                title: "Ocurrió un error"
              });
            });
          // Api.registerParent(data).then(res => {
          //   console.log(res);
          //   if (res.status === 200) {
          //     localStorage.setItem("parentId", res.data._id);
          //     if (
          //       moment(data.birthday).isAfter(moment().subtract(18, "years"))
          //     ) {
          //       this.$router.push("/contract");
          //     } else {
          //       this.$router.push("/addChild");
          //     }
          //   } else {
          //     this.$Notice.error({
          //       title: "Error en el registro",
          //       desc: res.response.data.message
          //     });
          //   }
          // });
        } else {
          this.$Notice.error({
            title: "Hay campos inválidos en el formulario"
          });
        }
      });
    },
    getDistricts() {
      if (this.addressForm.city === "Lima") {
        this.showSelectDistricts = true;
      } else {
        this.showSelectDistricts = false;
      }
    },
    goBack() {
      this.$router.push("/registerParent");
    }
  },

};
</script>
