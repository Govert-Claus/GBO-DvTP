# Capabilities

Dit hoofdstuk beschrijft **wat het stelsel moet kunnen**.

## Capability model

De generieke functies uit het logisch architectuurmodel worden mogelijk gemaakt met zogenaamde capabilities.
In de onderstaande diagram zijn de benodigde capabilities per generieke functie geschetst.

--8<-- "diagrammen/container-capability-map.mmd"

In de volgende paragrafen worden deze toegelicht.


## Identiteit & Vertrouwen

Doel: betrouwbaar vaststellen wie een partij is en of deze vertrouwd kan worden.

Capabilities:

### Identificatie van burgers
Eisen aan identificatie:
- Burger en overheid kan BSN gebruiken
- Private partijen mogen geen BSN verwerken
- Private partijen moeten wel gegevens van juiste burger ontvangen
- Bronhouders moeten BSN weten om juiste gegevens te leveren
- Mogen Europese overheden BSN verwerken? Hoe werkt SDG/OOTS?

### Identificatie van organisaties
OIN / KvK / Europa?

### Authenticatie van gebruikers
DigiD / EIDAS middelen
Wallet

### Authenticatie van systemen
Certificaten
QTSP
eHerkenning / EIDAS middelen

### Vertrouwensketens
Trust providers
PKIo?
QTSP's?
Credentials?


## Toegang & Interactie

Doel: faciliteren van veilige en eenvoudige interactie tussen burgers, afnemers en bronhouders.

Capabilities:

### Initiëren van gegevensverzoeken


### Toegang verlenen tot gegevens
Via PBAC / AuthZen
GraphQL voor datasets

### Autorisatiecontrole


### Toestemming
Toestemmingsvoorziening
- verlenen
- gebruiken
- intrekken



## Gegevensvoorziening

Doel: beschikbaar stellen van gegevens vanuit bronhouders.

Capabilities:

### Gegevenstransport
FSC

### Services vindbaar
FSC

### Beveiliging en privacy
Encryptie
Pseudonimiseren


## Semantiek & Eenheid van taal

Doel: zorgen dat gegevens overal dezelfde betekenis hebben.

Capabilities:

### Standaardisatie van gegevensstructuren
FDS

### Federatieve informatiemodellen
FDS

### Metadata beheer
FDS


## Gegevenskwaliteit & Validatie

Doel: waarborgen dat gegevens betrouwbaar en bruikbaar zijn.

Capabilities:

### Validatie van gegevens
Digikoppeling REST profiel

Foutdetectie?

### Rapportage over datakwaliteit


## Gebruik & Juridische Grondslag

Doel: waarborgen dat gegevens rechtmatig gebruikt worden.

Capabilities:

### Vaststellen juridische grondslag
Policy in PBAC
Toestemming / Wettelijke basis

### Controle op doelbinding


### Privacybescherming
Pseudonimiseren


## Orkestratie & Integratie

Doel: coördineren van gegevensuitwisseling tussen partijen.

Capabilities:

### Service discovery
FSC
Naamsconventies

### Integratie met externe systemen


### Protocolvertaling
"Adapters" voor specifieke stromen


### Berichtenafhandeling


## Logging en Verantwoording

### Logging
FDS logboek verwerkingen

### Monitoring
Zie beheer

### Verantwoording
Wie heeft welke verantwoordelijkheid?


## Beheer & Continuïteit

Doel: stabiele en betrouwbare werking van het stelsel.

Capabilities:

### Logging en monitoring van dienstverlening


### Incidentbeheer


### Capaciteitsbeheer


### Configuratiebeheer


### Continuïteitsbeheer


### Versiebeheer van interfaces
Hoe omgaan met versies?
