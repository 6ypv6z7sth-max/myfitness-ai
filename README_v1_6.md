# MyFitness AI v1.6 – Installation und Test

1. Vor dem Update in der bestehenden App ein JSON-Backup exportieren und außerhalb der App sichern (z. B. iCloud Drive).
2. Die Dateien dieses Pakets in das bestehende GitHub-Pages-Repository hochladen, `index.html` und `sw.js` ersetzen; Icons, Manifest und `.nojekyll` beibehalten.
3. GitHub Pages Veröffentlichung abwarten, App öffnen, gegebenenfalls „App-Version prüfen / aktualisieren“ verwenden. Die Home-Bildschirm-App NICHT löschen und Browserdaten NICHT löschen.
4. Prüfen, ob alte Mahlzeiten, Gewichte, Pläne und Trainings vorhanden sind.
5. Unter Ernährung eingeben: `50 g Dinkelflocken, 18 g Mandeln, 130 ml Sojamilch, 150 g Skyr, 180 g Himbeeren`; „Lokal schätzen“. Erwartet: ca. 510 kcal, rund 32–34 g Eiweiß (je nach Durchschnittswerten).
6. `200 g Fantasiefrucht XYZ` eingeben: klare Warnung, keine Übernahme unvollständiger Werte.
7. Rezept speichern, übernehmen, bearbeiten (als neues Rezept) und löschen; bestehende Mahlzeiten dürfen sich dadurch nicht ändern.
8. Coach unter Fortschritt prüfen; bei weniger als vier Ernährungstagen sollte er die eingeschränkte Aussagekraft nennen.
9. Backup exportieren und auf Vollständigkeit prüfen; der JSON-Import ersetzt bestehende Daten nur nach ausdrücklicher Bestätigung.

## Hinweise

- Der lokale Datenspeicherschlüssel bleibt `myfitness-ai-v01`; kein automatischer Datenreset.
- Nährwerte sind Durchschnittsschätzungen, keine markengenauen Etikettwerte. Bei Zutaten ohne Mengenangabe oder unbekannten Lebensmitteln keine automatische Teilübernahme.
- Rezeptbearbeitung erfolgt durch Übernahme und Speichern einer neuen Variante; bestehende Rezepte bleiben dabei erhalten.
- Der Coach ist regelbasiert, nicht an einen generativen KI-Dienst angeschlossen.
- Automatische Cloud-/iCloud-Synchronisierung ist nicht enthalten.
