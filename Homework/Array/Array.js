{
    objApi:function arrayCopy(arr) {
        let i, copy;

        if (Array.isArray(arr)) {
            copy = arr.slice(0).sort();
            for (i = 0; i < copy.length; i++) {
                copy[i] = arrayCopy(copy[i]);
            }
            return copy;
        }
        return arr;
    }

    function removeMinEl(numbers) {
        let a = 0;
        for (let i = 0; i < numbers.length - 1; i++) {
            if (numbers[i + 1] < numbers[i]) {
                a = i + 1;
                numbers.splice(a, 1);
            }
        }
        return numbers;
        //так же сортирует по возрастанию,убыванию и длине
    }
}
console.log(arrayCopy(['Hillel','js','iphone']).join());
console.log(arrayCopy([1,5,2,3,4,2]));
console.log(arrayCopy([5, 2, 3, [4, 2, 2]]));
console.log(removeMinEl([2,2,3,1]));//удаление наименьшего елемента


