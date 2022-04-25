# nodejs-alapjai-fs-modul
Gyakorlófeladat - FS modul

## 1. feladat
Egy webes projekt esetében gyakran ugyanolyan vagy hasonló mappastruktúrával dolgozunk. Ahhoz, hogy ne kelljen minden alkalommal manuálisan létrehozni a mappákat és a fájlokat, készíts egy olyan alkalmazást, ami létrehozza az alábbi mappa-/fájlstruktúrát:

  - controllers  
    - site.controller.js
  - routers
    - site.router.js
  - views
    - index.html
  - app.js

Most nem kell ellenőrizni, hogy az adott mappák, fájlok léteznek-e.

## 2. feladat
Az állományok archiválásához készíts egy egyszerű alkalmazást!  
Az alkalmazás egy paraméterként megadott útvonalon lévő fájlról készít egy másolatot ugyanabba a könyvtárba.  
A fájl útvonala/neve elég, ha egy változóban van tárolva.  
Az új fájl neve az eredeti fájl neve a végén a .bak kiegészítéssel.  
Ennek a fájlnak a tartalmát egy gz-fájlba becsomagoljuk be!  
Amennyiben minden művelet sikeres volt, az eredeti fájlt és a .bak-fájlt is töröljük ki!
