function union(arr1, arr2) {
    // return arr1.concat(arr2);
    const union = [];
    for (let i = 0; i < arr1.length; i += 1) {
        if (union.indexOf(arr1[i]) === -1) {
            union.push(arr1[i]);
        }
        if (union.indexOf(arr2[i]) === -1) {
            union.push(arr2[i]);

        }
    }
    return union;
}

function section(arr1, arr2) {
    const section = [];
    for (let i = 0; i < arr1.length; i += 1) {
        if (arr1.indexOf(arr2[i]) !== -1) {
            section.push(arr2[i]);
        }
    }
    return section
}

function difference(arr1, arr2) {
    const difference = [];
    for (let i = 0; i < arr1.length; i += 1) {
        if (arr2.indexOf(arr1[i]) === -1) {
            difference.push(arr1[i]);
        }
    }
    return difference
}


function descartes(arr1, arr2) {
    const descartes = [];
    // 2 db 5 elemű tömb
    // i = 0
    // i = 1
    // i = 2
    // i = 3
    // i = 4
    for (let i = 0; i < arr1.length; i += 1) {
        for (let j = 0; j < arr2.length; j += 1) {
            //j = 0, 1, 2, 3, 4
            //j = 0, 1, 2, 3, 4
            //j = 0, 1, 2, 3, 4
            //j = 0, 1, 2, 3, 4
            //j = 0, 1, 2, 3, 4
            descartes.push(arr1[i] * arr2[j]);
        }
    }
    return descartes;
}
