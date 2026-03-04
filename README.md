# Project Start Architectuur (PSA)

## Delen via Toestemming naar Private Partijen / Generieke BronOntsluiting (DvTP/GBO)

Deze repository bevat de **Project Start Architectuur (PSA)** voor het programma **DvTP/GBO**.

DvTP/GBO heeft als doel een **generieke infrastructuur en afsprakenstelsel** te realiseren waarmee gegevens van overheidsorganisaties beschikbaar kunnen worden gemaakt voor:

* burgers
* private partijen
* Europese toepassingen zoals **EDI Wallet** en **Single Digital Gateway (SDG/OOTS)**

De PSA beschrijft:

* de context en doelstelling van de oplossing
* de architectuurprincipes en kaders
* het capability model
* de generieke functies
* de logische architectuur

De PSA beschrijft **wat het stelsel moet kunnen**, maar legt nog **geen technische implementatie** vast.
De technische invulling volgt in een aparte software-architectuur.

---

# Navigatie

## PSA Hoofdstukken

| Hoofdstuk                                                           | Beschrijving                            |
| ------------------------------------------------------------------- | --------------------------------------- |
| [1. Inleiding](psa/inleiding.md)                                    | Doel, scope en positionering van de PSA |
| [2. Context en aanleiding](psa/context.md)                          | Beleidscontext en probleemstelling      |
| [3. Ecosysteem en rollen](psa/ecosysteem.md)                        | Actoren en interacties in het stelsel   |
| [4. Use cases](psa/use-cases.md)                                    | Architectuurdrijvende scenario’s        |
| [5. Interactiepatronen](psa/interactiepatronen.md)                  | Werking van de architecuur              |
| [6. Architectuurprincipes](psa/architectuurprincipes.md)            | Principes en uitgangspunten             |
| [7. Generieke functies](psa/generieke-functies.md)                  | Logische architectuur van het stelsel   |
| [8. Capabilities per functie](psa/capabilities.md)                  | Uitwerking van capabilities             |
| [9. Architectuurkaders](psa/architectuurkaders.md)                  | Richtlijnen voor technische uitwerking  |
| [10. Realisatiestrategie](psa/realisatiestrategie.md)               | Implementatie en pilots                 |
| [11. Openstaande vraagstukken](psa/open-vraagstukken.md)            | Onderwerpen voor verdere uitwerking     |

---

# Architectuurdiagrammen

De belangrijkste architectuurdiagrammen zijn te vinden in de map **/diagrams**.

| Diagram                                                   | Beschrijving                       |
| --------------------------------------------------------- | ---------------------------------- |
| [Contextdiagram](diagrams/context-diagram.md)             | Overzicht van het ecosysteem       |
| [Interactiepatroon identificatie](diagrams/interactiepatroon-identificatie.md) | Interactiepatroon voor identificatie en authenticatie van een actor |
| [Interactiepatroon toestemming geven](diagrams/interactiepatroon-toestemming-geven.md) | Interactiepatroon voor het geven van toestemming |
| [Interactiepatroon toestemming intrekken](diagrams/interactiepatroon-toestemming-intrekken.md) | Interactiepatroon voor het intrekken van toestemming |
| [Interactiepatroon gegevensverzoek](diagrams/interactiepatroon-gegevensverzoek.md) | Interactiepatroon voor het opvragen van gegevens bij een overheidsbron |
| [Logische architectuur](diagrams/logical-architecture.md) | Generieke functies |
| [Generieke functies](diagrams/masterdiagram-gegevensstelsel.md) | Generieke functies en hun werking |
| [Capability map](diagrams/container-capability-map.md)    | Overzicht van alle capabilities    |

---

# Use cases

Use cases helpen om de architectuur te valideren en de benodigde capabilities te bepalen.

| Use case                                                  | Beschrijving                                   |
| --------------------------------------------------------- | ---------------------------------------------- |
| [Hypotheekaanvraag](use-cases/zorgeloos-vastgoed.md)      | Delen van inkomensgegevens met een bank        |
| [Landelijke Voorziening Gebouwgegevens](use-cases/lvg.md) | Delen van gebouwgegevens met aannemers         |
| [Wallet vulling](use-cases/wallet-vulling.md)             | Gegevens beschikbaar maken voor een EDI wallet |
| [SDG/OOTS bewijsuitwisseling](use-cases/sdg-oost.md)      | Europese gegevensuitwisseling                  |

---

# Generieke functies

De architectuur van DvTP/GBO is gebaseerd op acht generieke functies:

1. Identiteit & Vertrouwen
2. Toegang & Interactie
3. Gegevensvoorziening
4. Semantiek & Eenheid van taal
5. Gegevenskwaliteit & Validatie
6. Gebruik & Juridische grondslag
7. Orkestratie & Integratie
8. Beheer & Continuïteit

Deze generieke functies vormen de basis voor het capability model en de verdere architectuuruitwerking.

---

# Repository structuur

```
dvtp-gbo-psa
│
├─ README.md
│
├─ psa
│   ├─ inleiding.md
│   ├─ context.md
│   ├─ ecosysteem.md
│   ├─ use-cases.md
│   ├─ interactiepatronen.md
│   ├─ architectuurprincipes.md
│   ├─ generieke-functies.md
│   ├─ capabilities.md
│   ├─ architectuurkaders.md
│   ├─ realisatiestrategie.md
│   └─ open-vraagstukken.md
│
├─ diagrams
│   ├─ context-diagram.md
│   ├─ interactiepatroon-identificatie.md
│   ├─ interactiepatroon-toestemming-geven.md
│   ├─ interactiepatroon-toestemming-intrekken.md
│   ├─ interactiepatroon-gegevensverzoek.md
│   ├─ logical-architecture.md
│   ├─ masterdiagram-gegevensstelsel.md
│   └─ container-capability-map.md
│
└─ use-cases
    ├─ zorgeloos-vastgoed.md
    ├─ lvg.md
    ├─ wallet-vulling.md
    └─ sdg-oots.md
```

---

# Status

Deze PSA is **in ontwikkeling** en wordt iteratief aangevuld.
Wijzigingen worden bijgehouden via GitHub versiebeheer.

---

# Bijdragen

Bijdragen aan deze architectuur kunnen worden gedaan via:

* issues
* pull requests
* architectuurdiscussies

---

# Licentie

Nog te bepalen.
