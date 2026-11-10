# MyFitness AI v1.6.1 – Korrekturupdate

## Änderungen
- Eigenes Eingabefeld **Rezeptname** im Bereich Meine Rezepte; Zutaten bleiben im bisherigen Mahlzeiten-Beschreibungsfeld.
- Neue Rezepte speichern Name und Zutatenbeschreibung getrennt. Bereits vorhandene Rezepte bleiben unverändert gespeichert und können weiterhin geöffnet werden.
- Bestehende Rezepte können nun **direkt aktualisiert** werden (Bearbeiten → ändern → Rezeptänderungen speichern), statt zwangsläufig eine Kopie zu erstellen.
- Fitness-Coach zeigt Erfassungstage samt Prozentquote an und erklärt explizit, dass Durchschnittswerte nur dokumentierte Tage berücksichtigen. Bei 0 Tagen wird statt 0 kcal ein Gedankenstrich angezeigt.
- PWA-Cache-Version erhöht, Netzwerk-zuerst-Verhalten bleibt erhalten.

## Sichere Aktualisierung
1. In v1.6 **JSON-Backup exportieren** und in iCloud Drive sichern.
2. Alle Dateien aus dem ZIP in den Root des bestehenden GitHub-Pages-Repositorys hochladen, vorhandene Dateien überschreiben.
3. Nach Veröffentlichung die Home-Bildschirm-App öffnen, Versionsanzeige v1.6.1 prüfen. App nicht deinstallieren, Browserdaten nicht löschen.
4. Bisherige Mahlzeiten, Rezepte, Trainingspläne, Trainings und Gewichtseinträge prüfen.
5. Rezeptnamenfeld, Rezept bearbeiten und Coach mit 2/7 Ernährungstagen testen.

## Daten
Speicherschlüssel `myfitness-ai-v01` bleibt unverändert. Keine automatische Löschung oder Migration bestehender Daten. Cloud-Synchronisierung ist nicht enthalten.
