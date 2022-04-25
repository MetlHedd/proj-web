Breno Alves de Sousa - 11345555 <br>
Johnny Batista da Silva - <br>
Yure Pablo do Nascimento Oliveira - 11275317 <br> <br>

Trabalho da disciplina SCC0219 Introdução ao Desenvolvimento Web


# Role.com

<p> Neste repositório é apresentado um sistema WEB para vender rolês universitários. É possível buscar rolês em regiões próximas a você, 
  filtrando categorias de seu interesse, tais como preço, LGBT friendly, open bar. Com isso, é possível comprar ingressos para o rolê pelo sistema 
  e mudar a titularidade do ingresso. </p>

## Requisitos
<p> <ul>
  <li> O sistema deve comportar dois tipos de usuários:
      <ul>
        <li> Cliente: Aquele que acessa o website para comprar ingressos para rolês.</li>
        <li> Administrador: É responsável por gerenciar os ingressos da festa, mudança de lote, etc. A aplicação já vem com uma conta admin e senha admin.</li>
      </ul>
  </li> <br>
 
  <li> O sistema deve permitir que os usuários realizem seu cadastro no site: 
    <ul>
      <li> os dados dos clientes a serem armazenados são: <i> nome, CPF, data de nascimento, endereço, telefone, email e senha.</i> </li>
      <li> os dados dos administradores a serem armazenados são: <i> nome, CPF, telefone, email e senha.</i> </li>
    </ul>
  </li> <br>
  
  <li> O registro do serviço deve incluir: <i> nome, id, foto, descrição, número de lotes, número do lote atual, preço do lote, quantidade de ingressos do lote, quantidade de ingressos vendida, gêneros musicais do rolê, tipo do rolê, data, local do evento, open bar (booleano). </i> </li> <br>
 
  <li> Venda de ingressos: 
    <ol>
      <li> O rolê é escolhido, a quantidade de ingressos é escolhida e os ingressos são incluídos no carrinho. </li>
      <li> Os ingressos são comprados usando um cartão de crédito (qualquer número é aceito pelo sistema). </li>
      <li> A quantidade de ingressos é subtraída da quantidade em estoque. </li>
      <li> O carrinho é esvaziado apenas quando o pedido é pago pelo cliente.</li>
    </ol> <br>
  </li>
  
  <li>É permitido a venda de apenas 5 ingressos de um mesmo rolê por CPF.</li><br>
  
  <li>Administradores podem criar/atualizar/ler/deletar novos rolês e ingressos associados (CRUD).</li><br>
  
  <li>Funcionalidade específica: 
    É possível mudar a titularidade de um ingresso já comprado no nosso site para outros clientes. 
    Um cliente escolhe o email ou CPF de outra pessoa e transfere o ingresso.</li><br>
  
  <li>O sistema deve ter requisitos de acessibilidade e prover boa usabilidade. O sistema deve ser responsivo.</li><br>
</ul>
</p>

## Descrição do projeto

<p> O sistema começa com uma tela inicial que apresenta os rolês principais patrocinados, 
  algumas categorias e uma lista de rolês para o cliente interagir. Além disso, no <i>header</i> 
  é possível migrar para a tela de cadastro, tela de login, lista completa de rolês, 
  tela de histórico de ingressos comprados, tela de perfil e tela do carrinho.</p>

<ul>
  <li><b>Tela de Cadastro</b>: Nesta tela o usuário consegue se registrar apresentando nome, CPF, data de nascimento, id, endereço, telefone, email e senha.</li>
  <li><b>Tela de Login</b>: O usuário consegue entrar na sua conta apresentando email e senha.</li>
  <li><b>Tela de Rolês</b>: É possível ver uma lista vertical de rolês. 
    Ao clicar no rolê é possível ver a descrição completa do rolê em outra tela.</li>
  <li><b>Tela de Descrição do Rolê</b>: É a tela que apresenta todas as informações sobre o rolê, e possui o botão de adicionar ingressos ao carrinho.</li>
  <li><b>Tela de Carrinho</b>: Nesta tela é possível ver todos os pedidos realizados e finalizar a compra.</li>
  <li><b>Tela de Ingressos</b>: Nesta tela é apresentado um histórico de ingressos já comprados pelo usuário em ordem cronológica. 
    É possível também mudar a titularidade do ingresso nesta tela.</li>
  <li><b>Tela de perfil</b>: Nesta tela é possível atualizar os dados fornecidos na etapa de cadastro, exceto o CPF e a data de nascimento.</li>
</ul> <br>

<p> É possível ver com mais detalhes o funcionamento do sistema no diagrama abaixo. </p>

![User Diagram](https://user-images.githubusercontent.com/48031838/165000645-f153655b-f072-4489-808c-1010eee2d470.png)

<p> O protótipo completo encontra-se no <a href = "https://www.figma.com/file/1atp6XQcNMWrqXp3FoA6Nc/Store?node-id=0%3A1"> Figma</a>. </p>

<p> As informações que serão salvas no servidor se referem ao cadastro do usuário e aos dados do rolê, esses apresentados na seção de requisitos. 
  Também serão salvos todos os pedidos realizados pelo usuário (ingressos comprados). </p>

## Comentários sobre o código

<p>Os protótipos são realizados em HTML5 e CSS3. São implementadas três telas: tela de rolês, tela principal, e tela de descrição do rolê.</p>

## Plano de Testes

<p>Em breve.</p>

## Resultados dos Testes

<p>Em breve.</p>

## Procedimentos de Build

<p>Em breve.</p>

## Problemas

<p>Em breve.</p>

## Comentários Adicionais

<p> Nenhum. </p>
