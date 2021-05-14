const log = console.log

class HashMap {
    constructor(l = 5, f = 1) {
        this.a = new Array(l);
        this.f = f;
        this.s = 0;
        this.c = 0;
        this.keys = [];
    }

    hash(k) {
        let h = 0;
        const s = `${k}${typeof k}`;
        l(`s = ${s}`)
        for (let i = 0; i < s.length; i++) {
            let cC = s.charCodeAt(i);
            log(`cC = ${cC}, ${cC.toString(2)}`)
            cC = cC << (i * 8);
            log(`cC = ${cC}, ${cC.toString(2)}`)
            h += cC
            log(`h = ${h}`)
        }

        let hh = h % this.a.length;

        console.log(`hash: k=${k}, hh= ${hh}, h= ${h}`)
        return hh;
    }



    set(k, v) {
        let { h, i } = this._getIs(k);

        if (i === undefined) {
            // initialize array and save key/value
            i = this.keys.push({ d: k }) - 1; // keep track of the key index
            this.a[h] = this.a[h] || [];
            this.a[h].push({ k, v, kI: i });
            this.s++;
            // Optional: keep count of collisions
            if (this.a[h].length > 1) { this.c++; }
        } else {
            // override existing value
            this.a[h][i].v = v;
        }

        // check if a rehash is due
        if (this.f > 0 && (this.s / this.a.length) > this.f) {
            //console.log(`Rehash:`)
            this.rehash(this.a.length * 2);

        }

        return this;
    }

    get(k) {
        const { h, i } = this._getIs(k);

        if (i === undefined) {
            return;
        }

        return this.a[h][i].v;
    }

    has(k) {
        return !!this.get(k);
    }

    _getIs(k) {
        const h = this.hash(k);
        const vs = this.a[h] || [];

        for (let i = 0; i < vs.length; i++) {
            const e = vs[i];
            if (e.k === k) {
                //console.log(`getIs: bI: ${h}, i: ${i}`)
                return { h, i };
            }
        }

        return { h };
    }


    _getBI(k) {
        const h = this.hash(k);
        return h % this.a.length;
    }

    delete(k) {
        const { h, i, kI } = this._getIs(k);
        //log(`h = ${h}, i = ${i}, kI = ${kI}`)
        if (i === undefined) {
            return false;
        }

        this.a[h].splice(i, 1);
        delete this.keys[kI];
        this.s--;

        return true;
    }

    rehash(l) {
        const m = new HashMap(l);

        this.keys.forEach(k => {
            if (k) {
                m.set(k.d, this.get(k.d));
            }
        });

        // update bucket
        this.a = m.a;
        this.c = m.c;
        // Optional: both `keys` has the same content except that the new one doesn't have empty spaces from deletions
        this.keys = m.keys;
    }

    _getF() {
        return this.s / this.a.length;
    }
}


var m = new HashMap()

m.set('ab', 12)
m.set('ae', 22)
m.set('at', 32)
//m.delete('ab')
//   m.set('d',42)
//   m.set('e',42)
//   m.set('f',42)
//   m.set('g',42)
//   m.set('h',42)
//   m.set('i',42)
//   m.set('j',42)

log(`----------------------`)

log(m)

log(m.get('ab'))
  //log(m.get('b'))
