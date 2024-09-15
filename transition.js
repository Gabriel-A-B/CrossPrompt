/*corpo*/
const html = document.querySelector("html");

/*buttom*/
const homeButtom = "Home";
const aboutButtom = document.querySelector("#buttom-about");
const projectsButtom = document.querySelector("#buttom-projects");
const contactsButtom = document.querySelector("#buttom-contacts");

/*pages*/
const pageList = document.querySelectorAll(".pages"); 
const homePage = document.querySelector("#pageHome");
const aboutPage = document.querySelector("#pageAbout");
const projectPage = document.querySelector("#pageProject");
const contactPage = document.querySelector("#pageContact");

/*itens*/
let anterior = 0;
const capturaContexto = '';
const home = 'Home';
let ultimoButtom;

 /*arrays*/
const buttomList = document.querySelectorAll(".buttom");
const listaDosButtom = Array.from(buttomList);
const listPage = Array.from(pageList);

/*agora tenho que dividilos*/
listaDosButtom.forEach(function (botao) {
    botao.addEventListener('click', function(capturaContexto) {
        /*aqui vamos trocar a page*/
        capturaContexto = botao.value;
        ultimaPage = listPage.findIndex(p => p === capturaContexto.value);

        /*aqui vamos trocar a data-contexto*/
        if (anterior == 1) {
            buttomList[0].innerHTML = aboutPage.value;
        }else if (anterior == 2) {
            buttomList[1].innerHTML = projectPage.value;
        }else if (anterior == 3) {
            buttomList[2].innerHTML = contactPage.value;
        }

        if (capturaContexto === 'About') {
            if (anterior != 1) {
                html.setAttribute('data-contexto', capturaContexto);
                buttomList[0].innerHTML = home;
                buttomList[1].innerHTML = projectsButtom.value;
                buttomList[2].innerHTML = contactsButtom.value;

                homePage.classList.add('hidden');
                projectPage.classList.add('hidden');
                contactPage.classList.add('hidden');
                pageList[1].classList.remove('hidden');        
                
                anterior = 1;
            }else if (anterior == 1) {
                html.setAttribute('data-contexto', home);
                buttomList[0].innerHTML = aboutButtom.value;
                buttomList[1].innerHTML = projectsButtom.value;
                buttomList[2].innerHTML = contactsButtom.value;

                homePage.classList.remove('hidden');
                projectPage.classList.add('hidden');
                contactPage.classList.add('hidden');
                pageList[1].classList.add('hidden');        
                
                anterior = 0;
            }
        }else if (capturaContexto === 'Projects') {
            if (anterior != 2) {
                anterior = 2;

                html.setAttribute('data-contexto', capturaContexto);
                buttomList[0].innerHTML = aboutButtom.value;
                buttomList[1].innerHTML = home;
                buttomList[2].innerHTML = contactsButtom.value;
    
                homePage.classList.add('hidden');
                aboutPage.classList.add('hidden');
                contactPage.classList.add('hidden');
                pageList[anterior].classList.remove('hidden');  

            }else if (anterior == 2) {
                html.setAttribute('data-contexto', home);
                buttomList[0].innerHTML = aboutButtom.value;
                buttomList[1].innerHTML = projectsButtom.value;
                buttomList[2].innerHTML = contactsButtom.value;

                homePage.classList.remove('hidden');
                aboutPage.classList.add('hidden');
                contactPage.classList.add('hidden');
                pageList[anterior].classList.add('hidden');  

                anterior = 0;
            }
        }else if (capturaContexto === 'Contacts') {
            if (anterior != 3) {
                anterior = 3;

                html.setAttribute('data-contexto', capturaContexto);
                buttomList[0].innerHTML = aboutButtom.value;
                buttomList[1].innerHTML = projectsButtom.value;
                buttomList[2].innerHTML = home;

                homePage.classList.add('hidden');
                aboutPage.classList.add('hidden');
                projectPage.classList.add('hidden');
                pageList[anterior].classList.remove('hidden');  

            }else if (anterior == 3) {
                html.setAttribute('data-contexto', home);
                buttomList[0].innerHTML = aboutButtom.value;
                buttomList[1].innerHTML = projectsButtom.value;
                buttomList[2].innerHTML = contactsButtom.value;

                homePage.classList.remove('hidden');
                aboutPage.classList.add('hidden');
                projectPage.classList.add('hidden');
                pageList[anterior].classList.add('hidden'); 

                anterior = 0;
            }
        }
    })
})