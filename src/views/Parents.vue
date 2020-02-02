<template>
  <section>
    <div v-if="login" class="center mt-60 font-20">
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
            <Button :loading="showData" @click="access">Ingresar</Button>
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
      <!-- <Row type="flex" justify="center">
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
      </Row> -->
      <template>
        <Row>
          <!-- <Col :lg="6" class="my-1">
            <b-form-group
              label="Sort"
              label-cols-sm="3"
              label-align-sm="right"
              label-size="sm"
              label-for="sortBySelect"
              class="mb-0"
            >
              <b-input-group size="sm">
                <b-form-select
                  v-model="sortBy"
                  id="sortBySelect"
                  :options="sortOptions"
                  class="w-75"
                >
                  <template v-slot:first>
                    <option value="">-- none --</option>
                  </template>
                </b-form-select>
                <b-form-select
                  v-model="sortDesc"
                  size="sm"
                  :disabled="!sortBy"
                  class="w-25"
                >
                  <option :value="false">Asc</option>
                  <option :value="true">Desc</option>
                </b-form-select>
              </b-input-group>
            </b-form-group>
          </Col> -->

          <Col :lg="6" class="my-1">
            <download-csv :data="items">
              <Button> CSV</Button>
            </download-csv>
          </Col>

          <Col :lg="8" class="my-1">
            <b-form-group
              label="Filtrar"
              label-cols-sm="3"
              label-align-sm="right"
              label-size="sm"
              label-for="filterInput"
              class="mb-0"
            >
              <b-input-group size="sm">
                <b-form-input
                  v-model="filter"
                  type="search"
                  id="filterInput"
                  placeholder="Buscar"
                ></b-form-input>
                <b-input-group-append>
                  <b-button :disabled="!filter" @click="filter = ''"
                    >Borrar</b-button
                  >
                </b-input-group-append>
              </b-input-group>
            </b-form-group>
          </Col>

          <Col :lg="8" class="my-1">
            <b-form-group
              label="Filtrar por"
              label-cols-sm="3"
              label-align-sm="right"
              label-size="sm"
              description="Leave all unchecked to filter on all data"
              class="mb-0"
            >
              <b-form-checkbox-group v-model="filterOn" class="mt-1">
                <b-form-checkbox value="identityDocumentNumber"
                  >Número de documento</b-form-checkbox
                >
                <b-form-checkbox value="name"
                  >Nombre o apellido</b-form-checkbox
                >
                <b-form-checkbox value="email">Correo</b-form-checkbox>
                <b-form-checkbox value="birthday"
                  >fecha de cumpleaños</b-form-checkbox
                >
              </b-form-checkbox-group>
            </b-form-group>
          </Col>

          <Col :xs="5" :md="6" class="my-1">
            <b-form-group
              label="Por página"
              label-cols-sm="6"
              label-cols-md="4"
              label-cols-lg="3"
              label-align-sm="right"
              label-size="sm"
              label-for="perPageSelect"
              class="mb-0"
            >
              <b-form-select
                v-model="perPage"
                id="perPageSelect"
                size="sm"
                :options="pageOptions"
              ></b-form-select>
            </b-form-group>
          </Col>

          <Col :xs="7" :md="6">
            <div class="my-1">
              <b-pagination
                v-model="currentPage"
                :total-rows="totalRows"
                :per-page="perPage"
                align="fill"
                size="sm"
                class="my-0"
              ></b-pagination>
            </div>
          </Col>
        </Row>

        <b-table
          show-empty
          small
          stacked="md"
          :items="this.items"
          :fields="fields"
          :current-page="currentPage"
          :per-page="perPage"
          :filter="filter"
          :filterIncludedFields="filterOn"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          :sort-direction="sortDirection"
          @filtered="onFiltered"
        >
          <template v-slot:cell(name)="row">
            {{ row.value }}
          </template>

          <template v-slot:cell(actions)="row">
            <b-button
              size="sm"
              @click="info(row.item, row.index, $event.target)"
              class="mr-1"
            >
              Ver hijos
            </b-button>
            <b-button size="sm" @click="row.toggleDetails">
              <!-- {{ row.detailsShowing ? "Hide" : "Show" }} Details -->
              Contrato
            </b-button>
          </template>

          <template v-slot:row-details="row">
            <b-card>
              <ul>
                <li v-for="(value, key) in row.item" :key="key">
                  {{ key }}: {{ value }}
                </li>
              </ul>
            </b-card>
          </template>
        </b-table>

        <b-modal
          :id="infoModal.id"
          :title="infoModal.title"
          ok-only
          @hide="resetInfoModal"
        >
          <pre>{{ infoModal.content }}</pre>
        </b-modal>
      </template>
    </div>
  </section>
</template>
<script>
import "../assets/css/style.css";
import * as Api from "../../server/index";
import moment from "moment";
import Vue from "vue";
import JsonCSV from "vue-json-csv";
Vue.component("downloadCsv", JsonCSV);
export default {
  data() {
    return {
      login: true,
      parents: [],
      data: {},
      showData: false,
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
      },
      items: [],
      // [
      //   {
      //     ticket: "-",
      //     visitDate: "2020-01-31",
      //     phone: "992254691",
      //     name: "Maria del Carmen Rivera Bautista",
      //     email: "carmen.rivera1309@gmail.com",
      //     identityDocumentNumber: "78637431",
      //     birthday: "1970-21-01"
      //   },
      //   {
      //     ticket: "-",
      //     visitDate: "2020-01-31",
      //     phone: "992254691",
      //     name: "nancy aroni rossel ",
      //     email: "nancyaroni@hotmail.com",
      //     identityDocumentNumber: "10783866",
      //     birthday: "1972-04-26"
      //   },
      //   {
      //     ticket: "227425",
      //     visitDate: "2020-01-31",
      //     phone: "978893562",
      //     name: "Andrea Monroy Carrillo",
      //     email: "andreale17@icloud.com",
      //     identityDocumentNumber: "76282636",
      //     birthday: "1995-05-17",
      //     childs: [
      //       {
      //         name: "Alex Carrillo",
      //         relative: "Primo(a)",
      //         birthday: "2003-12-12"
      //       },
      //       {
      //         names: "Adriana Monroy",
      //         relative: "Hermano(a)",
      //         birthday: "2003-12-12"
      //       }
      //     ]
      //   },
      //   {
      //     ticket: "-",
      //     visitDate: "2020-01-31",
      //     phone: "902740044",
      //     name: "Melissa Trocones Huancho",
      //     email: "katty446@hotmail.com",
      //     identityDocumentNumber: "40007812",
      //     birthday: "1978-11-10"
      //   },
      //   {
      //     ticket: "-",
      //     visitDate: "2020-01-31",
      //     phone: "902740044",
      //     name: "Carlos Enrique Rodriguez Rios",
      //     email: "carloserr1984@gmail.com",
      //     identityDocumentNumber: "42614504",
      //     birthday: "1973-02-04"
      //   },
      //   {
      //     ticket: "420711",
      //     visitDate: "2020-01-31",
      //     phone: "990991941",
      //     name: "juan luis chumpitaz ",
      //     email: "chumpitaz481@gmail.com",
      //     identityDocumentNumber: "10462282",
      //     birthday: "1975-11-02",
      //     childs: [
      //       {
      //         name: "ANGEL CHUMPITAZ CHALCO",
      //         relative: "Hijo(a)",
      //         birthday: "2009-11-13"
      //       }
      //     ]
      //   },
      //   {
      //     ticket: "-",
      //     visitDate: "2020-01-31",
      //     phone: "993581853",
      //     name: "ROOSVELTH ZAFORAS GARRIDO ",
      //     email: "RZAFORAS@HOTMAIL.COM",
      //     identityDocumentNumber: "40686034",
      //     birthday: "1980-05-27"
      //   },
      //   {
      //     ticket: "-",
      //     visitDate: "2020-01-31",
      //     phone: "946560835",
      //     name: "alexandra gonzalo mendoza",
      //     email: "kristopher_15_20@hotmail.com",
      //     identityDocumentNumber: "75343872",
      //     birthday: "1996-12-04"
      //   },
      //   {
      //     ticket: "-",
      //     visitDate: "2020-01-31",
      //     phone: "966613052",
      //     name: "LINO CESAR RIVERA GONZALES",
      //     email: "linocesarr123@gmail.com",
      //     identityDocumentNumber: "70203728",
      //     birthday: "1998-07-12"
      //   },
      //   {
      //     ticket: "-",
      //     visitDate: "2020-01-31",
      //     phone: "990367885",
      //     name: "yeny rodriguez galvez",
      //     email: "yenyrodriguez2010@hotmail.com",
      //     identityDocumentNumber: "09781486",
      //     birthday: "1975-11-28"
      //   },
      //   {
      //     ticket: "-",
      //     visitDate: "2020-01-31",
      //     phone: "933256719",
      //     name: "rocio rossi garcia simeon",
      //     email: "garciarocio207@gmail.com",
      //     identityDocumentNumber: "76790552",
      //     birthday: "1995-11-07"
      //   },
      //   {
      //     ticket: "-",
      //     visitDate: "2020-01-31",
      //     phone: "988966991",
      //     name: "olinda rodrigues porras",
      //     email: "olirod04@gmail.com",
      //     identityDocumentNumber: "21253576",
      //     birthday: "1950-10-04"
      //   },
      //   {
      //     ticket: "-",
      //     visitDate: "2020-01-31",
      //     phone: "917093645",
      //     name: "johana ferrer",
      //     email: "johana.mishijos31@gmail.com",
      //     identityDocumentNumber: "003878458",
      //     birthday: "1987-01-31"
      //   },
      //   {
      //     ticket: "-",
      //     visitDate: "2020-01-31",
      //     phone: "999845481",
      //     name: "FRANCISCO ZAMUDIO SALAZAR",
      //     email: "francisco_zamudios@hotmail.com",
      //     identityDocumentNumber: "42066144",
      //     birthday: "1983-08-31"
      //   }
      // ]
      fields: [
        {
          key: "ticket",
          label: "Número de ticket",
          sortable: true,
          sortDirection: "desc"
        },
        {
          key: "visitDate",
          label: "Fecha de visita",
          sortable: true,
          class: "text-center"
        },
        {
          key: "identityDocumentNumber",
          label: "Número de documento",
          sortable: true,
          class: "text-center"
        },
        {
          key: "names",
          label: "Nombre",
          sortable: true,
          class: "text-center"
        },
        {
          key: "surname",
          label: "Apellido",
          sortable: true,
          class: "text-center"
        },
        {
          key: "email",
          label: "Correo electrónico",
          sortable: true,
          class: "text-center"
        },
        {
          key: "phone",
          label: "Celular",
          sortable: true,
          class: "text-center"
        },
        {
          key: "birthday",
          label: "Fecha de nacimiento",
          sortable: true,
          class: "text-center"
        },
        // {
        //   key: "isActive",
        //   label: "is Active",
        //   formatter: (value, key, item) => {
        //     return value ? "Yes" : "No";
        //   },
        //   sortable: true,
        //   sortByFormatted: true,
        //   filterByFormatted: true
        // },
        { key: "actions", label: "Actions" }
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 15],
      sortBy: "",
      sortDesc: false,
      sortDirection: "asc",
      filter: null,
      filterOn: [],
      infoModal: {
        id: "info-modal",
        title: "",
        content: ""
      }
    };
  },
  methods: {
    info(item, index, button) {
      this.infoModal.title = `Hijos: ${index}`;
      this.infoModal.content = JSON.stringify(item.childs, null, 2);
      this.$root.$emit("bv::show::modal", this.infoModal.id, button);
    },
    resetInfoModal() {
      this.infoModal.title = "";
      this.infoModal.content = "";
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
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
    },
    access() {
      this.$refs["loginForm"].validate(async valid => {
        if (valid) {
          this.showData = true;
        }
      });
    }

    // computed: {
    //   sortOptions() {
    //     // Create an options list from our fields
    //     return this.fields
    //       .filter(f => f.sortable)
    //       .map(f => {
    //         return { text: f.label, value: f.key };
    //       });
    //   }
    // }
  },
  async created() {
    // let payload = { ...Api.getAllParents().data };
    // const payload = [...(await Api.getAllParents()).data];

    // this.items.push(payload);
    // this.items = payload;
    // this.items.push(this.parents)
    // this.parents.slice(0, 50);
    // console.log(this.parents);
    // console.log(this.items[0]);
    Api.getAllParents().then(res => {
      const payload = [res.data];
      console.log("payload" + payload);
      this.items.push(payload);
      if (res.status == 200) {
        this.showData = false;
        if (this.loginForm.user == "iwaver" && this.loginForm.key == "1234") {
          this.login = false;
        }
      }
      // const payload = res.data;
      console.log(res);
    });
  }
};
</script>
