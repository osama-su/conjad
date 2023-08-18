<script setup>

import AppLayout from "@/Layouts/AppLayout.vue";
  import { Head, Link, router } from '@inertiajs/vue3';


const props = defineProps({
    steps: Array,
})

</script>

<template>
    <AppLayout title="Users">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 text-gray-200 leading-tight">
                Form
            </h2>
        </template>
  <div class="px-4 sm:px-6 lg:px-8">

    <div class="py-4">
      <div class="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
    </div>
 <div class="sm:flex sm:items-center">
     <div class="sm:flex-auto">
<!--        <h1 class="text-base font-semibold leading-6 text-gray-900">Users</h1>-->
        <p class="mt-2 text-sm text-gray-700">You can update the frontend form.</p>
      </div>
      <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <Link :href="route('form.create')" class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Add step
        </link>
      </div>
 </div>

  </div>
    </AppLayout>
</template>

<style scoped>

</style>
