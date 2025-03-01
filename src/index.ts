import cron from "node-cron";
import { checkAllMusicData } from "./checkYoutubeVideosStatus";
import { sendErrorEmail } from "./sendEmail";

const now = new Date();
console.log(`checkMusicData Start ${now.toLocaleString()}`);

// 매일 15시에 실행
cron.schedule("30 21 * * *", async () => {
  const result = await checkAllMusicData();

  // 이상 있는 데이터 있을 경우 email 보내기
  if (result.length > 0) {
    console.log(result);
    sendErrorEmail(result);
  }
});
