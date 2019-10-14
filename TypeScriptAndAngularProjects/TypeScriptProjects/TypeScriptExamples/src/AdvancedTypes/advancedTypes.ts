// --------------------------------------------------
type Primitive =
    string |
    number |
    boolean


// --------------------------------------------------
// Type Aliases
type NumberAlias = number;


// --------------------------------------------------
// Types from literals
type Beatles = "John" | "Paul" | "George" | "Ringo"
type StoryPoints = 1 | 2 | 3 | 5 | 8 | 13 | 21 | 'Infinity';

const estimate: StoryPoints = 8;

// Invalid as not one of the specified literals
// const estimate2: StoryPoints = 7;


// --------------------------------------------------
type Mammal = {
    name: string;
    produceMilk(): void;
}

type EggLayer = {
    name: string;
    layEggs(): void;
}

const dummyCreature: any = {
    name: 'P',
    produceMilk: () => {},
    layEggs: () => {}
};


// --------------------------------------------------
// The union type will only safely have
//   properties which are common
type Animal = Mammal | EggLayer;

let creature1: Animal = dummyCreature;
console.log(creature1.name);
// creature1.produceMilk();  // Invalid
// creature1.layEggs();      // Invalid


// --------------------------------------------------
// The intersection type will have properties from
//   both types
type Platypus = Mammal & EggLayer;

let creature2: Platypus = dummyCreature;

console.log(creature2.name);
creature2.produceMilk();
creature2.layEggs();


// --------------------------------------------------
// TypeScript supports automatic narrowing
const node: HTMLElement | null = document.getElementById('root');

// Invalid as type may be null
// node.innerHTML = "";

if (node != null) {
    node.innerHTML += "Type narrowed to HTMLElement via null check<br>";
}

if (node instanceof HTMLElement) {
    node.innerHTML += "Type narrowed to HTMLElement via instanceof <br>";
}


// --------------------------------------------------
// Type Guard allows compiler narrowing
function isMammal(creature: Animal): creature is Mammal {
    return (<Mammal>creature).produceMilk !== undefined;
}

if (isMammal(creature1)) {
    creature1.produceMilk(); // Narrowed to mammal
} else {
    creature1.layEggs(); // Must be EggLayer if not mammal
}


// --------------------------------------------------
// The in operator will work as type guard
if ('layEggs' in creature1) {
    creature1.layEggs(); // Narrowed to EggLayer
} else {
    creature1.produceMilk(); // Must be mammal
}
