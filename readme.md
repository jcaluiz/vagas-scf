# Este é um teste para desenvolvedores

# possui 5 testes

## Introdução

Este projeto possui um banco de dados fake em fakeData.js com apenas um registro.
A ideia é melhorar e o CRUD escrito nos 4 arquivos de teste abaixo.

Será a validada a forma de escrita de código.
Escreva códigos que humanos consigam entender.

Fique a vontade para fazer modificaçoes nos serviços, comentários em código, estrutura, mas seja objetivo.

## teste1.js

GET em /user 

Possuimos neste arquivo um serviço que faz uma busca no banco fake e retorna um registro.
Este código funciona, mas é possivel melhorar.
Veja o que pode deixar ele melhor escrito e mais performatico.

### Explicação

* Faz uma pesquisa para encontrar o nome do usuário através da query chamada `name`.
* A pesquisa pelo nome deve ser o nome todo do usuário no banco de dados fake. Pensei em colocar um tipo de pesquisa que faria com as letras que contém no banco de dados usando o método `includes`, porém, como é para encontrar um item, percebi que não faria sentido, já que em algum momento poderia ter outro João e encontrar apenas o primeiro João da lista.
* Caso a função não encontre o nome passado, a resposta da requisição terá um status code `404` e a mensagem `"Name not found"`.
* Na query name, na url da requisição, os espaços devem ser trocado por hífens e as palavras não devem ter acentos. Exemplo de url: `http://localhost:3000/user?name=joao-oliveira`.

## teste2.js

POST em /users, descubra a intenção dele e o corrija.

### Explicação

Pensei que poderia ser uma das duas coisas: ou é uma função de login, ou é para acrescentar um novo usuário. Como na função eu vi o método push, descobri que a inteção dele é criar um novo usuário. 

* A requisição recebe um body com as propriedades `name` e `job`.
* Caso esteja faltando o campo `name`, a resposta da requisição terá um status code `404` e a mensagem `Missing field name!`.
* Caso o campo `name` tenha menos de três letras, a resposta da requisição terá um status code `400` e a mensagem `Name must be at least 3 characters long!`.
* Caso esteja faltando o campo `job`, a resposta da requisição terá um status code `404` e a mensagem `Missing field job!`.

#### Exemplo:

* POST/URL: http://localhost:3000/users
* Body da requisição:

~~~json
    {
      "name": "Luiz Alberto",
      "job": "Desenvolvedor"
    }
~~~

* Resposta da requisição com status 201:

~~~json
    {
      "id": 3,
      "name": "Luiz Alberto",
      "job": "Desenvolvedor"
    }
~~~

## teste3.js

Este procura um usuário e o deleta da base.
Retorne sucesso para o client caso realmente tenha sido excluido e deixe o código mais performatico.

### Explicação

* Faz uma pesquisa para encontrar o nome do usuário através da query chamada `name`.
* Encontrado o objeto, verifica em qual índice do array está o objeto.
* Depois de encontrar o índice, faz remover o objeto através do método splice.
* Caso não encontre o nome do usuário, a resposta da requisição terá um status code `404` e a mensagem `Name not found`.

## teste4.js

Atualiza os dados de um usuário especifico.

### Explicação

* Faz uma pesquisa para encontrar o id do usuário através da query chamada `id`.
* A requisição recebe um body com as propriedades `name` e/ou `job`.
* Encontrado o objeto, reatribui os valores do objeto conforme foi passado no body.
* Caso falte um dos campos do body ou os dois, mantém o que estava registrado antes, sem alterar.

## teste5.js

Retorne quantas vezes determinado usuário foi lido no teste1.

### Explicação

* Retorna a quantidade de vezes que o nome do usuário passado na query foi chamada na função do teste1.
* Caso esse nome não tenha registro, a resposta da requisição terá um status code `404` e a mensagem `User does not exist in the database!`.

## teste 6

Definina uma forma de criar permissão para o usuario, defina se o usuário pode deletar ou atualizar usuários. Crie um middleware para validar essas permissões e adicione no teste4 e teste3.

### Explicação

Foi criado um middleware chamado `checkPermission` para verificar se o usuário tem permissão para atualizar ou deletar um usuário. A permissão é feita pelo headers.permissions e se tiver escrito update, é permitido atualizar, e se tiver escrito delete, é permitido deletar. Pensei em criar token, mas nesse caso, faria mais sentido se tivesse o login, que iria criar assim que fizesse o acesso, e teria uma duração para esse token ser válido. Porém, como é possível cadastrar no teste2 sem nenhuma permissão, logo a premissa que percebi é que o usuário já está logado para executar as requisições.

* Para ter permissão de deletar, use o thunder client por exemplo e acrescenta ao headers a chave `permissions` e o valor `delete`.
* Para ter permissão de atualizar, use o thunder client por exemplo e acrescenta ao headers a chave `permissions` e o valor `update`.
* Quando é encontrado a permissão `delete`, o middleware cria um req.hasDeletePermission.
* Quando é encontrado a permissão `update`, o middleware cria um req.hasUpdatePermission.

## Teste automatizado

Execute o teste automatizado com `npm test`.