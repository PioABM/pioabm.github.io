function decimalToFraction() {
    n = document.querySelector("#decimal").value;
    n = eval(n);
    n = n.toString();
    let h = n.split('.')[1].length;
    h = 10 ** h;
    n = parseFloat(n);
    n = parseInt(n * h);
    console.log(n,h)
    let gcf = GCF(n,h);
    n /= gcf;
    h /= gcf
    document.querySelector("#decimaltointeger .answer").innerHTML = `Anwer: ${n}/${h}`;
}
function GCF(int1, int2) {
    int1 = factorsFinder(int1);
    int2 = factorsFinder(int2);
    let commonFactors = [];
    for(let i = 0; i < int1.length; i++){
        for(let j = 0; j < int2.length;j++){
            if(int1[i] == int2[j]){
                commonFactors.push(int1[i]);
            }
        }
    }
    return commonFactors[commonFactors.length-1];
}
function factorsFinder(num) {
    const factors = [];
    const refactors = [];
    for (let i = 0; i < num + 1; i++) {
        factors.push(i);
    }
    for (let i = 0; i < num + 1; i++) {
        if (num % factors[i] == 0) {
            refactors.push(factors[i]);
        }
    }
    return refactors
}
