# Template-nextjs

Un projet Next.js moderne utilisant shadncui et Tailwind CSS pour une interface utilisateur élégante, avec une authentification gérée par NextAuth.
Technologies Utilisées

    Next.js – Framework React optimisé pour le rendu côté serveur.
    Tailwind CSS – Outil de styling permettant de créer rapidement des interfaces responsives.
    shadncui – Bibliothèque de composants UI construits avec Tailwind CSS.
    NextAuth – Système d'authentification pour Next.js.

        La configuration par défaut se trouve dans le fichier /src/app/api/auth/[...nextauth]/route.ts dans la section async.

Installation

Cloner le dépôt :

    git clone https://github.com/roroNFT/template-nextjs.git

    cd template

Installer les dépendances :

Avec npm (recommandé) :

    npm install

Ou avec yarn :

    yarn install

Configuration des variables d'environnement :

Créez un fichier .env.local à la racine du projet et ajoutez vos variables d'environnement nécessaires. Par exemple :
peux se généré avec la commande :
    
    npx auth secret

exemple de code présent dans .env.local :

    NEXTAUTH_URL="http://localhost:3000"
    AUTH_SECRET=""

Configuration de l'Authentification

Le projet utilise NextAuth pour la gestion de l'authentification. Vous trouverez la configuration complète dans :

/src/app/api/auth/[...nextauth]/route.ts

Dans la partie async de ce fichier, les fonctions et les informations relatives aux identifiants par défaut sont définies. N'hésitez pas à personnaliser cette partie pour adapter l'authentification à vos besoins.
Lancer le Projet

Pour démarrer le serveur de développement, exécutez :

    npm run dev

ou

    yarn dev

Puis, ouvrez http://localhost:3000 dans votre navigateur.
Utilisation de shadncui et Tailwind CSS

Le projet est déjà configuré avec Tailwind CSS pour faciliter le développement de vos interfaces. Pour en savoir plus sur les composants et la personnalisation, consultez la documentation officielle :

    Shadncui Documentation : https://ui.shadcn.com/docs/installation
    
    Tailwind CSS Documentation : https://tailwindcss.com/docs/installation/using-postcss

    Authjs Documentation : https://authjs.dev/getting-started/installation?framework=next-js


