/*aqui vou programar a descrição*/
const sites = document.querySelectorAll(".swiper-img");
const capturarSite = Array.from(sites);

const descricao = document.querySelector(".swiper-descricao");
const texto = document.querySelector(".descricao-conteudo");

/*preciso separar os itens*/
capturarSite.forEach(function(site) {
    site.addEventListener('click', function() {
      // Acessa o comprimento do array de botões
      descricao.classList.remove("hidden");
      const comprimento = site;
      const siteSelecionado = capturarSite.findIndex(s => s === comprimento);
      if (siteSelecionado == 0) {
        texto.innerHTML = `
        Alura+ e um teste de estudo focado no HTML5, onde criei para praticar a oganização de objetos do site, e sua adapação ao tamanho da imagem
        `
      }else if (siteSelecionado == 1) {
        texto.innerHTML = `
        AluraBooks, usei para aprender sobre tecnologia API, chamado, swiper, uma tecnologia que permite deslizar itens de um lado a outro
        `
      }else if (siteSelecionado == 2) {
        texto.innerHTML = `
        AluraPortifolio foi meu primeiro projeto, para praticar HTML5, n tem muito do que falar a n ser q ai aprendi sobre display
        `
      }else if (siteSelecionado == 3) {
        texto.innerHTML = `
        AluraBooksJS e uma atualização da AluraBooks anterior, com uma logica de estoque e filtros, para separar por preço, e mostrar os produtos q acabaram
        `
      }else if (siteSelecionado == 4) {
        texto.innerHTML = `
        Fokus e um webApp que criei para organizar o tempo de trabalho e organizar as tarefas, atravez de sistemas de cronometragem de tempo, e audios musicais mais calmos para ajudar no fokus
        `
      }else if (siteSelecionado == 5) {
        texto.innerHTML = `
        GameNumero, Esse sistema eu criei para testar a logia de numeros aleatorios, sendo um site interativo pela voz, ele lhe oferece diversas chances de dizer um numero, ate voce acertar, claro, tudo isso por comando de voz
        `
      }else if (siteSelecionado == 6) {
        texto.innerHTML = `
        MoneyBank foi uma simulação de banco para teinar a logica de salvamento em sua memoria, as informações introduzidas no formulario na area de criar uma conta
        `
      }else if (siteSelecionado == 7) {
        texto.innerHTML = `
        NumeroSecreto e a mesma ideia do GameNumero, so que atualizado, com sistema de dublagem por IA
        `
      }else if (siteSelecionado == 8) {
        texto.innerHTML = `
        Piano, ja faz juz ao seu nome, funciona com uma logica de percorre todos os botões e uma velocidade gigantesca, assim fazendo funcionar todas as teclas com pouquisimas linhas de codigo
        `
      }
    });
  });