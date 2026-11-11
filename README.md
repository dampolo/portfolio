# Damian Poloczek · Portfolio

Personal developer portfolio built with Angular 22, TypeScript, and SCSS. The site introduces my skills, links to live projects and their source code, and includes a contact form. Content is available in German and English.

## Run locally

Use Node.js 24.15 or later within the 24.x series and npm. From the project directory, run:

```sh
npm ci
npm start
```

Open [http://localhost:4200](http://localhost:4200). The development server reloads the page when you save changes.

## Build and test

| Command | Purpose |
| --- | --- |
| `npm run build` | Create a production build. The browser files are generated in `dist/portfolio/browser/`. |
| `npm run watch` | Rebuild with the development configuration when files change. |
| `npm test` | Run the Jasmine unit tests with Karma. |

When deploying the production build, configure the host to serve `index.html` for Angular routes such as `/imprint` and `/privacy-policy`.

## Project structure

- `src/app/main-content/` contains the homepage sections, project cards, and contact form.
- `src/app/app.routes.ts` defines the routes, including the imprint, privacy policy, and contact confirmation pages.
- `src/assets/i18n/` contains the German and English translations.
- `src/styles.scss` contains shared styles, variables, and mixins. Angular loads `src/reset.css` globally.

The contact form posts to the live PHP endpoint at `https://damianpoloczek.com/sendMail.php`, including when the Angular app runs locally.
