<template>
  <section>
    <div v-if="registerParent" id="registerParent">
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
                ><Input
                  v-model="parentForm.names"
                  placeholder="ej. Andrea"
                ></Input
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
                  <Col
                    :xxs="22"
                    :xs="22"
                    :lg="2"
                    class="vertical-middle font-20"
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
            <Col :lg="6">
              <p style="color:transparent">título</p>
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
              <p style="color:transparent">título</p>
              <FormItem
                prop="identityDocumentNumber"
                label="Número de documento"
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
              ><button class="return" @click="backToAbout">
                <Icon type="ios-arrow-back" />REGRESAR
              </button>
            </Col>
            <Col :xs="24" :lg="6"
              ><Button @click="toAddress">CONTINUAR</Button>
            </Col>
          </Row>
        </Form>
      </section>
    </div>
    <div v-if="registerAddress & !registerParent" id="registerAddress">
      <section class="center mt-60">
        <h1>INGRESA LA INFORMACIÓN DE TU DIRECCIÓN</h1>
        <Form
          ref="addressForm"
          :model="addressForm"
          :rules="validateAddressForm"
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
              <FormItem
                prop="district"
                label="Distrito"
                placeholder="Seleccione"
              >
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
              ><button class="return" @click="backToRegisterParent">
                <Icon type="ios-arrow-back" />REGRESAR
              </button>
            </Col>
            <Col span="6"><Button @click="toAddChild">CONTINUAR</Button> </Col>
          </Row>
        </Form>
      </section>
    </div>
    <template v-if="addChild" id="addChild">
      <section class="center mt-60">
        <h1>¿TE GUSTARÍA REGISTRAR UN MENOR DE EDAD?</h1>
        <br />
        <Button @click="toRegisterChild">SÍ</Button>
        <Button @click="toListOfChilds">NO</Button>
      </section>
    </template>
    <template v-if="registerChild" id="registerChild">
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
                ><Input
                  v-model="childForm.names"
                  placeholder="ej. Andrea"
                ></Input
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
          <Button @click="toListOfChilds">CONTINUAR</Button>

          <Row type="flex" justify="space-between">
            <Col span="6"
              ><button class="return" @click="backToListOfChilds">
                <Icon type="ios-arrow-back" />REGRESAR
              </button>
            </Col>
            <Col span="6"
              ><Button @click="toListOfChilds">CONTINUAR</Button>
            </Col>
          </Row>
        </Form>
      </section>
    </template>
    <template v-if="listOfChilds" id="listOfChilds">
      <section class="center mt-60 font-20">
        <h1>REVISIÓN DE LOS MENORES BAJO TUTELA</h1>
        <br />
        <p>
          A continuación, se muestra la lista de menores de edad registrados.<br />
          Agrega a más menores a tu registro y/o continúa con el proceso
        </p>
        <br />
        <br />
        <Row type="flex" justify="center">
          <Col :lg="{ span: 8 }"> </Col>
          <Col :lg="{ span: 12 }">
            <List class="list" style="margin: auto">
              <ListItem v-for="child in childs" :key="child.child"
                >{{ child.names }} {{ child.surname }} - {{ child.relative }}
                <template slot="action">
                  <li>
                    <button class="delete" @click="deleteChild(child.child)">
                      ELIMINAR
                    </button>
                  </li>
                </template>
              </ListItem>
            </List>
          </Col>
          <Col :lg="{ span: 2 }"> </Col>
        </Row>
        <br />
        <br />

        <Row type="flex" justify="space-between">
          <Col span="6">
            <Button @click="toRegisterChilds">AGREGAR</Button>
          </Col>
          <Col span="6"> <Button @click="toContract">CONTINUAR</Button> </Col>
        </Row>
      </section>
    </template>
    <template v-if="contract" id="contract">
      <section class="font-20 justify center mt-60 scroll">
        <Row type="flex" justify="center" class="mt-60">
          <Col span="20">
            <p style="text-align:center;">
              <strong
                ><u
                  ><span style="font-size:20px;line-height:107%;"
                    >ACUERDO DE USO DE INSTALACIONES– Sociedad HAPPYLAND Perú
                    S.A.</span
                  ></u
                ></strong
              >
            </p>
            <br />
            <p style="text-align:justify;">
              <strong
                >1 - Acuerdo del participante, liberación y asunción de
                riesgos&nbsp;</strong
              >
            </p>
            <br />
            <p style="text-align:justify;">
              Elegí voluntariamente usar y permitir que los menores de edad
              identificados anteriormente, los cuales se encuentran bajo mi
              tutela, y han sido referidos individual y colectivamente en este
              documento como "menor de edad ", usen las instalaciones y equipos
              de
              <strong>Sociedad HAPPYLAND Perú S.A.</strong
              ><span style="color:red;">&nbsp;</span> ubicados en centro
              comercial Mall Aventura Santa Anita<span style="color:red;"
                >&nbsp;</span
              >
              Zona de<span style="color:red;">&nbsp;</span>Happyland Adventure,
              Fun Kids y Happy Kids. En consideración a que se nos permita usar
              dichas instalaciones y equipos, y cualquier otro servicio
              proporcionado por <strong>Sociedad Happyland Perú S.A.</strong> o
              sus empleados o agentes en dicha ubicación, o en cualquier otra
              ubicación dentro de la ciudad de Lima, declaro, reconozco y acepto
              lo siguiente:
            </p>
            <ul style="margin-left:40px">
              <li>
                Reconozco y acepto que este Acuerdo cubre y está destinado a
                liberar y proporcionar otros beneficios, protecciones legales y
                consideraciones a favor de
                <strong>Sociedad HAPPYLAND Perú S.A.</strong>, y sus respectivos
                agentes y colectivos, propietarios, funcionarios, gerentes,
                accionistas, afiliados, voluntarios, participantes, empleados, y
                todas las demás personas o entidades que actúen en cualquier
                capacidad en su nombre respectivo o colectivo.
              </li>
              <li>
                Reconozco y acepto que el uso de los equipos de la Zona de
                Happyland Adventure, Fun Kids, Happy Kids; así como, otros
                equipos de propiedad de
                <strong>Sociedad HAPPYLAND Perú S.A.</strong> pueden conllevar
                riesgos, los cuales incluyen lesiones físicas o emocionales
                graves, muerte, daños a mí mismo, a los menor de edad &nbsp;y/o
                a terceros, y daños a la propiedad personal de cualquiera o
                todas esas personas. Entiendo que tales riesgos no pueden
                eliminarse, ya que forman parte inherente de las cualidades
                esenciales de la actividad recreativa, lo cual acepto y
                reconozco completamente de forma voluntaria.&nbsp;
              </li>
              <li>
                Reconozco y acepto que, si bien los empleados de
                <strong>Sociedad HAPPYLAND Perú S.A.</strong> supervisan
                generalmente la Zona de Happyland Adventure, Fun Kids, Happy
                Kids y otras actividades localizadas en otras zonas que tienen
                lugar en los locales de
                <strong>Sociedad HAPPYLAND Perú S.A.</strong>, no es factible
                que dichos empleados supervisen las actividades y acciones de
                todos los clientes en todo momento o en forma
                simultáneamente.&nbsp;
              </li>
              <li>
                Reconozco y acepto que yo y los menores de edad estamos
                participando voluntariamente bajo nuestro propio riesgo.
              </li>
              <li>
                Reconozco y acepto que las acciones o actividades de otros
                clientes podrían causarme a mí o a los menores de edad lesiones
                corporales significativas &nbsp; y que
                <strong>Sociedad HAPPYLAND Perú S.A.</strong> no es responsable
                de las acciones o actividades de clientes que usan las
                instalaciones de <strong>Sociedad HAPPYLAND Perú S.A.</strong>,
                incluyendo la zona Happyland Adventure, Fun Kids y Happy Kids.
                Algunos de los riesgos incluyen, entre otros, los siguientes:
              </li>
            </ul>
            <p>&nbsp;</p>
            <p style="text-align:justify; margin-left:80px">
              a) Los participantes podrían llegar a morir o quedar paralizados,
              parcial o totalmente, a través del uso de las instalaciones de
              <strong>Sociedad HAPPYLAND Perú S.A.</strong>, incluyendo la zona
              Happyland Adventure, Fun Kids y Happy Kids.
            </p>
            <p style="text-align:justify; margin-left:80px">
              b) Los participantes pueden sufrir cortes, raspones, golpes,
              contusiones, conmociones cerebrales, a través del uso del equipo
              de
              <strong>Sociedad HAPPYLAND Perú S.A.</strong>, o el contacto con
              otros participantes o superficies con las que han contactado. Los
              participantes pueden torcerse, jalar, romperse o lesionarse
              gravemente externa o internamente la cabeza, cara (incluyendo
              nariz y dientes / mandíbula), cuello, torso, columna vertebral,
              brazos, muñecas, manos, piernas, tobillos, pies u otras partes del
              cuerpo como resultado de caerse del trampolín o de otros equipos,
              aterrizar de manera inadecuada en los trampolines u otros equipos
              o ponerse en contacto con otros participantes. Como se señaló en
              el párrafo a) anterior, tales lesiones pueden conducir a
              parálisis, desfiguración o muerte. La participación puede provocar
              un golpe de calor, ataques cardíacos, deshidratación y otros
              eventos médicos relacionados con el esfuerzo.
            </p>
            <p style="text-align:justify; margin-left:80px">
              c) Los participantes pueden caerse unos sobre otros, resultando en
              huesos rotos y otras lesiones graves. El doble rebote, más de una
              persona por trampolín, voltearse, correr y rebotar en las paredes
              y los trampolines montados en la pared, y otros movimientos
              corporales participantes (ya sean planificados o no) pueden crear
              un efecto de rebote y conducir a movimientos corporales
              impredecibles y anticipados o contacto corporal no anticipado,
              cualquiera de los cuales puede provocar lesiones graves.
            </p>
            <p style="text-align:justify; margin-left:80px">
              d) Hacer uso del área de los trampolines, puede provocar lesiones
              físicas similares (incluso si el participante no está rebotando en
              ese momento).
            </p>
            <p>&nbsp;</p>
            <p style="text-align:justify; margin-left:80px">
              e) Observar, pararse, sentarse o tomar fotografías en o cerca de
              cualquier trampolín o actividad puede ocasionar lesiones físicas
              similares (incluso si el observador no participa en ese momento).
            </p>
            <ul style="margin-left:40px">
              <li>
                Reconozco, acepto y asumo el riesgo de todas y cada una de las
                condiciones médicas, limitaciones o discapacidades (ya sean
                temporales o permanentes) que yo o los menor es de edad
                &nbsp;poseamos, ya sean conocidas o desconocidas, que puedan
                contribuir o exacerbar cualquier lesión que yo o los menores de
                edad &nbsp;podríamos sostener como resultado del uso de las
                instalaciones de <strong>Sociedad HAPPYLAND Perú S.A.</strong> o
                cualquiera de sus equipos.&nbsp;
              </li>
            </ul>
            <p
              style="margin-left:14.2pt;text-align:justify;text-indent:-14.2pt;"
            >
              &nbsp;
            </p>
            <ul style="margin-left:40px">
              <li>
                Reconozco y acepto que si se requiere o se realiza asistencia
                médica (de cualquier forma, incluida la atención de emergencia,
                hospitalización, atención ambulatoria y/o fisioterapia) como
                resultado de cualquier lesión que yo o los menores de edad
                suframos mientras usamos la Zona de Happyland Adventure, Fun
                Kids, Happy Kids o cualquier otra zona de
                <strong>Sociedad HAPPYLAND Perú S.A.</strong>, dicha asistencia
                correrá por mi cuenta. Sin perjuicio de ello,
                <strong>Sociedad HAPPYLAND Perú S.A.</strong> podrá prestar
                primeros auxilios en caso sea necesario, conforme sus políticas
                internas.
              </li>
            </ul>
            <p style="margin-left:14.2pt;text-indent:-14.2pt;">&nbsp;</p>
            <p style="margin-left:21.3pt;text-align:justify;">&nbsp;</p>
            <br />
            <p style="text-align:justify;">
              <strong>2 - FOTO / VIDEO / RENUNCIA A MEDIOS SOCIALES</strong>
            </p>
            <br />
            <p style="text-align:justify;">
              <span lang="ES-PE"
                >En relación con el uso de las instalaciones de la zona
                Happyland Adventure, Fun Kids, Happy Kids y otras zonas a las
                que yo y los menor de edad podamos tener acceso, en mi calidad
                de titular de la patria potestad o tutor de los menores, doy mi
                consentimiento libre, previo, expreso e inequívoco para el
                tratamiento de mis datos personales y los de los menores.</span
              >
            </p>
            <p style="text-align:justify;">
              En ese sentido, doy mi autorización para la grabación de los
              menores de edad &nbsp;y mi imagen física y/o voz a través de
              medios mecánicos, fotográficos, técnicos, digitales, electrónicos
              u otros ("Grabaciones"). Por la presente, doy mi consentimiento y
              autorizo a
              <strong>Sociedad HAPPYLAND Perú S.A.</strong> y sus agentes,
              representantes, empleados, sucesores y cesionarios para usar, a
              perpetuidad, tales Grabaciones, así como el nombre de los menor de
              edad y mi nombre, para los siguientes propósitos: publicidad,
              promoción, explotación y/o publicitar cualquier instalación de
              <strong>Sociedad HAPPYLAND Perú S.A.</strong> Además, acepto que
              lo anterior incluye el consentimiento para usar el Niño y/o mi
              imagen física en cualquier forma.
            </p>
            <p style="text-align:justify;">&nbsp;</p>
            <br />
            <p style="text-align:justify;">
              <strong>3 – SOBRE LOS REGLAMENTOS Y PROHIBCIONES</strong>
            </p>
            <br />
            <p
              style="margin-bottom:.0001pt;text-align:justify;line-height:normal;"
            >
              Reconozco y declaro que antes de hacer uso de las instalaciones de
              <strong>Sociedad HAPPYLAND Perú S.A.</strong>, he leído los
              reglamentos de uso de cada uno de ellos, por lo que manifiesto
              haber sido debido(a) y suficientemente informado(a) en relación a
              las reglas que rigen para mí y aquellos menor de edad
              &nbsp;respecto de quienes autorizo participar en cualquier
              actividad dentro de los juegos que conforman el entretenimiento de
              <strong>Sociedad HAPPYLAND Perú S.A.</strong>
            </p>
            <p
              style="margin-bottom:.0001pt;text-align:justify;line-height:normal;"
            >
              &nbsp;
            </p>
            <p style="text-align:justify;">
              Asimismo, dejo expresa constancia que entiendo y he explicado las
              referidas reglas a los menores respecto de quienes autorizo
              participar. Reconozco también que en caso no se sigan las reglas
              preestablecidas por <strong>Sociedad HAPPYLAND Perú S.A.</strong>,
              en cada uno de los diferentes juegos de
              <strong>Sociedad HAPPYLAND Perú S.A.</strong>, este comportamiento
              puede resultar en mi exclusión o la de aquellos menores respecto
              de quienes autorizo participar de los juegos, sin tener –ni
              esperar- un resarcimiento o devolución del importe de dinero
              invertido.
            </p>
            <p>
              <span style='font-family:"Arial",sans-serif;'
                >Según lo regulado en el art. 27° del Reglamento de la Ley de
                Protección de Datos Personales (Ley N° 29733), para el
                tratamiento de los datos personales de un menor de edad, se
                requiere el consentimiento de cualquier de
                <strong>los titulares de la patria potestad o tutores,</strong>
                según corresponda. &nbsp;En ese sentido, cualquier persona no
                puede representar y dar el consentimiento por parte del menor de
                edad.</span
              >
            </p>
            <br />
            <br />
            <strong
              >Padre / tutor legal / poder notarial / participante (si tiene 18
              años o más): </strong
            >{{ nameParent }}
            <br />
            <strong>Fecha de nacimiento: </strong>
            {{ this.parentData.birthday.slice(0, 10) }}
            <br />
            <strong>DNI: </strong>{{ this.parentData.identityDocumentNumber }}
            <br />
            <strong>Dirección completa: </strong>{{ this.parentData.line }}
            <br />
            <strong>Distrito: </strong>{{ this.parentData.district }}
            <br />
            <strong>Departamento: </strong> {{ this.parentData.city }}
            <br />
            <strong>Correo electrónico: </strong>{{ this.parentData.email }}
            <br />
            <strong>Celular: </strong> {{ this.parentData.phoneNumber }}
            <br />
            <List class="list">
              <ListItem
                v-for="child in childs"
                label="Menor de edad"
                :key="child._id"
              >
                <strong>Datos del menor de edad: </strong> • {{ child.names }}
                {{ child.surname }} {{ child.identityDocumentNumber }} -
                {{ child.birthday.slice(0, 10) }} - {{ child.relative }}
              </ListItem>
            </List>
            <br />
          </Col>
        </Row>
        <Row type="flex" justify="center">
          <Col span="20" style="text-align:center">
            <button
              class="notSignature"
              style="border: none"
              v-if="notSignature"
              @click="signature"
            >
              CLICK AQUÍ PARA FIRMAR
            </button>
            <VueSignaturePad
              height="50vh"
              width="50vw"
              v-else
              ref="signaturePad"
              saveType="image/png"
              style="margin: auto; border: 1px solid black;"
            />
          </Col>
        </Row>
        <Row>
          <Col span="12" offset="2">
            <Form ref="form" :model="form" :rules="validateContractForm">
              <FormItem prop="terms">
                <Checkbox class="font-20" v-model="form.terms"
                  >Estoy de acuerdo con los términos y condiciones del
                  contrato.</Checkbox
                >
              </FormItem>
            </Form>
          </Col>
        </Row>
        <Row type="flex" justify="center"
          ><Col :lg="20" style="color: red"
            >*En las próximas horas te llegará una copia del contrato a tu
            correo electrónico.</Col
          ></Row
        >
        <Row type="flex" justify="space-between">
          <Col span="6">
            <Button v-if="!notSignature" @click="undo">REINTENTAR</Button>
          </Col>
          <Col span="6"
            ><Button :loading="next" @click="toIndex">FINALIZAR</Button>
          </Col>
        </Row>
        <div id="ticket-div">
          <div id="ticket">
            <img
              src="../assets/images/logo-happy.jpg"
              style="max-width: 150px"
            />
            <h1>TICKET</h1>
            <p>{{ this.actualMoment }}</p>
            <p>{{ this.nameParent }}</p>
            <p>{{ this.identityDocumentNumber }}</p>
            <p>{{ this.birthday.slice(0, 10) }}</p>
            <div v-if="childs.length > 0">
              <p>Menores de edad</p>
              <p v-for="child in childs" :key="child._id">
                {{ child.names }} {{ child.surname }}
                {{ child.identityDocumentNumber }} -
                {{ child.birthday.slice(0, 10) }}
              </p>
            </div>
            <p>Gracias por tu registro. Presenta este ticket y DNI en caja.</p>
            <p>
              En tu próxima visita solo busca tu registro con tu correo
              electrónico
            </p>
          </div>
        </div>
      </section>
    </template>
  </section>
</template>
<script>
import * as Api from "../../server/index";
import localStorage from "localStorage";
import moment from "moment";
import Vue from "vue";
import VueSignaturePad from "vue-signature-pad";
import "../assets/css/style.css";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import print from "print-js";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
Vue.use(VueSignaturePad);
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
      // /[^0-9]/gi
      // const reg = new RegExp('^([A-Z0-9]{8,13})$')
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
    const isAdult = (rule, value, callback) => {
      if (value === "" || typeof value === "undefined") {
        callback(new Error("Fecha de nacimiento es requerida"));
      } else if (moment(value).isAfter(moment().subtract(15, "years"))) {
        callback(new Error("Debe ser mayor de 15 años"));
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
    const validateBirthhdayChild = (rule, value, callback) => {
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
    const validateBirthmonthChild = (rule, value, callback) => {
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
    const validateBirthyearChild = (rule, value, callback) => {
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
    const validateTerms = (rule, value, callback) => {
      if (value == false || !value) {
        callback(new Error("Es obligatorio"));
      } else {
        callback();
      }
    };
    return {
      // parent
      registerParent: true,
      registerAddress: false,
      addChild: false,
      registerChild: false,
      listOfChilds: false,
      contract: false,
      //   address
      showSelectDistricts: false,
      parentForm: {
        names: "",
        surname: "",
        identityDocumentType: "DNI",
        identityDocumentNumber: "",
        birthhday: "",
        birtmonth: "",
        birthyear: "",
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
      addressForm: {
        address: "",
        district: "",
        city: ""
      },
      //   child
      childForm: {
        names: "",
        surname: "",
        identityDocumentNumber: "",
        gender: "",
        birthday: ""
      },
      otherRelative: false,
      otherRelativeModel: "",
      //   contract
      nameParent: "",
      childs: [],
      birthday: "",
      output: null,
      actualMoment: "",
      parentData: {},
      notSignature: true,
      email: "",
      code: "",
      allData: "",
      pdf: "",
      object: {},
      childName: "",
      childSurname: "",
      childDNI: "",
      childBirthday: "",
      childRelative: "",
      arrChilds: [],
      next: false,
      adult: false,
      form: {
        terms: false
      }, // single checkbox value
      //   validations
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
      },
      validateAddressForm: {
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
      },
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
        ],
        birthhday: [
          {
            validator: validateBirthhdayChild,
            trigger: "blur"
          }
        ],
        birthmonth: [
          {
            validator: validateBirthmonthChild,
            trigger: "blur"
          }
        ],
        birthyear: [
          {
            validator: validateBirthyearChild,
            trigger: "blur"
          }
        ]
      },
      validateContractForm: {
        terms: [{ validator: validateTerms, trigger: "change" }]
      }
    };
  },
  methods: {
    //   registerParent
    async toAddress() {
      this.$refs["parentForm"].validate(async valid => {
        if (valid) {
          try {
            this.parentForm.birthday = moment(
              `${this.parentForm.birthhday}` +
                "-" +
                `${this.parentForm.birthmonth}` +
                "-" +
                `${this.parentForm.birthyear}`,
              "DD-MM-YYYY"
            ).format();
            this.parentForm.email =
              `${this.parentForm.partOneMail}` +
              "@" +
              `${this.parentForm.partTwoMail}`;

            console.log(this.parentForm.email);
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
                if (res.status === 200) {
                  localStorage.setItem("data", JSON.stringify(this.parentForm));
                  localStorage.setItem("parentId", res.data._id);
                  this.registerParent = false;
                  this.registerAddress = true;
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
    backToAbout() {
      this.$router.push("/about");
    },
    // address
    toAddChild() {
      this.$refs["addressForm"].validate(async valid => {
        if (valid) {
          const data = JSON.parse(localStorage.getItem("data"));
          const parentId = localStorage.getItem("parentId");
          data.line = this.addressForm.address;
          data.district = this.addressForm.district;
          data.city = this.addressForm.city;
          Api.updateParent(parentId, data)
            .then(res => {
              this.registerAddress = false;
              this.addChild = true;
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
    backToRegisterParent() {
      this.registerAddress = false;
      this.registerParent = true;
    },
    // addChild
    toRegisterChild() {
      this.addChild = false;
      this.registerChild = true;
    },
    // registerChild
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
          } else if (
            this.childForm.birthhday !== undefined &&
            this.childForm.birthmonth !== undefined &&
            this.childForm.birthyear !== undefined
          ) {
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
          } else {
            debugger;
            delete this.childForm.birthhday;
            delete this.childForm.birthmonth;
            delete this.childForm.birthyear;
            delete this.childForm.birthday;
          }
          Api.registerChild(this.childForm)
            .then(res => {
              if (res.status === 200) {
                const idParent = localStorage.getItem("parentId");
                Api.registerChildToParent(res.data, idParent).then(res => {
                  console.log(res);
                  console.log("guardado con éxito");
                  this.registerChild = false;
                  this.listOfChilds = true;
                  this.getChilds();
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
      this.listOfChilds = true;
      this.registerChild = false;
      this.getChilds();
    },
    // listOfChilds
    toRegisterChilds() {
      this.listOfChilds = false;
      this.registerChild = true;
      this.childForm.names = "";
      this.childForm.surname = "";
      this.childForm.identityDocumentNumber = "";
      this.childForm.gender = "";
      this.childForm.birthday = "";
    },
    async deleteChild(child) {
      Api.deleteChild(child)
        .then(res => {
          this.getChilds();
        })
        .catch(error => {});
    },
    async toContract() {
      this.listOfChilds = false;
      this.contract = true;
      moment.locale("es");
      this.actualMoment = moment().format("LLLL");
      const idParent = localStorage.getItem("parentId");
      Api.getFatherById(idParent).then(res => {
        this.parentData = res.data;
        this.nameParent = this.parentData.names + " " + this.parentData.surname;
        this.childs = this.parentData.childs;
        this.birthday = this.parentData.birthday.slice(0, 10);
      });
    },
    async getChilds() {
      const idParent = localStorage.getItem("parentId");
      this.childs = (await Api.getFatherById(idParent)).data.childs;
      console.log(this.childs);
    },
    // contract

    signature() {
      this.notSignature = false;
    },
    undo() {
      this.$refs.signaturePad.undoSignature();
    },
    toIndex() {
      this.$refs["form"].validate(async valid => {
        if (valid) {
          let idParent = localStorage.getItem("parentId");
          Api.getFatherById(idParent).then(res => {
            this.parentData = res.data;
            this.nameParent =
              this.parentData.names + " " + this.parentData.surname;
            this.childs = this.parentData.childs;
            this.identityDocumentNumber = this.parentData.identityDocumentNumber;
            this.code = this.parentData.fatherRandom;
            this.email = this.parentData.email;
            this.object = {
              childs: this.childs,
              parentFullName: this.nameParent,
              phoneNumber: this.parentData.phoneNumber,
              identityDocumentNumber: this.parentData.identityDocumentNumber,
              birthday: this.parentData.birthday,
              line: this.parentData.line,
              district: this.parentData.district,
              city: this.parentData.city,
              email: this.email,
              code: this.code
            };
            if (this.object.childs.length > 0) {
              this.object.childs.forEach(child => {
                this.childName = child.names;
                this.childSurname = child.surname;
                this.childDNI = child.identityDocumentNumber;
                this.childBirthday = child.birthday.slice(0, 10);
                this.childRelative = child.relative;
                let dataChild =
                  "Menor de edad: " +
                  this.childName +
                  " - " +
                  this.childSurname +
                  " - " +
                  this.childDNI +
                  " - " +
                  this.childBirthday;
                this.arrChilds.push(dataChild);
              });
            } else {
              this.childName = "";
              this.childSurname = "";
              this.childDNI = "";
              this.childBirthday = "";
              this.childRelative = "";
            }

            if (this.notSignature == true) {
              this.$Notice.error({
                title: "Debe firmar"
              });
            } else if (this.$refs.signaturePad == undefined) {
              this.$Notice.error({
                title: "Debe firmar"
              });
            } else {
              const data = this.$refs.signaturePad.saveSignature().data;
              this.next = true;
              var testImageDataUrl = data;
              var docDefinition = {
                content: [
                  {
                    style: "header",
                    text:
                      "Acuerdo del participante, liberación y asunción de riesgos (El Acuerdo) - Sociedad HAPPYLAND Perú S.A."
                  },
                  {
                    style: "header",
                    text:
                      "\n1 - Acuerdo del participante, liberación y asunción de riesgos"
                  },
                  "\nElegí voluntariamente usar y permitir que los menores de edad identificados anteriormente, los cuales se encuentran bajo mi tutela, y han sido referidos individual y colectivamente en este documento como 'menor de edad', usen las instalaciones y equipos de Sociedad HAPPYLAND Perú S.A. ubicados en centro comercial Mall Aventura Santa Anita Zona de Happyland Adventure, Fun Kids y Happy Kids.",
                  "\n En consideración a que se nos permita usar dichas instalaciones y equipos, y cualquier otro servicio proporcionado por Sociedad Happyland Perú S.A. o sus empleados o agentes en dicha ubicación, o en cualquier otra ubicación dentro de la ciudad de Lima, declaro, reconozco y acepto lo siguiente:",
                  "\n•	Reconozco y acepto que este Acuerdo cubre y está destinado a liberar y proporcionar otros beneficios, protecciones legales y consideraciones a favor de Sociedad HAPPYLAND Perú S.A., y sus respectivos agentes y colectivos, propietarios, funcionarios, gerentes, accionistas, afiliados, voluntarios, participantes, empleados, y todas las demás personas o entidades que actúen en cualquier capacidad en su nombre respectivo o colectivo.",
                  "\n•	Reconozco y acepto que el uso de los equipos de la Zona de Happyland Adventure, Fun Kids, Happy Kids; así como, otros equipos de propiedad de Sociedad HAPPYLAND Perú S.A. pueden conllevar riesgos, los cuales incluyen lesiones físicas o emocionales graves, muerte, daños a mí mismo, a los menor de edad  y/o a terceros, y daños a la propiedad personal de cualquiera o todas esas personas. Entiendo que tales riesgos no pueden eliminarse, ya que forman parte inherente de las cualidades esenciales de la actividad recreativa, lo cual acepto y reconozco completamente de forma voluntaria. ",
                  "\n•	Reconozco y acepto que, si bien los empleados de Sociedad HAPPYLAND Perú S.A. supervisan generalmente la Zona de Happyland Adventure, Fun Kids, Happy Kids y otras actividades localizadas en otras zonas que tienen lugar en los locales de Sociedad HAPPYLAND Perú S.A., no es factible que dichos empleados supervisen las actividades y acciones de todos los clientes en todo momento o en forma simultáneamente. ",
                  "\n•	Reconozco y acepto que yo y los menores de edad estamos participando voluntariamente bajo nuestro propio riesgo.",
                  "\nReconozco y acepto que las acciones o actividades de otros clientes podrían causarme a mí o a los menores de edad lesiones corporales significativas  y que Sociedad HAPPYLAND Perú S.A. no es responsable de las acciones o actividades de clientes que usan las instalaciones de Sociedad HAPPYLAND Perú S.A., incluyendo la zona Happyland Adventure, Fun Kids y Happy Kids.",
                  "\n Algunos de los riesgos incluyen, entre otros, los siguientes:",
                  "\na) Los participantes podrían llegar a morir o quedar paralizados, parcial o totalmente, a través del uso de las instalaciones de Sociedad HAPPYLAND Perú S.A., incluyendo la zona Happyland Adventure, Fun Kids y Happy Kids.",
                  "\nb) Los participantes pueden sufrir cortes, raspones, golpes, contusiones, conmociones cerebrales, a través del uso del equipo de Sociedad HAPPYLAND Perú S.A., o el contacto con otros participantes o superficies con las que han contactado. Los participantes pueden torcerse, jalar, romperse o lesionarse gravemente externa o internamente la cabeza, cara (incluyendo nariz y dientes / mandíbula), cuello, torso, columna vertebral, brazos, muñecas, manos, piernas, tobillos, pies u otras partes del cuerpo como resultado de caerse del trampolín o de otros equipos, aterrizar de manera inadecuada en los trampolines u otros equipos o ponerse en contacto con otros participantes. Como se señaló en el párrafo a) anterior, tales lesiones pueden conducir a parálisis, desfiguración o muerte. La participación puede provocar un golpe de calor, ataques cardíacos, deshidratación y otros eventos médicos relacionados con el esfuerzo.",
                  "\nc) Los participantes pueden caerse unos sobre otros, resultando en huesos rotos y otras lesiones graves. El doble rebote, más de una persona por trampolín, voltearse, correr y rebotar en las paredes y los trampolines montados en la pared, y otros movimientos corporales participantes (ya sean planificados o no) pueden crear un efecto de rebote y conducir a movimientos corporales impredecibles y anticipados o contacto corporal no anticipado, cualquiera de los cuales puede provocar lesiones graves.",
                  "\nd) Hacer uso del área de los trampolines, puede provocar lesiones físicas similares (incluso si el participante no está rebotando en ese momento).",
                  "\ne) Observar, pararse, sentarse o tomar fotografías en o cerca de cualquier trampolín o actividad puede ocasionar lesiones físicas similares (incluso si el observador no participa en ese momento).",
                  "\n•	Reconozco, acepto y asumo el riesgo de todas y cada una de las condiciones médicas, limitaciones o discapacidades (ya sean temporales o permanentes) que yo o los menor es de edad  poseamos, ya sean conocidas o desconocidas, que puedan contribuir o exacerbar cualquier lesión que yo o los menores de edad  podríamos sostener como resultado del uso de las instalaciones de Sociedad HAPPYLAND Perú S.A. o cualquiera de sus equipos. ",
                  "\n•	Reconozco y acepto que si se requiere o se realiza asistencia médica (de cualquier forma, incluida la atención de emergencia, hospitalización, atención ambulatoria y/o fisioterapia) como resultado de cualquier lesión que yo o los menores de edad suframos mientras usamos la Zona de Happyland Adventure, Fun Kids, Happy Kids o cualquier otra zona de Sociedad HAPPYLAND Perú S.A., dicha asistencia correrá por mi cuenta. Sin perjuicio de ello, Sociedad HAPPYLAND Perú S.A. podrá prestar primeros auxilios en caso sea necesario, conforme sus políticas internas.",
                  {
                    style: "header",
                    text: "\n2 - FOTO / VIDEO / RENUNCIA A MEDIOS SOCIALES"
                  },
                  "\nEn relación con el uso de las instalaciones de la zona Happyland Adventure, Fun Kids, Happy Kids y otras zonas a las que yo y los menor de edad podamos tener acceso, en mi calidad de titular de la patria potestad o tutor de los menores, doy mi consentimiento libre, previo, expreso e inequívoco para el tratamiento de mis datos personales y los de los menores.",
                  '\nEn ese sentido, doy mi autorización para la grabación de los menores de edad  y mi imagen física y/o voz a través de medios mecánicos, fotográficos, técnicos, digitales, electrónicos u otros ("Grabaciones"). Por la presente, doy mi consentimiento y autorizo ​​a Sociedad HAPPYLAND Perú S.A. y sus agentes, representantes, empleados, sucesores y cesionarios para usar, a perpetuidad, tales Grabaciones, así como el nombre de los menor de edad y mi nombre, para los siguientes propósitos: publicidad, promoción, explotación y/o publicitar cualquier instalación de Sociedad HAPPYLAND Perú S.A. Además, acepto que lo anterior incluye el consentimiento para usar el Niño y/o mi imagen física en cualquier forma. ',
                  {
                    style: "header",
                    text: "\n3 – SOBRE LOS REGLAMENTOS Y PROHIBCIONES"
                  },
                  "\nReconozco y declaro que antes de hacer uso de las instalaciones de Sociedad HAPPYLAND Perú S.A., he leído los reglamentos de uso de cada uno de ellos, por lo que manifiesto haber sido debido(a) y suficientemente informado(a) en relación a las reglas que rigen para mí y aquellos menor de edad  respecto de quienes autorizo participar en cualquier actividad dentro de los juegos que conforman el entretenimiento de Sociedad HAPPYLAND Perú S.A.",
                  "\nAsimismo, dejo expresa constancia que entiendo y he explicado las referidas reglas a los menores respecto de quienes autorizo participar. Reconozco también que en caso no se sigan las reglas preestablecidas por Sociedad HAPPYLAND Perú S.A., en cada uno de los diferentes juegos de Sociedad HAPPYLAND Perú S.A., este comportamiento puede resultar en mi exclusión o la de aquellos menores respecto de quienes autorizo participar de los juegos, sin tener –ni esperar- un resarcimiento o devolución del importe de dinero invertido.",
                  `\nPadre / tutor legal / poder notarial / participante (si tiene 18 años
                  o más):: ${this.object.parentFullName}`,
                  `\DNI: ${this.object.identityDocumentNumber}`,
                  `\nFecha de nacimiento: ${this.object.birthday.slice(0, 10)}`,
                  `\nDirección: ${this.object.line}`,
                  `\nDistrito: ${this.object.district} `,
                  `\nDepartamento: ${this.object.city} `,
                  `\nCorreo electrónico: ${this.object.email}`,
                  `\nCelular: ${this.object.phoneNumber}`,
                  {
                    ul: [this.arrChilds]
                  },
                  "\nFirma",
                  {
                    image: testImageDataUrl,
                    width: 200
                  }
                ],
                images: {
                  bee: testImageDataUrl
                },
                styles: {
                  header: {
                    fontSize: 18,
                    bold: true
                  }
                },
                defaultStyle: {
                  alignment: "justify"
                }
              };
              const pdfDocGenerator = pdfMake.createPdf(docDefinition);
              pdfDocGenerator.getBase64(data => {
                this.pdf = "data:application/pdf;base64," + data;
                Api.sendEmail(this.object.email, this.object.code, this.pdf);
                this.next = false;
                printJS({
                  printable: "ticket",
                  type: "html",
                  maxWidth: 200
                });
                this.$router.push("/");
                localStorage.clear();
              });
            }
          });
        } else {
          this.$Notice.error({
            title: "Error de registro",
            desc: "Debe aceptar términos y condiciones para poder continuar"
          });
        }
      });
    }
  },
  created() {
    if (this.localStorage.getItem("goToContract")) {
      this.registerParent = false;
      this.contract = true;
    } else if (this.localStorage.getItem("addChild")) {
      this.registerParent = false;
      this.registerChild = true;
    }
  }
};
</script>
