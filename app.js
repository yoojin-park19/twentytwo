const q = {
    0: {"A":1, "B":0},
    1: {"title": "올해 가장 잘한 일을 물어보면 바로 생각이 나지 않는다", "A":1, "B":0 },
    2: {"title": "2021년이 지나가지 않았으면 좋겠다.", "A":0, "B":1},
    3: {"title": "입버릇처럼 벌써 xx살이야 라는 말을 입에 붙이고 산다.", "A":0, "B":1},
    4: {"title": "나는 취미로 뭔가 배우는 것들이 있다.", "A":1, "B":0},
    5: {"title": "나는 2022년 다이어리에 이미 정해진 일정이 있다.", "A":1, "B":0},
    6: {"title": "올해 연말은 집에만 있어야 해서 아쉽다.", "A":1, "B":0 },
    7: {"title": "올해 말고 새해 일출을 보러가는 사람들을 보면... 집에서도 볼 수 있는데 싶다.", "A":0, "B":1},
    8: {"title": "주기적으로 운동을 한다.", "A":1, "B":0},
    9: {"title": "아직은 따로 챙겨먹는 영양제가 없다.", "A":1, "B":0},
    10: {"title": "내년에는 꼭이루고 싶은 목표가 있다.", "A":1, "B":0}
}

const r = {
    0: {"title": "이런사람이 있다고???", "dsc":"개발자도 예상치 못한 극강의 캐릭터 이정도 캐릭터면 2022년에도 달라지지 않겠죠? 한결같으실겁니다", "image":"./img/0.png"},
    1: {"title": "2021년처럼 지나갈 2022년", "dsc":"아마 지금과 같은 2022년을 보내게 되실꺼에요. 귀찮더라도 새로운걸 시작해 보는건 어떨가요?", "image":"./img/1.png"},
    2: {"title": "편안한 2022년", "dsc":"앞으로의 2022년 편안한 2022년이 될거에요. 만약 조금의 설렘을 원한다면 안하는 걸 해보는것도 좋은 방법이에요!!", "image":"./img/2.png"},
    3: {"title": "평소보다 바쁜 2022년", "dsc":"2022년은 여느해보다 좀 바쁘실거 같아요.예정에 없던 일들도 생길 수 있으니 컨디션 관리 스케줄 관리 꼼곰히!!", "image":"./img/3.png"},
    4: {"title": "조금은 피곤할 수 있는 2022년", "dsc":"2022년은 조금 피곤할 수 있을거 같아요. 집에서든 사회에서든 피로감이 들 수 있지만, 그건 당신을 찾는 곳이 많다는 얘기이니 화이팅!!", "image":"./img/4.png"},
    5: {"title": "안정적인 2022년", "dsc":"2022년은 자리를 잡아 안정적인 1년이 될거 같아요. 안정적이길 좋아하는 당신에게는 편안한 한해가 될 수 도 있겠네요.", "image":"./img/5.png"},
    6: {"title": "새로운걸 시작하기 딱 좋은 2022년", "dsc":"좀 지루할 수도 있는 한해를 보냈다면 2022년 새로운 걸 도전하기 딱 좋은 시기가 될거에요! 쌓아 놓은 에너지로 한번 해봅시다!!", "image":"./img/6.png"},
    7: {"title": "원하는대로 이루어질 2022년", "dsc":"2021년 한해동안 열심히 뿌려놨다면 거둬들이는게 있을 2022년이에요! 열심히 일한 당신 즐기십시오", "image":"./img/7.png"},
    8: {"title": "안정적인 2022년", "dsc":"2022년은 자리를 잡아 안정적인 1년이 될거 같아요. 안정적이길 좋아하는 당신에게는 편안한 한해가 될 수 도 있겠네요.", "image":"./img/8.png"},
    9: {"title": "여유가 필요해보이는 2022년", "dsc":"주위사람들에게 바쁜사람이라고 인식되고 있을 당신, 이제는 여유가 좀 필요해요. 주위보다 자신을 좀 둘러보는 건 어떨까요?", "image":"./img/9.png"},
    10: {"title": "건강건강겅강 2022년", "dsc":"2021년 너무 열심히 살았어요. 건강챙겨야 합니다. 영양제는 만병통치약이 아닙니다. 건강챙겨야 해요!", "image":"./img/10.png"}
}

const yes = document.getElementById('yes');
const no = document.getElementById('no');
let count = 0
let num = 0;

yes.addEventListener('click',function clickYes(){
    if (num <= 10 ) { 
        count += parseInt(q[num]["A"]);
        return next()
    } else {
        return next()
    }
});
no.addEventListener('click',function clickNo(){
    if (num <= 10 ) { 
        count += parseInt(q[num]["B"]);
        return next()
    } else {
        return next()
    }
});

function next() {
    if (num < 10) { 
        num ++
        document.querySelector('.progress-bar').setAttribute('style', 'width: calc(100/11*'+(num+1)+'%)')
        document.getElementById('title').innerText = q[num]["title"];
    } else{
        document.getElementById('btnResult').setAttribute("style", "display:block")
        btnResult.addEventListener('click', () =>{
            resultPage()
        })
    }
};



function resultPage() {
    let i = count;
    document.getElementById('qus').setAttribute("style", "display:none")
    document.getElementById('testResult').setAttribute("style", "display:block")
    document.getElementById('img').setAttribute("src", r[i]["image"])
    document.getElementById('titResult').innerText = r[i]["title"];
    document.getElementById('dscResult').innerText = r[i]["dsc"];
}