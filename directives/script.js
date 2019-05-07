const vm = new Vue({
    el: '#app',
    data: {
      text: "Lorem ipsum dolor sit amet consectetur",
      showText: true,
      textClass: 'red',
      link: 'https://pedroguimaraes.dev',
      attr: 'href',
      number: "1"
    },
    methods: {
      sayHi(){
        alert('Click on')
      }
    },
  })