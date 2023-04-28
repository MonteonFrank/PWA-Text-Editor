import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'jate', autoIncrement: true });
      console.log('jate database created');
    },
  });


  export const getDb = async () => {
    try {
      console.log('Geting all data from the database');
      const jateDB = await openDB('jate', 1);
      const tx = jateDB.transaction('jate', 'readonly');
      const store = tx.objectStore('jate');
      const result = await store.getAll();
      console.log('result.value', result);
      return result;
    } catch (error) {
      console.log('There was an error getting data from the database', error);
    }
  };

  
export const putDb = async (content) => {
  console.log('Added correctly into the database');

  try {
    const jateDB = await openDB('jate', 1);
    const tx = jateDB.transaction('jate', 'readwrite');
    const store = tx.objectStore('jate');
    const key = await store.add(content);
    console.log(`Data saved into the database successfully`);
  } catch (error) {
    console.log('There was an error adding data into the database', error);
  }
};


initdb();
