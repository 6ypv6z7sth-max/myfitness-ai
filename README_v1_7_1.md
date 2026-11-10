# MyFitness AI v1.7.1 – F-05 Korrektur

- Markenprodukte besitzen jetzt eine explizite Übernahme-Schaltfläche mit frei wählbarer Grammportion.
- Die Etikettwerte werden exakt proportional berechnet (Rundung auf eine Dezimalstelle).
- Bei Namensüberschneidungen priorisiert die lokale Schätzung gespeicherte Markenprodukte vor generischen Gerichten.
- Speicherschlüssel `myfitness-ai-v01` bleibt unverändert. Kein automatisches Löschen oder Migrieren bestehender Daten.
- Vor Update JSON-Backup exportieren. Kein vollständiger Reset vor getestetem Restore.
- Prüffall: 150/8/6/16 pro 100 g => 250 g: 375/20/15/40.
