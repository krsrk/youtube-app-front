<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-text-field outlined single-line label="Añadir" type="text">
                    <template v-slot:append>
                        <v-btn tile color="blue white--text" @click="addVideo"
                            >Añadir</v-btn
                        >
                    </template>
                </v-text-field>
            </v-col>
        </v-row>
        <v-divider />
        <v-row>
            <v-col cols="12">
                <TheYoutubeVideoList />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { defineComponent } from 'vue';

import TheYoutubeVideoList from '@/components/TheYoutubeVideoList';

export default defineComponent({
    name: 'HomeView',
    components: {
        TheYoutubeVideoList,
    },
    methods: {
        addVideo() {
            console.log('Add a video!');
        },
    },
});
</script>
