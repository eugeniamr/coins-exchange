<template>
  <button
    @click="buttonClick"
    class="bg-transparent hover:bg-indigo-500 text-black-700 font-semibold hover:text-white py-2 px-2 mb-5 border border-gray-500 hover:border-transparent rounded"
  >
    <beat-loader :loading="isLoading" :color="'#718096'" :size="9" />
    <p v-show="!isLoading">
      <slot></slot>
    </p>
  </button>
</template>

<script>
export default {
  name: 'PxButton',
  props: {
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  methods: { // nos permite manejar dentro del elemento padre del boton que este utilizando este boton cual es el handler para el clik
    buttonClick() {
      this.$emit('custom-click') // emite un evento para que el padre al momento de utilizar el boton pueda manejar el evento interno del boton
    }
  }
}
</script>