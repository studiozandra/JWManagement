const dashboard = {
  loadingProjects: 'Lade Projekte...',
  projects: 'Meine Projekte',
  noProjects: 'Du nimmst an keinem Projekt teil',
  loadingShifts: 'Lade Schichten...',
  shifts: 'Meine Schichten',
  noShifts: 'Du hast noch keine Schichten',
  news: 'Neuigkeiten',
  noNews: 'Keine Neuigkeiten',
  newsFrom: 'Letzte Änderung',
  editNews: 'Neuigkeiten bearbeiten',
  changeNews: 'Änderungen speichern',
  cancelNews: 'Änderungen abbrechen',
  understaffed: 'Unterbesetzt',
  understaffedMore: 'Mehr unterbesetzte Schichten zeigen',
  missing: 'Fehlender Schichtbericht',
  missing_plural: 'Fehlende Schichtberichte',
  approved: 'Angenommene Bewerbung',
  approved_plural: 'Angenommene Bewerbungen',
  pending: 'Offene Bewerbung',
  pending_plural: 'Offene Bewerbungen',
  declined: 'Abgelehnte Bewerbung',
  declined_plural: 'Abgelehnte Bewerbungen',
  marked: 'Unterbesetzte Schicht',
  marked_plural: 'Unterbesetzte Schichten',
  participant: 'Schicht-Teilnehmer',
  participant_plural: 'Schicht-Teilnehmer',
  showOlder: 'Auch ältere Schichten zeigen',
  showAll: 'Alles zeigen',
  calendar: 'Kalender',
  myProjects: { details: { sections: { myProjects: 'Meine Projekte' } } },
  missingShiftReports:
  {
    details:
      { sections: { missingShiftReports: 'Fehlende Schichtberichte' } }
  },
  upcomingShifts:
    { details: { sections: { upcomingShifts: 'Zukünftige Schichten' } } },
  pendingRequests:
    { details: { sections: { pendingRequests: 'Offene Bewerbungen' } } },
  olderShifts:
    { details: { sections: { olderShifts: 'Vergangene Schichten' } } },
  entity:
  {
    profile: 'Profil',
    language: 'Sprache',
    shift: { tag: 'Tag', date: 'Datum', start: 'Beginn', end: 'Ende' },
    logout: 'Abmelden',
    newDashboard: 'Zur neuen Übersicht',
    newDashboardDescription: 'Gute Nachrichten! Wir haben die Übersichtsseite neu designed. Besonders auf mobilen Geräten soll es nun intuitiver sein. Wir hoffen, dass es dir gefällt! Wenn du irgendwelche Probleme haben solltest, informiere bitte deine Projekt-Koordinatoren - sie werden es an uns weiterleiten.',
    oldDashboard: 'Zur alten Übersicht',
    myProjects:
    {
      seeAllItems: 'Zeige ein weiteres Projekt',
      seeAllItems_plural: 'Zeige auch die anderen {{count}} Projekte'
    },
    missingShiftReports:
    {
      shift: { tag: 'Tag', date: 'Datum', start: 'Beginn', end: 'Ende' },
      seeAllItems: 'Zeige einen weiteren fehlenden Schichtbericht',
      seeAllItems_plural: 'Zeige auch die anderen {{count}} fehlenden Schichtberichte'
    },
    upcomingShifts:
    {
      shift: { tag: 'Tag', date: 'Datum', start: 'Beginn', end: 'Ende' },
      seeAllItems: 'Zeige meine andere zukünftige Schicht',
      seeAllItems_plural: 'Zeige auch meine anderen {{count}} zukünftigen Schichten'
    },
    pendingRequests:
    {
      link: 'Alle meine offenen Bewerbungen',
      shift: { tag: 'Tag', date: 'Datum', start: 'Beginn', end: 'Ende' }
    },
    olderShifts:
    {
      link: 'Alle meine vergangenen Schichten',
      shift: { tag: 'Tag', date: 'Datum', start: 'Beginn', end: 'Ende' }
    },
    startProject: 'Neues Projekt'
  },
  details:
  {
    sections:
    {
      myProjects: 'Meine Projekte',
      missingShiftReports: 'Fehlende Schichtberichte',
      upcomingShifts: 'Meine kommenden Schichten',
      otherShifts: 'Andere Schichten',
      administration: 'Verwaltung',
      account: 'Account'
    }
  }
}

export default dashboard
