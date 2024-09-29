/*aqui vou programar a descrição*/
const sites = document.querySelectorAll(".swiper-img");
const capturarSite = Array.from(sites);

const descricao = document.querySelector(".swiper-descricao");
const texto = document.querySelector(".descricao-conteudo");

const acesso = document.querySelector("#acesso");

/*preciso separar os itens*/
capturarSite.forEach(function(site) {
    site.addEventListener('click', function() {

      // Acessa o comprimento do array de botões
      descricao.classList.remove("hidden");
      const comprimento = site;
      const siteSelecionado = capturarSite.findIndex(s => s === comprimento);
      if (siteSelecionado == 0) {
        acesso.setAttribute("href", "https://projeto-alura02-alura-plus.vercel.app/index.html");
        texto.innerHTML = `
        Alura+ e um teste de estudo focado no HTML5, onde criei para praticar a oganização de objetos do site, e sua adapação ao tamanho da imagem
        `
      }else if (siteSelecionado == 1) {
        acesso.setAttribute("href", "https://projeto-alura03-alura-books.vercel.app/index.html");
        texto.innerHTML = `
        AluraBooks, usei para aprender sobre tecnologia API, chamado, swiper, uma tecnologia que permite deslizar itens de um lado a outro
        `
      }else if (siteSelecionado == 2) {
        acesso.setAttribute("href", "https://projeto-alura01-alura-portifolio.vercel.app/index.html");
        texto.innerHTML = `
        AluraPortifolio foi meu primeiro projeto, para praticar HTML5, n tem muito do que falar a n ser q ai aprendi sobre display
        `
      }else if (siteSelecionado == 3) {
        acesso.setAttribute("href", "https://alura-js-05-alura-books.vercel.app/index.html");
        texto.innerHTML = `
        AluraBooksJS e uma atualização da AluraBooks anterior, com uma logica de estoque e filtros, para separar por preço, e mostrar os produtos q acabaram
        `
      }else if (siteSelecionado == 4) {
        acesso.setAttribute("href", "https://alura-js-02-fokus.vercel.app/index.html");
        texto.innerHTML = `
        Fokus e um webApp que criei para organizar o tempo de trabalho e organizar as tarefas, atravez de sistemas de cronometragem de tempo, e audios musicais mais calmos para ajudar no fokus
        `
      }else if (siteSelecionado == 5) {
        acesso.setAttribute("href", "https://alura-js-03-numero-secreto.vercel.app/index.html");
        texto.innerHTML = `
        GameNumero, Esse sistema eu criei para testar a logia de numeros aleatorios, sendo um site interativo pela voz, ele lhe oferece diversas chances de dizer um numero, ate voce acertar, claro, tudo isso por comando de voz
        `
      }else if (siteSelecionado == 6) {
        acesso.setAttribute("href", "https://alura-js-07-monibank-main.vercel.app/pages/abrir-conta-form.html");
        texto.innerHTML = `
        MoneyBank foi uma simulação de banco para teinar a logica de salvamento em sua memoria, as informações introduzidas no formulario na area de criar uma conta
        `
      }else if (siteSelecionado == 7) {
        acesso.setAttribute("href", "https://numero-secreto02-treino.vercel.app/index.html");
        texto.innerHTML = `
        NumeroSecreto e a mesma ideia do GameNumero, so que atualizado, com sistema de dublagem por IA
        `
      }else if (siteSelecionado == 8) {
        acesso.setAttribute("href", "https://numero-secreto02-treino.vercel.app/index.html");
        texto.innerHTML = `
        Piano, ja faz juz ao seu nome, funciona com uma logica de percorre todos os botões e uma velocidade gigantesca, assim fazendo funcionar todas as teclas com pouquisimas linhas de codigo
        `
      }
    });
  });