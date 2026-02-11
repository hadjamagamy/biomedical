# Commandes du Projet

## Création du Projet Laravel

```bash
composer create-project laravel/laravel biomedical
cd biomedical
```

## Dépendances PHP (Backend)

Installation des paquets Composer nécessaires :

```bash
composer require inertiajs/inertia-laravel
composer require tightenco/ziggy
```

## Dépendances JavaScript (Frontend)

Installation des paquets NPM pour React, Inertia, et les outils UI :

### Framework et Inertia

```bash
npm install @inertiajs/react react react-dom
npm install ziggy-js
```

### UI et Animations

```bash
npm install lucide-react framer-motion
```

### Outils de Développement (Vite, Tailwind CSS 4)

```bash
npm install -D tailwindcss @tailwindcss/vite @tailwindcss/forms
npm install -D vite @vitejs/plugin-react laravel-vite-plugin
npm install -D axios concurrently
```

## Lancement du serveur de développement

Pour lancer le serveur Laravel et Vite en parallèle :

```bash
npm run dev
```
