import Vue from 'vue';
import Router from 'vue-router';
import Website from '../App';
import TextPart from '../components/TextPart';

import InputParten1 from '../components/InputParten1.vue';
import SelectorAddress from '../components/SelectorAddress.vue';
import SelectorTime from '../components/SelectorTime.vue';
import UploadImage from '../components/UploadImage.vue';
import UploadVideo from '../components/UploadVideo';
import AxiosPart from '../components/AxiosPart';
import PluginHtml2CanvasContainer from '../components/mainTool/PluginHtml2CanvasContainer';

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
            path: '/SelectorAddress',
            name: 'SelectorAddress',
            component: SelectorAddress,
        },
        {
            path: '/SelectorTime',
            name: 'SelectorTime',
            component: SelectorTime,
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
        {
            path: '/AxiosPart',
            name: 'AxiosPart',
            component: AxiosPart,
        },
        {
            path: '/PluginHtml2CanvasContainer',
            name: 'PluginHtml2CanvasContainer',
            component: PluginHtml2CanvasContainer,
        },

        ,
    ],
});
