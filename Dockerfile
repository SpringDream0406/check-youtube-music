# 베이스 이미지
FROM node:22-alpine

# 작업 디렉토리 설정
WORKDIR /usr/src/app

# package.json, pnpm-lock.yaml 복사
COPY package*.json ./
COPY pnpm-lock.yaml ./

# pnpm 설치
RUN npm i -g pnpm

RUN npm install -g typescript

# 의존성 설치
RUN pnpm install

# 모든 파일 복사
COPY . .

# TypeScript 빌드
RUN pnpm run build

# 빌드된 파일 실행
CMD ["node", "dist/checkMusicData.js"]