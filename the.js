function generatePrime2(a, b) {
    "use strict";
    var e = [],
        pC = function (g) {
            var limit = Math.floor(Math.sqrt(g)),
                mod = 2,
                output = 1;
            while (mod <= limit) {
                if (g % mod === 0) {
                    output = 0;
                    break;
                }
                mod += 1;
            }
            return output;
        };
    a = Number(a);
    b = Number(b);
    if ((a > 0 && b > 0 && b > a) && (a % 1 === 0) && (b % 1 === 0)) {
        a += 1;
        while (a < b) {
            if (pC(a)) {
                e.push(a);                
            }
            a += 1;
        }
    } else {
        e.push("Error: (a & b > 0) && (b > a) && (a & b) positive integers.");
    }
    return e;
}
