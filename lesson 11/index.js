// Шеф-повар. Определить иерархию овощей. Сделать салат. Посчитать
// калорийность. Провести сортировку овощей для салата на основе одного
// из параметров. Найти овощи в салате, соответствующие заданному
// диапазону параметров.

class Vegetables {
    constructor(calories, weight) {
        this.calories = calories;
        this.weight = weight;
    }

}

class VegetativeVegetables extends Vegetables {
    constructor(calories, weight, vegetable) {
        super(calories, weight);
        this.vegetable = vegetable;
    }
}


class FruitVegetables extends Vegetables {
    constructor(calories, weight, fruit) {
        super(calories, weight)
        this.fruit = fruit;
    }
}


class Salad {
    constructor() {
        this.vegetables = [];
    }

    addVegetable(vegetable) {
        this.vegetables.push(vegetable);
    }

    getSaladCallories() {
        return this.vegetables.map(obj => obj.calories)
            .reduce((a, b) => a + b);
    }

    sortVegsOnCal() {
        return this.vegetables.sort((a, b) => a.calories - b.calories);
    }


}

let basicSalad = new Salad();
basicSalad.addVegetable(new VegetativeVegetables(100, 20, 'Potato'));
basicSalad.addVegetable(new VegetativeVegetables(25, 10, 'Onion'));
basicSalad.addVegetable(new FruitVegetables(60, 30, 'Tomato'));
basicSalad.addVegetable(new FruitVegetables(100, 15, 'Cucumber'));
basicSalad.addVegetable(new FruitVegetables(35, 70, 'Pear'));
console.log(basicSalad);
console.log(basicSalad.getSaladCallories());
console.log(basicSalad.sortVegsOnCal());