# portfolio2

Personal portfolio site for Stuart Wong, a full stack software engineer. Built with Next.js 15 (App Router), React 19, TypeScript, and Tailwind CSS, and deployed on Netlify.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Structure

- `src/app/page.tsx`: the single-page layout (header, intro, skills, projects, contact)
- `src/utils/projects.json`: project card data. Set `codeOnly: true` for projects without a live demo; their card links to the repo.
- `src/img/`: project screenshots, mapped to projects by title in `page.tsx`
- `public/Stuart_Wong_Resume.pdf`: the resume linked from the Contact section

## Scripts

- `npm run dev`: start the dev server
- `npm run build`: production build
- `npm run lint`: run ESLint
