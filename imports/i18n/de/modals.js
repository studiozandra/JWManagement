const modal = {
  close: 'Schließen',
  addParticipant:
  {
    title: 'Teilnehmer hinzufügen',
    noUsers: 'Keine verfügbaren Teilnehmer gefunden',
    description: 'Bitte wähle den Verkündiger aus, der zu der Schicht hinzugefügt werden soll.',
    submit: 'Hinzufügen',
    alreadyRequested: 'Dieser Verkündiger hat sich bereits beworben',
    alreadyParticipating: 'Dieser Verkündiger nimmt bereits teil',
    available_users: 'Verfügbare Verkündiger',
    all_users: 'Alle Verkündiger',
    select: 'Verkündiger auswählen'
  },
  addUser:
  {
    title: 'Neuen Benutzer anlegen',
    action: 'Benutzer anlegen',
    upload: 'Datei hochladen',
    helpText: 'Der Benutzername sollte kurz und einprägsam sein. Am besten hängt er direkt mit den Vor- und Nachnamen der Benutzers zusammen.<br>Beispiele: "MaxM" oder "MMustermann"',
    invite: 'xxx (xxx) einladen',
    existingAccounts: 'Bestehende Accounts'
  },
  addVessel:
  {
    title: 'Neues Schiff hinzufügen',
    action: 'Schiff hinzufügen'
  },
  addWeek:
  {
    title: 'Neue Woche anlegen',
    noTemplate: 'Bitte leg zuerst eine Vorlage an',
    defineTemplate: 'Vorlage anlegen',
    action: 'Woche anlegen',
    text:
    {
      top: 'Wähle die Woche aus, auf die die Vorlagewoche angewendet werden soll:',
      bottom: 'Wähle die Vorlagewoche aus:'
    }
  },
  cancelTeam:
  {
    title: 'Team absagen',
    text: 'Beschreibe, warum dieses Team abgesagt werden muss. Die einzelnen Verkündiger bekommen diesen Text in der Absage-Mail angezeigt.',
    action: 'Team absagen'
  },
  copyShift:
  {
    title: 'Schicht kopieren',
    text: 'Selektiere die Tage, zu denen du Schicht kopieren möchtest.',
    action: 'Schicht kopieren'
  },
  editPermissions:
  {
    title: 'Berechtigungen von xxx verwalten',
    projectPermissions: 'Projekt Berechtigungen',
    projectRole: 'Projekt-Rolle',
    tagPermissions: 'Tag-Rollen',
    explanations: 'Erklärungen',
    helpText:
    {
      admin: 'Die Administrator-Rolle ist die höchste Berechtigungsstufe. Ein Administrator darf alles. In jedem Projekt muss es mindestens einen Administrator geben.',
      shiftScheduler: 'Ein Schichteinteiler hat die Berechtigungen eines Teilnehmers und kann darüber hinaus Schichten einteilen.',
      shiftAdmin: 'Ein Schichtplaner hat die Berechtigungen eines Schichteinteilers und kann darüber hinaus Schichten erstellen, ändern und löschen.',
      storeAdmin: 'Ein Literaturdiener hat die Berechtigungen eines Teilnehmers und kann darüber hinaus die Schichtberichte und das Depot einsehen und bearbeiten.',
      member: 'Ein Teilnehmer darf die Informationsseite sehen.',
      teamleader: 'Ein Teamleiter kann in Schichten des Tags als Teamleiter eingesetzt werden. Damit ist dann für die Abgabe des Schicht-Team-Berichts zuständig.',
      substituteTeamleader: 'Ein Ersatz-Teamleiter hat die gleiche Berechtigung, wie ein normaler Teamleiter. Aber insofern das System so konfiguriert ist, dass es automatisch zuteilt, wird es immer die Bewerbung eines normalen Teamleiters bevorzugen, falls vorhanden.',
      participant: 'Ein Teilnehmer darf die Schichten des Tags sehen und sich auf sie bewerben.',
      nothing: 'Bei "Keine" kann der Verkündiger die Schichten des Tags weder sehen, noch sich darauf bewerben oder eingeteilt werden.'
    }
  },
  editShift:
  {
    title: 'Schichtdaten bearbeiten',
    mainData: 'Allgemeine Daten',
    tag: 'Tag',
    team: 'Team',
    teams: 'Teams dieser Schicht',
    helpText:
    {
      tag: 'Wähle das Tag aus, dem die Schicht zugeordnet werden soll. Alle Verkündiger mit Berechtigung für dieses Tag können die Schicht sehen.',
      scheduling: 'Bei \'Sofort zusagen\' werden die Bewerbungen der Verkündiger sofort zugesagt, wenn die Mindest-Teilnehmer Grenze des nächsten Teams erreicht ist.'
    },
    addTeam: 'Neues Team erstellen',
    teamMin: 'Min. Teilnehmer:',
    teamMax: 'Max. Teilnehmer:',
    teamStart: 'Start:',
    teamEnd: 'Ende:',
    teamPlace: 'Ort:',
    removeTeam: 'Dieses Team löschen',
    noMeeting: 'Kein Treffpunkt',
    action: 'Aktion:',
    delete: 'Löschen',
    switch: 'Schicht einteilen',
    copyShift: 'Schicht kopieren'
  },
  editTeamPicture:
  {
    title: 'Team Bild ändern',
    currentPicture: 'Aktuelles Bild:',
    hints: 'Dieses Bild wird dem Verkündiger eventuell größer angezeigt.',
    noPictureUploaded: 'Du hast noch kein Bild hochgeladen',
    upload: 'Hochladen',
    delete: 'Löschen'
  },
  editMeetingPicture:
  {
    title: 'Treffpunkt Bild ändern',
    currentPicture: 'Aktuelles Bild:',
    hints: 'Dieses Bild wird dem Verkündiger eventuell größer angezeigt.',
    noPictureUploaded: 'Du hast noch kein Bild hochgeladen',
    upload: 'Hochladen',
    delete: 'Löschen'
  },
  editVessel: { title: 'Schiff-Daten ändern', action: 'Änderungen speichern' },
  inviteUser:
  {
    title: 'Neue Verkündiger einladen',
    key: '<span class="text-warning">Oranger Name</span> bedeutet, dass der User bereits eingeladen wurde.',
    selectAll: 'Alle auswählen',
    noUsers: 'Keine neuen Verkündiger gefunden',
    invite: 'Einladen'
  },
  position: { title: 'Position mit linker Maustaste markieren' },
  shift:
  {
    collapseTeam: 'Route und Treffpunkte verbergen',
    expandTeam: 'Route und Treffpunkte anzeigen',
    noParticipants: 'Keine Teilnehmer',
    requestTeam: 'Bewerben',
    requestTeamAgain: 'Nochmal bewerben',
    requests: 'Bewerbungen',
    cancelRequest: 'Bewerbung zurückziehen',
    cancelParticipation: 'Teilnahme absagen',
    addParticipant: 'Verkündiger hinzufügen',
    unknownAge: 'Alter unbekannt',
    closedTeam: 'Dieses Team ist geschlossen. Du kannst dich nicht bewerben',
    maximumReached: 'Die Maximal Grenze für das Team wurde bereits erreicht',
    noPermission: 'Du hast nicht die Berechtigung, andere Benutzer einzuteilen',
    noTeamleader: 'Dieser Verkündiger hat keine Teamleiter-Berechtigung',
    alreadyTeamleader: 'Dieser Verkündiger ist bereits Teamleiter',
    openTeam: 'Team öffnen',
    closeTeam: 'Team schließen',
    switch: 'Schicht bearbeiten',
    existingTeamleaders: 'Teamleiter vorhanden',
    noExistingTeamleader: 'Teamleiter fehlt'
  },
  shiftReport:
  {
    title: 'Bericht',
    teamleader: 'Teamleiter',
    substituteTeamleader: 'Ersatz-Teamleiter',
    publications: 'Publikationen',
    occurrences: 'Ereignisse',
    store: 'Depot',
    experiences: 'Erfahrungen',
    present: 'Anwesend',
    sick: 'Krank',
    missing: 'Fehlt',
    name: 'Name',
    language: 'Sprache',
    count: 'Anzahl',
    action: 'Aktion',
    noPublications: 'Keine Publikationen eingetragen',
    select_publication: 'Publikation auswählen',
    selectPublicationFirst: 'Bitte zuerst Publikation wählen',
    addItem: 'Diese Publikation hinzufügen',
    removeItem: 'Diese Publikation wieder löschen',
    texts: 'Bibeltexte',
    speaks: 'Gespräche',
    videos: 'Gezeigte Videos',
    website: 'Website gezeigt',
    returnVisits: 'Rückbesuche',
    bibleStudies: 'Bibelkurse',
    time: 'Dienstzeit',
    trolleysFilled: 'Trolleys waren aufgefüllt',
    neatnessLast: 'Ordentlichkeit der Vorschicht',
    bad: 'Schlecht',
    normal: 'Normal',
    good: 'Gut',
    yes: 'Ja',
    no: 'Nein',
    expRoute: 'Zur Route',
    expGood: 'Schöne Erfahrungen',
    expProblems: 'Probleme / Schwierigkeiten',
    date: 'Datum',
    toShift: 'Zur Schicht',
    pages:
    {
      publisher: 'Verkündiger',
      items: 'Abgegebene Publikationen',
      occurrences: 'Was erreicht werden konnte',
      store: 'Über das Depot',
      experiences: 'Erfahrungen',
      prevPage: 'Zur vorherigen Seite gehen',
      nextPage: 'Zur nächsten Seite gehen',
      finish: 'Bericht abgeben'
    }
  },
  route:
  {
    title: 'Route erstellen/bearbeiten',
    routeMarkers: 'Routen-Marker',
    addRouteMarkers: 'Klicke auf die Karte, um neue Routen-Marker hinzuzufügen'
  },
  uploadUserFile:
  {
    title: 'User-Datei hochladen',
    helpText: 'Reihenfolge der Daten (* Felder sind erforderlich): <br> E-Mail*, Vorname*, Nachname*, Geschlecht(m oder w)*, Telefon Nr., Dienstvorrecht(\'publisher\', \'auxiliary\', \'regular\', \'special\', \'circuit\', \'bethelite\' oder \'ldc\'), Versammlungsvorrecht(\'publisher\', \'servant\', \'elder\', \'coordinator\', \'secretary\' oder \'serviceOverseer\'), Versammlung, Account Sprache (\'de\', \'en\', ...)',
    helpEncoding: 'Die Datei muss im UTF-8 Format gespeichert sein damit alle Zeichen korrekt angezeigt werden!',
    uploadFile: 'CSV-Datei hochladen',
    new: 'Neue Verkündiger',
    existing: 'Verkündiger mit JW Management Account',
    name: 'Name',
    email: 'E-Mail',
    add: 'User hinzufügen'
  },
  mergeAccounts:
  {
    title: 'Accounts zusammenführen',
    description: 'Gib hier die Anmeldedaten des Accounts ein, auf den du die Berechtigungen des aktuellen Accoutns übertragen möchtest. Du wirst direkt mit dem angegebenen Account angemeldet.',
    username: 'Benutzername',
    password: 'Passwort',
    merge: 'Berechtigungen übertragen'
  }
}

export default modal
