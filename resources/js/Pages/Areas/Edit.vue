
<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import {router, useForm} from "@inertiajs/vue3";

const props = defineProps({
    city: Object,
  area: Object,
})

const form = useForm({
    id: props.area.id,
    city_id: props.city.id,
    name_ar: props.area.name_ar,
    name_en: props.area.name_en,
    src: props.area.src,
});

const submit = () => {
    form.put(route('areas.update', [props.city.id, props.area.id]),
        {
        onFinish: () => form.reset(),
    });
};

</script>
<!--
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
    <AppLayout title="Create City">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Edit City
            </h2>
        </template>
  <form @submit.prevent="submit">
    <div class="space-y-12">


      <div class="border-b border-gray-900/10 pb-12">
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label for="name_ar" class="block text-sm font-medium leading-6 text-gray-900">Name (Ar)</label>
            <div class="mt-2">
              <input v-model="form.name_ar" type="text" name="name_ar" id="name_ar" autocomplete="address-level1"
                     class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                <span class="text-red-500" v-if="form.errors.name_ar" v-text="form.errors.name_ar"></span>
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="name_en" class="block text-sm font-medium leading-6 text-gray-900">Name (En)</label>
            <div class="mt-2">
              <input v-model="form.name_en"  type="text" name="name_en" id="name_en" autocomplete="address-level1"
                     class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                <span class="text-red-500" v-if="form.errors.name_en" v-text="form.errors.name_en"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="border-b border-gray-900/10 pb-12">
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8">
          <div class="sm:col-span-3">
            <label for="src" class="block text-sm font-medium leading-6 text-gray-900">SRC</label>
            <div class="mt-2">
              <input v-model="form.src" type="text" name="src" id="src"
                     class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              <span class="text-red-500" v-if="form.errors.src" v-text="form.errors.src"></span>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="mt-6 flex items-center justify-end gap-x-6">
      <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
      <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
    </div>
  </form>
    </AppLayout>
</template>

