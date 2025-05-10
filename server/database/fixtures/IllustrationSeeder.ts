import AbstractSeeder from "./AbstractSeeder";

class IllustrationSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "illustration", truncate: true });
  }

  run() {
    const illustrations = [
      {
        link: "assets/images/activity-images/SPALesSourcesDeCaudalie1_desktop.webp",
      },
      {
        link: "assets/images/activity-images/SPALesSourcesDeCaudalie1_mobile.webp",
      },
      {
        link: "assets/images/activity-images/SPALesSourcesDeCaudalie2_desktop.jpg",
      },
      {
        link: "assets/images/activity-images/SPALesSourcesDeCaudalie2_mobile.jpg",
      },
      {
        link: "assets/images/activity-images/SPALesSourcesDeCaudalie3_desktop.jpg",
      },
      {
        link: "assets/images/activity-images/SPALesSourcesDeCaudalie3_mobile.jpg",
      },
      {
        link: "assets/images/activity-images/IvazioIslandPrisonIsland1_desktop.jpg",
      },
      {
        link: "assets/images/activity-images/IvazioIslandPrisonIsland1_mobile.jpg",
      },
      {
        link: "assets/images/activity-images/IvazioIslandPrisonIsland2_desktop.jpg",
      },
      {
        link: "assets/images/activity-images/IvazioIslandPrisonIsland2_mobile.jpg",
      },
      {
        link: "assets/images/activity-images/IvazioIslandPrisonIsland3_desktop.jpg",
      },
      {
        link: "assets/images/activity-images/IvazioIslandPrisonIsland3_mobile.jpg",
      },
      {
        link: "assets/images/activity-images/ALaFrancaiseDegustationMedocStEm1_desktop.jpg",
      },
      {
        link: "assets/images/activity-images/ALaFrancaiseDegustationMedocStEm1_mobile.jpg",
      },
      {
        link: "assets/images/activity-images/ALaFrancaiseDegustationMedocStEm2_desktop.jpg",
      },
      {
        link: "assets/images/activity-images/ALaFrancaiseDegustationMedocStEm2_mobile.jpg",
      },
      {
        link: "assets/images/activity-images/ALaFrancaiseDegustationMedocStEm3_desktop.jpg",
      },
      {
        link: "assets/images/activity-images/ALaFrancaiseDegustationMedocStEm3_mobile.jpg",
      },
      {
        link: "assets/images/activity-images/ALaFrancaiseExursionDuneDuPyla1_desktop.jpg",
      },
      {
        link: "assets/images/activity-images/ALaFrancaiseExursionDuneDuPyla1_mobile.jpg",
      },
      {
        link: "assets/images/activity-images/ALaFrancaiseExursionDuneDuPyla2_desktop.jpg",
      },
      {
        link: "assets/images/activity-images/ALaFrancaiseExursionDuneDuPyla2_mobile.jpg",
      },
      {
        link: "assets/images/activity-images/ALaFrancaiseExursionDuneDuPyla3_desktop.jpg",
      },
      {
        link: "assets/images/activity-images/ALaFrancaiseExursionDuneDuPyla3_mobile.jpg",
      },
      {
        link: "assets/images/activity-images/BordeauxBite1_desktop.jpg",
      },
      {
        link: "assets/images/activity-images/BordeauxBite1_mobile.jpg",
      },
      {
        link: "assets/images/activity-images/BordeauxBite2_desktop.jpg",
      },
      {
        link: "assets/images/activity-images/BordeauxBite2_mobile.jpg",
      },
      {
        link: "assets/images/activity-images/BordeauxBite3_desktop.jpg",
      },
      {
        link: "assets/images/activity-images/BordeauxBite3_mobile.jpg",
      },
      {
        link: "assets/images/activity-images/VirtualRoom1_desktop.jpg",
      },
      {
        link: "assets/images/activity-images/VirtualRoom1_mobile.jpg",
      },
      {
        link: "assets/images/activity-images/VirtualRoom2_desktop.jpg",
      },
      {
        link: "assets/images/activity-images/VirtualRoom2_mobile.jpg",
      },
      {
        link: "assets/images/activity-images/VirtualRoom3_desktop.jpg",
      },
      {
        link: "assets/images/activity-images/VirtualRoom3_mobile.jpg",
      },
      {
        link: "assets/images/activity-images/SensasBordeaux1_desktop.jpg",
      },
      {
        link: "assets/images/activity-images/SensasBordeaux1_mobile.jpg",
      },
      {
        link: "assets/images/activity-images/SensasBordeaux2_desktop.jpg",
      },
      {
        link: "assets/images/activity-images/SensasBordeaux2_mobile.jpg",
      },
      {
        link: "assets/images/activity-images/SensasBordeaux3_desktop.jpg",
      },
      {
        link: "assets/images/activity-images/SensasBordeaux3_mobile.jpg",
      },
      {
        link: "assets/images/activity-images/WineBeerSpa1_desktop.jpg",
      },
      {
        link: "assets/images/activity-images/WineBeerSpa1_mobile.jpg",
      },
      {
        link: "assets/images/activity-images/WineBeerSpa2_desktop.jpg",
      },
      {
        link: "assets/images/activity-images/WineBeerSpa2_mobile.jpg",
      },
      {
        link: "assets/images/activity-images/WineBeerSpa3_desktop.jpg",
      },
      {
        link: "assets/images/activity-images/WineBeerSpa3_mobile.jpg",
      },
      {
        link: "assets/images/activity-images/ColorRoom1_desktop.jpg",
      },
      {
        link: "assets/images/activity-images/ColorRoom1_mobile.jpg",
      },
      {
        link: "assets/images/activity-images/ColorRoom2_desktop.jpg",
      },
      {
        link: "assets/images/activity-images/ColorRoom2_mobile.jpg",
      },
      {
        link: "assets/images/activity-images/ColorRoom3_desktop.jpg",
      },
      {
        link: "assets/images/activity-images/ColorRoom3_mobile.jpg",
      },
      {
        link: "assets/images/activity-images/RushActionGame1_desktop.jpg",
      },
      {
        link: "assets/images/activity-images/RushActionGame1_mobile.jpg",
      },
      {
        link: "assets/images/activity-images/RushActionGame2_desktop.jpg",
      },
      {
        link: "assets/images/activity-images/RushActionGame2_mobile.jpg",
      },
      {
        link: "assets/images/activity-images/RushActionGame3_desktop.jpg",
      },
      {
        link: "assets/images/activity-images/RushActionGame3_mobile.jpg",
      },
      {
        link: "assets/images/activity-images/SimAviation1_desktop.jpg",
      },
      {
        link: "assets/images/activity-images/SimAviation1_mobile.jpg",
      },
      {
        link: "assets/images/activity-images/SimAviation2_desktop.jpg",
      },
      {
        link: "assets/images/activity-images/SimAviation2_mobile.jpg",
      },
      {
        link: "assets/images/activity-images/SimAviation3_desktop.webp",
      },
      {
        link: "assets/images/activity-images/SimAviation3_mobile.webp",
      },
      {
        link: "assets/images/activity-images/SimFactory1_desktop.webp",
      },
      {
        link: "assets/images/activity-images/SimFactory1_mobile.webp",
      },
      {
        link: "assets/images/activity-images/SimFactory2_desktop.webp",
      },
      {
        link: "assets/images/activity-images/SimFactory2_mobile.webp",
      },
      {
        link: "assets/images/activity-images/SimFactory3_desktop.jpg",
      },
      {
        link: "assets/images/activity-images/SimFactory3_mobile.jpg",
      },
      {
        link: "assets/images/activity-images/ArtisanBijoutiere1_desktop.webp",
      },
      {
        link: "assets/images/activity-images/ArtisanBijoutiere1_mobile.webp",
      },
      {
        link: "assets/images/activity-images/ArtisanBijoutiere2_desktop.webp",
      },
      {
        link: "assets/images/activity-images/ArtisanBijoutiere2_mobile.webp",
      },
      {
        link: "assets/images/activity-images/ArtisanBijoutiere3_desktop.webp",
      },
      {
        link: "assets/images/activity-images/ArtisanBijoutiere3_mobile.webp",
      },
      {
        link: "assets/images/activity-images/Kokedama1_desktop.webp",
      },
      {
        link: "assets/images/activity-images/Kokedama1_mobile.webp",
      },
      {
        link: "assets/images/activity-images/Kokedama2_desktop.webp",
      },
      {
        link: "assets/images/activity-images/Kokedama2_mobile.webp",
      },
      {
        link: "assets/images/activity-images/Kokedama3_desktop.webp",
      },
      {
        link: "assets/images/activity-images/Kokedama3_mobile.webp",
      },
      {
        link: "assets/images/activity-images/AssemblerParfum1_desktop.webp",
      },
      {
        link: "assets/images/activity-images/AssemblerParfum1_mobile.webp",
      },
      {
        link: "assets/images/activity-images/AssemblerParfum2_desktop.webp",
      },
      {
        link: "assets/images/activity-images/AssemblerParfum2_mobile.webp",
      },
      {
        link: "assets/images/activity-images/AssemblerParfum3_desktop.webp",
      },
      {
        link: "assets/images/activity-images/AssemblerParfum3_mobile.webp",
      },
      {
        link: "assets/images/activity-images/FaceAFace1_desktop.jpg",
      },
      {
        link: "assets/images/activity-images/FaceAFace1_mobile.jpg",
      },
      {
        link: "assets/images/activity-images/FaceAFace2_desktop.jpg",
      },
      {
        link: "assets/images/activity-images/FaceAFace2_mobile.jpg",
      },
      {
        link: "assets/images/activity-images/FaceAFace3_desktop.webp",
      },
      {
        link: "assets/images/activity-images/FaceAFace3_mobile.webp",
      },
      {
        link: "assets/images/activity-images/ChateauLanessan1_desktop.webp",
      },
      {
        link: "assets/images/activity-images/ChateauLanessan1_mobile.webp",
      },
      {
        link: "assets/images/activity-images/ChateauLanessan2_desktop.webp",
      },
      {
        link: "assets/images/activity-images/ChateauLanessan2_mobile.webp",
      },
      {
        link: "assets/images/activity-images/ChateauLanessan3_desktop.webp",
      },
      {
        link: "assets/images/activity-images/ChateauLanessan3_mobile.webp",
      },
      {
        link: "assets/images/restaurant-images/lesaintjulien1_desktop.webp",
      },
      {
        link: "assets/images/restaurant-images/lesaintjulien1_mobile.webp",
      },
      {
        link: "assets/images/restaurant-images/lesaintjulien2_desktop.jpg",
      },
      {
        link: "assets/images/restaurant-images/lesaintjulien2_mobile.jpg",
      },
      {
        link: "assets/images/restaurant-images/lesaintjulien3_desktop.jpg",
      },
      {
        link: "assets/images/restaurant-images/lesaintjulien3_mobile.jpg",
      },
      {
        link: "assets/images/restaurant-images/danslenoirbordeaux1_desktop.jpg",
      },
      {
        link: "assets/images/restaurant-images/danslenoirbordeaux1_mobile.jpg",
      },
      {
        link: "assets/images/restaurant-images/danslenoirbordeaux2_desktop.jpg",
      },
      {
        link: "assets/images/restaurant-images/danslenoirbordeaux2_mobile.jpg",
      },
      {
        link: "assets/images/restaurant-images/danslenoirbordeaux3_desktop.jpg",
      },
      {
        link: "assets/images/restaurant-images/danslenoirbordeaux3_mobile.jpg",
      },
      {
        link: "assets/images/restaurant-images/lekbaroque1_desktop.jpg",
      },
      {
        link: "assets/images/restaurant-images/lekbaroque1_mobile.jpg",
      },
      {
        link: "assets/images/restaurant-images/lekbaroque2_desktop.jpg",
      },
      {
        link: "assets/images/restaurant-images/lekbaroque2_mobile.jpg",
      },
      {
        link: "assets/images/restaurant-images/lekbaroque3_desktop.jpg",
      },
      {
        link: "assets/images/restaurant-images/lekbaroque3_mobile.jpg",
      },
      {
        link: "assets/images/restaurant-images/sonrestaurant1_desktop.jpg",
      },
      {
        link: "assets/images/restaurant-images/sonrestaurant1_mobile.jpg",
      },
      {
        link: "assets/images/restaurant-images/sonrestaurant2_desktop.jpg",
      },
      {
        link: "assets/images/restaurant-images/sonrestaurant2_mobile.jpg",
      },
      {
        link: "assets/images/restaurant-images/sonrestaurant3_desktop.jpg",
      },
      {
        link: "assets/images/restaurant-images/sonrestaurant3_mobile.jpg",
      },
      {
        link: "assets/images/restaurant-images/avenuecarnot1_desktop.webp",
      },
      {
        link: "assets/images/restaurant-images/avenuecarnot1_mobile.webp",
      },
      {
        link: "assets/images/restaurant-images/avenuecarnot2_desktop.jpg",
      },
      {
        link: "assets/images/restaurant-images/avenuecarnot2_mobile.jpg",
      },
      {
        link: "assets/images/restaurant-images/avenuecarnot3_desktop.jpg",
      },
      {
        link: "assets/images/restaurant-images/avenuecarnot3_mobile.jpg",
      },
      {
        link: "assets/images/restaurant-images/le7bordeaux1_desktop.jpg",
      },
      {
        link: "assets/images/restaurant-images/le7bordeaux1_mobile.jpg",
      },
      {
        link: "assets/images/restaurant-images/le7bordeaux2_desktop.jpg",
      },
      {
        link: "assets/images/restaurant-images/le7bordeaux2_mobile.jpg",
      },
      {
        link: "assets/images/restaurant-images/le7bordeaux3_desktop.jpg",
      },
      {
        link: "assets/images/restaurant-images/le7bordeaux3_mobile.jpg",
      },
      {
        link: "assets/images/restaurant-images/leconfidentiel1_desktop.jpg",
      },
      {
        link: "assets/images/restaurant-images/leconfidentiel1_mobile.jpg",
      },
      {
        link: "assets/images/restaurant-images/leconfidentiel2_desktop.jpg",
      },
      {
        link: "assets/images/restaurant-images/leconfidentiel2_mobile.jpg",
      },
      {
        link: "assets/images/restaurant-images/leconfidentiel3_desktop.jpg",
      },
      {
        link: "assets/images/restaurant-images/leconfidentiel3_mobile.jpg",
      },
      {
        link: "assets/images/restaurant-images/terredemeraude1_desktop.jpeg",
      },
      {
        link: "assets/images/restaurant-images/terredemeraude1_mobile.jpg",
      },
      {
        link: "assets/images/restaurant-images/terredemeraude2_desktop.jpg",
      },
      {
        link: "assets/images/restaurant-images/terredemeraude2_mobile.jpg",
      },
      {
        link: "assets/images/restaurant-images/terredemeraude3_desktop.jpg",
      },
      {
        link: "assets/images/restaurant-images/terredemeraude3_mobile.jpg",
      },
      {
        link: "assets/images/restaurant-images/riadmarrakech1_desktop.jpg",
      },
      {
        link: "assets/images/restaurant-images/riadmarrakech1_mobile.jpg",
      },
      {
        link: "assets/images/restaurant-images/riadmarrakech2_desktop.jpg",
      },
      {
        link: "assets/images/restaurant-images/riadmarrakech2_mobile.jpg",
      },
      {
        link: "assets/images/restaurant-images/riadmarrakech3_desktop.jpg",
      },
      {
        link: "assets/images/restaurant-images/riadmarrakech3_mobile.jpg",
      },
      {
        link: "assets/images/restaurant-images/ledragondore1_desktop.jpg",
      },
      {
        link: "assets/images/restaurant-images/ledragondore1_mobile.jpg",
      },
      {
        link: "assets/images/restaurant-images/ledragondore2_desktop.jpg",
      },
      {
        link: "assets/images/restaurant-images/ledragondore2_mobile.jpg",
      },
      {
        link: "assets/images/restaurant-images/ledragondore3_desktop.jpg",
      },
      {
        link: "assets/images/restaurant-images/ledragondore3_mobile.jpg",
      },
      {
        link: "assets/images/restaurant-images/okra1_desktop.jpg",
      },
      {
        link: "assets/images/restaurant-images/okra1_mobile.jpg",
      },
      {
        link: "assets/images/restaurant-images/okra2_desktop.jpg",
      },
      {
        link: "assets/images/restaurant-images/okra2_mobile.jpg",
      },
      {
        link: "assets/images/restaurant-images/okra3_desktop.jpg",
      },
      {
        link: "assets/images/restaurant-images/okra3_mobile.jpg",
      },
      {
        link: "assets/images/restaurant-images/lafermedupetitargelas1_desktop.jpg",
      },
      {
        link: "assets/images/restaurant-images/lafermedupetitargelas1_mobile.jpg",
      },
      {
        link: "assets/images/restaurant-images/lafermedupetitargelas2_desktop.jpg",
      },
      {
        link: "assets/images/restaurant-images/lafermedupetitargelas2_mobile.jpg",
      },
      {
        link: "assets/images/restaurant-images/lafermedupetitargelas3_desktop.jpg",
      },
      {
        link: "assets/images/restaurant-images/lafermedupetitargelas3_mobile.jpg",
      },
      {
        link: "assets/images/restaurant-images/lesrecoltants1_desktop.jpg",
      },
      {
        link: "assets/images/restaurant-images/lesrecoltants1_mobile.jpg",
      },
      {
        link: "assets/images/restaurant-images/lesrecoltants2_desktop.jpg",
      },
      {
        link: "assets/images/restaurant-images/lesrecoltants2_mobile.jpg",
      },
      {
        link: "assets/images/restaurant-images/lesrecoltants3_desktop.jpg",
      },
      {
        link: "assets/images/restaurant-images/lesrecoltants3_mobile.jpg",
      },
      {
        link: "assets/images/restaurant-images/maisonnouvelle1_desktop.jpg",
      },
      {
        link: "assets/images/restaurant-images/maisonnouvelle1_mobile.jpg",
      },
      {
        link: "assets/images/restaurant-images/maisonnouvelle2_desktop.jpg",
      },
      {
        link: "assets/images/restaurant-images/maisonnouvelle2_mobile.jpg",
      },
      {
        link: "assets/images/restaurant-images/maisonnouvelle3_desktop.jpg",
      },
      {
        link: "assets/images/restaurant-images/maisonnouvelle3_mobile.jpg",
      },
      {
        link: "assets/images/restaurant-images/tabledulavoir1_desktop.jpg",
      },
      {
        link: "assets/images/restaurant-images/tabledulavoir1_mobile.jpg",
      },
      {
        link: "assets/images/restaurant-images/tabledulavoir2_desktop.jpg",
      },
      {
        link: "assets/images/restaurant-images/tabledulavoir2_mobile.jpg",
      },
      {
        link: "assets/images/restaurant-images/tabledulavoir3_desktop.jpg",
      },
      {
        link: "assets/images/restaurant-images/tabledulavoir3_mobile.jpg",
      },
      {
        link: "assets/images/restaurant-images/matsacaffe1_desktop.webp",
      },
      {
        link: "assets/images/restaurant-images/matsacaffe1_mobile.webp",
      },
      {
        link: "assets/images/restaurant-images/matsacaffe2_desktop.webp",
      },
      {
        link: "assets/images/restaurant-images/matsacaffe2_mobile.webp",
      },
      {
        link: "assets/images/restaurant-images/matsacaffe3_desktop.webp",
      },
      {
        link: "assets/images/restaurant-images/matsacaffe3_mobile.webp",
      },
      {
        link: "assets/images/restaurant-images/monkeymood1_desktop.jpg",
      },
      {
        link: "assets/images/restaurant-images/monkeymood1_mobile.jpg",
      },
      {
        link: "assets/images/restaurant-images/monkeymood2_desktop.jpg",
      },
      {
        link: "assets/images/restaurant-images/monkeymood2_mobile.jpg",
      },
      {
        link: "assets/images/restaurant-images/monkeymood3_desktop.jpg",
      },
      {
        link: "assets/images/restaurant-images/monkeymood3_mobile.jpg",
      },
      {
        link: "assets/images/restaurant-images/kalimera1_desktop.webp",
      },
      {
        link: "assets/images/restaurant-images/kalimera1_mobile.webp",
      },
      {
        link: "assets/images/restaurant-images/kalimera2_desktop.jpeg",
      },
      {
        link: "assets/images/restaurant-images/kalimera2_mobile.jpg",
      },
      {
        link: "assets/images/restaurant-images/kalimera3_desktop.jpg",
      },
      {
        link: "assets/images/restaurant-images/kalimera3_mobile.jpg",
      },
      {
        link: "assets/images/restaurant-images/latabledudecanteur1_desktop.webp",
      },
      {
        link: "assets/images/restaurant-images/latabledudecanteur1_mobile.webp",
      },
      {
        link: "assets/images/restaurant-images/latabledudecanteur2_desktop.jpg",
      },
      {
        link: "assets/images/restaurant-images/latabledudecanteur2_mobile.jpg",
      },
      {
        link: "assets/images/restaurant-images/latabledudecanteur3_desktop.jpg",
      },
      {
        link: "assets/images/restaurant-images/latabledudecanteur3_mobile.jpg",
      },
      {
        link: "assets/images/hotel-images/VillaVictorLouis1_desktop.jpg",
      },
      {
        link: "assets/images/hotel-images/VillaVictorLouis1_mobile.jpg",
      },
      {
        link: "assets/images/hotel-images/VillaVictorLouis2_desktop.jpg",
      },
      {
        link: "assets/images/hotel-images/VillaVictorLouis2_mobile.jpg",
      },
      {
        link: "assets/images/hotel-images/VillaVictorLouis3_desktop.jpg",
      },
      {
        link: "assets/images/hotel-images/VillaVictorLouis3_mobile.jpg",
      },
      {
        link: "assets/images/hotel-images/DesVignesEtDesAnges1_desktop.jpg",
      },
      {
        link: "assets/images/hotel-images/DesVignesEtDesAnges1_mobile.jpg",
      },
      {
        link: "assets/images/hotel-images/DesVignesEtDesAnges2_desktop.jpg",
      },
      {
        link: "assets/images/hotel-images/DesVignesEtDesAnges2_mobile.jpg",
      },
      {
        link: "assets/images/hotel-images/DesVignesEtDesAnges3_desktop.jpg",
      },
      {
        link: "assets/images/hotel-images/DesVignesEtDesAnges3_mobile.jpg",
      },
      {
        link: "assets/images/hotel-images/Mondrian1_desktop.webp",
      },
      {
        link: "assets/images/hotel-images/Mondrian1_mobile.webp",
      },
      {
        link: "assets/images/hotel-images/Mondrian2_desktop.webp",
      },
      {
        link: "assets/images/hotel-images/Mondrian2_mobile.webp",
      },
      {
        link: "assets/images/hotel-images/Mondrian3_desktop.jpg",
      },
      {
        link: "assets/images/hotel-images/Mondrian3_mobile.jpg",
      },
      {
        link: "assets/images/hotel-images/SuiteEtSpa1_desktop.jpg",
      },
      {
        link: "assets/images/hotel-images/SuiteEtSpa1_mobile.jpg",
      },
      {
        link: "assets/images/hotel-images/SuiteEtSpa2_desktop.webp",
      },
      {
        link: "assets/images/hotel-images/SuiteEtSpa2_mobile.webp",
      },
      {
        link: "assets/images/hotel-images/SuiteEtSpa3_desktop.webp",
      },
      {
        link: "assets/images/hotel-images/SuiteEtSpa3_mobile.webp",
      },
      {
        link: "assets/images/hotel-images/Omira1_desktop.jpg",
      },
      {
        link: "assets/images/hotel-images/Omira1_mobile.jpg",
      },
      {
        link: "assets/images/hotel-images/Omira2_desktop.jpg",
      },
      {
        link: "assets/images/hotel-images/Omira2_mobile.jpg",
      },
      {
        link: "assets/images/hotel-images/Omira3_desktop.jpg",
      },
      {
        link: "assets/images/hotel-images/Omira3_mobile.jpg",
      },
      {
        link: "assets/images/hotel-images/SecretsMarieAstrid1_desktop.jpg",
      },
      {
        link: "assets/images/hotel-images/SecretsMarieAstrid1_mobile.jpg",
      },
      {
        link: "assets/images/hotel-images/SecretsMarieAstrid2_desktop.jpg",
      },
      {
        link: "assets/images/hotel-images/SecretsMarieAstrid2_mobile.jpg",
      },
      {
        link: "assets/images/hotel-images/SecretsMarieAstrid3_desktop.jpg",
      },
      {
        link: "assets/images/hotel-images/SecretsMarieAstrid3_mobile.jpg",
      },
      {
        link: "assets/images/hotel-images/VillaEspritLoft1_desktop.jpg",
      },
      {
        link: "assets/images/hotel-images/VillaEspritLoft1_mobile.jpg",
      },
      {
        link: "assets/images/hotel-images/VillaEspritLoft2_desktop.jpg",
      },
      {
        link: "assets/images/hotel-images/VillaEspritLoft2_mobile.jpg",
      },
      {
        link: "assets/images/hotel-images/VillaEspritLoft3_desktop.jpg",
      },
      {
        link: "assets/images/hotel-images/VillaEspritLoft3_mobile.jpg",
      },
      {
        link: "assets/images/hotel-images/VillaDuBourg1_desktop.jpg",
      },
      {
        link: "assets/images/hotel-images/VillaDuBourg1_mobile.jpg",
      },
      {
        link: "assets/images/hotel-images/VillaDuBourg2_desktop.jpg",
      },
      {
        link: "assets/images/hotel-images/VillaDuBourg2_mobile.jpg",
      },
      {
        link: "assets/images/hotel-images/VillaDuBourg3_desktop.jpg",
      },
      {
        link: "assets/images/hotel-images/VillaDuBourg3_mobile.jpg",
      },
      {
        link: "assets/images/hotel-images/MaisonDeCharmeVignobles1_desktop.jpg",
      },
      {
        link: "assets/images/hotel-images/MaisonDeCharmeVignobles1_mobile.jpg",
      },
      {
        link: "assets/images/hotel-images/MaisonDeCharmeVignobles2_desktop.jpg",
      },
      {
        link: "assets/images/hotel-images/MaisonDeCharmeVignobles2_mobile.jpg",
      },
      {
        link: "assets/images/hotel-images/MaisonDeCharmeVignobles3_desktop.jpeg",
      },
      {
        link: "assets/images/hotel-images/MaisonDeCharmeVignobles3_mobile.jpg",
      },
      {
        link: "assets/images/hotel-images/DomaineBaruteau1_desktop.jpg",
      },
      {
        link: "assets/images/hotel-images/DomaineBaruteau1_mobile.jpg",
      },
      {
        link: "assets/images/hotel-images/DomaineBaruteau2_desktop.jpg",
      },
      {
        link: "assets/images/hotel-images/DomaineBaruteau2_mobile.jpg",
      },
      {
        link: "assets/images/hotel-images/DomaineBaruteau3_desktop.jpg",
      },
      {
        link: "assets/images/hotel-images/DomaineBaruteau3_mobile.jpg",
      },
      {
        link: "assets/images/hotel-images/LaCharmeuse1_desktop.jpg",
      },
      {
        link: "assets/images/hotel-images/LaCharmeuse1_mobile.jpg",
      },
      {
        link: "assets/images/hotel-images/LaCharmeuse2_desktop.jpg",
      },
      {
        link: "assets/images/hotel-images/LaCharmeuse2_mobile.jpg",
      },
      {
        link: "assets/images/hotel-images/LaCharmeuse3_desktop.jpg",
      },
      {
        link: "assets/images/hotel-images/LaCharmeuse3_mobile.jpg",
      },
      {
        link: "assets/images/hotel-images/MaisonBoatBaurech1_desktop.jpg",
      },
      {
        link: "assets/images/hotel-images/MaisonBoatBaurech1_mobile.jpg",
      },
      {
        link: "assets/images/hotel-images/MaisonBoatBaurech2_desktop.jpg",
      },
      {
        link: "assets/images/hotel-images/MaisonBoatBaurech2_mobile.jpg",
      },
      {
        link: "assets/images/hotel-images/MaisonBoatBaurech3_desktop.jpg",
      },
      {
        link: "assets/images/hotel-images/MaisonBoatBaurech3_mobile.jpg",
      },
      {
        link: "assets/images/hotel-images/HotelSourcesCaudalie1_desktop.jpg",
      },
      {
        link: "assets/images/hotel-images/HotelSourcesCaudalie1_mobile.jpg",
      },
      {
        link: "assets/images/hotel-images/HotelSourcesCaudalie2_desktop.jpg",
      },
      {
        link: "assets/images/hotel-images/HotelSourcesCaudalie2_mobile.jpg",
      },
      {
        link: "assets/images/hotel-images/HotelSourcesCaudalie3_desktop.jpg",
      },
      {
        link: "assets/images/hotel-images/HotelSourcesCaudalie3_mobile.jpg",
      },
    ];

    for (let i = 0; i < illustrations.length; i++) {
      this.insert(illustrations[i]);
    }
  }
}

export default IllustrationSeeder;
