import AbstractSeeder from "./AbstractSeeder";

class ChrSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "chr", truncate: true });
  }

  run() {
    const chr = [
      {
        name: "Spa Vinotherapie LES SOURCES DE CAUDALIE",
        address: "Chemin de Smith Haut Lafitte, 33650 Martillac",
        description:
          "Niché au cœur des prestigieuses vignes du Château Smith Haut Lafitte, le Spa Vinothérapie® des Sources de Caudalie propose une expérience de bien-être inégalée. Ses soins uniques combinent les propriétés bienfaisantes d’une eau de source naturellement chaude, riche en minéraux et oligo-éléments, avec les vertus exceptionnelles de la vigne et du raisin. HORAIRES D'OUVERTURE Lundi : 10H - 19H Mardi - Samedi : 9H - 19H Dimanche : 9H - 13H",
        average_budget: 28000,
      },
      {
        name: "Ivazio Island - Prison Island",
        address: "10 Promenade du Lac, 33000 Bordeaux",
        description:
          "En équipe, plongez dans un labyrinthe de cellules où chaque porte cache un défi : logique, adresse ou sport. Choisissez votre épreuve en fonction du nombre de joueurs, du type et de la difficulté, puis badgez pour entrer. Une fois dedans, le chrono démarre : collaborez, réfléchissez et agissez vite pour réussir avant la fin du temps imparti. Quittez la pièce et enchaînez les défis pour accumuler les succès. Un challenge ludique, immersif et plein d’adrénaline à partager à plusieurs ! HORAIRES D'OUVERTURE Lundi, mardi, jeudi, vendredi : 17h – 00h Mercredi : 14h – 00h Samedi : 11h – 02h Dimanche : 14h – 20h Pendant les vacances scolaires et jours fériés : Lundi à vendredi : 14h – 00h Samedi : 11h – 02h Dimanche : 14h – 20h",
        average_budget: 2000,
      },
      {
        name: "A la Française! - Dégustation de vins en petit groupe dans le Médoc ou à Saint-Émilion et visite des châteaux au départ de Bordeaux",
        address: "Départ de Bordeaux centre",
        description:
          "Plongez au cœur des célèbres vignobles bordelais en choisissant votre propre aventure : une demi-journée à explorer Saint-Émilion ou le Médoc. Grâce au transport inclus, profitez pleinement de l’expérience sans vous soucier de conduire. En petit groupe, bénéficiez d’une attention personnalisée de votre guide et des vignerons lors de la visite d’un domaine réputé. Découvrez les secrets des vins de la région et approfondissez vos connaissances grâce à un atelier de dégustation exclusif. Une expérience conviviale et enrichissante pour tous les amateurs de vin !",
        average_budget: 10500,
      },
      {
        name: "A la Française! - Excursion d'une demi-journée à Arcachon au départ de Bordeaux incluant la dune du Pyla et une dégustation d'huîtres",
        address: "Départ de Bordeaux centre",
        description:
          "Évadez-vous de l’effervescence bordelaise pour découvrir le charmant bassin d'Arcachon dans un transport confortable. En petit groupe de huit personnes maximum, profitez d’une expérience intime et immersive. Commencez par une ascension de la Dune du Pilat, offrant des vues spectaculaires et des panoramas parfaits pour vos photos. Terminez en savourant des huîtres ou des crevettes fraîches dans une ferme ostréicole locale. Une escapade gourmande et inoubliable !",
        average_budget: 15500,
      },
      {
        name: "Bordeaux in Bites - Visite gastronomique et viticole de la vieille ville de Bordeaux",
        address: "Départ de Bordeaux centre",
        description:
          "Découvrez une expérience culinaire unique et personnalisée au cœur du Vieux Bordeaux. Chaque visite met en valeur vos curiosités et vos envies gustatives, tout en incluant quelques incontournables de la gastronomie locale. Guidés par des experts passionnés – anciens chefs, auteurs culinaires ou spécialistes du vin – découvrez des anecdotes fascinantes sur les pains, la saisonnalité des fromages ou les subtilités des vins français. En petit groupe, parcourez les rues pavées et l’architecture médiévale de Bordeaux tout en dégustant une sélection des meilleures boutiques locales. Venez le ventre vide, les portions généreuses vous raviront ! Une aventure gastronomique authentique et mémorable.",
        average_budget: 12500,
      },
      {
        name: "Virtual Room",
        address: "3 sente de la Nancy, 33000 Bordeaux",
        description:
          "Plongez dans une aventure virtuelle immersive alliant réflexion, communication et esprit d’équipe. Chez Virtual Room, choisissez parmi 5 missions captivantes à partager entre amis ou en famille. En équipes de 2 à 4 joueurs, vous serez briefés et équipés avant de vous lancer dans 45 minutes de jeu intense. Explorez des univers variés : aidez Astérix à compléter sa célèbre potion, voyagez dans le temps pour sauver l’humanité, ou incarnez des zombies en quête de survie. Que vous affrontiez une intelligence artificielle dans un monde inspiré des jeux vidéo ou résolviez des mystères à travers différentes époques, chaque mission garantit une expérience unique et accessible dès 10 ans, pour jusqu’à 27 participants. Une aventure collective inoubliable vous attend ! Horaires : Lundi à jeudi : 10h00 – 22h00 / Vendredi et samedi : 10h00 – 23h00 / Dimanche : 10h00 – 22h00",
        average_budget: 3000,
      },
      {
        name: "Sensas Bordeaux",
        address: "10 Rue Pourmann, 33300 Bordeaux",
        description:
          "Plongez dans une aventure sensorielle unique avec SENSAS Bordeaux, un concept de divertissement inédit en France. En équipes de 4 à 15 personnes, vous traverserez un parcours de 2 heures composé de 6 ateliers sensoriels et 3 SAS, majoritairement plongés dans l'obscurité. Chaque défi mettra à l'épreuve vos cinq sens—goût, toucher, ouïe, odorat et vue—vous révélant leur puissance insoupçonnée. Guidés par un Maître des Sens, vous vivrez des moments riches en sensations, émotions et fous rires. De plus, chaque amulette remportée lors des épreuves sera convertie en don pour une association locale œuvrant pour les personnes en situation de handicap mental, ajoutant une dimension solidaire à votre expérience. Horaires : Tous les jours de 9h à 23h",
        average_budget: 2800,
      },
      {
        name: "Wine Beer SPA",
        address: "44 Allées de Tourny 33000 Bordeaux",
        description:
          "Offrez-vous un moment inoubliable, que ce soit seul, en duo ou entre amis, en vous plongeant dans un bain où les composants de la bière ou du vin enveloppent votre peau, tout en savourant une dégustation harmonieuse. Bien plus qu’un simple spa, le Wine Beer Spa se positionne comme une expérience innovante et hors du commun. Dans un cocon de bien-être inspiré de l’architecture bordelaise, profitez d’un instant épicurien et convivial, bénéfique pour le corps et l’esprit. Découvrez le patrimoine de la région à travers des dégustations de produits locaux, bio et respectueux de l’environnement. Ce voyage sensoriel est entièrement pensé pour vous offrir une véritable déconnexion, un lâcher-prise total et une évasion absolue. HORAIRES : Du Lundi au Mercredi de 10h à 19h / Les Jeudi et Vendredi de 10h à 21h / Le Samedi de 10h à 20h / Le Dimanche de 10h à 18h",
        average_budget: 5000,
      },
      {
        name: "Color Room",
        address: "30 rue de la fusterie Bordeaux 33000 France",
        description:
          "Plongez dans une expérience artistique unique à la Color Room, l’atelier incontournable de Bordeaux qui invite à libérer sa créativité tout en s’amusant. Ici, chaque coup de pinceau devient une aventure, que vous soyez novice ou artiste dans l’âme. Guidé par des animateurs passionnés, laissez libre cours à votre imagination pour créer une œuvre qui vous ressemble, dans une ambiance conviviale et inspirante. La Color Room ne se limite pas à un simple atelier de peinture : c’est un moment de détente, de partage et de plaisir, parfait pour s’évader du quotidien. Que ce soit pour une sortie entre amis, une activité en famille ou un moment unique entre collègues, l’expérience promet des souvenirs mémorables. Tout le matériel est fourni, il ne vous reste qu’à venir avec votre envie de créer et votre bonne humeur. Offrez-vous un instant magique où imagination et convivialité se rencontrent, et repartez avec une œuvre qui vous rappellera ce moment inoubliable. Tous les jours de 10h à 23h",
        average_budget: 2500,
      },
      {
        name: "Rush Action Game",
        address: "41 Rue des Epoux Lesgourgues 33400 TALENCE",
        description:
          "Plongez au cœur de l’aventure avec Rush Action Game, le premier action game de Bordeaux, situé à Talence. Sur plus de 200 m², relevez 10 défis insolites dans des univers immersifs et captivants. Ici, oubliez les énigmes classiques : place à l’action, à l’agilité et à la stratégie ! En équipe de 2 à 5 joueurs, affrontez des épreuves physiques et tactiques, tout en défiant d’autres équipes en simultané. Que vous veniez en famille, entre amis ou pour un événement comme un anniversaire ou un team building, préparez-vous à vivre un moment intense et inoubliable. Accessible dès 9 ans, Rush Action Game est une expérience dynamique qui mêle fun, esprit d’équipe et dépassement de soi. Enfilez une tenue confortable et venez relever le défi dans un cadre unique qui promet des souvenirs mémorables. Alors, prêts à passer à l’action ? Tous les jours de 10h à 22h",
        average_budget: 2600,
      },
      {
        name: "Sim Aviation",
        address: "96 bis quai des Chartrons 33300 bordeaux",
        description:
          "Vivez une expérience unique avec Sim Aviation Bordeaux, le simulateur de vol qui vous place aux commandes d’un Airbus A320. Situé au cœur de Bordeaux, plongez dans un cockpit immersif grâce à un écran panoramique à 180° et choisissez parmi plus de 20 000 aéroports pour vos décollages et atterrissages. Encadré par des instructeurs qualifiés, chaque session s’adapte à tous les niveaux, du novice au passionné. Idéal pour réaliser un rêve d’enfant, célébrer une occasion spéciale ou organiser un événement, Sim Aviation Bordeaux promet sensations fortes et souvenirs inoubliables. Une aventure aérienne exceptionnelle vous attend ! Ouvert du mardi au samedi de 10h à 17h",
        average_budget: 10500,
      },
      {
        name: "Sim Factory",
        address: "9, rue Dumont d’Urville 33300 Bordeaux",
        description:
          "A la pointe de la technologie. Situé à Bordeaux, cet espace unique offre une expérience immersive grâce à dix simulateurs équipés d’écrans panoramiques et d’une technologie de réalité dynamique, reproduisant avec précision les sensations réelles de la conduite sur circuit. Que vous soyez novice ou passionné de pilotage, SimFactory est l’endroit parfait pour relever des défis, partager des moments inoubliables entre amis, en famille ou entre collègues. Accessible dès 8 ans, prenez place au volant et testez vos compétences sur des circuits légendaires du monde entier, dans une ambiance conviviale et compétitive. Une expérience incontournable pour tous les amateurs de vitesse et de sensations fortes. Horaires : Mardi au vendredi : 14h – 22h / Samedi : 10h – 22h / Dimanche : 10h – 18h",
        average_budget: 1000,
      },
      {
        name: "Artisante bijoutière - Réalisez vos alliances sur-mesure en duo",
        address: "2 Cr Evrard de Fayolle, 33000 Bordeaux",
        description:
          "Plongez dans un moment unique avec Aliénor, artisan bijoutière passionnée, dans son atelier bordelais. Que vous soyez en couple, entre amis ou en famille, cet atelier est ouvert à tous les duos souhaitant créer des alliances sur-mesure. Après avoir mesuré votre taille et imaginé votre projet avec Aliénor, passez à la pratique : sciez, soudez et façonnez votre anneau pour lui donner la forme et la texture de vos rêves – lisse, martelé, torsadé, ou encore bi-matière. Une gravure personnalisée viendra sublimer votre création, ajoutant une touche personnelle et symbolique. Repartez avec une alliance unique, façonnée de vos mains, ainsi que des souvenirs inoubliables. Pour des créations en or ou serties de pierres, Aliénor propose un service sur devis, avec la possibilité de recycler vos matériaux précieux. Une expérience créative et symbolique à vivre à deux !",
        average_budget: 30000,
      },
      {
        name: "Composition végétale - Réalisez votre kokedama",
        address: "22 Rue Bouffard, 33000 Bordeaux",
        description:
          'Plongez dans l’art japonais du kokédama avec David et Pierre, artisans fleuristes passionnés, et laissez-vous séduire par cette technique unique de culture végétale. Dès votre arrivée dans leur écrin de nature, vous serez accueilli chaleureusement autour d’un café ou d’un thé. Vous découvrirez le déroulé de l’atelier ainsi qu’une présentation inspirante de leur boutique, où se mêlent créations végétales et parfums français engagés. Le kokédama, véritable symbole de la Terre, est une sphère de mousse qui abrite une plante prête à s’épanouir. Situé entre l’art floral et le bonsaï, cet art japonais allie modernité et élégance. Sous les conseils experts de David, apprenez chaque étape : préparer vos plantes, créer la boule de substrat idéale, fixer la mousse naturelle et maîtriser les ficelages pour un rendu parfait. Repartez avec votre propre kokédama, un extrait de nature qui apportera une touche de verdure raffinée à votre intérieur. Une expérience unique et apaisante, idéale pour adopter la "Green attitude" et découvrir un art qui mêle créativité et sérénité.',
        average_budget: 5400,
      },
      {
        name: "Atelier Signature Olfactive - Assemblez votre parfum",
        address: "5 Rue Pierre de Coubertin, 33000 Bordeaux",
        description:
          "Créez votre parfum unique lors d’un voyage sensoriel avec Aurélie ! Plongez dans l’univers fascinant des senteurs en compagnie d’une experte passionnée. Dès votre arrivée, Aurélie vous accueille chaleureusement et vous dévoile les secrets de l’histoire du parfum. Explorez plus de cent notes de tête, de cœur et de fond, apprenez à les marier harmonieusement et composez une fragrance qui vous ressemble. Avec une sélection d’une dizaine de notes, vous réaliserez et affinerez trois ébauches jusqu’à trouver l’équilibre parfait. Personnalisez votre création jusque dans les moindres détails : nom, bouchon, étiquette… et repartez avec votre eau de parfum sur-mesure (30 ml), accompagnée d’un format voyage (10 ml). Une expérience créative et inoubliable, avec la possibilité de commander à nouveau votre fragrance exclusive !",
        average_budget: 9500,
      },
      {
        name: "Face à Face",
        address: "14 Rue Bourbon, 33300 Bordeaux",
        description:
          'Plongez dans l’aventure avec "Face à Face", l’expérience qui transforme vos sorties en souvenirs inoubliables ! Rassemblez deux équipes prêtes à se défier à travers une série de mini-épreuves originales et accessibles à tous. Plus de 50 défis uniques vous attendent, mêlant action, agilité et concentration. Préparez-vous à une expérience où rires, adrénaline et stratégie se mêlent, le tout orchestré par un arbitre animateur qui dynamisera chaque instant et comptera vos points. Cette activité s’adapte à tous les âges et niveaux. Que ce soit pour une session d’une heure ou deux, chaque participant est au cœur de l’action. Êtes-vous prêts à relever le défi, à révéler vos talents et à renforcer vos liens ? Tous les jours de 9h à 21h30',
        average_budget: 3000,
      },
      {
        name: "Château Lanessan - Visite-dégustation",
        address: "113 lanessan, 33460 CUSSAC FORT MEDOC",
        description:
          "Vivez une visite-dégustation inoubliable, entre vin et histoire, dans un cadre enchanteur. Découvrez le Musée du Cheval et son patrimoine exceptionnel : voitures hippomobiles familiales, sellerie complète et écuries d’époque aux mangeoires en marbre. Promenez-vous dans le Parc du Château et son magnifique jardin fleuriste, véritable havre de paix. Explorez ensuite le vignoble, apprenez tout sur les cépages et l’élaboration des vins, et dégustez directement à la barrique. En saison, savourez les baies fraîches des vignes du Jardin des Cépages. Terminez par une initiation à la dégustation de trois vins de la propriété pour éveiller vos papilles comme un vrai connaisseur. Une activité conviviale à partager en famille ou entre amis, avec jus de fruits et jeux pour les plus jeunes.",
        average_budget: 1500,
      },
      {
        name: "Le Saint Julien",
        address: "11 Rue de Saint-Julien, 33250 Saint-Julien-Beychevelle",
        description:
          "Découvrez Le Saint Julien, un véritable havre de gastronomie française niché au cœur du Médoc, à Saint-Julien-Beychevelle. Depuis 1996, Claude et Rosy Broussard ont insufflé une âme chaleureuse et conviviale à cette magnifique bâtisse en pierre du XIXᵉ siècle, créant un lieu où l'on se sent immédiatement chez soi. Le chef Claude Broussard sublime les saveurs locales en proposant une cuisine authentique, élaborée avec des produits frais et de saison, dont une partie provient directement du potager du restaurant. Parmi ses créations, laissez-vous tenter par des plats raffinés comme les ravioles de homard, le pressé d’artichauts et de foie gras, les médaillons de lotte accompagnés d’une crème de chorizo, ou encore le tournedos de canard à l’orange. Une expérience culinaire qui allie tradition et créativité avec élégance.",
        average_budget: 5000,
      },
      {
        name: "Dans le Noir",
        address:
          "Dock G6 au sein du Radisson Blu Hotel, 63 Rue Lucien Faure, 33000 Bordeaux",
        description:
          "Plongez dans une expérience culinaire hors du commun avec Dans le Noir ? Bordeaux, un restaurant où vous dégusterez vos plats dans une obscurité totale. Ce concept innovant, imaginé en 2004, invite à redécouvrir les saveurs et les textures de chaque plat, tout en étant guidé par une équipe de serveurs spécialisés. Ce qui rend Dans le Noir ? unique Un voyage sensoriel inédit : Dîner dans le noir absolu vous pousse à vous concentrer pleinement sur vos autres sens, redécouvrant ainsi le goût, les arômes et les textures avec une intensité nouvelle. Une cuisine inventive et de qualité : Les chefs mettent un point d'honneur à élaborer des menus surprises à partir de produits frais et de saison, garantissant des plats savoureux et soigneusement équilibrés. Une expérience humaine enrichissante : L'équipe, composée de guides inattendus, vous accompagne tout au long de ce voyage, favorisant des échanges authentiques et une perspective différente sur le handicap.",
        average_budget: 6000,
      },
      {
        name: "Le K Baroque",
        address: "1 Quai des Chartrons, 33000 Bordeaux",
        description:
          "Situé sur les quais des Chartrons, avec une vue imprenable sur la Garonne, Le K Baroque vous transporte dans un univers unique où la gastronomie française s’allie à une ambiance artistique et théâtrale. Une expérience immersive et élégante Dès votre arrivée, vous serez plongé dans une atmosphère envoûtante, inspirée du baroque, où les jeux de lumière, les performances artistiques et l’univers visuel évoluent tout au long de la soirée. Laissez-vous surprendre par des spectacles mêlant cabaret, cirque et théâtre, pour une expérience culinaire qui éveille aussi vos sens visuels et auditifs. Une cuisine inventive et raffinée Le chef propose une carte qui revisite la cuisine française avec une touche contemporaine, en mettant à l’honneur des produits frais et de saison.",
        average_budget: 4500,
      },
      {
        name: "Son",
        address: "14 Rue Paul Louis Lande, 33000 Bordeaux",
        description:
          "Au cœur de Bordeaux, près du Musée d’Aquitaine, Son' Restaurant vous invite à découvrir une expérience culinaire inédite dans un cadre élégant et contemporain. Une cuisine fusion asiatique inventive Le chef Sylvain Renzetti vous propose une cuisine fusion asiatique qui met à l’honneur des produits locaux et de saison. Inspirée par les saveurs d’Asie, la carte évolue régulièrement pour refléter la fraîcheur des ingrédients et la créativité du moment. Chaque plat est soigneusement conçu pour marier textures, parfums et influences culinaires.",
        average_budget: 7500,
      },
      {
        name: "L'Avenue Carnot",
        address: "2 Avenue Carnot, 33000 Bordeaux",
        description:
          "nichée à proximité du Parc Bordelais, L'Avenue Carnot est une brasserie française qui mêle avec finesse tradition et modernité. Le chef Pascal Chollet, fort de ses 25 ans d'expérience, met un point d'honneur à revisiter les grands classiques de la cuisine française en y ajoutant une touche contemporaine. Chaque plat est élaboré avec des produits frais et de saison, valorisant les saveurs authentiques du terroir bordelais.",
        average_budget: 4500,
      },
      {
        name: "Le 7",
        address: "134 Quai de Bacalan, 33300 Bordeaux",
        description:
          "Installé au sommet de la Cité du Vin, Le 7 Restaurant Panoramique vous invite à profiter d’une vue spectaculaire sur Bordeaux et la Garonne. Le chef Romain Talbourdeau met à l’honneur les produits régionaux à travers une cuisine bistronomique inventive, évoluant au fil des saisons.",
        average_budget: 5000,
      },
      {
        name: "Le Confidentiel",
        address: "80 Quai des Chartrons, 33300 Bordeaux",
        description:
          "Installé dans un ancien chai de négoce en vin, Le Confidentiel offre une ambiance élégante et intime, mise en valeur par ses pierres apparentes et ses larges verrières qui rappellent l'architecture bordelaise traditionnelle. Le restaurant propose une cuisine française contemporaine, où les produits frais et de saison sont à l’honneur.",
        average_budget: 2000,
      },
      {
        name: "Terre d'Émeraude",
        address: "32 Rue de Cursol, 33000 Bordeaux",
        description:
          "Au cœur de Bordeaux, Terre d'Émeraude vous invite à découvrir la richesse de la gastronomie colombienne. Ce restaurant chaleureux met à l’honneur les saveurs authentiques de la Colombie en proposant des plats typiques préparés avec des produits frais et de qualité. Son ambiance conviviale et immersive transporte ses convives directement en Amérique latine, pour un voyage culinaire unique.",
        average_budget: 3000,
      },
      {
        name: "Le Riad Marrakech",
        address: "167 Av. de la Libération Charles de Gaulle, 33110 Le Bouscat",
        description:
          "Situé à Le Bouscat, Le Riad Marrakech est une véritable invitation au voyage, offrant une immersion dans les saveurs et traditions marocaines. Ce restaurant authentique propose des plats emblématiques tels que couscous, tajines, pastillas, méchouis et grillades, préparés avec soin pour refléter l'essence de la gastronomie marocaine.",
        average_budget: 2500,
      },
      {
        name: "Le Dragon Doré",
        address: "9 Rue Paul Louis Lande, 33000 Bordeaux",
        description:
          "Idéalement situé au cœur de Bordeaux, Le Dragon Doré est un restaurant asiatique qui séduit par sa cuisine variée et authentique. Spécialisé dans les plats chinois et thaïlandais, l’établissement met à l’honneur des saveurs exotiques avec des recettes maison. Le cadre chaleureux et l’atmosphère conviviale en font un lieu idéal pour partager un repas en famille ou entre amis.",
        average_budget: 2000,
      },
      {
        name: "Okra",
        address: "51 Rue Judaïque, 33000 Bordeaux",
        description:
          "En plein centre de Bordeaux, OKRA est un bistro qui fusionne les traditions culinaires africaines avec des influences françaises modernes. Sous la direction du chef Patrick N'Diaye, originaire de Guinée, le restaurant réinvente des plats typiques en intégrant des ingrédients emblématiques de la cuisine africaine, offrant une expérience gastronomique inédite et raffinée.",
        average_budget: 2500,
      },
      {
        name: "La Ferme du Petit Argelas",
        address: "15 Pl. de la Liberté, 33160 Saint-Médard-en-Jalles",
        description:
          "installée à Saint-Médard-en-Jalles, La Ferme du Petit Argelas vous invite à découvrir une cuisine traditionnelle et authentique, mettant à l’honneur les saveurs du terroir. Ce restaurant propose des plats élaborés à partir de produits locaux et fermiers, avec une spécialité pour les recettes à base de canard. Le cadre rustique et chaleureux crée une ambiance conviviale, idéale pour partager un moment gourmand.",
        average_budget: 3000,
      },
      {
        name: "Les Récoltants",
        address: "18 Rue Sainte-Colombe, 33000 Bordeaux",
        description:
          "Au cœur de Bordeaux, Les Récoltants propose une expérience unique mêlant restauration et marché fermier biologique. S'approvisionnant principalement auprès de leur ferme située à Macau, à proximité de la ville, le restaurant met un point d'honneur à utiliser des produits frais, locaux et issus de l'agriculture biologique.",
        average_budget: 2500,
      },
      {
        name: "Maison Nouvelle",
        address: "11 Rue Rode, 33000 Bordeaux",
        description:
          "Situé au cœur du quartier des Chartrons, Maison Nouvelle est le restaurant gastronomique signé par le chef étoilé Philippe Etchebest. Installé dans une maison en pierre au charme élégant, l'établissement offre une ambiance intime et accueillante, à l'image d'un repas partagé chez un hôte passionné. La carte, imaginée autour des produits locaux d'exception, met à l'honneur des ingrédients tels que le caviar d’Aquitaine, la crevette impériale de Charente ou encore des légumes frais de la région.",
        average_budget: 25500,
      },
      {
        name: "Table du Lavoir",
        address: "Chemin de Smith Haut Lafitte, 33650 Martillac",
        description:
          "Nichée au cœur des prestigieux vignobles du Château Smith Haut Lafitte, La Table du Lavoir est une auberge champêtre qui met à l'honneur les saveurs du terroir. Le bâtiment, empreint d'authenticité, a été conçu avec des bois du XVIIIᵉ siècle récupérés dans les chais de Lafite Rothschild. Lors des beaux jours, les portes vitrées s’ouvrent sur une terrasse abritée, idéale pour savourer un repas en pleine nature.",
        average_budget: 3500,
      },
      {
        name: "La Grand'Vigne",
        address: "Chemin de Smith Haut Lafitte, 33650 Martillac",
        description:
          "Installé au cœur du domaine viticole du Château Smith Haut Lafitte, La Grande Vigne est un restaurant étoilé au guide Michelin dirigé par le chef Nicolas Masse. Ce restaurant d’exception propose une cuisine gastronomique élaborée à partir de produits locaux, et une carte qui évolue selon les saisons.",
        average_budget: 11000,
      },
      {
        name: "Matsa Caffè",
        address: "16 Av. Thiers, 33100 Bordeaux",
        description:
          "Installé dans le quartier de la Bastide à Bordeaux, Matsa Caffè est une cantine végétarienne au charme méditerranéen, inspirée des saveurs italiennes. Ce coffee shop chaleureux propose une cuisine maison préparée à partir de produits frais, de saison et issus de producteurs locaux. Vous y découvrirez une variété de plats végétariens généreux, tels que des focaccias moelleuses, des pâtes fraîches et des desserts italiens faits maison. Le Matsa Caffè est également un lieu d’échange et de partage, où des ateliers culinaires, comme la préparation de pâtes fraîches et de cocktails, permettent de s’initier à l’art de la cuisine végétale italienne. Horaires d'ouverture Lundi au vendredi : 9h00 – 14h30 / Samedi et dimanche : Fermé",
        average_budget: 2500,
      },
      {
        name: "Monkey Mood",
        address: "11 Rue Camille Sauvageau, 33800 Bordeaux",
        description:
          "Situé dans le quartier animé de Saint-Michel à Bordeaux, Monkey Mood est un restaurant 100 % végan qui s’inspire des saveurs indonésiennes. L’établissement propose une cuisine maison, préparée à partir d’ingrédients bio et locaux, mettant en avant des plats riches en saveurs tels que le Nasi Goreng, les burgers végétaliens et les rouleaux de printemps. L’ambiance chaleureuse et décontractée, ainsi que la terrasse offrant une vue sur la basilique Saint-Michel, en font un lieu idéal pour se retrouver entre amis ou en famille. Horaires d'ouverture Mercredi : 12h00 – 14h30 / Jeudi à samedi : Déjeuner : 12h00 – 14h30 - Dîner : 19h30 – 22h00 / Dimanche : 11h30 – 14h30 (brunch) / Lundi et mardi : Fermé",
        average_budget: 2500,
      },
      {
        name: "Kalimera",
        address: "1 Pl. Marie de Gournay, 33100 Bordeaux",
        description:
          "Situé sur la rive droite de Bordeaux, face à la salle Le Bien Public, Kalimera vous transporte au cœur de la Méditerranée avec sa cuisine grecque authentique. Spécialisé dans la street food hellénique, le restaurant propose des souvlakis traditionnels : des pitas de blé complet garnies de bœuf ou de poulet provenant de fermes françaises, ou encore d’halloumi chypriote certifié AOP. L’établissement met un point d’honneur à utiliser des ingrédients frais et de saison, avec des produits emblématiques importés directement de Grèce, tels que l'huile d'olive bio produite par la famille du fondateur, Télémaque Argytiou. Horaires d'ouverture Lundi au vendredi : 12h00 – 14h30 / Samedi et dimanche : Fermé",
        average_budget: 1500,
      },
      {
        name: "La Table du Décanteur",
        address: "6 Esplanade Jean Valleix, 33110 Le Bouscat",
        description:
          "Au cœur du Bouscat, La Table du Décanteur propose une expérience bistronomique unique où gastronomie française contemporaine et œnologie se rencontrent. Fondé par les frères Lucas et Benjamin Baudet, cet établissement chaleureux met à l’honneur une cuisine raffinée, conçue par le chef Paul Andréjac, qui valorise des produits locaux et de saison. La carte des vins, soigneusement élaborée, propose une sélection variée de crus pour accompagner et sublimer chaque plat. Horaires d'ouverture Lundi au samedi : 12h00 – 00h00 / Dimanche : Fermé",
        average_budget: 2500,
      },
      {
        name: "Villa Victor Louis",
        address: "42 rue Rodrigues Pereire 33000 Bordeaux",
        description:
          "Au cœur du quartier historique de Saint-Seurin, la Villa Victor Louis vous ouvre ses portes. Cette maison d’hôtes, inaugurée en 2016 après une rénovation familiale minutieuse, célèbre le patrimoine local et son histoire. Que ce soit pour une escapade ou un déplacement professionnel, vous serez accueilli dans un cadre chaleureux et authentique. Dans un esprit de préservation du raffinement du XVIIIᵉ siècle, la Villa Victor Louis marie élégamment l’authenticité de l’époque à un confort moderne. Chaque espace, de la réception aux chambres, a été décoré avec soin : mobilier choisi, détails raffinés et ambiance contemporaine s’unissent pour créer une expérience unique et sophistiquée. L’atmosphère familiale qui règne ici garantit une convivialité et une attention bienveillante pour chaque hôte. Dès votre arrivée, notre équipe dévouée sera à votre écoute, prête à répondre à vos envies et à vous conseiller pour profiter pleinement de votre séjour. Une expérience sur mesure dans un cadre élégant et accueillant vous attend.",
        average_budget: 11000,
      },
      {
        name: "Best Western Premier Hotel des Vignes et des Anges",
        address: "3 Quai Albert Pichon, 33250 Pauillac",
        description:
          "Après une rénovation complète, l’Hôtel de France et d’Angleterre devient le Best Western Premier Hôtel des Vignes et des Anges, ouvert depuis juin 2023. Cet établissement 4 étoiles allie avec élégance le raffinement bordelais et la richesse du terroir viticole. Idéalement situé entre l’estuaire de la Gironde et des jardins verdoyants, cet hôtel offre une expérience unique face au port de plaisance. La décoration, inspirée de l’Italie, mêle sophistication et chaleur dans un cadre apaisant, entouré de nature et de pierres de taille. Entre terrasses avec vue, jardins intimistes et pergolas ombragées, chaque espace célèbre l’harmonie entre terre, pierre et eau, emblématique de la région. Pensés pour le bien-être, les salons et espaces communs s’adaptent aussi aux travailleurs nomades, faisant de cet hôtel un lieu idéal pour se ressourcer ou travailler en toute sérénité. Une invitation à découvrir le Médoc dans un cadre aussi charmant qu’inspirant.",
        average_budget: 18000,
      },
      {
        name: "Mondrian Bordeaux Les Carmes",
        address: "81 cours du Medoc, Chartrons, 33300 Bordeaux",
        description:
          "Derrière la façade du XIXᵉ siècle d’une ancienne cave à vin emblématique de Bordeaux, transformée en hôtel 5 étoiles par Philippe Starck, se cachent un design audacieux, une gastronomie exquise et une approche holistique du bien-être. Le Mondrian Bordeaux Les Carmes réinvente l’esprit authentique de la région, offrant une vision contemporaine et inspirante qui ne manquera pas de séduire.",
        average_budget: 27000,
      },
      {
        name: "Le 50 Suite & SPA",
        address: "50 cours Anatole France 33000 Bordeaux",
        description:
          "Le 50, Suite & SPA propose 5 appartements haut de gamme avec jacuzzi et spa, nichés au cœur de Bordeaux. Idéalement situés à seulement 5 minutes à pied de la célèbre tour Pey-Berland, ces appart-hôtels de luxe vous invitent à vivre une expérience exceptionnelle au centre de la cité bordelaise. Profitez d’un jacuzzi privatif pour vous relaxer pleinement : plongez dans des eaux chaudes et apaisantes, laissez le stress s’évanouir et savourez un véritable moment de bien-être. Les suites, décorées avec élégance, combinent sobriété et raffinement dans un style mêlant béton ciré et tons boisés chaleureux. Chaque appartement vous offre un espace privé de détente avec jacuzzi, et certaines suites disposent également d'une baignoire à bulles ou d’un spa pour une expérience de relaxation incomparable.",
        average_budget: 30000,
      },
      {
        name: "Omira",
        address: "Rue de la Tour de Gassies 33000 BORDEAUX",
        description:
          "Derrière les imposantes portes d’anciens garages du vieux Bordeaux se cache Omira, un lieu hors du temps, mêlant luxe, calme et volupté. Cet établissement intime et raffiné abrite deux superbes suites de 80 m², chacune dotée d’une identité unique. La suite Aphrodite vous enveloppe dans une atmosphère cocooning et élégante, tandis que la suite Jungle vous transporte dans un décor dépaysant, boisé et végétalisé. Conçues pour offrir une expérience romantique et insolite, ces love rooms d’exception sont équipées d’une literie haut de gamme, de mobilier confortable invitant à la détente, d’un spa, d’un hammam, et même d’une barre de pole dance pour l’une d’elles. Omira promet un séjour où sensualité et romantisme s’entrelacent pour créer des moments inoubliables.",
        average_budget: 60000,
      },
      {
        name: "Les secrets de Marie-Astrid",
        address: "14 Rue Lafontaine, 33800 Bordeaux",
        description:
          "Vous êtes invités à vous lover et à vous cocooner dans un appartement entièrement pensé et soigné dans les moindres détails, conçu spécialement pour les amoureux. Offrez-vous une parenthèse enchantée, échappez-vous du quotidien et laissez-vous emporter par une expérience inoubliable, qui s’inscrira parmi vos plus beaux souvenirs. Parce que la vie de couple mérite des moments privilégiés, cet appartement a été imaginé pour vous offrir une évasion intime dans un cadre chaleureux et romantique, niché au cœur de Bordeaux. Anniversaire de mariage, demande en mariage, nuit de noces, week-end en amoureux pour découvrir Bordeaux, ou simplement une pause bien-être à deux : chaque occasion est parfaite pour se retrouver et raviver la flamme de l’amour. Chaque détail a été soigneusement pensé pour que votre séjour soit unique, vous invitant à créer des souvenirs précieux dans un écrin de sérénité et de tendresse.",
        average_budget: 18900,
      },
      {
        name: "Villa 4* à l'esprit loft, contemporain et design",
        address: "Taillan-Médoc",
        description:
          "Cette villa entièrement rénovée de 200 m² offre des prestations haut de gamme et peut accueillir jusqu’à 10 personnes. Située aux portes du Médoc, dans un quartier calme et verdoyant, elle bénéficie d’un cadre idéal, bordée par de vastes forêts accessibles à pied pour d’agréables balades. Alliant confort et modernité, cette maison au style affirmé se trouve à seulement 25 minutes de Bordeaux et 30 minutes de l’océan. Entièrement climatisée, elle dispose d’une spacieuse pièce de vie de 80 m² avec une cuisine ouverte, de 5 chambres équipées de salles d’eau privatives et de télévisions, ainsi que d’une lingerie avec machine à laver. À l’extérieur, vous profiterez d’une grande terrasse donnant sur un terrain clos et paysagé de 550 m², parfait pour se détendre en toute sérénité. Un véritable havre de paix pour des séjours en famille ou entre amis.",
        average_budget: 39000,
      },
      {
        name: "La Villa Du Bourg",
        address: "Eysines, France",
        description:
          "Offrez-vous une escapade unique aux portes de Bordeaux en séjournant à La Villa du Bourg. Nichée au cœur d’Eysines, cette maison atypique est le point de départ parfait pour explorer les trésors de la région, des vignobles du Médoc aux ruelles bordelaises. Alliant charme et confort, cette villa promet un séjour inoubliable dans un cadre authentique et chaleureux.",
        average_budget: 45000,
      },
      {
        name: "Maison de charme au cœur des vignobles bordelais",
        address: "Fronsac, France",
        description:
          "Séjournez dans une élégante maison de 220 m² au cœur des vignobles bordelais, parfaitement rénovée pour allier confort moderne et authenticité. Avec ses cinq chambres spacieuses, sa cuisine équipée et son jardin privé, cette demeure est idéale pour des moments conviviaux en famille ou entre amis. Située à Fronsac, elle offre un accès privilégié aux prestigieux domaines viticoles et aux villages pittoresques de la région. Un lieu parfait pour une escapade mémorable au cœur du terroir bordelais.",
        average_budget: 45900,
      },
      {
        name: "Domaine Baruteau",
        address: "Landes",
        description:
          "Niché dans un parc de 2,5 hectares à Soustons, le Domaine Baruteau est une maison d'hôtes de charme, idéale pour un séjour alliant détente et nature. Cette demeure de 1907 propose cinq chambres élégantes, une piscine chauffée, un jacuzzi en plein air et un sauna pour une expérience de bien-être absolue. Savourez des repas préparés avec les produits du potager ou explorez les plages landaises à proximité. Un lieu unique pour se ressourcer et profiter des richesses des Landes.",
        average_budget: 20000,
      },
      {
        name: "La Charmeuse",
        address: "Marmande",
        description:
          "Découvrez La Charmeuse, une élégante maison de ville indépendante située au cœur de Marmande, entre Bordeaux et Toulouse. Ce gîte spacieux de 250 m², récemment rénové en 2023, allie confort moderne et charme d’antan, offrant un cadre parfait pour vos séjours en famille ou entre amis. Un espace conçu pour votre confort Rez-de-chaussée : Un hall d’entrée avec rangements, une cuisine entièrement équipée pour préparer de délicieux repas, une salle à manger lumineuse et un salon accueillant, idéal pour se détendre. Premier et deuxième étages : Six chambres élégantes, chacune dotée de sa salle de bains privative et de WC, garantissant intimité et bien-être pour tous les hôtes. Un extérieur propice à la détente Profitez d’un jardin clos agrémenté d’une terrasse aménagée pour partager des moments conviviaux en plein air. Une piscine privative au sel (8x4m), ouverte de mai à septembre, invite à la baignade et à la relaxation, dans un cadre sécurisé et paisible.",
        average_budget: 79300,
      },
      {
        name: "Maison flottante - Maisonboat - Baurech Insolite",
        address: "Port Leyron, Baurech",
        description:
          "Plongez dans une expérience unique en séjournant sur une maison flottante au cœur du lac de Baurech, à seulement 20 km au sud de Bordeaux. Cette oasis paisible et insolite vous invite à vous détendre dans un cadre naturel exceptionnel, où calme et sérénité règnent en maître. Parfaitement aménagée, cette maison flottante climatisée dispose d'une chambre cosy, d'une cuisine entièrement équipée et d'une terrasse privée offrant une vue imprenable sur le lac. Réveillez-vous au son de la nature, savourez votre café face à l’eau scintillante et laissez-vous tenter par les activités à proximité : pêche, randonnée ou encore canoë-kayak pour les amateurs de sensations douces. Avec une plage privée pour vous ressourcer, un parking gratuit et une connexion Wi-Fi pour rester connecté si besoin, cet hébergement vous promet un séjour inoubliable. Laissez-vous charmer par ce lieu magique, où confort et nature s’harmonisent à merveille pour une escapade hors du commun.",
        average_budget: 60000,
      },
      {
        name: "Hotel Source de Caudalie",
        address: "Smith Haut-Lafitte, 33650 Martillac",
        description:
          "Nichées au cœur des vignobles du Château Smith Haut Lafitte, Grand Cru Classé de Graves, Les Sources de Caudalie offrent un séjour unique mêlant raffinement et immersion dans la nature. Situé à quelques minutes de Bordeaux, cet hôtel 5 étoiles dispose de 62 chambres et suites décorées avec soin, chacune reflétant l’authenticité et le charme de la région Aquitaine. L’établissement propose une expérience complète avec un spa de vinothérapie, des restaurants gastronomiques, et des activités autour du vin et de la nature. Conçu avec des matériaux locaux et recyclés, l’hôtel s’intègre harmonieusement à son environnement, créant une atmosphère élégante et chaleureuse.",
        average_budget: 27100,
      },
    ];

    for (let i = 0; i < chr.length; i++) {
      this.insert(chr[i]);
    }
  }
}

export default ChrSeeder;
