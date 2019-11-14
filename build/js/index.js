!(function(e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var a = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function(e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
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
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var a in e)
          n.d(
            r,
            a,
            function(t) {
              return e[t];
            }.bind(null, a),
          );
      return r;
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
      var r = new Uint8Array(16);
      e.exports = function() {
        return n(r), r;
      };
    } else {
      var a = new Array(16);
      e.exports = function() {
        for (var e, t = 0; t < 16; t++)
          0 == (3 & t) && (e = 4294967296 * Math.random()), (a[t] = (e >>> ((3 & t) << 3)) & 255);
        return a;
      };
    }
  },
  function(e, t) {
    for (var n = [], r = 0; r < 256; ++r) n[r] = (r + 256).toString(16).substr(1);
    e.exports = function(e, t) {
      var r = t || 0,
        a = n;
      return [
        a[e[r++]],
        a[e[r++]],
        a[e[r++]],
        a[e[r++]],
        '-',
        a[e[r++]],
        a[e[r++]],
        '-',
        a[e[r++]],
        a[e[r++]],
        '-',
        a[e[r++]],
        a[e[r++]],
        '-',
        a[e[r++]],
        a[e[r++]],
        a[e[r++]],
        a[e[r++]],
        a[e[r++]],
        a[e[r++]],
      ].join('');
    };
  },
  function(e, t, n) {
    var r = n(3),
      a = n(4),
      o = a;
    (o.v1 = r), (o.v4 = a), (e.exports = o);
  },
  function(e, t, n) {
    var r,
      a,
      o = n(0),
      c = n(1),
      s = 0,
      d = 0;
    e.exports = function(e, t, n) {
      var i = (t && n) || 0,
        l = t || [],
        u = (e = e || {}).node || r,
        p = void 0 !== e.clockseq ? e.clockseq : a;
      if (null == u || null == p) {
        var m = o();
        null == u && (u = r = [1 | m[0], m[1], m[2], m[3], m[4], m[5]]),
          null == p && (p = a = 16383 & ((m[6] << 8) | m[7]));
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
      (s = f), (d = v), (a = p);
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
    var r = n(0),
      a = n(1);
    e.exports = function(e, t, n) {
      var o = (t && n) || 0;
      'string' == typeof e && ((t = 'binary' === e ? new Array(16) : null), (e = null));
      var c = (e = e || {}).random || (e.rng || r)();
      if (((c[6] = (15 & c[6]) | 64), (c[8] = (63 & c[8]) | 128), t))
        for (var s = 0; s < 16; ++s) t[o + s] = c[s];
      return t || a(c);
    };
  },
  function(e, t, n) {
    'use strict';
    n.r(t);
    n(6), n(11);
    var r = (e, t, n, r) => {
        const a = document.createElement('div');
        a.classList.add('formRoot');
        const o = document.createElement('form'),
          c = document.createElement('button');
        return (
          (c.textContent = 'Save'),
          (c.type = 'submit'),
          o.addEventListener('submit', n => {
            n.preventDefault();
            const a = n.target.getElementsByClassName('formField-js'),
              o = {};
            Array.from(a).forEach(e => {
              (o[e.name] = e.value), (e.value = '');
            });
            const c = JSON.parse(localStorage.getItem(e)),
              s = new t(o),
              d = JSON.stringify(c ? [...c, s] : [s]);
            localStorage.setItem(e, d), r && r();
          }),
          n.forEach(({ name: e, type: t, options: n }) => {
            const r = document.createElement('div');
            r.classList.add('fieldRoot');
            const s = document.createElement('label');
            let d;
            switch (((s.textContent = e), t)) {
              case 'text':
              case 'number':
                (d = document.createElement('input')).setAttribute('name', e),
                  d.setAttribute('type', t);
                break;
              case 'select':
                (d = document.createElement('select')).setAttribute('name', e),
                  n.forEach(e => {
                    const t = document.createElement('option');
                    (t.value = e), (t.textContent = e), d.appendChild(t);
                  });
                break;
              default:
                d = null;
            }
            d.classList.add('formField-js'),
              (d.required = !0),
              s.appendChild(d),
              r.appendChild(s),
              o.appendChild(r),
              o.appendChild(c),
              a.appendChild(o);
          }),
          a
        );
      },
      a = (e, t, n) => {
        const r = document.getElementById('root'),
          a = document.createElement('div');
        return (
          (a.id = n),
          r.appendChild(a),
          () => {
            const n = JSON.parse(localStorage.getItem(t)),
              r = e(n);
            (a.innerHTML = ''), a.appendChild(r);
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
      constructor({ model: e, producedYear: t, capacity: n, averageSpeed: r }) {
        (this.id = Object(i.v4)()),
          (this.model = e),
          (this.producedYear = t),
          (this.capacity = n),
          (this.averageSpeed = r);
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
        averageSpeed: r,
        name: a,
        countOfTeam: o,
      }) {
        super({ model: e, producedYear: t, capacity: n, averageSpeed: r }),
          (this.name = a),
          (this.countOfTeam = o);
      }
      showAverageSpeed() {
        alert(`${this.averageSpeed}nm`);
      }
    };
    var p = class extends l {
        constructor({
          model: e,
          producedYear: t,
          capacity: n,
          averageSpeed: r,
          licensePlate: a,
          typeOfGas: o,
        }) {
          super({ model: e, producedYear: t, capacity: n, averageSpeed: r }),
            (this.licensePlate = a),
            (this.typeOfGas = o);
        }
        showAverageSpeed() {
          alert(`${this.averageSpeed}km`);
        }
      },
      m = (e, t) => {
        const n = document.createElement('table');
        n.classList.add('table');
        const r = document.createElement('caption');
        r.textContent = e;
        const a = document.createElement('thead'),
          o = document.createElement('tbody');
        return (
          o.classList.add('tbody'),
          t.forEach(e => {
            const t = document.createElement('th');
            (t.textContent = e), a.appendChild(t);
          }),
          n.appendChild(r),
          n.appendChild(a),
          n.appendChild(o),
          e => {
            if (((o.innerHTML = ''), e))
              e.forEach(e => {
                const n = document.createElement('tr');
                t.forEach(t => {
                  const r = document.createElement('td');
                  r.classList.add('td'), (r.textContent = e[t]), n.appendChild(r);
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
      E = a(m('Ships List', C), 'ships'),
      S = a(m('Truck list', g), 'trucks'),
      x = a(m('Costs Of Delivery', b), 'costsOfDelivery'),
      O = (() => {
        const e = document.createElement('div');
        return (
          (e.className = 'costOfDeliveryContainer'),
          document.querySelector('.formsContainer').appendChild(e),
          t => {
            const n = r(
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
      w = r('ships', u, y, () => {
        E(), O(x);
      }),
      j = r('trucks', p, h, () => {
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
