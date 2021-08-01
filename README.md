# str-hgk-sajat-munka
Struktúraváltás haladó képzés - Fullstack API fejlesztő - Tanfolyami feladatok

---

# NodeJS alapjai

# Gyakorló feladat - REPL

## 1. Feladat

Ellenőrizd a telepített NodeJS verziószámát!

```node --version```
## 2. Feladat
Ellenőrizd a telepített npm verziószámát!
```npm --version```
## 3. Feladat
Listázd ki a projekted függőségeit! Csak az első szint kell, a telepített csomagok függőségei nem!
```npm list --depth=0```
## 4. Feladat
Írasd ki a konzolra az eslint csomag adatait!
```npm view eslint```
## 5. Feladat
Kérdezd le az projekted elavult csomagjait, és ha van találat, frissítsd őket!
```npm outdated```
```npm update```

# Gyakorló feladat - yargs modul

Egy parancssoros alkalmazást kell készítened a yargs harmadik féltől származó package segítségével! Az alkalmazás egy webshop termékeiről készít kimutatásokat. A ```products.json``` file tartalmazza a termékek adatait. Az alábbi adatok vannak a termékekről megadva:

  - ```id```: a termék azonosítója
  - ```name```: a termék neve
  - ```price```: a termék ára
  - ```count```: a termék darabszáma

Az alkalmazás az alábbi parancssoros parancsokat fogadja:

  - ```sum``` : A parancs kimenete az összes termék összes ára. Tehát mindegyik terméknél az árat és a darabszámot össze kell szorozni, majd termékenként összeadni.
  - ```avg```: A parancs kimenete az összes termék árának átlaga egy darabra számolva.
  - ```lessthan``` : A parancs kilistázza a konzolra azokat a termékeket, amelyekből a paraméterként megadott darabszámnál kevesebb elérhető. Egy paramétert vár kötelezően:

    - paraméter neve: count
    - paraméter rövidítés: c
    - kötelező: igen
    - típusa: szám

A fájl beolvasása aszinkron legyen!

# Gyakorló feladat - Module System

## 1. Feladat

Hozz létre egy ```utils.js``` nevű fájlt!
Ebben a fájlban készíts el egy függvényt ```increaseDate``` névvel!
A függvény paraméterként egy dátumot vár és egy napszámot. A napszám alapértelmezett értéke 3. A visszatérési értéke az adott dátum napszámmal megnövelt értéke, azaz az 1970 óta eltelt idő milliszekundumban.

Készíts el egy másik függvényt ```increaseAndFormatDate``` névvel! Paraméterként egy tömböt vár, ami dátum objektumokat tartalmaz.
A függvény visszaad egy olyan új tömböt, ahol a dátumokhoz +3 nap hozzá van adva, és már magyar lokalizáció szerint vannak formázva. (pl.: 2021. július 3.)

Exportáld az ```increaseAndFormatDate``` függvényt! Csak ezt!

Hozz létre egy index.js fájlt, és importáld a ```dateFormatter``` függvényt a ```utils.js``` fájlból!
Hívd meg a ```increaseAndFormatDate``` függvényt paraméterként egy dátumokat tartalmazó tömböt megadva neki, és a konzolra írasd ki a visszatérési értékét!


## 2. Feladat

Hozz létre egy ```utils.js``` nevű fájlt!

Ebben készíts el két függvényt!

Az első neve ```generateUserList``` paraméterként egy user objektumokat tartalmazó tömböt vár.

A user objektumok

- ```firstName```
- ```lastName```
- ```age``` tulajdonságokkal rendelkeznek.
	A függvény visszatérési értéke egy olyan új tömb, ami olyan objektumokat tartalmaz, ami a következő tulajdonságokkal rendelkezik: - isAdult : a user kora alapján egy true/false érték attól függően, hogy elmúlt-e 18 éves
- ```fullName```: a user teljes neve

Az első neve ```getUserNames``` paraméterként egy user objektumokat tartalmazó tömböt vár.

A user objektumok

- ```firstName```
- ```lastName```
- ```age``` A függvény visszatérési értéke egy olyan string, ami az összes felhasználó teljes nevét tartalmazza vesszővel elválasztva.


Exportáld a két függvényt ügyelve arra, hogy a későbbiekben ne lehessen felülírni őket!

Hozz létre egy index.js fájlt, az ```utils.js``` fájlból importálj mindent ```utils``` névvel! (Ne használj object destructuring-et!)

Hívd meg a ```generateUserList``` és a ```getUserNames``` függvényeket a megfelelő paramétereket megadva nekik, és a konzolra írasd ki a visszatérési értéküket!
Ellenőrizd, hogy valóban nem lehetséges-e felülírni őket!
# Gyakorló feladat - HTTP modul

Készíts egy http szervert! A szerver a 8080-as port forgalmát figyelje! Készíts 3 html fájlt:

  - index
  - about
  - contact

Minden alkalommal, amikor beérkezik egy kérés, azt logold a konzolra az alábbi formátumban:

  - Date: a kérés pontos ideje magyar lokalizáció szerint formázva
  - Url: a kért url
  - Method: a http metódus

  Pl.: Date: 2021.04.01 Url: /about Method: GET

A logra saját függvényt írj!

A ```controller```, ```views```, ```routers``` külön mappákban/fájlokban legyenek!

# Gyakorló feladat - FS modul

## 1. Feladat
Egy webes projekt esetében gyakran ugyanolyan, vagy hasonló mappástruktúrával dolgozunk. Ahhoz, hogy ne kelljen minden alkalommal manuálisan létrehozni a mappákat, és a fájlokat, készíts egy olyan alkalmazást, ami létrehozza az alábbi mappa/fájlstruktúrát:

- controllers
  - site.controller.js
- routers
  - site.router.js
- views
  - index.html
- app.js

Most nem kell ellenőrizni, hogy az adott mappák, fájlok léteznek e.

## 2. Feladat
Az állományok archiválásához kell készítened egy egyszerű alkalmazást.
Az alkalmazás egy paraméterként megadott útvonalon lévő fájlról készít egy másolatot ugyanabba a könyvtárba.

A fájl útvonala/neve elég, ha egy változóban van tárolva.
Az új fájl neve az eredeti fájl neve a végén a .bak kiegészítéssel.
Ennek a fájlnak a tartalmát egy gz fájlba becsomagoljuk be.
Amennyiben a minden művelet sikeres volt, az eredeti fájlt és a .bak fájlt is töröljük ki!

# Gyakorló feladat - EVENTS modul

Egy webes alkalmazás során mindig szükség van Logger-re. Ennek a megvalósításhoz készítened kell egy Logger class-t, ami kiterjeszti az EventEmitter osztályt! A Logger 2 metódussal rendelkezzen: error, success! Mindegyik metódus egy paraméterként kapott string-et ír ki a konzolra. Az error-t piros, a success-t zöld színnel!

Ezt a Logger class-t kell felhasználod a következő alkalmazás során, melyet szintén neked kell elkészíteni:
Az alkalmazás egy tetszőleges txt fájl tartalmát olvassa be stream segítségével, majd átalakítja úgy, hogy mindegyik szó első karaktere nagybetűs lesz, a kimenetet pedig elmenti egy új fájlba, aminek a neve az eredeti fájl neve összefűzve a Copy string-gel. A kiterjesztés .txt maradjon.
Amennyiben bármi hiba adódott, a Logger error metódusát kell meghívni, paraméterként átadva neki az error object message property-jének az értékét.
Amennyiben nem volt hiba, a Logger success metódusát kell meghívni, paraméterként átadva neki a következő string-et: "File transform successful."

---

# MongoDB alapfeladatok terminálban (Mongo shell-ben)

Elsőként olvasd végig az összes pontot!
1.	Készíts egy videoStore nevű MongoDB adatbázist!
2.	Hozz létre benne egy movies listát!
3.	Ments el benne 10 új filmet (save()) a következő mezőkkel:
•	_id: legyen generált, ObjectId
•	title: egy-egy kedvenc film címe, szöveges tartalom
•	category: szöveges tartalom (3 típus lehet: fantasy, action, romantic) => legyenek vegyesen a filmek, amennyire lehet
•	director: szöveges tartalom, 3 rendező közül vegyesen szétválogatva => Steven Spielberg, Clint Eastwood, James Cameron
4.	Frissítsd a listádat (updateMany), mindenki kapjon egy „ratings” mezőt, amely egy üres listát tartalmaz (1-5 ig lehet benne tárolni a szavazatokat)!
5.	Adj 3 különböző filmre legalább 2 különböző szavazatot (használd a $push operátort)!
6.	Adj hozzá minden filmhez egy „releaseYear” (megjelenés éve) mezőt: kezdetnek állíts be egy tetszőleges évet minden filmnek (pl.: 2000)!
7.	Írd át category típusonként csupa nagybetűre a kategóriákat (pl.: action ==> ACTION legyen mindenhol). Használd az updateMany parancsot!
db.courses.updateMany( {}, [{$set: {title: {$toUpper: "$title"} }}] )

Tipp: db.courses.updateMany( {}, [{$set: {title: {$toUpper: "$title"} }}] )
  

# A videoStore feladat folytatása (update, find, projection)

A kész feladat feltöltésének helye:
Repo: str-hgk-sajat-munka

Almappa: mongo-feladat-02

Például: http://github.com/cherryApp/str-hgk-sajat-munka/mongo-feladat-02

Normalization elve: Csak a közvetlen összetartozó elemeket tároljuk egy táblázatban (listában). Minél összetettebb egy adat (több tulajdonsággal rendelkezhet, pl.: rendezőnek lehet neve, díjai, filmjei, születési adatai), annál inkább külön listába kell kiszervezni a tárolását.
1.	Készíts el egy „directors” listát, amelyben filmrendezőket fogunk tárolni!
2.	Ments el benne 3 „rendező” dokumentumot az insertOne() parancs segítségével:
•	"_id": egész szám 1-estől indulva
•	"name": Steven Spielberg, Clint Eastwood, James Cameron
•	"birthYear": születési év (tetszőlegesen megadott egész szám)
•	"movies": kezdetben egy üres lista
4.	Frissítsd a rendezők dokumentumait, helyezd el a „movies” listájukba a megfelelő filmek id-jait (ha ObjectId-t használsz, akkor figyelj arra, hogy ObjectId-ként mentsd el őket). Tipp: kérdezd le a rendezőket, és alájuk listázd a filmeket úgy, hogy csak az id-jük és a rendező nevét adja vissza a lekérdezés.
5.	Ha frissítetted a rendezőket, ellenőrzés gyanánt kérdezd le a dokumentumokat a „directors” listából (használd a pretty() metódust a szebb megjelenítéshez)! 
6.	Ha elkészültél a rendezői listával, frissítsd a movies listát („táblázatot”): távolítsd el a director mezőt ($unset operátor segítségével). Ezentúl a rendezőn keresztül fogjuk elérni a hozzájuk tartozó filmeket.
7.	Kérdezd le az egy bizonyos év előtt készült filmeket, majd az egy bizonyos év után készült filmeket! ($gt, $gte, $lt, $lte)
8.	Kérdezz le két év között készült filmeket! (Próbáld ki $and operátorral is!)
9.	Kérdezz le két év közötti filmeket, amelyek egy bizonyos kategóriával rendelkeznek!
10.	Kérdezd le a filmeket, amelyeknek a kategóriája NEM fantasy ($ne)!


# Cursor függvényeinek gyakorlása videoStore adatbázissal

A kész feladat feltöltésének helye:
Repo: str-hgk-sajat-munka

Almappa: mongo-feladat-03

Például: http://github.com/cherryApp/str-hgk-sajat-munka/mongo-feladat-03

1.	Használd a videoStore adatbázist (az első gyakorló feladatokból)!
2.	Számold meg, hány akció- és romantikus filmed van összesen!
3.	Kérdezd le a „FANTASY” filmek nevét és a kategóriáját. Mentsd le a listát (Cursor-t) egy változóba!
4.	Írj egy ciklust, amely végigiterál a listán, és kiírja filmek a nevét és kategóriáját => példa: Végtelen történet: FANTASY (tipp: print() függvénnyel lehet kiíratni az értékeket Mongo shell-ben)!
5.	Készíts egy lekérdezést, amely fordított sorrendben (_id) adja vissza csak a filmcímeket!
6.	Készíts egy lekérdezést, amely első lépésként a kategóriák szerint rakja sorba az elemeket, majd utána a megjelenés éve szerint fordítva sorolja fel! A lekérdezés csak a film címét, kategóriáját és megjelenési évét adja vissza.
7.	Kérdezd le az ACTION kategóriából a legutóbb készült filmet (szigorúan a query-nek kell megkeresnie, manuálisan kinézni a DB-ből nem ér)!
8.	Kérdezd le az adatbázisból a két legrégebben készült film címét és gyártási évét!
9.	Kérdezd le a ROMANTIC kategóriából a második legfrissebben megjelent film nevét és megjelenési évét!
10.	Készíts egy scriptet egy javaScript fájlban! A script feladata, hogy egyetlen függvényben lekérdezze a mozifilmek számát kimentve egy változóba, majd ennek segítségével egy ciklus keretében 3-asával lapozva írja ki a konzolra a filmek címeit és kategóriáit (kisbetűvel a kategóriát) a következő módon =>
•	pl.: „Terminator : action movie”
•	Minden egyes oldal alján jelenjen meg a szöveg: --page over--!

# Listák közötti kapcsolatok, aggregáció gyakorlása

A kész feladat feltöltésének helye:
Repo: str-hgk-sajat-munka

Almappa: mongo-feladat-04

Például: http://github.com/cherryApp/str-hgk-sajat-munka/mongo-feladat-04

1.	Ha még nem tettük meg, a cinema listánk rendelkezzen 3 cinema dokumentummal, és minden cinema dokumentum „játsszon” legalább 3 különböző filmet => adjunk hozzá legalább 3 cinema dokumentum egyes movies listájához 3 db "_id" értéket a movies listából!
2.	Kérdezzük le, hogy az első helyen lévő mozink milyen filmeket játszik, jelenjen meg minden film tulajdonsága!
3.	Ismételjük meg a fenti lekérdezést úgy, hogy csak a játszott film listája, adatai jelenjenek meg (tipp: „project” operator)!
4.	Ha még nem tettük meg, készítsünk el a videoStore-ban egy directors listát (a 2. feladat leírása alapján), és minden rendezőhöz rendeljünk 2-3 db filmet a „movies” mezőjükhöz.
5.	Kérdezzük le az egyik rendező által rendezett filmek adatait!
6.	Kérdezzük le egy másik rendező filmjeit úgy, hogy csak a rendező neve és a filmek „title”-jei, vagyis címei jelennek meg (tipp: $project operátor)!
   
7.	Adj pár szavazatot egy-egy filmre ("ratings"), ha még nem tetted meg. Írj egy lekérdezést az aggregáció segítségével, amely visszaadja annak a filmnek a címét, amely a legjobb átlagszavazattal rendelkezik! Két mezőt adjon vissza: "title" és egy új mező: "rateAvg" => pl.: { "title" : "E.T.", "rateAvg" : 4.5 }. Csak aggregációt használj, Cursor metódusok használata nélkül!

---

# Express

# 1

!!! A feladat jellege miatt kérünk Titeket, hogy az adott mappába mindig töltsétek fel az egész alkalmazást (azaz annak az éppen aktuális, feladat leírása szerinti, kívánt állapotát), hogy a változások jól követhetőek legyenek!


A kész feladat feltöltésének helye:
Repo: str-hgk-sajat-munka

Almappa: api-feladat-01

Például: http://github.com/cherryApp/str-hgk-sajat-munka/api-feladat-01


Gyakorlófeladat
Készíts egy egyszerű, működő ESZT (Egészségügyi Szuri Tár) API alkalmazást, amellyel nyilvántarthatjuk, melyik személy milyen védőoltást kapott az országban.

Készíts egy ideiglenes JSON fájl adatbázist, amely a személyeket tartalmazza, minden személy rendelkezzen az alábbi adatokkal:
id: egyedi azonosító (number)
firstName: keresztnév (string)
lastName: vezetéknév (string)
vaccine: milyen típusú oltást kapott a személy (string) (elhagyható, ha valaki még nem kapott oltást)
Implementáld a GET /person/count végpontot, amely visszaadja az oltott személyek számát.
Implementáld a GET /person/vaccinated végpontot, amely csak a beoltott személyek adatait adja vissza.
Készíts egy egyszerű Swagger dokumentációt az elkészült API alkalmazáshoz.
Az útvonalválasztást express.Router segítségével oldd meg!
Az adatbázis egy darab JSON fájl legyen!
Minden elkészült végpontot tesztelj böngésző segítségével!
Segítség
Hozd létre a lap tetején megadott almappát a repódban az alkalmazásnak.
A projekt generálásához használhatod a express-generator csomagot, vagy saját magad is létrehozhatod a struktúrát.
Példa az alkalmazás felépítésére: https://github.com/Training360/FullStackApi-tanfolyam-anyagok/tree/main/api-feladat-01

# 2

A kész feladat feltöltésének helye:
Repo: str-hgk-sajat-munka

Almappa: api-feladat-02

Például: http://github.com/cherryApp/str-hgk-sajat-munka/api-feladat-02


Egészítsd ki az egyszerű, működő ESZT (Egészségügyi Szuri Tár) API alkalmazást CRUD-műveletekkel!

Implementáld a GET /person/:id/vaccinated végpontot, amely visszaadja, hogy az adott id-val rendelkező személy rendelkezik-e oltással! (Tipp: használd a parseInt() függvényt!)
Implementáld a POST /person végpontot, amellyel új személyt vehetünk fel a nyilvántartásba! (Ne felejtsd el telepíteni a body-parser csomagot!)
Implementáld a PUT /person/:id/:vaccine végpontot, amellyel megadhatjuk, hogy az adott id-val rendelkező személy vaccine típusú oltást kapott.
Implementáld a DELETE /person/:vaccine végpontot, amely a vaccine típusú oltással rendelkező személyeket törli az adatbázisból.
Minden elkészült végpontot tesztelj böngésző segítségével!

# 3

A kész feladat feltöltésének helye:
Repo: str-hgk-sajat-munka

Almappa: api-feladat-03

Például: http://github.com/cherryApp/str-hgk-sajat-munka/api-feladat-03


Folytassuk az egyszerű, működő ESZT (Egészségügyi Szuri Tár) API alkalmazást!

Implementálj egy hibakezelő middleware függvényt, amely kilogolja a valódi hibát a konzolra, majd a kliens számára valamilyen - a hibától független - átlátszó kifogást küld vissza üzenetben. Ha nincs más státuszkód definiálva, akkor adjon 500-as hibakódot.
Végezd el az eddig elkészült végpontok id path paramétereinek a validációját. Amennyiben hibásak ezek a paraméterek, a tanult módon add át a hibát a hibakezelő middleware-nek.
A hibakezeléshez használd a http-errors csomagot! Teszteld a végpontokat hibás bemenettel, böngésző segítségével!

# 5

A kész feladat feltöltésének helye:
Repo: str-hgk-sajat-munka

Almappa: api-feladat-05

Például: http://github.com/cherryApp/str-hgk-sajat-munka/api-feladat-05


Módosítsuk az egyszerű, működő ESZT (Egészségügyi Szuri Tár) API alkalmazást úgy, hogy MongoDB-t használjon az adatok tárolására.

Hozz létre egy új MongoDB adatbázist! (használhatsz Atlas-t vagy akár lokális MongoDB példányt is)
Telepítsd a szükséges csomagokat, készítsd el a Person sémát!
Módosítsd a tanult módon az alkalmazást, hogy az a MongoDB-hez csatlakozzon, töröld a JSON adatbázist!
Módosítsd a végpontokat, hogy az adatbázissal dolgozzanak!
Tipp 1: countDocuments() elemek számolásához
Tipp 2: $exists operátor

# 8

A kész feladat feltöltésének helye:
Repo: str-hgk-sajat-munka

Almappa: api-feladat-08

Például: http://github.com/cherryApp/str-hgk-sajat-munka/api-feladat-08


Folytassuk az egyszerű, működő ESZT (Egészségügyi Szuri Tár) API alkalmazást!

Készítsd el a Vaccine sémát, rendelkezzen a következő mezőkkel:
id: egyedi azonosító (ObjectId)
name: oltás neve (string)
efficiency: oltás hatékonysága, 1-100 közötti szám (number)
Módosítsd a Person sémát: a vaccine mező egy nested objektum legyen egy vaccine és count property-vel:
count: egy szám, hogy az adott személy hány dózist kapott meg
vaccine: referencia (id) egy Vaccine típusú dokumentumra
Módosítsd a PersonService (és szükség esetén a PersonController) osztályt, hogy továbbra is megfelelően működjön!

# 10

A kész feladat feltöltésének helye:
Repo: str-hgk-sajat-munka

Almappa: api-feladat-10

Például: http://github.com/cherryApp/str-hgk-sajat-munka/api-feladat-10


Folytassuk az egyszerű, működő ESZT (Egészségügyi Szuri Tár) API alkalmazást!

Implementálj JWT autentikációt az alkalmazáshoz a szükséges végpontokkal (login, refresh, logout), egy access token 1 óráig legyen érvényes!
Készíts egy User sémát username, password és role mezőkkel, vegyél fel az adatbázisba 1-1 usert user és admin jogosultsággal!
A végpontok az adatbázisban szereplő felhasználókkal dolgozzanak!
Védd le a PersonController által definiált végpontokat, hogy csak autentikált felhasználók hívhassák meg, mindenki más kapjon hibaüzenetet 401-es hibakóddal!
Módosítsd a védelmet úgy, hogy az adatbázisban módosítást végző végpontokat (PUT, POST, DELETE hívások) csak admin felhasználók hívhassák meg!
Opcionális feladat: Jelszót sima szövegként (plain text) tárolni az adatbázisban nagyon rossz ötlet. Módosítsd a jelszó tárolását a link alapján, hogy biztonságosabbá váljon a tárolás!

---

# Angular

# Gyakorlófeladat - Autentikáció / Autorizáció

A kész feladat feltöltésének helye:
Repo: str-hgk-sajat-munka

Almappa: angular-feladat-01

Például: http://github.com/cherryApp/str-hgk-sajat-munka/angular-feladat-01


Gyakorlófeladat
Készíts egy egyszerű, Angular alapú alkalmazást. Az alkalmazás célja, hogy ki- és bejelentkezést nyújtson a felhasználóknak.

Oldalak:
home: a felhasználók bejelentkezés nélkül is elérhetik
editor: a felhasználók csak editor vagy magasabb jogosultsággal érhetik el
admin: a felhasználók csak admin jogosultsággal érhetik el
login: minden felhasználó elérheti, a bejelentkezést valósítja meg. Sikeres belépés esetén a home oldalra irányít át.

Autentikáció és autorizáció megvalósítása: 
Az autentikációhoz a json-server-auth NodeJS modult használd.
Az azonosítás json-webtoken segítségével történjen.
A tokenek ellenőrzésére és a kérésekhez csatolására használj interceptor-t.
Hozz létre egy forbidden oldalt, ahol üzenetben tájékoztatod a felhasználót arról, hogy nincs joga megtekinteni a kért oldalt.
Az egyes url-ek védelmét guard-okkal oldd meg, ezek irányítsák át a felhasználót a forbidden oldalra megfelelő jogosultság hiányában.
A fejlécben a belépett felhasználóknak jelenjen meg egy logout gomb, amelyre kattintva a rendszer kijelentkezteti őket.

Az alkalmazás felépítése:
Egyszerű felépítést használj, a fejlécben legyenek a kattintható linkek a navigációhoz, szintén innen legyen elérhető a login-oldal is.
Használj natív Bootstrap layout-ot, a hangsúly nem a megjelenésen, hanem a login/logout helyes működésén van.
Az egyes oldalak tartalma nem lényeges, csak a tesztelés segítik. Kivétel a login oldal, természetesen itt egy belépő űrlapot kell megjeleníteni.
Segítség
Az autentikációt és autorizációt a következő osztályok segítik: AuthService, JwtInterceptorService, EditorGuard, AdminGuard.
Az egyes guard-okat, ha készen vannak, akkor az AppRoutingModule-ban vedd fel, a videókban bemutatott módon, a canActivate tömbben.
Ebben a sorrendben dolgozz: komponensek -> routing -> authService -> jwtInterceptorService -> guard-ok.

# Gyakorlófeladat - NGRX

A kész feladat feltöltésének helye:
Repo: str-hgk-sajat-munka

Almappa: angular-feladat-02

Például: http://github.com/cherryApp/str-hgk-sajat-munka/angular-feladat-02


Gyakorlófeladat
Készíts egy egyszerű, Angular alapú alkalmazást. Az alkalmazás célja, hogy az adatok kezelése az NGRX modulon keresztül legyen megvalósítva.

Fontos: az angular-feladat-01 feladatot kell továbbfejlesztened. Csak azokra a részekre térek ki, amelyek eltérnek az eredeti alkalmazástól. Új alkalmazást hozz létre ennek a feladatnak is, a meglévő fájlokat pedig másold át.

Az alkalmazás filmeket kezel, ilyen adatokat generálj a mockaroo segítségével.

Oldalak:
editor: listázzon ki egy szabadon választott tömböt, amelyet a json-server-auth segítségével kér le egy service-en keresztül (movies).
movieEditor: egy bizonyos filmet jelenítsen meg egy űrlapon. Nem kell a szerkesztést is megoldani, a helyes megjelenítés a lényeg. Az editor oldalról való kattintással lehessen megnyitni ezt az oldalt és az url-ből vett paraméter hatására jelenítse meg a kiválasztott filmet, úgy, hogy a store-ből lekéri az id alapján.

State management: 
A store neve egyezzen meg a választott témával, tehát a store-on belül ott legyen elhelyezve (pl.: import { UserReducer } from './store/movie/MovieReducers'; ).
A reducers-ben is csak három szelektorra lesz szükség: selectItems, selectOneItem és selectError.
Az effect-ben is csak a loadItems$ és a getOneItem$ megvalósítása szükséges.
Az editor és movieEditor oldalakon a megfelelő selector-ok használatával jelenítsd meg az adatokat.
Segítség
Az adott store -hoz mindig külön fájlban hozd létre az action-öket, reducer-eket és effect-eket.
Használd a dokumentációt: https://ngrx.io/guide/store

Ne feledd, az adatok csak egy irányba mozoghatnak. Ezért nem egyszerűen csak lekérjük őket, hanem először dispatch-elünk egy action-t, majd a hatására beöltődő adatokat szelektáljuk, például így:
a hivatkozott sor és az alatta lévő ...

