const fighterHealthElm = document.getElementById('fighterHealth')
const fighterElm = document.getElementById('fighter')
const fighterAttackElm = document.getElementById('fighterAttack')
const bossHealth = document.getElementById('bossHealth')
const bossLevel = document.getElementById('bossLevel')
const gold = document.getElementById("Gold")
const perSecondElm = document.getElementById("perSecond")




const fighter = {
    Health : 100,
    Attack: 1,
    Gold: 0,
    PerSecond: 1,
}

function fighterBuff(){
    fighterAttack.innerHTML = fighter.Attack 
    fighter.Attack += 1
}

function income(){
    perSecondElm.innerHTML = fighter.PerSecond
    fighter.PerSecond += 2
    update()
}

function fighterFear(){
    bossHealth.innerHTML = boss.Health
    boss.Health -= 30
}

function fighterGold(){
    gold.innerHTML = fighter.Gold
    if (fighter.Health > 0){
    fighter.Gold += 1
    }
}

const boss = {
    Health : 100,
    Level : 1,
}

function bossAttack(){
    fighterHealth.innerHTML = fighter.Health
    fighter.Health -= 2 * boss.Level
    if (fighter.Health <= 0){
        fighter.Health = 0
    }
}

function attack(){
    boss.Health -= fighter.Attack
    if (boss.Health <= 0){
    boss.Health = 0
    boss.Level ++
    boss.Health = 100 * boss.Level
    fighter.Gold += 100
}
    update()
}

function collect(){
    gold.innerHTML = fighter.Gold
    fighter.Gold += 2
}



function update(){
    gold.innerHTML = fighter.Gold
    fighterAttackElm.innerHTML = fighter.Attack
    fighterHealthElm.innerHTML = fighter.Health
    perSecondElm.innerHTML = fighter.PerSecond
    bossHealth.innerText = boss.Health
    bossLevel.innerText = boss.Level
    


}

function purchaseAttack(){
    if (fighter.Gold >= 100){
        fighter.Gold -= 100
    fighterBuff()    
    }
}
function purchaseHealth (){
    if (fighter.Gold >= 100){
        fighter.Gold -= 100
        fighter.Health += 50
    fighterBoost() 
    }
    update()
}

function fearBoss(){
    if (fighter.Gold >= 200){
        fighter.Gold -= 200
    fighterFear()
    update()
    }
}


function collectGold(){
    if (fighter.Gold >= 200){
        fighter.Gold -= 200
        income()
        goldBonus()
        setInterval(goldBonus,1000)  
    }
}

function goldBonus(){
    gold.innerHTML = fighter.Gold
    fighter.Gold += 2
}



setInterval(bossAttack,3000)
setInterval(fighterBuff,20000)
setInterval(fighterGold,1000)
