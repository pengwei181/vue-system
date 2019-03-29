const storage = {
  set(key, value) { //设置数据
    sessionStorage.setItem(key, JSON.stringify(value));
  },
  get(key) { //获得数据
    return JSON.parse(sessionStorage.getItem(key));
  },
  remove(key){ //移除数据
    sessionStorage.removeItem(key);
  }
};
export default storage;
