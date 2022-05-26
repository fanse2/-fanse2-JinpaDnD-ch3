const DURATION = 3500

const playButton = document.querySelector('.play-button')
const master = document.querySelector('#master')
const hellga = document.querySelector('#hellga')
const connal = document.querySelector('#connal')
const yomi = document.querySelector('#yomi')
const inwang = document.querySelector('#inwang')
const hansoom = document.querySelector('#hansoom')
const ujang = document.querySelector('#ujang')

const storyLineKor = [
    {
        user: master,
        line: '행성간 무역회사인 To-Cargo는 외행성의 자원 조사를 위해 탐사선을 보냈다.'
    },
    {
        user: master,
        line: '그러나 탐사선과의 연결이 끊기며 외행성에 비우호적인 외계인이 있음을 알아냈다.'
    },
    {
        user: master,
        line: '1개 편대를 보냈지만 모두 파괴되고 비왕 소령만이 악전고투중이다.'
    },
    {
        user: master,
        line: '우주 몬스터들을 모두 물리치시오'
    },
    {
        user: ujang,
        line: '인왕 선장! 우리 비즈니스를 방해하지마시오!!'
    },
    {
        user: inwang,
        line: '무슨 소리를 하시나? 내가 뭘 어쨌다고.'
    },
    {
        user: ujang,
        line: '우리 탐사선이 연락 두절됐소!'
    },
    {
        user: inwang,
        line: '난 모르는 일이오. 무슨 일만 생기면 나한테...'
    },
    {
        user: hansoom,
        line: '@#$%^&^%$#$%^&*&^ @#$%^&*&^%$%^'
    },
]

const storyLineEng = [
    {
        user: master,
        line: 'To-Cargo, an interplanetary trading company, has sent a probe to investigate the resources of an exoplanet.'
    },
    {
        user: master,
        line: 'However, the connection with the probe was lost and it was discovered that there were unfriendly aliens on the superior planets.'
    },
    {
        user: master,
        line: 'One squadron was sent, but all were destroyed, and only Major Biwang is struggling.'
    },
    {
        user: master,
        line: 'Defeat all space monsters.'
    },
    {
        user: ujang,
        line: 'Captain Inwang! Do not disturb our business!!'
    },
    {
        user: inwang,
        line: 'What are you talking about? what did i do?'
    },
    {
        user: ujang,
        line: 'Our probe has lost contact!'
    },
    {
        user: inwang,
        line: 'I don\'t know. Always blame me...'
    },
    {
        user: hansoom,
        line: '@#$%^&^%$#$%^&*&^ @#$%^&*&^%$%^'
    },
]

//let storyLine = storyLineEng

function pitchLine(sentence,playerCard) {
    let line

    if(playerCard.style.display == '') {
        playerCard.style.display = 'flex'
    }

    playerCard.childNodes.forEach(el=>{
        if(el.className == 'line'){
            el.remove()
        } 
    })

    const newLine = document.createElement('div')
    newLine.classList.add('line')
    newLine.textContent = sentence
    playerCard.appendChild(newLine)

}

function story(sl) {
    let i = 0

    sl.forEach(v=>{
        setTimeout(pitchLine,i*DURATION,v.line,v.user)
        i++
    })

}

playButton.addEventListener('click',story)

story(storyLineKor) // storyLineEng

