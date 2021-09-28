const elementoBotao = document.querySelector("#btn-texto"); 
const elementoImagem = document.querySelector("#img1");
const titulo = document.querySelector("#titulo");
const texto = document.querySelector("#texto");

elementoBotao.addEventListener("click", function(){
    if(elementoBotao.value == "1"){
        elementoImagem.src = "2.jpg";
        elementoBotao.value = "2";
        titulo.innerText = "2016-2018: Michel Temer";
        texto.innerText = "Como vice-presidente, tomou posse após a saída da presidenta Dilma do poder após desavenças políticas com a mesma. Durante seu governo o Brasil continuou em uma crise econômica e política, vendo o nível do seu desemprego aumentar cada vez mais. Em 2017 enquanto ainda estava com o mandato em curso, chegou a ser indiciado por corrupção pela Operação Lava Jato. Sua prisão foi decretada em 2019.";
    } else if(elementoBotao.value == "2"){
        elementoImagem.src = "3.jpg";
        elementoBotao.value = "3";
        titulo.innerText = "2011-2016: Dilma Roussef";
        texto.innerText = "Com um currículo extenso na luta contra o governo militar, vai ser a sucessora do presidente Lula e a primeira mulher a ser eleita no Brasil. Alterou o protocolo ao escolher ser chamada de “presidenta”. Vai seguir a linha do ex-presidente e dar continuidade a políticas que visavam beneficiar a camada mais pobre da população. Ao mesmo tempo, também vai colocar em prática uma série concessões à iniciativa privada, como de estradas, aeropostos e etc.. A partir de 2013, Dilma viu a sua popularidade despencar com uma série de manifestações gigantescas que deixavam clara a insatisfação popular com a corrupção e a crise econômica em que o país se encontrava. Ainda assim, conseguiu se reeleger em 2014 no meio de uma disputa eleitoral tensa. Com pouca governabilidade e sem muito apoio da massa populacional, Dilma vai sofre um processo de impeachment em 2016, sendo acusada de crime de responsabilidade fiscal.";
    } else if(elementoBotao.value == "3"){
        elementoImagem.src = "4.jpg";
        elementoBotao.value = "4";
        titulo.innerText = "2003-2011: Luís Inácio Lula da Silva";
        texto.innerText = "Após três derrotas sucessivas a corrida eleitoral, o operário e sindicalista consegue se eleger com um discurso de caráter mais moderado. Seu governo vai se caracterizar por uma estabilidade e crescimento econômico que conseguiu diminuir a dívida externa do país. Propôs medidas que diminuíssem os níveis de pobreza do país e pôs em pratica uma política de expansão educacional. Deu continuidade ao processo de melhoria da política diplomática do país. Entretanto, seu governo também foi marcado por uma série de escândalos sobre corrupção envolvendo seu partido e alguns aliados, como o Mensalão. Em 2018 o próprio ex-presidente foi condenado por corrupção passiva e lavagem de dinheiro.";
    } else if(elementoBotao.value == "4"){
        elementoImagem.src = "5.jpg";
        elementoBotao.value = "5";
        titulo.innerText = "1995-2003: Fernando Henrique Cardoso";
        texto.innerText = "Com prestigio devido ao sucesso do Plano Real, FHC é eleito logo no primeiro turno. Foi o primeiro presidente reeleito para um segundo mandato. Deu continuidade as privatizações, promoveu um corte de gastos nas contas públicas e implantou no Brasil o trabalho terceirizado. Melhorou e ampliou as relações diplomáticas brasileiras. Já no seu segundo mandato, o país vai passar por uma forte crise econômica e uma crise energética.";
    } else if(elementoBotao.value == "5"){
        elementoImagem.src = "6.jpg";
        elementoBotao.value = "6";
        titulo.innerText = "1992-1995: Itamar Franco";
        texto.innerText = "Assumiu de forma interina durante o afastamento do então presidente, sendo confirmado após a renúncia de Collor. Durante seu mandato foi instalado o Plano Real e a criação da Unidade Real de Valor, que vai dar origem a nova moeda brasileira, o real. Junto com seu ministro da fazendo, Fernando Henrique Cardoso, consegui controlar a inflação no país. Em 1993 realizou o plebiscito que decidiria qual seria o sistema de governo do Brasil, tendo vencido o presidencialismo.";
    } else if(elementoBotao.value == "6"){
        elementoImagem.src = "7.jpg";
        elementoBotao.value = "7";
        titulo.innerText = "1990- 1992: Fernando Collor";
        texto.innerText = "Com uma forte campanha televisiva a promessa de pôr fim à corrupção, Collor foi eleito através de votação direta. Representante do neoliberalismo iniciou um processo de privatizações e de diminuição da taxação na importação, o que levou a uma entrada massiva de produtos importados. Com uma inflação muito alta, lançou o Plano Brasil Novo, conhecido como Plano Collor. Substitui o Cruzado Novo pelo retorno do Cruzeiro. Através do Plano Collor confiscou a poupança da população, causando uma revolta generalizada. No segundo ano de governo, despontam uma série de denúncias sobre corrupção e esquemas ilegais que levaram ao seu impeachment.";
    } else if(elementoBotao.value == "7"){
        elementoImagem.src = "8.jpg";
        elementoBotao.value = "8";
        titulo.innerText = "1985- 1990: José Sarney";
        texto.innerText = "Tomou posse como presidente interino durante o período hospitalar de Tancredo, sendo confirmado presidente do Brasil após a morte do mesmo. Deu continuidade ao processo de democratização no país. Precisou lidar com uma grave crise econômica e com uma inflação extremamente alta. Criou o Plano Cruzado como uma tentativa de estabilizar a economia brasileira. Durante seu mandato também foi criada a Constituição de 1988, conhecida como a Constituição Cidadã e que vigora até hoje dentro do país. Em 2016, o ex-presidente foi acusado de corrupção pela operação Lava-Jato.";
    } else if(elementoBotao.value == "8"){
        elementoImagem.src = "9.jpg";
        elementoBotao.value = "9";
        titulo.innerText = "1985: Tancredo Neves";
        texto.innerText = "Embora o movimento pelas eleições diretas tenha se difundido pelo país, não logrou sucesso e a próxima eleição ainda foi indireta com a eleição de Tancredo Neves. Apesar de eleito, o primeiro presidente civil após o período militar não toma posse do cargo porque é internado às pressas e morreu logo em seguida.";
    } else if(elementoBotao.value == "9"){
        elementoImagem.src = "1.jpg";
        elementoBotao.value = "1";
        titulo.innerText = "2019: Jair Messias Bolsonaro";
        texto.innerText = "Em uma eleição turbulenta marcada pelas fakenews e pelo acirramento das rivalidades politicas, aonde chegou a sofrer um atentado, Bolsonaro se elege com discursos que exaltavam o período da ditadura militar. Até o presente momento, o presidente eleito e sua base governamental tem se envolvido em uma série de polêmicas, como: a supressão de diversos ministérios e a acusação de que ONG’s teriam colocado fogo na Amazônia.";
    }
});