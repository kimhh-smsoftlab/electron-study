# demo1 정리
 
// visual studio code 개발 환경구축 및 demo

VS code를 실행해서 ctrl + ,를 눌러 설정에 들어간다.
검색창에 terminal.integrated.shell.windows를 검색한다.
자신의 Git 설치 경로\bin\bash.exe\를 입력한다.
{
    "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe"
}

-------------
ctrl + K ctrl + S를 눌러 단축키 설정에 들어간다.

------------

mkdir demo1_jpp                 // 생성 demo1_jpp 프로젝트
cd demo1_jpp                    // demo1_jpp 프로젝트로 이동
terminal 창에서     npm init    // 생성 package.json
npm install -g electron         // install electron

프로젝트에서 main.js ,  main.html 작성
terminal 창에서 electron . 로 실행

github의 demo를 추가 => cd .. 
=> git clone https://github.com/electron/electron-quick-start
=> cd electron-quick-start
=>  npm init

-------------
npm install electron-packager -g     // packager 설치
=> electron-packager ./ demo1 --win --out ./ --arch=x64 --app-version=0.0.1 --electron-version=11.2.3
// electron -v  하면 electron 버전 확인가능
// 해석: electron-packager사용함 현재목록에 출력폴더명demo1 windows환경이다 출력도_현재목록으로_지정했음 X64bit로 출력앱버전은0.0.1 electron버전11.2.3
// 즉: 현재목록 프로젝트를 exe로 생성하고 설치 없이 실행 가능

