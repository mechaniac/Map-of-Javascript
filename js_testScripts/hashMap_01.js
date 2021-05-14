const log = console.log

/**
 * Hash Map data structure implementation
 * Hash uses string code. Doesn't support overwrite.
 */
 class MyHashMap {
    /**
     * Initialize array that holds the values. Default is size 1,000
     * @param {number} l
     */
    constructor(l = 2) {
      this.a = new Array(l);
      this.collisions = 0;
    }
  
    /**
     * insert a key/value pair into the hash map
     * @param {any} k
     * @param {any} v
     */
    set(k, v) {
      const i = this.getIndex(k);
      if (this.a[i]) {
        this.a[i].push({ key: k, value: v });
        if (this.a[i].length > 1) { this.collisions++; }
      } else {
        this.a[i] = [{ key: k, value: v }];
      }
      return this;
    }
  
    /**
     * Gets the value out of the hash map
     * @param {any} k
     */
    get(k) {
      const i = this.getIndex(k);
      for (let a_i = 0; a_i < this.a[i].length; a_i++) {
        const e = this.a[i][a_i];
        if (e.key === k) {
          return e.value;
        }
      }
    }
  
    /**
     * This hash function returns the sum of the char codes.
     * Limitation same characters return the same code regardless of the order
     * @param {any} k
     */
    hash(k) {
      let h = 0;
      const s = `${k}${typeof k}`;
  
      for (let i = 0; i < s.length; i++) {
        const c = s.charCodeAt(i);
        //log(`c inside = ${c}`)
        h += c << (i * 8);
        //log(`h inside = ${h}`)
      }
      //log(`h = ${h}`)
      return h;
    }
  
    /**
     * Get the array index after applying the hash funtion to the given key
     * @param {any} k
     */
    getIndex(k) {
      const h = this.hash(k);
      return h % this.a.length;
    }
  }
  

  let h = new MyHashMap()

  log(h)
  h.set('a',12)
  h.set('b',22)
  log(h)


  let mm = new Map()

  mm.set('a',12)
  mm.set('b',22)

  log('mm: ')
  log(mm)
  
  //module.exports = MyHashMap;
  