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

            <!-- skills -->
            <v-sheet v-for="(row, index) in rows" class="mx-auto pa-2 pt-6" :color="(index%2)? 'grey-lighten-2':'grey-lighten-4'">

                <v-sheet :color="(index%2)? 'grey':'grey-lighten-2'" rounded="pill" class="px-2 mx-1 mb-2">{{ `${row.title} (${row.entries.length} items)` }}</v-sheet>

                <v-slide-group show-arrows>
                    <v-slide-group-item v-for="entry in row.entries" :key="entry.title">
                        <v-card class="mx-1 my-1" @click="entryClicked(entry)">
                            <v-img cover :src="entry.image" class="align-end" :width="row.cardWidths" :height="row.cardHeights">
                                <v-card-title :style="`color: ${entry.textColor};`">{{ entry.title }}</v-card-title>
                            </v-img>
                        </v-card>
                    </v-slide-group-item>
                </v-slide-group>

            </v-sheet>

            <v-dialog v-model="currentDialog" width="720">
                <v-card>

                    <v-card-title>
                        {{ currentDialog.dialogTitle != undefined ? currentDialog.dialogTitle : currentDialog.title }}
                    </v-card-title>

                    <v-card-title v-if="currentDialog.confidence !== undefined">
                        Confidence: <v-icon v-for="n in 5" :icon="getStar(n, currentDialog.confidence)"></v-icon>
                    </v-card-title>

                    <v-card-text>
                        <v-list lines="two">
                            <v-list-item v-for="(entry, index) in currentDialog.content" :key="index" prepend-icon="mdi-circle">
                                {{ entry }}
                            </v-list-item>
                        </v-list>
                    </v-card-text>

                    <v-btn text @click="closeDialogue()">
                        Close
                    </v-btn>

                </v-card>
            </v-dialog>

        </v-main>
    </v-app>
</template>
  
<script>

export default {
    name: 'home',
    props: {},
    data() {
        return {

            currentDialog: null,

            rows: [

                /////// /////// ///////
                {
                    title: 'Skill set',
                    cardWidths: '400',
                    cardHeights: '300',
                    entries: [
                        {
                            textColor: "#FFF",
                            image: "src/assets/images/skills/dev.png",
                            title: "Software Development",
                            confidence: 5,
                            content: [
                                "Passionate for software development and found joy in programming, whether in profession, education or recreation.",
                                "Developed software in his own time towards the end of collage and throughout university.",
                                "While working at finative, I produced a working product (that was used in internal betas), that was constantly updated with new features, as a project leader for 14 months."
                            ],
                        },
                        {
                            textColor: "#FFF",
                            image: "src/assets/images/skills/remote.png",
                            title: "Remote Work",
                            confidence: 4.5,
                            content: [
                                "Let's be honest, everyone has had to get used to working on a remote environment in 2020, for me that started in March when the Alacrity foundation went into lock-down, since then I have also experienced losing teammates, hiring new team, training new team and giving meaningful feedback to teammates.",
                                "As an individual that plays video games, I am comfortable with communicating concisely in many varieties over the internet.",
                                "I am also very comfortable with working in-person."
                            ],
                        },
                        {
                            textColor: "#FFF",
                            image: "src/assets/images/skills/security.png",
                            title: "Software Security",
                            confidence: 3.5,
                            content: [
                                "Had training on secure systems concepts during formal years at University.",
                                "Moved on to apply the learnt concepts to personal and professional projects through use of middleware, policies and input validation to assure that systems were secure.",
                                "I am looking into cryptology at a further level so that improved decisions can be made about when, where & how to use cryptography in the future.",
                            ],
                        },
                        {
                            textColor: "#FFF",
                            image: "src/assets/images/skills/printer.png",
                            title: "CAD & 3D Printing",
                            confidence: 3,
                            content: [
                                "Trained in engineering for 4 years and can use CAD software to follow engineering specifications.",
                                "Owns a 3D printer and has learnt to work with slicing tools to improve the quality of models.",
                                "Can improve production time and improve quality of post print builds by using different scaffolding structures and hardware.",
                            ],
                        },
                    ],
                },

                /////// /////// ///////
                {
                    title: 'Previous Positions & Projects',
                    cardWidths: '215',
                    cardHeights: '200',
                    entries: [
                        {
                            textColor: "#000",
                            image: "",
                            title: "Haelu",
                            content: [
                            ],
                        },
                        {
                            textColor: "#000",
                            image: "",
                            title: "Initia",
                            content: [
                            ],
                        },
                        {
                            textColor: "#000",
                            image: "",
                            title: "myCrypting",
                            content: [
                            ],
                        },
                        {
                            textColor: "#000",
                            image: "",
                            title: "Recovar",
                            content: [
                            ],
                        },
                        {
                            textColor: "#000",
                            image: "",
                            title: "Web trawler",
                            content: [
                            ],
                        },
                        {
                            textColor: "#000",
                            image: "",
                            title: "Intuitix",
                            content: [
                            ],
                        },
                        {
                            textColor: "#000",
                            image: "",
                            title: "Finative",
                            content: [
                            ],
                        },
                        {
                            textColor: "#000",
                            image: "",
                            title: "Dice Game",
                            content: [
                            ],
                        },
                        {
                            textColor: "#000",
                            image: "",
                            title: "Smart Home Alarm",
                            content: [
                            ],
                        },
                        {
                            textColor: "#000",
                            image: "",
                            title: "Minesweeper",
                            content: [
                            ],
                        },
                    ],
                },

                /////// /////// ///////
                {
                    title: 'Education',
                    cardWidths: '200',
                    cardHeights: '200',
                    entries: [
                        {
                            textColor: "#0FF",
                            image: "src/assets/images/school/usw.jpeg",
                            title: "USW",
                            dialogTitle: "University of South Wales (2015 - 2019)",
                            content: [
                                "During collage I found a fondness towards software development so I decided to study computer science during university.",
                                "Bsc - 2:1",
                                "Masters - 1st"
                            ],
                        },
                        {
                            textColor: "#000",
                            image: "src/assets/images/school/bte.jpeg",
                            title: "BTE",
                            dialogTitle: "Bristol Technology and Engineering Academy (2013 - 2015)",
                            content: [
                                "Went to an engineering collage for A-levels and to further my studies in engineering.",
                                "Studied, Engineering, Physics and Maths",
                            ],
                        },
                        {
                            textColor: "#000",
                            image: "src/assets/images/school/rgs.jpeg",
                            title: "RGS",
                            dialogTitle: "Redland Green School (2008 - 2013)",
                            content: [
                                "Going to school I discovered interests in computers and engineering, however a course was not available around computers at GCSE.",
                                "9 GCSEs graded A* - C",
                            ],
                        },
                    ],
                },

                /////// /////// ///////
                {
                    title: 'Hobbies',
                    cardWidths: '300',
                    cardHeights: '200',
                    entries: [
                        {
                            textColor: "#000",
                            image: "",
                            title: "Software Development",
                            content: [
                            ],
                        },
                        {
                            textColor: "#000",
                            image: "",
                            title: "Motorbiking",
                            content: [
                            ],
                        },
                        {
                            textColor: "#000",
                            image: "",
                            title: "Astronomy",
                            content: [
                            ],
                        },
                        {
                            textColor: "#000",
                            image: "",
                            title: "Video Gaming",
                            content: [
                            ],
                        },
                    ],
                },

            ],

        }
    },
    mounted() {

    },
    methods: {
        entryClicked(entry) {
            this.currentDialog = entry;
        },

        closeDialogue() {
            this.currentDialog = false;
        },

        getStar(index, confidence) {
            let overflow = confidence - (index - 1);
            let icon = 'mdi-';

            if (overflow >= 1) {
                icon += 'star';
            } else if (overflow > 0) {
                icon += 'star-half-full';
            } else {
                icon += 'star-outline'
            }

            return icon;
        },
    },
    computed: {
        template() { },
    },
    watch: {
        template(newVal, oldVal) { },
    },

}

</script>