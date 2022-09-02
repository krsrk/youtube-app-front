import { createStore } from 'vuex';
import axios from 'axios';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

export default createStore({
    state: {
        videos: [],
    },
    getters: {
        VIDEOS: (state) => {
            return state.videos;
        },
    },
    mutations: {
        SET_VIDEOS(state, data) {
            state.videos = data;
        },
    },
    actions: {
        getVideos: async (context) => {
            try {
                let { data } = await axios.get('http://localhost:8000/show');
                context.commit('SET_VIDEOS', data.data);
            } catch (e) {
                console.log(e);
            }
        },
        addVideo: async (context, payload) => {
            try {
                await axios.post('http://localhost:8000/add/video', {
                    video_link: payload,
                });
                await context.dispatch('getVideos');
            } catch (e) {
                console.log(e);
            }
        },
    },
    modules: {},
});
