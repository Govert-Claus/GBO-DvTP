# Interactiepatronen DvTP (PSA)

Dit document beschrijft de belangrijkste interactiepatronen voor GBO/DvTP zoals afgeleid uit de use cases. De patronen zijn bedoeld voor gebruik in de PSA en zijn daarom **logisch (technologie‑onafhankelijk)** beschreven. In de patronen is op verschillende plekken sprake van een "dienst". In deze fase van ontwerp is nog niet besloten of dit afspraken, standaarden of centrale of decentrale voorzieningen zijn.  


## Identificatie en authenticatie van een actor

### Doel

Het vaststellen van de identiteit van een actor (bijv. burger of organisatie) voordat toegang wordt verleend tot functies van het stelsel.

### Betrokken generieke functies

-   Identiteit & Vertrouwen
-   Toegang & Interactie
-   Autorisatie & Beleidsafdwinging

### Actoren

-   Burger
-   Private dienstverlener
-   Identiteitsdienst
-   DvTP/GBO‑stelsel

### Interactie

--8<-- "diagrammen/interactiepatroon-identificatie.mmd"


## Toestemming geven en registreren

### Doel

Een burger geeft expliciete toestemming voor het delen van een specifieke dataset met een specifieke private dienstverlener.

### Betrokken generieke functies

-   Toegang & Interactie
-   Identiteit & Vertrouwen
-   Gebruik & Juridische grondslag
-   Gegevensvoorziening

### Actoren

-   Burger
-   Private dienstverlener
-   Toestemmingsdienst
-   Consentregister

### Interactie

--8<-- "diagrammen/interactiepatroon-toestemming-geven.mmd"


## Toestemming beheren of intrekken

### Doel

De burger kan een eerder gegeven toestemming bekijken en intrekken.

### Betrokken generieke functies

-   Toegang & Interactie
-   Gebruik & Juridische grondslag
-   Logging & Verantwoording

### Actoren

-   Burger
-   Toestemmingsvoorziening
-   Consentregister

### Interactie

--8<-- "diagrammen/interactiepatroon-toestemming-intrekken.mmd"

## Gegevensverzoek van afnemer naar bronhouder

### Doel

Een private dienstverlener haalt gegevens op bij een bronhouder op basis van een geldige toestemming van de burger.

### Betrokken generieke functies

-   Autorisatie & Beleidsafdwinging
-   Gegevensvoorziening
-   Orkestratie & Integratie
-   Logging & Verantwoording

### Actoren

-   Private dienstverlener
-   Integrator (optioneel)
-   Autorisatievoorziening
-   Consentregister
-   Bronhouder

### Interactie

--8<-- "diagrammen/interactiepatroon-PP-haalt-gegevens-op.mmd"


## Gegevensverzoek van burger om credential via wallet te delen

### Doel

Een burger vraagt een gegeven op als credential om in zijn/haar wallet op te nemen en te delen met een dienstverlener.

### Betrokken generieke functies

-   Autorisatie & Beleidsafdwinging
-   Gegevensvoorziening
-   Orkestratie & Integratie
-   Logging & Verantwoording

### Actoren

-   Burger
-   Dienstverlener
-   Integrator (optioneel)
-   Autorisatievoorziening
-   Bronhouder

### Interactie

--8<-- "diagrammen/interactiepatroon-EDI-Wallet.mmd"
