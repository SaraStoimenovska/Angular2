import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const items = [
            { id: 1,  name: 'Pride And Prejudice',   author: 'Jane Austen',                 order: 1},
            { id: 2,  name: 'Wuthering Heights',     author: 'Emily Bronte',                order: 2},
            { id: 3,  name: 'Animal Farm',           author: 'George Orwell',               order: 3},
            { id: 4,  name: 'The Lord of the Rings', author: 'J. R. R. Tolkien',            order: 4},
            { id: 5,  name: 'Game Of Thrones',       author: 'George R. R. Martin',         order: 5},
            { id: 6,  name: 'Alice\'s Adventures in Wonderland', author: 'Lewis Carroll',   order: 6},
            { id: 7,  name: 'Romeo and Juliet',      author: 'William Shakespeare',         order: 7},
            { id: 8,  name: 'Crime and Punishment',  author: 'Fyodor Dostoyevsky',          order: 8},
            { id: 9,  name: 'Of Mice and Men',       author: 'John Steinbeck',              order: 9},
            { id: 10, name: 'The Great Gatsby',      author: 'F. Scott Fitzgerald',         order: 10}
        ];
        return {items};
    }
}
