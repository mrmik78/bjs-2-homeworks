//Задача № 1
function cachingDecoratorNew(func) {

  let cache = [];
  function wrapper(...args) {
    const hash = md5(args);
    let objectInCache = cache.find((item) => item.hash === hash);
    if (objectInCache) {
      return "Из кэша: " + objectInCache.result;
    }
    
    let result = func(...args);
    cache.push({ hash, result });
    if (cache.length > 5) {
      cache.shift();
    }
    return "Вычисляем: " + result;
  }
  return wrapper;
}
//Задача № 2
function debounceDecoratorNew(func, delay) {

  let timeoutId = null;
  function wrapper(...args) {
    wrapper.allCount += 1;
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    if (wrapper.count === 0) {
      wrapper.count += 1;
      return func.call(this, ...args);
    }
    timeoutId = setTimeout(() => {
      timeoutId = null;
      wrapper.count += 1;
      return func.call(this, ...args);
    }, delay);
  }
  wrapper.count = 0;
  wrapper.allCount = 0;
  return wrapper;
}