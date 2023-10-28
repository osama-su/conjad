<script setup>

import AppLayout from "@/Layouts/AppLayout.vue";
  import { Head, Link, router } from '@inertiajs/vue3';
import {
    Bars3Icon,
    BellIcon,
    Cog6ToothIcon,
    DocumentDuplicateIcon,
    HomeIcon,
    UsersIcon,
    XMarkIcon,
    EyeIcon,
} from '@heroicons/vue/24/outline'
import {ChevronDownIcon, MagnifyingGlassIcon} from '@heroicons/vue/20/solid'


const props = defineProps({
    cities: Array,
    filters: Array,
})

</script>

<template>
    <AppLayout title="Users">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 text-gray-200 leading-tight">
                Cities
            </h2>
        </template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-base font-semibold leading-6 text-gray-900">Cities</h1>
        <p class="mt-2 text-sm text-gray-700"> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      </div>
      <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <Link :href="route('cities.create')" class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Add City
        </link>
      </div>
    </div>
    <div class="mt-8 flow-root">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table class="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Name (Ar)</th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Name (En)</th>
                <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 bg-white">
              <tr v-for="city in cities.data" :key="city.id">
                <td class="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                  <div class="flex items-center">

                    <div class="ml-4">
                      <div class="font-medium text-gray-900">{{ city.name_ar }}</div>
                      <div class="mt-1 text-gray-500">{{ city.email }}</div>
                    </div>
                  </div>
                </td>
                <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                  <div class="text-gray-900">{{ city.title }}</div>
                  <div class="mt-1 text-gray-500">{{ city.name_en }}</div>
                </td>
                <td class="flex flex-row items-center justify-end py-5 pr-4 space-x-4 text-sm font-medium">
                    <Link :href="route('cities.show', city.id)" class="text-indigo-600 hover:text-indigo-900">
                        <component
                            :is="EyeIcon"
                            class="w-5 h-5"
                        />
                    </Link>
                    <Link :href="route('cities.edit', city.id)" class="text-indigo-600 hover:text-indigo-900">
                        <component
                            :is="Cog6ToothIcon"
                            class="w-5 h-5"
                        />
                    </Link>
                    <Link :href="route('cities.destroy', city.id)" method="delete" as="button" class="text-indigo-600 hover:text-indigo-900">
                        <component
                            :is="XMarkIcon"
                            class="w-5 h-5"
                        />
                    </Link>
                </td>
              </tr>
            </tbody>
          </table>
            <div v-if="cities.links.length > 3">
                <div class="flex flex-wrap -mb-1">
                    <template v-for="(link, key) in cities.links">
                        <div v-if="link.url === null" :key="key" class="mr-1 mb-1 px-4 py-3 text-sm leading-4 text-gray-400 border rounded" v-html="link.label" />
                        <Link v-else
                              class="mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white focus:border-indigo-500 focus:text-indigo-500" :class="{ 'bg-white': link.active }" :href="link.url" v-html="link.label" />
                    </template>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
    </AppLayout>
</template>

<style scoped>

</style>
