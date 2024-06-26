# Application de Suivi de Projets de Recherche

## Introduction

Cette application permet de gérer les informations sur les projets de recherche, les chercheurs, et les publications.

## Installation

### Backend

1. Clonez le dépôt : git clone https://github.com/jonathan-gu/td-djangorestapi-GUERPILLON-JONATHAN.git
2. Accédez au répertoire du projet : cd tddjangorestapi
3. Installation des dépendances : pip install -r requirements.txt
4. Appliquez les migrations : python manage.py migrate
5. Démarrez le serveur de développement : python manage.py runserver

### Frontend

1. Accédez au répertoire frontend : cd frontend
2. cd td-django-rest-front
3. Installez les dépendances : npm install
4. Démarrez l'application React : npm run dev

### Documentation

• Swagger : http://localhost:8000/api/swagger/
• Redoc : http://localhost:8000/api/redoc/

## API Endpoints

### Chercheurs

• GET /api/chercheurs/ : Récupère la liste de tous les chercheurs.
• GET /api/chercheurs/:id/ : Récupère les détails d'un chercheur spécifique.
    - Exemple : /api/chercheurs/1/ pour récupérer le chercheur avec l'ID 1.
• POST /api/chercheurs/ : Crée un nouveau chercheur.
• PUT /api/chercheurs/:id/ : Met à jour un chercheur spécifique.
    - Exemple : /api/chercheurs/1/ pour mettre à jour le chercheur avec l'ID 1.
• DELETE /api/chercheurs/:id/ : Supprime un chercheur spécifique.
    - Exemple : /api/chercheurs/1/ pour supprimer le chercheur avec l'ID 1.

### Projets de Recherche

• GET /api/projets/ : Récupère la liste de tous les projets de recherche.
    - Paramètre optionnel : ?start_date=2024-06-26 | pour récupérer projets avec une date de début du 26 juin 2026.
    - Paramètre optionnel : ?end_date_expected=2024-06-26 | pour récupérer projets avec une date de fin du 26 juin 2026.
    - Paramètre optionnel : ?project_leader=Louis Pasteur | pour les projets qui ont comme chercheur "Louis Pasteur".
    - Paramètre optionnel : ?title=Recherche Quantitque | pour les projets qui ont comme titre "Recherche quantique".
• GET /api/projets/:id/ : Récupère les détails d'un projet de recherche spécifique.
    - Exemple : /api/projets/1/ pour récupérer le projet de recherche avec l'ID 1.
• POST /api/projets/ : Crée un nouveau projet de recherche.
• PUT /api/projets/:id/ : Met à jour un projet de recherche spécifique.
    - Exemple : /api/projets/1/ pour mettre à jour le projet de recherche avec l'ID 1.
• DELETE /api/projets/:id/ : Supprime un projet de recherche spécifique.
    - Exemple : /api/projets/1/ pour supprimer le projet de recherche avec l'ID 1.

### Publications

• GET /api/publications/ : Récupère la liste de toutes les publications.
    - Paramètres optionnel : ?publication_date=2024-06-26 pour récupérer les publication du 26 juin 2026.
• GET /api/publications/:id/ : Récupère les détails d'une publication spécifique.
    - Exemple : /api/publications/1/ pour récupérer la publication avec l'ID 1.
• POST /api/publications/ : Crée une nouvelle publication.
• PUT /api/publications/:id/ : Met à jour une publication spécifique.
    - Exemple : /api/publications/1/ pour mettre à jour la publication avec l'ID 1.
• DELETE /api/publications/:id/ : Supprime une publication spécifique.
    - Exemple : /api/publications/1/ pour supprimer la publication avec l'ID 1.

### Authentification

• POST /api/token/ : Obtient un token JWT pour l'authentification. (Envoyer les informations d'identification de l'utilisateur)