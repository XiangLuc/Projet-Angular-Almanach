import { Creature } from "./Creature";

export const listeCreature : Creature[] = [
    {
        id: 1,
        nom: "Slime rouge",
        pv: 3,
        force: 5,
        defense: 5,
        description: "Le slime est une créature gélatineuse qui peut varier en taille et en couleur. Elle est composée d'une substance visqueuse et transparente qui lui permet de se mouvoir en glissant sur les surfaces. \n\n Les slimes sont souvent rencontrés dans des environnements humides tels que les marais, les grottes et les égouts. \n Le slime pourpre se différencie de ses confrères en ayant plus de force !",
        race: ["Slime"],
        image: "assets/images/creatures/slimered.png" 
    },

    {
        id: 2,
        nom: "Slime vert",
        pv: 15,
        force: 3,
        defense: 5,
        description: "Avec une plus grande vitalité, le slime vert est une créature gélatineuse qui peut varier en taille et en couleur. Elle est composée d'une substance visqueuse et transparente qui lui permet de se mouvoir en glissant sur les surfaces. \n\n Les slimes sont souvent rencontrés dans des environnements humides tels que les marais, les grottes et les égouts.",
        race: ["Slime"],
        image: "assets/images/creatures/slimegreen.png" 
    },

    {
        id: 3,
        nom: "Slime bleu",
        pv: 10,
        force: 3,
        defense: 15,
        description: "Solide comme le roc, le slime bleu est est une créature gélatineuse qui peut varier en taille et en couleur. Elle est composée d'une substance visqueuse et transparente qui lui permet de se mouvoir en glissant sur les surfaces. \n\n Les slimes bleu sont souvent rencontrés dans des environnements avec des minéraux dont ils se nourrissent pour avoir un corps aussi solide.",
        race: ["Slime"],
        image: "assets/images/creatures/slimeblue.png" 
    },

    {
        id: 4,
        nom: "Roi démon",
        pv: 999,
        force: 999,
        defense: 999,
        description: "Un roi démon est un être mythique puissant qui est souvent considéré comme tout-puissant dans les mythes et les légendes. Il possède des pouvoirs surnaturels tels que la force surhumaine, la régénération rapide, l'agilité, la résistance physique et mentale exceptionnelle et la capacité de contrôler les éléments naturels. Le roi démon est également souvent considéré comme immortel et incapable d'être vaincu par des armes ordinaires. \n\n Il a une grande intelligence et une capacité de manipulation qui lui permettent de manipuler les autres êtres pour atteindre ses objectifs.",
        race: ["Demon"],
        image: "assets/images/creatures/demonking.png"
    },

    {
        id: 5,
        nom: "Ange",
        pv: 100,
        force: 20,
        defense: 100,
        description : "Les anges sont des êtres célestes divins qui ont été enregistrés dans diverses traditions religieuses, principalement abrahamiques, qui servent fidèlement Dieu. Le terme 'ange' vient du mot grec 'angelos' qui signifie 'messager', comme une traduction de leur nom en hébreu 'Malach', ce terme est utilisé à la fois pour désigner le rang le plus bas des anges et l'armée céleste dans son ensemble . \n\n Cependant Ange, n'est pas leur nom en tant qu'espèce, mais plutôt une description de leur tâche, car les anges sont mieux décrits comme des 'esprits'. L'origine des anges est sujette à débat, mais certains suggèrent qu'ils ont été créés le deuxième jour de la création par Dieu à partir du feu ou de la lumière comme une manifestation de son amour infini.",
        race: ["Divin"],
        image: "assets/images/creatures/angel.png"
    },

    {
      id: 6,
      nom : "Main",
      pv : 5,
      force : 10,
      defense : 300,
      description : "Le démon-main est une créature terrifiante issue des abysses infernales. Son corps est recouvert d'écailles aussi tranchantes que des lames de rasoir et il possède plusieurs oeils afin de repérer tout individus voulant prendre le trésor du roi démon. Sa tête est celle d'un bouc, avec de grandes cornes tordues et des yeux rouges qui brillent d'une lueur maléfique. Les mains du démon-main sont dotées de doigts crochus et d'ongles acérés, qui lui permettent de déchirer n'importe quoi en un instant.",
      race: ["Demon","Main"],
      image: "assets/images/creatures/hand.png"
    },
             
    {
      id: 7,
      nom : "Démon",
      pv : 40,
      force : 50,
      defense : 20,
      description : "Un démon est un être surnaturel, souvent malveillant, qui est présent dans de nombreuses cultures et traditions religieuses à travers le monde. Les démons sont généralement considérés comme des êtres spirituels, souvent associés au mal, à la souffrance, à la corruption ou à la tentation. Selon les croyances et les traditions, les démons peuvent être considérés comme des êtres réels et indépendants, ou simplement comme des manifestations symboliques du mal ou de la négativité. Dans de nombreuses traditions religieuses, les démons sont considérés comme des opposants à Dieu ou à d'autres forces divines, et sont souvent associés à la tentation des humains à pécher ou à se détourner de la voie de la vertu. \n\n Il convient de noter que les croyances concernant les démons varient considérablement selon les cultures et les traditions, et que certaines personnes peuvent considérer les croyances liées aux démons comme superstitieuses ou irrationnelles.",
        
      race: ["Demon"],
      image: "assets/images/creatures/demon.png"
    },

    {
        id: 9,
        nom : "corrompu",
        pv : 5,
        force : 15,
        defense : 5,
        description : "Il n'y a pas de description universelle de quelqu'un qui est possédé, car les symptômes et les comportements associés à la possession peuvent varier considérablement selon les croyances et les traditions. Cependant, certaines descriptions courantes de quelqu'un qui est possédé peuvent inclure :Des changements soudains et radicaux dans le comportement, tels que des crises de colère, des actes violents, des changements de personnalité ou des comportements erratiques.  Des expériences psychologiques et physiques anormales, telles que des hallucinations, des convulsions, des pertes de mémoire ou des changements dans la voix ou le langage.  Une aversion ou une réaction négative envers les objets ou les symboles religieux, ou une répugnance envers les personnes qui ont une foi ou une croyance forte.    Des phénomènes inexplicables, tels que des objets qui bougent ou se brisent sans cause apparente, ou des événements étranges qui se produisent autour de la personne possédée.  Il est important de noter que la possession est un sujet controversé et que certaines personnes peuvent ne pas croire en l'existence ou en la réalité de ce phénomène.",
        race: ["Mort vivant"],
        image: "assets/images/creatures/corrupted.png"
    }    
];