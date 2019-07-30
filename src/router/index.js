import Vue from 'vue';
import Router from 'vue-router';
import Website from '../App';
import TextPart from '../components/TextPart';

import InputParten1 from '../components/InputParten1.vue';
import AddressSelector from '../components/AddressSelector.vue';
import TimeSelector from '../components/TimeSelector.vue';
import UploadImage from '../components/UploadImage.vue';
import UploadVideo from '../components/UploadVideo';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/main',
            name: 'Website',
            component: Website,
        },
        {
            path: '/TextPart',
            name: 'Website',
            component: TextPart,
        },
        {
            path: '/InputParten1',
            name: 'InputParten1',
            component: InputParten1,
        },
        {
            path: '/AddressSelector',
            name: 'AddressSelector',
            component: AddressSelector,
        },
        {
            path: '/TimeSelector',
            name: 'TimeSelector',
            component: TimeSelector,
        },
        {
            path: '/UploadImage',
            name: 'UploadImage',
            component: UploadImage,
        },
        {
            path: '/UploadVideo',
            name: 'UploadVideo',
            component: UploadVideo,
        },
    ],
});
