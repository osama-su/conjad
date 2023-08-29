<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import Welcome from '@/Components/Welcome.vue';

const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
    inquiries: {
        type: Number,
        required: true,
    },
    totalCities: {
        type: Number,
        required: true,
    },
    totalAreas: {
        type: Number,
    },
    topCities: {
        type: Array,
        required: true,
    },
    topAreas: {
        type: Array,
        required: true,
    },
});

const stats = [
  { name: 'Total Submitted Inquiries', stat: props.inquiries },
  { name: 'Total Cities Selected', stat: props.totalCities },
  { name: 'Total Areas Selected', stat: props.totalAreas },

]

const activityItems = [
  {
    user: {
      name: 'Michael Foster',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    projectName: 'ios-app',
    commit: '2d89f0c8',
    branch: 'main',
    date: '1h',
    dateTime: '2023-01-23T11:00',
  },
  {
    user: {
      name: 'Lindsay Walton',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    projectName: 'mobile-api',
    commit: '249df660',
    branch: 'main',
    date: '3h',
    dateTime: '2023-01-23T09:00',
  },
  {
    user: {
      name: 'Courtney Henry',
      imageUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    projectName: 'ios-app',
    commit: '11464223',
    branch: 'main',
    date: '12h',
    dateTime: '2023-01-23T00:00',
  },
  {
    user: {
      name: 'Courtney Henry',
      imageUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    projectName: 'tailwindui.com',
    commit: 'dad28e95',
    branch: 'main',
    date: '2d',
    dateTime: '2023-01-21T13:00',
  },
  {
    user: {
      name: 'Michael Foster',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    projectName: 'relay-service',
    commit: '624bc94c',
    branch: 'main',
    date: '5d',
    dateTime: '2023-01-18T12:34',
  },
]
</script>

<template>
    <AppLayout title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 text-gray-200 leading-tight">
                Dashboard
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <!-- <Welcome /> -->

                      <div>
<!--    <h3 class="text-base font-semibold leading-6 text-gray-900">Last 30 days</h3>-->
    <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
      <div v-for="item in stats" :key="item.name" class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
        <dt class="truncate text-sm font-medium text-gray-500">{{ item.name }}</dt>
        <dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{{ item.stat }}</dd>
      </div>
    </dl>
  </div>


                    <div class="border-t-4 border-gray-200">

                    </div>
                    <div class="flex flex-row justify-between px-4 py-5 sm:px-6">

                    <div class="w-full">
                        <h3 class="text-base font-semibold leading-6 text-gray-900">Top Cities</h3>
                    <dl class="mt-5 w-full">
                        <div v-for="(item,key) in props.topCities" :key="item.name" class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
                            <dt class="truncate text-sm font-medium text-gray-500">{{ key }}</dt>
                            <dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{{ item }}</dd>
                        </div>
                    </dl>
                    </div>

                    <div class="w-full">
                         <h3 class="text-base font-semibold leading-6 text-gray-900">Top Areas</h3>
                    <dl class="mt-5 w-full">
                        <div v-for="(item,key) in props.topAreas" :key="item.name" class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
                            <dt class="truncate text-sm font-medium text-gray-500">{{ key }}</dt>
                            <dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{{ item }}</dd>
                        </div>
                    </dl>
                    </div>
                    </div>


                </div>
            </div>
        </div>
    </AppLayout>
</template>
