// 获取尺寸
function getWindowSize() {
  /**
   * 分别用三组数据获取页面的宽高，分别是
   * window.innerWidth window.innerHeight
   * document.body.clientWidth document.body.clientHeight
   * document.documentElement.clientWidth document.documentElement.clientHeight
   * 优先级依次是 document.body.clientWidth > document.documentElement.clientWidth > window.innerWidth
   * 优先级的原因在于，window.innerWidth会包含视口滚动条的宽度，document.documentElement不包含滚动条，指的是<html>渲染区域的高度，document.body也不包含滚动条，指的是<body>渲染区域的高度
   * 而由于我们代码都是写在<body>当中，拿到body的高度是更精确的，而body和html之间的差异基本没有，更多的考虑是在于浏览器兼容，所以才有了这样的排序
   */

  let width;
  let height;

  let wBody, hBody;
  let wDocument, hDocument;
  let wWindow, hWindow;

  if (window.body) {
    wBody = document.body.clientWidth;
    hBody = document.body.clientHeight;
  }

  if (window.documentElement) {
    wDocument = document.documentElement.clientWidth;
    hDocument = document.documentElement.clientHeight;
  }

  wWindow = window.innerWidth;
  hWindow = window.innerHeight;

  width = wBody || wDocument;
  height = hBody || hDocument;

  if (!width && !height) {
    width = wWindow;
    height = hWindow;
  }

  return {
    width,
    height
  };
}

function makeRem750(designWidth = 750) {
  // chrome下最小字体是13px，所以不能用设计图的宽度来设定rem的宽度，比如设计图是640px,直接用640rem换算的话font-size就会过小，所以做*100处理
  // 即 640px = 6.4rem
  //    750px = 7.5rem

  let { width } = getWindowSize();
  let unit = (width / designWidth) * 100;
  document.documentElement.style.fontSize = unit + "px";
  return unit;
}

export { getWindowSize, makeRem750 };
