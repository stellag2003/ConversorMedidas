# Conversor de Quilômetros para Metros

Um programa de linha de comando (CLI) em **Node.js** que converte valores de quilômetros para metros. Este projeto foi criado como exercício de manipulação de argumentos na linha de comando.

---

## 🔹 Funcionalidades

- Converte um valor de quilômetros para metros.
- Recebe argumentos diretamente pelo terminal.
- Exibe o resultado de forma clara no console.

---

## 💻 Pré-requisitos

- [Node.js](https://nodejs.org/) instalado no computador.
- Conhecimento básico em terminal ou linha de comando.

---

## ⚡ Instalação

1. Clone este repositório:
   
git clone <URL_DO_SEU_REPOSITORIO>

2. Navegue até o diretório do projeto:

cd <NOME_DO_DIRETORIO>

3. Instale as dependências (se houver):
npm install

🚀 Como usar

Execute o programa passando os três argumentos: valor, unidade de origem e unidade de destino.

node conversor.js <valor> <unidadeOrigem> <unidadeFinal>

Exemplo:
node conversor.js 5 km m

Saída esperada:

5 km é igual a 0.005 m!

📝 Estrutura do código

valor: número que será convertido.

unidadeOrigem: unidade inicial (ex: km).

unidadeFinal: unidade final (ex: m).

resultado: valor convertido (valor / 1000).

🔧 Possíveis melhorias

Suporte a outras unidades (milhas, centímetros, etc.).

Adicionar verificação de entrada inválida.

Criar interface mais amigável com menus interativos.

Permitir conversão bidirecional (metros → quilômetros).

