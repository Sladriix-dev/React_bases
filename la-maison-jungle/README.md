8.
    Les props sont des objets que l'on peut récupérer dans les paramètres de notre composant fonction.

    Il existe deux syntaxes pour assigner une valeur à une prop :

        les guillemets pour les  string ;

        les accolades pour tout le reste : nombres, expressions JavaScript, booléen, etc.

    La déstructuration est une syntaxe permettant de déclarer une variable en l'affectant directement à la valeur d'un objet (ou tableau).

    Une prop est :

        toujours passée par un composant parent à son enfant ;

        considérée en lecture seule dans le composant qui la reçoit.

    La prop  children   est renseignée en imbriquant les enfants dans le parent : <Parent><Enfant /></Parent>.

    children   est utile lorsqu'un composant ne connaît pas ses enfants à l'avance.