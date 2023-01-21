import { STORAGE_URL, STORAGE_LIST, STORAGE, APP_DB } from '../firebase';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { get, child, onValue } from 'firebase/database';

const API = {
  getProjectsImgs: async () => {
    const imgs: Record<string, string> = {};
    const itemRefs = await listAll(STORAGE_LIST);
    const promises = itemRefs.items.map((itemRef: any) => {
      return getDownloadURL(ref(STORAGE, `${STORAGE_URL}${itemRef._location.path}`)).then((url: string) => {
        const key = itemRef._location.path as string;
        imgs[key] = url;
      });
    });
    await Promise.all(promises);
    return imgs;
  },

  getAppData: async () => {
    return get(child(APP_DB, '/')).then((snapshot) => (snapshot.exists() ? snapshot.val() : {}));
  },
};

export default API;
