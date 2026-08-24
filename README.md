# ADS SENAI

Repositório de estudos e atividades do curso de **Análise e Desenvolvimento de Sistemas (ADS)** no SENAI. Reúne exercícios e projetos práticos de desenvolvimento web feitos ao longo das aulas.

## Estrutura

```
desenvolvimento-web/
├── fa-clube/                    # site de clube de fãs (HTML/CSS/JS) — submodule, deploy próprio na Vercel
└── javaScript/
    ├── ecommerce/                # atividade de e-commerce simples com JS
    ├── estruturacaso/            # exercícios de switch/case
    ├── estruturase/               # exercícios de if/else (atividades 1 a 8 + exemplo)
    ├── estruturaswitch/           # exercícios de switch
    └── projeto-final-javascript/  # projeto final da disciplina de JS — submodule, deploy próprio na Vercel
```

## Sobre os submodules

`fa-clube` e `projeto-final-javascript` são repositórios git independentes (cada um com seu próprio histórico e deploy na Vercel), incluídos aqui como [submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules). Para clonar tudo:

```bash
git clone --recurse-submodules https://github.com/marcuskeller/ads-senai.git
```

## Conteúdo

Cada pasta de atividade contém um `index.html` autocontido — basta abrir no navegador para rodar. São exercícios de fixação de lógica de programação em JavaScript (estruturas condicionais, laços, validação de formulário) e pequenos projetos de front-end (HTML/CSS/JS puro, sem frameworks).

> Repositório de fins didáticos, sem dados sensíveis.
