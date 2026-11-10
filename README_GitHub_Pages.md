# MyFitness AI v1.5 – kombiniertes Update 1.3 + 1.4 + 1.5

## Neu in 1.3: Ernährung Professional
- Mahlzeiten bearbeiten und löschen.
- Mahlzeiten als Favoriten speichern und erneut übernehmen.
- Tagesziele für Kalorien, Eiweiß, Fett und Kohlenhydrate.
- Wochenübersicht und Kaloriendiagramm.
- Bestehende Einträge bleiben im bisherigen Speicherformat `myfitness-ai-v01`.

## Neu in 1.4: Fortschritt & Coach
- Gewichtskurve für 7, 30, 90 Tage oder alle Einträge.
- Gewichtsveränderung im ausgewählten Zeitraum.
- Wochenkennzahlen zu Ernährung und Trainings.
- Regelbasierte Hinweise aus gespeicherten Werten (keine echte KI/medizinische Diagnose).
- Training Professional aus Version 1.2 bleibt erhalten.

## Neu in 1.5: Backup und Gerätewechsel
- JSON-Export/Import bleibt verfügbar.
- Sichtbare Diagnose des lokalen Speichers.
- Backup-Erinnerung nach 7 Tagen; Anzeige des letzten ausgelösten Exports.
- Dokumentierter manueller Transfer über iCloud Drive zwischen Geräten.

**Wichtige technische Grenze:** GitHub Pages ist statisches Hosting. Eine automatische Synchronisierung zwischen iPhone, PC und iCloud ist in diesem Paket NICHT implementiert. Dafür braucht es einen authentifizierten Cloud-Dienst (z. B. Apple CloudKit mit Developer-Konfiguration) und eine Konflikt-/Synchronisationslogik. JSON-Import ersetzt die lokalen Daten; es ist kein automatisches Zusammenführen.

## Update-Anleitung
1. Auf dem iPhone die bisherige HTTPS-Web-App öffnen und über Dashboard ein JSON-Backup exportieren; Backup in iCloud Drive speichern.
2. Das ZIP-Paket auf Windows entpacken. Die **Dateien und Ordner aus dem Paket** (nicht die ZIP-Datei) in das GitHub-Repository `myfitness-ai` hochladen. Bestehende Dateien ersetzen. `index.html` muss im Repository-Hauptverzeichnis liegen, die drei Icons unter `icons/`.
3. Änderungen committen; GitHub Pages veröffentlicht automatisch aus `main` und `/(root)`.
4. Die bekannte App-Adresse in Safari öffnen und auf Version v1.5 im Kopf prüfen. Gegebenenfalls Seite neu laden; der Service-Worker-Cache wurde auf `myfitness-ai-v1-5` geändert.
5. Bisherige Daten prüfen, dann Mahlzeit bearbeiten, Favorit anlegen, Ziele speichern, Gewichtsfilter und Coach testen.
6. Die Home-Bildschirm-App verwenden, ohne Website-Daten oder App-Speicher zu löschen.

## Testumfang
- JavaScript-Syntaxprüfung mit Node.js bestanden.
- Automatisierter Chromium-Interaktionstest: Navigation, Mahlzeit hinzufügen/bearbeiten, Favorit, Ziele, Trainingsplan, Training, Gewicht – bestanden, ohne JavaScript-Laufzeitfehler.
- Persistenz nach Browserneustart auf echtem HTTPS/iPhone ist noch NICHT getestet: Browser-Testumgebung blockiert dauerhaften Storage. Bestehende Daten vor Update unbedingt sichern.

## Datenschutz
Die GitHub-Pages-Dateien sind öffentlich, lokale Einträge werden nicht automatisch in GitHub hochgeladen. JSON-Backups enthalten persönliche Daten und sollten geschützt gespeichert werden.
