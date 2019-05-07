const data = {
    title: 'Data and methods',
        person:{
            name: 'Pedro Guimarães',
            age: 25
        }
}

const vm = new Vue({
    el: '#app',
    data,
    methods:{
        alterTitle(){
            this.title = (this.title == 'Mudou') ? 'Data and methods' : 'Mudou'
        },
        ageSentence(age){
            return `${age} years`
        }
    }
})