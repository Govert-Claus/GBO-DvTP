# Ecosysteem en rollen

## Actoren

Uitwerking van rollen:

-   Burger
-   Bronhouder
-   Afnemer (publiek/privaat)
-   Wallet
-   DvTP/GBO stelsel
-   Governance organisatie

------------------------------------------------------------------------

## Contextdiagram

In de contextdiagram worden de actoren ten opzichte van elkaar en van het DvTP/GBO stelsel geschetst.

```mermaid

flowchart LR

Bronhouder
DvTP["DvTP/GBO stelsel
(afspraken, standaarden, voorzieningen)"]
Wallet
Privaat["Private partij"]
SDG["SDG/OOTS"]

Bronhouder --> DvTP
DvTP --> Wallet
DvTP --> Privaat
DvTP --> SDG

```
