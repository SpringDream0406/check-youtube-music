import { runMusicCheck } from "./index";

(async () => {
  console.log("music-check Run", new Date().toLocaleString());
  await runMusicCheck();
})();
