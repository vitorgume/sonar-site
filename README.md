# sonar-site

Landing page institucional do **Sonar** — Sales Call Intelligence.

Site estático em Astro + Tailwind, com CTAs apontando para a aplicação
(`sonar.gume.app/login` e `sonar.gume.app/register`).

## Rodando localmente

```bash
npm install
npm run dev
```

| Comando | Ação |
|---|---|
| `npm run dev` | Servidor de desenvolvimento em `localhost:4321` |
| `npm run build` | `astro check` + build estático em `dist/` |
| `npm run preview` | Serve o build de `dist/` |

## Estrutura

```
public/
  logos/            # Assets de marca (copiados de /logos)
  og-image.png      # Imagem de compartilhamento 1200x630
  robots.txt
src/
  components/
    sections/       # Seções da página (Hero, Features, Pricing, ...)
    ui/             # Primitivos (Button, Badge, Container, SectionTitle)
  data/             # Textos e configurações tipadas
  layouts/          # BaseLayout com SEO, OG e fontes
  pages/            # index.astro e 404.astro
  styles/global.css # Única folha de estilo (diretivas Tailwind)
```

## Antes de publicar

- [ ] Confirmar os preços em `src/data/plans.ts` (valores provisórios).
- [ ] Confirmar o e-mail de contato em `src/data/site.ts` (`CONTACT_EMAIL`).
- [ ] Validar as descrições de recursos em `src/data/features.ts` e `src/data/faq.ts`
      contra o que a aplicação realmente entrega hoje.

Convenções do projeto e histórico de correções: `CLAUDE.md` e `erros.md`.
