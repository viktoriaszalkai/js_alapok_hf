export function osszegzes(szam){
    
    let index = 0;
    let osszeg = 0;
    while (index <= szam) {
        osszeg += index;
        index++;
    }
    return osszeg;
}