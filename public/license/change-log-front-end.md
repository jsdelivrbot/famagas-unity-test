# RELATORIO DE ALTERAÇÕES, ADIÇÕES DE NOVAS FUNÇÕES & CORREÇÕES DE BUGS.
Todas as alterações notáveis no projeto; 
Contratado pelo Grupo FamaGás serão documentadas neste arquivo!

## [0.0.1] - 22/05/2017.
### Preparando os módulos principais para o pleno funcionamento da aplicação.
- Modulos do Node.js configurados com sucesso.
- Electron adicionado e configurado.
- MaterializeCSS adicionado e configurado.
- Passport adicionado e configurado.
- Session and token expiration.
- Express adicionado e configurado.
- MongoDB adicionado e configurado.
- Mysql adicionado e configurado.
- Mongoose adicionado e configurado.
- Jquery adicionado e configurado.

## [0.0.2] - 22/05/2017.
### Definindo as estruturas que receberão os scripts da aplicação.
- Criado a estrutura principal da área de login.
- Fixado erros da fonte do MaterializeCSS mediante a fins estéticos, ficando
agora as fontes principais: Roboto & Sans-serif.
- Fixado os alinhamentos do body para a estrutura receber o background scan-lines.
- Criado a paleta de cores em material design para área de login sendo elas: como
pŕimarias #0075bc - sombras #0056bc & secúndaria #ffc107.
- Criado estrutura principal de 3 containers para receber os módulos de autenticação.
- Fixado modelo da estrutura em row seguido para cols6 a cols12.
- Adicionado estrutura de logotipo do contratante para fins estéticos e comercial.
- Fixado os alinhamentos da logo na estrutura dos container.
- Adicionado os controladores do formulário para autenticação segura do úsuario.
- Adicionado o modulo que permite os úsuario fazer autenticação utilizando as API do
Google & Facebook, mantendo um ambiente facil para todas as classes.

## [0.0.3] - 24/05/2017.
### Definindo os caminhos para os estilos.
- Sass adicionado e configurado com sucesso.
- Definido o arquivo principal para processamento do Sass: main.scss
- Animate adicionado e configurado com sucesso.
- Definido a pasta static/sass como diretório padrão para hospedagem de estilos.
- Alterado os estados de tamanho, altura, cor e espessura das fontes principais.
- Criado a folha de estilo prímaria da área de login: login.css

## [0.0.4] - 26/05/2017.
### Correação de bugs e atualizações de bloco.
- Adicionado o módulo que permite o funcionamento pleno de todos os scripts adicionados
na cabeça da aplicação.
- Adicionado os estilos para o modulo de autenticação.
- Adicionado os estilos para os botões, text, hover, focus e activate.
- Adicionado bloco de complemento a interface do úsuario, gerando uma visão mais intuitiva.
- Fixado os erros de alinhamentos e cores ao bloco.

## [0.0.6] - 29/05/2017.
### Nova área de interação entre UI & UX.
- Remodulaçao do video-background para material gradient, a proposta anterior estava pesada
e polúida, para melhor coomprenção do úsuario e analistas da esquipe que estarão perante a
interação necessária entre troca a perfis para efetuar com sucesso a autenticação, escolhemos
um visual mais dínamico e menos cansativo para todos os que irão utilizar a aplicação.
- Adicionado estrutura de nóticias atrelado ao complemento do UI, para melhor satisfação do
envolvido.
- Adicionado o módulo de nóticias.
- Configurado o modulo de nóticias e alterado seus estilos.
- Adicionado campos de checkbox para expansão dínamica do módulo.
- Adicionado estilos e animações para checkbox e labels.
- Fixado erros de alinhamentos e animações atrelado ao complemento do UI para criar
um visual limpo.
- Adicionado estilos para fixação das animações e alinhamentos das de nóticias.
- Adicionado script para funcionamento do módulo de nóticias.

## [0.0.7] - 30/05/2017.
### Reconfigurando os campos de controle de úsuario, senha & complemento visual.
- Adicionado o header de "Bem-vindo(a)" nos controle de autenticação, visando uma maior
simpatia com o úsuario.
- Alterado as classes na folha de estilos login,css para fins de esterização do código.
- Removido algumas classes inúteis do modelo-de-fonte,css
- Fixado os erros de altura e margens do background.
- Fixado os erros de alinhamento do modulo de login para o canto inferior.
- Adicionado novas classes para diferençiações dos blocos de login. Sendo eles:
logo-do-contratante, formulario-de-login & autenticar-com-api.
- Adicionado alinhamento do módulo de login nos cantos superior esquerdo e direito.
- Adicionado novos container, row & coluna para o complemento visual do UI.
- Fixado erros de estilo do complemento visual do UI.
- Fixado erros do row-fluid que impossibilitava o alinhamento pleno do complemento visual.
- Fixado erros de alinhamento dos controle de úsuario e senha.
- Remodelado altura do complemento visual de 150px a 175px.
- Fixado erros de altura de margem do complemento visual de -294 para -248px.
- Fixado erros de altura da coluna de controle de login e senha de 77px para 32px.
- Fixado nome da classe de modulo-login para modulo-de-login.
- Adicionado novos estilo para letras de úsuario e senha,

## [0.0.8] - 31/05/2017.
### Adicionando novas funcionalidades.
- Adicionado novos estilos para botões de expansão.
- Fixado erros de row do módulo de nóticias, sendo assim as margem da esquerda e
direita foram definidos para -15px.
- Adicionado novas animações e script para estrutura das nóticias.
- Fixado erros de estilo do módulo de nóticias.

## [0.0.9] - 01/06/2017.
### Ajustando status do servidor.
- Adicionado novas animações de pulso para status do servidor.
- Adicionado novos alinhamentos dinâmicos para status do servidor.
- Adicionado novos estilos para status do servidor gerando uma visualização mais intuitiva
e simples de leitura para úsuario.
- Fixado erros de perspectiva da interface de úsuario.
- Adicionado uma borda no topo do controlador de dados do úsuario.
- Fixado erros de perspectiva nas bordas do módulo da logo do contratante & autenticação
via API.
- Fixado erros de alinhamento e background do controlador de dados do úsuario.
- Adicionado novos campos de cache para aúxilio de informações sobre a conta do úsuario.
- Adicionado elemento dínamico de transição & show/hide do campo de cache de informações
sobre a conta do úsuario para evitar poluição visual da página.
- Adicionado nova versão de logo do contratante.
- Fixado erros de cores dos botões de autenticação via API.
- Fixado erros de cores dos icones de autenticação via API.
- Preparando aplicação para fazer transição de PRE-ALPHA para BETA.

## [0.1.0] - 06/06/2017.
### Apresentando novos conceitos e remasterização de elementos da interface de úsuario.
- Fixado erros de elementos da distribuição PRE-ALPHA, aplicação pronta para a distruição BETA.
- Remodelado arquitetura de estilos e scripts baseado minimalismo utilizando MUI Framework.
- Remodelado sistema de controles de fórmulário para visual minimalista.
- Adicionado sistema de previsão de tempo baseado em geolocalização buscando uma ligação
mais amígavel entre sistema x humano.
- Adicionado background randómico baseado em geolocalização do úsuario.
- Fixado ajustes de pattern do background para se adequar melhor ao background de cada cidade.
- Remodelado primeiro bloco de autenticação do úsuario para nova função de login via qr-code mobile.
- Adicionado novo módulo de funções de extendidas contendo logo do contratante, nome da loja,
dados de previsão do tempo via geo-localização e divisor de conteúdo.
- Remodelação do modelo de lançamentos de versões oficias e modificações visando clareza maior para
os lançamentos oficiais e desenvolvedores na hora da leitura de versões e modificações então:
reservado a classe y.0 apenas para grandes atualizações e reservando as classes y.0.x.0 apenas para
pequenas adições e modificações, evitando poluição excessiva de notas de atualizações.

## [0.1.0.1] - 07/06/2017.
### Melhoramento do módulo de previsão do tempo e extensão das versões oficias.
- Remodelado modelo de lançamento de versões oficias reservando apenas as versões x.0 apenas para
transições importantes de elementos e funcionalidades novas.
- Adicionado novas seção dentro do card de previsão da cidade.
- Fixado erros de win.load do script de previsão do tempo.
- Fixado erros da DarkSky API.
- Fixado erros de estilos do card de previsão da cidade.

## [0.1.0.2] - 09/06/2017.
### Fixando erros e adicionando novas funcionalidades.
- Adicionado sub-header de ajuda de úsuario com login.
- Adicionado novos botões de redirecionamento para suporte e documentação.
- Adicionado novos estilos para divisor de conteúdo.
- Fixado erros de alinhamento do divisor de conteúdo.
- Fixado erros de alinhamento do status do servidor alinhado dinamicamente com módulo de previsão do
tempo e login via qr-code.
- Reformulado sistema de complemento da user-interface.

## [0.1.0.3] - 10/06/2017.
### Fixando erros e adicionando novas funcionalidades.
- Adicionado Slide.JS
- Adicionado funções para Slide.js
- Adicionado slide no módulo de login.
- Fixado erros de alinhamentos.
- Adicionado novos estilos para slide.
- Adicionado novos anúncios para o slide.

## [0.1.0.4] - 12/06/2017.
### Fixando erros e adicionando novas funcionalidades.
- Adicionado novo módulo de nóticias baseado em jquery.
- Adicionado novos estilos para módulo de nóticias.
- Fixado erros de alinhamento do módulo de nóticias.
- Fixado erros escala da aplicação. 

## [0.1.0.5] - 23/06/2017.
### Fixando erros e adicionando novas funcionalidades.
- Remodelado slide do primeiro bloco para o slide de complemento ao UI.
- Fixado erros de estilos do primeiro bloco.
- Fixado erros de alinhamento do primeiro bloco.
- Adicionado módulo de nóticias via RSS no slide de complemento ao UI.
- Adicionado RSS das organizações G1, Investing & Epoca.
- Fixado erros de alinhamento do RSS.
- Adicionado novos estilos para RSS. 
- Adicionado módulo de boas-vindas ao úsuario a fim de gerar mais interatividade com o úsuario.
- Remodelado e movido para o primeiro bloco principal logo do contratnte.
- Fixado erros conflitantes de estilos da logo do contratante.
- Adicionado novas instruções para login via aplicação mobile.
- Fixado erros de alinhamento das instruções para login via aplicação mobile.
- Adicionado detalhes para login via aplicação mobile.
- Fixado erros de alinhamento dos detalhes para login via aplicação mobile.
- Adicionado botão para download do aplicativo mobile.

## [0.1.5.5] - 04/07/2017.
### Configurando back-end e migrando para versão 1.5.5
- Adicionado distribuição para aplicação receber novos módulos e recursos novos.
- Adicionado sistema de conexão NOSQL utilizando a infra-estrutura de MONGO DB.
- Adicionado módulo de conexão com MLAB.
- Adicionado sistema de encriptação de dados via BCRYPT.
- Adicionado templates de setup, login & log-out.
- Adicionado camadas renderizadas dos templates.
- Adicionado novos modulos de autenticação via passport & credibilidade de acessos baseado em sessões.
- Adicionado módulo de MATERIALIZECSS para o painel global de funções.
- Adicionado compatibilidade ao nodejs de acessar via brownser toda aplicação.
- Adicionado controle de licença e id para úsuarios.
- Adicionado novos componentes para aplicação prímaria dos operadores.
- Fixado conflitos de fontes com a versão anterior.
- Fixado erros de estilos do MATERIALIZECSS.
- Fixado erros da biblioteca de icones do MATERIALIZECSS.   
- Adicionado novos componentes para index da aplicação
- Adicionado módulo MIDDLEWARE.
- Adicionado módulo de ROUTES.
- Fixado erros de tabela entre back-end x mLab.
- Fixado erros de estilo na index da aplicação.

## [0.1.5.6] - 06/07/2017.
### Fixando erros e adicionando novos templates de cadastro.
- Adicionado novos botões de suporte, fullscreen & notificações ao navbar.
- Adicionado hamburger button ao nav-bar para abrir side-nav.
- Fixado erros de alinhamento do hamburger button com navbar.
- Adicionado side-nav para template index.
- Adicionado card profile para side-nav.
- Adicionado novos estilos para card profile.
- Fixado erros de alinhamento do cover profile no side-nav.
- Fixado erros de navegação entre janelas do login para o painel.
- Adicionado novas navegação collapse ao side-nav.
- Adicionado icones para navegação collapse ao side-nav.
- Adicionado novo template product.html para registro de um novo produto ao estoque.
- Adicionado nova folha de estilo para template product.html
- Adicionado icones para input form do template product.html
- Adicionado novos estilos para input form do template product.html
- Adicionado novos input form para preenchimento das informações para registro de um novo produto ao estoque.
- Adicionado divisor para nova área que irá conter informções extendidas para cadastro de um novo produto.
- Adicionado novo botão para ir a conta do úsuario ao navbar.
- Fixado erros de animações javascript do MATERIALIZECSS.
- Adicionado floating button para novas ações; rascunho e salvar na area de cadastro de um novo produto.

## [0.2.0.0] - 10/07/2017.
### Migrando aplicação para versão 2.0.0 e ampliando rotas do sistema de grafos alinhado a arquitetura NEW-SQL.
- Fixado erros de estilo do side-nav.
- Fixado erros de sub-menu & menu do side-nav.
- Adicionado novos template product para server-side.
- Adicionado modelo relacional para armazenamento dos módulos contábil, financeiro, estoque & cadastro buscando 
maior flexibelidade e consistência na entrega dos arquivos.
- Adicionado módulos de conexão NEWSQL utilizando a infra-estrutura de MYSQL.
- Adicionado módulos para indexamento de requisições enviada pelo cliente.
- Fixado erros dos botão para efetuar venda e salvar como rascunho.
- Fixado erros de exibição de falha ao ser adicionado uma nova venda estoque.
- Fixado erros de exibição de sucesso ao ser adicionado uma nova venda estoque.
- Adicionado novo dialogo que ira gerar um recibo ao ser adicionado uma nova venda estoque.
- Adicionado novas rotas de arquivos para back-end da aplicação.
- Adicionado redirecionamento side-nav para as rotas de seções da aplicação.
- Fixado erros de registro ao banco de dados MYSQL.
- Adicionado novos templates de adição de nova venda ao estoque sell.html
- Adicionado redirecionamento de rotas para template sell.html no side-nav.
- Adicionado card-info para template sell.html
- Adicionado botões de redirecionamento "VOLTAR PARA INICIO" & "NOVA VENDA" para template product.html
- Fixado erros de estilos e alinhamento do card-info.
- Adicionado POST & UPDATE para o banco de dados de produção ao template product.html 

## [0.2.0.5] - 29/07/2017.
### Adicionando novos custom dialog, ampliando rotas no banco de dados & simplificando visual.
- Adicionado estilos para recibos do sweet-alert2 em assets/mods.
- Adicionado geramento de pdf para impressão do recibo.
- Adicionado novas rotas de seções para os botões do template sell-sucess.
- Adicionado novas rotas de seções para os botões do template sell-error.
- Adicionado novos modal para exibição de erro ao efetuar uma venda ao estoque.
- Adicionado botões de redirecionamento para as seções "ADICIONAR NOVA VENDA" & "VOLTAR PARA INICIO".
- Adicionado novos modelos de input-field baseado em ações do úsuario.
- Adicionado novas visualizações após clique do botão nas ações "Sim" & "Não".
- Adicionado novos templates de adição de product.html ao estoque.
- Adicionado redirecionamento de rotas para template product.html no side-nav.
- Adicionado card-info para template product.html
- Adicionado novos modelos de input-field baseado em ações do úsuario.
- Adicionado novas visualizações após clique do botão nas ações "Sim" & "Não".
- Fixado erros de alinhamento e visual do template product.html
- Adicionado sub-section buttons do template product.html baseado em ações ou requerimentos.
- Adicionado novas rotas de pre-loading de input-field do template product.html visando maior desempenho e pouco consumo de bandawidth.
- Adicionado divisores de linhas para um visual mais dinámico e intuitivo.
- Adicionado nova scroll-bar para toda aplicação.
- Fixado erros de estilo, alinhamento & cores do scroll-bar.
- Fixado erros de alinhamento dos select-inout do template product.html
- Adicionado novas ações baseado em ações do úsuario para termino do fórulario.
- Fixado erros de alinhamento dos header financeiro, comercial, fiscal & fluxo de caixa do template product.html
- Adicionado novos divisores dínamicos baseado em ações do úsuario.
- Adicionado novos divisores para botão de cadastro e rascunho do template product.html
- SELECT2 adicionado e configurado.
- Adicionado novos template material para os select-search-box visando maior identidade visual com a empresa contratada.

## [0.2.0.8] - 08/08/2017.
### Adicionando novas interações, funcionalidades e modulos novos a templates.
- Fixado erros de routes em diversas pastas possibilitando maior organização dos arquivos back-end.
- Adicionado nova folha de estilo para template client.html
- Adicionado icones para input form do template client.html
- Adicionado novos estilos para input form do template client.html
- Adicionado novos textos de interação dos toast-help para template client.html
- Rainbow adicionado e configurado.
- Adicionado novas cores para rainbow-header #ffd045 & #3949ab.
- Fixado erros de alinhamento do rainbow-header com módulo de previsão tempo.
- JQUERY-MASK-PLUGIN adicionado e configurado.
- Adicionado mascaras de auto alinhamento de dados aos input-field do template client.html
- BuscarCEP adicionado e configurado.
- Adicionado novas interações de preenchimento automatico após operador digitar seu cep nos campos de endereço de entrega do cliente.
- Adicionado novas interações de preenchimento automatico após operador digitar seu cep nos campos de endereço de cobrança do cliente.
- Adicionado novos botões ao lado do endereço de entrega para facilitar a localização da rua do cliente a ser cadastrado.
- GoogleMapsAPI adicionado e configurado.
- Adicionado novos controles para GoogleMapsAPI.
- Adicionado novos marcadores váriaveis para modal do template client.html na seção endereço de entrega.
- Adicionado novas interações baseado em modal para os botões ao lado do endereço de entrega.
- Adicionado novos campos de search-box para modal do endereço de entrega visando uma procura personalizada personalizada para o operador.
- Adicionado novos botões ao modal de endereço de entrega PESQUISAR ENDEREÇO DIGITADO & COPIAR DADOS DO FÓRMULARIO.
- Adicionado novo modal-footer para endereço de entrega.
- Adicionado novo modal-footer para endereço de cobrança.
- Adicionado novos botões ao modal-footer do endereço de entrega FECHAR JANELA.
- Adicionado novos botões ao modal-footer do endereço de cobrança FECHAR JANELA.
- Adicionado novos input form para preenchimento das informações para registro de um novo produto ao estoque.
- Adicionado divisor para nova área que irá conter informções extendidas para cadastro de um novo produto.
- Adicionado novas interações de copia de informação do fórmulario de criação de cliente para modal de endereço de entrega.
- Adicionado novas interações de copia de informação do fórmulario de criação de cliente para modal de endereço de cobrança.

## [0.2.0.9] - 20/08/2017.
### Adicionando novos templates de recibos e fixando erros de procura de cliente, fornecedor, classe de produto, marcas e funcionalidades.
- SweetAlert2 adicionado e configurado.
- Adicionado novo template provider.html para registro de um novo produto ao estoque.
- Adicionado nova folha de estilo para template provider.html
- Adicionado icones para input form do template provider.html
- Adicionado novos estilos para input form do template provider.html
- Adicionado novos textos de interação dos toast-help para template provider.html
- Adicionado novos custom-dialog de resposta de erro, sucesso & draft para registro de uma nova venda ao banco de dados.
- Adicionado custom-dialog sell-sucess que ira gerar um recibo ao ser adicionado uma nova venda ao estoque.
- Adicionado novas rotas de seções para os botões do custom-dialog sell-sucess.
- Adicionado novas rotas de seções para os botões do custom-dialog sell-error.
- Adicionado novos custom-dialog para exibição de erro ao efetuar uma nova venda ao estoque.
- Adicionado estilos para recibos do sell-sucess.
- Adicionado geramento de pdf para impressão do recibo.
- Adicionado botões de redirecionamento para as seções "ADICIONAR NOVO PRODUTO" & "VOLTAR PARA INICIO".
- Adicionado novas rotas de seções para os botões do custom-dialog sell-sucess.
- Adicionado novas rotas de seções para os botões do custom-dialog sell-error.
- Adicionado novos custom-dialog para exibição de erro ao efetuar uma adição de uma nova venda ao estoque.
- Fixado erros de routes em diversas pastas possibilitando maior organização dos arquivos back-end.
- Adicionado novos custom-dialog de resposta de erro, sucesso & draft para registro de um novo produto ao banco de dados.
- Adicionado custom-dialog product-sucess que ira gerar um recibo ao ser adicionado uma novo produto ao estoque.
- Adicionado novas rotas de seções para os botões do custom-dialog product-sucess.
- Adicionado novas rotas de seções para os botões do custom-dialog product-error.
- Adicionado novos custom-dialog para exibição de erro ao efetuar uma adição de produto ao estoque.
- Adicionado estilos para recibos do product-sucess.
- Adicionado geramento de pdf para impressão do recibo.
- Adicionado botões de redirecionamento para as seções "ADICIONAR NOVO PRODUTO" & "VOLTAR PARA INICIO".
- Adicionado novas rotas de seções para os botões do custom-dialog product-sucess.
- Adicionado novas rotas de seções para os botões do custom-dialog product-error.
- Adicionado novos custom-dialog para exibição de erro ao efetuar uma adição de produto ao estoque.
- Adicionado novos custom-dialog de resposta de erro, sucesso & draft para registro de um novo cliente ao banco de dados.
- Adicionado custom-dialog product-sucess que ira gerar um recibo ao ser adicionado uma novo cliente ao banco de dados.
- Adicionado novas rotas de seções para os botões do custom-dialog client-sucess.
- Adicionado novas rotas de seções para os botões do custom-dialog client-error.
- Adicionado novos custom-dialog para exibição de erro ao efetuar uma adição de cliente ao banco de dados.
- Adicionado estilos para recibos do client-sucess.
- Adicionado geramento de pdf para impressão do recibo.
- Adicionado botões de redirecionamento para as seções "ADICIONAR NOVO PRODUTO" & "VOLTAR PARA INICIO".
- Adicionado novas rotas de seções para os botões do custom-dialog client-sucess.
- Adicionado novas rotas de seções para os botões do custom-dialog client-error.
- Adicionado novos custom-dialog para exibição de erro ao efetuar uma adição de um novo cliente ao banco de dados.
- Adicionado novos custom-dialog de resposta de erro, sucesso & draft para registro de uma nova unidade de medida ao banco de dados.
- Adicionado custom-dialog product-sucess que ira gerar um recibo ao ser adicionado uma nova unidade de medida.
- Adicionado novas rotas de seções para os botões do custom-dialog unit-measurement-sucess.
- Adicionado novas rotas de seções para os botões do custom-dialog unit-measurement-error.
- Adicionado novos custom-dialog para exibição de erro ao efetuar uma adição de uma nova unidade de medida ao banco de dados.
- Adicionado estilos para recibos do unit-measurement-sucess.
- Adicionado geramento de pdf para impressão do recibo.
- Adicionado botões de redirecionamento para as seções "ADICIONAR NOVO PRODUTO" & "VOLTAR PARA INICIO".
- Adicionado novas rotas de seções para os botões do custom-dialog unit-measurement-sucess.
- Adicionado novas rotas de seções para os botões do custom-dialog unit-measurement-error.
- Adicionado novos custom-dialog para exibição de erro ao efetuar uma nova unidade de medida ao banco de dados.
- Adicionado novos custom-dialog de resposta de erro, sucesso & draft para registro de uma nova marca ao banco de dados.
- Adicionado custom-dialog product-sucess que ira gerar um recibo ao ser adicionado uma nova marca.
- Adicionado novas rotas de seções para os botões do custom-dialog brand-product-sucess.
- Adicionado novas rotas de seções para os botões do custom-dialog brand-product-error.
- Adicionado novos custom-dialog para exibição de erro ao efetuar uma adição de uma nova marca ao banco de dados.
- Adicionado estilos para recibos do brand-product-sucess.
- Adicionado geramento de pdf para impressão do recibo.
- Adicionado botões de redirecionamento para as seções "ADICIONAR NOVO PRODUTO" & "VOLTAR PARA INICIO".
- Adicionado novas rotas de seções para os botões do custom-dialog brand-product-sucess.
- Adicionado novas rotas de seções para os botões do custom-dialog brand-product-error.
- Adicionado novos custom-dialog para exibição de erro ao efetuar uma nova marca ao banco de dados.
- Adicionado novos custom-dialog de resposta de erro, sucesso & draft para registro de uma nova classe de produto ao banco de dados.
- Adicionado custom-dialog product-sucess que ira gerar um recibo ao ser adicionado uma nova classe de produto.
- Adicionado novas rotas de seções para os botões do custom-dialog class-product-sucess.
- Adicionado novas rotas de seções para os botões do custom-dialog class-product-error.
- Adicionado novos custom-dialog para exibição de erro ao efetuar uma adição de uma nova marca ao banco de dados.
- Adicionado estilos para recibos do class-product-sucess.
- Adicionado geramento de pdf para impressão do recibo.
- Adicionado botões de redirecionamento para as seções "ADICIONAR NOVO PRODUTO" & "VOLTAR PARA INICIO".
- Adicionado novas rotas de seções para os botões do custom-dialog class-product-sucess.
- Adicionado novas rotas de seções para os botões do custom-dialog class-product-error.
- Adicionado novos custom-dialog para exibição de erro ao efetuar uma nova classe ao banco de dados.
- Adicionado novos custom-dialog de resposta de erro, sucesso & draft para registro de um novo fornecedor ao banco de dados.
- Adicionado custom-dialog product-sucess que ira gerar um recibo ao ser adicionado uma novo fornecedor ao banco de dados.
- Adicionado novas rotas de seções para os botões do custom-dialog provider-sucess.
- Adicionado novas rotas de seções para os botões do custom-dialog provider-error.
- Adicionado novos custom-dialog para exibição de erro ao efetuar uma adição de fornecedor ao banco de dados.
- Adicionado estilos para recibos do provider-sucess.
- Adicionado geramento de pdf para impressão do recibo.
- Adicionado botões de redirecionamento para as seções "ADICIONAR NOVO PRODUTO" & "VOLTAR PARA INICIO".
- Adicionado novas rotas de seções para os botões do custom-dialog provider-sucess.
- Adicionado novas rotas de seções para os botões do custom-dialog provider-error.
- Adicionado novos custom-dialog para exibição de erro ao efetuar uma adição de um novo fornecedor ao banco de dados.

## [0.3.0.0] - 30/08/2017.
### Adicionando novos modulos de exibicação de dados via gráficos e melhorando a comunicação de dados entre back x front view.
- Fixado erros de versão do JQUERY que impossibilitava a exibição efetivo do JSON ao front-end-view.
- Fixado erros do AJAX ao retornar dados de unidade de medida, classe de produto e marca de produtos.
- Fixado erros de UX aos fórmularios globais agora todos devem ter icones em suas respectivas input, select, radio-button e etc...
- Fixado erros de head e body de todos os templates que impossibilitava retorno efetivo dos search ao banco de dados.
- Revertido sistema de decisão baseado em ações do úsuario no template product.html para os select direto buscando uma maior flexibilidade e carregamento da página.
- Adicionado DATEPICKER em todos os input de data de cadastro e alteração.
- Fixado erros de traduções ao DATEPICKER em PT-BR.
- Fixado erros de pre-loading devido a troca de versão do JQUERY.
- Fixado erros de modal e google-maps devido a troca de versão do JQUERY.
- ChartJS adicionado e configurado.
- Fixado novos fill-color e labels para ChartJS.
- Adicionado novo card de exibição de estoque em tempo real ao template index.html
- Adicionado novo card de exibição de vendas de ontem e antes de ontem em tempo real ao template index.html
- Adicionado paragrafo de exibição de retorno de ganhos do dia passado ao segundo card do template index.html
- Fixado erros de alinhamento dos novos card da primeira linha do template index.html
- Adicionado paragrafo de exibição de retorno de ganhos do dia passado baseado em porcentagem váriavel ao segundo card do template index.html
- Adicionado icones de down ou up para retorno de ganhos do dia passado baseado em porcentagem váriavel ao segundo card do template index.html
- Adicionado chart baseado no retorno de ganhos de dois dias atrás junto com a quantidade de produto vendidos ao segundo card do template index.html
- Fixado erros de alinhamento do chart em comparação ao footer do card.
- Fixado erros de U.X ao template login.html
- Remodelado todo conceito de login evitando sobre carga de informações ao iniciar aplicação.
- Remodelado todos os script do template login.html para diversas áreas da aplicação afim de distribuir a informação e não centralizar.
- Adicionado Fab-Button ao template login.html
- Adicionado Sub-Fab-Button para exibicação do modal de configurações.
- Adicionado Sub-Fab-Button para exibicação do modal de ajuda e suporte.
- Fixado erros de alinanhamento Fab-Button ao template login.html
- Fixado erros de alinhamento do SubThumbYellow do template login.html
- Fixado erros do placeholder dos input do template login.html
- Adicionado chart basedo em vendas por produtos em um intervalo mensal ao quinto card do template index.html
- Adicionado template de cadastro de embalagem a rotas packing.html
- Fixado erros de estilos do template packing.html
- Fixado erros do MAPMODAL do template packing.html
- Adicionado DATEPICKER ao template packing.html
- Adicionado template de cadastro de transportador a rotas transporter.html
- Adicionado DATEPICKER ao template transporte.html
- Fixado erros de estilos do template transporter.html
- Adicionado template de cadastro de ticket a rotas ticket.html
- Adicionado DATEPICKER ao template ticket.html
- Fixado erros de estilos do template ticket.html
- Adicionado mascara ao template ticket.html
- Adicionado mascara ao template packing.html
- Adicionado mascara ao template product.html
- Adicionado mascara ao template client.html
- Fixado erros de cor para #FFD600 de input válido a todos os template.
- Fixado erros de alinhamento de caixa do SELECT2.
- Fixado erros de select-field domicílio, empresa, código fornecedor & nome do fornecedor do template product.html
- Adicionado novos estilos material a todos SELECT2 da aplicação.
- Adicionado retorno em tempo real via pesquisa a todos SELECT2 da aplicação.
- Fixado erros de header de todos os templates.
- Adicionado módulos de busca de cep retornando endereço a todos template da plataforna que contém input-field de endereço.

## [0.3.0.1] - 1/10/2017.
### Adicionando novas funcionalidade & expandido funções.
- pGenerator adicionado e configurado.
- Adicionado gerador de id-receipt para template sell.html
- Adicionado gerador de id-employee para template employee.html
- Adicionado Fab-Button ao template index.html
- Adicionado Sub-Fab-Button para redirecionamento ao template sell.html
- Adicionado novo template employee.html para registro de um novo produto ao estoque.
- Adicionado nova folha de estilo para template employee.html
- Adicionado icones para input form do template employee.html
- Adicionado mascaras para template employee.html
- Adicionado novos estilos para input form do template employee.html
- Adicionado novos custom-dialog de resposta de erro, sucesso & draft para registro de uma nova venda ao banco de dados.
- Adicionado custom-dialog sell-sucess que ira gerar um recibo ao ser adicionado uma nova venda ao estoque.
- Adicionado novas rotas de seções para os botões do custom-dialog sell-sucess.
- Adicionado novas rotas de seções para os botões do custom-dialog sell-error.
- Adicionado novo template company.html para registro de uma nova empresa ao catalogo.
- Adicionado nova folha de estilo para template company.html
- Adicionado icones para input form do template company.html
- Adicionado mascaras para template company.html
- Adicionado novos estilos para input form do template company.html
- Adicionado novos custom-dialog de resposta de erro, sucesso & draft para registro de uma nova empresa ao banco de dados.
- Adicionado custom-dialog company-sucess que ira gerar um recibo ao ser adicionado uma nova venda ao estoque.
- Adicionado novas rotas de seções para os botões do custom-dialog company-sucess.
- Adicionado novas rotas de seções para os botões do custom-dialog company-error.
- Fixado erros de icones ao input nome fantasia nome do fornecedor e nome do fornecedor ao template provider.html
- Fixado erros de consulta de dados sobre nome e identificação do fornedor ao template product.html
- Adicionado geradores de códigos pGenerator a todos templates que há input-field de indentificação do individuo.
- Adicionado botões de GERAR a todos templates que há input-field de indentificação do individuo.
- Fixado erros de alinhamento dos botões de GERAR a todos templates que há input-field de indentificação do individuo.
- Fixado erros de alinhamento de largura dos input-field de indentificação do individuo em todos templates.
- Reformulado sistema de pesquisa de endereço via autocomplete agora toda pesquisa é feita em live-search utilizando GOOGLE MAPS API.
- Adicionado sistema de pesquisa live-search baseado em GOOGLE MAPS API a todos todos templates que contém input-field de endereços.
- Adicionado sistema de filtragem e auto-precisão para endereço digitado no autocomplete do template route-transporter.html
- Adicionado novas folhas de estilos para botoes de filtagem de endereço ao template route-transporter.html
+ Adicionado tooltip aos botoes de filtragem de endereço ao template route-transporter.html
- Fixado erros de auto refresh do address form do GOOGLE MAPS API ao template route-transporter.html
- Adicionado guia de instruções de como usar sistema de filtragem de endereços corretamente a todos templates que contém campos de endereço.
- Adicionado sistema de copy and past do cep retornado no address form do GOOGLE MAPS API para todos templates que contém campos de endereço.
- Adicionado sistema de liga/desliga ao sistema de filtragem de endereços para todos templates que contém campos de endereço.
- Fixado erros de multiplos live-search ao template client.html
- jQuery Validate adicionado e configurado.
- Adicionado erros de validação a todos os templates que contém campos de endereço.
- Adicionado folha de estilo para erros de validação do jQuery Validate a todos templates que contém campos de endereço.
- Adicionado tradução para jQuery Validate.
- Fixado erros de versão da folha de estilo do MaterializeCSS.
- Fixado erros de alinhamento do article class de todos os templates que contém campos de endereço.
- Fixado erros do DATE PICKER a todos templates que contém sistema de coleta de datas.
- Fixado erros de UI para os seperação de input-field por seção denominado por nomes de indentificação rápida.
- Fixado erros do side-nav a todos os templates. 

## [0.3.0.3] - 1/11/2017.
### Adicionando novos modulos de certificação digital, geração de NFe, centrais de custo e etc...
- LacunaWEBPKI adicionado e configurado.
- LacunaWRESTPKI adicionado e configurado.
- jQuery UI adicionado e configurado.
- Dropzone adicionado e configurado.
- jQuery Emoji adicionado e configurado.
- Browserify adicionado e configurado.
- Clipboard adicionado e configurado.

- Adicionado web-view para identificação do browser afim de fornecer informação sobre a seção e efetuar redirecionamento para browser compativel.
- Adicionado folha de estilos para web-view para identificação do browser Chrome.
- Adicionado dialogo para web-view para identificação do browser Chrome.
- Adicionado ações de redicionamento por meio de botões para web-view de identificação do browser Chrome.
- Adicionado tooltip para web-view de identificação do browser Chrome que exibi aviso que a abertura do browser oficial encontra-se indisponivel.
- Adicionado jQuery Emoji para web-view de identificação do browser Chrome afim de melhorar o UX.
- Fixado erros de alinhamento do wev-view de identificação do browser Chrome.
- Fixado erros de alinhamento do tooltip de identificação do browser Chrome.
- Adicionado card-panel com link para web-view de identificação do browser Chrome.
- Adicionado copy-link atráves de clique no botão do web-view de identificação do browser Chrome.
- Adicionado tooltip de link copiado com sucesso ao copy-link para web-view de identificação do browser Chrome.
- Adicionado redirecionamento para pagina inicial ao botão inicio do web-view de identificação do browser Chrome.
- Adicionado redirecionamento para pagina suporte ao botão inicio do web-view de identificação do browser Chrome.

- Adicionado folha de estilos para web-view para identificação do browser Firefox.
- Adicionado dialogo para web-view para identificação do browser Firefox.
- Adicionado auto-closer-timer ao web-view de identificação do browser Firefox.
- Fixado erros de alinhamento do wev-view de identificação do browser Firefox.
- Fixado erros de alinhamento do tooltip de identificação do browser Firefox.
- Adicionado GIF ao wev-view de identificação do browser Firefox afim de melhorar o UX.
- Adicionado pre-loader ao web-view de identificação do browser Firefox.

- Adcionado template de assinatura de documentos global cades-signature.html
- Adcionado template de assinatura de documentos global pades-signature.html
- Adicionado animações de escolha ao select do template company-parallel-and-branch.html
- Fixado erros de escolha ao select do template company-parallel-and-branch.html
- Adicionado modal de rodapé fixo após escolha de uma opção por meio do select do template company-parallel-and-branch.html
- Adicionado zonas de Drag and Drop ao modal de rodapé fixo do template company-parallel-and-branch.html
- Fixado erros de tipografia do card-panel do Drag and Drop do modal de rodapé fixo do template company-parallel-and-branch.html
- Fixado erros de alinhamento do floating-button do template login.html
- Adicionado checkbox de lembrar credencial de acesso ao login.html
- Adicionado redirecionamento de logout ao navbar do template index.html
- Adicionado lembrar usúario ao template login.html
- Adicionado modal de configurações de login ao template login.html