import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const items = [
            { id: 0,  name: 'Pride And Prejudice',   author: 'Jane Austen'},
            { id: 1,  name: 'Wuthering Heights',     author: 'Emily Bronte'},
            { id: 2,  name: 'Animal Farm',           author: 'George Orwell'},
            { id: 3,  name: '1984',                  author: 'George Orwell'},
            { id: 4,  name: 'The Lord of the Rings', author: 'J. R. R. Tolkien'},
            { id: 5,  name: 'Game Of Thrones',       author: 'George R. R. Martin'},
            { id: 6,  name: 'Alice\'s Adventures in Wonderland', author: 'Lewis Carroll'},
            { id: 7,  name: 'Romeo and Juliet',      author: 'William Shakespeare'},
            { id: 8,  name: 'Crime and Punishment',  author: 'Fyodor Dostoyevsky'},
            { id: 9,  name: 'Of Mice and Men',       author: 'John Steinbeck'},
            { id: 10, name: 'The Great Gatsby',      author: 'F. Scott Fitzgerald'}
        ];
        return {items};
    }
}
