let app = new Vue({
    el: '#app',
    data: {
        running: false,
        playerLife: 0,
        monsterLife: 20
    },
    computed: {
        hasResult() {
            return this.playerLife == 0 || this.monsterLife == 0
        }
    },
    methods: {
        startGame() {
            this.running = true
            this.playerLife = 100
            this.monsterLife = 100
        }
    },
    watch: {

    }
})