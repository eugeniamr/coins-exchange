<template>
  <main>
    <px-header :links="links"/> 

    <router-view class="container px-5 sm: px-20 py-20 flex justify-center"/>
    
      <footer class="bg-indigo-500 text-center font-mono text-black uppercase font-medium">
        <p>Made with love by <a href="https://github.com/eugeniamr">Eugenia</a></p>
    </footer>
  </main>
</template>

<script>
import PxHeader from "@/components/PxHeader"; // importo el componente


export default {
  name: 'app',
  components: { PxHeader },
  data() {
    return {
      links: [
        {
          title: 'BTC',
          to: { name: 'coin-detail', params: { id: 'bitcoin' } }
        },
        {
          title: 'ETH',
          to: { name: 'coin-detail', params: { id: 'ethereum' } }
        },
        {
          title: 'LINK',
          to: { name: 'coin-detail', params: { id: 'chainlink' } }
        }
      ]
    }
  }
}

</script>

<style>
#app {
  font-family: sans-serif 'Roboto';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
