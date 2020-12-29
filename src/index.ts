import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const number = new NumbersCollection([5, 3, 6, 3, 2, 7]);
number.sort();
console.log(number.data);

const string = new CharactersCollection('TypeScript');
string.sort();
console.log(string.data);
