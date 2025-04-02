import { runMusicCheck } from "./index";

(async () => {
  console.log("Manual music-check Start", new Date().toLocaleString());
  await runMusicCheck();
})();
