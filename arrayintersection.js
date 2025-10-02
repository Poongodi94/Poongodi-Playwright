function intersection(arr1, arr2) {
    let result = []

    for (let i = 0; i < arr1.length; i++) {
        let element = arr1[i]
        if (arr2.includes(element) && !result.includes(element)) {
            result.push(element)
        }
    }

    return result;
}
console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6]))