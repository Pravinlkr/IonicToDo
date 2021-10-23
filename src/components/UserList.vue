<template>
   <ion-item v-for="(user,index) in users" v-bind:key="index">
    <ion-label>
      {{user.firstName}} {{user.lastName}}
    </ion-label>
    <ion-icon :icon="trashOutline" @click="presentAlertConfirm(user)" color="danger"/>
  </ion-item>
</template>

<script>
// import { computed } from 'vue'
import { useStore } from 'vuex'
import { alertController } from '@ionic/vue';
import { trashOutline } from 'ionicons/icons';
export default {
    name:'UserList',
    setup() {
      const store = useStore()
      let users = store.getters.usersList

      function deleteUser(user){
        store.dispatch('DeleteUser',user)
      }

      async function presentAlertConfirm(user) {
      const alert = await alertController
        .create({
          cssClass: 'my-custom-class',
          header: 'Delete User',
          message: 'Are you sure to delete ?',
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => {
                console.log('Confirm Cancel:')
              },
            },
            {
              text: 'Delete',
              handler: () => {
                deleteUser(user)
                users = store.state.userDetail
                console.log('Confirm Okay')
              },
            },
          ],
        });
      return alert.present();
    }
    return {
      presentAlertConfirm,
      trashOutline,  
      users
    }
  }
}
</script>
