# nodejs-alapjai-module-system
Gyakorlófeladat - Module System

## 1. feladat
Hozz létre egy utils.js nevű fájlt!  
Ebben a fájlban készíts el egy függvényt increaseDate névvel!  
A függvény paraméterként egy dátumot és egy napszámot vár. A napszám alapértelmezett értéke 3. A visszatérési értéke az adott dátum napszámmal megnövelt értéke, azaz az 1970 óta eltelt idő milliszekundumban.

Készíts el egy másik függvényt increaseAndFormatDate névvel! Paraméterként egy tömböt vár, ami dátum objektumokat tartalmaz.  
A függvény visszaad egy olyan új tömböt, ahol a dátumokhoz +3 nap hozzá van adva, és már magyar lokalizáció szerint vannak formázva. (pl.: 2021. július 3.)

Exportáld az increaseAndFormatDate függvényt! Csak ezt!

Hozz létre egy index.js fájlt, és importáld az increaseAndFormatDate függvényt a utils.js fájlból!  
Hívd meg a increaseAndFormatDate függvényt paraméterként egy dátumokat tartalmazó tömböt megadva neki, és a konzolra írasd ki a visszatérési értékét!

## 2. feladat
Hozz létre egy utils.js nevű fájlt!  
Ebben készíts el két függvényt!

Az első neve generateUserList, paraméterként egy user objektumokat tartalmazó tömböt vár.  
A user objektumok

- firstName
- lastName
- age tulajdonságokkal rendelkeznek.

A függvény visszatérési értéke egy olyan új tömb, ami olyan objektumokat tartalmaz, ami a következő tulajdonságokkal rendelkezik: 

- isAdult : a user kora alapján egy true/false érték attól függően, hogy elmúlt-e 18 éves  
- fullName: a user teljes neve

A getUserNames paraméterként egy user objektumokat tartalmazó tömböt vár.  

A függvény visszatérési értéke egy olyan string, ami az összes felhasználó teljes nevét tartalmazza vesszővel elválasztva.  

Exportáld a két függvényt ügyelve arra, hogy a későbbiekben ne lehessen felülírni őket!  

Hozz létre egy index.js fájlt, az utils.js fájlból importálj mindent utils névvel! (Ne használj object destructuring-et!)  
Hívd meg a generateUserList és a getUserNames függvényeket a megfelelő paramétereket megadva nekik, és a konzolra írasd ki a visszatérési értéküket!  
Ellenőrizd, hogy valóban nem lehetséges-e felülírni őket!
