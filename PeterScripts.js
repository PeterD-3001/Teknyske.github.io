/**
 * Created by cerseilannister on 12/08/16.
 */

function showDate(){
    var d = new Date();
    // alert (d);
    document.writeln(d);

    var age = prompt ("Geef uw leeftijd op:");
    age = Number(age);
    document.writeln ("<H1>Volgend jaar bent u "+ (age + 1) + "jaar oud</H1>");
    document.writeln("Dit is een <B>BOLD</B>  Tag !")
}

function isPrime (getal) {
    var maxIterations = (getal / 2);
    var counter = 2;
    var isPrime = true;
    while ((isPrime === true) && (counter <= maxIterations)) {
        isPrime = (getal % counter) !== 0;
        // System.out.println("Testen of deelbaar door "+teller);
        // System.out.println("Status isPriemGetal: "+ isPriemGetal);
        counter++;
    }
    return isPrime;
}

