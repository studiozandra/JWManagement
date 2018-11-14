const store = {
  title: 'Depot Übersicht',
  short: 'Kürzel',
  language: 'Sprache',
  languages: 'Sprachen',
  total: 'Gesamt',
  count: 'Anzahl',
  showAll: 'Zeige alle Publikationen',
  hideAll: 'Verberge nicht angelegte Publikationen',
  reset: 'Depot zurücksetzen',
  noPublication: 'Du hast noch keine Publikationen hinzugefügt.<br>Um eine Publikation hinzuzufügen, klicke auf den Button um alle verfügbaren Publikationen anzuzeigen.<br>Wähle aus, welche der Publikationen in deinem Depot vorhanden sind.<br>Klicke auf eine Publikation, um die Sprachen zu verwalten, in denen sie auf Lager ist.',
  startAddLanguage: 'Sprache hinzufügen',
  cancelAddLanguage: 'Abbrechen',
  close: 'Schließen',
  addLanguage: 'Hinzufügen',
  removeLanguage: 'Sprache löschen',
  setup:
  {
    title: 'Bitte wähle einen Depot-Modus',
    support: 'Leider wird dies noch nicht unterstützt',
    description: 'Um dein Depot zu initialisieren, benötigen wir noch einige Angaben.<br>Bitte wähle einen der beiden Modi aus, um mit dem Anlegen des Depots zu beginnen.<br>Du kannst den Modus nachher wieder ändern.',
    simple:
    {
      name: 'Einfach',
      description: 'Beim einfachen Modus wird das System automatisch so konfiguriert, dass im Schichtbericht "Bücher & Bibeln", "Zeitschriften", usw. als Abgaben angegeben werden können.'
    },
    advanced:
    {
      name: 'Erweitert',
      description: 'Beim erweiterten Modus kannst du selbst definieren, welche Publikationen im Schichtbericht abgegeben werden können und wie viele davon auf Lager sind. Dadurch kannst du genau ermitteln, wie gut welche Publikationen und Sprachen laufen und hast mehr Möglichkeiten, das Inventar zielgerichtet zu optimieren.'
    }
  },
  type:
  {
    _books: 'Bücher',
    _brochures: 'Broschüren',
    _magazines: 'Zeitschriften',
    _tracts: 'Traktate',
    _misc: 'Sonstiges'
  },
  publication:
  {
    '_CO-inv17': 'Einladung zum regionalen Kongress 2017',
    '_CO-inv18': 'Einladung zum regionalen Kongress 2018',
    '_CO-inv19': 'Einladung zum regionalen Kongress 2019',
    '_CO-inv20': 'Einladung zum regionalen Kongress 2020',
    _bh: 'Was lehrt die Bibel wirklich?',
    _bi12: 'Neue-Welt-Übersetzung der Heiligen Schrift',
    _bm: 'Die Bibel: Was will sie uns sagen?',
    _cf: 'Komm folge mir nach',
    _ct: 'Gibt es einen Schöpfer, der an uns interessiert ist?',
    _dv: 'DVD',
    _fg: 'Eine gute Botschaft von Gott',
    _fy: 'Das Geheimnis des Familienglücks',
    _gt: 'Der größte Mensch, der je lebte',
    _gu: 'Gottes Anleitung — Unser Weg zum Paradies',
    _hf: 'Glücksrezept für Ehe und Familie',
    _inv: 'Einladung zu den Zusammenkünften',
    _jr: 'Was Gott uns durch Jeremia sagen lässt',
    _jw: 'Jesus — der Weg, die Wahrheit, das Leben',
    _jwcd: 'Kontaktkarte für jw.org',
    _kt: 'Hätten Sie gern eine Antwort?',
    _la: 'Ein befriedigendes Leben — Wie es zu erreichen ist',
    _lc: 'Das Leben: Reiner Zufall?',
    _ld: 'Höre auf Gott',
    _lf: 'Der Ursprung des Lebens — Fünf Fragen kritisch beleuchtet',
    _lfb: 'Was wir aus der Bibel lernen können',
    _ll: 'Höre auf Gott und lebe für immer',
    _lgw: 'Einstieg in die Bibel',
    _lmn: '„Siehe! Ich mache alle Dinge neu“',
    _lr: 'Lerne von dem großen Lehrer',
    _mb: 'Meine kleine Bibel-Fibel',
    _mi16: 'Gedächtnismahleinladung 2016',
    _mi17: 'Gedächtnismahleinladung 2017',
    _mi18: 'Gedächtnismahleinladung 2018',
    _mi19: 'Gedächtnismahleinladung 2019',
    _mi20: 'Gedächtnismahleinladung 2020',
    _my: 'Mein Buch mit biblischen Geschichten',
    _pc: 'Frieden und Glück auf Dauer — wie zu finden?',
    _ph: 'Der Weg zu Frieden und Glück',
    _rj: 'Komm zurück zu Jehova',
    _rk: 'Echter Glaube macht glücklich',
    _rp: 'Wie man den Weg ins Paradies findet',
    _sgd: 'Studienhilfe zur Bibel',
    '_t-30': 'Die Bibel: Was für ein Buch ist sie?',
    '_t-31': 'Die Zukunft: Wie sieht sie aus?',
    '_t-32': 'Die Familie: Was macht sie glücklicher?',
    '_t-33': 'Die Welt: Wer hat die Macht?',
    '_t-34': 'Ängste und Sorgen: Hört das jemals auf?',
    '_t-35': 'Verlust und Trauer: Ist mit dem Tod alles vorbei?',
    '_t-36': 'Das Reich Gottes: Was ist damit gemeint?',
    '_t-37': 'Lebensfragen: Wo findet man die Antwort?',
    _we: 'Wenn ein geliebter Mensch gestorben ist',
    '_wp/g': 'Wachtturm / Erwachet',
    _yc: 'Unsere kleine Bibelstunde',
    _yp1: 'Fragen junger Leute — praktische Antworten, Band 1',
    _yp2: 'Fragen junger Leute — praktische Antworten, Band 2',
    _ypq: 'Antworten auf 10 Fragen junger Leute'
  }
}

export default store
