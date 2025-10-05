# Copilot Instructions for MyFirstAngularApp

This codebase is an Angular application generated with Angular CLI (v20.3.2). Follow these guidelines to maximize productivity and maintain project conventions:

## Architecture Overview
- **Single-page Angular app**: Source code is in `src/app/`, with the main entry in `src/main.ts`.
- **Component structure**: Each feature (e.g., `user-profile`) is a folder with `.ts`, `.html`, `.css`, and `.spec.ts` files.
- **Routing**: Defined in `src/app/app.routes.ts`.
- **Configuration**: App-wide settings in `src/app/app.config.ts`.

## Developer Workflows
- **Start dev server**: `ng serve` (auto-reloads on changes)
- **Build for production**: `ng build` (outputs to `dist/`)
- **Unit tests**: `ng test` (uses Karma)
- **E2E tests**: `ng e2e` (framework not preconfigured)
- **Scaffold components**: `ng generate component <name>`

## Project-Specific Patterns
- **Component organization**: Place related files together (e.g., `user-profile/user-profile.ts`, `.html`, `.css`, `.spec.ts`).
- **Routing**: Use `app.routes.ts` for navigation logic.
- **Styles**: Prefer component-level CSS; global styles in `src/styles.css`.
- **Testing**: Unit tests in `.spec.ts` files, colocated with components.

## Integration & Dependencies
- **Angular CLI**: All major workflows use CLI commands.
- **No custom build/test scripts**: Use standard Angular CLI commands unless otherwise documented.
- **External resources**: See README for CLI documentation links.

## Examples
- To add a new feature:
  1. Run `ng generate component feature-name`.
  2. Implement logic in `feature-name/feature-name.ts`.
  3. Add routes in `app.routes.ts` if needed.
  4. Write tests in `feature-name/feature-name.spec.ts`.

## Key Files & Directories
- `src/app/` — Main app code
- `src/app/app.routes.ts` — Routing
- `src/app/app.config.ts` — Configuration
- `src/styles.css` — Global styles
- `README.md` — Workflow reference

---
If any conventions or workflows are unclear, ask the user for clarification before proceeding with major changes.
