<template>
   <div>
      <h1>Product List</h1>

      <img v-if="loading" src="https://imgur.com/JfPpwOA.gif" alt="">

      <ul v-else>
         <li v-for="product in products">
            <div>{{ product.title }} - {{ product.price | currency }} - {{ product.inventory }}</div>

            <button @click="addProductToCart(product)">Add to cart</button>
         </li>
      </ul>
   </div>
</template>

<script>

export default {
   data(){
      return{
         loading: false
      }
   },
   computed: {
      products(){
         return this.$store.getters.availableProducts
      }
   },
   methods: {
      addProductToCart(product){
         this.$store.dispatch('addProductToCart', product)
      }
   },
   created(){
      this.loading = true
      this.$store.dispatch('fetchProducts')
         .then(() => this.loading = false)
   }
}
</script>