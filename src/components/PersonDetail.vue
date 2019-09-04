<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Vue Class - Ionic - Person Detail</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding v-if="user.id">
      <ion-card style="max-width: 300px">
        <img :src="user.picture" />
        <ion-card-content>
          <h1>{{user.name.first}} {{user.name.last}}</h1>
          <h2>{{user.location.city}}, {{user.location.state}}</h2>
          <h3>{{user.email}}</h3>
        </ion-card-content>
      </ion-card>
      <ion-button @click="goBack">GO BACK</ion-button>
      <ion-button block color="primary" @click="doEdit">EDIT USER</ion-button>
      <ion-button color="danger" @click="doDelete">DELETE USER</ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
import * as dataService from "../data-service";
export default {
  name: "PersonDetail",
  props: {
    userId: String
  },
  data() {
    return {
      user: {}
    };
  },
  methods: {
    doEdit: function() {
      this.$router.push({
        name: "edit-user",
        params: { userId: this.userId }
      });
    },
    goBack: function() {
      this.$router.go(-1);
    },
    doDelete: async function() {
      // delete the user
      let result = await dataService.deletePersonById_db(this.userId);

      // reload the user data
      await dataService.getAllPeople();

      // go to previous page
      this.$router.go(-1);
    }
  },
  async created() {
    try {
      this.user = await dataService.getPersonById_db(this.userId);
    } catch (e) {
      console.log(e);
    }

    // same thing using promises
    // dataService.getPersonById_db(this.userId).then(_result => {
    //   this.user = _result;
    // }).catch(e=> console.log(e))
  }
};
</script>

<style scoped>
</style>