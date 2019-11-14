!(function(e) {
  var t = {};
  function n(a) {
    if (t[a]) return t[a].exports;
    var r = (t[a] = { i: a, l: !1, exports: {} });
    return e[a].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function(e, t, a) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
    }),
    (n.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var a = Object.create(null);
      if (
        (n.r(a),
        Object.defineProperty(a, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var r in e)
          n.d(
            a,
            r,
            function(t) {
              return e[t];
            }.bind(null, r),
          );
      return a;
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, 'a', t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ''),
    n((n.s = 5));
})([
  function(e, t) {
    var n =
      ('undefined' != typeof crypto &&
        crypto.getRandomValues &&
        crypto.getRandomValues.bind(crypto)) ||
      ('undefined' != typeof msCrypto &&
        'function' == typeof window.msCrypto.getRandomValues &&
        msCrypto.getRandomValues.bind(msCrypto));
    if (n) {
      var a = new Uint8Array(16);
      e.exports = function() {
        return n(a), a;
      };
    } else {
      var r = new Array(16);
      e.exports = function() {
        for (var e, t = 0; t < 16; t++)
          0 == (3 & t) && (e = 4294967296 * Math.random()), (r[t] = (e >>> ((3 & t) << 3)) & 255);
        return r;
      };
    }
  },
  function(e, t) {
    for (var n = [], a = 0; a < 256; ++a) n[a] = (a + 256).toString(16).substr(1);
    e.exports = function(e, t) {
      var a = t || 0,
        r = n;
      return [
        r[e[a++]],
        r[e[a++]],
        r[e[a++]],
        r[e[a++]],
        '-',
        r[e[a++]],
        r[e[a++]],
        '-',
        r[e[a++]],
        r[e[a++]],
        '-',
        r[e[a++]],
        r[e[a++]],
        '-',
        r[e[a++]],
        r[e[a++]],
        r[e[a++]],
        r[e[a++]],
        r[e[a++]],
        r[e[a++]],
      ].join('');
    };
  },
  function(e, t, n) {
    var a = n(3),
      r = n(4),
      o = r;
    (o.v1 = a), (o.v4 = r), (e.exports = o);
  },
  function(e, t, n) {
    var a,
      r,
      o = n(0),
      c = n(1),
      s = 0,
      d = 0;
    e.exports = function(e, t, n) {
      var i = (t && n) || 0,
        l = t || [],
        u = (e = e || {}).node || a,
        p = void 0 !== e.clockseq ? e.clockseq : r;
      if (null == u || null == p) {
        var m = o();
        null == u && (u = a = [1 | m[0], m[1], m[2], m[3], m[4], m[5]]),
          null == p && (p = r = 16383 & ((m[6] << 8) | m[7]));
      }
      var f = void 0 !== e.msecs ? e.msecs : new Date().getTime(),
        v = void 0 !== e.nsecs ? e.nsecs : d + 1,
        y = f - s + (v - d) / 1e4;
      if (
        (y < 0 && void 0 === e.clockseq && (p = (p + 1) & 16383),
        (y < 0 || f > s) && void 0 === e.nsecs && (v = 0),
        v >= 1e4)
      )
        throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
      (s = f), (d = v), (r = p);
      var h = (1e4 * (268435455 & (f += 122192928e5)) + v) % 4294967296;
      (l[i++] = (h >>> 24) & 255),
        (l[i++] = (h >>> 16) & 255),
        (l[i++] = (h >>> 8) & 255),
        (l[i++] = 255 & h);
      var C = ((f / 4294967296) * 1e4) & 268435455;
      (l[i++] = (C >>> 8) & 255),
        (l[i++] = 255 & C),
        (l[i++] = ((C >>> 24) & 15) | 16),
        (l[i++] = (C >>> 16) & 255),
        (l[i++] = (p >>> 8) | 128),
        (l[i++] = 255 & p);
      for (var g = 0; g < 6; ++g) l[i + g] = u[g];
      return t || c(l);
    };
  },
  function(e, t, n) {
    var a = n(0),
      r = n(1);
    e.exports = function(e, t, n) {
      var o = (t && n) || 0;
      'string' == typeof e && ((t = 'binary' === e ? new Array(16) : null), (e = null));
      var c = (e = e || {}).random || (e.rng || a)();
      if (((c[6] = (15 & c[6]) | 64), (c[8] = (63 & c[8]) | 128), t))
        for (var s = 0; s < 16; ++s) t[o + s] = c[s];
      return t || r(c);
    };
  },
  function(e, t, n) {
    'use strict';
    n.r(t);
    n(6), n(11);
    var a = (e, t, n, a) => {
        const r = document.createElement('div');
        r.classList.add('formRoot');
        const o = document.createElement('form'),
          c = document.createElement('button');
        (c.textContent = 'Save'),
          (c.type = 'submit'),
          o.addEventListener('submit', n => {
            n.preventDefault();
            const r = n.target.getElementsByClassName('formField-js'),
              o = {};
            Array.from(r).forEach(e => {
              (o[e.name] = e.value), (e.value = '');
            });
            const c = JSON.parse(localStorage.getItem(e)),
              s = new t(o),
              d = JSON.stringify(c ? [...c, s] : [s]);
            localStorage.setItem(e, d), a && a();
          });
        const s = document.createElement('h3');
        return (
          (s.textContent = e),
          (s.className = 'form-title'),
          n.forEach(({ name: e, type: t, options: n }) => {
            const a = document.createElement('div');
            a.classList.add('fieldRoot');
            const d = document.createElement('label');
            let i;
            switch (((d.textContent = e), t)) {
              case 'text':
              case 'number':
                (i = document.createElement('input')).setAttribute('name', e),
                  i.setAttribute('type', t);
                break;
              case 'select':
                (i = document.createElement('select')).setAttribute('name', e),
                  n.forEach(e => {
                    const t = document.createElement('option');
                    (t.value = e), (t.textContent = e), i.appendChild(t);
                  });
                break;
              default:
                i = null;
            }
            i.classList.add('formField-js'),
              (i.required = !0),
              r.appendChild(s),
              d.appendChild(i),
              a.appendChild(d),
              o.appendChild(a),
              o.appendChild(c),
              r.appendChild(o);
          }),
          r
        );
      },
      r = (e, t, n) => {
        const a = document.getElementById('root'),
          r = document.createElement('div');
        return (
          (r.id = n),
          a.appendChild(r),
          () => {
            const n = JSON.parse(localStorage.getItem(t)),
              a = e(n);
            (r.innerHTML = ''), r.appendChild(a);
          }
        );
      };
    const o = [
        { name: 'model', type: 'text' },
        { name: 'producedYear', type: 'number' },
        { name: 'capacity', type: 'number' },
        { name: 'averageSpeed', type: 'number' },
      ],
      c = [
        { name: 'licensePlate', type: 'text' },
        { name: 'typeOfGas', type: 'select', options: ['Gasoline', 'Diesel'] },
      ],
      s = [
        { name: 'model', type: 'select', options: [] },
        { name: 'cargoCost', type: 'number' },
        { name: 'distanceCost', type: 'number' },
      ];
    var d = class {
        constructor({ model: e, cargoCost: t, distanceCost: n }) {
          (this.model = e), (this.cargoCost = t), (this.distanceCost = n);
        }
      },
      i = n(2);
    var l = class {
      constructor({ model: e, producedYear: t, capacity: n, averageSpeed: a }) {
        (this.id = Object(i.v4)()),
          (this.model = e),
          (this.producedYear = t),
          (this.capacity = n),
          (this.averageSpeed = a);
      }
      showCapacityInPounds() {
        return 2.20462 * this.capacity;
      }
    };
    var u = class extends l {
      constructor({
        model: e,
        producedYear: t,
        capacity: n,
        averageSpeed: a,
        name: r,
        countOfTeam: o,
      }) {
        super({ model: e, producedYear: t, capacity: n, averageSpeed: a }),
          (this.name = r),
          (this.countOfTeam = o);
      }
      showAverageSpeed() {
        console.log(`${this.averageSpeed}nm`);
      }
    };
    var p = class extends l {
        constructor({
          model: e,
          producedYear: t,
          capacity: n,
          averageSpeed: a,
          licensePlate: r,
          typeOfGas: o,
        }) {
          super({ model: e, producedYear: t, capacity: n, averageSpeed: a }),
            (this.licensePlate = r),
            (this.typeOfGas = o);
        }
        showAverageSpeed() {
          alert(`${this.averageSpeed}km`);
        }
      },
      m = (e, t) => {
        const n = document.createElement('table');
        n.classList.add('table');
        const a = document.createElement('caption');
        a.textContent = e;
        const r = document.createElement('thead'),
          o = document.createElement('tbody');
        return (
          o.classList.add('tbody'),
          t.forEach(e => {
            const t = document.createElement('th');
            (t.textContent = e), r.appendChild(t);
          }),
          n.appendChild(a),
          n.appendChild(r),
          n.appendChild(o),
          e => {
            if (((o.innerHTML = ''), e))
              e.forEach(e => {
                const n = document.createElement('tr');
                t.forEach(t => {
                  const a = document.createElement('td');
                  a.classList.add('td'), (a.textContent = e[t]), n.appendChild(a);
                }),
                  o.appendChild(n);
              });
            else {
              const e = document.createElement('div');
              (e.textContent = 'No Data'), o.appendChild(e);
            }
            return n;
          }
        );
      };
    const f = document.getElementById('root'),
      v = document.createElement('div');
    (v.className = 'formsContainer'), f.appendChild(v);
    const y = [...o, { name: 'name', type: 'text' }, { name: 'countOfTeam', type: 'number' }],
      h = [...o, ...c],
      C = ['id', ...y.map(e => e.name)],
      g = ['id', ...h.map(e => e.name)],
      b = s.map(e => e.name),
      E = r(m('Ships List', C), 'ships'),
      S = r(m('Truck list', g), 'trucks'),
      x = r(m('Costs Of Delivery', b), 'costsOfDelivery'),
      O = (() => {
        const e = document.createElement('div');
        return (
          (e.className = 'costOfDeliveryContainer'),
          document.querySelector('.formsContainer').appendChild(e),
          t => {
            const n = a(
              'costsOfDelivery',
              d,
              (() => {
                const e = [
                  ...(JSON.parse(localStorage.getItem('ships')) || []),
                  ...(JSON.parse(localStorage.getItem('trucks')) || []),
                ].map(({ model: e }) => e);
                return [
                  { ...s.find(e => 'model' === e.name), options: e },
                  ...s.filter(e => 'model' !== e.name),
                ];
              })(),
              t,
            );
            (e.innerHTML = ''), e.appendChild(n);
          }
        );
      })(),
      w = a('ships', u, y, () => {
        E(), O(x);
      }),
      j = a('trucks', p, h, () => {
        S(), O(x);
      });
    v.appendChild(w), v.appendChild(j), O(), E(), S(), x();
  },
  function(e, t) {},
  ,
  ,
  ,
  ,
  function(e, t) {},
]);
