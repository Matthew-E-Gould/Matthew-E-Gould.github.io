<template>
    <v-app id="inspire">

        <!-- Top Bar -->
        <v-app-bar>
            <v-avatar class="ms-2" color="surface-variant" size="32" variant="flat"></v-avatar>

            <v-app-bar-title>
                Matthew Gould
            </v-app-bar-title>

            <v-spacer></v-spacer>
        </v-app-bar>

        <!-- Bottom bar -->
        <v-footer app color="grey" height="44">

        </v-footer>

        <!-- Left Bar -->
        <v-navigation-drawer floating>

        </v-navigation-drawer>

        <!-- Main content -->
        <v-main>
            <v-sheet class="mx-auto pa-2 pt-6" color="grey-lighten-4">
                
                <v-sheet color="grey-lighten-2" rounded="pill" class="px-2 mb-2"> Skillset </v-sheet>

                <v-slide-group show-arrows>
                    <v-slide-group-item v-for="skill in skills" :key="skill.title">
                        <v-card width="400" height="200" class="mr-2">
                            <v-img :src="skill.image" class="white--text align-end">
                                <v-card-title>{{ skill.title }}</v-card-title>
                            </v-img>
                        </v-card>
                    </v-slide-group-item>
                </v-slide-group>

            </v-sheet>

            <v-sheet class="mx-auto pa-2 pt-6" color="grey-lighten-2">
                <v-sheet color="grey" height="24" rounded="pill" width="88"></v-sheet>

                <v-slide-group show-arrows>
                    <v-slide-group-item v-for="n in 15" :key="n">
                        <v-sheet :width="n === 1 ? 300 : 150" color="grey-lighten-1" class="ma-3" height="200"
                            rounded></v-sheet>
                    </v-slide-group-item>
                </v-slide-group>

                <v-container fluid>
                    <v-row>
                        <v-col v-for="n in 24" :key="n" cols="2">
                            <v-sheet color="grey-lighten-1" height="200" rounded></v-sheet>
                        </v-col>
                    </v-row>
                </v-container>
            </v-sheet>
        </v-main>
    </v-app>
</template>
  
<script>

export default {
    name: 'home',
    props: {},
    data() {
        return {
            skills: [
                {
                    image: "@/assets/logo.svg",
                    title: "Software Security",
                    content: [
                        "Had training on secure systems concepts during formal years at University.",
                        "Moved on to apply the learnt concepts to personal and professional projects through use of middleware, policies and input validation to assure that systems were secure.",
                        "I am looking into cryptology at a further level so that improved decisions can be made about when, where & how to use cryptography in the future.",
                    ],
                },
                {
                    image: "",
                    title: "Software Development",
                    content: [
                        "Passionate for software development and found joy in programming, whether in profession, education or recreation.",
                        "Developed software in his own time towards the end of collage and throughout university.",
                        "While working at finative, I managed to produce a working product (that was used in internal betas), that was constantly updated with new features, as a project leader for 14 months."
                    ],
                },
                {
                    image: "",
                    title: "Remote Work",
                    content: [
                        "Let's be honest, everyone has had to get used to working on a remote environment in 2020, for me that started in March when the Alacrity foundation went into lock-down, since then I have also experienced losing teammates, hiring new team, training new team and giving meaningful feedback to teammates.",
                        "As an individual that plays videogames, I am comfortable with communicating concisely in many varieties over the internet.",
                        "I am also verry comfortable with working in-person."
                    ],
                },
                {
                    image: "",
                    title: "Engineering",
                    content: [
                        ""
                    ],
                },
                {
                    image: "",
                    title: "CAD",
                    content: [
                        ""
                    ],
                },
                {
                    image: "",
                    title: "3D Printing",
                    content: [
                        ""
                    ],
                },
            ]
        }
    },
    mounted(){

    },
    methods: {
        template(){},
    },
    computed: {
        template(){},
    },
    watch: {
        template(newVal, oldVal){},
    },

}

</script>