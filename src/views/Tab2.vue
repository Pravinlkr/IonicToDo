<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Add New Users</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Add New Users</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <div class="flex items-center justify-center w-screen">
        <div class="mt-12 w-screen md:w-4/12">
          <ion-card>
            <ion-card-content>
            <ExploreContainer name="Add New Users" />
            </ion-card-content>
          </ion-card>
        </div>
      </div>
      
      <!-- <ExploreContainer name="Add New Users" /> -->
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default  {
  name: 'Tab2',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>