import cron from "node-cron";
import { checkAllMusicData } from "./checkYoutubeVideosStatus";
import { sendErrorEmail } from "./sendEmail";

console.log("music-check Start", new Date().toLocaleString());

// 작업 로직을 함수로 분리
export async function runMusicCheck() {
  console.log("checking", new Date().toLocaleString());

  const result = await checkAllMusicData();

  // 이상 있는 데이터 있을 경우 email 보내기
  if (result.length > 0) {
    console.log(result);
    sendErrorEmail(result);
  }
}

// 매일 15시에 실행
cron.schedule("0 15 * * *", async () => {
  await runMusicCheck();
});
