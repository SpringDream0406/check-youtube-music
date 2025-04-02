import { ITags } from "../interface/main.interface";
import { IMusicData } from "../interface/music.interface";

// 플레이리스트, leftNavPage
export const playlists: ITags = {
  Total: "음악 전체",
  Cyworld: "싸이월드 감성",
  Feeling: "감성 & 느낌",
  Tensionup: "텐션 올려!!",
  Groove: "그루브 좀 타볼까~",
  Working: "노동요~",
  Favorite: "춘몽's Pick!",
  Rainy: "비오는 날..",
  Nolyrics: "가사가 없는?!",
  Pick2025: "2025 Pick",
  Pick2024: "2024 Pick",
  Before2024: "Before 2024 Pick",
};

// playlist에 내용 넣는 용
enum pl {
  Cyworld = "Cyworld",
  Feeling = "Feeling",
  Tensionup = "Tensionup",
  Groove = "Groove",
  Working = "Working",
  Favorite = "Favorite",
  Rainy = "Rainy",
  Nolyrics = "Nolyrics",
  Pick2025 = "Pick2025",
  Pick2024 = "Pick2024",
  Before2024 = "Before2024",
}

// 유튜브 음악 데이터
// 피처링은 title에  (feat. Daniel Caesar & Giveon)  이런 식으로
export const musicData: IMusicData[] = [
  {
    url: "https://www.youtube.com/watch?v=F01sUq_Rtds",
    artist: "YB",
    title: "박하사탕",
    playlists: [pl.Feeling, pl.Rainy, pl.Before2024, pl.Pick2024],
  },
  {
    url: "https://www.youtube.com/watch?v=HwNxxRBobFE",
    artist: "YB",
    title: "잊을께",
    playlists: [pl.Before2024],
  },
];
