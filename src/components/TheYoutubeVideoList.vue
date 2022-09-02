<template>
    <div>
        <template v-if="videos.length > 0">
            <v-row>
                <template v-for="video in videos" :key="video.id.S">
                    <v-col cols="12" sm="12" md="4">
                        <v-img
                            style="cursor: pointer"
                            :src="video.thumbnail.S"
                            class="align-center"
                            height="300px"
                            @click.stop="showVideo(video)"
                        />
                    </v-col>
                </template>
            </v-row>
        </template>
        <template v-else>
            <h4>No hay registros</h4>
        </template>
        <TheModal v-if="dialog">
            <template v-slot:body>
                <v-row>
                    <v-col cols="12" sm="12" md="12">
                        <v-toolbar color="white" dark>
                            <v-btn
                                class="mdi-align-horizontal-right"
                                icon
                                dark
                                @click="closeShowVideoDialog"
                            >
                                <v-icon>mdi-close</v-icon>
                            </v-btn>
                        </v-toolbar>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" sm="12" md="6">
                        <v-img
                            style="cursor: pointer"
                            :src="videoSelected.thumbnail.S"
                            class="align-center"
                            height="220px"
                        />
                    </v-col>
                    <v-col cols="12" sm="12" md="6">
                        <h3>{{ videoSelected.title.S }}</h3>
                        <p>
                            {{ videoSelected.description.S }}
                        </p>
                    </v-col>
                </v-row>
            </template>
        </TheModal>
        <!--        <v-dialog v-model="dialog" max-width="1024px">
            <v-card>
                <v-toolbar color="white" dark>
                    <v-btn
                        class="mdi-align-horizontal-right"
                        icon
                        dark
                        @click="closeShowVideoDialog"
                    >
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-toolbar>
                <v-card-text>
                    <v-row>
                        <v-col cols="12" sm="12" md="6">
                            <v-img
                                style="cursor: pointer"
                                :src="videoSelected.thumbnail.S"
                                class="align-center"
                                height="220px"
                            />
                        </v-col>
                        <v-col cols="12" sm="12" md="6">
                            <h3>{{ videoSelected.title.S }}</h3>
                            <p>
                                {{ videoSelected.description.S }}
                            </p>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-dialog>-->
    </div>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import TheModal from '@/components/TheModal';

export default defineComponent({
    name: 'TheYoutubeVideoLis',
    components: {
        TheModal,
    },
    setup() {
        const store = useStore();
        //const dialog = ref(false);

        let videos = computed(function () {
            return store.state.videos;
        });

        /*function showVideo(item) {
            showVideoInfoDialog.value = true;
            this.videoSelected = item;
        }

        function closeShowVideoDialog() {
            console.log('Close dialog');
            console.log(showVideoInfoDialog.value);
            showVideoInfoDialog.value = false;
            this.videoSelected = {};
        }*/

        return {
            //dialog,
            videos,
            //showVideo,
            //closeShowVideoDialog,
        };
    },
    /*data() {
        return {
            video_link: '',
            showVideoInfoDialog: false,
            dialog: false,
            videoSelected: {},
        };
    },*/
    data: () => ({
        video_link: '',
        //showVideoInfoDialog: false,
        dialog: false,
        videoSelected: {},
    }),
    methods: {
        showVideo(item) {
            console.log('Open dialog');
            this.dialog = true;
            //console.log(this.dialog);
            //this.showVideoInfoDialog = true;
            this.videoSelected = item;
            //console.log(this.videoSelected);
        },
        closeShowVideoDialog() {
            console.log('Close dialog');
            this.dialog = false;
            this.videoSelected = {};
        },
    },
});
</script>
