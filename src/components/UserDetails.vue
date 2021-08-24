<template>
  <div id="app">
    <v-app class="container">
      <div>
        <p style="font-size: 1.75rem; padding-left: 0.75rem;"><a href="#" @click="getUsers" style="text-decoration:none" class="h3">Users</a> >  {{ user.name }}</p>
      </div>
      <b-container fluid>
        <b-row cols="1" cols-sm="2" cols-md="3" cols-lg="3">
          <b-col
            col
            no-gutters
            class="mb-2">
            <b-card
              title="Contact Info"
              tag="article"
              style="max-width: 20rem; height: 13rem;"
              class="mb-2">
              <b-card-text>
                <div>
                  Username: {{ user.username }}
                </div>
                <div>
                  Email: <a :href="`mailto:${user.email}`" style="text-decoration:none">{{ user.email }}</a>
                </div>
                <div>
                  Phone: <a href="#" style="text-decoration:none">{{ user.phone }}</a>
                </div>
                <div>
                  Website: <a :href="'http://'+ user.website" target="_blank" style="text-decoration:none">{{ user.website }}</a>
                </div>
              </b-card-text>
            </b-card>
          </b-col>
          <b-col
            col
            no-gutters
            class="mb-2">
            <b-card
              title="Address"
              tag="article"
              style="max-width: 20rem; height: 13rem;"
              class="mb-2">
              <b-card-text>
                {{ user.address.suite }} {{ user.address.street }}, {{ user.address.city }}, {{ user.address.zipcode }}
              </b-card-text>
            </b-card>
          </b-col>
          <b-col
            col
            no-gutters
            class="mb-2">
            <b-card
              title="Company"
              tag="article"
              style="max-width: 20rem; height: 13rem;"
              class="mb-2">
              <b-card-text>
                <div>
                  {{ user.company.name }}
                </div>
                <div>
                  {{ user.company.bs }}
                </div>
                <div style="font-style: italic;">
                  "{{ user.company.catchPhrase }}"
                </div>
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
      <div>
        <p style="font-size: 1.75rem; padding-left: 0.75rem;" class="h3">Posts by {{ user.name }}</p>
      </div>
      <b-container fluid>
        <b-row cols="1" cols-sm="2" cols-md="3" cols-lg="3">
          <b-col
            col
            no-gutters
            class="mb-2" v-for="(post, i) in userPosts"
            :key="i">
              <b-card
                tag="article"
                style="max-width: 20rem;"
                class="mb-2">
                <b-card-text>
                    <h4>{{ post.title }}</h4>
                    {{ post.body }}
                </b-card-text>
              </b-card>
          </b-col>
        </b-row>
      </b-container>
    </v-app>
  </div>    
</template>

<script src="./js/UserDetails.js"></script>