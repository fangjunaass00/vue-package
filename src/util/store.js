let store = {
    debug: true,
    state: {
        message: 'Hello!',
        // 用于加载Loading页的素材列表
        sourceArrayPreLoad: ['imgs/bg-loading.jpg'],
        // 用于加载主内容的素材列表
        sourceArrayLoading: [],
        testArr: [],
        backgrundMusicIsPlaying: false,
    },
    setBackgroundMusicPause() {
        this.state.backgrundMusicIsPlaying = false;
    },
    setBackgroundMusicPlaying() {
        this.state.backgrundMusicIsPlaying = true;
    },
};

let handler = {
    get: function(target, prop) {
        // if(store.debug){
        // 	console.log(`store get:target: ${JSON.stringify(target)}, prop: ${prop}`);
        // }

        return Reflect.get(target, prop);
    },
    set: function(target, prop, value) {
        if (store.debug) {
            console.log(`store set: prop: ${prop}, value: ${value}`);
        }

        return Reflect.set(...arguments);
    },
};

let initStore = function(obj) {
    for (let [key, value] of Object.entries(obj)) {
        if (typeof value == 'object') {
            obj[key] = new Proxy(value, handler);
            initStore(value);
        }
    }

    return new Proxy(obj, handler);
};

store.state = initStore(store.state);

window.store = store;

export default store;
