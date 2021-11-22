const app = new Vue({
    el:'#root',
    data: {
        question: 'Quel est le muscle ?',
        message: "Aujourd'hui nous sommes le " + new Date().toLocaleString(),
        toggledMessage: 'Coucou !',
        toggledSeen: 'Attention magie dans 3, 2, 1, ...',
        seen: true,
        guns: [
            { id: 0, text: 'SMG= PP-29'},
            { id: 1, text: 'LMG= PP-29'},
            { id: 2, text: 'DMR= PP-29'},
        ],
        inputMessage: "Regarde donc comme c'est reactif, tape quelque chose en bas !",
        groceryList: [
            { id: 0, text: 'Racletto la raclette' },
            { id: 1, text: 'Frommajjje' },
            { id: 2, text: 'Noobs' }
        ]
    },
    methods: {
        toggleMessage: function () {
            this.toggledMessage = "Coucou c'est moi !";
        },
        toggleSeen: function () {
            this.toggledSeen = '';
        },
    }
})

app.question = 'Quel est le gun le plus OP de Battlefield 2042 ?';
app.guns.push({ text: 'Sniper= PP-29'});

Vue.component('nom-du-composant', {
    props: ['nomdelaprop'],
    template: '<li>{{ nomdelaprop.text }}</li>',
})

Vue.component('grocery-list', {
    props: ['groceryitem'],
    template: '<li>{{ groceryitem.text }}</li>',
})
