// this function find the data on key,value for (bookread) localstorage
const getlocalstorgedata = () => {
  const localdata = localStorage.getItem("bookread");
  if (localdata) {
    return JSON.parse(localdata);
  }
  return [];
};

// this function add the data on key,value for (bookread) localstorage
const localstoragedatabooks = (id) => {
  const data = getlocalstorgedata();
  const exgest = data.find(book => book === id);
  if (!exgest) {
    data.push(id);
    localStorage.setItem('bookread',JSON.stringify(data));
  }
};

// this function find the data on key,value for (bookwishlist) localstorage
const wishlistlocaldata =()=>{
    const wishlistdata = localStorage.getItem('bookwishlist');
    if (wishlistdata) {
        return JSON.parse(wishlistdata);
    };

    return [];
}

// this function add the data on key,value for (bookwishlist)  localstorage
const wishlistlocalstoragedatabooks = (id)=>{
    const data = wishlistlocaldata();
    const exgest = data.find(book=>book ===id);
    if (!exgest) {
        data.push(id);
        localStorage.setItem('bookwishlist',JSON.stringify(data));
    }
}






export { getlocalstorgedata , localstoragedatabooks , wishlistlocaldata , wishlistlocalstoragedatabooks};



