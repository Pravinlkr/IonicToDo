<template>
  <div class="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
    <Form @submit="addUser()">
        <div>
          <label for="fName" class="block text-sm font-medium text-gray-700">First Name</label>
          <div class="mt-1 mb-3">
            <Field 
              id="fName" 
              name="fName" 
              rules="required" 
              v-model="fName" 
              type="text" 
              class="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none" />
              <ErrorMessage name="fName" class="text-red-300" />
          </div>
        </div>

        <div>
          <label for="lName" class="block text-sm font-medium text-gray-700">Last Name</label>
          <div class="mt-1 mb-3">
            <Field 
              id="lName" 
              name="lName"
              rules="required"  
              v-model="lName" 
              type="text" 
              class="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none" />
              <ErrorMessage name="lName" class="text-red-300" />
          </div>
        </div>

        <div class="mb-3">
          <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add To List</button>
        </div>
    </Form>
  </div>
</template>

<script>
import { configure, Form, Field, defineRule, ErrorMessage } from 'vee-validate';
import { required } from "@vee-validate/rules";
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { ref, defineComponent, onMounted } from 'vue'
export default defineComponent({
  name: 'ExploreContainer',
  components: {
        Form,
        Field,
        ErrorMessage
    },
  setup(){
    const store = useStore();
    const router = useRouter();
    const fName = ref('')
    const lName = ref('')

    function addUser(){
      const obj = {}
      obj.firstName = fName.value;
      obj.lastName = lName.value;
      store.dispatch('AddUser',obj)
      router.push('/tabs/tab1')
    }

    onMounted(() => {
      configure({
        validateOnInput: true,
      });

      defineRule("required", required);
    });
    return{
      fName,
      lName,
      addUser
    }
  }
});
</script>
