<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-text-field
                    v-model="video_link"
                    outlined
                    single-line
                    label="Añadir"
                    type="text"
                >
                    <template v-slot:append>
                        <v-btn tile color="blue white--text" @click="addVideo()"
                            >Añadir</v-btn
                        >
                    </template>
                </v-text-field>
            </v-col>
        </v-row>
        <v-spacer />
        <v-row>
            <v-col cols="12">
                <TheYoutubeVideoList />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';

import TheYoutubeVideoList from '@/components/TheYoutubeVideoList'; //Youtube List Component

export default defineComponent({
    name: 'HomeView',
    components: {
        TheYoutubeVideoList,
    },
    created() {
        this.$store.dispatch('getVideos');
    },
    data() {
        return { video_link: '' };
    },
    setup() {
        const store = useStore();

        let videos = computed(function () {
            return store.state.videos;
        });

        function addVideo() {
            store.dispatch('addVideo', this.video_link);
            this.video_link = '';
        }

        return {
            videos,
            addVideo,
        };
    },
});
</script>
