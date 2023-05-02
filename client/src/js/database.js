import { openDB } from 'idb';

  const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });


export const putDb = async (id, content)  => {
  try{
      console.log('Put to the database');
      const jateDb = await openDB('jate', 1);
      const tx = jateDb.transaction('jate', 'readwrite');
      const store = tx.objectStore('jate');
      const req = store.put({id: id, value: content});
      const res = await req;
      console.log('Data saved to the database', res);
  } catch (error) {
      console.log("There was an error adding data into the database", error);
  }
};


export const getDb = async () => {

  try{
      console.log('Geting all data from the database');
      const jateDb = await openDB('jate', 1);
      const tx = jateDb.transaction('jate', 'readonly');
      const store = tx.objectStore('jate');
      const req = store.getAll();
      const res = await req;
      console.log('result.value', res);
      return result;
  } catch (error){
      console.log('There was an error getting data from the database', error);
  }
};



initdb();
