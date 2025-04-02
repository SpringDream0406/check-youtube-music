export const apps = [
  {
    name: "music-check",
    script: "src/index.ts",
    interpreter: "tsx",
    watch: true,
  },
  {
    name: "music-check-run",
    script: "src/run.ts",
    interpreter: "tsx",
    watch: false, // 수동 실행이므로 watch는 비활성화
  },
];
