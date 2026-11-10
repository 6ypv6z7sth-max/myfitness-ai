# MyFitness AI v1.5.1 – Installation und Abnahme

## Enthalten
- Alle bisherigen Bereiche der v1.5 mit unverändertem localStorage-Schlüssel `myfitness-ai-v01`.
- Reparierter Button **Lokal schätzen**: ungefähr 20 Lebensmittel, Portionsmengen (g/kg/ml), Erkennung kombinierter Angaben (z. B. `200 g Hühnerbrust, 150 g Reis`), Hinweis auf unbekannte Zutaten, Aktualisierung aller vier Nährwertfelder.
- **Mit KI schätzen (optional)**: Schnittstelle zu einem selbst betriebenen, authentifizierten HTTPS-Dienst. Ohne diesen Server keine echte KI-Schätzung. Die App enthält keine API-Schlüssel und keinen fertigen KI-Server. Die Mahlzeitenbeschreibung wird nur nach Bestätigung gesendet.
- JSON-Import mit Dateigrößenlimit, Datenstruktur-/Werteprüfung, Bestätigungsdialog und Speicherung vor Änderung des aktiven Datenbestands. **Der Import ersetzt weiterhin den gesamten lokalen Datenbestand, kein Merge.**
- Service-Worker-Cache `myfitness-ai-v1-5-1` und explizite Update-Prüfung.

## Update auf GitHub Pages
1. In der bisherigen App ein JSON-Backup exportieren und sicher in iCloud Drive speichern.
2. ZIP auf PC entpacken, alle enthaltenen Dateien/Ordner ins öffentliche Repository `myfitness-ai` in den Repository-Root hochladen und die vorhandenen Dateien ersetzen. `index.html`, `sw.js`, `manifest.webmanifest` müssen im Root liegen; Icons in `icons/`.
3. Commit Changes; GitHub Pages auf `main` und `/(root)` belassen.
4. Nach dem Deployment App in Safari öffnen, Version v1.5.1 prüfen, bestehende Daten prüfen. Keine Website-Daten löschen.

## Lokale Schätzung testen
Beschreibung `200 g Hühnerbrust, 150 g Reis`, dann **Lokal schätzen**. Erwartete Näherung: 525 kcal, 66,05 g Eiweiß, 7,65 g Fett, 42 g Kohlenhydrate. Werte sind vereinfachte Durchschnittswerte und können je nach Zubereitung abweichen.
Unbekanntes Lebensmittel eingeben und auf eine verständliche Fehlermeldung prüfen.

## Optionale KI-Anbindung – Schnittstellenvertrag
Eine vom Betreiber bereitgestellte, **geschützte** HTTPS-URL in das Feld `KI-Dienst-URL` eingeben. Der Server muss Authentifizierung, Zugriffsbegrenzung, CORS für die GitHub-Pages-Origin, Datenschutz und sichere serverseitige Verwahrung des KI-API-Schlüssels bereitstellen. Keine Zugangsdaten in der URL hinterlegen. Die App sendet nach ausdrücklicher Bestätigung:

`POST {"description":"200 g Hühnerbrust, 150 g Reis"}`

Erwartete JSON-Antwort:

`{"values":{"kcal":525,"protein":66,"fat":8,"carbs":42}}`

Die Anfrage nutzt Browser-Cookies (`credentials: include`), weshalb der Dienst passende SameSite-/CORS-Einstellungen braucht. Es ist noch kein KI-Backend bereitgestellt. **Die URL ist eine Integrationsschnittstelle, keine aktive KI-Funktion.**

## Datensicherung und Sicherheit
- Ein Backup **vor jedem Update und vor jedem Import** exportieren.
- Import nur mit eigenen vertrauenswürdigen JSON-Dateien; niemals fremde Backups laden.
- Die Prüfung umfasst Grundstruktur und Werte, aber nicht alle denkbaren semantischen Fehler in älteren Trainingsdaten.
- Der JSON-Import wurde nicht auf einem realen iPhone getestet; erst mit Testdaten auf einem separaten Browserprofil ausprobieren.
- Synchronisierung zwischen iPhone und PC ist weiterhin nur manuell über JSON möglich.

## Technische Prüfungen
JavaScript-Syntaxprüfung (Node.js) bestanden. Ein vollständiger End-to-End-Test auf einem echten iPhone und ein produktiver KI-Server-Test wurden nicht durchgeführt.
