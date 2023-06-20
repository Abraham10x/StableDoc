export const errorParser = (errors: any, touched: any, type: string) => {
  if (touched[type] && errors[type]) {
    return errors[type];
  } else {
    return null;
  }
};

/**
 * Function that retrieves a given item from LocalStorage.
 * @param {String} key LocalStorage lookup key.
 * @returns Parsed object value associated with the given key or null.
 */
export const retrieveToken = (key: string) => {
  if (typeof window !== 'undefined') {
    return JSON.parse(localStorage.getItem(key) ?? "{}");
  }
};

/**
 * Function that stores a given object by key in LocalStorage.
 * @param {String} key LocalStorage lookup key.
 * @param {Object} object The object to store in LocalStorage.
 */
export const storeToken = (key: string, object: any) => {
  localStorage.setItem(key, JSON.stringify(object));
};

export const readableDate = (date: any) => {
  const d = new Date(date);
  return d.toDateString();
}

// export const ggg = (arr1 = [], arr2 = [], dataArray: any) => {
//   dataArray.forEach((item: any) => {
//     arr1.push(item);
//     arr2.push(item)
//   })
//   return { arr1, arr2 }
// }

export const numberWithCommas = (amount: any) => {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}