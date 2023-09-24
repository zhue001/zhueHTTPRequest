window.zhue = {}, 
/*
 * @function
 * @public
 * @param {string} e
 * @param {function} n
 * @param {any} t
 * @returns undefined
*/
zhue.request = function(e, n, t = false) {
  return new Promise(function(n) {
    zhue.request.request(e, {
      method: t ? "POST" : "GET",
      cache: !1,
      onProcessEnd: function(e) {
        n(e);
      },
      AllowedMIME: [ "application/json", "text/plain", "text/html" ],
      AllowedLanguage: [],
      body: t
    });
  }).then(function(e) {
    n(e);
  });
}, 
 /*
 * @function
 * @private
 * @param {string} e
 * @param {object} n
 * @returns undefined
*/
zhue.request.request = function(e, n) {
  const t = new XMLHttpRequest();
  t.open(n.method, e, !0), t.setRequestHeader("Cache-Control", n.cache ? "default" : "no-cache"), 
  t.onreadystatechange = function() {
    if (4 === t.readyState) if (200 === t.status) {
      const e = t.getResponseHeader("Content-Type"), o = t.getResponseHeader("Content-Language"), s = n.AllowedMIME || [], u = n.AllowedLanguage || [];
      (0 === s.length || s.includes(e)) && (0 === u.length || u.includes(o)) && n.onProcessEnd(t.responseText);
    } else n.onProcessEnd(!1);
  }, t.send(n.body);
}
