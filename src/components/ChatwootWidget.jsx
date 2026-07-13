import { useEffect, useRef } from "react";

const CHATWOOT_BASE_URL = "https://app.chatwoot.com";
const CHATWOOT_WEBSITE_TOKEN = "x495qgJGHistVEV6ci1M9Tk7";

export default function ChatwootWidget() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    window.chatwootSettings = {
      position: "right",
      type: "standard",
      launcherTitle: "",
    };

    const script = document.createElement("script");
    script.src = `${CHATWOOT_BASE_URL}/packs/js/sdk.js`;
    script.async = true;

    script.onload = () => {
      if (window.chatwootSDK) {
        window.chatwootSDK.run({
          websiteToken: CHATWOOT_WEBSITE_TOKEN,
          baseUrl: CHATWOOT_BASE_URL,
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      initialized.current = false;
      const holder = document.getElementById("cw-widget-holder");
      const bubble = document.getElementById("cw-bubble-holder");
      const styles = document.getElementById("cw-widget-styles");
      if (holder) holder.remove();
      if (bubble) bubble.remove();
      if (styles) styles.remove();
      if (script.parentNode) script.parentNode.removeChild(script);
      window.$chatwoot = undefined;
    };
  }, []);

  return null;
}
