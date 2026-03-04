# Interactiepatronen DvTP (PSA)

Dit document beschrijft de belangrijkste interactiepatronen voor DvTP zoals afgeleid uit de functionele requirements. De patronen zijn bedoeld voor gebruik in de PSA en zijn daarom **logisch (technologie‑onafhankelijk)** beschreven.

------------------------------------------------------------------------

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

<figure>

``` mermaid
sequenceDiagram
actor Burger
participant PD as Private dienstverlener
participant TI as Toegang & Interactie
participant ID as Identiteit & Vertrouwen
participant AUTH as Autorisatie

Burger ->> PD: Start dienst
PD ->> TI: Start toestemmingsflow
TI ->> ID: Authenticatieverzoek
ID ->> Burger: Vraag authenticatiemiddel
Burger ->> ID: Authenticatie
ID ->> TI: Identiteitsassertie
TI ->> AUTH: Controle toegangsregels
AUTH ->> TI: Toegang toegestaan
TI ->> PD: Authenticatie geslaagd
```

<figcaption>Interactiepatroon identificatie en authenticatie actor</figcaption>
</figure>

------------------------------------------------------------------------

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
-   Toestemmingsvoorziening
-   Consentregister

### Interactie

<figure>

``` mermaid
sequenceDiagram
actor Burger
participant PD as Private dienstverlener
participant TI as Toegang & Interactie
participant ID as Identiteit & Vertrouwen
participant CONSENT as Toestemmingsvoorziening
participant REG as Consentregister

Burger ->> PD: Start dienst
PD ->> TI: Initiatie toestemmingsflow
TI ->> ID: Authenticatie
ID ->> TI: Identiteit bevestigd
TI ->> CONSENT: Toon toestemmingsinformatie
CONSENT ->> Burger: Toon dataset / doel / partij
Burger ->> CONSENT: Geef toestemming
CONSENT ->> REG: Registreer toestemming
REG ->> CONSENT: Bevestiging
CONSENT ->> PD: Terugkoppeling resultaat
```

<figcaption>Interactiepatroon toestemming geven</figcaption>
</figure>

------------------------------------------------------------------------

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

<figure>

``` mermaid
sequenceDiagram
actor Burger
participant TI as Toegang & Interactie
participant CONSENT as Toestemmingsvoorziening
participant REG as Consentregister

Burger ->> TI: Open overzicht toestemmingen
TI ->> CONSENT: Vraag consentlijst
CONSENT ->> REG: Lees consentgegevens
REG ->> CONSENT: Consentlijst
CONSENT ->> Burger: Toon overzicht

Burger ->> CONSENT: Trek toestemming in
CONSENT ->> REG: Update status (geannuleerd)
REG ->> CONSENT: Bevestiging
CONSENT ->> Burger: Intrekking bevestigd
```

<figcaption>Interactiepatroon toestemming intrekken</figcaption>
</figure>

------------------------------------------------------------------------

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

<figure>

``` mermaid
sequenceDiagram
participant PD as Private dienstverlener
participant AUTH as Autorisatievoorziening
participant REG as Consentregister
participant INT as Integrator
participant BRON as Bronhouder

PD ->> AUTH: Gegevensverzoek + toestemmingstoken
AUTH ->> REG: Valideer toestemming
REG ->> AUTH: Toestemming geldig
AUTH ->> INT: Vraag gegevens op
INT ->> BRON: Gegevensverzoek
BRON ->> INT: Gegevens (met bronzegel)
INT ->> PD: Lever gegevens
```

<figcaption>Interactiepatroon gegevensverzoek</figcaption>
</figure>
