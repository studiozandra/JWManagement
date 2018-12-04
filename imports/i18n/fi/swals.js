const swal = {
  error: 'Virhe',
  publisherInOtherTeam: 'Joku valituista julistajista kuuluu jo johonkin tiimiin. Poista heidät ensin muista tiimeistä.',
  onlyTeam: 'Ét voi poistaa tätä tiimiä. Se on ainoa tiimi tässä vuorossa. Jokaisessa vuorossa pitää olla vähintään yksi tiimi.',
  noTeamleader: 'Jokaisella tiimillä pitää olla tiimivastaava. Valitettavasti tällä julistajalla ei ole lupaa toimia tiimivastaavana.',
  ownPermission: 'Et voi muuttaa omia käyttöoikeuksiasi. Tämä pitää tehdä toisen järjestelmänvalvojan toimesta.',
  approvalInformed: 'Tälle osallistujalle on ilmoitettu ilmoittautumisen hyväksymisestä.',
  declinementInformed: 'Tälle osallistujalle on ilmoitettu ilmoittautumisen hylkäämisestä.',
  vacationEndInPast: 'Loppupäivämäärä ei voi olla menneisyydessä.',
  missingTag: 'Tunnistetta ei ole määritetty. Määrittele ensin tunniste toiminnossa Hallinta > Asetukset',
  logout: {
    title: 'Vihje',
    text: 'Sinun ei ole pakko kirjautua ulos, paitsi jos olet jaetulla tietokoneella. Yhteytesi on salattu ja tallennamme istunnon ainoastaan paikalliselle tietokoneellesi. Kukaan muu ei näe, eikä voi kaapata istuntoa käyttöönsä.',
    confirm: 'Kirjaudu ulos',
    cancel: 'Peruuta'
  },
  invite: {
    user: {
      title: 'Kutsutaanko julistaja?',
      text: 'Tällä julistajalla <b>on jo käyttäjätili</b>, joten uutta tiliä ei tarvitse tehdä. Se sijaan julistajalle <b>voidaan vain antaa pääsy tähän projektiin</b>.<br>Tulemme tietenkin <b>tiedottamaan häntä</b> muutoksesta. <br><p>Jos useampi kuin yksi julistaja on rekisteröitynyt samalla sähköpostiosoitteella, valitse oikea julistaja:</p>'
    },
    users: {
      title: 'Oletko varma?',
      text: 'Lähetämme sähköpostia kaikille valituille julistajille.',
      confirm: 'Kutsu',
      cancel: 'Peruuta'
    }
  },
  sendMail: {
    confirmWeek: {
      title: 'Oletko varma?',
      text: 'Kaikki hyväksytyt julistajat tulevat saamaan vahvistusviestin ja kaikki hylätyt julistajat tulevat saamaan viestin hylkäämisestä.',
      confirm: 'Kyllä',
      cancel: 'Peruuta'
    },
    confirmation: {
      title: 'Ilmoitetaanko julistajalle?',
      text: 'Julistajalle ilmoitetaan sähköpostiviestillä vuoroon hyväksymisestä.',
      confirm: 'Kyllä',
      cancel: 'Peruuta'
    },
    declined: {
      title: 'Ilmoitetaanko julistajalle?',
      text: 'Julistajalle ilmoitetaan sähköpostiviestillä, että vuoroon ilmoittautuminen on hylätty.',
      confirm: 'Kyllä',
      cancel: 'Peruuta'
    },
    selectTag: {
      title: 'Mikä tunniste?',
      text: 'Valitse tunniste, johon liittyvät vahvistuviestit lähetetään:',
      confirm: 'OK',
      cancel: 'Peruuta'
    },
    teamUpdate: {
      user: {
        title: 'Tiimivastaavalle on jo ilmoitettu',
        text: 'Tiimivastaavalle on jo ilmoitettu. Haluatko lähettää hänelle uuden viestin päivitetyillä tiedoilla?',
        confirm: 'Kyllä',
        cancel: 'Ei'
      },
      general: {
        title: 'Oletko varma?',
        text: 'Jo ilmoituksen saaneet julistajat saavat sähköpostiviestin päivitetyillä tiedoilla.',
        confirm: 'Kyllä',
        cancel: 'Ei'
      }
    },
    understaffed: {
      title: 'Ilmoitetaanko julistajille?',
      text: 'Ilmoitetaanko kaikille julistajille tästä vajaasta tiimistä?',
      confirm: 'Kyllä',
      cancel: 'ei',
      teamleader: {
        title: 'Ilmoitetaanko tiimivastaavia?',
        text: 'Ilmoitetaanko kaikille tiimivastaaville tähän tiimiin liittyvistä tiedoista?',
        confirm: 'Kyllä',
        cancel: 'Ei'
      }
    }
  },
  add: {
    meeting: {
      title: 'Lisää uusi kokoontumispiste',
      text: '',
      placeholder: 'Nimi',
      confirm: 'Lisää',
      cancel: 'Peruuta'
    },
    question: {
      title: 'Lisää uusi kysymys/aihe',
      text: '',
      placeholder: 'Kysymys/Aihe',
      inputError: 'Sinun pitää kirjoittaa jotakin!',
      confirm: 'Lisää',
      cancel: 'Peruuta'
    },
    tab: {
      title: 'Lisää uusi välilehti',
      text: '',
      placeholder: 'Otsikko',
      inputError: 'Välilehden nimi ei ole kelvollinen!',
      confirm: 'Lisää',
      cancel: 'Peruuta'
    },
    tag: {
      title: 'Lisää uusi tunniste',
      text: '',
      placeholder: 'Nimi',
      inputError: 'Tunnisteen nimi ei ole kelvollinen!',
      confirm: 'Luo',
      cancel: 'Peruuta'
    },
    team: {
      title: 'Lisää uusi tiimi',
      text: '',
      placeholder: 'Nimi',
      inputError: 'Tiimin nimi ei ole kelvollinen!',
      confirm: 'Lisää',
      cancel: 'Peruuta'
    },
    template: {
      title: 'Lisää mallipohja',
      text: '',
      placeholder: 'Nimi',
      inputError: 'Mallipohjan nimi ei ole kelvollinen!',
      confirm: 'Lisää',
      cancel: 'Peruuta'
    },
    user: {
      title: 'Luotu!',
      text: 'Uusi käyttäjä luotiin.'
    },
    users: {
      title: 'Oletko varma?',
      text: 'Kaikki näytetyt käyttäjät lisätään projektiin.',
      confirm: 'Lisää',
      cancel: 'Peruuta'
    }
  },
  update: {
    file: {
      title: 'Vaihda tiedoston nimi',
      text: '',
      placeholder: 'Tiedoston nimi',
      inputError: 'Tiedoston nimi ei ole kelvollinen!',
      confirm: 'Muuta',
      cancel: 'Peruuta'
    },
    password: {
      title: 'Vaihda salasana',
      passwordOld: 'Vanha salasana',
      passwordNew1: 'Uusi salasana',
      passwordNew2: 'Toista uusi salasana',
      confirm: 'Muuta',
      cancel: 'Peruuta',
      passwordChanged: 'Salasana vaihdettu'
    },
    question: {
      title: 'Vaihda kysymystä',
      text: '',
      placeholder: 'Kysymys/Aihe',
      confirm: 'Muuta',
      cancel: 'Peruuta'
    },
    template: {
      title: 'Muokkaa nimeä',
      text: '',
      placeholder: 'Nimi',
      confirm: 'Muuta',
      cancel: 'Peruuta'
    }
  },
  delete: {
    account: {
      title: 'Haluatko todella poistaa käyttäjätilisi?',
      text: 'Käyttäjätilin poistamista ei voi perua!',
      confirm: 'Poista käyttäjätilini!',
      cancel: 'Peruuta'
    },
    allShifts: {
      title: 'Oletko varma?',
      text: 'Kaikkai vuorot tältä päivältä sekä kaikki ilmoittautumiset näihin vuuoroihin poistetaan pysyvästi.',
      confirm: 'Poista',
      cancel: 'Peruuta'
    },
    file: {
      title: 'Oletko varma?',
      text: 'Tiedosto poistetaan pysyvästi.',
      confirm: 'Poista',
      cancel: 'Peruuta'
    },
    language: {
      title: 'Haluatko todella poistetaa tämän kielen?',
      text: 'Tämä poistaa kielen ja siihen liittyvän kirjallisuusvaraston.',
      confirm: 'Poista',
      cancel: 'Peruuta'
    },
    meeting: {
      title: 'Haluatko todella poistaa tämän kokoontumispisteen?',
      text: 'Kokoontumispiste poistetaan myös kaikista olemassa olevista vuoroista, jotka on suunniteltu tulevaisuuteen.',
      checkInput: 'poista',
      placeholder: 'Kirjoita "{{0}}" vahvistaaksesi',
      inputError: 'Kirjoittamasi ei vastaa merkkijonoa "{{0}}"',
      confirm: 'Poista',
      cancel: 'Peruuta'
    },
    note: {
      title: 'Haluatko todella poistaa tämän muistiinpanon?',
      text: 'Muistiinpano poistetaan pysyvästi.',
      confirm: 'Poista',
      cancel: 'Peruuta'
    },
    project: {
      title: 'haluatko todella poistaa tämän projektin?',
      text: 'Tämä poistaa peruuttamattomasti kaikki tähän projektiin liittyvät asetukset, esim. vuorot, raportit, ilmoittautumiset, kirjallisuuden. Vain käyttäjiedot säilytetään.',
      checkInput: 'poista tämä projekti',
      placeholder: 'Kirjoita "{{0}}" vahvistaaksesi',
      inputError: 'Kirjoittamasi ei vastaa merkkijonoa "{{0}}"',
      confirm: 'Poista',
      cancel: 'Peruuta'
    },
    publication: {
      title: 'Poistetaanko tämä julkaisu varastosta?',
      text: 'Kaikki julkaisuun liittyvät tiedot menetetään.',
      confirm: 'Poista',
      cancel: 'Peruuta'
    },
    question: {
      title: 'Oletko varma?',
      text: 'Tämä poistaa kysymyksen ja siihen liittyvän vastauksen pysyvästi.',
      confirm: 'Poista',
      cancel: 'Peruuta'
    },
    shift: {
      title: 'Haluatko todella poistaa tämän vuoron?',
      text: 'Kaikki tähän vuoroon ilmoittautumiset poistetaan.',
      confirm: 'Poista',
      cancel: 'Peruuta'
    },
    store: {
      title: 'Haluatko todella nollata varaston?',
      text: 'Tämä poistaa kaiken lisätyn kirjallisuuden.',
      confirm: 'Nollaa',
      cancel: 'Peruuta'
    },
    tab: {
      title: 'Oletko varma?',
      text: 'Koko välilehti ja kaikki siinä olevat kysymykset poistetaan.',
      confirm: 'Poista',
      cancel: 'Peruuta'
    },
    tag: {
      title: 'Haluatko todella poistaa tunnisteen?',
      text: 'Kaikki tunnisteeseen liittyvät vuorot poistetaan myös. Tähän sisältyy myös kaikki vuoroihin ilmoittautumiset. <br><br> Kirjoita "poista" vahvistaaksesi poistamisen.',
      checkInput: 'poista',
      placeholder: 'Kirjoita "{{0}}" vahvsitaaksesi',
      inputError: 'Kirjoittamasi ei vastaa merkkijonoa "{{0}}"',
      confirm: 'Poista',
      cancel: 'Peruuta'
    },
    team: {
      title: 'Haluatko todella poistaa tämän tiimin?',
      text: 'Tiimi ja sille suunnitellut vuorot poistetaan. Hyväksytyt ilmoittautumiset näihin vuoroihin siirretään muihin tiimeihin. <br><br> Kirjoita "poista" vahvistaaksesi poistamisen.',
      checkInput: 'poista',
      placeholder: 'Kirjoita "{{0}}" vahvistaaksesi',
      inputError: 'Kirjoittamasi ei vastaa merkkijonoa "{{0}}"',
      confirm: 'Poista',
      cancel: 'Peruuta'
    },
    template: {
      title: 'Haluatko todella poistaa tämän mallipohjan?',
      text: '',
      confirm: 'Poista',
      cancel: 'Peruuta'
    },
    user: {
      title: 'Haluatko todella poistaa tämän käyttäjän?',
      text: 'Kaikki projektin käyttöoikeudet poistetaan.',
      confirm: 'Poista',
      cancel: 'Peruuta'
    }
  },
  request: {
    approve: {
      title: 'haluatko todella hyväksyä julistajan?',
      text: 'Julistaja hylättiin aiemmin. Varmista siksi, että julistaja on edelleen kelvollinen halukas osallistumaan.',
      confirm: 'Kyllä',
      cancel: 'Ei'
    },
    cancel: {
      title: 'Oletko varma?',
      text: 'Tiimi poistetaan, jos olet sen ainoa jäljellä oleva osallistuja.',
      confirm: 'Kyllä, poista osallistumiseni',
      cancel: 'Ei'
    },
    decline: {
      title: 'Haluatko todella hylätä osallistujan?',
      text: 'Jos osallistuja on jo saanut ilmoituksen, hänelle lähetetään sen kumoava viesti.',
      confirm: 'Kyllä',
      cancel: 'Ei'
    },
    maxReached: {
      title: 'Liian monta käyttäjää valittuna',
      text: 'Asetetaanko tiimin osallistujien yläraja määrästä {{0}} määrään {{1}} ja hyväksytään valitut?',
      confirm: 'Hyväksy valitut',
      cancel: 'Peruuta'
    },
    minNotReached: {
      title: 'Ei tarpeeksi käyttäjiä valittuna',
      text: 'Asetetaanko tiimin osallistujien alaraja määrästä {{0}} määrään {{1}} ja hyväksytään valitut?',
      confirm: 'Hyväksy valitut',
      cancel: 'Peruuta'
    },
    minReached: {
      title: 'Haluatko todella hylätä osallistujan?',
      text: 'Tämän tiimin osallistujen minimimäärä on saavutettu. Jos hylkäät tämän käyttäjän, järjestelmä poistaa myös tämän tiimin.',
      confirm: 'Poista tiimi',
      cancel: 'Ei'
    },
    noNewTeamleader: {
      title: 'Haluatko todella hyltätä osallistujan?',
      text: 'Valitettavasti tälle tiimille ei ole tiiminvetäjää käytettävissä. Jos hylkäät tämän käyttäjän, järjestelmä poistaa myös tämän tiimin.',
      confirm: 'Poista tiimi',
      cancel: 'Ei'
    }
  }
}

export default swal
