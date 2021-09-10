<template>
  <div>
    {{ products }}
  </div>
</template>

<script>
import axios from 'axios'

export default {
  // 상위 컴포넌트 즉 pages 에서만 사용가능
  async asyncData() {
    const response = await axios.get('http://localhost:3000/products')
    const products = response.data
    return { products }
  },
  data() {
    return {
      products: [],
    }
  },

  // async created(){
  //   const response = await axios.get('http://localhost:3000/products');
  //   this.products = response.data
  // }
}
</script>

<style>
</style>