### Projeto 3 do Bootcamp da [{Reprograma}](https://reprograma.com.br/)
# API de Agenda de contatos

## Dados do projeto
Essa API reúne os contatos da agenda do usuário. <br>
Utilizei como ferramentas: `Node.js`, `Express`, `Nodemon`, `Cors`, `Mongoose`.


#### **Dados da Collection**

- id: autogerado e obrigatório
- nome: texto e obrigatório
- celular: texto e obrigatório
- dataNascimento: data e obrigatório
- fotoPerfil: texto e não obrigatório

#### **Rotas a serem retornadas:**

| Recurso | Descrição |
| --- | --- |
| `/` | Retorna index com apresentação.|

| Recurso | Descrição |
| --- | --- |
| `/contatos/` | Retorna todos os dados do banco de dados.|

| Recurso | Descrição |
| --- | --- |
| `/contatos/criar` | Cria novo contato e retorna mensagem.|

| Recurso | Descrição |
| --- | --- |
| `/contatos/nome/[NOME]` |  Retorna contato por nome específico. (Utiliza **Query Parameters**)|

| Recurso | Descrição |
| --- | --- |
| `/contatos/id/[ID]` |  Retorna contato por id específico. |

| Recurso | Descrição |
| --- | --- |
| `/contatos/deletar/[ID]` |  Deleta contato por id específico e retorna mensagem.|

| Recurso | Descrição |
| --- | --- |
| `/contatos/atualizar/telefone/[ID]` |  Atualiza somente telefone do contato por id específico e retorna mensagem. Não permite que modifique nenhum outro item.|

| Recurso | Descrição |
| --- | --- |
| `/contatos/atualizar/[ID]` |  Atualiza completamente contato e retorna mensagem.|


### Arquitetura

![assets/arquitetura_api.png](assets/arquitetura_api.png)

*Representação visual/diagrama das camadas do Backend*

 ### Padrão MVC
```
 📁 api
   |
   |-  📁 src
   |    |  
   |    |- 📁 controller
   |    |- 📁 models
   |    |- 📁 routes
   |    |- 📄 app.js
   |
   |- 📄 package.json 
   |- 📄 server.js
```


#### Dúvidas ou curiosidades?
nathaliacsan@gmail.com