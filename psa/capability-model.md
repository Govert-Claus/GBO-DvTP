# 7. Capability model

Dit hoofdstuk beschrijft **wat het stelsel moet kunnen**.

## 7.1 Overzicht capability domeinen

In de onderstaande diagram is geschetst welke generieke functies het stelsel moet ondersteunen - de "capability domeinen".

```mermaid

flowchart LR

%% Actors

Citizen["👤 Burger"]
PD["🏢 Private Dienstverlener"]
Integrator["🔗 Integrator"]
EUOrg["🌍 Europese organisatie"]

%% Stelsel

subgraph Stelselvoorzieningen

ID["Identiteit & Vertrouwen"]

TI["Toegang & Interactie"]

AUTH["Autorisatie & Beleidsafdwinging"]

CONSENT["Gebruik & Juridische Grondslag
(Toestemming)"]

SEM["Semantiek & Eenheid van taal"]

DATA["Gegevensvoorziening"]

VAL["Gegevenskwaliteit & Validatie"]

ORCH["Orkestratie & Integratie"]

GOV["Beheer & Continuïteit"]

end

%% Bronhouders

subgraph Brondomein

BRON1["Bronhouder A"]
BRON2["Bronhouder B"]
BRON3["Bronhouder C"]

end

%% Interacties

Citizen --> TI
PD --> TI
EUOrg --> TI

TI --> ID

TI --> CONSENT
CONSENT --> AUTH

PD --> AUTH

AUTH --> ORCH

ORCH --> DATA
DATA --> VAL

ORCH --> BRON1
ORCH --> BRON2
ORCH --> BRON3

SEM --> DATA

GOV --> CONSENT
GOV --> AUTH
GOV --> ORCH

```


------------------------------------------------------------------------

## 7.2 Capability map

De capability map beschrijft de functionele vermogens die nodig zijn om het delen van gegevens via toestemming mogelijk te maken.

De capabilities zijn gegroepeerd volgens de acht generieke functies die eerder in het programma zijn vastgesteld.

De capability map vormt de basis voor:

- de verdere architectuuruitwerking,

- de identificatie van benodigde generieke voorzieningen,

- en de latere software-architectuur.

```mermaid

flowchart TB

subgraph OPS["8. Beheer & Continuïteit"]
OP1["Monitoring"]
OP2["Incidentbeheer"]
OP3["Capaciteitsbeheer"]
OP4["Configuratiebeheer"]
OP5["Continuïteitsbeheer"]
OP6["Rapportage over gebruik"]
OP7["Versiebeheer van interfaces"]
end

subgraph ORCH["7. Orkestratie & Integratie"]
OR1["Service discovery"]
OR2["Coördinatie van gegevensstromen"]
OR3["Integratie met externe systemen"]
OR4["Protocolvertaling"]
OR5["Workflowcoördinatie"]
OR6["Eventafhandeling"]
OR7["Berichtenafhandeling"]
end

subgraph LEGAL["6. Gebruik & Juridische grondslag"]
LE1["Juridische grondslag vaststellen"]
LE2["Gebruikvoorwaarden beheren"]
LE3["Controle op doelbinding"]
LE4["Privacybescherming"]
LE5["Audit van gegevensgebruik"]
LE6["Logging van gegevensgebruik"]
end

subgraph QUALITY["5. Gegevenskwaliteit & Validatie"]
QU1["Gegevensvalidatie"]
QU2["Controle op volledigheid"]
QU3["Controle op actualiteit"]
QU4["Controle op consistentie"]
QU5["Foutdetectie"]
QU6["Rapportage over datakwaliteit"]
end

subgraph SEM["4. Semantiek & Eenheid van taal"]
SE1["Informatiemodellen beheren"]
SE2["Begrippen en definities beheren"]
SE3["Mapping tussen datamodellen"]
SE4["Standaardisatie van gegevensstructuren"]
SE5["Semantische validatie"]
SE6["Metadata beheren"]
end

subgraph DATA["3. Gegevensvoorziening"]
DA1["Bronregistratie"]
DA2["Datasetbeschrijving"]
DA3["Gegevensverzoeken ontvangen"]
DA4["Gegevens ophalen bij bronhouder"]
DA5["Gegevens leveren aan afnemer"]
DA6["Gegevens leveren aan wallet"]
DA7["Gegevensminimalisatie"]
DA8["Gegevensformattering"]
DA9["Versiebeheer van gegevens"]
end

subgraph ACCESS["2. Toegang & Interactie"]
AC1["Gegevensverzoek initiëren"]
AC2["Toegang verlenen tot gegevens"]
AC3["Autorisatiecontrole"]
AC4["Toestemming registreren"]
AC5["Toestemming controleren"]
AC6["Toestemming intrekken"]
AC7["Verzoekroutering"]
AC8["API-interactie"]
AC9["Sessiebeheer"]
AC10["Foutafhandeling"]
end

subgraph ID["1. Identiteit & Vertrouwen"]
ID1["Identificatie van burgers"]
ID2["Identificatie van organisaties"]
ID3["Authenticatie van gebruikers"]
ID4["Authenticatie van systemen"]
ID5["Federatieve identiteiten"]
ID6["Vertrouwensketens"]
ID7["Identiteitsattributen beheren"]
end

```
