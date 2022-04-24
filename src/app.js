const MyNameApp = {
    data() {
        return {
            input_name: "",
            tex: ""
        }
    },
    methods: {
        submitForm(e) {

            e.preventDefault();

            console.log(this.input_name);

            this.tex = "Ola "+this.input_name+", meu nome é Otávio Hellmann Wiemes!";

        }
    }
}

Vue.createApp(MyNameApp).mount("#app");