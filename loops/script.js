const vm = new Vue({
    el: '#app',
    data: {
      users:{
        pedro: 'admin',
        danilo: 'manager',
        joelson: 'guest'
      },
      todos:[
        {
          id: '1',
          title: "wash my car",
          complete: false
        },
        {
          id: '2',
          title: "buy some milk",
          complete: true
        }
      ]
    }
  })