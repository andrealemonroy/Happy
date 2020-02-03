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
              <Input type="password" v-model="loginForm.key"></Input>
            </FormItem>
            <Button :loading="showData" @click="access">Ingresar</Button>
          </Form>
        </Col>
      </Row>
    </div>
    <div v-else>
      <div class="header-info">
        <h1>Lista de familiares titulares</h1>
        <div class="total-info">
          <p>Total: {{ this.items.length }}</p>
          <Button :loading="updateLoader" @click="update">Actualizar</Button>
        </div>
      </div>
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
            <download-csv :data="this.items">
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
                  v-model="inputFilter"
                  type="search"
                  id="filterInput"
                  placeholder="Buscar"
                ></b-form-input>

                <b-input-group-append>
                  <b-button @click="filter = inputFilter">Filtrar</b-button>
                  <b-button :disabled="!filter" @click="deleteFilter"
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
              description="Se puede buscar en todos los campos sin seleccionar un filtro"
              class="mb-0"
            >
              <b-form-checkbox-group v-model="filterOn" class="mt-1">
                <b-form-checkbox value="identityDocumentNumber"
                  >Número de documento</b-form-checkbox
                >
                <b-form-checkbox value="names">Nombre</b-form-checkbox>
                <b-form-checkbox value="surname">Apellido</b-form-checkbox>
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
            <!-- <b-button
              size="sm"
              @click="info(row.item, row.index, $event.target)"
              class="mr-1"
            >
              Ver hijos
            </b-button> -->
            <b-button size="sm" @click="row.toggleDetails">
              {{ row.detailsShowing ? "Cerrar" : "Mostrar" }} Contrato
              <!-- Contrato -->
            </b-button>
          </template>

          <template v-slot:row-details="row">
            <b-card>
              <!-- <div v-for="(value, key) in row" :key="key">
                <a :href='value.contract'>link del contrato</a>
              </div> -->
              <!-- <a :href="row.item.contract" target="_blank">Link del contrato</a> -->

              <iframe
                :src="row.item.contract"
                frameborder="0"
                style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100vh;"
                allowfullscreen
              ></iframe>
            </b-card>
          </template>
        </b-table>

        <b-modal
          :id="infoModal.id"
          :title="infoModal.title"
          ok-only
          @hide="resetInfoModal"
        >
          <div v-for="(value, key) in infoModal.content" :key="key">
            <p>Nombres: {{ value.names }}</p>
            <p>Apellidos: {{ value.surname }}</p>
            <p>Fecha de nacimiento: {{ value.birthday.slice(0, 10) }}</p>
            <p>Parentesto: {{ value.relative }}</p>
            <hr />
          </div>
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
      updateLoader: false,
      inputFilter: null,
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
      fields: [
        {
          key: "fatherRandom",
          label: "Número de ticket",
          sortable: true,
          sortDirection: "desc"
        },
        {
          key: "date",
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
          key: "phoneNumber",
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
        {
          key: "childs",
          label: "Hijos",
          sortable: true,
          sortDirection: "desc"
        },
        { key: "actions", label: "Contrato" }
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
      this.infoModal.title = `Hijo(s)`;
      // this.infoModal.content = JSON.stringify(item.childs, null, 2);
      this.infoModal.content = item.childs;
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
    deleteFilter() {
      this.inputFilter = "";
      this.filter = "";
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
    update() {
      this.updateLoader = true;
      this.items = "";
      Api.getAllParents()
        .then(res => {
          if (res.status == 200) {
            this.updateLoader = false;
            const payload = res.data;
            // this.items.push(payload);
            this.items = payload;

            this.login = false;
            for (let i = 0; i < res.data.length; i++) {
              res.data[i].birthday = res.data[i].birthday.slice(0, 10);
              res.data[i].date = res.data[i].date.slice(0, 10);
                for (let j = 0; j < res.data[i].childs.length; j++) {
                  res.data[i].childs[j] = `Menor de edad: ${
                    res.data[i].childs[j].names
                  } ${res.data[i].childs[j].surname} - ${res.data[i].childs[
                    j
                  ].birthday.slice(0, 10)}`;
                  ("\n");
              // res.data[i].childs = res.data[i].childs.names;
              // let json_data = {'Número de ticket': res.data[i].fatherRandom, 'Correo electrónico':res.data[i].email, 'Celular': res.data[i].phoneNumber, 'Nombre' : res.data[i].names, 'Apellido': res.data[i].surname, 'Hijos': res.data[i].childs}
            }
          }
          }
          // const payload = res.data;
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => {
          this.updateLoader = false;
        });
    },
    access() {
      this.showData = true;
      Api.getAllParents()
        .then(res => {
          if (res.status == 200) {
            this.showData = false;
            const payload = res.data;
            console.log(payload);
            // this.items.push(payload);
            this.items = payload;
            this.totalRows = this.items.length;
            if (
              this.loginForm.user == "iwaver" &&
              this.loginForm.key == "1234"
            ) {
              this.login = false;
              for (let i = 0; i < res.data.length; i++) {
                res.data[i].birthday = res.data[i].birthday.slice(0, 10);
                res.data[i].date = res.data[i].date.slice(0, 10);
                for (let j = 0; j < res.data[i].childs.length; j++) {
                  res.data[i].childs[j] = `Menor de edad: ${
                    res.data[i].childs[j].names
                  } ${res.data[i].childs[j].surname} - ${res.data[i].childs[
                    j
                  ].birthday.slice(0, 10)}`;
                  ("\n");
                }
              }
            }
          }
          // const payload = res.data;
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => {
          this.showData = true;
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
  created() {
    // const payload = [...(await Api.getAllParents()).data];
    // this.items.push(payload);
    // this.items = payload;
    // this.items.push(this.parents)
    // this.parents.slice(0, 50);
    // console.log(this.parents);
    // console.log(this.items[0]);
  }
};
</script>
