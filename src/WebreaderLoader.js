export const rsConfig = {
  customerId: '8359',
  voice: 'Sophie',
  readClass: 'page',
  rsAppCdn: 'https://app-na.readspeaker.com',
  rsScriptCdn: 'https://cdn-na.readspeaker.com',
  lang: 'en_us'
};

export function init() {
  const head = document?.getElementsByTagName('head').item(0);
  const script = document?.createElement('script');
  if (script && head) {
    script.type = 'text/javascript';
    script.src = `${rsConfig.rsScriptCdn}/script/${rsConfig.customerId}/webReader/webReader.js?pids=wr`;
    script.id = 'rs_req_Init';
    head.appendChild(script);
    script.onload = function () {
      document?.defaultView && document?.defaultView.ReadSpeaker.init();
    };
  }
}
