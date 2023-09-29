<!DOCTYPE html>
<html>

<head>
    <!-- Template -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="Matthew Gould - JSON 2 Table" />
    <meta name="author" content="Matthew Gould" />
    <title>Matthew Gould - JSON 2 Table</title>
    <link rel="icon" type="image/x-icon" href="../../assets/img/favicon.ico" />

    <link href="../../css/styles.css" rel="stylesheet" type="text/css" />

    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
</head>

<body class="container my-3">
    <div id="app">
        <v-app id="inspire">

            <div v-if="showStart">
                <v-textarea solo label="Paste JSON in here" v-model="stringedItems"></v-textarea>
                <v-btn @click="run" :disabled="stringedItems.length == 0">Convert JSON to Table</v-btn>
            </div>
            <div v-else>
                <v-btn @click="reset">Go Back</v-btn>
                <v-data-table :headers="headings" :items="items"></v-data-table>
                <v-btn @click="reset">Go Back</v-btn>
            </div>

        </v-app>
    </div>
</body>
<!-- vue & vuetify -->
<script src="https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.js"></script>
<script>
    app = new Vue({
        el: '#app',
        vuetify: new Vuetify(),
        data() {
            return {
                showStart: true,
                headings: [],
                items: [],
                stringedItems: "",
            }
        },
        methods: {
            run() {
                this.items = JSON.parse(this.stringedItems);

                let heads = Object.keys(this.items[0]);

                heads.forEach(head => {
                    this.headings.push({
                        text: head,
                        value: head,
                        sortable: true,
                    })
                })
                this.showStart = false;
            },

            reset() {
                this.showStart = true;
                this.headings = [];
                this.items = [];
                this.stringedItems = "";
            }
        },
        watch: {},
    })

</script>