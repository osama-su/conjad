<script setup>

import AppLayout from "@/Layouts/AppLayout.vue";
import {Head, Link, router, useForm} from '@inertiajs/vue3';

  import { ref } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { CheckIcon } from '@heroicons/vue/24/outline'

const open = ref(false)
const selectedStep = ref(null)

const props = defineProps({
    steps: Array,
})

console.log(props)
const openModal = (step) => {
    selectedStep.value = step
    open.value = true
    console.log(selectedStep.value.questions[0].id)
}

const form = useForm({
    questions: props.steps.reduce((acc, step) => {
        step.questions.forEach(question => {
            acc[question.id] = {
                id: question.id,
                title: question.title,
            }
        })
        return acc
    }, {}),
});

const submit = () => {
    form.put(route('steps.update',
        {
            step: selectedStep.value.id,
        }

    ), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
}

console.log(form)

</script>

<template>
    <AppLayout title="Users">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 text-gray-200 leading-tight">
                Form
            </h2>
        </template>
  <div class="px-4 sm:px-6 lg:px-8">


 <div class="sm:flex sm:items-center">
     <div class="sm:flex-auto">
        <p class="mt-2 text-sm text-gray-700">You can update the frontend form.</p>
      </div>
      <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <Link :href="route('form.create')" class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Add step
        </link>
      </div>
 </div>

 <div>
    <div class="sm:hidden">
      <label for="tabs" class="sr-only">Select a tab</label>
      <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
      <select id="tabs" name="tabs" class="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500">
        <option v-for="tab in steps" :key="tab.id" :selected="tab.current">{{ tab.name }}</option>
      </select>
    </div>
    <div class="hidden sm:block">
      <nav class="flex space-x-4" aria-label="Tabs">
        <button v-for="tab in steps"
                :key="tab.id"
                :class="tab.current ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:text-gray-700'"
                class="px-3 py-2 font-medium text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                @click="openModal(tab)"
        >
          {{ tab.name }}
        </button>
      </nav>
    </div>
  </div>


<TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="open = false">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
              <form @submit.prevent="submit">
                <div>
                <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <CheckIcon class="h-6 w-6 text-green-600" aria-hidden="true" />
                </div>
                <div class="mt-3 text-center sm:mt-5">
                  <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900">
                      {{ selectedStep.name }}
                  </DialogTitle>
                  <div class="mt-2">

                          <div v-for="question in selectedStep.questions" :key="question.id">
          <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label for="question" class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                {{ question.title }}
            </label>
            <div class="mt-2 sm:col-span-2 sm:mt-0">

                <input type="hidden"
                       v-model="form.questions[question.id].id"
                       :name="`question[${question.id}]`"
                       :id="`question-${question.id}`" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" />
              <input type="text"
                     v-model="form.questions[question.id].title"
                     :name="`question[${question.title}]`"
                     :id="`question-${question.title}`" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" />
            </div>
          </div>
                              </div>

                  </div>
                </div>
              </div>
              <div class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                <button type="submit" class="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2" @click="open = false">Save</button>
                <button type="cancel" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0" @click="open = false" ref="cancelButtonRef">Cancel</button>
              </div>
                      </form>

            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>



  </div>
    </AppLayout>
</template>

<style scoped>

</style>
