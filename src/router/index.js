import Vue from 'vue';
import Router from 'vue-router';
import Website from '../App';
import TextPart from '../components/TextPart';

import InputParten from '../components/container/SampleInput';
import PluginSelector from '../components/container/PluginSelector';
import SampleUpload from '../components/container/SampleUpload';
import AxiosPart from '../components/container/SampleAxiosPart';
import PluginHtml2CanvasContainer from '../components/container/PluginHtml2CanvasContainer';
import SampleMovieClipContainer from '../components/container/SampleMovieClipContainer';
import SampleMusicContainer from '../components/container/SampleMusicContainer';

import OtherContainer from '../components/container/OtherContainer';

// import Mosaic from '../components/sample/Mosaic';
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/main',
            name: 'Website',
            component: Website,
        },
        {
            path: '/test',
            name: 'Website',
            component: TextPart,
        },
        {
            path: '/InputParten',
            name: 'InputParten',
            component: InputParten,
        },

        {
            path: '/PluginSelector',
            name: 'PluginSelector',
            component: PluginSelector,
        },
        {
            path: '/SampleUpload',
            name: 'SampleUpload',
            component: SampleUpload,
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
        {
            path: '/SampleMovieClipContainer',
            name: 'SampleMovieClipContainer',
            component: SampleMovieClipContainer,
        },
        {
            path: '/OtherContainer',
            name: 'OtherContainer',
            component: OtherContainer,
        },
        {
            path: '/SampleMusicContainer',
            name: 'SampleMusicContainer',
            component: SampleMusicContainer,
        },
        ,
    ],
});
