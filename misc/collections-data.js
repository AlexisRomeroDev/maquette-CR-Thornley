/* =========================================================================
   Catalogue raisonné — INDEX DES COLLECTIONS
   -------------------------------------------------------------------------
   ⚠ Comme `personalities-data.js` et `cities-data.js`, et contrairement à
     `search-data.demo.js` : tout est EXTRAIT DE LA BASE de production
     (catalogue raisonné Thornley, 361 œuvres) le 2026-07-30.

   ✅ Différence majeure avec les deux autres index : ici la donnée est
     STRUCTURÉE. Les collections viennent de l'entité `ArtworkLocation`,
     reliée aux œuvres par une vraie relation. Aucun minage par expression
     régulière, donc aucune incertitude de reconnaissance : cet index est
     exhaustif et fidèle au champ administré.

   ⚠ Mais l'index est PAUVRE, et c'est la donnée qui l'est : sur 361 œuvres,
     **313 sont « actuelle inconnue »** (87 %) et il ne reste que
     **4 collections** — dont « Collection particulière », qui est un libellé
     générique et non une institution nommée (`generique: true`).
     Toute maquette qui suppose un index de collections fourni sonnera faux.

   `nonLocalisees` : le fourre-tout « actuelle inconnue », tenu à part. Ce
                     n'est pas une collection, mais il porte l'écrasante
                     majorité du corpus — à traiter comme un état, pas comme
                     une entrée d'index.
   `inventaire`    : numéro d'inventaire, repris TEL QUEL du post
                     « Localisation ». Le champ structuré ne le porte pas.
                     Les formats sont hétérogènes dans la base
                     (« H/1995.12 », « H/ 2014-1 », « H 2013/2 ») —
                     rien n'a été harmonisé ici.
   `localisation`  : la notice de localisation en texte libre, aplatie sur une
                     ligne. Plus précise que le libellé de la collection : elle
                     mentionne les dépôts (« en dépôt au musée William
                     Thornley (2022) ») et les dates de passage.
   `aVerifier`     : le champ structuré dit « inconnue » alors que la notice
                     nomme un lieu. Contradiction dans la base, pas ici.

   Exposé en global (et non en JSON chargé par fetch) pour que le site
   continue de fonctionner par simple double-clic sur un fichier, en
   file:// — fetch y serait bloqué par CORS.
   ========================================================================= */
window.CR_COLLECTIONS_DATA = {
    "collections": [
        {
            "nom": "Osny, Musée William Thornley",
            "slug": "Osny-Musee-William-Thornley",
            "lettre": "O",
            "nb": 24,
            "oeuvres": [
                {
                    "num": "4",
                    "titre": "Pont-en-Royans (titre rétabli) [Isère]",
                    "slug": "Pont-en-Royans-titre-reatbli",
                    "inventaire": "H/ 2014-1",
                    "localisation": "Osny, musée William Thornley, inv. H/ 2014-1"
                },
                {
                    "num": "9",
                    "titre": "Promeneurs près du village",
                    "slug": "Promeneurs-sur-le-chemin",
                    "inventaire": "H/1995.12",
                    "localisation": "Osny, musée William Thornley, inv. H/1995.12"
                },
                {
                    "num": "13",
                    "titre": "Ville du bord de mer, Paysage de la Manche",
                    "slug": "Ville-du-bord-de-mer-Paysage-de-la-Manche",
                    "inventaire": "H/1996.1",
                    "localisation": "Osny, musée William Thornley, inv. H/1996.1"
                },
                {
                    "num": "15",
                    "titre": "Paysage du Nord de la France (Titre forgé)",
                    "slug": "Paysage-du-Nord-de-la-France-Titre-forge",
                    "inventaire": "H/1995.5",
                    "localisation": "Osny, musée William Thornley, inv. H/1995.5"
                },
                {
                    "num": "82",
                    "titre": "Crique en Normandie",
                    "slug": "Crique-en-Normandie",
                    "inventaire": "H/1993-2",
                    "localisation": "Osny, Musée Thornley, inv. H/1993-2"
                },
                {
                    "num": "89",
                    "titre": "Paysage en Normandie",
                    "slug": "Paysage-en-Normandie",
                    "inventaire": "H/ 1994-10",
                    "localisation": "Osny, musée William Thornley, inv. H/ 1994-10"
                },
                {
                    "num": "91",
                    "titre": "Antibes, temps gris (titre forgé) [Alpes-Maritimes]",
                    "slug": "Antibes-temps-gris-titre-forge",
                    "inventaire": "H 2013/2",
                    "localisation": "Osny, Musée Thornley, inv. H 2013/2"
                },
                {
                    "num": "98",
                    "titre": "Scène d'intérieur [Hollande ?]",
                    "slug": "Scene-d-interieur-Hollande",
                    "inventaire": "H/1997.1",
                    "localisation": "Osny, musée William Thornley, inv. H/1997.1"
                },
                {
                    "num": "101",
                    "titre": "Environs de Dordrecht : Bateaux sur la Merwede [Pays-Bas]",
                    "slug": "Environs-de-Dordrecht-Bateaux-sur-la-Merwede-Pays-Bas",
                    "inventaire": "H/1994.2",
                    "localisation": "Osny, musée Thornley, inv. H/1994.2"
                },
                {
                    "num": "112",
                    "titre": "Ile de Bréhat [Côtes-d'Armor]",
                    "slug": "Ile-de-Brehat-Cotes-d-Armor",
                    "inventaire": "H/1995.7",
                    "localisation": "Osny, musée William Thornley, inv. H/1995.7"
                },
                {
                    "num": "119",
                    "titre": "Venise, Notre Dame de la Salute",
                    "slug": "Venise-NOtre-Dame-de-la-Salute",
                    "inventaire": "H/ 1995.6",
                    "localisation": "Osny, musée William Thornley, inv. H/ 1995.6"
                },
                {
                    "num": "141",
                    "titre": "La rue des Châtaigniers [Osny] [Val-d'Oise]",
                    "slug": "La-rue-des-Chataigniers-Osny",
                    "inventaire": "H/1995.2",
                    "localisation": "Osny, Musée Thornley, inv. H/1995.2"
                },
                {
                    "num": "142",
                    "titre": "Champs aux environs d'Osny [Val-d'Oise]",
                    "slug": "Champs-aux-environs-d-Osny",
                    "inventaire": "H/1984.1",
                    "localisation": "Osny, musée William Thornley, inv. H/1984.1"
                },
                {
                    "num": "144",
                    "titre": "Ferme à Osny, temps d'orage [Val-d'OIse]",
                    "slug": "Ferme-a-Osny-temps-d-orage",
                    "inventaire": "H/2015.1",
                    "localisation": "Osny, musée William Thornley, inv. H/2015.1"
                },
                {
                    "num": "145",
                    "titre": "La Ferme d'En-Bas [Osny] [Val-d'Oise]",
                    "slug": "La-Ferme-d-En-Bas-Osny",
                    "inventaire": "H/1996.5",
                    "localisation": "Osny, musée William Thornley, inv. H/1996.5"
                },
                {
                    "num": "146",
                    "titre": "La Chapelle de la Vierge, église d'Osny [Val-d'Oise]",
                    "slug": "La-Chapelle-de-la-Vierge-eglise-d-Osny",
                    "inventaire": "H/2008.1",
                    "localisation": "Onsy, musée William Thornley, inv. H/2008.1"
                },
                {
                    "num": "147",
                    "titre": "L'Eglise d'Osny, intérieur (Ebauche) [Val-d'Oise]",
                    "slug": "L-Eglise-d-Osny-interieure-Ebauche",
                    "inventaire": "H/2008.1",
                    "localisation": "Osny, musée William Thornley, inv. H/2008.1"
                },
                {
                    "num": "149",
                    "titre": "Devant le moulin à Osny [Val-d'Oise]",
                    "slug": "Devant-le-moulin-a-Osny",
                    "inventaire": "H/1996.6",
                    "localisation": "Osny, musée William Thornley, inv. H/1996.6"
                },
                {
                    "num": "155",
                    "titre": "Pontoise, Chemin des Clos [rue de Martimprey] [Val-d'Oise]",
                    "slug": "Pontoise-Chemin-des-Clos-rue-de-Martimprey",
                    "inventaire": "H/2020.1 - Fonds Juliette Claire Bruchet-Méry",
                    "localisation": "Osny, musée William Thornley, inv. H/2020.1 - Fonds Juliette Claire Bruchet-Méry"
                },
                {
                    "num": "181",
                    "titre": "Vence, Place Thiers et la Vieille Tour ; aujourd’hui Place du Frêne [Alpes-Maritimes][Alpes-maritimes]",
                    "slug": "Vence-Place-Thiers-et-la-Vieille-Tour-aujourd-hui-Place-du-Frene-Alpes-maritimes",
                    "inventaire": "H/1994.7",
                    "localisation": "Osny, musée William Thorney, inv. H/1994.7"
                },
                {
                    "num": "221",
                    "titre": "Brume sur les sommets",
                    "slug": "Brume-sur-les-sommets",
                    "inventaire": "H/1994.5",
                    "localisation": "Osny, musée William Thornley, inv. H/1994.5"
                },
                {
                    "num": "237",
                    "titre": "Neige à Aulny [sic, pour Osny] [Val-d'Oise]",
                    "slug": "Neige-a-Auly-sic-pour-Osny",
                    "inventaire": "H/1995.1",
                    "localisation": "Osny, musée William Thornley, inv. H/1995.1"
                },
                {
                    "num": "315",
                    "titre": "Osny, l'entrée du village [Val-d'Oise]",
                    "slug": "Osny-l-entree-du-village",
                    "inventaire": "H/1982.1",
                    "localisation": "Osny, Musée Thornley, inv. H/1982.1 (première œuvre acquise par la Ville suite à la première rétrospective de 1981)"
                },
                {
                    "num": "336",
                    "titre": "Paysage de Méditerranée [Golfe-Juan, Alpes-Maritimes ? ]",
                    "slug": "Paysage-mediterraneen",
                    "inventaire": "H/1994.3",
                    "localisation": "Osny, musée William Thornley, inv. H/1994.3"
                }
            ],
            "note": "Les notices alternent « musée William Thornley », « Musée Thornley » et « musée Thornley ». Une œuvre de plus (n° 316) y est localisée par sa notice alors que son champ structuré dit « inconnue »."
        },
        {
            "nom": "Collection particulière",
            "slug": "Collection-particuliere",
            "lettre": "C",
            "nb": 20,
            "oeuvres": [
                {
                    "num": "3",
                    "titre": "Autoportrait (?) de l'artiste",
                    "slug": "Autoportrait-de-l-artiste",
                    "localisation": "Collection particulière"
                },
                {
                    "num": "77",
                    "titre": "Brumes sur Rouen [Seine-Maritime]",
                    "slug": "Brumes-sur-Rouen",
                    "inventaire": "36",
                    "localisation": "Collection particulière en dépôt au musée William Thornley (Osny) - 2022, inv. 36"
                },
                {
                    "num": "86",
                    "titre": "La Seine à Rouen",
                    "slug": "La-seine-a-Rouen",
                    "localisation": "Collection particulière 2018"
                },
                {
                    "num": "90",
                    "titre": "Pourville, le parc à huîtres [Seine-Martitime]",
                    "slug": "Pourville-le-parc-a-huitres",
                    "localisation": "Collection particulière, 2025."
                },
                {
                    "num": "95",
                    "titre": "Maisons dans les dunes- [Hollande / Ile de Schouwen-Duiveland ? ]",
                    "slug": "Maisons-dans-les-dunes-Hollande-Ile-de-Schouwen-Duiveland",
                    "localisation": "Collection particulière 2018 ; Collection particulière 2026"
                },
                {
                    "num": "105",
                    "titre": "Bord de rivière en automne",
                    "slug": "Bord-de-riviere-en-automne",
                    "localisation": "Collection particulière, en dépôt au musée William Thornley (2022)"
                },
                {
                    "num": "117",
                    "titre": "Paysage au château-fort",
                    "slug": "Paysage-au-chateau-fort",
                    "inventaire": "37",
                    "localisation": "Collection particulière, en dépôt au musée William Thornley (2022), inv. 37"
                },
                {
                    "num": "118",
                    "titre": "Vue de Venise [la nuit]",
                    "slug": "Vue-de-Venise",
                    "inventaire": "38",
                    "localisation": "Collection particulière, en dépôt au musée William Thornley (2022), inv. 38"
                },
                {
                    "num": "124",
                    "titre": "Lac en montagne (titre forgé)",
                    "slug": "Lac-en-montagne",
                    "localisation": "Collection particulière"
                },
                {
                    "num": "143",
                    "titre": "La ferme du Friche [Osny] [Val-d'Oise]",
                    "slug": "La-ferme-du-Friche-Osny",
                    "localisation": "Collection particulière"
                },
                {
                    "num": "153",
                    "titre": "L'Eglise de Chars [Val-d'Oise]",
                    "slug": "L-Eglise-de-Chars",
                    "inventaire": "36",
                    "localisation": "Collection privée, en dépôt au musée William Thornley (2022), inv. 36"
                },
                {
                    "num": "157",
                    "titre": "Berges de l'Oise [Val-d'Oise]",
                    "slug": "Bord-de-l-Oise",
                    "localisation": "Collection particulière"
                },
                {
                    "num": "158",
                    "titre": "Paysage et église de Santeuil [Val-d'Oise]",
                    "slug": "Paysage-et-eglise-de-Santeuil",
                    "localisation": "Collection particculière"
                },
                {
                    "num": "183",
                    "titre": "Vence, vue depuis la gare des chemins de fer de Provence (titre forgé) [Alpes-Maritimes]",
                    "slug": "Vence-vue-depuis-la-gare-des-chemins-de-fer-de-Provence-titre-forge",
                    "localisation": "Inconnue ; collection particulière en 2015"
                },
                {
                    "num": "198",
                    "titre": "Antibes [Alpes-Maritimes]",
                    "slug": "Antibes",
                    "localisation": "Collection particulière ; ancien fonds Juliette-Claire Bruchet-Méry (atelier de l'artiste)"
                },
                {
                    "num": "199",
                    "titre": "Bordighera [Italie]",
                    "slug": "Bordighera-Italie"
                },
                {
                    "num": "213",
                    "titre": "Bordighera [?] [Italie, Ligurie]",
                    "slug": "Bordighera-Italie-Ligurie",
                    "localisation": "Collection particulière ; ancien fonds Juliette-Claire Bruchet-Méry (atelier de l’artiste)"
                },
                {
                    "num": "217",
                    "titre": "Barques",
                    "slug": "Barques",
                    "localisation": "Collection particulière, 2025"
                },
                {
                    "num": "222",
                    "titre": "La Presqu'île de Gien [Var] ?",
                    "slug": "la-prequ'île-de-Gien-Var-",
                    "localisation": "Collection particulière"
                },
                {
                    "num": "280",
                    "titre": "Le Val d'Osny / Le Val d'Osny en automne [Val-d'Ose]",
                    "slug": "Le-Val-d-Osny",
                    "localisation": "Inconnue ; collection particulière 1981, 1994 et 2026."
                }
            ],
            "generique": true
        },
        {
            "nom": "Pontoise, MAHPP",
            "slug": "Pontoise-MAHPP",
            "lettre": "P",
            "nb": 3,
            "oeuvres": [
                {
                    "num": "214",
                    "titre": "Place de village [Belgique ou Pays-Bas]",
                    "slug": "Place-de-village-Belgique-ou-Pays-Bas",
                    "inventaire": "P 2014.1.5",
                    "localisation": "Pontoise, MHPP, inv. P 2014.1.5 ; don manuel, Vallée Jean-Pierre (2014)"
                },
                {
                    "num": "285",
                    "titre": "Place du Grand-Martroy [Pontoise] [Val-d'Oise]",
                    "slug": "Place-du-Petit-Martroy-Pontoise",
                    "inventaire": "P. 1978.11",
                    "localisation": "Pontoise, MAHPP (Musée d'Art et d'Histoire Pissarro-Pontoise), inv. P. 1978.11 (acquisition 1978)"
                },
                {
                    "num": "286",
                    "titre": "La Place du Grand-Martroy, jour de petit marché [Pontoise] [Val-d'Oise]",
                    "slug": "La-Place-du-Grand-Martroy-jour-de-petite-marche-Pontoise",
                    "inventaire": "P. 1980.6",
                    "localisation": "Pontoise, MAHPP-Musée d'Art et d'Histoire Pissarro-Pontoise, inv. P. 1980.6"
                }
            ],
            "note": "Sigle. Les notices donnent aussi « MHPP » et le développé « Musée d'Art et d'Histoire Pissarro-Pontoise »."
        },
        {
            "nom": "Strasbourg, Musée des Beaux-Arts",
            "slug": "Strasbourg-Musee-des-Beaux-Arts",
            "lettre": "S",
            "nb": 1,
            "oeuvres": [
                {
                    "num": "233",
                    "titre": "Osny, Le Château de Grouchy vu depuis le temple de Vénus (titre forgé)",
                    "slug": "Le-Chateau-de-Gourchy-vu-depuis-le-temple-de-Venus-titre-forge",
                    "localisation": "Strasbourg, musée d'art moderne et contemporain, en réserves."
                }
            ],
            "note": "La notice de l'unique œuvre dit « Strasbourg, musée d'art moderne et contemporain, en réserves » : deux institutions distinctes de la ville. Le libellé de la collection ou la notice est faux — à arbitrer."
        }
    ],
    "nonLocalisees": [
        {
            "nom": "actuelle inconnue",
            "slug": "actuelle-inconnue",
            "lettre": "A",
            "nb": 313,
            "oeuvres": [
                {
                    "num": "1",
                    "titre": "Nature morte au pichet en grès et pot à tabac",
                    "slug": "Nature-morte-au-pichet",
                    "localisation": "Inconnue"
                },
                {
                    "num": "2",
                    "titre": "Au Lapin agile",
                    "slug": "Au-Lapin-agile",
                    "localisation": "Inconnue"
                },
                {
                    "num": "5",
                    "titre": "Pont-en-Royans, les maisons suspendues",
                    "slug": "Pont-en-Royans-les-maisons-supsendues",
                    "localisation": "Inconnue"
                },
                {
                    "num": "6",
                    "titre": "Französishe Landschaft im Mittelgebirge-mit Heuernte",
                    "slug": "Paysage -français-en-moyenne-montagne-avec-fenaison",
                    "localisation": "Inconnue (en vente le 3 mars 2026)"
                },
                {
                    "num": "7",
                    "titre": "Les Cornettes de Bise [Savoie]",
                    "slug": "Les-Cornettes-de-Bise",
                    "localisation": "Inconnue"
                },
                {
                    "num": "8",
                    "titre": "Paysage vallonné en automne au temps menaçant",
                    "slug": "Paysage-vallonne-en-automne-au-temps-menacant"
                },
                {
                    "num": "10",
                    "titre": "L'Estacade [Paris]",
                    "slug": "L-Estacade",
                    "localisation": "Inconnue"
                },
                {
                    "num": "11",
                    "titre": "Toulon",
                    "slug": "Toulon",
                    "localisation": "Inconnue"
                },
                {
                    "num": "12",
                    "titre": "Vue prise à Montfermeil",
                    "slug": "Vue-prise-a-Montfermeil",
                    "localisation": "Inconnue"
                },
                {
                    "num": "14",
                    "titre": "Paysage aux environs de Pontavert (Aisne)",
                    "slug": "Paysage-aux-environs-de-Pontavert-Aisne",
                    "localisation": "Inconnue"
                },
                {
                    "num": "16",
                    "titre": "Retour des pêcheurs avant la tempête",
                    "slug": "Retour-des-pecheurs-avant-la-tempete",
                    "localisation": "Inconnue"
                },
                {
                    "num": "17",
                    "titre": "Paysage de Bretagne [bord de mer]",
                    "slug": "Paysage-de-Bretagne-bord-de-mer",
                    "localisation": "Inconnue"
                },
                {
                    "num": "18",
                    "titre": "Paysage de Bretagne (Côte rocheuse)",
                    "slug": "Paysage-de-Bretagne-Cote-rocheuse",
                    "localisation": "Inconnue"
                },
                {
                    "num": "19",
                    "titre": "Giverny",
                    "slug": "Giverny",
                    "localisation": "Inconnue"
                },
                {
                    "num": "20",
                    "titre": "Les meules en hiver à Osny [Val-d'Oise]",
                    "slug": "Les-meules-en-hiver-a-Osny",
                    "localisation": "Inconnue ; collection J.-Claude Barrié en 1981 et 1994"
                },
                {
                    "num": "21",
                    "titre": "La Seine aux Andelys [Eure]",
                    "slug": "La-Seine-aux-Andelys",
                    "localisation": "Inconnue"
                },
                {
                    "num": "22",
                    "titre": "Montagnes à Villeneuve-Loubet [Alpes-Maritimes]",
                    "slug": "Montagnes-a-Villeneuve-Loubet",
                    "localisation": "Inconnue"
                },
                {
                    "num": "23",
                    "titre": "L'église d'Osny [Val-d'Oise]",
                    "slug": "L-eglise-d-Osny"
                },
                {
                    "num": "24",
                    "titre": "Paysage basque [Pyrénées Atlantiques]",
                    "slug": "Paysage-basque",
                    "localisation": "Inconnue"
                },
                {
                    "num": "25",
                    "titre": "Route de Flamanville [Manche]",
                    "slug": "Route-de-Flamanville-Manche",
                    "localisation": "Inconnue"
                },
                {
                    "num": "26",
                    "titre": "Roches (soleil couchant)",
                    "slug": "Roches-soleil-couchant",
                    "localisation": "Inconnue"
                },
                {
                    "num": "27",
                    "titre": "Le Mont Saint-Gilles [Manche]",
                    "slug": "le-Mont-Saint-Gilles-Manche"
                },
                {
                    "num": "28",
                    "titre": "Vue du Mont Saint-Gilles [Manche] (titre forgé)",
                    "slug": "Vue-du-Mont-Saint-Gilles-titre-forge",
                    "localisation": "Inconnue"
                },
                {
                    "num": "29",
                    "titre": "Vue du port d'Amsterdam",
                    "slug": "Vue-du-port-d-Amsterdam",
                    "localisation": "Inconnue"
                },
                {
                    "num": "30",
                    "titre": "Katwijk [Katwijk aan Zee, Pays-Bas, Hollande méridionale]",
                    "slug": "Katwijk-Katwijk-aan-Zee-Pays-Bas-Hollande-meridionale",
                    "localisation": "Inconnue"
                },
                {
                    "num": "31",
                    "titre": "Moulins, Île de Scouvens [sic]-[Ile de Schouwen-Duiveland-Pays-Bas",
                    "slug": "Moulins-ile-de-Scouvens-sic-Ile-de-Schouwen-Duiveland-Pays-Bas",
                    "localisation": "Inconnue"
                },
                {
                    "num": "32",
                    "titre": "Moulins à Dordrecht [Pays-Bas]",
                    "slug": "Moulins-a-Dordrecht-Pays-Bas"
                },
                {
                    "num": "33",
                    "titre": "Les moulins en Hollande",
                    "slug": "Les-moulins-en-Hollande",
                    "localisation": "Inconnue"
                },
                {
                    "num": "34",
                    "titre": "Lavoir près Gisors (Eure)",
                    "slug": "Lavoir-pres-Gisors-Eure",
                    "localisation": "Inconnue"
                },
                {
                    "num": "35",
                    "titre": "Effet de neige à Osny (Seine-et-Oise) [Val-d'Oise]",
                    "slug": "Effet-de-neige-a-Osny-Seine-et-Oise",
                    "localisation": "Inconnue"
                },
                {
                    "num": "36",
                    "titre": "Le Vallon à Osny [Val-d'Oise]",
                    "slug": "Le-Vallon-a-Osny",
                    "localisation": "Inconnue"
                },
                {
                    "num": "37",
                    "titre": "La Seine aux environs de Rouen",
                    "slug": "La-Seine-aux-environs-de-Rouen",
                    "localisation": "Inconnue"
                },
                {
                    "num": "38",
                    "titre": "La Seine le matin, près Rouen",
                    "slug": "La-Seine-le-matin-pres-Rouen",
                    "localisation": "Inconnue"
                },
                {
                    "num": "39",
                    "titre": "Route dans le Doubs, le soir",
                    "slug": "Route-dans-le-Doubs-le-soir",
                    "localisation": "Inconnue"
                },
                {
                    "num": "40",
                    "titre": "Etang",
                    "slug": "Etang",
                    "localisation": "Inconnue"
                },
                {
                    "num": "41",
                    "titre": "Bord de rivière, soleil couchant",
                    "slug": "Bord-de-riviere-soleil-couchant",
                    "localisation": "Inconnue"
                },
                {
                    "num": "42",
                    "titre": "En montagne",
                    "slug": "En-montagne",
                    "localisation": "Inconnue"
                },
                {
                    "num": "43",
                    "titre": "Les Falaises [Pourville, Seine-Martitime]",
                    "slug": "Les-Falaises",
                    "localisation": "Inconnue"
                },
                {
                    "num": "44",
                    "titre": "Paysage animé",
                    "slug": "Paysage-anime",
                    "localisation": "Inconnue"
                },
                {
                    "num": "45",
                    "titre": "Promenade au bord du lac [ ou rivière ? ]",
                    "slug": "Pormenade-au-bord-du-lac-ou-riviere",
                    "localisation": "Inconnue"
                },
                {
                    "num": "46",
                    "titre": "Pêcheur au bord de la rivière",
                    "slug": "Pecheur-au-bord-de-la-riviere",
                    "localisation": "Inconnue"
                },
                {
                    "num": "47",
                    "titre": "Marine en Hollande, temps brumeux [Pays-Bas]",
                    "slug": "Marine-en-Hollande-temps-brumeux",
                    "localisation": "Inconnue"
                },
                {
                    "num": "48",
                    "titre": "Moulins en Hollande [Pays-Bas]",
                    "slug": "Moulins-en-Hollande",
                    "localisation": "Inconnue ; collection particulière en 1994."
                },
                {
                    "num": "49",
                    "titre": "Paysage lacustre",
                    "slug": "Paysage-lacustre",
                    "localisation": "Inconnue"
                },
                {
                    "num": "50",
                    "titre": "Bords de rivière",
                    "slug": "Bord-de-riviere",
                    "localisation": "Inconnue"
                },
                {
                    "num": "51",
                    "titre": "Un canal en Hollande [pays-Bas]",
                    "slug": "Un-canal-en-Hollande-pays-Bas",
                    "localisation": "Inconnue"
                },
                {
                    "num": "52",
                    "titre": "Le Ruisseau, Hollande  [Pays-Bas]",
                    "slug": "Le-Ruisseau-Hollande",
                    "localisation": "Inconnue"
                },
                {
                    "num": "53",
                    "titre": "Barques de pêche échouées, Hollande [Pays-Bas]",
                    "slug": "Brarques-de-peche-echouees-Hollande-Pays-Bas",
                    "localisation": "Inconnue"
                },
                {
                    "num": "54",
                    "titre": "Brumes du matin, Hollande [Pays-Bas]",
                    "slug": "Brumes-du-matin-Hollande-Pays-Bas",
                    "localisation": "Inconnue"
                },
                {
                    "num": "55",
                    "titre": "Promeneurs auprès des meules de foin",
                    "slug": "Promeneurs-aupres-des-meules-de-foin",
                    "localisation": "Inconnue"
                },
                {
                    "num": "56",
                    "titre": "Les Falaises",
                    "slug": "les-Falaises",
                    "localisation": "Inconnue"
                },
                {
                    "num": "57",
                    "titre": "Paysage d'été",
                    "slug": "Paysage-d-ete",
                    "localisation": "Inconnue"
                },
                {
                    "num": "58",
                    "titre": "Moulins en Hollande [Pays-Bas]",
                    "slug": "Moulins-en-Hollande",
                    "localisation": "Inconnue"
                },
                {
                    "num": "59",
                    "titre": "Brouillard",
                    "slug": "Brouillard-f7a1f925",
                    "localisation": "Inconnue"
                },
                {
                    "num": "60",
                    "titre": "Le Moulin à vent (Hollande)",
                    "slug": "Le-Moulin-a-vent",
                    "localisation": "Inconnue"
                },
                {
                    "num": "61",
                    "titre": "Vue d'un port de mer",
                    "slug": "Vue-d-un-port-de-mer-84f54d88",
                    "localisation": "Inconnue"
                },
                {
                    "num": "62",
                    "titre": "Les Bords du Doubs, le matin [Doubs, Jura ou Sane-et-Loire]",
                    "slug": "Les-Bords-du-Doubs-le-matin",
                    "localisation": "Inconnue"
                },
                {
                    "num": "63",
                    "titre": "Vue de Rouen le soir",
                    "slug": "Vue-de-Rouen-le-soir",
                    "localisation": "Inconnue"
                },
                {
                    "num": "64",
                    "titre": "Falaises de Varengeville [Seine-Maritime]",
                    "slug": "Falaises-de-Varengeville"
                },
                {
                    "num": "65",
                    "titre": "Les fonds de Varengeville en décembre [Seine-Maritime]",
                    "slug": "Les-fonds-de-Varengeville-en-decembre",
                    "localisation": "Inconnue"
                },
                {
                    "num": "66",
                    "titre": "Paysage à Varengeville",
                    "slug": "Paysage-a-Varengeville",
                    "localisation": "Inconnue"
                },
                {
                    "num": "67",
                    "titre": "Antibes, le matin [Alpes-Maritimes]",
                    "slug": "Antibes-le-matin"
                },
                {
                    "num": "68",
                    "titre": "Le Pont Dore [sic] dans le Puy de Dôme [Pont-de-Dore ? -Puy-de-Dôme] ]",
                    "slug": "Le-Pont-Dore-sic-dans-le-Puy-de-Dome-Pont-de-Dore",
                    "localisation": "Inconnue"
                },
                {
                    "num": "69",
                    "titre": "Bord de la Dore en Puy-de-Dôme",
                    "slug": "Bor-de-la-Dore-en-Puy-de-Dome"
                },
                {
                    "num": "70",
                    "titre": "Vieux pont de pierre sur la Dore [Puy-de-Dôme]",
                    "slug": "Vieux-pont-de-pierre-sur-la-Dore",
                    "localisation": "Inconnue"
                },
                {
                    "num": "71",
                    "titre": "Village au bord de la Dore [Puy-de-Dôme]",
                    "slug": "Village-au-bord-de-la-Dore",
                    "localisation": "Inconnue"
                },
                {
                    "num": "72",
                    "titre": "Antibes (2) [Alpes-Maritimes]",
                    "slug": "Antibes-2",
                    "localisation": "Inconnue"
                },
                {
                    "num": "73",
                    "titre": "[Vue de] Puys [Seine-Maritime]",
                    "slug": "Vue-de-Puys-Seine-Maritime",
                    "localisation": "Inconnue"
                },
                {
                    "num": "74",
                    "titre": "Le Moulin d'Osny \"peint en différentes saisons\" [Val-d'Oise]",
                    "slug": "Le-Moulin-d-Osny-peint-en-differentes-saisons",
                    "localisation": "Inconnue"
                },
                {
                    "num": "75",
                    "titre": "Effet de brouillard à Dieppe [Seine-Maritime]",
                    "slug": "Effet-de-brouillard-a-Dieppe",
                    "localisation": "Inconnue"
                },
                {
                    "num": "76",
                    "titre": "Offranville [Seine-Martitime]",
                    "slug": "Offranville-Seine-Martitime",
                    "localisation": "Inconnue"
                },
                {
                    "num": "78",
                    "titre": "Folette, a cairn terrier, [chien]",
                    "slug": "Folette-a-cairn-terrier-chien",
                    "localisation": "Inconnue"
                },
                {
                    "num": "79",
                    "titre": "Les Oliviers",
                    "slug": "Les-Oliviers",
                    "localisation": "Inconnue"
                },
                {
                    "num": "80",
                    "titre": "Atmosphère du soir près d’un Lac (Evening Atmosphère by a Lake)",
                    "slug": "1025-Atmosphere-du-soir-pres-d-un-Lac-Evening-Atmosphere-by-a-Lake",
                    "localisation": "Inconnue"
                },
                {
                    "num": "81",
                    "titre": "Osny, le quartier de la Gare ; brouillard (titre forgé) [Val-d'Oise]",
                    "slug": "Osny-le-quartier-de-la-gare-brouillard",
                    "localisation": "Inconnue"
                },
                {
                    "num": "83",
                    "titre": "Falaises [Normandie]",
                    "slug": "Falaises",
                    "localisation": "Inconnue ; Collection particulière 1991 et 1994"
                },
                {
                    "num": "84",
                    "titre": "Falaise à Pourville, près  de Dieppe [Seine-Maritime]",
                    "slug": "Falaise-a-Pourville-pres-Dieppe-Seine-Maritime",
                    "localisation": "Inconnue"
                },
                {
                    "num": "85",
                    "titre": "Les Voiles blanches [Pays de Caux-Normandie ?]",
                    "slug": "Les-voiles-blanches-Pays-de-Caux-Normandie",
                    "localisation": "Inconnue"
                },
                {
                    "num": "87",
                    "titre": "Vue sur la Cathédrale de Rouen",
                    "slug": "Vue-sur-la-Cathedrale-de-Rouen",
                    "localisation": "Inconnue"
                },
                {
                    "num": "88",
                    "titre": "Pêcheurs à l'étang",
                    "slug": "Pe-cheurs-a-l-etang",
                    "localisation": "Inconnue ; Collection particulière en 1881 et 1994"
                },
                {
                    "num": "92",
                    "titre": "La Côte aux Pays-Bas [Dordrecht]",
                    "slug": "La-Cote-aux-Pays-Bas-Dordrecht",
                    "localisation": "Inconnue"
                },
                {
                    "num": "93",
                    "titre": "Moulin de Dordrech [sic], Hollande-Dordrecht [Pays-Bas]",
                    "slug": "Moulin-de-Dordrech-sic-Dordrecht-Pays-Bas",
                    "localisation": "Inconnue"
                },
                {
                    "num": "94",
                    "titre": "L'Eglise de Katwijk [Pays-Bas]",
                    "slug": "L-Eglise-de-Katwijk-Pays-Bas",
                    "localisation": "Inconnue"
                },
                {
                    "num": "96",
                    "titre": "Vue de Vollendam [sic] -Volendam [Pays-Bas]",
                    "slug": "Vue-de-Vollendam-sic-Vollendam-Pays-Bas"
                },
                {
                    "num": "97",
                    "titre": "Moulins au bord de la mer en Hollande [Pays-Bas]",
                    "slug": "Moulins-au-bord-de-la-mer-en-Hollande-Pays-Bas",
                    "localisation": "Inconnue"
                },
                {
                    "num": "99",
                    "titre": "Scène d'interieure [sic]-[Hollande ? ]",
                    "slug": "Scene-d-interieure-sic-Hollande",
                    "localisation": "Inconnue"
                },
                {
                    "num": "100",
                    "titre": "Paysage animé au moulin [Hollande]",
                    "slug": "Paysage-anime-au-moulin",
                    "localisation": "Inconnue"
                },
                {
                    "num": "102",
                    "titre": "Edam en Hollande [Pays-Bas]",
                    "slug": "Edam-en-Hollande",
                    "localisation": "Inconnue ; Collection particulière en 1994"
                },
                {
                    "num": "103",
                    "titre": "Dunes",
                    "slug": "Dunes"
                },
                {
                    "num": "104",
                    "titre": "Maison dans les  Dunes",
                    "slug": "Maison-dans-les-Dunes",
                    "localisation": "Inconnue"
                },
                {
                    "num": "106",
                    "titre": "Maisons bretonnes près de la mer",
                    "slug": "maison-bretonne-pres-de-la-mer",
                    "localisation": "Inconnue"
                },
                {
                    "num": "107",
                    "titre": "Poste de garde hollandais [Pays-Bas]",
                    "slug": "Poste-de-garde-hollandais-Pays-Bas",
                    "localisation": "Inconnue"
                },
                {
                    "num": "108",
                    "titre": "Village hollandais [Pays-Bas]",
                    "slug": "Village-hollandais-Pays-Bas",
                    "localisation": "Inconnue"
                },
                {
                    "num": "109",
                    "titre": "Vue de village [Volendam, Hollande-Pays-Bas ? ]",
                    "slug": "Vue-de-village-Volendam-Hollande-Pays-Bas",
                    "localisation": "Inconnue"
                },
                {
                    "num": "110",
                    "titre": "Les Meules au bord de la route",
                    "slug": "Les-Meules-au-bord-de-la-route",
                    "localisation": "Inconnue"
                },
                {
                    "num": "111",
                    "titre": "Côte bretonne",
                    "slug": "Cote-bretonne",
                    "localisation": "Inconnue"
                },
                {
                    "num": "113",
                    "titre": "Le Birlot  (1) [Ile de Bréhat-Côtes-d'Armor]",
                    "slug": "Le-Birlot-Ile-de-Brehat-Cotes-d-Armor",
                    "localisation": "Inconnue. Collection Rouillac, ancienne collection M. ; Cf. Musée virtuel de l’Ile de Bréhat, https://musee-virtuel-brehat.fr/ (site consulté en 2018)"
                },
                {
                    "num": "114",
                    "titre": "Le Birlot (2) [Côtes-d'Armor]",
                    "slug": "Le-Birlot-2-Cotes-d-Armor",
                    "localisation": "Inconnue"
                },
                {
                    "num": "115",
                    "titre": "Promeneurs sur la lande",
                    "slug": "Promeneurs-sur-la-lande",
                    "localisation": "Inconnue"
                },
                {
                    "num": "116",
                    "titre": "Promenade",
                    "slug": "Promenade",
                    "localisation": "Inconnue"
                },
                {
                    "num": "120",
                    "titre": "La Rance près Dinan. Ille Et Vilaine. Matin [Léhon-Côtes d'Armor]",
                    "slug": "64-La-Rance-pres-Dinan-Ille-Et-Vilaine-Matin-Lehon-Cotes-d-Armor",
                    "localisation": "Inconnue"
                },
                {
                    "num": "121",
                    "titre": "Côte rocheuse au couchant [Côtes- d'Armor ? ]",
                    "slug": "Cote-rocheuse-au-couchant-Cotes-d-Armor",
                    "localisation": "Inconnue"
                },
                {
                    "num": "122",
                    "titre": "Côte bretonne [?]",
                    "slug": "Cote-bretonne",
                    "localisation": "Inconnue"
                },
                {
                    "num": "123",
                    "titre": "Varengeville [Seine-Maritime] ?",
                    "slug": "Varengeville-Seine-Maritime",
                    "localisation": "Inconnue"
                },
                {
                    "num": "125",
                    "titre": "Ruines en bord de falaise",
                    "slug": "Ruines-en-bord-de-falaise",
                    "localisation": "Inconnue"
                },
                {
                    "num": "126",
                    "titre": "Maison dans la forêt",
                    "slug": "Maison-dans-la-foret",
                    "localisation": "Inconnue"
                },
                {
                    "num": "127",
                    "titre": "Maison et personnage dans un paysage",
                    "slug": "Maison-et-personnagedans-un-paysage",
                    "localisation": "Inconnue"
                },
                {
                    "num": "128",
                    "titre": "Paysage avec fermette et pêcheur au bord d'une mare au premier plan",
                    "slug": "Paysage-aevc-fermette-et-pecheur-au-bord-d-une-mare-au-premier-plan",
                    "localisation": "Inconnue"
                },
                {
                    "num": "129",
                    "titre": "Paysage lacustre",
                    "slug": "Paysage-lacustre",
                    "localisation": "Inconnue"
                },
                {
                    "num": "130",
                    "titre": "Bord de rivière avec pont ancien (titre forgé)",
                    "slug": "Bord-de-riviere-avec-pont-ancine-titre-forge",
                    "localisation": "Inconnue"
                },
                {
                    "num": "131",
                    "titre": "Paysage enneigé \"Rendez-vous de hasse à Gisors\" [Eure]",
                    "slug": "Rendez-vous-de-hasse-a-Gisors-Eure",
                    "localisation": "Inconnue"
                },
                {
                    "num": "132",
                    "titre": "Paysage de montagne",
                    "slug": "Paysage-vallonne",
                    "localisation": "Inconnue"
                },
                {
                    "num": "133",
                    "titre": "Les sources d'Arcier, Doubs [Vaire-Arcier]",
                    "slug": "Les-sources-d-Arcier-Doubs",
                    "localisation": "Inconnue"
                },
                {
                    "num": "134",
                    "titre": "Environs d'Heudreville [Eure]",
                    "slug": "Heudreville-Eure",
                    "localisation": "Inconnue"
                },
                {
                    "num": "135",
                    "titre": "Voiliers près de la côte, Dieppe [Seine-Maritime]",
                    "slug": "Voiliers-pres-de-la-cote-Dieppe-Seine-Maritime",
                    "localisation": "Inconnue"
                },
                {
                    "num": "136",
                    "titre": "Falaises à Etretat [Falaises d'Amont-Seine-Maritime]",
                    "slug": "Falaises-a-Etretat-Flaises-d-Amont-Seine-Maritime",
                    "localisation": "Inconnue"
                },
                {
                    "num": "137",
                    "titre": "Château-fort en ruines",
                    "slug": "Chateua-fort-en-ruines",
                    "localisation": "Inconnue"
                },
                {
                    "num": "138",
                    "titre": "Le Mont Saint-Michel [Manche]",
                    "slug": "Le-Mont-Saint-Michel-Manche",
                    "localisation": "Inconnue"
                },
                {
                    "num": "139",
                    "titre": "Vue présumée du village de Nonette [Puy-de-Dôme]",
                    "slug": "Vuen-presumee-du-village-de-Nonette-Puy-de-Dome",
                    "localisation": "Inconnue"
                },
                {
                    "num": "140",
                    "titre": "Les Châtaigniers à Osny [Val-d'Oise]",
                    "slug": "Les-Chataigniers-a-Osny",
                    "localisation": "Inconnue ; collection particulière en 1981 et 1994"
                },
                {
                    "num": "148",
                    "titre": "Osny, versant de la gare-Vallée d’Osny [Val-d'OIse]",
                    "slug": "Osny-versant-de-la-gare-Vallee-d-Osny",
                    "localisation": "Inconnue ; collection particulière en 1981"
                },
                {
                    "num": "150",
                    "titre": "Vue d'Osny [Val-d'Oise]",
                    "slug": "Vue-d-Osny",
                    "localisation": "Inconnue"
                },
                {
                    "num": "151",
                    "titre": "Les meules aux environs d'Osny [Val-d'Oise]",
                    "slug": "les-meules-aux-environs-d-Osny",
                    "localisation": "Inconnue"
                },
                {
                    "num": "152",
                    "titre": "Meules en été, à la ferme du bas, Osny [Val-d'Oise]",
                    "slug": "Meules-en-ete-a-la-ferme-du-bas-Osny",
                    "localisation": "Inconnue"
                },
                {
                    "num": "154",
                    "titre": "Chars-Ferme de la Côte Saint-Cyr (titre forgé) [Val-d'Oise]",
                    "slug": "Chars-Ferme-de-la-Cote-Saint-Cyr-titre-forge",
                    "localisation": "En vente à la Galerie Vaudémont, Nancy, 11 avril 2026, sous le titre Paysage de l'Oise, 18 février 2025",
                    "aVerifier": true
                },
                {
                    "num": "156",
                    "titre": "Eglise Notre-Dame de Pontoise [Val-d'Oise]",
                    "slug": "Eglise-Notre-Dame-de-Pontoise",
                    "localisation": "Inconnue ; collection privée 1991 et 1994"
                },
                {
                    "num": "159",
                    "titre": "Les Bords de l'Oise [Val-d'Oise]",
                    "slug": "Les-Bords-de-l-Oise",
                    "localisation": "Inconnue ; collection privée en 2007"
                },
                {
                    "num": "160",
                    "titre": "Eglise d'Osny [Val-d'Oise]",
                    "slug": "Eglise-d-Osny",
                    "localisation": "Inconnue"
                },
                {
                    "num": "161",
                    "titre": "Antibes [titre rétabli]",
                    "slug": "Antibes-titre-retabli",
                    "localisation": "Inconnue"
                },
                {
                    "num": "162",
                    "titre": "Antibes. Mauvais temps",
                    "slug": "Antibes-titre-retabli-copie-9e9a180a",
                    "localisation": "Inconnue"
                },
                {
                    "num": "163",
                    "titre": "Antibes, grosse mer [Alpes-Maritimes]",
                    "slug": "Antibes-grosse-mer",
                    "localisation": "Inconnue"
                },
                {
                    "num": "164",
                    "titre": "Antibes [titre rétabli]",
                    "slug": "Antibes-titre-retabli",
                    "localisation": "Inconnue"
                },
                {
                    "num": "165",
                    "titre": "Cap d'Antibes [Alpes-Maritimes]",
                    "slug": "Cap-d-Antibes",
                    "localisation": "Inconnue ; collection particulière en 1994"
                },
                {
                    "num": "166",
                    "titre": "La Garoupe, Cap d'Antibes [Alpes-Maritimes]",
                    "slug": "La-Garoupe-Cap-d-Antibes",
                    "localisation": "Inconnue"
                },
                {
                    "num": "167",
                    "titre": "Le Cap de l'Ilette, à Antibes [Alpes-Maritimes]",
                    "slug": "Le-Cap-de-l-Ilette-a-Antibes",
                    "localisation": "Inconnue"
                },
                {
                    "num": "168",
                    "titre": "Tempête à Antibes {Alpes-Maritimes]",
                    "slug": "Tempete-a-Antibes",
                    "localisation": "Inconnue"
                },
                {
                    "num": "169",
                    "titre": "Antibes, vue de la Chapelle Notre-Dame [Alpes-Maritimes]",
                    "slug": "Antibes-vu-de-la-Chapelle-Notre-Dame",
                    "localisation": "Inconnue"
                },
                {
                    "num": "170",
                    "titre": "La rue Vauban à Antibes [Alpes-Maritimes]",
                    "slug": "La-rue-vauban-a-Antibes",
                    "localisation": "Inconnue"
                },
                {
                    "num": "171",
                    "titre": "Village de Cagnes [-sur-Mer - (Alpes-Maritimes)]",
                    "slug": "cagnes-sur-Mer-Alpes-Maritimes",
                    "localisation": "Inconnue"
                },
                {
                    "num": "172",
                    "titre": "Calanques à Cassis  [Bouches-du-Rhône]",
                    "slug": "calanques-a-Cassis-titre-forge-Bouches-du-Rhone",
                    "localisation": "Inconnue"
                },
                {
                    "num": "173",
                    "titre": "Vue d'Èze [Alpes-Maritimes]",
                    "slug": "Eze",
                    "localisation": "Inconnue"
                },
                {
                    "num": "174",
                    "titre": "[Menton] Bord de mer méditerranéen [Alpes-Maritimes]",
                    "slug": "Menton-Bord-de-mer-mediterraneen",
                    "localisation": "Inconnue"
                },
                {
                    "num": "175",
                    "titre": "Saint-Paul-de-Vence, porte de Vence (titre forgé) [Alpes-Maritimes]",
                    "slug": "Saint-Paul-de-Vence-porte-de-Vence-titre-forge-Alpes-Maritimes",
                    "localisation": "Inconnue"
                },
                {
                    "num": "176",
                    "titre": "Vue de Sainte-Maxime [Var]",
                    "slug": "Sainte-Maxime-Var",
                    "localisation": "Inconnue"
                },
                {
                    "num": "177",
                    "titre": "Bateaux à marée basse [Port de Sainte-Maxime] [Var]",
                    "slug": "Bateaux-a-maree-basse-Port-de-Sainte-Maxime-Var",
                    "localisation": "Inconnue"
                },
                {
                    "num": "178",
                    "titre": "Jour de foire à Vence, Place du Grand Jardin [Alpes Maritimes]",
                    "slug": "Jour-de-foire-a-Vence-Place-du-Grand-Jardin-Alpes-Maritimes",
                    "inventaire": "ence.com. Utilisée avec autorisation de l'auteur",
                    "localisation": "Inconnue ; l'œuvre est présentée sur un lutrin du parcours “La Côte d’Azur des Peintres” à Vence. ; Cf. Photographie ci-dessus : Photographie Steve Wilkison / steveandcaroleinvence.com. Utilisée avec autorisation de l'auteur."
                },
                {
                    "num": "179",
                    "titre": "Matin à Vence, Alpes-Maritimes",
                    "slug": "Matin-a-Vence-Alpes-Maritimes",
                    "localisation": "Inconnue"
                },
                {
                    "num": "180",
                    "titre": "Place à Vence [Alpes-Maritimes]",
                    "slug": "Place-a-Vence-Alpes-Maritimes",
                    "localisation": "Inconnue"
                },
                {
                    "num": "182",
                    "titre": "Vence, l'avenue de la gare et la chapelle des Pénitents blancs [Alpes-Maritimes]",
                    "slug": "Vence-l-avenue-de-la-gare-et-la-chapelle-des-Pénitentents-Blancs-Alpes-Maritimes",
                    "localisation": "Inconnue"
                },
                {
                    "num": "184",
                    "titre": "Vue de Vence (Alpes-Maritimes)",
                    "slug": "Vue-de-Vence-Alpes-Maritimes",
                    "localisation": "Inconnue"
                },
                {
                    "num": "185",
                    "titre": "Vence, rue des Templiers [Alpes-Martitimes]",
                    "slug": "Vence-rue-des-Templiers-Alpes-Martitimes",
                    "localisation": "Inconnue ; Collection Lambert, Avignon en 2010"
                },
                {
                    "num": "186",
                    "titre": "Le Doubs [rivière]",
                    "slug": "Le-Doubs-riviere",
                    "localisation": "Inconnue ; collection privée en 1994"
                },
                {
                    "num": "187",
                    "titre": "Mas en Provence",
                    "slug": "Mas-en-Provence",
                    "localisation": "Inconnue"
                },
                {
                    "num": "188",
                    "titre": "Paysage de Haute-Provence",
                    "slug": "Paysage-de-Haute-Provence",
                    "localisation": "Inconnue"
                },
                {
                    "num": "189",
                    "titre": "Village au bord de la mer [Méditerranée]",
                    "slug": "Village-en-bord-de-la-mer-Mediterranee",
                    "localisation": "Inconnue"
                },
                {
                    "num": "190",
                    "titre": "Bord de mer [Méditerranéen] (titre forgé)",
                    "slug": "Bord-de-mer-Mediterraneen",
                    "localisation": "Inconnue"
                },
                {
                    "num": "191",
                    "titre": "La Calanque",
                    "slug": "La-Calanque",
                    "localisation": "Inconnue"
                },
                {
                    "num": "192",
                    "titre": "Pêcheurs dans une crique en Méditerranée",
                    "slug": "Pecheurs-dans-une-crique-en-Mediterranee",
                    "localisation": "Inconnue"
                },
                {
                    "num": "193",
                    "titre": "Paysage aux meules",
                    "slug": "Paysage-aux-meules",
                    "localisation": "Inconnue"
                },
                {
                    "num": "194",
                    "titre": "Bord de mer et falaise",
                    "slug": "Bord-de-mer-et-falaise"
                },
                {
                    "num": "195",
                    "titre": "Bord de mer et falaise",
                    "slug": "Bord-de-mer-et-falaise",
                    "localisation": "Inconnue"
                },
                {
                    "num": "196",
                    "titre": "Voilers dans la rade",
                    "slug": "Voilers-dans-la-rade",
                    "localisation": "Inconnue"
                },
                {
                    "num": "197",
                    "titre": "Les Meules",
                    "slug": "les-Meules",
                    "localisation": "Inconnue"
                },
                {
                    "num": "200",
                    "titre": "Paysage de montagne [automne]",
                    "slug": "Paysage-de-montagne-automne",
                    "localisation": "Inconnue"
                },
                {
                    "num": "201",
                    "titre": "Vue du Fort d'Antibes [Alpes-maritimes]",
                    "slug": "Vue-du-Fort-d-Antibes-Alpes-maritimes",
                    "localisation": "Inconnue"
                },
                {
                    "num": "202",
                    "titre": "Paysage au moulin",
                    "slug": "Paysage-au-moulin",
                    "localisation": "Inconnue"
                },
                {
                    "num": "203",
                    "titre": "Le Chemin",
                    "slug": "le-Chemin",
                    "localisation": "Inconnue"
                },
                {
                    "num": "204",
                    "titre": "Automne",
                    "slug": "Automne",
                    "localisation": "Inconnue"
                },
                {
                    "num": "205",
                    "titre": "Hiver",
                    "slug": "Hiver",
                    "localisation": "Inconnue"
                },
                {
                    "num": "206",
                    "titre": "Le Coteau",
                    "slug": "Le-Coteau",
                    "localisation": "Inconnue"
                },
                {
                    "num": "207",
                    "titre": "Après la moisson",
                    "slug": "Apres-la-moisson",
                    "localisation": "Inconnue"
                },
                {
                    "num": "208",
                    "titre": "Les Meules",
                    "slug": "Les-Meules",
                    "localisation": "Inconnue"
                },
                {
                    "num": "209",
                    "titre": "Le Moulin",
                    "slug": "Le-Moulin",
                    "localisation": "Localisation inconnue"
                },
                {
                    "num": "210",
                    "titre": "Le Moulin près du lac",
                    "slug": "Le-Moulin-pres-du-lac",
                    "localisation": "Inconnue"
                },
                {
                    "num": "211",
                    "titre": "Ciel d'orage",
                    "slug": "Ciel-d-orage",
                    "localisation": "Inconnue"
                },
                {
                    "num": "212",
                    "titre": "Antibes [Titre rétabli] [Alpes-Maritimes]",
                    "slug": "Antibes-Titre-retabli",
                    "localisation": "Inconnue"
                },
                {
                    "num": "215",
                    "titre": "Marché à Dieppe [Place Duquesne] [Seine-Maritime]",
                    "slug": "Marche-a-Dieppe-Place-Duquesne-Seine-Maritime",
                    "localisation": "Inconnue"
                },
                {
                    "num": "216",
                    "titre": "Barque de pêche",
                    "slug": "Barque-de-peche",
                    "localisation": "Inconnue"
                },
                {
                    "num": "218",
                    "titre": "La Crique",
                    "slug": "La-Crique"
                },
                {
                    "num": "219",
                    "titre": "Hameau au bord de la mer",
                    "slug": "Hameau-au-bord-de-la-mer",
                    "localisation": "Inconnue"
                },
                {
                    "num": "220",
                    "titre": "Menton [Alpes-Maritimes]",
                    "slug": "Menton"
                },
                {
                    "num": "223",
                    "titre": "Bord de rivière [La Seine ? ]",
                    "slug": "Bord-de-riviere-La-Seine",
                    "localisation": "Inconnue ; collection privée en 2024"
                },
                {
                    "num": "224",
                    "titre": "[Venise], Pont sur rio San Paolo [Italie]",
                    "slug": "Venise-Pont-sur-rio-San-Paolo-Italie",
                    "localisation": "Inconnue"
                },
                {
                    "num": "225",
                    "titre": "Paysage enneigé \"rendez-vous de chasse forêt de Gisors\" [Normandie]",
                    "slug": "Paysage-enneige-rendez-vous-de-chasse-foret-de-Gisors",
                    "localisation": "Collection particulière",
                    "aVerifier": true
                },
                {
                    "num": "226",
                    "titre": "Chaumières",
                    "slug": "Chaumieres",
                    "localisation": "Inconnue"
                },
                {
                    "num": "227",
                    "titre": "Rochers de marbre blanc à Cap Martin [ Roquebrune-Cap-Matin- Alpes-Maritimes]",
                    "slug": "Rochers-de-marbre-blanc-a-Cap-Martin-Roquebrune-Cap-Matin-Alpes-Maritimes",
                    "localisation": "Inconnue ; collection particulière en 1994"
                },
                {
                    "num": "228",
                    "titre": "Place du marché, à Dieppe [Seine-Maritime]",
                    "slug": "Place-du-marché-à-Dieppe",
                    "localisation": "Inconnue"
                },
                {
                    "num": "229",
                    "titre": "Vue de Hollande [Pays-Bas]",
                    "slug": "Vue-de-Hollande",
                    "localisation": "Inconnue"
                },
                {
                    "num": "230",
                    "titre": "La Moisson",
                    "slug": "La-Moisson",
                    "localisation": "Inconnue"
                },
                {
                    "num": "231",
                    "titre": "Un moulin, en Hollande [Pays-Bas]",
                    "slug": "Un-moulin-en-Hollande-Pays-Bas",
                    "localisation": "Inconnue"
                },
                {
                    "num": "232",
                    "titre": "L'Enclos",
                    "slug": "L-Enclos",
                    "localisation": "Inconnue"
                },
                {
                    "num": "234",
                    "titre": "Les meules à Osny [Val-d'Oise]",
                    "slug": "Les-meules-a-Osny",
                    "localisation": "Inconnue"
                },
                {
                    "num": "235",
                    "titre": "La Place de Longueville (Seine-Inférieure) [actuelleSeine-maritime]",
                    "slug": "La-Place-de-Longueville-Seine-maritime"
                },
                {
                    "num": "236",
                    "titre": "Place du marché à Longueville (Seine-Inférieure) [Seine-Maritime]",
                    "slug": "Place-du-marche-a-Longueville",
                    "localisation": "Inconnue"
                },
                {
                    "num": "238",
                    "titre": "Saison dorée",
                    "slug": "Saison-doree",
                    "localisation": "Inconnue"
                },
                {
                    "num": "239",
                    "titre": "La Mare, effet du matin",
                    "slug": "La-Mare-effet-du-matin",
                    "localisation": "Inconnue"
                },
                {
                    "num": "240",
                    "titre": "Vieilles maisons à Dieppe [Seine-Maritime]",
                    "slug": "Vieilles-maisons-a-Dieppe",
                    "localisation": "Inconnue"
                },
                {
                    "num": "241",
                    "titre": "Marché à Dieppe",
                    "slug": "Marche-a-Dieppe",
                    "localisation": "Inconnue"
                },
                {
                    "num": "242",
                    "titre": "Dieppe, L'église Saint Jacques",
                    "slug": "Dieppe-L-eglise-Saint-Jacques",
                    "localisation": "Inconnue"
                },
                {
                    "num": "243",
                    "titre": "Dieppe, la Place Duquesne (titre forgé)",
                    "slug": "Dieppe-la-Place-Duquesne-titre-forge"
                },
                {
                    "num": "244",
                    "titre": "Le Port de Dieppe (1) [Seine-Maritime]",
                    "slug": "Le-Port-de-Dieppe-1",
                    "localisation": "Inconnue ; collection particulière en 1994."
                },
                {
                    "num": "245",
                    "titre": "Le Port de Dieppe (2) [Seine-Maritime]",
                    "slug": "Le-Port-de-Dieppe-2",
                    "localisation": "Inconnue ; collection privée en 1994"
                },
                {
                    "num": "246",
                    "titre": "La sortie du port, à Dieppe, matinée brumeuse Seine-Maritime]",
                    "slug": "la-sortie-du-port-a-Dieppe-matinee-brumeuse",
                    "localisation": "Inconnue"
                },
                {
                    "num": "247",
                    "titre": "Dieppe, Rue Gustave Rouland [Seine-Maritime]",
                    "slug": "Dieppe-Rue-Gustave-Rouland",
                    "localisation": "Inconnue"
                },
                {
                    "num": "248",
                    "titre": "Vielles maisons à Dieppe [Seine-Maritime]",
                    "slug": "Vielles-maisons-a-Dieppe",
                    "localisation": "Inconnue"
                },
                {
                    "num": "249",
                    "titre": "Matin à Cavalaire [sur-Mer, Var]",
                    "slug": "Cavalaire-sur-Mer-Var",
                    "localisation": "Inconnue"
                },
                {
                    "num": "250",
                    "titre": "Matinée d'automne",
                    "slug": "Matinee-d-automne",
                    "localisation": "Inconnue"
                },
                {
                    "num": "251",
                    "titre": "Paysage aux environs de Huelgoat [Finistère]",
                    "slug": "paysage-aux-environs-de-Huelgoat-Finistere",
                    "localisation": "Collections du Musée des Beaux-Arts de Rennes. ; Détruit lors de l'incendie du Parlement de Rennes en février 1994, où le tableau était présenté.",
                    "aVerifier": true
                },
                {
                    "num": "252",
                    "titre": "Campement de Bohémiens",
                    "slug": "Campement-de-Bohemiens",
                    "localisation": "Inconnue"
                },
                {
                    "num": "253",
                    "titre": "Paysage dans les environs du Blavet [Côtes-d'Armor ? ]",
                    "slug": "Paysage-dans-les-environs-du-Blavet",
                    "localisation": "Inconnue"
                },
                {
                    "num": "254",
                    "titre": "Chaumière dans le vallon de Longeau, près de Bon Repos [Côtes-d'Armor]",
                    "slug": "Chaumiere-dans-le-vallon-de-Longeau-pres-de-Bon-Repos",
                    "localisation": "Inconnue"
                },
                {
                    "num": "255",
                    "titre": "Dieppe, la Place du Marché (titre forgé) [Seine-Maritime]",
                    "slug": "Dieppe-la-Place-du-Marche-titre-forge",
                    "localisation": "Inconnue ; archives photographiques (collection particulière)"
                },
                {
                    "num": "256",
                    "titre": "Les Bruyères, Vallée de Bon Repos, Côtes du Nord [Côtes d'Armor]",
                    "slug": "Les-bruyeres-Vallee-de-Bon-Repos-Cotes-du-Nord-Cotes-d-Armor",
                    "localisation": "Inconnue"
                },
                {
                    "num": "257",
                    "titre": "Paysage d'Anvers [Belgique]",
                    "slug": "Paysage-d-Anvers-Belgique",
                    "localisation": "Inconnue"
                },
                {
                    "num": "258",
                    "titre": "Vue de Hollande [Pays-Bas]",
                    "slug": "Vue-de-Hollande",
                    "localisation": "Inconnue"
                },
                {
                    "num": "259",
                    "titre": "Une Place de Village",
                    "slug": "Place-de-Village",
                    "localisation": "Inconnue"
                },
                {
                    "num": "260",
                    "titre": "Vue de la Seine à Rouen [Seine-Maritime]",
                    "slug": "Vue-de-la-Seine-a-Rouen",
                    "localisation": "Inconnue"
                },
                {
                    "num": "261",
                    "titre": "Paysage d'hiver",
                    "slug": "Paysage d'hiver",
                    "localisation": "Inconnue"
                },
                {
                    "num": "262",
                    "titre": "Les Rochers à [sic] Trayas [Var]",
                    "slug": "Les-Rochers-a-sic-Trayas-Var",
                    "localisation": "Inconnue"
                },
                {
                    "num": "263",
                    "titre": "Vue des bords de la Méditerranée",
                    "slug": "Vue-des-bords-de-la-Mediterranee",
                    "localisation": "Inconnue"
                },
                {
                    "num": "264",
                    "titre": "Un village dans le brouillard le matin",
                    "slug": "Un-village-dans-le-brouillard-le-matin"
                },
                {
                    "num": "265",
                    "titre": "La Seine en hiver [Paris ? ]",
                    "slug": "La-Seine-en-hiver-Paris",
                    "localisation": "Inconnue"
                },
                {
                    "num": "266",
                    "titre": "Antibes",
                    "slug": "Antibes",
                    "localisation": "Inconnue"
                },
                {
                    "num": "267",
                    "titre": "Village au bord de la mer (Antibes) [Alpes-Maritimes]",
                    "slug": "Village-au-bord-de-la-mer-Antibes",
                    "localisation": "Inconnue"
                },
                {
                    "num": "268",
                    "titre": "Paysage dans la Haute-Savoie",
                    "slug": "Paysage-en-Haute-Savoie",
                    "localisation": "Inconnue"
                },
                {
                    "num": "269",
                    "titre": "Torrent dans le Dauphiné",
                    "slug": "Torrent-dans-le-Dauphine",
                    "localisation": "Inconnue"
                },
                {
                    "num": "270",
                    "titre": "Vue de Rouen, brumes du matin [Seine-Maritime]",
                    "slug": "Vue-de-Rouen-brume-du-matin",
                    "localisation": "Inconnue"
                },
                {
                    "num": "271",
                    "titre": "Le Moulin",
                    "slug": "Le-Moulin-e0d31344",
                    "localisation": "Inconnue"
                },
                {
                    "num": "272",
                    "titre": "Moulins aux environs de Dordrecht [Pays-Bas]",
                    "slug": "Moulins-aux-environs-de-Dordrecht",
                    "localisation": "Inconnue"
                },
                {
                    "num": "273",
                    "titre": "Bords de rivière à l'autome",
                    "slug": "Bord-de-riviere-à -l'autome",
                    "localisation": "Inconnue"
                },
                {
                    "num": "274",
                    "titre": "Le Chemin au bord de la rivière",
                    "slug": "Bords-de-riviere-a-l-autome-copie-572cd2cd",
                    "localisation": "Inconnue"
                },
                {
                    "num": "275",
                    "titre": "Le Bassin du port",
                    "slug": "Le-Bassin-du-port",
                    "localisation": "Inconnue"
                },
                {
                    "num": "276",
                    "titre": "Falaise de Puys, près Dieppe [Seine-Maritime]",
                    "slug": "Falaise-de-Puys-pres-Dieppe",
                    "localisation": "Inconnue"
                },
                {
                    "num": "277",
                    "titre": "Coucher de soleil sur la rivière",
                    "slug": "Coucher-de-soleil-sur-la-riviere"
                },
                {
                    "num": "278",
                    "titre": "Rouen vu des hauteurs [Seine-Maritime]",
                    "slug": "Rouen-vu-des-hauteurs",
                    "localisation": "Inconnue"
                },
                {
                    "num": "279",
                    "titre": "Etang",
                    "slug": "Etang"
                },
                {
                    "num": "281",
                    "titre": "La Citadelle Saint-Elme à Villefranche-sur-Mer ? [Alpes-Maritimes]",
                    "slug": "La-Citadelle-Saint-Elme-a-Villefranche-sur-Mer-Alpes-Maritimes",
                    "localisation": "Inconnue"
                },
                {
                    "num": "282",
                    "titre": "Rue de Dieppe [Seine-Martitime]",
                    "slug": "Rue-de-Dieppe",
                    "localisation": "Inconnue"
                },
                {
                    "num": "283",
                    "titre": "La Méditerranée",
                    "slug": "La-Mediterranee",
                    "localisation": "Inconnue"
                },
                {
                    "num": "284",
                    "titre": "La Côte d'Azur",
                    "slug": "La-Cote-d-Azur",
                    "localisation": "Inconnue"
                },
                {
                    "num": "287",
                    "titre": "Venise, Entrée du Grand Canal",
                    "slug": "Venise-l-Entree-du-Grand-Canal"
                },
                {
                    "num": "288",
                    "titre": "La Falaise",
                    "slug": "La-Falaise",
                    "localisation": "Inconnue"
                },
                {
                    "num": "289",
                    "titre": "Au large",
                    "slug": "Au-large",
                    "localisation": "Inconnue"
                },
                {
                    "num": "290",
                    "titre": "La Rance à Dinan [Côtes-d'Armor]",
                    "slug": "La-Rance-a-Dinan",
                    "localisation": "Inconnue"
                },
                {
                    "num": "291",
                    "titre": "Eglise de Dorceau [Orne]",
                    "slug": "Eglise-de-Dorceau",
                    "localisation": "Inconnue ; collection particulière en 1994."
                },
                {
                    "num": "292",
                    "titre": "Moulin de Rémalard [Orne]",
                    "slug": "Moulin-de-Remalard-Orne",
                    "localisation": "Inconnue"
                },
                {
                    "num": "293",
                    "titre": "Bords de l'Huisne [Orne]",
                    "slug": "Bords-de-l-Huisne-Orne",
                    "localisation": "Inconnue ; Collection particulière 1981 puis1994."
                },
                {
                    "num": "294",
                    "titre": "Paysage dans l'Orne",
                    "slug": "Paysage-dans-l-Orne",
                    "localisation": "Inconnue ; Collection particulière, 1981"
                },
                {
                    "num": "295",
                    "titre": "Bréat [sic], la carrière [Ile de Bréhat, Côtes d'Armor]",
                    "slug": "Breat-sic-la-carriere-Cotes-d-Armor",
                    "localisation": "Inconnue"
                },
                {
                    "num": "296",
                    "titre": "La Seine à Rouen [Seine-Maritime]",
                    "slug": "La-Seine-a-Rouen",
                    "localisation": "Inconnue"
                },
                {
                    "num": "297",
                    "titre": "Le Marché à Vence (Provence) [Alpes-Maritimes]",
                    "slug": "Le-Marche-a-Vence-Provence-Alpes-Maritimes",
                    "localisation": "Inconnue"
                },
                {
                    "num": "298",
                    "titre": "Cour de ferme",
                    "slug": "Cour-de-ferme",
                    "localisation": "Inconnue"
                },
                {
                    "num": "299",
                    "titre": "Vue de l'Ile de Bréhat [Côtes d'Armor]",
                    "slug": "Vue-de-l-Ile-de-Brehat-Cotes-d-Armor",
                    "localisation": "Inconnue"
                },
                {
                    "num": "300",
                    "titre": "Ile de Bréat [sic] à marée basse [Ile de Bréhat-Côtes d'Armor]",
                    "slug": "Ile-de-Breat-sic-a-maree-basse-Ile-de-Brehat-Cotes-d-Armor",
                    "localisation": "Inconnue"
                },
                {
                    "num": "301",
                    "titre": "Promenade à San Remo [Italie-Ligurie]",
                    "slug": "Promenade-a-San-Remo",
                    "localisation": "Inconnue"
                },
                {
                    "num": "302",
                    "titre": "San Remo [Italie, Ligurie]",
                    "slug": "San-Remo-Italie-Ligurie",
                    "localisation": "Inconnue"
                },
                {
                    "num": "303",
                    "titre": "Environs de Gisors, le matin [Eure]",
                    "slug": "Environs-de-Gisors-le-matin",
                    "localisation": "Inconnue"
                },
                {
                    "num": "304",
                    "titre": "Le Village sur la falaise",
                    "slug": "Village-sur-la-falaise",
                    "localisation": "Inconnue"
                },
                {
                    "num": "305",
                    "titre": "Paysage à Osny, près Pontoise, Effet de neige [Val-d'Oise]",
                    "slug": "Paysage-a-Osny-pres-Pontoise-Effet-de-neige",
                    "localisation": "Inconnue"
                },
                {
                    "num": "306",
                    "titre": "Le Bassin à Rouen [Seine-Maritime]",
                    "slug": "Le-Bassin-a-Rouen",
                    "localisation": "Inconnue"
                },
                {
                    "num": "307",
                    "titre": "Les Dunes",
                    "slug": "Les Dunes",
                    "localisation": "Inconnue"
                },
                {
                    "num": "308",
                    "titre": "Bords de rivière",
                    "slug": "Bords de rivière",
                    "localisation": "Inconnue"
                },
                {
                    "num": "309",
                    "titre": "Le Grand Canal à Amsterdam [Pays-Bas]",
                    "slug": "le Grand Canal à Amsterdam",
                    "localisation": "Inconnue"
                },
                {
                    "num": "310",
                    "titre": "Après L'Orage",
                    "slug": "Après L'Orage",
                    "localisation": "Inconnue"
                },
                {
                    "num": "311",
                    "titre": "Vue d'Antibes [Alpes-Maritimes]",
                    "slug": "Vue-d-Antibes",
                    "localisation": "Inconnue"
                },
                {
                    "num": "312",
                    "titre": "Moulin et bateaux à Monikedam [sic], Hollande - Monnikendam [Pays-Bas]",
                    "slug": "Moulin-et-bateaux-a-Monikedam-sic-Monnikendam-Pays-Bas",
                    "localisation": "Inconnue"
                },
                {
                    "num": "313",
                    "titre": "Moulins en Hollande [Pays-Bas]",
                    "slug": "Moulins-en-Hollande",
                    "localisation": "Inconnue"
                },
                {
                    "num": "314",
                    "titre": "Osny, l'hôtel du village [Val-d'Oise]",
                    "slug": "Osny-l-hotel-du-village",
                    "localisation": "Inconnue"
                },
                {
                    "num": "316",
                    "titre": "L'Eglise d'Osny",
                    "slug": "L-Eglise-d-Osny",
                    "inventaire": "H/1996.4",
                    "localisation": "Osny, musée William Thornley, inv. H/1996.4",
                    "aVerifier": true
                },
                {
                    "num": "317",
                    "titre": "Venise, Monument du Colleone [Italie]",
                    "slug": "Venise-Monument-du-Colleone",
                    "localisation": "Inconnue"
                },
                {
                    "num": "318",
                    "titre": "Osny, Le chemin du cimetière [Val-d'Oise]",
                    "slug": "Osny-Le-chemin-du-cimetiere",
                    "localisation": "Inconnue"
                },
                {
                    "num": "319",
                    "titre": "Méditerranée par l'orage",
                    "slug": "Mediterranee-par-l-orage",
                    "localisation": "Inconnue"
                },
                {
                    "num": "320",
                    "titre": "Paysage de Hollande ; Le chemin du Moulin [Pays-Bas]",
                    "slug": "Paysage-de-Hollande-Le-chemin-du-Moulin",
                    "localisation": "Inconnue"
                },
                {
                    "num": "321",
                    "titre": "Effet de neige sur la ferme [Osny]",
                    "slug": "Effet-de-neige-sur-la-ferme",
                    "localisation": "Inconnue"
                },
                {
                    "num": "322",
                    "titre": "La ferme et ses châtaigniers [Osny] [Val-d'Oise]",
                    "slug": "La-ferme-et-ses-chataigniers-Osny",
                    "localisation": "Inconnue"
                },
                {
                    "num": "323",
                    "titre": "Osny \"sous le givre et la neige\" [Val-d'Oise]",
                    "slug": "Osny-sous-le-givre-et-la-neige",
                    "localisation": "Inconnue"
                },
                {
                    "num": "324",
                    "titre": "La Porte de Saint-Maclou [Pontoise]",
                    "slug": "Les-Deux-Clochers-POntoise",
                    "localisation": "Inconnue"
                },
                {
                    "num": "325",
                    "titre": "L'Abside de Saint-Maclou [Pontoise]",
                    "slug": "L-Abside-de-Saint-Maclou-Pontoise",
                    "localisation": "Inconnue"
                },
                {
                    "num": "326",
                    "titre": "Le Lac d'Annecy [Haute-Savoie]",
                    "slug": "Le-Lac-d-Annecy",
                    "localisation": "Inconnue"
                },
                {
                    "num": "327",
                    "titre": "La Seine à Rouen [Seine-Maritime]",
                    "slug": "La-Seine-a-Rouen"
                },
                {
                    "num": "328",
                    "titre": "Apricale [Ligurie-Italie]",
                    "slug": "Apricale-Ligurie-Italie",
                    "localisation": "Inconnue"
                },
                {
                    "num": "329",
                    "titre": "« Bateaux de pêche à Venise, avec leurs voiles rutilantes »",
                    "slug": "745-Bateaux-de-peche-a-Venise-avec-leurs-voiles-rutilantes",
                    "localisation": "Inconnue"
                },
                {
                    "num": "330",
                    "titre": "[Pontoise] L'Impasse Tavet [Val-d'Oise]",
                    "slug": "Pontoise-L-Impasse-Tavet"
                },
                {
                    "num": "331",
                    "titre": "Un gave dans les Pyrénées",
                    "slug": "Un-gave-dans-les-Pyrenees",
                    "localisation": "Inconnue"
                },
                {
                    "num": "332",
                    "titre": "Village dans les Pyrénées",
                    "slug": "Village-dans-les-Pyrenees",
                    "localisation": "Inconnue"
                },
                {
                    "num": "333",
                    "titre": "La cap d'Antibes dans la buée du matin [Alpes Maritimes]",
                    "slug": "La-cap-d-Antibes-dans-la-buee-du-matin-Alpes-Maritimes",
                    "localisation": "Inconnue"
                },
                {
                    "num": "334",
                    "titre": "Lever de soleil sur la ville d'Antibes [Alpes-Martimes]",
                    "slug": "Lever-de-soleil-sur-la-ville-d-Antibes-Alpes-Martimes",
                    "localisation": "Inconnue"
                },
                {
                    "num": "335",
                    "titre": "Les pins de Golfe-Juan [Alpes-Maritimes]",
                    "slug": "Les-pins-de-Golfe-Juan-Alpes-Maritimes",
                    "localisation": "Inconnue"
                },
                {
                    "num": "337",
                    "titre": "Venise, le quai de la Riva Squiavoni [sic] [Italie]",
                    "slug": "Venise-le-quai-de-la-Riva-Squiavoni-sic",
                    "localisation": "Inconnue"
                },
                {
                    "num": "338",
                    "titre": "Pavots (1)",
                    "slug": "Pavots-1"
                },
                {
                    "num": "339",
                    "titre": "Pavots (2)",
                    "slug": "Pavots-2",
                    "localisation": "Inconnue"
                },
                {
                    "num": "340",
                    "titre": "Basilique de Lourdes [Haute-Pyrénées]",
                    "slug": "Basilique-de-Lourdes",
                    "localisation": "Inconnue"
                },
                {
                    "num": "341",
                    "titre": "L'Etang.",
                    "slug": "L-Etang",
                    "localisation": "Inconnue"
                },
                {
                    "num": "342",
                    "titre": "Le Village au creux du vallon",
                    "slug": "Le-VIllage",
                    "localisation": "Inconnue"
                },
                {
                    "num": "343",
                    "titre": "Intérieur de ferme",
                    "slug": "Interieur-de-ferme",
                    "localisation": "Inconnue"
                },
                {
                    "num": "344",
                    "titre": "Les Falaises",
                    "slug": "Les-Falaises",
                    "localisation": "Inconnue"
                },
                {
                    "num": "345",
                    "titre": "Bord de rivière",
                    "slug": "Bord-de-riviere",
                    "localisation": "Inconnue"
                },
                {
                    "num": "346",
                    "titre": "Derniers rayons sur la montagne",
                    "slug": "Derniers-rayons-sur-la-montagne",
                    "localisation": "Inconnue"
                },
                {
                    "num": "347",
                    "titre": "Paysage montagneux",
                    "slug": "Paysage-montagneux",
                    "localisation": "Inconnue"
                },
                {
                    "num": "348",
                    "titre": "Bordighera [Italie, Ligurie], le matin",
                    "slug": "Bordighera-Italie-Ligurie-le-matin",
                    "localisation": "Inconnue"
                },
                {
                    "num": "349",
                    "titre": "Les Oliviers",
                    "slug": "Les-Oliviers"
                },
                {
                    "num": "350",
                    "titre": "Barque sur la plage, Menton, circa 1930 [Alpes -Maritimes]",
                    "slug": "Barque-sur-la-plage-Menton-circa-1930-Alpes-Maritimes",
                    "localisation": "Inconnue"
                },
                {
                    "num": "351",
                    "titre": "Vieux château dans le Var [Var]",
                    "slug": "Vieux-chateau-dans-le-var",
                    "localisation": "Inconnue"
                },
                {
                    "num": "352",
                    "titre": "Les Peupliers",
                    "slug": "Les-Peupliers",
                    "localisation": "Inconnue"
                },
                {
                    "num": "353",
                    "titre": "Roses [Environs d'Osny] [Val-d'Oise]",
                    "slug": "Roses-Environs-d-Osny",
                    "localisation": "Inconnue"
                },
                {
                    "num": "354",
                    "titre": "Le Moulin de Kaweck [sic] - [Katwijk- Pays-Bas ?]",
                    "slug": "Le-Moulin-de-Kaweck-sic-Katwijk-Pays-Bas"
                },
                {
                    "num": "355",
                    "titre": "Vieilles maisons à Dieppe [Seine-Maritime]",
                    "slug": "Vieilles-maisons-a-Dieppe",
                    "localisation": "Inconnue"
                },
                {
                    "num": "356",
                    "titre": "Bord de rivière",
                    "slug": "Bord-de-riviere",
                    "localisation": "Inconnue"
                },
                {
                    "num": "357",
                    "titre": "Le retour au port",
                    "slug": "Le-retour-au-port",
                    "localisation": "Inconnue"
                },
                {
                    "num": "358",
                    "titre": "Halle aux lins à Bruges [Belgique]",
                    "slug": "Halle-aux-lins-a-Bruges",
                    "localisation": "Inconnue"
                },
                {
                    "num": "359",
                    "titre": "Eglise de village",
                    "slug": "Eglise-de-village",
                    "localisation": "Inconnue"
                },
                {
                    "num": "360",
                    "titre": "Port sur la Méditerranée, temps clair",
                    "slug": "Port-sur-la-Mediterranee-temps-clair",
                    "localisation": "Inconnue"
                },
                {
                    "num": "361",
                    "titre": "Village en Hollande sur la mer du  Nord [Pays-Bas]",
                    "slug": "Village-en-Hollande-sur-la-mer-du-Nord",
                    "localisation": "Inconnue"
                }
            ]
        }
    ]
};
