import axios from "axios";
import "dotenv/config";
import { extractVideoId } from "./extractVideoId";
import { IMusicData } from "./interface/music.interface";
import { musicData } from "./data/musicData";

const API_KEY = process.env.API_KEY;
const youtubeURL = "https://www.googleapis.com/youtube/v3/videos";

async function checkYoutubeVideoStatus(music: IMusicData) {
  //
  // url 형식 체크하고 id 뽑기
  const videoId = extractVideoId(music.url);
  if (!videoId) {
    return { ...music, valid: "URL 형식 잘못됨" };
  }

  // 유튜브에 해당 id 비디오 상태 체크
  try {
    const response = await axios.get(youtubeURL, {
      params: {
        part: "status",
        id: videoId,
        key: API_KEY,
      },
    });

    const video = response.data?.items?.[0];
    if (!video) {
      return { ...music, valid: "유효하지 않음" };
    }

    // privacyStatus 확인
    if (video.status.privacyStatus !== "public") {
      return {
        ...music,
        valid: `비공개 또는 미등록 상태 (${video.status.privacyStatus})`,
      };
    }

    return null; // 이상 없으면 null 반환
  } catch (error) {
    return { ...music, valid: "Error" };
  }
}

// 모든 Data 검사
export async function checkAllMusicData() {
  const results = await Promise.all(musicData.map(checkYoutubeVideoStatus));
  const result = results.filter((result) => result !== null); // null 아닌 것 반환 == 문제 있는 data 반환
  return result;
}
