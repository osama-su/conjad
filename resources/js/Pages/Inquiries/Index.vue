<script setup>

import AppLayout from "@/Layouts/AppLayout.vue";
  import { Head, Link, router } from '@inertiajs/vue3';


const props = defineProps({
    inquiries: Array,
    filters: Array,
})

</script>

<template>
    <AppLayout title="Inquiries">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 text-gray-200 leading-tight">
                Inquiries
            </h2>
        </template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-base font-semibold leading-6 text-gray-900">Inquiries</h1>
        <p class="mt-2 text-sm text-gray-700">A list of all the inquiries.</p>
      </div>
    </div>
<!--      Export Button -->
    <div class="mt-6 flex flex-col justify-between sm:flex-row sm:justify-start sm:space-x-2">
      <Link :href="route('inquiries.export')" class="w-full sm:w-auto">
        <button type="button" class="inline-flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto">
          Export
        </button>
        </Link>
    </div>
    <div class="mt-8 flow-root">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table class="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Name</th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Email</th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Phone</th>
<th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">When To Buy</th>
<th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Type of property</th>
<th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Purchasing value</th>
                <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 bg-white">
              <tr v-for="person in inquiries.data" :key="person.email">
                <td class="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                  <div class="flex items-center">
                      <div class="font-medium text-gray-900">{{ person.name }}</div>
                  </div>
                </td>
                  <td class="whitespace-nowrap py-5 px-3 text-sm">
                      <div class="text-gray-900">{{ person.email }}</div>
                    </td>
                  <td class="whitespace-nowrap py-5 px-3 text-sm">
                      <div class="text-gray-900">{{ person.phone_number }}</div>
                    </td>
                  <td class="whitespace-nowrap py-5 px-3 text-sm">
                      <div class="text-gray-900">{{ person.when_to_buy }}</div>
                    </td>
                  <td class="whitespace-nowrap py-5 px-3 text-sm">
                      <div class="text-gray-900">{{ person.type_of_property }}</div>
                    </td>
                  <td class="whitespace-nowrap py-5 px-3 text-sm">
                      <div class="text-gray-900">{{ person.purchasing_value }}</div>
                    </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
    </AppLayout>
</template>

<style scoped>

</style>
