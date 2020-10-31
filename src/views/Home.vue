<template>
    <div>
      <bounce-loader :loading="isLoading" :color="'#718096'" :size="200" />
      <px-assets-table v-if="!isLoading" :assets="assets" />
      
    </div>
</template>


<script>
import api from '@/api'
import PxAssetsTable from "@/components/PxAssetsTable"


export default {
    name: 'Home',

    components: {
     PxAssetsTable,
     
    },

    data () {
        return {
            isLoading: false,
            assets: []
        }
    },

    created () {
        this.isLoading = true

        api.getAssets()
        .then(assets => this.assets = assets)
        .finally(() => (this.isLoading = false)) // finally se ejecuta aunque haya error
    }
}
</script>