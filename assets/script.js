const txt78Main = '78p funds life-changing projects';
const txt78Sub = 'That includesensuring earthquake survivors like Saleh in syria have food and shelter and empowering the Lihukwa villagers in Zambia';
const txt22Main = '22p ensures we can continue to transfer lives tomorrow';
const txt22Sub = 'That includes fundraising and support costs, which allows us to make sure your donation has a long-term impact.'
 
function showOutput(value){
    console.log(value)
    let txtMain = document.getElementById('header');
    txtMain.textContent = value === '22p' ? txt22Main : txt78Main

    let txtSub = document.getElementById('subHeader');
    txtSub.textContent =  value === '22p' ? txt22Sub : txt78Sub

    let cardCol = document.getElementById('detailCard');
    cardCol.classList.add(value === '22p' ? 'bg-22p-col' : 'bg-78p-col');
    cardCol.classList.remove(value === '22p' ? 'bg-78p-col' : 'bg-22p-col');

    let arrowLeft = document.getElementById('arrowLeft');
    let arrowRight = document.getElementById('arrowRight');

    if(value === '78p'){
        arrowRight.classList.add('hidden');
        arrowLeft.classList.remove('hidden');
    }else{
        arrowRight.classList.remove('hidden');
        arrowLeft.classList.add('hidden');
    }    
}

showOutput('78p');