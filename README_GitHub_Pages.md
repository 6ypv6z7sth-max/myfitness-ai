# MyFitness AI – Installation über GitHub Pages

## 1. Veröffentlichung (am PC)
1. Bei https://github.com anmelden (kostenloses Konto genügt).
2. Oben rechts **+** → **New repository**.
3. Repository beispielsweise `myfitness-ai` nennen und **Public** auswählen. Achtung: Der Programmcode ist dann öffentlich einsehbar. **Create repository**.
4. **Add file → Upload files**. Alle Inhalte dieses Pakets hochladen: `index.html`, `manifest.webmanifest`, `sw.js`, `.nojekyll` sowie den gesamten Ordner `icons` mit seinen drei PNG-Dateien. GitHub bewahrt die Ordnerstruktur beim Hochladen eines Ordners normalerweise auf. Alternativ die Dateien einzeln mit korrekten Pfaden anlegen.
5. **Commit changes** auswählen.
6. **Settings → Pages → Build and deployment**: Source **Deploy from a branch**, Branch **main**, Folder **/(root)** → **Save**.
7. Einige Minuten warten. Die Website ist anschließend unter `https://DEIN-BENUTZERNAME.github.io/myfitness-ai/` erreichbar. Die genaue URL steht unter **Settings → Pages**.

## 2. iPhone installieren
1. **Nicht** die HTML-Datei aus der Dateien-App öffnen.
2. Die oben veröffentlichte **https://**-Adresse in **Safari** aufrufen.
3. Safari **Teilen** → **Zum Home-Bildschirm** → **Hinzufügen**.
4. Die App über das neue Symbol öffnen. Mahlzeit und Gewicht erfassen, App schließen und wieder öffnen; anschließend prüfen, ob die Einträge erhalten geblieben sind.

## 3. Windows-PC
Die gleiche HTTPS-Adresse in Edge oder Chrome öffnen. Daten auf PC und iPhone sind **getrennt**, da nur lokaler Browserspeicher genutzt wird.

## 4. Datenschutz und Backups
- GitHub Pages ist **öffentlich**; keine Passwörter, persönlichen Gesundheitsdaten oder Backup-Dateien in das Repository hochladen.
- Die Fitnessdaten bleiben normalerweise lokal im Browser/App-Speicher des jeweiligen Geräts und werden **nicht** an GitHub übertragen.
- In **Dashboard → Datensicherung** regelmäßig **JSON-Backup exportieren** und die Datei z. B. in iCloud Drive speichern. Ein Import überschreibt den bisherigen lokalen Datenbestand.
- **Keine echte iCloud-Synchronisierung**. Das Löschen von Browser-/Website-Daten oder Neuinstallation kann Einträge entfernen.
- Vor einem Wechsel der Domain oder eines GitHub-Repositories zuerst Backup erstellen; lokaler Speicher ist an die Website-Adresse gebunden.

## 5. Fehlerdiagnose
- Wenn der gelbe Speicherhinweis erscheint, ist die lokale Speicherung nicht verfügbar; Eingaben gehen nach dem Schließen verloren. Prüfen, dass die App von der HTTPS-Adresse und nicht aus der Dateien-App gestartet wurde.
- Bei Änderungen an der App: Safari-Seite aktualisieren; eventuell alten Home-Bildschirm-Eintrag entfernen und neu hinzufügen. Vorher Backup sichern.
- Die automatische Nährwertschätzung ist eine einfache lokale Näherung, **keine** KI-Bilderkennung.
