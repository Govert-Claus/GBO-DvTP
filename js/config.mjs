import { loadRespecWithConfiguration } from "./organisation-config.mjs";

loadRespecWithConfiguration({
  useLogo: true,
  useLabel: true,
  license: "cc-by",
  specStatus: "WV",
  specType: "PSA",
  pubDomain: "hl",
  shortName: "template",
  publishDate: "2026-03-04",
  publishVersion: "0.0.1",

  // TODO: Verwijder voordat de release plaats vindt
  latestVersion: "https://github.com/logius-standaarden/respec-template/",
  prevVersion: [],

  editors:
    [
      {
        name: "ICTU GBO / DvTP",
        company: "ICTU",
        companyURL: "https://ictu.nl",
      }
    ],
  authors:
    [
      {
        name: "ICTU GBO / DvTP",
        company: "ICTU",
        companyURL: "https://ictu.nl",
      }
    ],
  github: "https://github.com/Govert-Claus/GBO-DvTP",
});
