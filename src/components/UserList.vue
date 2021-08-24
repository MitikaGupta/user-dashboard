<template>
  <div id="app">
    <v-app class="container">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="row">
              <div class="col-md-4">
                <h1>Users</h1>
              </div>
              <div class="col-md-4">
                <v-text-field
                  v-model="search"
                  label="Search"
                  outlined
                ></v-text-field>
              </div>   
              <div class="col-md-4">
                <v-select
                :items="options"
                label="Sort By"
                outlined
                item-text="name"
                item-value="item"
                v-model="selectedDropdown"
                @change="sortUsingDropDown()"
                ></v-select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <v-card>
        <v-data-table
          :headers="headers"
          :items="userData"
          :search="search"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          hide-default-header
          hide-default-footer
          dense
          >
          <template v-slot:body="props">
            <tbody>
              <tr v-for="(item,i) in props.items" :key="i">
                <td @click="userClick(item)" class="d-block d-md-table-cell">
                  <img src="../assets/dp.png"/> 
                  {{item.name}}
                </td>
                <td @click="userClick(item)" class="d-block d-md-table-cell margTd">
                  <a @click.stop="`mailto:${item.email}`" :href="`mailto:${item.email}`"> {{item.email}} </a>
                </td>
              </tr>
            </tbody>
          </template>
        </v-data-table>
      </v-card>
    </v-app>
  </div>
</template>

<script src="./js/UserList.js"></script>
