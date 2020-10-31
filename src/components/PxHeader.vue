<template>
      <header class="shadow w-screen">
    <nav>
      <nav class="flex items-center flex-wrap bg-indigo-500 p-6">
        <div class="flex items-center flex-shrink-0 text-black mr-6">
          <px-icon class="mr-2" />
          <router-link
            :to="{ name: 'home' }"
            class="font-mono text-lg text-black-800 text-center font-semibold text-transform: uppercase"
          >Coins Exchange</router-link>
        </div>
        <div class="hidden sm:block w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <router-link
              v-for="l in links"
              :key="l.title"
              :to="l.to"
              class="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-white mr-4"
            >{{ l.title }}</router-link>
          </div>
        </div>
      </nav>
    </nav>
  </header>
</template>

<script>
import PxIcon from '@/components/PxIcon'; // importo el icon


export default {
    name: "PxHeader",
    components: { PxIcon },

     props: {
    links: {
      type: Array,
      default: () => []
    }
  }
}

</script>