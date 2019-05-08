const vm = new Vue({
    el: '#app',
    data: {
      products: null,
      security: false,
      product: {
        name: null,
        fabricator_id: null
      }
    },
    methods:{
      async listProduct(){   
        const products = await axios.get('http://localhost:3000/product')
        this.products = products.data
        this.security = true
      },
      async storeProduct(req){
        const store = await axios.post('http://localhost:3000/product', this.product)
        console.log(store)
      }
    }
  })