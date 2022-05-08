const quadranticEquation = (a, b, c)=>{
    let r1, r2;
    let discriminant = b*b - 4*a*c;
    if (a === 0){
        return "Impossible equation."
    }
    else if (discriminant === 0){
        r1 = r2 = -b/(2*a);
        return "r1 = r2 = " + r1;
    }
    else if (discriminant > 0){
        r1 = (-b + Math.sqrt(discriminant)) /(2*a);
        r2 = (-b - Math.sqrt(discriminant)) /(2*a);
        return "r1 = " + r1 + "\nr2 = " + r2; 
    }

    else {
        return "No r1, r2";
    }
}

let a = 0;
let b = -11;
let c = 30;
console.log(quadranticEquation(a,b,c));