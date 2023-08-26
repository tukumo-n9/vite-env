export const getUserAgentDatas = () => {

  // User-Agent Client Hints が使えるかどうかを判定
  if(typeof navigator.userAgentData !== 'undefined') {
    console.log('クライアントヒント使えるよ');
    // ユーザーエージェント情報を取得
    const ua = navigator.userAgentData;
    // ユーザーエージェント情報のplatformプロパティを使ってOSを判定
    document.documentElement.dataset.platform = ua.platform;
    // ユーザーエージェント情報のmobileプロパティを使ってモバイルかどうかを判定
    document.documentElement.dataset.mobile = ua.mobile;
  } else {
    // User-Agent Client Hints が使えない場合は旧来の navigator.userAgent を使う
    console.log('クライアントヒント使えないよ');
    // ユーザーエージェント情報を取得
    const ua = navigator.userAgent;
    // ユーザーエージェント情報を使ってOSを判定
    if (ua.includes('iPhone')) {
      document.documentElement.dataset.platform = 'iPhone';
    } else if (ua.includes('iPad')) {
      document.documentElement.dataset.platform = 'iPad';
    } else if (ua.includes('Android')) {
      document.documentElement.dataset.platform = 'Android';
    } else if (ua.includes('Macintosh')) {
      document.documentElement.dataset.platform = 'macOS';
    }
    // ユーザーエージェント情報を使ってモバイルかどうかを判定
    if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
      document.documentElement.dataset.mobile = 'true';
    } else {
      document.documentElement.dataset.mobile = 'false';
    }
  }
};