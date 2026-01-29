<!-- PROJECT LOGO -->
<p align="center">
  <a href="https://www.b8one.com">
    <img src="https://media.licdn.com/dms/image/v2/C560BAQGMrZFt-zCiDw/company-logo_200_200/company-logo_200_200/0/1656602128974/b8one_logo?e=2147483647&v=beta&t=1JWsfi7HD1HhmmdxeZKsPGgp-kZUX6DJjmIKc_CZ0Ew" alt="Logo" width="150" weight="150" />
  </a>
  <p align="center">
    Aplicação desenvolvida como parte de um desafio técnico de Front-end, utilizando Next.js e tecnologias modernas do ecossistema React para simular uma vitrine de produtos com filtros, ordenação, lazy loading e persistência de estado.
  </p>
</p>

---

## 🇧🇷 Português

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Sumário</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o projeto</a>
      <ul>
        <li><a href="#feito-com">Feito com</a></li>
        <li><a href="#hospedagem">Hospedagem</a></li>
      </ul>
    </li>
    <li>
      <a href="#iniciando-o-projeto">Iniciando o projeto</a>
      <ul>
        <li><a href="#pré-requisitos">Pré-requisitos</a></li>
        <li><a href="#instalação">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#license">Licenças</a></li>
    <li><a href="#contato">Contato</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## Sobre o projeto

Esta aplicação foi desenvolvida como parte de um **desafio técnico de Front-end**, com foco em organização de código, boas práticas, responsividade e experiência do usuário.

A aplicação é composta por duas páginas principais:

- Header/Menu global
- Página Home
- Página de Ofertas (`/ofertas`)

### Home

https://github.com/user-attachments/assets/1bee818a-7009-443c-bde9-fca652bf38d0

Página inicial totalmente responsiva, composta por:

- Carrossel de imagens desenvolvido com **Swiper**
- Seção de banners duplos
- Seção de banners triplos
- Todos os banners direcionam para a página **/ofertas**

### Ofertas (`/ofertas`)

https://github.com/user-attachments/assets/4cc46b8b-be2b-4547-b6ec-67c3e36b46d0

Página principal da vitrine de produtos, contendo:

- Banner estático no topo
- Título **"Ofertas da Semana"**
- Breadcrumb de navegação
- Dropdown para ordenação dos produtos por:
  - Lançamentos (mais recentes)
  - Maior preço
  - Menor preço
- Filtros por:
  - Cor
  - Gênero
  - Tecido
  - Tamanho
  - Categoria
- Vitrine de produtos com:
  - Lazy loading
  - Imagem principal
  - Imagens descritivas (thumbnails) com interação
  - Nome do produto
  - Categoria
  - Preço original
  - Preço com desconto
  - Percentual de desconto

Os filtros e a ordenação são gerenciados globalmente com **Zustand** e persistidos no **Local Storage**, garantindo que as configurações da vitrine sejam mantidas mesmo após o recarregamento da página.

### Feito com

* [Next.js](https://nextjs.org)
* [TypeScript](https://www.typescriptlang.org)
* [Zustand](https://zustand-demo.pmnd.rs)
* [CSS Modules](https://github.com/css-modules/css-modules)
* [Swiper](https://swiperjs.com)
* [Vercel](https://vercel.com)

### Hospedagem

A aplicação está em produção neste link: **(https://bruno-carvalho-feitosa-nike-store-b8one.vercel.app)**.

## Iniciando o projeto

Primeiramente será necessário clonar este projeto em **(https://github.com/BrunoCarvalhoFeitosa/nike-store-b8one.git)**, após o download será necessário abrir este projeto no seu editor e no terminal digitar npm install, posteriormente é só rodar em seu terminal o comando npm run dev, após isso, acesse em seu navegador a url (http://localhost:3000).

### Pré-requisitos

* npm
  ```sh
  npm install npm@latest -g
  ```

### Instalação

1. Clone o repositório
   ```sh
   git clone https://github.com/BrunoCarvalhoFeitosa/nike-store-b8one.git
   ```
2. Instale os pacotes do NPM
   ```sh
   npm install
   ```
   
3. Inicie o projeto
   ```sh
   npm run dev
   ```   

<!-- LICENSE -->
## License

Distribuído sob a licença MIT.

<!-- CONTACT -->
## Contato

Bruno Carvalho Feitosa - [GitHub](https://github.com/BrunoCarvalhoFeitosa) - [LinkedIn](https://www.linkedin.com/in/bruno-carvalho-feitosa/)
