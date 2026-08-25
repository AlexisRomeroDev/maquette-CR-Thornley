/* =========================================================================
   Catalogue raisonné — INDEX DES VILLES (lieux représentés)
   -------------------------------------------------------------------------
   ⚠ Comme `personalities-data.js`, et contrairement à `search-data.demo.js` :
     titres, numéros de catalogue et slugs sont EXTRAITS DE LA BASE de
     production (catalogue raisonné Thornley, 361 œuvres) le 2026-07-30.

   ⚠ L'index lui-même n'a AUCUNE AUTORITÉ SAVANTE. Aucune entité « ville »
     n'existe en base : les lieux ont été reconnus dans les TITRES des œuvres
     au moyen d'un répertoire de noms curé à la main sur le corpus. Un lieu
     absent du répertoire est absent de l'index. Ne pas citer ces
     rattachements comme des localisations établies.

   Ce sont les lieux REPRÉSENTÉS, pas les lieux de vente : les villes des
   ventes publiques (Paris, Londres, Copenhague…) relèvent de l'historique
   des œuvres et sont hors de ce fichier.

   `territoire` : département français, ou région pour l'Italie. Repris des
                  crochets du titre, dont les graphies fautives ont été
                  normalisées (« Seine-Martitime », « Val-d'OIse »,
                  « Alpes-Martimes »… sont tous ramenés à leur forme exacte).
                  **null** quand la notice ne le donne pas — rien n'est
                  déduit d'une connaissance géographique extérieure. C'est le
                  cas des villes étrangères, et de Paris, Giverny,
                  Montfermeil et Toulon.
   `variantes`  : graphies rencontrées. Le corpus suit une convention nette —
                  « [sic] » signale la coquille et la bonne graphie suit
                  (« Moulin de Dordrech [sic], Hollande-Dordrecht »). Les deux
                  formes sont conservées ici, sous le nom exact.
   `incertain`  : la notice elle-même doute du lieu (un « ? » dans le titre).

   Exposé en global (et non en JSON chargé par fetch) pour que le site
   continue de fonctionner par simple double-clic sur un fichier, en
   file:// — fetch y serait bloqué par CORS.
   ========================================================================= */
window.CR_CITIES_DATA = {
    "villes": [
        {
            "nom": "Amsterdam",
            "pays": "Pays-Bas",
            "territoire": null,
            "nb": 1,
            "oeuvres": [
                {
                    "num": "309",
                    "titre": "Le Grand Canal à Amsterdam [Pays-Bas]",
                    "slug": "le Grand Canal à Amsterdam"
                }
            ]
        },
        {
            "nom": "Antibes",
            "pays": "France",
            "territoire": "Alpes-Maritimes",
            "nb": 15,
            "oeuvres": [
                {
                    "num": "67",
                    "titre": "Antibes, le matin [Alpes-Maritimes]",
                    "slug": "Antibes-le-matin"
                },
                {
                    "num": "72",
                    "titre": "Antibes (2) [Alpes-Maritimes]",
                    "slug": "Antibes-2"
                },
                {
                    "num": "91",
                    "titre": "Antibes, temps gris (titre forgé) [Alpes-Maritimes]",
                    "slug": "Antibes-temps-gris-titre-forge"
                },
                {
                    "num": "161",
                    "titre": "Antibes [titre rétabli]",
                    "slug": "Antibes-titre-retabli"
                },
                {
                    "num": "162",
                    "titre": "Antibes. Mauvais temps",
                    "slug": "Antibes-titre-retabli-copie-9e9a180a"
                },
                {
                    "num": "163",
                    "titre": "Antibes, grosse mer [Alpes-Maritimes]",
                    "slug": "Antibes-grosse-mer"
                },
                {
                    "num": "164",
                    "titre": "Antibes [titre rétabli]",
                    "slug": "Antibes-titre-retabli"
                },
                {
                    "num": "167",
                    "titre": "Le Cap de l'Ilette, à Antibes [Alpes-Maritimes]",
                    "slug": "Le-Cap-de-l-Ilette-a-Antibes"
                },
                {
                    "num": "168",
                    "titre": "Tempête à Antibes {Alpes-Maritimes]",
                    "slug": "Tempete-a-Antibes"
                },
                {
                    "num": "169",
                    "titre": "Antibes, vue de la Chapelle Notre-Dame [Alpes-Maritimes]",
                    "slug": "Antibes-vu-de-la-Chapelle-Notre-Dame"
                },
                {
                    "num": "170",
                    "titre": "La rue Vauban à Antibes [Alpes-Maritimes]",
                    "slug": "La-rue-vauban-a-Antibes"
                },
                {
                    "num": "198",
                    "titre": "Antibes [Alpes-Maritimes]",
                    "slug": "Antibes"
                },
                {
                    "num": "212",
                    "titre": "Antibes [Titre rétabli] [Alpes-Maritimes]",
                    "slug": "Antibes-Titre-retabli"
                },
                {
                    "num": "266",
                    "titre": "Antibes",
                    "slug": "Antibes"
                },
                {
                    "num": "267",
                    "titre": "Village au bord de la mer (Antibes) [Alpes-Maritimes]",
                    "slug": "Village-au-bord-de-la-mer-Antibes"
                }
            ]
        },
        {
            "nom": "Apricale",
            "pays": "Italie",
            "territoire": "Ligurie",
            "nb": 1,
            "oeuvres": [
                {
                    "num": "328",
                    "titre": "Apricale [Ligurie-Italie]",
                    "slug": "Apricale-Ligurie-Italie"
                }
            ]
        },
        {
            "nom": "Bon Repos",
            "pays": "France",
            "territoire": "Côtes-d'Armor",
            "nb": 2,
            "oeuvres": [
                {
                    "num": "254",
                    "titre": "Chaumière dans le vallon de Longeau, près de Bon Repos [Côtes-d'Armor]",
                    "slug": "Chaumiere-dans-le-vallon-de-Longeau-pres-de-Bon-Repos"
                },
                {
                    "num": "256",
                    "titre": "Les Bruyères, Vallée de Bon Repos, Côtes du Nord [Côtes d'Armor]",
                    "slug": "Les-bruyeres-Vallee-de-Bon-Repos-Cotes-du-Nord-Cotes-d-Armor"
                }
            ]
        },
        {
            "nom": "Bordighera",
            "pays": "Italie",
            "territoire": "Ligurie",
            "nb": 3,
            "oeuvres": [
                {
                    "num": "199",
                    "titre": "Bordighera [Italie]",
                    "slug": "Bordighera-Italie"
                },
                {
                    "num": "213",
                    "titre": "Bordighera [?] [Italie, Ligurie]",
                    "slug": "Bordighera-Italie-Ligurie",
                    "incertain": true
                },
                {
                    "num": "348",
                    "titre": "Bordighera [Italie, Ligurie], le matin",
                    "slug": "Bordighera-Italie-Ligurie-le-matin"
                }
            ]
        },
        {
            "nom": "Bruges",
            "pays": "Belgique",
            "territoire": null,
            "nb": 1,
            "oeuvres": [
                {
                    "num": "358",
                    "titre": "Halle aux lins à Bruges [Belgique]",
                    "slug": "Halle-aux-lins-a-Bruges"
                }
            ]
        },
        {
            "nom": "Cagnes-sur-Mer",
            "pays": "France",
            "territoire": "Alpes-Maritimes",
            "nb": 1,
            "oeuvres": [
                {
                    "num": "171",
                    "titre": "Village de Cagnes [-sur-Mer - (Alpes-Maritimes)]",
                    "slug": "cagnes-sur-Mer-Alpes-Maritimes"
                }
            ]
        },
        {
            "nom": "Cassis",
            "pays": "France",
            "territoire": "Bouches-du-Rhône",
            "nb": 1,
            "oeuvres": [
                {
                    "num": "172",
                    "titre": "Calanques à Cassis  [Bouches-du-Rhône]",
                    "slug": "calanques-a-Cassis-titre-forge-Bouches-du-Rhone"
                }
            ]
        },
        {
            "nom": "Cavalaire",
            "pays": "France",
            "territoire": "Var",
            "nb": 1,
            "oeuvres": [
                {
                    "num": "249",
                    "titre": "Matin à Cavalaire [sur-Mer, Var]",
                    "slug": "Cavalaire-sur-Mer-Var"
                }
            ]
        },
        {
            "nom": "Chars",
            "pays": "France",
            "territoire": "Val-d'Oise",
            "nb": 2,
            "oeuvres": [
                {
                    "num": "153",
                    "titre": "L'Eglise de Chars [Val-d'Oise]",
                    "slug": "L-Eglise-de-Chars"
                },
                {
                    "num": "154",
                    "titre": "Chars-Ferme de la Côte Saint-Cyr (titre forgé) [Val-d'Oise]",
                    "slug": "Chars-Ferme-de-la-Cote-Saint-Cyr-titre-forge"
                }
            ]
        },
        {
            "nom": "Dieppe",
            "pays": "France",
            "territoire": "Seine-Maritime",
            "nb": 18,
            "oeuvres": [
                {
                    "num": "75",
                    "titre": "Effet de brouillard à Dieppe [Seine-Maritime]",
                    "slug": "Effet-de-brouillard-a-Dieppe"
                },
                {
                    "num": "84",
                    "titre": "Falaise à Pourville, près  de Dieppe [Seine-Maritime]",
                    "slug": "Falaise-a-Pourville-pres-Dieppe-Seine-Maritime"
                },
                {
                    "num": "135",
                    "titre": "Voiliers près de la côte, Dieppe [Seine-Maritime]",
                    "slug": "Voiliers-pres-de-la-cote-Dieppe-Seine-Maritime"
                },
                {
                    "num": "215",
                    "titre": "Marché à Dieppe [Place Duquesne] [Seine-Maritime]",
                    "slug": "Marche-a-Dieppe-Place-Duquesne-Seine-Maritime"
                },
                {
                    "num": "228",
                    "titre": "Place du marché, à Dieppe [Seine-Maritime]",
                    "slug": "Place-du-marché-à-Dieppe"
                },
                {
                    "num": "240",
                    "titre": "Vieilles maisons à Dieppe [Seine-Maritime]",
                    "slug": "Vieilles-maisons-a-Dieppe"
                },
                {
                    "num": "241",
                    "titre": "Marché à Dieppe",
                    "slug": "Marche-a-Dieppe"
                },
                {
                    "num": "242",
                    "titre": "Dieppe, L'église Saint Jacques",
                    "slug": "Dieppe-L-eglise-Saint-Jacques"
                },
                {
                    "num": "243",
                    "titre": "Dieppe, la Place Duquesne (titre forgé)",
                    "slug": "Dieppe-la-Place-Duquesne-titre-forge"
                },
                {
                    "num": "244",
                    "titre": "Le Port de Dieppe (1) [Seine-Maritime]",
                    "slug": "Le-Port-de-Dieppe-1"
                },
                {
                    "num": "245",
                    "titre": "Le Port de Dieppe (2) [Seine-Maritime]",
                    "slug": "Le-Port-de-Dieppe-2"
                },
                {
                    "num": "246",
                    "titre": "La sortie du port, à Dieppe, matinée brumeuse Seine-Maritime]",
                    "slug": "la-sortie-du-port-a-Dieppe-matinee-brumeuse"
                },
                {
                    "num": "247",
                    "titre": "Dieppe, Rue Gustave Rouland [Seine-Maritime]",
                    "slug": "Dieppe-Rue-Gustave-Rouland"
                },
                {
                    "num": "248",
                    "titre": "Vielles maisons à Dieppe [Seine-Maritime]",
                    "slug": "Vielles-maisons-a-Dieppe"
                },
                {
                    "num": "255",
                    "titre": "Dieppe, la Place du Marché (titre forgé) [Seine-Maritime]",
                    "slug": "Dieppe-la-Place-du-Marche-titre-forge"
                },
                {
                    "num": "276",
                    "titre": "Falaise de Puys, près Dieppe [Seine-Maritime]",
                    "slug": "Falaise-de-Puys-pres-Dieppe"
                },
                {
                    "num": "282",
                    "titre": "Rue de Dieppe [Seine-Martitime]",
                    "slug": "Rue-de-Dieppe"
                },
                {
                    "num": "355",
                    "titre": "Vieilles maisons à Dieppe [Seine-Maritime]",
                    "slug": "Vieilles-maisons-a-Dieppe"
                }
            ]
        },
        {
            "nom": "Dinan",
            "pays": "France",
            "territoire": "Côtes-d'Armor",
            "nb": 2,
            "oeuvres": [
                {
                    "num": "120",
                    "titre": "La Rance près Dinan. Ille Et Vilaine. Matin [Léhon-Côtes d'Armor]",
                    "slug": "64-La-Rance-pres-Dinan-Ille-Et-Vilaine-Matin-Lehon-Cotes-d-Armor"
                },
                {
                    "num": "290",
                    "titre": "La Rance à Dinan [Côtes-d'Armor]",
                    "slug": "La-Rance-a-Dinan"
                }
            ]
        },
        {
            "nom": "Dorceau",
            "pays": "France",
            "territoire": "Orne",
            "nb": 1,
            "oeuvres": [
                {
                    "num": "291",
                    "titre": "Eglise de Dorceau [Orne]",
                    "slug": "Eglise-de-Dorceau"
                }
            ]
        },
        {
            "nom": "Dordrecht",
            "pays": "Pays-Bas",
            "territoire": null,
            "nb": 5,
            "variantes": [
                "Dordrecht",
                "Dordrech"
            ],
            "oeuvres": [
                {
                    "num": "32",
                    "titre": "Moulins à Dordrecht [Pays-Bas]",
                    "slug": "Moulins-a-Dordrecht-Pays-Bas"
                },
                {
                    "num": "92",
                    "titre": "La Côte aux Pays-Bas [Dordrecht]",
                    "slug": "La-Cote-aux-Pays-Bas-Dordrecht"
                },
                {
                    "num": "93",
                    "titre": "Moulin de Dordrech [sic], Hollande-Dordrecht [Pays-Bas]",
                    "slug": "Moulin-de-Dordrech-sic-Dordrecht-Pays-Bas"
                },
                {
                    "num": "101",
                    "titre": "Environs de Dordrecht : Bateaux sur la Merwede [Pays-Bas]",
                    "slug": "Environs-de-Dordrecht-Bateaux-sur-la-Merwede-Pays-Bas"
                },
                {
                    "num": "272",
                    "titre": "Moulins aux environs de Dordrecht [Pays-Bas]",
                    "slug": "Moulins-aux-environs-de-Dordrecht"
                }
            ]
        },
        {
            "nom": "Edam",
            "pays": "Pays-Bas",
            "territoire": null,
            "nb": 1,
            "oeuvres": [
                {
                    "num": "102",
                    "titre": "Edam en Hollande [Pays-Bas]",
                    "slug": "Edam-en-Hollande"
                }
            ]
        },
        {
            "nom": "Étretat",
            "pays": "France",
            "territoire": "Seine-Maritime",
            "nb": 1,
            "oeuvres": [
                {
                    "num": "136",
                    "titre": "Falaises à Etretat [Falaises d'Amont-Seine-Maritime]",
                    "slug": "Falaises-a-Etretat-Flaises-d-Amont-Seine-Maritime"
                }
            ]
        },
        {
            "nom": "Flamanville",
            "pays": "France",
            "territoire": "Manche",
            "nb": 1,
            "oeuvres": [
                {
                    "num": "25",
                    "titre": "Route de Flamanville [Manche]",
                    "slug": "Route-de-Flamanville-Manche"
                }
            ]
        },
        {
            "nom": "Gisors",
            "pays": "France",
            "territoire": "Eure",
            "nb": 4,
            "oeuvres": [
                {
                    "num": "34",
                    "titre": "Lavoir près Gisors (Eure)",
                    "slug": "Lavoir-pres-Gisors-Eure"
                },
                {
                    "num": "131",
                    "titre": "Paysage enneigé \"Rendez-vous de hasse à Gisors\" [Eure]",
                    "slug": "Rendez-vous-de-hasse-a-Gisors-Eure"
                },
                {
                    "num": "225",
                    "titre": "Paysage enneigé \"rendez-vous de chasse forêt de Gisors\" [Normandie]",
                    "slug": "Paysage-enneige-rendez-vous-de-chasse-foret-de-Gisors"
                },
                {
                    "num": "303",
                    "titre": "Environs de Gisors, le matin [Eure]",
                    "slug": "Environs-de-Gisors-le-matin"
                }
            ]
        },
        {
            "nom": "Giverny",
            "pays": "France",
            "territoire": null,
            "nb": 1,
            "oeuvres": [
                {
                    "num": "19",
                    "titre": "Giverny",
                    "slug": "Giverny"
                }
            ]
        },
        {
            "nom": "Golfe-Juan",
            "pays": "France",
            "territoire": "Alpes-Maritimes",
            "nb": 2,
            "oeuvres": [
                {
                    "num": "335",
                    "titre": "Les pins de Golfe-Juan [Alpes-Maritimes]",
                    "slug": "Les-pins-de-Golfe-Juan-Alpes-Maritimes"
                },
                {
                    "num": "336",
                    "titre": "Paysage de Méditerranée [Golfe-Juan, Alpes-Maritimes ? ]",
                    "slug": "Paysage-mediterraneen",
                    "incertain": true
                }
            ]
        },
        {
            "nom": "Huelgoat",
            "pays": "France",
            "territoire": "Finistère",
            "nb": 1,
            "oeuvres": [
                {
                    "num": "251",
                    "titre": "Paysage aux environs de Huelgoat [Finistère]",
                    "slug": "paysage-aux-environs-de-Huelgoat-Finistere"
                }
            ]
        },
        {
            "nom": "Île de Bréhat",
            "pays": "France",
            "territoire": "Côtes-d'Armor",
            "nb": 6,
            "variantes": [
                "Ile de Bréhat",
                "Bréhat",
                "Birlot"
            ],
            "oeuvres": [
                {
                    "num": "112",
                    "titre": "Ile de Bréhat [Côtes-d'Armor]",
                    "slug": "Ile-de-Brehat-Cotes-d-Armor"
                },
                {
                    "num": "113",
                    "titre": "Le Birlot  (1) [Ile de Bréhat-Côtes-d'Armor]",
                    "slug": "Le-Birlot-Ile-de-Brehat-Cotes-d-Armor"
                },
                {
                    "num": "114",
                    "titre": "Le Birlot (2) [Côtes-d'Armor]",
                    "slug": "Le-Birlot-2-Cotes-d-Armor"
                },
                {
                    "num": "295",
                    "titre": "Bréat [sic], la carrière [Ile de Bréhat, Côtes d'Armor]",
                    "slug": "Breat-sic-la-carriere-Cotes-d-Armor"
                },
                {
                    "num": "299",
                    "titre": "Vue de l'Ile de Bréhat [Côtes d'Armor]",
                    "slug": "Vue-de-l-Ile-de-Brehat-Cotes-d-Armor"
                },
                {
                    "num": "300",
                    "titre": "Ile de Bréat [sic] à marée basse [Ile de Bréhat-Côtes d'Armor]",
                    "slug": "Ile-de-Breat-sic-a-maree-basse-Ile-de-Brehat-Cotes-d-Armor"
                }
            ]
        },
        {
            "nom": "Katwijk",
            "pays": "Pays-Bas",
            "territoire": null,
            "nb": 3,
            "oeuvres": [
                {
                    "num": "30",
                    "titre": "Katwijk [Katwijk aan Zee, Pays-Bas, Hollande méridionale]",
                    "slug": "Katwijk-Katwijk-aan-Zee-Pays-Bas-Hollande-meridionale"
                },
                {
                    "num": "94",
                    "titre": "L'Eglise de Katwijk [Pays-Bas]",
                    "slug": "L-Eglise-de-Katwijk-Pays-Bas"
                },
                {
                    "num": "354",
                    "titre": "Le Moulin de Kaweck [sic] - [Katwijk- Pays-Bas ?]",
                    "slug": "Le-Moulin-de-Kaweck-sic-Katwijk-Pays-Bas",
                    "incertain": true
                }
            ]
        },
        {
            "nom": "Le Trayas",
            "pays": "France",
            "territoire": "Var",
            "nb": 1,
            "oeuvres": [
                {
                    "num": "262",
                    "titre": "Les Rochers à [sic] Trayas [Var]",
                    "slug": "Les-Rochers-a-sic-Trayas-Var"
                }
            ]
        },
        {
            "nom": "Léhon",
            "pays": "France",
            "territoire": "Côtes-d'Armor",
            "nb": 1,
            "oeuvres": [
                {
                    "num": "120",
                    "titre": "La Rance près Dinan. Ille Et Vilaine. Matin [Léhon-Côtes d'Armor]",
                    "slug": "64-La-Rance-pres-Dinan-Ille-Et-Vilaine-Matin-Lehon-Cotes-d-Armor"
                }
            ]
        },
        {
            "nom": "Les Andelys",
            "pays": "France",
            "territoire": "Eure",
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
            "nom": "Longueville",
            "pays": "France",
            "territoire": "Seine-Maritime",
            "nb": 2,
            "oeuvres": [
                {
                    "num": "235",
                    "titre": "La Place de Longueville (Seine-Inférieure) [actuelleSeine-maritime]",
                    "slug": "La-Place-de-Longueville-Seine-maritime"
                },
                {
                    "num": "236",
                    "titre": "Place du marché à Longueville (Seine-Inférieure) [Seine-Maritime]",
                    "slug": "Place-du-marche-a-Longueville"
                }
            ]
        },
        {
            "nom": "Lourdes",
            "pays": "France",
            "territoire": "Hautes-Pyrénées",
            "nb": 1,
            "oeuvres": [
                {
                    "num": "340",
                    "titre": "Basilique de Lourdes [Haute-Pyrénées]",
                    "slug": "Basilique-de-Lourdes"
                }
            ]
        },
        {
            "nom": "Menton",
            "pays": "France",
            "territoire": "Alpes-Maritimes",
            "nb": 3,
            "oeuvres": [
                {
                    "num": "174",
                    "titre": "[Menton] Bord de mer méditerranéen [Alpes-Maritimes]",
                    "slug": "Menton-Bord-de-mer-mediterraneen"
                },
                {
                    "num": "220",
                    "titre": "Menton [Alpes-Maritimes]",
                    "slug": "Menton"
                },
                {
                    "num": "350",
                    "titre": "Barque sur la plage, Menton, circa 1930 [Alpes -Maritimes]",
                    "slug": "Barque-sur-la-plage-Menton-circa-1930-Alpes-Maritimes"
                }
            ]
        },
        {
            "nom": "Monnikendam",
            "pays": "Pays-Bas",
            "territoire": null,
            "nb": 1,
            "oeuvres": [
                {
                    "num": "312",
                    "titre": "Moulin et bateaux à Monikedam [sic], Hollande - Monnikendam [Pays-Bas]",
                    "slug": "Moulin-et-bateaux-a-Monikedam-sic-Monnikendam-Pays-Bas"
                }
            ]
        },
        {
            "nom": "Mont Saint-Gilles",
            "pays": "France",
            "territoire": "Manche",
            "nb": 2,
            "oeuvres": [
                {
                    "num": "27",
                    "titre": "Le Mont Saint-Gilles [Manche]",
                    "slug": "le-Mont-Saint-Gilles-Manche"
                },
                {
                    "num": "28",
                    "titre": "Vue du Mont Saint-Gilles [Manche] (titre forgé)",
                    "slug": "Vue-du-Mont-Saint-Gilles-titre-forge"
                }
            ]
        },
        {
            "nom": "Mont Saint-Michel",
            "pays": "France",
            "territoire": "Manche",
            "nb": 1,
            "oeuvres": [
                {
                    "num": "138",
                    "titre": "Le Mont Saint-Michel [Manche]",
                    "slug": "Le-Mont-Saint-Michel-Manche"
                }
            ]
        },
        {
            "nom": "Montfermeil",
            "pays": "France",
            "territoire": null,
            "nb": 1,
            "oeuvres": [
                {
                    "num": "12",
                    "titre": "Vue prise à Montfermeil",
                    "slug": "Vue-prise-a-Montfermeil"
                }
            ]
        },
        {
            "nom": "Nonette",
            "pays": "France",
            "territoire": "Puy-de-Dôme",
            "nb": 1,
            "oeuvres": [
                {
                    "num": "139",
                    "titre": "Vue présumée du village de Nonette [Puy-de-Dôme]",
                    "slug": "Vuen-presumee-du-village-de-Nonette-Puy-de-Dome"
                }
            ]
        },
        {
            "nom": "Offranville",
            "pays": "France",
            "territoire": "Seine-Maritime",
            "nb": 1,
            "oeuvres": [
                {
                    "num": "76",
                    "titre": "Offranville [Seine-Martitime]",
                    "slug": "Offranville-Seine-Martitime"
                }
            ]
        },
        {
            "nom": "Osny",
            "pays": "France",
            "territoire": "Val-d'Oise",
            "nb": 22,
            "oeuvres": [
                {
                    "num": "20",
                    "titre": "Les meules en hiver à Osny [Val-d'Oise]",
                    "slug": "Les-meules-en-hiver-a-Osny"
                },
                {
                    "num": "35",
                    "titre": "Effet de neige à Osny (Seine-et-Oise) [Val-d'Oise]",
                    "slug": "Effet-de-neige-a-Osny-Seine-et-Oise"
                },
                {
                    "num": "36",
                    "titre": "Le Vallon à Osny [Val-d'Oise]",
                    "slug": "Le-Vallon-a-Osny"
                },
                {
                    "num": "81",
                    "titre": "Osny, le quartier de la Gare ; brouillard (titre forgé) [Val-d'Oise]",
                    "slug": "Osny-le-quartier-de-la-gare-brouillard"
                },
                {
                    "num": "140",
                    "titre": "Les Châtaigniers à Osny [Val-d'Oise]",
                    "slug": "Les-Chataigniers-a-Osny"
                },
                {
                    "num": "141",
                    "titre": "La rue des Châtaigniers [Osny] [Val-d'Oise]",
                    "slug": "La-rue-des-Chataigniers-Osny"
                },
                {
                    "num": "143",
                    "titre": "La ferme du Friche [Osny] [Val-d'Oise]",
                    "slug": "La-ferme-du-Friche-Osny"
                },
                {
                    "num": "144",
                    "titre": "Ferme à Osny, temps d'orage [Val-d'OIse]",
                    "slug": "Ferme-a-Osny-temps-d-orage"
                },
                {
                    "num": "145",
                    "titre": "La Ferme d'En-Bas [Osny] [Val-d'Oise]",
                    "slug": "La-Ferme-d-En-Bas-Osny"
                },
                {
                    "num": "148",
                    "titre": "Osny, versant de la gare-Vallée d’Osny [Val-d'OIse]",
                    "slug": "Osny-versant-de-la-gare-Vallee-d-Osny"
                },
                {
                    "num": "149",
                    "titre": "Devant le moulin à Osny [Val-d'Oise]",
                    "slug": "Devant-le-moulin-a-Osny"
                },
                {
                    "num": "152",
                    "titre": "Meules en été, à la ferme du bas, Osny [Val-d'Oise]",
                    "slug": "Meules-en-ete-a-la-ferme-du-bas-Osny"
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
                    "num": "237",
                    "titre": "Neige à Aulny [sic, pour Osny] [Val-d'Oise]",
                    "slug": "Neige-a-Auly-sic-pour-Osny"
                },
                {
                    "num": "305",
                    "titre": "Paysage à Osny, près Pontoise, Effet de neige [Val-d'Oise]",
                    "slug": "Paysage-a-Osny-pres-Pontoise-Effet-de-neige"
                },
                {
                    "num": "314",
                    "titre": "Osny, l'hôtel du village [Val-d'Oise]",
                    "slug": "Osny-l-hotel-du-village"
                },
                {
                    "num": "315",
                    "titre": "Osny, l'entrée du village [Val-d'Oise]",
                    "slug": "Osny-l-entree-du-village"
                },
                {
                    "num": "318",
                    "titre": "Osny, Le chemin du cimetière [Val-d'Oise]",
                    "slug": "Osny-Le-chemin-du-cimetiere"
                },
                {
                    "num": "321",
                    "titre": "Effet de neige sur la ferme [Osny]",
                    "slug": "Effet-de-neige-sur-la-ferme"
                },
                {
                    "num": "322",
                    "titre": "La ferme et ses châtaigniers [Osny] [Val-d'Oise]",
                    "slug": "La-ferme-et-ses-chataigniers-Osny"
                },
                {
                    "num": "323",
                    "titre": "Osny \"sous le givre et la neige\" [Val-d'Oise]",
                    "slug": "Osny-sous-le-givre-et-la-neige"
                }
            ]
        },
        {
            "nom": "Paris",
            "pays": "France",
            "territoire": null,
            "nb": 2,
            "oeuvres": [
                {
                    "num": "10",
                    "titre": "L'Estacade [Paris]",
                    "slug": "L-Estacade"
                },
                {
                    "num": "265",
                    "titre": "La Seine en hiver [Paris ? ]",
                    "slug": "La-Seine-en-hiver-Paris",
                    "incertain": true
                }
            ]
        },
        {
            "nom": "Pont-en-Royans",
            "pays": "France",
            "territoire": "Isère",
            "nb": 2,
            "oeuvres": [
                {
                    "num": "4",
                    "titre": "Pont-en-Royans (titre rétabli) [Isère]",
                    "slug": "Pont-en-Royans-titre-reatbli"
                },
                {
                    "num": "5",
                    "titre": "Pont-en-Royans, les maisons suspendues",
                    "slug": "Pont-en-Royans-les-maisons-supsendues"
                }
            ]
        },
        {
            "nom": "Pontavert",
            "pays": "France",
            "territoire": "Aisne",
            "nb": 1,
            "oeuvres": [
                {
                    "num": "14",
                    "titre": "Paysage aux environs de Pontavert (Aisne)",
                    "slug": "Paysage-aux-environs-de-Pontavert-Aisne"
                }
            ]
        },
        {
            "nom": "Pontoise",
            "pays": "France",
            "territoire": "Val-d'Oise",
            "nb": 8,
            "oeuvres": [
                {
                    "num": "155",
                    "titre": "Pontoise, Chemin des Clos [rue de Martimprey] [Val-d'Oise]",
                    "slug": "Pontoise-Chemin-des-Clos-rue-de-Martimprey"
                },
                {
                    "num": "156",
                    "titre": "Eglise Notre-Dame de Pontoise [Val-d'Oise]",
                    "slug": "Eglise-Notre-Dame-de-Pontoise"
                },
                {
                    "num": "285",
                    "titre": "Place du Grand-Martroy [Pontoise] [Val-d'Oise]",
                    "slug": "Place-du-Petit-Martroy-Pontoise"
                },
                {
                    "num": "286",
                    "titre": "La Place du Grand-Martroy, jour de petit marché [Pontoise] [Val-d'Oise]",
                    "slug": "La-Place-du-Grand-Martroy-jour-de-petite-marche-Pontoise"
                },
                {
                    "num": "305",
                    "titre": "Paysage à Osny, près Pontoise, Effet de neige [Val-d'Oise]",
                    "slug": "Paysage-a-Osny-pres-Pontoise-Effet-de-neige"
                },
                {
                    "num": "324",
                    "titre": "La Porte de Saint-Maclou [Pontoise]",
                    "slug": "Les-Deux-Clochers-POntoise"
                },
                {
                    "num": "325",
                    "titre": "L'Abside de Saint-Maclou [Pontoise]",
                    "slug": "L-Abside-de-Saint-Maclou-Pontoise"
                },
                {
                    "num": "330",
                    "titre": "[Pontoise] L'Impasse Tavet [Val-d'Oise]",
                    "slug": "Pontoise-L-Impasse-Tavet"
                }
            ]
        },
        {
            "nom": "Pourville",
            "pays": "France",
            "territoire": "Seine-Maritime",
            "nb": 3,
            "oeuvres": [
                {
                    "num": "43",
                    "titre": "Les Falaises [Pourville, Seine-Martitime]",
                    "slug": "Les-Falaises"
                },
                {
                    "num": "84",
                    "titre": "Falaise à Pourville, près  de Dieppe [Seine-Maritime]",
                    "slug": "Falaise-a-Pourville-pres-Dieppe-Seine-Maritime"
                },
                {
                    "num": "90",
                    "titre": "Pourville, le parc à huîtres [Seine-Martitime]",
                    "slug": "Pourville-le-parc-a-huitres"
                }
            ]
        },
        {
            "nom": "Presqu'île de Gien",
            "pays": "France",
            "territoire": "Var",
            "nb": 1,
            "oeuvres": [
                {
                    "num": "222",
                    "titre": "La Presqu'île de Gien [Var] ?",
                    "slug": "la-prequ'île-de-Gien-Var-",
                    "incertain": true
                }
            ]
        },
        {
            "nom": "Puys",
            "pays": "France",
            "territoire": "Seine-Maritime",
            "nb": 2,
            "oeuvres": [
                {
                    "num": "73",
                    "titre": "[Vue de] Puys [Seine-Maritime]",
                    "slug": "Vue-de-Puys-Seine-Maritime"
                },
                {
                    "num": "276",
                    "titre": "Falaise de Puys, près Dieppe [Seine-Maritime]",
                    "slug": "Falaise-de-Puys-pres-Dieppe"
                }
            ]
        },
        {
            "nom": "Rémalard",
            "pays": "France",
            "territoire": "Orne",
            "nb": 1,
            "oeuvres": [
                {
                    "num": "292",
                    "titre": "Moulin de Rémalard [Orne]",
                    "slug": "Moulin-de-Remalard-Orne"
                }
            ]
        },
        {
            "nom": "Roquebrune-Cap-Martin",
            "pays": "France",
            "territoire": "Alpes-Maritimes",
            "nb": 1,
            "oeuvres": [
                {
                    "num": "227",
                    "titre": "Rochers de marbre blanc à Cap Martin [ Roquebrune-Cap-Matin- Alpes-Maritimes]",
                    "slug": "Rochers-de-marbre-blanc-a-Cap-Martin-Roquebrune-Cap-Matin-Alpes-Maritimes"
                }
            ]
        },
        {
            "nom": "Rouen",
            "pays": "France",
            "territoire": "Seine-Maritime",
            "nb": 12,
            "oeuvres": [
                {
                    "num": "37",
                    "titre": "La Seine aux environs de Rouen",
                    "slug": "La-Seine-aux-environs-de-Rouen"
                },
                {
                    "num": "38",
                    "titre": "La Seine le matin, près Rouen",
                    "slug": "La-Seine-le-matin-pres-Rouen"
                },
                {
                    "num": "63",
                    "titre": "Vue de Rouen le soir",
                    "slug": "Vue-de-Rouen-le-soir"
                },
                {
                    "num": "77",
                    "titre": "Brumes sur Rouen [Seine-Maritime]",
                    "slug": "Brumes-sur-Rouen"
                },
                {
                    "num": "86",
                    "titre": "La Seine à Rouen",
                    "slug": "La-seine-a-Rouen"
                },
                {
                    "num": "87",
                    "titre": "Vue sur la Cathédrale de Rouen",
                    "slug": "Vue-sur-la-Cathedrale-de-Rouen"
                },
                {
                    "num": "260",
                    "titre": "Vue de la Seine à Rouen [Seine-Maritime]",
                    "slug": "Vue-de-la-Seine-a-Rouen"
                },
                {
                    "num": "270",
                    "titre": "Vue de Rouen, brumes du matin [Seine-Maritime]",
                    "slug": "Vue-de-Rouen-brume-du-matin"
                },
                {
                    "num": "278",
                    "titre": "Rouen vu des hauteurs [Seine-Maritime]",
                    "slug": "Rouen-vu-des-hauteurs"
                },
                {
                    "num": "296",
                    "titre": "La Seine à Rouen [Seine-Maritime]",
                    "slug": "La-Seine-a-Rouen"
                },
                {
                    "num": "306",
                    "titre": "Le Bassin à Rouen [Seine-Maritime]",
                    "slug": "Le-Bassin-a-Rouen"
                },
                {
                    "num": "327",
                    "titre": "La Seine à Rouen [Seine-Maritime]",
                    "slug": "La-Seine-a-Rouen"
                }
            ]
        },
        {
            "nom": "Saint-Paul-de-Vence",
            "pays": "France",
            "territoire": "Alpes-Maritimes",
            "nb": 1,
            "oeuvres": [
                {
                    "num": "175",
                    "titre": "Saint-Paul-de-Vence, porte de Vence (titre forgé) [Alpes-Maritimes]",
                    "slug": "Saint-Paul-de-Vence-porte-de-Vence-titre-forge-Alpes-Maritimes"
                }
            ]
        },
        {
            "nom": "Sainte-Maxime",
            "pays": "France",
            "territoire": "Var",
            "nb": 2,
            "oeuvres": [
                {
                    "num": "176",
                    "titre": "Vue de Sainte-Maxime [Var]",
                    "slug": "Sainte-Maxime-Var"
                },
                {
                    "num": "177",
                    "titre": "Bateaux à marée basse [Port de Sainte-Maxime] [Var]",
                    "slug": "Bateaux-a-maree-basse-Port-de-Sainte-Maxime-Var"
                }
            ]
        },
        {
            "nom": "San Remo",
            "pays": "Italie",
            "territoire": "Ligurie",
            "nb": 2,
            "oeuvres": [
                {
                    "num": "301",
                    "titre": "Promenade à San Remo [Italie-Ligurie]",
                    "slug": "Promenade-a-San-Remo"
                },
                {
                    "num": "302",
                    "titre": "San Remo [Italie, Ligurie]",
                    "slug": "San-Remo-Italie-Ligurie"
                }
            ]
        },
        {
            "nom": "Santeuil",
            "pays": "France",
            "territoire": "Val-d'Oise",
            "nb": 1,
            "oeuvres": [
                {
                    "num": "158",
                    "titre": "Paysage et église de Santeuil [Val-d'Oise]",
                    "slug": "Paysage-et-eglise-de-Santeuil"
                }
            ]
        },
        {
            "nom": "Schouwen-Duiveland",
            "pays": "Pays-Bas",
            "territoire": null,
            "nb": 2,
            "oeuvres": [
                {
                    "num": "31",
                    "titre": "Moulins, Île de Scouvens [sic]-[Ile de Schouwen-Duiveland-Pays-Bas",
                    "slug": "Moulins-ile-de-Scouvens-sic-Ile-de-Schouwen-Duiveland-Pays-Bas"
                },
                {
                    "num": "95",
                    "titre": "Maisons dans les dunes- [Hollande / Ile de Schouwen-Duiveland ? ]",
                    "slug": "Maisons-dans-les-dunes-Hollande-Ile-de-Schouwen-Duiveland",
                    "incertain": true
                }
            ]
        },
        {
            "nom": "Toulon",
            "pays": "France",
            "territoire": null,
            "nb": 1,
            "oeuvres": [
                {
                    "num": "11",
                    "titre": "Toulon",
                    "slug": "Toulon"
                }
            ]
        },
        {
            "nom": "Vaire-Arcier",
            "pays": "France",
            "territoire": "Doubs",
            "nb": 1,
            "oeuvres": [
                {
                    "num": "133",
                    "titre": "Les sources d'Arcier, Doubs [Vaire-Arcier]",
                    "slug": "Les-sources-d-Arcier-Doubs"
                }
            ]
        },
        {
            "nom": "Varengeville",
            "pays": "France",
            "territoire": "Seine-Maritime",
            "nb": 4,
            "oeuvres": [
                {
                    "num": "64",
                    "titre": "Falaises de Varengeville [Seine-Maritime]",
                    "slug": "Falaises-de-Varengeville"
                },
                {
                    "num": "65",
                    "titre": "Les fonds de Varengeville en décembre [Seine-Maritime]",
                    "slug": "Les-fonds-de-Varengeville-en-decembre"
                },
                {
                    "num": "66",
                    "titre": "Paysage à Varengeville",
                    "slug": "Paysage-a-Varengeville"
                },
                {
                    "num": "123",
                    "titre": "Varengeville [Seine-Maritime] ?",
                    "slug": "Varengeville-Seine-Maritime",
                    "incertain": true
                }
            ]
        },
        {
            "nom": "Vence",
            "pays": "France",
            "territoire": "Alpes-Maritimes",
            "nb": 10,
            "oeuvres": [
                {
                    "num": "175",
                    "titre": "Saint-Paul-de-Vence, porte de Vence (titre forgé) [Alpes-Maritimes]",
                    "slug": "Saint-Paul-de-Vence-porte-de-Vence-titre-forge-Alpes-Maritimes"
                },
                {
                    "num": "178",
                    "titre": "Jour de foire à Vence, Place du Grand Jardin [Alpes Maritimes]",
                    "slug": "Jour-de-foire-a-Vence-Place-du-Grand-Jardin-Alpes-Maritimes"
                },
                {
                    "num": "179",
                    "titre": "Matin à Vence, Alpes-Maritimes",
                    "slug": "Matin-a-Vence-Alpes-Maritimes"
                },
                {
                    "num": "180",
                    "titre": "Place à Vence [Alpes-Maritimes]",
                    "slug": "Place-a-Vence-Alpes-Maritimes"
                },
                {
                    "num": "181",
                    "titre": "Vence, Place Thiers et la Vieille Tour ; aujourd’hui Place du Frêne [Alpes-Maritimes][Alpes-maritimes]",
                    "slug": "Vence-Place-Thiers-et-la-Vieille-Tour-aujourd-hui-Place-du-Frene-Alpes-maritimes"
                },
                {
                    "num": "182",
                    "titre": "Vence, l'avenue de la gare et la chapelle des Pénitents blancs [Alpes-Maritimes]",
                    "slug": "Vence-l-avenue-de-la-gare-et-la-chapelle-des-Pénitentents-Blancs-Alpes-Maritimes"
                },
                {
                    "num": "183",
                    "titre": "Vence, vue depuis la gare des chemins de fer de Provence (titre forgé) [Alpes-Maritimes]",
                    "slug": "Vence-vue-depuis-la-gare-des-chemins-de-fer-de-Provence-titre-forge"
                },
                {
                    "num": "184",
                    "titre": "Vue de Vence (Alpes-Maritimes)",
                    "slug": "Vue-de-Vence-Alpes-Maritimes"
                },
                {
                    "num": "185",
                    "titre": "Vence, rue des Templiers [Alpes-Martitimes]",
                    "slug": "Vence-rue-des-Templiers-Alpes-Martitimes"
                },
                {
                    "num": "297",
                    "titre": "Le Marché à Vence (Provence) [Alpes-Maritimes]",
                    "slug": "Le-Marche-a-Vence-Provence-Alpes-Maritimes"
                }
            ]
        },
        {
            "nom": "Venise",
            "pays": "Italie",
            "territoire": null,
            "nb": 7,
            "oeuvres": [
                {
                    "num": "118",
                    "titre": "Vue de Venise [la nuit]",
                    "slug": "Vue-de-Venise"
                },
                {
                    "num": "119",
                    "titre": "Venise, Notre Dame de la Salute",
                    "slug": "Venise-NOtre-Dame-de-la-Salute"
                },
                {
                    "num": "224",
                    "titre": "[Venise], Pont sur rio San Paolo [Italie]",
                    "slug": "Venise-Pont-sur-rio-San-Paolo-Italie"
                },
                {
                    "num": "287",
                    "titre": "Venise, Entrée du Grand Canal",
                    "slug": "Venise-l-Entree-du-Grand-Canal"
                },
                {
                    "num": "317",
                    "titre": "Venise, Monument du Colleone [Italie]",
                    "slug": "Venise-Monument-du-Colleone"
                },
                {
                    "num": "329",
                    "titre": "« Bateaux de pêche à Venise, avec leurs voiles rutilantes »",
                    "slug": "745-Bateaux-de-peche-a-Venise-avec-leurs-voiles-rutilantes"
                },
                {
                    "num": "337",
                    "titre": "Venise, le quai de la Riva Squiavoni [sic] [Italie]",
                    "slug": "Venise-le-quai-de-la-Riva-Squiavoni-sic"
                }
            ]
        },
        {
            "nom": "Villefranche-sur-Mer",
            "pays": "France",
            "territoire": "Alpes-Maritimes",
            "nb": 1,
            "oeuvres": [
                {
                    "num": "281",
                    "titre": "La Citadelle Saint-Elme à Villefranche-sur-Mer ? [Alpes-Maritimes]",
                    "slug": "La-Citadelle-Saint-Elme-a-Villefranche-sur-Mer-Alpes-Maritimes",
                    "incertain": true
                }
            ]
        },
        {
            "nom": "Villeneuve-Loubet",
            "pays": "France",
            "territoire": "Alpes-Maritimes",
            "nb": 1,
            "oeuvres": [
                {
                    "num": "22",
                    "titre": "Montagnes à Villeneuve-Loubet [Alpes-Maritimes]",
                    "slug": "Montagnes-a-Villeneuve-Loubet"
                }
            ]
        },
        {
            "nom": "Volendam",
            "pays": "Pays-Bas",
            "territoire": null,
            "nb": 2,
            "variantes": [
                "Vollendam",
                "Volendam"
            ],
            "oeuvres": [
                {
                    "num": "96",
                    "titre": "Vue de Vollendam [sic] -Volendam [Pays-Bas]",
                    "slug": "Vue-de-Vollendam-sic-Vollendam-Pays-Bas"
                },
                {
                    "num": "109",
                    "titre": "Vue de village [Volendam, Hollande-Pays-Bas ? ]",
                    "slug": "Vue-de-village-Volendam-Hollande-Pays-Bas",
                    "incertain": true
                }
            ]
        }
    ]
};
