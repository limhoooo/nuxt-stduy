<template>
  <div>
      <h1>메인 페이지</h1>
      <div>
        {{ products }}



        
      </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
async asyncData(){
  const response = await axios.get('http://localhost:3000/products');
    const products = response.data;
    return { products };

    
},
// data() {
//   return {
//     products: [],
//   }
// },

  // async created(){
  //   const response = await axios.get('http://localhost:3000/products');
  //   this.products = response.data
  // }
}
</script>

<style>

</style>