<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Vue Class - Ionic - Person Detail</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <div style="max-width: 300px" v-if="userData.id">
        <ion-item>
          <ion-label>User Id: {{userData.id}}</ion-label>
        </ion-item>
        <ion-item>
          <ion-label position="floating">First Name</ion-label>
          <!-- <input v-model="userData.name.first"/> -->
          <ion-input
            @input="userData.name.first = $event.target.value"
            :value="userData.name.first"
          ></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Last Name</ion-label>
          <ion-input @input="userData.name.last = $event.target.value" :value="userData.name.last"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Email Address</ion-label>
          <ion-input @input="userData.email = $event.target.value" :value="userData.email"></ion-input>
        </ion-item>

        <ion-button color="danger" @click="goBack">CANCEL</ion-button>
        <ion-button @click="doUpdate">SAVE CHANGES</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import * as dataService from "../data-service";
export default {
  name: "PersonEdit",
  props: {
    userId: String
  },
  data() {
    return {
      userData: {}
    };
  },
  methods: {
    goBack: function() {
      this.$router.go(-1);
    },
    doUpdate: async function() {
      let result = await dataService.updatePersonById_db(this.userData);
      this.$router.go(-1);
    }
  },
  async created() {
    this.userData = await dataService.getPersonById_db(this.userId);
  }
};
</script>

<style scoped>
</style>