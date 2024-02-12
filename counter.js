// Vue.component('counter', {
//     data() {
//         return {
//             counter: 0
//         }
//     },
//     methods: {
//         add() {
//             this.counter++
//         }
//     },
//     template: 
//     `<div>
//         <p> Counter : {{counter}}</p> 
//         <button @click="add">Add</button>
//     </div>`
// })
// import Vue from 'vue';
// const Vue = require('vue')

let data =
    Vue.component('counter', {
        template: `<div>{{ message }}
    <my-component></my-component>
    </div>
    `,
        data() {
            return {
                message: 'Hello, Vue!',
            };
        },
    });
// export default data
module.exports = data
