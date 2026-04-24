const sero = document.getElementById('sero');
const scoreDisplay = document.getElementById('score');
const container = document.getElementById('city-background');

let score = 0;

// 세로의 위치를 무작위로 옮기는 함수
function moveSero() {
    const maxX = container.clientWidth - 50;
    const maxY = container.clientHeight - 50;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    sero.style.left = `${randomX}px`;
    sero.style.top = `${randomY}px`;
}

// 세로를 클릭했을 때 실행
function catchSero() {
    score++;
    scoreDisplay.innerText = score;
    
    // 축하 효과
    sero.style.transform = 'scale(1.5) rotate(360deg)';
    
    setTimeout(() => {
        sero.style.transform = 'scale(1) rotate(0deg)';
        alert('간식으로 세로를 유혹했습니다! 집으로 돌아가자~');
        moveSero();
    }, 200);
}

// 2초마다 세로가 도망다님
setInterval(moveSero, 2000);

// 초기 위치 설정
moveSero();
