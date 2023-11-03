function ShakeFunctie(woordDatGeschudtMoetWorden){
const characters = woordDatGeschudtMoetWorden.split('');
  for (let i = characters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [characters[i], characters[j]] = [characters[j], characters[i]];
  }
  const geschudWoord = characters.join('');


  return geschudWoord
}
var woord1 = ShakeFunctie("Boekenkast");
console.log(woord1);
var woord2 = ShakeFunctie("Jezus");
console.log(woord2);
var woord3 = ShakeFunctie("Dit is of heel goed, of heel slecht. Dat verschilt natuurlijk per persoon en hun perspectief op het leven. Ik kan alleen hopen dat je mijn quiz leuk heb gevonden, maar dat kan ik ook niet garanderen. Als je het saai of slecht vindt, is dat ook goed, want we hebben natuurlijk vrijheid van meningsuiting. Dat kunnen we helaas niet in het huidige China. In huidige China wordt iedereen gecontroleerd op camera's en noem maar op en als ze iets zeggen over hun overheid, kunnen ze opgepakt worden. Daarom vraag ik u om de 5 euro te doneren om te helpen zodat de arme mensen in China ook dezelfde rechten hebben als wij in het superieure westen. Misschien met uw donatie kunnen we zelfs de kinderen die in de fabrieken werken waar uw telefoon van 376,57 euro vandaan komt, ook de kans geven om naar school te gaan. En als u geen 5 extra euro kunt doneren voor het arme volk van het huidige China, is dat natuurlijk niet erg, want dat recht heeft u in tegenstelling tot het arme volk van China. Als u toch nog van gedachten verandert om de arme mensen van het huidige China te bevrijden van de tirannie die mijn ouders mij ook gaven, zullen wij zeer dankbaar zijn. Dank u wel Het is niet erg of het een laag score was of een hoog score. Wat natuurlijk belangrijk is is dat je het naar je zin had. Dank je wel voor het spelen");
console.log(woord3);
