import { Database, aql } from "arangojs";

const getConnection = () => {
  return new Database({
    url: process.env.ARANGOHTTP,
    databaseName: process.env.DATABASE,
    auth: {
      username: process.env.USERNAME as string,
      password: process.env.PASSWORD as string,
    },
  });
};

const getCollection = async (cName: any, db: any) => {
  const collections = await db.collections();

  if (collections.find((c: any) => c._name === cName)) {
    return await db.collection(cName);
  } else {
    return db.createCollection(cName);
  }
};

export const checkUid = async (uid: string) => {
  const db = getConnection();

  await getCollection("user", db);

  let result = [];

  const resx = await db.query(aql`
    FOR u IN user
      FILTER u._key == ${uid}
    RETURN u
  `);
  for await (let config of resx) {
    result.push(config);
  }
  return result;
};

export const listSurah = async () => {
  const db = getConnection();

  await getCollection("surah", db);

  let result = [];

  const resx = await db.query(aql`
 
      FOR d IN surah
      RETURN d 
       
    `);

  for await (let config of resx) {
    result.push(config);
  }

  return result;
};

export const getSurahById = async (id: number) => {
  const db = getConnection();

  await getCollection("alquran", db);

  let result = [];

  const resx = await db.query(aql`
   
        FOR d IN alquran
         FILTER d.id == ${id}
        RETURN d 
         
      `);

  for await (let config of resx) {
    result.push(config);
  }

  return result?.[0];
};
