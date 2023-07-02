const authSwitch = () => {
  const bodyDom: any = document.querySelector('body');
  const media: any = window.matchMedia('(prefers-color-scheme:dark)');
  if (media.matches) {
    // 匹配到暗主题
    bodyDom.setAttribute('theme', 'dark');
  } else {
    // 没有匹配到暗主题
    bodyDom.setAttribute('theme', 'light');
  }
  media.addEventListener('change', (e: any) => {
    if (e.matches) {
      // 匹配到暗主题
      bodyDom.setAttribute('theme', 'dark');
    } else {
      // 没有匹配到暗主题
      bodyDom.setAttribute('theme', 'light');
    }
  });
};
export default authSwitch;
