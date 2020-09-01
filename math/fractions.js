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
            if(int1[i] < int2[j]){
                break;
            }
            if(int1[i] == int2[j]){
                commonFactors.push(int1[i]);
            }
        }
    }
    return commonFactors[commonFactors.length-1];
}
function LCM(int1,int2){
    let x = int1;
    let y = int2;
    let int1a = [];
    let int2a = [];
    for(let i = 1; i <= y; i++){
        int1a.push(int1 * i)
    }
    for(let i = 1; i <= x; i++){
        int2a.push(int2 * i)
    }
    let lcm;
    for(let i = 0; i < int1a.length; i++){
        for(let j = 0; j < int2a.length;j++){
            if(int1a[i] == int2a[j]){
                lcm = int1a[i];
                return lcm;
            }
        }
    }
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

function decimalToFractionA(n) {
    n = parseFloat(n);
    n = n.toString();
    let h = n.split('.')[1].length;
    h = 10 ** h;
    n = parseFloat(n);
    n = parseInt(n * h);
    console.log(n,h)
    let gcf = GCF(n,h);
    n /= gcf;
    h /= gcf
    return `${n}/${h}`;
}
function fractionAddition(){
    x = document.querySelector("#decimalAdd1").value;
    y = document.querySelector("#decimalAdd2").value;
    x = x.split('/');
    y = y.split('/');
    let dx = x[1];
    let dy = y[1];
    let lcm = LCM(x[1],y[1]);
    x = (lcm / dx) * x[0];
    y = (lcm / dy) * y[0];
    let a = x + y;
    document.querySelector("#fractionAddition .answer").innerHTML = `${a}/${lcm} or ${simplestForm(a,lcm)} or ${eval(a/lcm)}`;

}
function fractionSubtraction(){
    x = document.querySelector("#decimalSubtract1").value;
    y = document.querySelector("#decimalSubtract2").value;
    x = x.split('/');
    y = y.split('/');
    let dx = x[1];
    let dy = y[1];
    let lcm = LCM(x[1],y[1]);
    x = (lcm / dx) * x[0];
    y = (lcm / dy) * y[0];
    let a = x - y;
    document.querySelector("#fractionSubtraction .answer").innerHTML = `${a}/${lcm} or ${simplestForm(a,lcm)} or ${eval(a/lcm)}`;

}
function fractionMultiplication(){
    x = document.querySelector("#decimalMultiply1").value;
    y = document.querySelector("#decimalMultiply2").value;
    x = x.split('/');
    y = y.split('/');
    let a = x[0] * y[0];
    let b = x[1] * y[1];
    document.querySelector("#fractionMultiplication .answer").innerHTML = `${a}/${b} or ${simplestForm(a,b)} or ${eval(a/b)}`;
}
function fractionDivision(){
    x = document.querySelector("#decimalDivide1").value;
    y = document.querySelector("#decimalDivide2").value;
    x = x.split('/');
    y = y.split('/');
    let a = x[0] * y[1];
    let b = x[1] * y[0];
    document.querySelector("#fractionDivision .answer").innerHTML = `${a}/${b} or ${simplestForm(a,b)} or ${eval(a/b)}`;
}
function simplestForm(n,d){
    let gcf = GCF(n,d);
    n /= gcf;
    d /= gcf;
    return `${n}/${d}`;
}

function fractionToDecimal(){
    let ans = (document.querySelector("#fraction").value)
    document.querySelector("#fractionToDecimal .answer").innerHTML = `${eval(ans)}`;
}
function mixedToImproper(){
    let mixedNum = document.querySelector("#mixedNumber").value;
    let mixedFraction =  document.querySelector("#mixedNumberFraction").value;
    mixedFraction = mixedFraction.split("/");
    let answer = `${mixedFraction[1] * mixedNum + parseInt(mixedFraction[0])}/${mixedFraction[1]}`
    answer = answer.split("/");
    answer = simplestForm(parseInt(answer[0]),parseInt(answer[1]));
    document.querySelector("#mixedToImproper .answer").innerHTML = answer;
}
function improperToMixed(){
    let improper = document.querySelector("#improperFraction").value;
    improper = improper.split('/');
    let mixed = Math.floor(improper[0]/improper[1]);
    let numerator = improper[0] - mixed * improper[1];
    let fraction = `${numerator}/${improper[1]}`.split("/");
    fraction = simplestForm(parseInt(fraction[0]),parseInt(fraction[1]));
    let answer = `${mixed} ${fraction}`;
    document.querySelector("#improperToMixed .answer").innerHTML = answer;
}
function toSimplestForm(){
    let fraction = document.querySelector("#improperFraction").value;
    fraction = fraction.split('/');
    fraction = simplestForm(parseInt(fraction[0]),parseInt(fraction[1]));
    document.querySelector("#toSimplestForm .answer").innerHTML = fraction;
}