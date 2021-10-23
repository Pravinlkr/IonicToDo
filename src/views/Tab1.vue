<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>List Of Users</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">List Of Users</ion-title>
        </ion-toolbar>
      </ion-header>

      <div class="flex items-center justify-center w-screen">
        <div class="mt-2 w-screen md:w-5/12">
          <ion-card>
            <ion-card-header>
              <ion-card-title>Users</ion-card-title>
            </ion-card-header>
            <ion-card-content>
            <UserList />
            </ion-card-content>
          </ion-card>
        </div>
      </div>
      <!-- <ExploreContainer name="List Of Users" /> -->
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardTitle, IonCardContent } from '@ionic/vue';
// import ExploreContainer from '@/components/ExploreContainer.vue';
import UserList from '@/components/UserList.vue'

export default  {
  name: 'Tab1',
  components: { UserList, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonCard, IonCardTitle, IonCardContent }
}
</script>