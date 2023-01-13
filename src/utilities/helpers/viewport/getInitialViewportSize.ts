import type { Viewport } from "@models";
import { pipe, getViewportSize } from "@helpers";
import { detect } from "detect-browser";

function changeToInitial({ w, h }: Viewport) {
  const browser = detect();
  const isMobileOSDevice = ["Android OS", "iOS"].includes(browser.os ?? "none");
  const isSmallScreen = window.innerWidth < 1100;

  switch (isMobileOSDevice && isSmallScreen ? browser.name : undefined) {
    case "ios":
      return { w, h: h + 85 };
    case "safari":
      return { w, h: h + 70 };
    case "firefox":
      return { w, h: h + 70 };
    case "edge-chromium":
      return { w, h: h + 110 };
    case "chromium-webview":
      return { w, h: h + 70 };
    case "chrome":
      return { w, h: h + 70 };
    case "crios":
      return { w, h: h + 110 };
    default:
      return { w, h };
  }
}

export const getInitialViewportSize = () => pipe(getViewportSize, changeToInitial)({ w: 0, h: 0 });
