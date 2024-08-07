var addTwoNumbers = function(l1, l2) {
    const a = l1.reverse()
    const b = l2.reverse()
    const c = parseInt(a.join(""))
    const d = parseInt(b.join(""))
    const f= c+d
    const g = String(f).split("")
    return g.reverse()
};


console.log(addTwoNumbers(l1 = [2,4,3], l2 = [5,6,4]));
