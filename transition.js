const html = document.querySelector("html");
const buttons = {
    home: "Home",
    about: document.querySelector("#buttom-about"),
    projects: document.querySelector("#buttom-projects"),
    contacts: document.querySelector("#buttom-contacts")
};
const About = document.querySelector("#pageAbout");
const Projects = document.querySelector("#pageProject");
const Contacts = document.querySelector("#pageContact");

const pages = {
    home: document.querySelector("#pageHome"),
    about: document.querySelector("#pageAbout"),
    projects: document.querySelector("#pageProject"),
    contacts: document.querySelector("#pageContact")
};

let currentPage = "home";
let anterior = "home";
const allButtons = document.querySelectorAll(".buttom");
const allPages = document.querySelectorAll(".pages");

//                                                                                 |
//preciso estudar essa extrutura pra saber o q a ia resumiu, pq resumiu muito kkkj |
const updateDisplay = (context) => {                                      /* <-----+   */
    html.setAttribute('data-contexto', context);                 
    Object.keys(pages).forEach(key => pages[key].classList.add('hidden'));
    pages[context].classList.remove('hidden');
};

allButtons.forEach(button => {
    button.addEventListener('click', () => {
        const context = button.value.toLowerCase();        
        if (currentPage !== context) {
            currentPage = context;
            updateDisplay(context);  
            button.innerHTML = `Home`;
            
        } else {
            currentPage = "home";
            updateDisplay("home");
            button.innerHTML = context.charAt(0).toUpperCase() + context.slice(1).toLowerCase();
        }

        //preciso que os "home" mudem de lugr de acordo com o ultimo botão clicado!!!

        /*if (anterior === "about") {
            console.log("Teste")
            buttons['about'].innerHTML = `About`;
        }else if (anterior === "projects") {
            buttons[1].innerHTML = `About`
        }else if (anterior === "contacts") {
            buttons[2].innerHTML = `About`
        }*/
        
        return anterior = context; 
    });
});

/***//***//***//***//***//***//***//***//***//***//***//***//***//***//***//***//***//***//***//***//***//***//***//***//***//***//***//***/

/*const html = document.querySelector("html");

const homeButtom = "Home";
const aboutButtom = document.querySelector("#buttom-about");
const projectsButtom = document.querySelector("#buttom-projects");
const contactsButtom = document.querySelector("#buttom-contacts");

const pageList = document.querySelectorAll(".pages"); 
const homePage = document.querySelector("#pageHome");
const aboutPage = document.querySelector("#pageAbout");
const projectPage = document.querySelector("#pageProject");
const contactPage = document.querySelector("#pageContact");

let anterior = 0;
const capturaContexto = '';
const home = 'Home';
let ultimoButtom;

const buttomList = document.querySelectorAll(".buttom");
const listaDosButtom = Array.from(buttomList);
const listPage = Array.from(pageList);

listaDosButtom.forEach(function (botao) {
    botao.addEventListener('click', function(capturaContexto) {
        
        capturaContexto = botao.value;
        ultimaPage = listPage.findIndex(p => p === capturaContexto.value);

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
})*/