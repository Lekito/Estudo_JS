# Desenvolvendo o Dio Bank
![image](https://github.com/user-attachments/assets/03c38535-d01b-4446-8fc4-2deed31e550d)

Desenvolvido por [Alex Lekito](https://github.com/Lekito)

### Projeto desenvolvido com React

## Tecnologias 
  - Typescrip
  - Vite
  - Chakra UI
  - Vitest
  - Testing Library

## Como rodar o projeto
1. - Clone o repositório
2. - Intale as dependencias
```js
npm install
```
3. - Execute o projeto 
```js
npm run dev
```


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

## This was the screen created for login.
![image](https://github.com/user-attachments/assets/5f95d0a5-cf4c-4eb8-9d5a-a88f4c3eaf44)
