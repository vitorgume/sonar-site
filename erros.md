# Registro de erros e decisões

Arquivo de aprendizado obrigatório (ver `CLAUDE.md`). Ler antes de escrever código novo.

---

## 2026-07-30 — `@astrojs/sitemap` incompatível com Astro 4

**Erro:** com `"@astrojs/sitemap": "^3.2.1"` no `package.json`, o npm instalou a `3.7.3`, que exige Astro 5.
O build falhava no final com `Cannot read properties of undefined (reading 'reduce')` em
`@astrojs/sitemap/dist/index.js` — o `astro check` e a geração das páginas passavam, o erro só
aparecia no hook `astro:build:done`.

**Solução adotada:** versão do sitemap fixada (sem `^`) em `3.2.1`.

**Regra:** enquanto o projeto estiver em Astro 4, integrações oficiais devem ser fixadas em versão
exata. Ao migrar para Astro 5, subir `@astrojs/sitemap` junto e só então voltar a usar `^`.

---

## 2026-07-30 — Nomes reais dos arquivos de logo

**Erro:** a tabela do `CLAUDE.md` listava `sonar-logo-full.svg`, `sonar-logo-full-white.svg` e
`sonar-symbol.svg`, que não existem. Os arquivos reais em `/logos` são `sonar-lockup.svg`,
`sonar-lockup-dark.svg`, `sonar-mark.svg`, `sonar-mark-dark.svg` e `sonar-mark-small.svg`.

**Solução adotada:** tabela do `CLAUDE.md` corrigida e `/logos` copiado para `public/logos/`,
que é o caminho realmente servido pelo Astro. Referenciar sempre por caminho absoluto
(`/logos/sonar-lockup.svg`).

**Regra:** conferir o nome real do arquivo em `public/logos/` antes de escrever um `src`.

---

## 2026-07-30 — Nada de bloco `<style>`, mesmo em componente Astro

**Erro:** o menu mobile do header foi escrito com um `<style>` escopado só para esconder o
`::-webkit-details-marker` do `<summary>`.

**Solução adotada:** substituído pela variante arbitrária do Tailwind
`[&::-webkit-details-marker]:hidden`, junto com `list-none`.

**Regra:** o `CLAUDE.md` permite CSS apenas em `src/styles/global.css`. Qualquer seletor exótico
deve ser resolvido com variante arbitrária do Tailwind, não com bloco `<style>`.

---

## 2026-07-30 — Conteúdo comercial não confirmado fica marcado

**Contexto:** a landing page precisou de preços e e-mail de contato que ainda não foram
confirmados pelo time.

**Solução adotada:** valores provisórios isolados em arquivos de dados
(`src/data/plans.ts`, `CONTACT_EMAIL` em `src/data/site.ts`) com comentário `⚠️ CONFIRMAR`
no topo, em vez de espalhados pelos componentes.

**Regra:** nunca inventar número, preço, depoimento de cliente, logo de empresa ou métrica de
resultado direto no template. Se o dado não foi confirmado, ele vai para `src/data/` com aviso
explícito.

---

## 2026-08-04 — Logo do header/footer pequena demais

**Erro:** os tamanhos definidos originalmente no `CLAUDE.md` (`h-8` no header, `h-7` no footer)
deixaram o lockup da Sonar visualmente pequeno demais nas duas áreas.

**Solução adotada:** aumentado para `h-10` no header (`Header.astro`) e `h-9` no footer
(`Footer.astro`), com a tabela de geometria do `CLAUDE.md` atualizada para os novos valores.

**Regra:** ao definir altura de logo em `h-*`, validar visualmente contra a altura do container
(`h-16` no header) antes de fixar o valor na especificação — não assumir que o primeiro valor
escolhido está correto.

---

## 2026-08-14 — Logo ainda pequena: o gargalo era a altura da barra, não a classe

**Erro:** `h-10` no header e `h-9` no footer continuaram pequenos. No header, o limite real não era
a classe da imagem e sim a barra `h-16` (64px): qualquer valor acima de `h-12` estouraria o
container. Aumentar só o `h-*` da `<img>` não resolvia.

**Solução adotada:** barra do header de `h-16` para `h-20` e logo para `h-14` nos dois lugares
(`Header.astro` e `Footer.astro`). Como o header é `sticky`, o `scroll-mt-20` das seções com
âncora (`Features`, `HowItWorks`, `Audiences`, `Pricing`, `Faq`) ficou menor que a nova altura da
barra e subiu para `scroll-mt-24`.

**Regra:** ao aumentar a logo do header, ajustar em conjunto (1) a altura da barra, (2) a classe
`h-*` da imagem e (3) o `scroll-mt-*` das seções ancoradas — o offset de âncora precisa ser maior
que a altura do header sticky.

---

## 2026-08-14 — Tagline do reposicionamento não bate com a do lockup

**Contexto:** o site foi reposicionado para **Sales Enablement** (treinamento + dados). A tagline
`SALES CALL INTELLIGENCE`, porém, está desenhada como `<text>` dentro de `sonar-lockup.svg` e
`sonar-lockup-dark.svg`, e `SITE.tagline` em `src/data/site.ts` apenas espelha esse valor.

**Solução adotada:** copy das seções e metadados (`SITE.title`, `SITE.description`) reposicionados,
mas os SVGs e `SITE.tagline` mantidos como estão — a regra do `CLAUDE.md` proíbe redesenhar a
logo. A divergência foi levantada com o usuário para decisão de marca.

**Regra:** mudança de posicionamento não autoriza editar arquivo de marca. Se a tagline do lockup
precisar mudar, isso é uma alteração de identidade visual: os cinco SVGs em `/logos` e
`public/logos/` são atualizados juntos, e só então `SITE.tagline` acompanha.
