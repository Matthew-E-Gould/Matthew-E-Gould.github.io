<template>
    <v-app id="inspire">
        <v-main>

            <v-list lines="two">
                <v-list-item v-for="(demo, index) in demos" :key="index" :title="demo.title" :subtitle="demo.subtitle" @click="demoClicked(demo)" />
            </v-list>

        </v-main>
    </v-app>
</template>
  
<script>

export default {
    name: 'Demos',
    props: {},
    data() {
        return {
            demos: [
                {
                    title: 'Bot Game',
                    subtitle: 'Demo for an Alacrity guest to spur ideas',
                    href: '',
                },
                {
                    title: 'Primes',
                    subtitle: 'Something that I threw together to find prime numbers',
                    href: '',
                },
                {
                    title: 'Maze Generator',
                    subtitle: 'Generate a little Maze',
                    href: '',
                },
                {
                    title: 'Level-up-a-day calculator',
                    subtitle: 'A useful little tracker that lets you work out how many levels you need to get in a game to get to a certain level by a certain date.',
                    href: '',
                },
                {
                    title: 'JSON to Table',
                    subtitle: 'Convert JSON to a more readable format',
                    href: '',
                },
                {
                    title: 'Name Generator',
                    subtitle: 'Generate names from words you like the sound of',
                    href: '',
                },
            ]
        };
    },
    mounted() {
    },
    methods: {
        demoClicked(demo) {
            this.$router.push(demo.href);
        },
    },
    computed: {
        template() { },
    },
    watch: {
        template(newVal, oldVal) { },
    },
    components: {}
}

</script>