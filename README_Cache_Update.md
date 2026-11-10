# MyFitness AI – sicherer PWA-Cache-Fix für v1.5.1

**Ziel:** Bereits installierte iPhone-Home-Bildschirm-App aktualisieren, ohne `localStorage`/IndexedDB anzufassen.

## Was wurde korrigiert?
- `sw.js`: Installation hängt nicht mehr von allen Icons ab. Fehlende Icon-Dateien blockieren das Update nicht mehr.
- Navigationsseiten werden zuerst aus dem Netz geladen und für Offline-Fälle als Fallback gesichert.
- `skipWaiting()` und `clients.claim()` aktivieren neue Worker möglichst schnell.
- Nur alte Cache-API-App-Dateien werden entfernt. Kein `localStorage.clear()`, kein Löschen von IndexedDB.
- `index.html`: Ein Knopf „App-Version prüfen / aktualisieren“ prüft zukünftige Updates und lädt die App mit einem frischen URL-Parameter.

## Installation
1. **Zuerst** in der *bestehenden Home-Bildschirm-App* ein JSON-Backup nach iCloud Drive exportieren und dessen Existenz prüfen.
2. In GitHub `6ypv6z7sth-max/myfitness-ai` die beiden Dateien **`sw.js` und `index.html`** aus diesem Paket im Repository-Hauptverzeichnis ersetzen (Commit changes). Die übrigen Dateien müssen nicht ersetzt werden.
3. GitHub Pages einige Minuten Zeit geben. Nicht die installierte App löschen.
4. iPhone mit Internet verbinden. Home-Bildschirm-App öffnen, etwa 30 Sekunden warten, vollständig schließen und erneut öffnen. Dies ggf. zweimal wiederholen.
5. Wird die neue Oberfläche geladen, den Knopf „App-Version prüfen / aktualisieren“ benutzen. Die gespeicherten Mahlzeiten, Gewichte und Trainings prüfen.

## Grenzen / weitere Diagnose
Ein neuer `sw.js` kann einen bereits installierten Worker nur aktualisieren, wenn das iPhone den neuen Worker auch vom Netz abruft. Eine rein über Safari geöffnete Seite kann den isolierten Speicher einer Home-Bildschirm-App nicht direkt reparieren. Wenn die alte PWA weiter offline aus ihrem Cache lädt, kann dieser Fix nicht aus der Ferne garantiert werden. **Nicht** „Website-Daten löschen“ oder die PWA deinstallieren.

Falls weiterhin v1.5 angezeigt wird: Bitte Screenshot und iOS-Version mitteilen. Dann planen wir einen gezielten Datenrettungsweg. Der Export aus der Home-Bildschirm-App bleibt die maßgebliche Sicherung.

## Prüfungen
Syntaxprüfung mit `node --check` für Worker und eingebettete App-Skripte; statische Prüfung auf Datenlöschbefehle.
