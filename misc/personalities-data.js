/* =========================================================================
   Catalogue raisonné — INDEX DES PERSONNALITÉS (collectionneurs)
   -------------------------------------------------------------------------
   ⚠ Ce fichier ne se compare pas à `search-data.demo.js` : ici, rien n'est
     inventé. Titres, numéros de catalogue et slugs sont EXTRAITS DE LA BASE
     de production (catalogue raisonné Thornley, 361 œuvres) le 2026-07-30.

   ⚠ En revanche l'index lui-même n'a AUCUNE AUTORITÉ SAVANTE. Aucune entité
     « personnalité » n'existe en base : les noms ont été minés par
     expression régulière sur les mentions « Collection X » du texte libre
     des notices (Historique, Localisation, Description, Bibliographie),
     puis dédoublonnés à la main. Une telle extraction rate des cas et en
     invente d'autres. Elle préfigure le couple détection automatique +
     curation prévu au lot « index » — elle ne le remplace pas.
     Ne pas citer ces rattachements comme des provenances établies.

   Périmètre : collectionneurs seuls. Les experts et marchands (Georges
   Petit, Bernheim-Jeune, Durand-Ruel…), maisons de vente, auteurs et
   entourage de l'artiste sont hors de ce fichier.

   `identifiees` : personnes nommées.
   `anonymes`    : anonymats des catalogues de vente d'époque (« M. V… »),
                   à présenter dans un bloc distinct, comme dans les
                   catalogues raisonnés imprimés.
   `variantes`   : graphies rencontrées, quand la notice en donne plusieurs
                   pour la même personne (coquilles de saisie comprises).
   `note`        : réserve sur l'entrée — à lire avant de s'en servir.

   Exposé en global (et non en JSON chargé par fetch) pour que le site
   continue de fonctionner par simple double-clic sur un fichier, en
   file:// — fetch y serait bloqué par CORS.
   ========================================================================= */
window.CR_PERSONALITIES_DATA = {
    "identifiees": [
        {
            "nom": "Léon Payen",
            "role": "collectionneur",
            "nb": 8,
            "variantes": [
                "Léon Payen",
                "Payen"
            ],
            "oeuvres": [
                {
                    "num": "35",
                    "titre": "Effet de neige à Osny (Seine-et-Oise) [Val-d'Oise]",
                    "slug": "Effet-de-neige-a-Osny-Seine-et-Oise"
                },
                {
                    "num": "245",
                    "titre": "Le Port de Dieppe (2) [Seine-Maritime]",
                    "slug": "Le-Port-de-Dieppe-2"
                },
                {
                    "num": "305",
                    "titre": "Paysage à Osny, près Pontoise, Effet de neige [Val-d'Oise]",
                    "slug": "Paysage-a-Osny-pres-Pontoise-Effet-de-neige"
                },
                {
                    "num": "306",
                    "titre": "Le Bassin à Rouen [Seine-Maritime]",
                    "slug": "Le-Bassin-a-Rouen"
                },
                {
                    "num": "307",
                    "titre": "Les Dunes",
                    "slug": "Les Dunes"
                },
                {
                    "num": "308",
                    "titre": "Bords de rivière",
                    "slug": "Bords de rivière"
                },
                {
                    "num": "309",
                    "titre": "Le Grand Canal à Amsterdam [Pays-Bas]",
                    "slug": "le Grand Canal à Amsterdam"
                },
                {
                    "num": "310",
                    "titre": "Après L'Orage",
                    "slug": "Après L'Orage"
                }
            ]
        },
        {
            "nom": "Lazare Weiller",
            "role": "collectionneur",
            "nb": 7,
            "oeuvres": [
                {
                    "num": "30",
                    "titre": "Katwijk [Katwijk aan Zee, Pays-Bas, Hollande méridionale]",
                    "slug": "Katwijk-Katwijk-aan-Zee-Pays-Bas-Hollande-meridionale"
                },
                {
                    "num": "47",
                    "titre": "Marine en Hollande, temps brumeux [Pays-Bas]",
                    "slug": "Marine-en-Hollande-temps-brumeux"
                },
                {
                    "num": "94",
                    "titre": "L'Eglise de Katwijk [Pays-Bas]",
                    "slug": "L-Eglise-de-Katwijk-Pays-Bas"
                },
                {
                    "num": "232",
                    "titre": "L'Enclos",
                    "slug": "L-Enclos"
                },
                {
                    "num": "233",
                    "titre": "Osny, Le Château de Grouchy vu depuis le temple de Vénus (titre forgé)",
                    "slug": "Le-Chateau-de-Gourchy-vu-depuis-le-temple-de-Venus-titre-forge"
                },
                {
                    "num": "234",
                    "titre": "Les meules à Osny [Val-d'Oise]",
                    "slug": "Les-meules-a-Osny"
                },
                {
                    "num": "242",
                    "titre": "Dieppe, L'église Saint Jacques",
                    "slug": "Dieppe-L-eglise-Saint-Jacques"
                }
            ]
        },
        {
            "nom": "Schoengrun",
            "role": "collectionneur",
            "nb": 4,
            "variantes": [
                "Schoengrun",
                "Louis Schoengrun",
                "Scheongrun"
            ],
            "oeuvres": [
                {
                    "num": "48",
                    "titre": "Moulins en Hollande [Pays-Bas]",
                    "slug": "Moulins-en-Hollande"
                },
                {
                    "num": "59",
                    "titre": "Brouillard",
                    "slug": "Brouillard-f7a1f925"
                },
                {
                    "num": "231",
                    "titre": "Un moulin, en Hollande [Pays-Bas]",
                    "slug": "Un-moulin-en-Hollande-Pays-Bas"
                },
                {
                    "num": "271",
                    "titre": "Le Moulin",
                    "slug": "Le-Moulin-e0d31344"
                }
            ]
        },
        {
            "nom": "Barrié-Chevallier",
            "role": "collectionneur",
            "nb": 3,
            "variantes": [
                "Barrié-Chevallier",
                "Chevallier",
                "Barrié -Chevallier"
            ],
            "note": "collection Barrié-Chevallier ; « J.-Claude Barrié » est la même provenance",
            "oeuvres": [
                {
                    "num": "20",
                    "titre": "Les meules en hiver à Osny [Val-d'Oise]",
                    "slug": "Les-meules-en-hiver-a-Osny"
                },
                {
                    "num": "152",
                    "titre": "Meules en été, à la ferme du bas, Osny [Val-d'Oise]",
                    "slug": "Meules-en-ete-a-la-ferme-du-bas-Osny"
                },
                {
                    "num": "293",
                    "titre": "Bords de l'Huisne [Orne]",
                    "slug": "Bords-de-l-Huisne-Orne"
                }
            ]
        },
        {
            "nom": "Amante",
            "role": "collectionneur",
            "nb": 2,
            "oeuvres": [
                {
                    "num": "70",
                    "titre": "Vieux pont de pierre sur la Dore [Puy-de-Dôme]",
                    "slug": "Vieux-pont-de-pierre-sur-la-Dore"
                },
                {
                    "num": "71",
                    "titre": "Village au bord de la Dore [Puy-de-Dôme]",
                    "slug": "Village-au-bord-de-la-Dore"
                }
            ]
        },
        {
            "nom": "Freret",
            "role": "collectionneur",
            "nb": 2,
            "variantes": [
                "Freret",
                "Fréret"
            ],
            "oeuvres": [
                {
                    "num": "288",
                    "titre": "La Falaise",
                    "slug": "La-Falaise"
                },
                {
                    "num": "289",
                    "titre": "Au large",
                    "slug": "Au-large"
                }
            ]
        },
        {
            "nom": "Georges Feydeau",
            "role": "collectionneur",
            "nb": 2,
            "oeuvres": [
                {
                    "num": "228",
                    "titre": "Place du marché, à Dieppe [Seine-Maritime]",
                    "slug": "Place-du-marché-à-Dieppe"
                },
                {
                    "num": "229",
                    "titre": "Vue de Hollande [Pays-Bas]",
                    "slug": "Vue-de-Hollande"
                }
            ]
        },
        {
            "nom": "Maurice Gangnat",
            "role": "collectionneur",
            "nb": 2,
            "oeuvres": [
                {
                    "num": "171",
                    "titre": "Village de Cagnes [-sur-Mer - (Alpes-Maritimes)]",
                    "slug": "cagnes-sur-Mer-Alpes-Maritimes"
                },
                {
                    "num": "349",
                    "titre": "Les Oliviers",
                    "slug": "Les-Oliviers"
                }
            ]
        },
        {
            "nom": "Courtry",
            "role": "collectionneur",
            "nb": 1,
            "oeuvres": [
                {
                    "num": "257",
                    "titre": "Paysage d'Anvers [Belgique]",
                    "slug": "Paysage-d-Anvers-Belgique"
                }
            ]
        },
        {
            "nom": "Cousin",
            "role": "collectionneur",
            "nb": 1,
            "oeuvres": [
                {
                    "num": "10",
                    "titre": "L'Estacade [Paris]",
                    "slug": "L-Estacade"
                }
            ]
        },
        {
            "nom": "Deloison",
            "role": "collectionneur",
            "nb": 1,
            "oeuvres": [
                {
                    "num": "261",
                    "titre": "Paysage d'hiver",
                    "slug": "Paysage d'hiver"
                }
            ]
        },
        {
            "nom": "Depeaux",
            "role": "collectionneur",
            "nb": 1,
            "oeuvres": [
                {
                    "num": "57",
                    "titre": "Paysage d'été",
                    "slug": "Paysage-d-ete"
                }
            ]
        },
        {
            "nom": "Durand - Ruel",
            "role": "collectionneur",
            "nb": 1,
            "note": "marchand ; mention comparative (tableau de Gustave Loiseau), pas une provenance Thornley",
            "oeuvres": [
                {
                    "num": "136",
                    "titre": "Falaises à Etretat [Falaises d'Amont-Seine-Maritime]",
                    "slug": "Falaises-a-Etretat-Flaises-d-Amont-Seine-Maritime"
                }
            ]
        },
        {
            "nom": "Ed. Chastel",
            "role": "collectionneur",
            "nb": 1,
            "oeuvres": [
                {
                    "num": "261",
                    "titre": "Paysage d'hiver",
                    "slug": "Paysage d'hiver"
                }
            ]
        },
        {
            "nom": "Fabré",
            "role": "collectionneur",
            "nb": 1,
            "oeuvres": [
                {
                    "num": "10",
                    "titre": "L'Estacade [Paris]",
                    "slug": "L-Estacade"
                }
            ]
        },
        {
            "nom": "Guasco",
            "role": "collectionneur",
            "nb": 1,
            "oeuvres": [
                {
                    "num": "29",
                    "titre": "Vue du port d'Amsterdam",
                    "slug": "Vue-du-port-d-Amsterdam"
                }
            ]
        },
        {
            "nom": "Guyotin",
            "role": "collectionneur",
            "nb": 1,
            "oeuvres": [
                {
                    "num": "313",
                    "titre": "Moulins en Hollande [Pays-Bas]",
                    "slug": "Moulins-en-Hollande"
                }
            ]
        },
        {
            "nom": "J.-Claude Barrié",
            "role": "collectionneur",
            "nb": 1,
            "note": "cf. Barrié-Chevallier",
            "oeuvres": [
                {
                    "num": "20",
                    "titre": "Les meules en hiver à Osny [Val-d'Oise]",
                    "slug": "Les-meules-en-hiver-a-Osny"
                }
            ]
        },
        {
            "nom": "Juliette-Claire Bruchet-Méry",
            "role": "collectionneur",
            "nb": 1,
            "note": "fonds d'atelier, entourage de l'artiste",
            "oeuvres": [
                {
                    "num": "316",
                    "titre": "L'Eglise d'Osny",
                    "slug": "L-Eglise-d-Osny"
                }
            ]
        },
        {
            "nom": "Laffitte",
            "role": "collectionneur",
            "nb": 1,
            "oeuvres": [
                {
                    "num": "103",
                    "titre": "Dunes",
                    "slug": "Dunes"
                }
            ]
        },
        {
            "nom": "Lambert",
            "role": "collectionneur",
            "nb": 1,
            "note": "collection Lambert (Avignon) — institution",
            "oeuvres": [
                {
                    "num": "185",
                    "titre": "Vence, rue des Templiers [Alpes-Martitimes]",
                    "slug": "Vence-rue-des-Templiers-Alpes-Martitimes"
                }
            ]
        },
        {
            "nom": "Le Tiec",
            "role": "collectionneur",
            "nb": 1,
            "oeuvres": [
                {
                    "num": "62",
                    "titre": "Les Bords du Doubs, le matin [Doubs, Jura ou Sane-et-Loire]",
                    "slug": "Les-Bords-du-Doubs-le-matin"
                }
            ]
        },
        {
            "nom": "Lisboa",
            "role": "collectionneur",
            "nb": 1,
            "oeuvres": [
                {
                    "num": "289",
                    "titre": "Au large",
                    "slug": "Au-large"
                }
            ]
        },
        {
            "nom": "Rouillac",
            "role": "collectionneur",
            "nb": 1,
            "note": "commissaire-priseur cité comme détenteur",
            "oeuvres": [
                {
                    "num": "113",
                    "titre": "Le Birlot  (1) [Ile de Bréhat-Côtes-d'Armor]",
                    "slug": "Le-Birlot-Ile-de-Brehat-Cotes-d-Armor"
                }
            ]
        }
    ],
    "anonymes": [
        {
            "nom": "Ch. V…",
            "role": "collectionneur",
            "nb": 7,
            "oeuvres": [
                {
                    "num": "58",
                    "titre": "Moulins en Hollande [Pays-Bas]",
                    "slug": "Moulins-en-Hollande"
                },
                {
                    "num": "59",
                    "titre": "Brouillard",
                    "slug": "Brouillard-f7a1f925"
                },
                {
                    "num": "271",
                    "titre": "Le Moulin",
                    "slug": "Le-Moulin-e0d31344"
                },
                {
                    "num": "272",
                    "titre": "Moulins aux environs de Dordrecht [Pays-Bas]",
                    "slug": "Moulins-aux-environs-de-Dordrecht"
                },
                {
                    "num": "273",
                    "titre": "Bords de rivière à l'autome",
                    "slug": "Bord-de-riviere-à -l'autome"
                },
                {
                    "num": "274",
                    "titre": "Le Chemin au bord de la rivière",
                    "slug": "Bords-de-riviere-a-l-autome-copie-572cd2cd"
                },
                {
                    "num": "275",
                    "titre": "Le Bassin du port",
                    "slug": "Le-Bassin-du-port"
                }
            ]
        },
        {
            "nom": "M. W…",
            "role": "collectionneur",
            "nb": 4,
            "oeuvres": [
                {
                    "num": "246",
                    "titre": "La sortie du port, à Dieppe, matinée brumeuse Seine-Maritime]",
                    "slug": "la-sortie-du-port-a-Dieppe-matinee-brumeuse"
                },
                {
                    "num": "359",
                    "titre": "Eglise de village",
                    "slug": "Eglise-de-village"
                },
                {
                    "num": "360",
                    "titre": "Port sur la Méditerranée, temps clair",
                    "slug": "Port-sur-la-Mediterranee-temps-clair"
                },
                {
                    "num": "361",
                    "titre": "Village en Hollande sur la mer du  Nord [Pays-Bas]",
                    "slug": "Village-en-Hollande-sur-la-mer-du-Nord"
                }
            ]
        },
        {
            "nom": "L***…",
            "role": "collectionneur",
            "nb": 3,
            "oeuvres": [
                {
                    "num": "268",
                    "titre": "Paysage dans la Haute-Savoie",
                    "slug": "Paysage-en-Haute-Savoie"
                },
                {
                    "num": "269",
                    "titre": "Torrent dans le Dauphiné",
                    "slug": "Torrent-dans-le-Dauphine"
                },
                {
                    "num": "270",
                    "titre": "Vue de Rouen, brumes du matin [Seine-Maritime]",
                    "slug": "Vue-de-Rouen-brume-du-matin"
                }
            ]
        },
        {
            "nom": "M. P…",
            "role": "collectionneur",
            "nb": 3,
            "oeuvres": [
                {
                    "num": "31",
                    "titre": "Moulins, Île de Scouvens [sic]-[Ile de Schouwen-Duiveland-Pays-Bas",
                    "slug": "Moulins-ile-de-Scouvens-sic-Ile-de-Schouwen-Duiveland-Pays-Bas"
                },
                {
                    "num": "34",
                    "titre": "Lavoir près Gisors (Eure)",
                    "slug": "Lavoir-pres-Gisors-Eure"
                },
                {
                    "num": "35",
                    "titre": "Effet de neige à Osny (Seine-et-Oise) [Val-d'Oise]",
                    "slug": "Effet-de-neige-a-Osny-Seine-et-Oise"
                }
            ]
        },
        {
            "nom": "M. L…",
            "role": "collectionneur",
            "nb": 2,
            "oeuvres": [
                {
                    "num": "268",
                    "titre": "Paysage dans la Haute-Savoie",
                    "slug": "Paysage-en-Haute-Savoie"
                },
                {
                    "num": "270",
                    "titre": "Vue de Rouen, brumes du matin [Seine-Maritime]",
                    "slug": "Vue-de-Rouen-brume-du-matin"
                }
            ]
        },
        {
            "nom": "M. V…",
            "role": "collectionneur",
            "nb": 2,
            "oeuvres": [
                {
                    "num": "238",
                    "titre": "Saison dorée",
                    "slug": "Saison-doree"
                },
                {
                    "num": "239",
                    "titre": "La Mare, effet du matin",
                    "slug": "La-Mare-effet-du-matin"
                }
            ]
        },
        {
            "nom": "Monsieur H…",
            "role": "collectionneur",
            "nb": 2,
            "oeuvres": [
                {
                    "num": "297",
                    "titre": "Le Marché à Vence (Provence) [Alpes-Maritimes]",
                    "slug": "Le-Marche-a-Vence-Provence-Alpes-Maritimes"
                },
                {
                    "num": "298",
                    "titre": "Cour de ferme",
                    "slug": "Cour-de-ferme"
                }
            ]
        },
        {
            "nom": "M. B…",
            "role": "collectionneur",
            "nb": 1,
            "oeuvres": [
                {
                    "num": "21",
                    "titre": "La Seine aux Andelys [Eure]",
                    "slug": "La-Seine-aux-Andelys"
                }
            ]
        },
        {
            "nom": "M. H…",
            "role": "collectionneur",
            "nb": 1,
            "oeuvres": [
                {
                    "num": "297",
                    "titre": "Le Marché à Vence (Provence) [Alpes-Maritimes]",
                    "slug": "Le-Marche-a-Vence-Provence-Alpes-Maritimes"
                }
            ]
        },
        {
            "nom": "M. X…",
            "role": "collectionneur",
            "nb": 1,
            "oeuvres": [
                {
                    "num": "21",
                    "titre": "La Seine aux Andelys [Eure]",
                    "slug": "La-Seine-aux-Andelys"
                }
            ]
        },
        {
            "nom": "Tony L…",
            "role": "collectionneur",
            "nb": 1,
            "oeuvres": [
                {
                    "num": "311",
                    "titre": "Vue d'Antibes [Alpes-Maritimes]",
                    "slug": "Vue-d-Antibes"
                }
            ]
        }
    ]
};
