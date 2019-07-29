/**
 * 翻页管理器
 * 顾名思义，这个管理器是为了处理翻页的时候所遇到的一些比如页面延迟时间，页面是否正在翻页这些状态而产生的。
 * 所以这个管理器的功能仅仅是负责两页间的切换，它不需要知道整个场景里有几个页面，也不需要知道这个页面对应的内容具体是什么，它只负责记录当前页面，以及正在翻页页面的序号而已。
 */
class PageTurningManager {
    constructor() {
        this.currentIndex = null; // 当前页面序号，指的是当前显示在最前的，静态展示的页面
        this.nextIndex = null; // 下一页面序号，在翻页的过程中，下一页可以被代表为“即将出现的”，“正在做动画的”这些状态。
        this.nextDuration = 500; // 下一页变为当前页的延迟时间，单位是毫秒。设置nextIndex后多少毫秒后，nextIndex赋值为currentIndex
    }

    /**
     * 翻到指定页
     * @param {Number} pageIndex 翻到的页面序号
     * @param {Number} duration 表示翻页的持续时间，单位是毫秒，指经过指定毫秒后，pageIndex会完成翻页，成为当前页
     */
    turnToPage(pageIndex, duration = 0) {
        if (duration <= 0) {
            this.currentIndex = pageIndex;
            this.nextIndex = null;
            return new Promise(res => {
                res();
            });
        }

        this.nextIndex = pageIndex;

        return new Promise(res => {
            setTimeout(() => {
                console.log(`this is ${JSON.stringify(this)}`);
                this.nextIndex = null;
                this.currentIndex = pageIndex;
                res();
            }, duration);
        });
    }

    /**
     * 自动翻到下一页，如果上次翻页有动画延时，那这次会继续执行动画延时
     */
    turnToNextPageAutomatically() {
        return this.turnToPage(this.currentIndex + 1, this.nextDuration);
    }

    /**
     * 这个页面是否是当前展示页
     * @param {Number} index 页码
     */
    isCurrentPage(index) {
        if (isNaN(index)) {
            return false;
        }

        return index == this.currentIndex;
    }

    /**
     * 这个页面页面是否是下一页（正在翻的页）
     * @param {Number} index 页码
     */
    isNextPage(index) {
        if (isNaN(index)) {
            return false;
        }

        return index == this.nextIndex;
    }

    toString() {
        console.log(
            `page manager: ${JSON.stringify({
                currentIndex: this.currentIndex,
                nextIndex: this.nextIndex,
                nextDuration: this.nextDuration,
            })}`
        );
    }
}

let _PageTurningManager = new PageTurningManager();

export default _PageTurningManager;
