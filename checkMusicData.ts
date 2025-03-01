import cron from "node-cron";
import { checkAllMusicData } from "./checkYoutubeVideosStatus";
import { sendErrorEmail } from "./sendEmail";

// 매일 15시에 실행
cron.schedule("0 15 * * *", async () => {
  const result = await checkAllMusicData();

  // 이상 있는 데이터 있을 경우 email 보내기
  if (result.length > 0) {
    console.log(result);
    sendErrorEmail(result);
  }
});
