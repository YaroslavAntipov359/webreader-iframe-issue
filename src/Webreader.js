import { useEffect } from "react";
import { init, rsConfig } from "./WebreaderLoader";

const RS_SKIP_CLASS = 'rs_skip';
const RS_SETTINGS = {
  settings: {
    hlicon: "iconoff",
    popupclose: "popupcloseoff",
    hlscroll: "scrolloff",
  },
  general: {
    usePost: true,
    syncContainer: "font",
    iframeReading: true,
  },
  ui: {
    tools: {
      skipbuttons: false,
      speedbutton: false,
    },
  },
};

const Webreader = () => {
  useEffect(() => {
    window.rsConf = {
      ...window.rsConf,
      ...RS_SETTINGS,
    };
    init();
  }, []);

  const url = encodeURIComponent(window.location.href);

  return (
    <div
      id="readspeaker_button1"
      className={`${RS_SKIP_CLASS} rsbtn rs_preserve`}
    >
      <a
        href={`${rsConfig.rsAppCdn}/cgi-bin/rsent?customerid=${rsConfig.customerId}&lang=${rsConfig.lang}&voice=${rsConfig.voice}&readclass=${rsConfig.readClass}&url=${url}`}
        rel="nofollow"
        className="rsbtn_play"
        title="Listen to this page using ReadSpeaker"
      >
        <span className="rsbtn_left rsimg rspart">
          <span className="rsbtn_text" />
        </span>
        <span className="rsbtn_right rsimg rsplay rspart" />
      </a>
    </div>
  );
};

export default Webreader;
