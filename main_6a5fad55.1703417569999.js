(() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 7212:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 4820:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 4655:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 7885:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 6755:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 6593:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

  // EXTERNAL MODULE: ./node_modules/react/index.js
  var react = __webpack_require__(7294);
  // EXTERNAL MODULE: ./node_modules/react-dom/client.js
  var client = __webpack_require__(745);
  // EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js
  var dist = __webpack_require__(9655);
  // EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
  var react_router_dist = __webpack_require__(9250);
  // EXTERNAL MODULE: ./node_modules/@ant-design/cssinjs/es/index.js + 27 modules
  var es = __webpack_require__(5990);
  // EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
  var es_array_map = __webpack_require__(1249);
  // EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
  var es_array_includes = __webpack_require__(6699);
  // EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
  var es_string_includes = __webpack_require__(2023);
  // EXTERNAL MODULE: ./node_modules/@wagmi/core/dist/chunk-GISSYJN5.js + 5 modules
  var chunk_GISSYJN5 = __webpack_require__(1841);
  // EXTERNAL MODULE: ./node_modules/@wagmi/core/dist/providers/public.js + 1 modules
  var providers_public = __webpack_require__(9528);
  // EXTERNAL MODULE: ./node_modules/lodash/memoize.js
  var memoize = __webpack_require__(8306);
  var memoize_default = /*#__PURE__*/__webpack_require__.n(memoize);
  // EXTERNAL MODULE: ./node_modules/@wagmi/chains/dist/index.mjs
  var chains_dist = __webpack_require__(1407);
  ;// CONCATENATED MODULE: ./src/utils/wagmi.ts
  var _configureChains = (0,chunk_GISSYJN5/* configureChains */.QB)([chains_dist/* bsc */.eG
    //   bscTestnet,
    ], [(0,providers_public/* publicProvider */.I)()]
    // [alchemyProvider({ apiKey: AlchemyApiKey }), publicProvider()],
    ),
    provider = _configureChains.provider,
    chains = _configureChains.chains;

  var CHAIN_IDS = chains.map(function (c) {
    return c.id;
  });
  var isChainSupported = memoize_default()(function (chainId) {
    return CHAIN_IDS.includes(chainId);
  });
  // EXTERNAL MODULE: ./node_modules/wagmi/dist/index.js + 22 modules
  var wagmi_dist = __webpack_require__(2724);
  // EXTERNAL MODULE: ./node_modules/@wagmi/connectors/dist/chunk-2VZS2JHJ.js
  var chunk_2VZS2JHJ = __webpack_require__(6480);
  // EXTERNAL MODULE: ./node_modules/@wagmi/connectors/dist/metaMask.js
  var metaMask = __webpack_require__(5078);
  // EXTERNAL MODULE: ./node_modules/i18next/dist/esm/i18next.js
  var i18next = __webpack_require__(6609);
  // EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/index.js + 15 modules
  var dist_es = __webpack_require__(1072);
  ;// CONCATENATED MODULE: ./i18n.ts



  const resources = {
    en: {
      translation: __webpack_require__(4130),
    },
    zhCN: {
      translation: __webpack_require__(6361),
    },
  }
  i18next/* default.use */.ZP.use(dist_es/* initReactI18next */.Db).init({
    resources,
    // fallbackLng: 'en',
    lng: "en",
    // debug: true,
    // interpolation: {
    //   escapeValue: false,
    // },
  })

  /* harmony default export */ const i18n_0 = ((/* unused pure expression or super */ null && (i18n)));

  // EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
  var es_array_slice = __webpack_require__(7042);
  // EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
  var styled_components_browser_esm = __webpack_require__(5286);
  // EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
  var es_array_iterator = __webpack_require__(6992);
  // EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
  var es_object_to_string = __webpack_require__(1539);
  // EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
  var web_dom_collections_iterator = __webpack_require__(3948);
  // EXTERNAL MODULE: ./node_modules/core-js/modules/web.url.js
  var web_url = __webpack_require__(285);
  // EXTERNAL MODULE: ./node_modules/core-js/modules/web.url-search-params.js
  var web_url_search_params = __webpack_require__(1637);
  // EXTERNAL MODULE: ./node_modules/jotai/esm/index.mjs + 1 modules
  var esm = __webpack_require__(3582);
  ;// CONCATENATED MODULE: ./src/hook/useSessionChainId.ts

var sessionChainIdAtom = (0,esm/* atom */.cn)(0);
var useSessionChainId_useSessionChainId = function useSessionChainId() {
  return useAtom(sessionChainIdAtom);
};








// import { useRouter } from 'next/router'


function useConnectWallet() {
  var _useConnect = (0,wagmi_dist.$4)({
      connector: new chunk_2VZS2JHJ._()
    }),
    connect = _useConnect.connect;
  return connect;
}
function useGetOwnAddress() {
  var _useAccount = (0,wagmi_dist/* useAccount */.mA)(),
    address = _useAccount.address,
    isConnected = _useAccount.isConnected;
  return {
    address,
    isConnected
  };
}
var queryChainIdAtom = (0,esm/* atom */.cn)(-1);
queryChainIdAtom.onMount = function (set) {
  var params = new URL(window.location.href).searchParams;
  var c = params.get('chainId');
  if (isChainSupported(+c)) {
    set(+c);
  } else {
    set(0);
  }
};
function useLocalNetworkChain() {
  var _useSessionChainId = useSessionChainId(),
    sessionChainId = _useSessionChainId[0];
  var queryChainId = useAtomValue(queryChainIdAtom);
  console.log('queryChainId==>', queryChainId);

  // const { query } = useRouter()

  // const chainId = +(sessionChainId || query.chainId || queryChainId)

  // if (isChainSupported(chainId)) {
  //   return chainId
  // }

  // return undefined
}
  ;// CONCATENATED MODULE: ./public/images/logo.png
  const logo_namespaceObject = "data:image/png;base64,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";
  ;// CONCATENATED MODULE: ./public/images/lanu.png
  const lanu_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAhBJREFUOE+t1EuIz1EUB/DPsSIbysIjYWEleaUpKVl45lWSsjHlsRCRLCxsTCnPmgVKRE1SHguPkkJ5pDwHTbOSIgsrQ7FAcnX+3f/0H40N7ub3v+ee+/1/7znf7wm/rVJKYDnWYC7GIWPvcQ8XcC0iSuvVTOhfpZTpOFEvDcd3PENemoWh+FLB2yOit3m5H6iUsgxHsQGvcAszsKkm5x+8wAJMxmlsi4ired4Aqkwe4CZ2ox19EXGwlLKjkRjRWUrZhVE4hcNYmM+PiO6oNXmEDozHRkzD9cpgamXUU+NLkL+T0Rvsw8wEWpHPiYiVld0IPMUWTMDSCpTAb3EcsyPiY82/nAwT6CzORUQm5jPnYWtEZNdy3/+0ur+IYxFxp+6T4foEeo0pEfG1HqxFW0Ts/APQETyOiPP1PDvZk0B9tT7NTrZhJG7UQDLMdbd+F+MTHrYoZ28CpS72tAT/Bqgjgd6lLv7xab3/q9jtCbQqBRgR+c0uZX2eVIVn+1MWKdxsc7I/OUj7uxJoCLqrosdicyZWlWc8xZnrZbXMopqfgKmrAxlvWiQ9lRZJbaRF1uFDRBwaxCKj0YX9mI85EfG81bSp8M76pNTWbeQ0aDVtskp/TaoW2T7AtM3Wl1KS2ZnqoRwj3+oYyZQcI8PwGROrrXLENNaAeVSLnTXLwq+u1MfgR51R93EJVyLiZ4v2/AJdx/mDON2/7AAAAABJRU5ErkJggg==";
  ;// CONCATENATED MODULE: ./public/images/lanu-m.png
  const lanu_m_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAAXNSR0IArs4c6QAABFBJREFUSEuNlmmo1lUQh59pX6igAtv3BSIqqIgWqA+2UJpK2YahkG0EaWZpmZllRWrZBi1Em1bYRju0UB+CLG2DgrCwfY8iKypbnHhe5i//+9773tuBy33vuec9c2bmN89MMMjKzA2AYcBBwLHAgcBOwIbAH8CnwJvAs8BS4LuIcH/AFb3+kZn7A6eXkbWArYC/gZeAw4FXgOHA+sC3QJbRRRHhA/qtfsYyc13gfOAC4BtgDrALcBFwFvA58DBwArAzcCcwH1gBXAZsDSwAbo4IH7dm9TGWmZvWF8bXhZcDnnkLuAu4rgw/BRxXYfQRZwMHAKuBK4GTgfv9HBG/NNbWGCuPrgbGATOBeyJidWbqmXtHR8TyzNwD6BiLiBWZuTvwPPBQRMzITEM+AbgKeACY0XjYNnYhoDGXyTYU7wDPAa8DE8t4tzEvvwM4FDgG2AeYAhxSd82MiHl+7hgrMTwJPAY8U57tCawHbALcCjwO/ABsD9xW+fsa2AIYU3n+FfgHWA5cYzSAscDoiFgWJW9zcTBwVET8nJlKW7n7QvffLTW6r4AUgeJRAEpdNe5XETAiSyyBzNwMeKH2p2tsR+BFYGpEmIvOqkfcCGwJnANYcxrarcI2EfikDP4J3A78CExu11pmjqyUDNfYScAlwIiI+KplbPNS1KsRoefNI/rkrLWvKo+wNiPip9b+NsDTwFyN3Qf8Zcy7XmSozOOcLo97GRsBzAKOjwhD3DzO0N8kdTT2HrCoYzlCCjSHdihajIsI1TmUZ6LsQakSEZ+1zitCvR6vMeN8PfBoc6B+b1thlBrSoVmy0fycCXzR2t+1aCIQvuy660Rgmsb+Bb4HVnYdUAx654WGuVmWw3a138aR+5aFOOuDKUAyDWs8k23yrr288N5CUbdn8lA1enGz9Mzilh7dnllrHc/M2UJgXlfOLAkJPzYirLOhcrZvpaJXziY0alwFTBpAjdbdrIgQWUMZs9/NBkZFhGRpzvdR4ymllpFdh5o6ezkibvgfxiYDRw5SZ/P1THVJkCkRYfG1XyRBZON51Z0bgjQ5+7hFkFuA3wYgiPXnPR2C6KaEkIWycWW1G+tmKnAY8EbxUFXZmRs2qlL7lWy0n9kdFNvSiFhVbLT9LAMubqjvQWmxGHiiqL83sBGwcTVOqW8urD+pb8OUFOJodHWB3wF/PqgOr1ficIxgaPczq9yGZ7d9vxCjR4rkNS8bop8ZgVE1FNkb96qMKLAOW7s79bU15FwK3G0pZKZ96dTq1B/26NS2kcURMT0zvfOM6mdicFq/Tq3lmkGcO5yq5NwVwDrA21Wwc3vMIOcCTmOSQxifViPB7AFnkJYKVdykmq7MkTOIdFAsclLIPtI1XVkaH9WwZA6l/IJBp6s2qzJTNTZzo/xUGBa/VLFvOTdaVzZV8bR2zSsLHQG60Nf5s+eQWmG1LJyIHQ0c3ZqJWO81LBttPxJmyVAT8X/Q1OrUW8CXvwAAAABJRU5ErkJggg==";
  ;// CONCATENATED MODULE: ./public/images/feiji.png
  const feiji_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAcCAYAAAAEN20fAAAAAXNSR0IArs4c6QAAAuJJREFUWEfFl1mojVEUx39/U4YMUUKUB2WMNzI/mJIhD1KSIbOiFDdDQpkiJSLkQYa8KGVIKC8oJXkgL/JASikPIkPCX+u2z+3cr3vO991zDKu+p73W2r+91tpr7U/8B7HdH1iWvn7AIv0rDtsdgLnACmA60KZs76t/HcT2CGA5sAToVeHg5/4KiO1uwMIEMLpA1Nf/MRDb4WtiCv18oHMBgJLKmLpBbEexLU2nH1Rh82/AXiDqZGdG5zvQtSYQ2+2B2WnzmUDbKqe/C6wBpgEnMkUaZo8ktS4itocAK4HFQO+c0L8HNkk6b3s3sKuC/nFJG3IjYrsrsCCdflzBvJ8LCOADcBJYVcVusaSLFUFsj0+FFxBdCgK8BNZKumu7E3AJmJdjO1jSi2YgtvuksEfTGVxw81D7ARwC9kj6ZrsHcB2YkOMjItZTUuOVw/ZUYD0wC2jXCoBQfRihl/Q8+Yr2fQsYXsDPHUkzQk+2G9JpCtg1U/kIbAVOS/qVIIYCt4EBBZ3tk7SjBLIOOArElSwqV4ANkt6WDGyPBW5EqIs6AeZIChtKqQnjOamwIlRRaC3Jm0ihpGvli7YjpZer2FVi6yPpXRNIxmlAxHSMag+4GFQR+uPADkmfMvox0M600KjyAvNa0sCSUtU+Yjs6ZlT+Z0mPs55tbwf25e1YYf2ypGgNjZLb0FpykgCPRJ3UCBFmDZIO1wuyH9hWB0SYTpJ0v16QaFYx9GqVn0B3SZ/rBXkAxAioVZ5KGlVuXGuNRBcdVitF3DJJq/8ESDSyvmWOTgE3gbNV3qXl+66WFFe+SWqNyFegY/JyDNgYgyv9JsTEjSdjNRkp6VldILYDIEBCDkqKedMk6WrHQyh6TPkvQ0nnC9BNUhRs7RGxHSmJ1MTIz74/y4GmABcyKYz1e5ImZ8PV6tTYjtf5EElP8orVdjwnzwONoz7JAUkRrWbSapC8zbPr6TdjM7AlpXSipFdZvd9wGOJT4uD9owAAAABJRU5ErkJggg==";
  ;// CONCATENATED MODULE: ./public/images/github.png
  const github_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAdtJREFUOE+VlEuojlEUhp83xRADoaMMTqck1wHKBCkzHZcUhQnlkkyYuNTRIRNnYnAUSaTUKXLIROQyMTBwGEguEx2XlGtKKfVqsba2rz//b8/22u961lr7e78tWizbPcBOYCnQDXwHHgGXgZOSfjTT1AzYPgHsaFUgYy+BQUnHas0fkO3xwHVg0T8g9dGQpPUl8AtkewxwD1gIfAK+AV1tupoODEtaHboCijb3ZuJW4CxwGFgGjAAfgRnAJOCQpNu27wMLgH5JfbI9AXgPRFextkk61W482w+BuTFQFAjQwaxecnslXe0AdBNYnrrjAXoAzM/AE0kz20HyXucBkRvX8zxAcbkxXqyLktZ1AkrYKDANeB2gMNvYTL4iadV/gN4CU4B3AXpVferHkmZ1Akr3P0vtaIAuAWuq5BWSbrSD2R4GelM3EqAlwJ20QFRYDKwFbkn6XANtjwMmA9uBfdVZfzFkAKamL/YDW1K0S9JgXmxozwGbGt3GDzyxgOJThoPfSOqyHbDZ6eKnJdH2EeBAA9Qn6XdHWTG6OA3cBTYCXyV9aYxWNCV8TdLK2Pz1jNjeAFyoknskvaiK7QEGcn9e0uZy1uo9CnOeAebEkyLpQ6Pr3cBRSUN1tz8BNe+0fouYrLoAAAAASUVORK5CYII=";
  ;// CONCATENATED MODULE: ./public/images/twimg.png
  const twimg_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAASCAYAAAC9+TVUAAAAAXNSR0IArs4c6QAAAfFJREFUOE+NlE2ITmEYhq/LKFEmaTA08tOUsrCZlIVkrWyUbKRoigULzJhSCqXkZxRF+alRbKYpG8VOKdnYUpKSjP9paBQ2br3jnOmbmW8a7+act/O817mf57mf1yR3gJ3AV2AF/1a3eqt6b/pI0g8cAtaZZBXwBhgArgIHgH1Au/qpGSHJHuA2sFu9awlKchjoV+v9CDCmrp4KSdIFPAP61HPl+/ihCvQW+KJ2JVkJlP1EYBXTCnwHBtVd9dlGSFuBAHvVgSQngNPAMvVzBRkFRtTORoUTkCqoBzgPLFB/Jnk3Llc7kjwCtgIt6p8ZIQ1pfVM3JFkOvAceA1uATvX11DpNUlJBlgBF/n71epLSqdLubeqDZt2aBqlAvUCpfKs6luRlVfTN/w2pQE+AhVVaddF71QuzptPQ8qfApuJmdaj2ErBULV2cWDOl8xDYCFwEzgCL1dEkr4C56prZulMOHQc61OEkH4EfxRtJFgHFKz1q+cH4muqTMoiDwA71XlWbZUABHVX7kxwErgBtahmPSbZfDzwHTqknG+Um6QPO1vVI8gKYX6dVD9w84BdwX93erI1JyizNKe6tFAY4ol4qV0FLZa7fan2fTOMkaQc+AJeBa8CxMmfA2gK5CZT7oRirqJlxJekGblSqh4Ey7UN/AXsu3PLeYWGOAAAAAElFTkSuQmCC";
  ;// CONCATENATED MODULE: ./public/images/feiji-m.png
  const feiji_m_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA2CAYAAAB3Ep8CAAAAAXNSR0IArs4c6QAABXZJREFUaEPlm1eIZUUQhr9VzJjXB3NawYi6BsyYxTVnzDlnMSK65vAgBhQD5uwaEBRdURFR1AfFJxMGBFFRjCiuWfmGvsOZ2XtO9wn3nJnZgvuwezrV39Vdf1X1TGLOkbmBHYDtgD+B+4GPJs0B+k8BjgYOB5bO6PsbMHWiArAgsG9QfKuCTb5logGwcVD6QGDhBOueOREAmAwcChwFrJ2gdLbJjPEKwFzAjsAxwO7APCUV7zWfPt4AWAU4EjgCWK6i0tlu08YDAPMD+4SzvU0DSmeHmDyWAdggnOuDgUUbVtzhPgWmjDUAlgBUWL+97gCUzg75CHDQWADAC012ptJ7AfNWUHwWcBVwL3AecErCGGcCN3QJwIrhMtN9rZCw4LwmLwInAJ8B+wEPJXqFzYA32wZgvrDL7ra7Xmf+7wB38cGAzKnuKKBFxeRvYBFgVp0FxCbJfvc8q7Tn23NeVzT1s4HvA4iXAxeWGPQdYEPbDxKAxYLCmvjUEosravoxcDzwSmhkhHdH8BZlprgVOGkQAAiovlql9d368CbkL+Ba4Erg9zCgAc9jwK4VJpBMaUWNWYCszEH9rVxhQUVd3gCOA97LNPIYPQtsWnGuNYEP6gKgu5KHe7bl5SmXT5n1/gycH0z830zH5YEXgDXKDJZp+wvg8Rwas8odYMSl0kZgS1ZcRKzbE8BpwNejGjr3TGDZ2AAF318Gtu99TwVAl2GM7dk25h6UfAGcDDzTZ4Itwv+7e3XkGuCCFAAEZ8uw2xKMBerMGumrOd4EXAT82qetDFGC08QaHOvpIgCWCfkzd9t82qDl3XDJvZ0zkTH/7Q3eMR6fr/oBsDVwFrBLg5MVgSd/vziwN5lZP5kOXNLgDnw5Oo+gmUtP7wMOaHCi2FBeZCcCn+c0lODcHDh+bKwy358K/GS4jwAYRQ1fCmVGq9D2W+B04NGCvpInz/veFcaPddGtSqhGAHBjcDmxznW/3wWcA/xYMJCJDz2Al+8gZNsMjR4aXwvQxV0f/HrV5GLRYj8MpvxqRCMvp+eBdQaheSA+ulCJ0AgL6P1Deimz2xPYqQEeb/np6vD7I6LU6oHd1ckLxHB7H1hrdKM8IqS/FYQ9gN0qML7XQtQ2xLcjskkwe/P7g5S7A6cZMUcKE/RGloVpGf5WKljlT8C5wJ3AfwnaTAOkvU0QnNh0ep3bUi2gaDCTGz0w1ss0NDT1hv8mtpLw3dy+QAlwG2JOQtJV2gKKFueZFQwTFV5gqaI78n5oS8whWCucjXClHIEmF+l85u2M9NoUcwqb95uwTQDMHzwA7N+m5mEu3bw0fzZpCwAJzpMhE9yB/kOhfF/22RYAJjENtrqSVUPdoDML+AFYvCPtrR8slTd3WxaQwgkGhc9zIcTvO34bALjzWkBXYj7h0i4twEcNlqK7kp1DIrUzC7DOn5fuagMUYwxLaJ0BYAraCm4X8gmwWtHEbdwBZpRnRLQ3CfI6cEViaTsVzIdDfTK3fRsAWNYyq5snKu+jRvMH1hwkLE2V184AzHh1CoAvNixG9BMjyMOC8r3vskajREGpK9YO3+oaAJUXhNGiear8PzkL9NWHHL5qhdnIzwiwV03u7BLU/D0GWbkHOLZA+V5b84PeH6bMyoqeZ6NYpzbugMdHmbNZGR8npLLDhUKNwARKGRl+BNH1EXgpEwVa7DAXkKp8du2HhJSWgKSIgFnwKZQ2LMD3OOuHEtdlsQVFvuvTPRLZVFxel+FHEF1bgE9YzA43RYct5V0Xyuh5uhl7GAFmH1Z0dgnW3PTc7pa5TXX3ey9g5kkPE5U2jkB0ETUamJT1yauPHnti5cf4w0RtVMY7ACqoDr0/hpJT+MdQluOS5H9PxdEsmezb2wAAAABJRU5ErkJggg==";
  ;// CONCATENATED MODULE: ./public/images/github-m.png
  const github_m_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAlNJREFUOE+VlD1oFEEUx/9vB9zSXHHMDCd44AVE/Cw0YKMi2IlfCApqE8EPxEYbo5CQiI02FhEUEUUQAopRbETxo7GwMFqIGC0i8W7fJNFThM0J2TyZc1eWM3hxqpn33v/3/rtvdglzrGKx2BkEwVEAG4loCYCfAN4AuMvMlwHMtMqoNWCMuQTgyFwN0tgnAIPMfD5f8wdUKBQWhmH4EEDXPyD51BAz78kCGUgZY14AWAegLiIxEZXauFosIsPOuR2+rgkyxnibJ/1eRA46565bawdEZBOAERH5SkRLARQB9DHzU2PMSwBrAfQzcy+Vy+WORqMxBUA1yUSHoii60u7xrLWvRWSV762UKpK19oyIDGRCEdnmnLvfDmSMeQxgc9r8IhljXgFYkwrfMfOydhCfL5VKq5Mk8Voiog+kta4TUUcqvs3Mu+cDSt/tOIBFIlL1jvxlW5BavBdF0fb/AEV+VgCcd/Q5N+q3zLx8PiB/+5VSo2ntuHd0B8DOTDw7O7tlYmLiUTuYtXbYDyatG/GgDQCeAZgiolERWU9Eu8IwfDI2NvYtD6xUKmEcx1pEDovIqVyuv3khrbUeYP29CIKgR0S606JjzDyY7n3TGwD2t7idSZKk0ASloxwBUGPmkta6h4hWBEHQV6vV3mdCrfVZIjrdAupl5t+O/NJadxPRVQDPlVL74jj+Ua/Xv+dFuZos/ICZtzYn3lK4l4huZbEkSTonJyc/ZmdjzAkAF9LzTWY+kOX++h/5b296evoaEa1USnVVq9UvLa6Pi8g559xQ3sQveS7tJPV6xn4AAAAASUVORK5CYII=";
  ;// CONCATENATED MODULE: ./public/images/twimg-m.png
  const twimg_m_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAASCAYAAAC9+TVUAAAAAXNSR0IArs4c6QAAAk1JREFUOE+Nkz1oFFEUhc+ZXcSAFsKu7+6sUYlBdAvB3ioWEmOaYCEWimChoI2FGvxFUQNioZUWgtqkEPEHojbaiBYxWNiIaAp1s+9OJi6iNmLmPZkwCWOya3zFwMxcvnfuPedSRIYBDAD4DKAKYGmxWOys1+sTaHMqlcoR7/0VkjVr7TuWy+XuQqHwgeQp59wDkiMAOlR1ZSuGMaaH5DOSB6y1N9Iapg9jzCDJ06raUavVljSbzV/e+wtRFJ3Mg0qlUlgsFidIDllrB2f/zUDSIyIxgFFV7RORvQBukVxrrf2Uq/EAnqvq1jx8DlKtVlclSfKFZK+19qmIvPbed0dRtCK75K33vnP2vSUkKzwD4KyqpvCiiPwGsM97LyQvJUmyPI7jn/NnNackJ/mr934siqJtxph+ko8A+CAINjYajfethr0AEobhaudcOocdqjoiIqMA1qiqaWf5Akjm1vFUftZWICIJgNS98/+lZJ4TT1R1uzFmF8nh6enp6tTUVGPRmWQDfghgA4D1APpU9bGIvALQpaqyKERErgE4rKoFY8whklezttIsee/9iSiKLv7L4j0AbgdBsKXRaLzMVH0HMKaqPSKyE8DdJEkqcRzrgsSGYbjZOfeG5EFr7fXZAmNMF8lxkgPW2vsi8gLAOlUN/4KUy+VlhULhB8mb1tr983sWkSEAx/JtATiqqpdnFjBbuG8APqrqpnZZEJG0ZiIIgl7nXLpb55xz3ZOTk+MUkTve+/5WO5EH5kLYBFBP3SN5z1q7u2XY2qlp9/0PpdkFIqFOWxUAAAAASUVORK5CYII=";
  ;// CONCATENATED MODULE: ./src/components/header/index.jsx

var _templateObject;
function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/self-closing-comp */



var CustomStyle = styled_components_browser_esm/* default.div */.ZP.div(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n\t.header_ConfirmStyled {\n\t\twidth: 100vw;\n\t\theight: 100vh;\n\t\tbackground: rgba(13, 17, 28, 0.6);\n\t\tborder-radius: 0px 0px 0px 0px;\n\t\tposition: fixed;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tz-index: 101;\n\t}\n\n\t.header_ConfirmContent {\n\t\tposition: relative;\n\t\twidth: 559px;\n\t\theight: 380px;\n\t\tmargin: auto;\n\t\tpadding: 20px 0px;\n\t\tbackground: #fff;\n\t\tborder-radius: 16px;\n\t\tbottom: -50%;\n\t\tmargin-top: -190px;\n\t}\n\n\t.header_ConfirmFlex {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\tborder-bottom: 1px solid #E7E3EB;\n\t\tpadding: 0 40px 15px;\n\t\tmargin-bottom: 15px;\n\t}\n\n\t.closeIntImg{\n\t\tmargin-top: -3px;\n\t\tcursor: pointer;\n\t}\n\n\t.header_ConfirmTitle {\n\t\tfont-size: 18px;\n\t\tfont-weight: 500;\n\t\tcolor: #01142A;\n\t}\n\n\t.header_ConfirmDesComt {\n\t\tpadding: 0 40px;\n\t\tp {\n\t\t\tfont-size: 17px;\n\t\t\tfont-weight: 500;\n\t\t\tcolor: #01142A;\n\t\t\tmargin-bottom: 50px;\n\t\t}\n\t\tspan {\n\t\t\tdisplay: block;\n\t\t\tfont-size: 16px;\n\t\t\tfont-weight: 500;\n\t\t\tcolor: #01142A;\n\t\t\ttext-align: center;\n\t\t\tmargin-bottom: 5px;\n\t\t}\n\t\tem {\n\t\t\tdisplay: block;\n\t\t\tfont-size: 18px;\n\t\t\tfont-weight: bold;\n\t\t\tcolor: #14D9A3;\n\t\t\ttext-align: center;\n\t\t\tmargin-bottom: 5px;\n\t\t}\n\t}\n\n\t@media (max-width: 750px) {\n\t\t.header_ConfirmContent {\n\t\t\twidth: 94%;\n\t\t}\n\t\t.header_ConfirmFlex {\n\t\t\tpadding: 0px 20px 15px;\n\t\t}\n\t\t.header_ConfirmDesComt {\n\t\t\tpadding: 0 20px;\n\t\t}\n\t}\n"])));
function Header() {
  var _i18n$language, _i18n$language2, _i18n$language3, _i18n$language4;
  var _useTranslation = (0,dist_es/* useTranslation */.$G)(),
    i18n = _useTranslation.i18n,
    t = _useTranslation.t;
  (0,react.useEffect)(function () {
    var language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  var _useNetwork = (0,wagmi_dist/* useNetwork */.LN)(),
    chain = _useNetwork.chain;
  var _useGetOwnAddress = useGetOwnAddress(),
    address = _useGetOwnAddress.address,
    isConnected = _useGetOwnAddress.isConnected;
  var connectWallet = useConnectWallet();
  var _useState = (0,react.useState)(false),
    chainShow = _useState[0],
    setChainShow = _useState[1];
  var _useState2 = (0,react.useState)(false),
    menuMShow = _useState2[0],
    setMenuMShow = _useState2[1];
  var _useState3 = (0,react.useState)(false),
    menuLanuShow = _useState3[0],
    setMenuLanuShow = _useState3[1];
  return react.createElement(react.Fragment, null,
  react.createElement("div", 
  {
    id: "sticky-header",
    className: "cryptobit_nav_manu"
  }, 
  react.createElement("div", {
    className: "container"
  }, 
  react.createElement("div", {
      className: "nav_container"
    },
    react.createElement("div", null,
      react.createElement("nav", {
        className: "cryptobit_menu"
    }, 
    react.createElement("ul", {
        className: "nav_scroll"
      }, 
      react.createElement("li", null, 
        react.createElement(dist/* NavLink */.OL, {
          to: "/mint"
        }, 
        t(''))),/*Trong ngoặc để tên header MINT */
    ),
    react.createElement("div", {
        className: "nav_ico"
      },
      /*#__PURE__*, ((_i18n$language = i18n.language) == null ? void 0 : _i18n$language.toUpperCase()) === 'EN' && 'EN', ((_i18n$language2 = i18n.language) == null ? void 0 : _i18n$language2.toUpperCase()) === 'ZHCN' && '简体中文', /*#__PURE__*/
      react.createElement("div", {
    className: "sub-menu-lang"
  }, /*#__PURE__*/react.createElement("div", {
    className: "sub-menu"
  }, /*#__PURE__*/react.createElement("span", {
    onClick: function onClick() {
      localStorage.setItem('language', 'en');
      i18n.changeLanguage('en');
    }
  }, "English"), /*#__PURE__*/react.createElement("span", {
    onClick: function onClick() {
      localStorage.setItem('language', 'zhCN');
      i18n.changeLanguage('zhCN');
    }
  }, "\u7B80\u4F53\u4E2D\u6587")))), /*#__PURE__*/react.createElement("div", {
    className: "header-button"
  }, isConnected ? /*#__PURE__*/react.createElement("em", null, address ? address.substring(0, 6) + "..." + address.substr(-4) : '') : /*#__PURE__*/react.createElement("em", {
    
  },))))))), /*#__PURE__*/react.createElement("div", {
    className: "d-md-block d-lg-none"
  }, /*#__PURE__*/react.createElement("div", {
    className: "mean_conter"
  }, /*#__PURE__*/react.createElement("div", {
    className: "menu_logo"
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/"
  }, /*#__PURE__*/react.createElement("img", {
    src: logo_namespaceObject,
    alt: "",
    title: "H2"
  }))), /*#__PURE__*/react.createElement("div", {
    className: "mobile-right"
  }, isConnected ? /*#__PURE__*/react.createElement("div", {
    className: "header-switch-m"
  }, /*#__PURE__*/react.createElement("div", {
    className: "header-button chain-name chain-m"
  }, /*#__PURE__*/react.createElement("em", null, address ? address.substring(0, 6) + "..." + address.substr(-4) : ''))) : /*#__PURE__*/react.createElement("div", {
    className: "header-switch-m"
  }, /*#__PURE__*/react.createElement("div", {
    className: "header-button chain-name chain-m"
  }, /*#__PURE__*/react.createElement("em", {
    onClick: function onClick() {
      
    }
  }, t('Connect Wallet')))), /*#__PURE__*/react.createElement("div", {
    className: "mobile-menu mean-container mean-conter"
  }, /*#__PURE__*/react.createElement("div", {
    className: "mean-bar",
    onClick: function onClick() {
      setMenuMShow(!menuMShow);
    }
  }, !menuMShow ? /*#__PURE__*/react.createElement("a", {
    className: "meanmenu-reveal"
  }, /*#__PURE__*/react.createElement("span", null), /*#__PURE__*/react.createElement("span", null), /*#__PURE__*/react.createElement("span", null)) : /*#__PURE__*/react.createElement("a", {
    className: "meanmenu-reveal meanclose"
  }, "X"))))), menuMShow && /*#__PURE__*/react.createElement("div", {
    className: "menu_nav"
  }, /*#__PURE__*/react.createElement("span", {
    onClick: function onClick() {
      setMenuMShow(!menuMShow);
    }
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/mint"
  }, t('/mint'))), /*#__PURE__*/react.createElement("span", {
    onClick: function onClick() {
      setMenuMShow(!menuMShow);
    }
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/farms"
  }, t('INCENTIVES'))), /*#__PURE__*/react.createElement("span", {
    onClick: function onClick() {
      setMenuMShow(!menuMShow);
    }
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/mint"
  }, t('MINT'))), /*#__PURE__*/react.createElement("span", {
    onClick: function onClick() {
      setMenuMShow(!menuMShow);
    }
  }, i18n.language === 'en' ? /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "https://docs.aleox.io/",
    target: "_blank",
    className: "first"
  }, ) : /*#__PURE__*/react.createElement(dist/* NavLink */.OL  )), /*#__PURE__*/react.createElement("span", {
    className: "menu_m_lan"
  }, /*#__PURE__*/react.createElement("div", {
    onClick: function onClick() {
      setMenuLanuShow(!menuLanuShow);
    }
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, null, /*#__PURE__*/react.createElement("img", {
    src: lanu_m_namespaceObject,
    alt: "",
    className: "nav_menu_lan"
  }), ((_i18n$language3 = i18n.language) == null ? void 0 : _i18n$language3.toUpperCase()) === 'EN' && 'EN', ((_i18n$language4 = i18n.language) == null ? void 0 : _i18n$language4.toUpperCase()) === 'ZHCN' && '简体中文'), /*#__PURE__*/react.createElement("em", {
    className: "menu_flex_em"
  }, "+")), menuLanuShow && /*#__PURE__*/react.createElement("div", {
    className: "menu_m_xzol",
    onClick: function onClick() {
      setMenuLanuShow(!menuLanuShow);
      setMenuMShow(!menuMShow);
    }
  }, /*#__PURE__*/react.createElement("i", {
    onClick: function onClick() {
      localStorage.setItem('language', 'en');
      i18n.changeLanguage('en');
    }
  }, "English"), /*#__PURE__*/react.createElement("i", {
    onClick: function onClick() {
      localStorage.setItem('language', 'zhCN');
      i18n.changeLanguage('zhCN');
    }
  }, "\u7B80\u4F53\u4E2D\u6587"))), /*#__PURE__*/react.createElement("span", {
    className: "menu_tuite",
    onClick: function onClick() {
      setMenuMShow(!menuMShow);
    }
  }, /*#__PURE__*/react.createElement("a", {
    href: "https://t.me/AleoXEn",
    target: "_blank"
  }, /*#__PURE__*/react.createElement("img", {
    src: feiji_m_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("a", null, /*#__PURE__*/react.createElement("img", {
    src: github_m_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("a", null, /*#__PURE__*/react.createElement("img", {
    src: twimg_m_namespaceObject,
    alt: ""
  }))))));
}
/* harmony default export */ const header = (Header);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(4916);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__(4723);
;// CONCATENATED MODULE: ./src/hook/_isMobile.ts


function _isMobile() {
  var flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
  return flag;
}
;// CONCATENATED MODULE: ./public/images/comm1_ico1.png
const comm1_ico1_namespaceObject = "data:image/png;base64,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";
;// CONCATENATED MODULE: ./public/images/comm1_ico2.png
const comm1_ico2_namespaceObject = "data:image/png;base64,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";
;// CONCATENATED MODULE: ./public/images/comm1_ico3.png
const comm1_ico3_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF0AAABdCAYAAADHcWrDAAAAAXNSR0IArs4c6QAAFYJJREFUeF7tXQl0VEXW/ur1mn1fyEIiAQQCEWggJCxh00FAxAWPOzOjIC4jvw4iKDooiHP8HRUVcER+8TiKCCqMosyIEgwQQMISQoKAEJKQhexk6fTyXv2n6qVDlk56SboTNHV4B/TVdr93+6tbt25VEfQmtyNA3N5ib4Po8aAnJc0NpEp9LIgQBYEGSpSEEEIUlm9HKRUFQkshkQpQqYCYPXLT07dW9ORv26NAHz5pjr+aSONAaRKhJBHAMABhTgBYAuAkJfQQCEk3UmH/8dTtVU7U45Ii3Q564viZOokIswmhEwAyubWUlFJIksQf9m/2tE6EELBHEAT+sH+3rQepgkDTINIdh/btzHAJmnZW2i2g6ybc3kcpmOZTiqkAJjajCpjNIkTRzP+WJPa0BdmWbILAPoACSqUCCoWS/93qQ/wE0B9Fqn4/I+3LIlv1dfV7t4I+dvytiRKRFoHgHosgTINNJhNMJga0uavla6pPqVRCpWKPiv8amhLFZoEKaw7u23HIZY23qtgtoI+dMGukCDxHgDss7TOgDUaTS4FuD0T2ATRqFf8ATb8y4AuB0lfdQT0uBT0paa6HWalfA2A+E47xsdFogtFo5Bzd3YlpvFqthlqtaqIfSulGlej5l/T0rXpX9c9loI+eMGs+AZZQoD/rPAO6ocFgdSB0lXD21sv4XqPRQKNR8yIEOEeB135O+2aDvXU4kq/LQddNm+YnGDTvAbibdYTxtF5v6BGabQsYpvkeHhow+mlMn0kaw8KM3burbZV15H2Xgj5qws3jQAWmHYMZlTDNZtx9rSXG9VqtxkI5OZSSBRn7v9nXVXJ0GeijJsxYD4qFsnaLaGhocMrc6yrBOlsPMzu1Wi03Nxs5570jad8+2tl6G+mr89WMSp65EYT+mdVkMBphMBg7X2kPqYHxvEYtcz0IPjyy71suZ2dSpzVdlzzjUxDK7W7G3a60tTsjaGfKMo5nXM8SJfjs6L7vmuYZztTbKdB1yTM+B6FzGX8zwEVRdKYP10QZhULBgeczW0q2Zhz49i5nO+406Lqk6ZtAMI8BXn+NWCfOgmQpx6wbzybg8VFG+q4/OlOnU6DrkqZ/QAkekimlAaLY/RMdZ4R3poxCwcxKrUzxFBsz0nc97Gg9DoOuS/rDegrZStE3GH/TlNIemBx4rczxBHgvI/0/Dlk1DoE+PHn6aELpYdYYs1CYafh7TcyUtMxgBYlMyDi0y2473m7Qh0ya5K1pUKcC0JnMZhiNrvMIXisfUs29lnz2eppqjUnHU1PtWiixG/QRY2/czKb2zL/NaKU3yQhoNSowugHolmMHd3PXh61kF+g3JN60gBD6T7Zo09Bg7JFOK1uCuuo9MyG1WjW4JUnJIycO/fd9W23ZBF2nu8VTVOgzQRDHKMX8O7JUbIFnea9UMBcxp5kLRg9zQnZqam1HZW2CPnzM1A2UkIeZ/9tg6OXx9sBkoHOaIWTjiYPfd2hGdgj6sMTJOoEKR1hDDQZTL610oL6cZjTySpREpFEnD+1pd/G7Q9ATRk/dBkLvEM1sHfP3ax7aSzMqlQIKpcDcBF9k/vzDne2Vaxf0BN3kRAjk4FUtt7fp328+NphatB0SHZuZscfqYne7oA8bPfkTAPeazRLY05vsQ0CpFMAeAJ+e/HnPfdZKWQX9hqQpkZJJKmAFDEYzrMT32NeDLsol+WhQP6Yv9DdEoWFQJEwRQZC8vAGqhFBjhupSNbSnC+GReQGeR05DqHXZmrJNiZi2a2RLBmYqRuRkpLWJq7EK+tCRk/5GCFaIEoWpG6f69WMiUH3nUNSm9OcAW39Ubf6/976T8NueCs+j2TZBckUGFQtyEghT1hVZR1Nfat2GddBHpewFxUQ2eDoTYdVZQcxhnij9ayJqp/TjgBKTAM/0S/A8VABtdglUhVUQahq4u0ny0cLUJwgNg2JQP2oI6kcNA1VoeDnvn44hZN3HUJa6N56ULfWxQRUEP2Ud2ZtiE/ShIyaNApF+ZpRicKPFIolmCAolam6OQemziZB8PCFcEeH/aTb8tmVDUWkfZYh+3qieMwVVt0+H5OXLP07IO5vg86Pd/qjO6gwvr1GxUD7mHRBGZx1L5Wa3JbXR9HjdxJWgWC6K1C2zz/JFwxD09kmIRgMMujAUfjgdIEp478pHyOuHoahoC7Z+ZBQurb0PkDToP+5lqyCJAb4ofewB1E4az7Xed+cPCF3DIkPck9gsVaHgq0wrTx3b+2KHoA8ZMSGVACkmM4uUdTx401GRzp24C75fXEDQi/t50bqbYkEDvOH3xZl2q9LrGOj3y6Ant6HMFuWqb7kRpU/MB4gKvjt3I3TNWke76FR+TjGyFZN66lhai2jkFpo+fPgkfyMxV7KcRqN7zEQGOiDAb2MWAt88ClA2kxY41bSXHAGd1VE7PhHFy5dw4MNXvw7vvT85BaSjhdRqOVBVTZUBx49fdfu2AH3w8AkzCeg3EmVWi3tAr/jLMFQ+PJRxH/zXZyJg7VFZNhZv3gp4yUeNqnuGoy7lehjjorimg2qgLKyHx9Fc+Hx3GB7Hf7GKTfXsGSh7/FEIV+oRvfBxKMvLHMXQ4fxM0wVCQEFm5RxP22mV04cMH7eaAssYn7PHHan4rTGomxoDiCy2RAH/9zMR8M7PV4EXZI03XB+Iwg9mQfL0kcG2PPTqvz2O5SJi0f+22+2S55egduIkeO0/iPCXrY8FXSkz43T2EODV7OP7n7MK+uCEcd+D0GlmMwXTdlcnfVIICjeM51ZK0OvZKFuWBKpSwufzMwhetZdTDbO7BIWAi9/dCXN4IAdbuAJ47bkIZWEtJG9v1I0fAXNoOILf/gp+275vt9uivz/yNn4AydsXEUuXwuNY46/KRYIyLVcq+WC6Oydz/41WQR+UkFzM9vgwanE95EDJGqblkQhYexoB63OgT45A8T+mgmo18Pr+IkKf2QVIFFSrROHm2TDGhXHQo+75HOozl1tApR8xEKqiCiiLO6aNyvvvQ+UD8+C1/wDCXl7hIrgbf6iAZTAtOZ15ILwN6PHxSYFmBcrZC5PJ9Xwu+aiQe2gmiBHoO/k7KCoNvE8NN4Si+J3p3E7XHi5C+MLtIKIEyU+D4rUzoSwzI+zpJnp0GDTRzw95mz8DVagRe8etEGo7XG9wuP7WBVQqeTBVigg6dSqdz9KaBtLBCWNHShQZjFXMbuDzuukRKHljDDxTLyP8sQMt+mocEIiidbMgBvtAk1OOsEe/5JMj6qFC+V8nImQ1Wx93PhWvXIn6MckIXb0K3nv3OF+RHSWVjNMJIBDocjIPcj5rAn3gsDFzAPIVA90dg2jZ8wm4cl8cgl7JhN8nv7bpvinKF8Xr58AUGQBlYR3CntwG9bkKUJUC+qTr4LXvvB0iW89y5dY5KHvsSfj+eweC17KNIq5LfCDlKNPbzpw8vL0l6PFj54PQ99mEiDm6XJ2KPp2IhhHB6HPfXmiPclZrk8RgLxSvvx3GuFAIVSaEL9oCTWYxV5vq+8ZCk10C7dELDne1IT4eRW++C012DiL+5zGHyztSgDm+2EQJlCw4c+og39nRpOkDho55BsBrbCuQO2aieQdmQAzQou+4nVBUyHxuLUl+WhS/fTsMQ6NA6iWELd4Kj4O5vOcVT0yHIb4fAjbshvboWbuxEP38kbf1KyiqatD3rtl2l3Mmo7y9kpdccjbrMLdnm0DvP2T0UkLwqrtAz826FVSpROywr0BsDNyMy0v+cTv0iXEgJiBk+Vfw2p3DJal+cDIqFt4G3y37EbRmi124sHZzv9vN242dMcWuMs5msoBOKZady/75721AB/AqYxZ3aPrFRtBj7ACdM6JKgbJVs1E3bSggEgS/9G/47DzOsai5NRllix+E79Y0BL7NFrw6Tgz0i42gx7gDdDkmZvmvOYdfaQW6bilA3AZ6fvosTi/RyV93SC8t4BMIyp+biZo5owFJQMiLX8B71wmepW6KDqXLH0Pkvc9CWVzaIeqMXvK37eD0Ej13lq1v1Kn3XNPlgXTZueyMlpoeN3jkMwB5jVkv7tjiWfTZJBjYQHp3KjTHHPCDEKDyyZtQ/cBE7rINXr0dPjsOM1WCfsxQmCL7wOfL/3YIlIENpGvWQXMqG30WORRw6/AHYHzeaL0s+TXnaEtOjxs0cj4I3pfpxeG6HS5Q8cJw1Nw/AIErj8PnX/YPgpaGrsybiMrHZ7BpB3y3pCPorR284+bQIAglHWt6zZzbUPHEU/DZsR2B77zhcN8dKcBA55pOseDX00dbWi9xg3VzKKXcTneDxYj6m6NQ+lYSPPYUI3RhmiNyNOWtnTMG5Uvv5C5brx+yELLiYxCTHIUm0fY15/Kq1dCPHY/gVS/BK/UHp9q2txADnGk6IeS2X3MyWtrp/QfrRkpU4jNSd2i65KtC/pHbuBsgavwOCFXtm43mSG80jI6A9/a2CxtVC/6A6odv5h5Kj4PnEP70uiYB2CkarRNzel36fBtfR42eMwNCTY29+DmVz0IvAhF053IyWs5Io+LjA1VmFZ+luCtGtHTdeOinRsPvnSz4vXuyXaFqHoxH5bPjobxkgMcPeVDnlEGoMaE+ZRjqZiYDkorvRQFVwHNPJsKWf9D0c2XA02buu+p581A97yF4pu1D8N+avK1OAWpPIR5FzfxZSlNQwalTLX0v7MV1A2/gXkZRshlXak97NvM0JIfh8qYpEKrN6DP9ayjK2Qp/21Ty8QwYdNEAVbf0pTcuYjDPI5s4EWqE5OkF7ZGzCH9qDXeUcaphwLPDevz9UPjxvyB5+yF08dPQZrRYL7bZX2cyKAQ+uy+5cOZEWy8jexMzMOF7AjKNUYwb3OlchrJ3J6D+xhh4fpuP4Kf2WpXLODgINQ8kQD/lekheLRcxhBoJHntyEPDGVohhAbi85imIQYFQ/3IJEY+svsrxkhmlLzyP+snT4Jm2H8EvPu8Mhg6VkbmcjaF098Uzmdb96bH9E1aDYJlE2RKTe5IY5onir2dB8vNAwMuH4f2JPNNsL5kj/HDl0RTUzWK2ugbRuiUtspojQ1D69mKYI8KhvFSOyD++CEFvAJuLX16+DPoROoQ/9GcoSju2cLpCesYXAqc9vJp7LtP6ylHMgKEzAfKNrOnuoRgmXP3MWJS/OQkwCwhetAce33fsxKp+NAVXHrlRBp1NL1olMdgfpWuegSkuFoqKWkTMfwnKkjIOfEP/OCizT3UFpjbrIIRabPRZF89mWV8jjY0d7k+VIo8GYNruzlS5Mhm1dw3mwAesOgDvze0DYwt03n8fL5S+uQTG+OtB9GaEPbcGHkfk2at8NpjrQ7+5ljMHl1kRkJt7vGkTWBtkY/oPTaVACtN0d/G65eNWrhyPurviZStk53n4v/IThIr6Nt/eHOEPMSKAh25ojrT1xXNgA/xQuXgh9FNGy4KbJET86Vmo8wr5f5tM7ZuoXaFsMp9zuyk1/1xW+3EvrLHouPiVBFjOvpE7KcYiaP0tA1D1QgrXVOGKGd6bjsF78zEIVfaF1Ul+3qi9czpq754DycsPwhU9lAUXYIwfyB1lMSlz+Ul2JpN1S6krAOcfmVELn4hiZf6vpzqO8IruN3QUQHkMhFzM/UkM90bVcynQT7u+KYBUsy8X2gO5UGddgrKgEuSK/BGoryfY4Gkc0g8NiQkwjBkBqtTych57DsP/rQ1QlFWgcslC1M2ejqjk2fzYQHYMoSvTVVOEjM4/n9VxLCPX9n5DmO02sTs0vTkQDckxqLtXB/3kwQ6FSnvsPQavrf+B9rDs+pX5haD60Qfht+4jV2LdrDnO5z/ln8+2HbXLckbFDvobCFnB1ji6S9ubI8PCoQ3JcTDoroMpvi/MkaGQfHzkTQHVRq75qlN50Bw9C82hLAg1dW4Btr1GZC3nJuCKgtzT9sWnR0UNjIRKwXdi9ATQuxVBJxq3UItCQsTFizn27cRg7UTEDvqEAPfKK3rdw+1OyNsDishaToFPC3NP27/nSKaYAYkUAt9dR9HsmNQeIFZP7gKB7O8hkMYW5J51bHcdKxgZc/02yo9qbXQi9GRpe0Lf+MSGE/IXly7+4vg+UiZDn76DdIRIjeZOr7bb/q6yllMqjCrKO+3cjmkZ+P4bAPIw03YWrN+brCNA+UoVs1jIxqL8M86fDcCqDwtL8BI0+kwA/cBB7x1U28LOwOZafsGsVyWUlmZ37hQMWdvjFoCSf8ojRNN1FL1Kb0GANjrPCFlYlHdWxqmDZLfahkcP2AzQu3tppiWaTbQCbCnOP9d1JxuxZkJChngrtAa2qXckm1L38jsbMCXLEtsvasGUlJeXx93itpLdms4qCo/uN5pS8NPq2K031i78sNXgb+W9fCmKTCsCoROL8i/YHUfiEOgc+Mh+TecyEoFtxXa4imsfdwZ44yIIO5ex+NJ5h8LEnEIsLOq6D0DlE0gJ3/3mVDXXKPgM8Ea3MMHGkoILrj+B1IJUaOR1mwDM4z8vpvG/C+DZnUtNy3wfXb50wX1n7VqAD+sT8zklZK4MvPK3TTX8kitZwwmlW0uKLrr/VGkL8CERsfyQTIvG/xatGmalNNPwz0oLc7vv/PQm4MNj/g8Ef5I5XtFIN9coZbfqNo8Os1AKxYelxRe7/6YASx+D+/RdT0D4adPygQrXOs9TSCILx2t0YoG+V1aU55CV0p7adanZEdInegIFdxcMZg2yBeBmt1heM6rP7O9mC9c5BPSR0qJ8u+1wW4J2KeissYCAfn4Kjfie7DK4eozItTCR4kGmIjsorim2fYtZKyysys2167RoW2Bb3nc56M3o5hFQuhiNN3ox66bnUo5MJRbrBMB5EPJaWVGeTeeVvUA3z+cy0FkjUVFRHnozYUcJ8UHWYloyu74naL5812kLsFkXNymp8YmSkhKXhRS4FPSrWh89ilKyFJQ23dLIgOfgN7+m0hm1caIM5ZfKtopnJPiS7aMtK8p3edC6W0C34BIUFpVIgUUEV+8j5bfmWj6AC1emLLY2M/+a395Lgc0EWFNeUvDbuo+0tTIGB0dHSAJl12VOIeTqzbvcV8+uLCbsyuLGa4udcag1XovMgaYSmGY3ntjDu0Ip2CFePwoS2VBWli9HlLoxuVXTrckVFB49WhIxR75jGuxpleT7o/kYwP+07TKPMuEBVZY7qK1uaUijlKQJCmwvL85vPK/KjUg3a6rbQW8utr9/rD9RmsaBIIkQsNvUEwCEOgoNAUopcIJSHAJFOjWr9ldVda3Z52if3Ga9dKZjlrK+UVGB6gYxFgoSJUkIpgRBoIJCEKhCkogIIomEolwQUAaRFhi1itwrBQXuPefVQUF7lKY72PdrNnsv6N3w6f4fa0lL1iFs0vAAAAAASUVORK5CYII=";
;// CONCATENATED MODULE: ./public/images/comm1_bg1.png
const comm1_bg1_namespaceObject = __webpack_require__.p + "3dbaec95c9de48f9000e.png";
;// CONCATENATED MODULE: ./public/images/comm1_bg2.png
const comm1_bg2_namespaceObject = __webpack_require__.p + "6031c682ab232c076a88.png";
;// CONCATENATED MODULE: ./public/images/comm1_right_bg.png
const comm1_right_bg_namespaceObject = __webpack_require__.p + "e7d7c8288be333545dfb.png";
;// CONCATENATED MODULE: ./public/images/comm1_ri_btm.png
const comm1_ri_btm_namespaceObject = __webpack_require__.p + "480eb9f43aa8d0d7ff5d.png";
;// CONCATENATED MODULE: ./src/components/index/comm1.jsx

var comm1_templateObject;
function comm1_taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }












var comm1_CustomStyle = styled_components_browser_esm/* default.div */.ZP.div(comm1_templateObject || (comm1_templateObject = comm1_taggedTemplateLiteralLoose(["\n\tdisplay: flex;\n\twidth: 75%;\n    margin: auto;\n\t\n\t.comm1_left {\n\t\tposition: relative;\n\t}\n\t.comm1_title {\n\t\tposition: relative;\n\t\twidth: 50%;\n\t\tpadding-top: 11rem;\n\t\tz-index: 99;\n\t\tspan {\n\t\t\tfont-size: 44px;\n\t\t\tfont-family: \"Poppins-Bold\";\n\t\t\tfont-weight: bold;\n\t\t\tbackground: linear-gradient(90deg,#01F983 ,#00EBFD );\n\t\t\t-webkit-background-clip: text;\n\t\t\t-webkit-text-fill-color: transparent;\n\t\t}\n\t\tem {\n\t\t\tfont-size: 44px;\n\t\t\tfont-family: \"Poppins-Bold\";\n\t\t\tfont-weight: bold;\n\t\t\tcolor: #fff;\n\t\t}\n\t}\n\t.comm1_des {\n\t\tposition: relative;\n\t\twidth: 45%;\n\t\tmargin-top: 8px;\n\t\tline-height: 30px;\n\t\tfont-size: 14px;\n\t\tfont-family: \"Poppins-Regular\";\n\t\tcolor: #A4BCB7;\n\t\tz-index: 99;\n\t}\n\t.comm1_tab_conter {\n\t\tposition: relative;\n\t\tdisplay: inline-block;\n\t\tbackground: #12161B;\n\t\tborder: 1px solid #2B3240;\n\t\tborder-radius: 13px;\n\t\tmargin-top: 3rem;\n\t}\n\t.comm1_tab {\n\t\tdisplay: flex;\n\t\tpadding: 3rem;\n\t\tspan {\n\t\t\tmargin:0px 1.5rem;\n\t\t\ttext-align: center;\n\t\t}\n\t\tem {\n\t\t\tdisplay: block;\n\t\t\tfont-size: 14px;\n\t\t\tfont-family: \"Poppins-Regular\";\n\t\t\tcolor: #97A4A9;\n\t\t\tline-height: 18px;\n\t\t\tpadding-top: 0.5rem;\n\t\t}\n\t}\n\t.comm1_cbg1 {\n\t\tposition: absolute;\n\t\tleft: 5%;\n\t\tbottom: -30px;\n\t\tz-index: 9;\n\t}\n\t.comm1_cbg2 {\n\t\tposition: absolute;\n\t\tleft: 5%;\n\t\tbottom: 0px;\n\t}\n\t.comm1_right {\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tposition: absolute;\n\t\tright: 30px;\n\t\tbackground: url('", "') no-repeat center;\n\t\tbackground-size: 100%;\n\t\twidth: 860px;\n\t\theight: 860px;\n\t\tmargin-top: -20px;\n\t}\n\t.comm1_ri_ont {\n\t\tposition: relative;\n\t\ttext-align: center;\n\t\timg {\n\t\t\twidth: 90%;\n\t\t}\n\t}\n\t.comm1_ri_shu {\n\t\tposition: absolute;\n\t\twidth: 70%;\n\t\tleft: 15%;\n\t\tbottom: 15px;\n\t\theight: 35px;\n\t\tline-height: 35px;\n\t\tbackground: #36B37E;\n\t\tborder-radius: 10px;\n\t\tfont-size: 16px;\n\t\tfont-family: \"Poppins-Medium\";\n\t\tcolor: #fff;\n\t\tz-index: 999;\n\t\tcursor: pointer;\n\t\ta {\n\t\t\tdisplay: inline-block;\n\t\t\twidth: 100%;\n\t\t\tcolor: #fff;\n\t\t}\n\t}\n\t.comm1_m_top {\n\t\tdisplay: none;\n\t}\n\n\n\n\t@media (max-width: 1600px) {\n\t\t.comm1_title {\n\t\t\tpadding-top: 8rem;\n\t\t\tspan {\n\t\t\t\tfont-size: 37px;\n\t\t\t}\n\t\t\tem {\n\t\t\t\tfont-size: 37px;\n\t\t\t}\n\t\t}\n\t\t.comm1_des {\n\t\t\tmargin-top: 5px;\n\t\t\twidth: 50%;\n\t\t\tline-height: 25px;\n\t\t}\n\t\t.comm1_right {\n\t\t\twidth: 700px;\n\t\t\theight: 700px;\n\t\t}\n\t\t.comm1_ri_ont {\n\t\t\timg {\n\t\t\t\twidth: 80%;\n\t\t\t}\n\t\t}\n\t}\n\n\n\t@media (max-width: 1400px) {\n\t\t.comm1_title {\n\t\t\tpadding-top: 6rem;\n\t\t\tspan {\n\t\t\t\tfont-size: 34px;\n\t\t\t}\n\t\t\tem {\n\t\t\t\tfont-size: 34px;\n\t\t\t}\n\t\t}\n\t\t.comm1_des {\n\t\t\tfont-size: 13px;\n    \t\tline-height: 22px;\n\t\t}\n\t\t.comm1_tab_conter {\n\t\t\tmargin-top: 2rem;\n\t\t}\n\t\t.comm1_tab {\n\t\t\tpadding: 2rem;\n\t\t\tspan {\n\t\t\t\tmargin: 0px 1rem;\n\t\t\t}\n\t\t}\n\t\t.comm1_right {\n\t\t\twidth: 610px;\n\t\t\theight: 610px;\n\t\t}\n\t\t.comm1_ri_ont {\n\t\t\timg {\n\t\t\t\twidth: 70%;\n\t\t\t}\n\t\t}\n\t\t.comm1_ri_shu {\n\t\t\twidth: 60%;\n\t\t\tleft: 20%;\n\t\t\tbottom: 10px;\n\t\t\theight: 30px;\n\t\t\tline-height: 30px;\n\t\t\tfont-size: 14px;\n\t\t}\n\t}\n\n\n\t@media (max-width: 750px) {\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\tmargin-top: -20px;\n\n\t\t.comm1_m_top {\n\t\t\tdisplay: block;\n\t\t\toverflow: hidden;\n\t\t\tposition: relative;\n\t\t\t.comm1_m_bgcont {\n\t\t\t\twidth: 114%;\n\t\t\t\tmargin-left: -7%;\n\t\t\t}\n\t\t\t.comm1_m_font {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 50%;\n\t\t\t\tleft: 50%;\n\t\t\t\twidth: 150px;\n\t\t\t\theight: 196px;\n\t\t\t\tmargin-left: -75px;\n\t\t\t\tmargin-top: -98px;\n\t\t\t\timg {\n\t\t\t\t\twidth: 100%;\n\t\t\t\t}\n\t\t\t}\n\t\t\t.comm1_m_shu {\n\t\t\t\tposition: absolute;\n\t\t\t\twidth: 86%;\n\t\t\t\tleft: 7%;\n\t\t\t\tbottom: 8px;\n\t\t\t\tbackground: rgb(54, 179, 126);\n\t\t\t\tborder-radius: 6px;\n\t\t\t\tfont-size: 14px;\n\t\t\t\ttext-align: center;\n\t\t\t\tpadding: 3px 0;\n\t\t\t\ta {\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\tcolor: #fff;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t.comm1_left {\n\t\t\twidth: 90%;\n\t\t\tmargin: auto;\n\t\t}\n\t\t.comm1_title {\n\t\t\twidth: 100%;\n\t\t\tpadding-top: 25px;\n\t\t\tspan {\n\t\t\t\tfont-size: 28px;\n\t\t\t\tline-height: 33px;\n\t\t\t}\n\t\t\tem {\n\t\t\t\tfont-size: 28px;\n\t\t\t\tline-height: 33px;\n\t\t\t}\n\t\t}\n\t\t.comm1_des {\n\t\t\twidth: 100%;\n\t\t\tmargin-top: 25px;\n\t\t\tline-height: 18px;\n\t\t}\n\t\t.comm1_cbg1 {\n\t\t\tdisplay: none;\n\t\t}\n\t\t.comm1_cbg2 {\n\t\t\tdisplay: none;\n\t\t}\n\t\t.comm1_tab_conter {\n\t\t\twidth: 100%;\n\t\t\tmargin-top: 50px;\n\t\t}\n\t\t.comm1_tab {\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: space-between;\n\t\t\tpadding: 30px 10px;\n\t\t\tspan {\n\t\t\t\tmargin: 0px;\n\t\t\t}\n\t\t\timg {\n\t\t\t\twidth: 55px;\n\t\t\t}\n\t\t}\n\t\t.comm1_right {\n\t\t\tdisplay: none;\n\t\t}\n\t}\n"])), comm1_right_bg_namespaceObject);
function Comm1() {
  var _useTranslation = (0,dist_es/* useTranslation */.$G)(),
    i18n = _useTranslation.i18n,
    t = _useTranslation.t;
  (0,react.useEffect)(function () {
    var language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  return /*#__PURE__*/react.createElement(comm1_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "comm1_m_top"
  }, /*#__PURE__*/react.createElement("img", {
    src: comm1_right_bg_namespaceObject,
    alt: "",
    className: "comm1_m_bgcont"
  }), /*#__PURE__*/react.createElement("div", {
    className: "comm1_m_font"
  }, /*#__PURE__*/react.createElement("img", {
    src: comm1_ri_btm_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("div", {
    className: "comm1_m_shu"
  }, i18n.language === 'en' ? /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "https://docs.aleox.io/",
    target: "_blank"
  }, t('WHITEPAPER')) : /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "https://docs-zh.aleox.io/",
    target: "_blank"
  }, t('WHITEPAPER'))))), /*#__PURE__*/react.createElement("div", {
    className: "comm1_left"
  }, /*#__PURE__*/react.createElement("div", {
    className: "comm1_cbg1"
  }, /*#__PURE__*/react.createElement("img", {
    src: comm1_bg1_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("div", {
    className: "comm1_cbg2"
  }, /*#__PURE__*/react.createElement("img", {
    src: comm1_bg2_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("div", {
    className: "comm1_title"
  }, /*#__PURE__*/react.createElement("span", null, t('Aleo')), /*#__PURE__*/react.createElement("em", null, t('Privacy Computing Public Chain Leader'))), /*#__PURE__*/react.createElement("div", {
    className: "comm1_des"
  }, t('AleoX expands its practical applications based on this foundation, aiming to construct a Layer-1 public chain similar to Ethereum. The difference lies in its emphasis on privacy computing, zero gas fees, providing the underlying infrastructure for privacy protection, and ultimately achieving integration with the Aleo network.')), /*#__PURE__*/react.createElement("div", {
    className: "comm1_tab_conter"
  }, /*#__PURE__*/react.createElement("div", {
    className: "comm1_tab"
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("img", {
    src: comm1_ico1_namespaceObject,
    alt: ""
  }), i18n.language === 'en' ? /*#__PURE__*/react.createElement("em", null, t('Emphasis on privacy'), /*#__PURE__*/react.createElement("br", null), t('computing')) : /*#__PURE__*/react.createElement("em", null, t('Emphasis on privacy computing'))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("img", {
    src: comm1_ico2_namespaceObject,
    alt: ""
  }), i18n.language === 'en' ? /*#__PURE__*/react.createElement("em", null, t('Layer-1'), /*#__PURE__*/react.createElement("br", null), t('public chain')) : /*#__PURE__*/react.createElement("em", null, t('Layer-1 public chain'))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("img", {
    src: comm1_ico3_namespaceObject,
    alt: ""
  }), i18n.language === 'en' ? /*#__PURE__*/react.createElement("em", null, t('Zero gas'), /*#__PURE__*/react.createElement("br", null), t('fees')) : /*#__PURE__*/react.createElement("em", null, t('Zero gas fees')))))), /*#__PURE__*/react.createElement("div", {
    className: "comm1_right"
  }, /*#__PURE__*/react.createElement("div", {
    className: "comm1_ri_ont"
  }, /*#__PURE__*/react.createElement("img", {
    src: comm1_ri_btm_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("div", {
    className: "comm1_ri_shu"
  }, i18n.language === 'en' ? /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "https://docs.aleox.io/",
    target: "_blank"
  }, t('WHITEPAPER')) : /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "https://docs-zh.aleox.io/",
    target: "_blank"
  }, t('WHITEPAPER'))))));
}
/* harmony default export */ const comm1 = (Comm1);
;// CONCATENATED MODULE: ./public/images/comm2_qiu.png
const comm2_qiu_namespaceObject = __webpack_require__.p + "aaa2ae7ea2f2625df8c7.png";
;// CONCATENATED MODULE: ./public/images/comm2_qiu_m.png
const comm2_qiu_m_namespaceObject = __webpack_require__.p + "535c364bb63547429aac.png";
;// CONCATENATED MODULE: ./src/components/index/comm2.jsx

var comm2_templateObject;
function comm2_taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }






var comm2_CustomStyle = styled_components_browser_esm/* default.div */.ZP.div(comm2_templateObject || (comm2_templateObject = comm2_taggedTemplateLiteralLoose(["\n\tposition: relative;\n\twidth: 95%;\n    margin: auto;\n\tbackground: linear-gradient(-90deg, #61B843, #018095);\n\tborder-radius: 22px;\n\toverflow: hidden;\n\tmargin-top: 18rem;\n\t\n\t.comm2_conter {\n\t\tpadding: 11.5rem 11.5rem 17rem;\n\t\tspan {\n\t\t\tdisplay: block;\n\t\t\tfont-size: 43px;\n\t\t\tfont-family: \"Poppins-Bold\";\n\t\t\tfont-weight: bold;\n\t\t\tcolor: #FFFFFF;\n\t\t\tline-height: 63px;\n\t\t\tmargin-bottom: 2.5rem;\n\t\t}\n\t\tem {\n\t\t\twidth: 45%;\n\t\t\tdisplay: block;\n\t\t\tfont-size: 16px;\n\t\t\tfont-family: \"Poppins-Medium\";\n\t\t\tcolor: #E7FFD3;\n\t\t\tline-height: 30px;\n\t\t}\n\t}\n\t.comm2_qiubg {\n\t\tposition: absolute;\n\t\ttop: 10%;\n\t\tright: 40px;\n\t\ttext-align: right;\n\t\tanimation: fadeInTop 5s infinite;\n\t}\n\n\n\n\t@media (max-width: 1600px) {\n\t\tmargin-top: 12rem;\n\n\t\t.comm2_conter {\n\t\t\tpadding: 9rem 9rem 13.5rem;\n\t\t\tspan {\n\t\t\t\tfont-size: 36px;\n\t\t\t\tmargin-bottom: 1.5rem;\n\t\t\t}\n\t\t\tem {\n\t\t\t\tfont-size: 14px;\n\t\t\t\tline-height: 28px;\n\t\t\t}\n\t\t}\n\t\t.comm2_qiubg {\n\t\t\timg {\n\t\t\t\twidth: 80%;\n\t\t\t}\n\t\t}\n\t}\n\n\n\t@media (max-width: 1400px) {\n\t\tmargin-top: 11rem;\n\n\t\t.comm2_conter {\n\t\t\tpadding: 8rem 8rem 10rem;\n\t\t\tspan {\n\t\t\t\tmargin-bottom: 1rem;\n\t\t\t}\n\t\t\tem {\n\t\t\t\tline-height: 25px;\n\t\t\t}\n\t\t}\n\t\t.comm2_qiubg {\n\t\t\timg {\n\t\t\t\twidth: 70%;\n\t\t\t}\n\t\t}\n\t}\n\n\n\t@media (max-width: 750px) {\n\t\twidth: 90%;\n\t\tmargin-top: 30px;\n\n\t\t.comm2_conter {\n\t\t\tpadding: 50px 25px;\n\t\t\tspan {\n\t\t\t\tfont-size: 30px;\n\t\t\t\tline-height: 35px;\n\t\t\t}\n\t\t\tem {\n\t\t\t\twidth: 100%;\n\t\t\t\tfont-size: 13px;\n\t\t\t\tline-height: 18px;\n\t\t\t}\n\t\t}\n\t\t.comm2_qiubg_m {\n\t\t\ttext-align: center;\n\t\t\tpadding-bottom: 35px;\n\t\t\tanimation: fadeInTop 5s infinite;\n\t\t\timg {\n\t\t\t\twidth: 90%;\n\t\t\t}\n\t\t}\n\t}\n"])));
function Comm2() {
  var _useTranslation = (0,dist_es/* useTranslation */.$G)(),
    i18n = _useTranslation.i18n,
    t = _useTranslation.t;
  (0,react.useEffect)(function () {
    var language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  var _useState = (0,react.useState)(_isMobile()),
    isMobile = _useState[0],
    setIsMobile = _useState[1];
  return /*#__PURE__*/react.createElement(comm2_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "comm2_conter"
  }, /*#__PURE__*/react.createElement("span", null, t('Supports Web3 Applications')), /*#__PURE__*/react.createElement("em", null, t('With the continuous development of the blockchain industry, it is proving the potential to support a digitally accessible, efficient, and interoperable defined ecosystem. AleoX is building the foundational layer to ensure the scalability, security, and reliability of the future of Web3, supporting a range of applications including gaming and financial transactions'))), !isMobile ? /*#__PURE__*/react.createElement("div", {
    className: "comm2_qiubg"
  }, /*#__PURE__*/react.createElement("img", {
    src: comm2_qiu_namespaceObject,
    alt: ""
  })) : /*#__PURE__*/react.createElement("div", {
    className: "comm2_qiubg_m"
  }, /*#__PURE__*/react.createElement("img", {
    src: comm2_qiu_m_namespaceObject,
    alt: ""
  })));
}
/* harmony default export */ const comm2 = (Comm2);
;// CONCATENATED MODULE: ./public/images/comm3_bg.png
const comm3_bg_namespaceObject = __webpack_require__.p + "8d054c4c333bd35a17b4.png";
;// CONCATENATED MODULE: ./public/images/comm3_center.png
const comm3_center_namespaceObject = __webpack_require__.p + "7ad67e21e88f08d48091.png";
;// CONCATENATED MODULE: ./public/images/comm3_ico1.png
const comm3_ico1_namespaceObject = "data:image/png;base64,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";
;// CONCATENATED MODULE: ./public/images/comm3_ico2.png
const comm3_ico2_namespaceObject = "data:image/png;base64,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";
;// CONCATENATED MODULE: ./public/images/comm3_ico3.png
const comm3_ico3_namespaceObject = "data:image/png;base64,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";
;// CONCATENATED MODULE: ./public/images/comm3_ico4.png
const comm3_ico4_namespaceObject = "data:image/png;base64,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";
;// CONCATENATED MODULE: ./src/components/index/comm3.jsx

var comm3_templateObject;
function comm3_taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }










var comm3_CustomStyle = styled_components_browser_esm/* default.div */.ZP.div(comm3_templateObject || (comm3_templateObject = comm3_taggedTemplateLiteralLoose(["\n\tbackground: url('", "') no-repeat center;\n\tpadding-top: 14.5rem;\n\t\n\t.comm3_title {\n\t\tfont-size: 54px;\n\t\tfont-family: \"Poppins-Bold\";\n\t\tfont-weight: bold;\n\t\tcolor: #FFFFFF;\n\t\tline-height: 71px;\n\t\ttext-align: center;\n\t}\n\t.comm3_Conter {\n\t\tdisplay: flex;\n\t\tmargin-top: 3rem;\n\t}\n\t.comm3_center {\n\t\tposition: relative;\n\t\tmargin: auto;\n\t\ttext-align: center;\n\t}\n\t.comm3_pre {\n\t\tposition: absolute;\n\t\ttop: 0px;\n\t\tdisplay: flex;\n\t\theight: 100%;\n\t\talign-items: center;\n\t\tspan {\n\t\t\tdisplay: block;\n\t\t\ttext-align: center;\n\t\t\twidth: 150px;\n\t\t}\n\t\tem {\n\t\t\tdisplay: block;\n\t\t\tfont-size: 14px;\n\t\t\tfont-family: \"Poppins-Medium\";\n\t\t\tcolor: #FFFFFF;\n\t\t\tline-height: 18px;\n\t\t\tmargin-top: 15px;\n\t\t\theight: 54px;\n\t\t}\n\t}\n\t.comm3_left {\n\t\tleft: -19rem;\n\t\tspan {\n\t\t\tmargin-left: 2rem;\n\t\t}\n\t}\n\t.comm3_right {\n\t\tright: -19rem;\n\t\tspan {\n\t\t\tmargin-right: 2rem;\n\t\t}\n\t}\n\t.comm3_des {\n\t\twidth: 50%;\n\t\tmargin: auto;\n\t\tmargin-top: 5.3rem;\n\t\tfont-size: 16px;\n\t\tfont-family: \"Poppins-Regular\";\n\t\tcolor: #97A4A9;\n\t\tline-height: 26px;\n\t\ttext-align: center;\n\t}\n\n\n\n\t@media (max-width: 1600px) {\n\t\tpadding-top: 12rem;\n\n\t\t.comm3_title {\n\t\t\tfont-size: 45px;\n\t\t}\n\t\t.comm3_Conter {\n\t\t\tmargin-top: 1.5rem;\n\t\t}\n\t\t.comm3_cenico {\n\t\t\twidth: 80%;\n\t\t}\n\t\t.comm3_pre {\n\t\t\tspan {\n\t\t\t\twidth: 130px;\n\t\t\t}\n\t\t\tem {\n\t\t\t\tfont-size: 13px;\n\t\t\t\tmargin-top: 10px;\n\t\t\t}\n\t\t\timg {\n\t\t\t\twidth: 60%;\n\t\t\t}\n\t\t}\n\t\t.comm3_left {\n\t\t\tleft: -13rem;\n\t\t\tspan {\n\t\t\t\tmargin-left: 1rem;\n\t\t\t}\n\t\t}\n\t\t.comm3_right {\n\t\t\tright: -13rem;\n\t\t\tspan {\n\t\t\t\tmargin-right: 1rem;\n\t\t\t}\n\t\t}\n\t\t.comm3_des {\n\t\t\tfont-size: 15px;\n\t\t\tline-height: 22px;\n\t\t}\n\t}\n\n\n\t@media (max-width: 1400px) {\n\t\tpadding-top: 10rem;\n\n\t\t.comm3_title {\n\t\t\tfont-size: 40px;\n\t\t}\n\t\t.comm3_cenico {\n\t\t\twidth: 70%;\n\t\t}\n\t\t.comm3_left {\n\t\t\tleft: -12rem;\n\t\t\tspan {\n\t\t\t\tmargin-left: 1rem;\n\t\t\t}\n\t\t}\n\t\t.comm3_right {\n\t\t\tright: -12rem;\n\t\t\tspan {\n\t\t\t\tmargin-right: 1rem;\n\t\t\t}\n\t\t}\n\t\t.comm3_des {\n\t\t\tmargin-top: 4rem;\n\t\t\tfont-size: 14px;\n\t\t\tline-height: 18px;\n\t\t}\n\t}\n\n\n\t@media (max-width: 750px) {\n\t\tpadding-top: 55px;\n\t\tbackground-size: 100%;\n\n\t\t.comm3_title {\n\t\t\tfont-size: 30px;\n\t\t}\n\t\t.comm3_pre {\n\t\t\tdisplay: block;\n\t\t\timg {\n\t\t\t\twidth: 45%;\n\t\t\t}\n\t\t\tem {\n\t\t\t\tfont-size: 12px;\n\t\t\t\tline-height: 16px;\n\t\t\t}\n\t\t}\n\t\t.comm3_left {\n\t\t\tleft: 0px;\n\t\t\tspan:last-child {\n\t\t\t\tposition: absolute;\n\t\t\t\tbottom: 0px;\n\t\t\t}\n\t\t}\n\t\t.comm3_right {\n\t\t\tright: 0px;\n\t\t\tspan:last-child {\n\t\t\t\tposition: absolute;\n\t\t\t\tbottom: 0px;\n\t\t\t}\n\t\t}\n\t\t.comm3_des {\n\t\t\twidth: 80%;\n\t\t\tmargin-top: 30px;\n\t\t\tfont-size: 13px;\n\t\t\tline-height: 16px;\n\t\t}\n\t}\n"])), comm3_bg_namespaceObject);
function Comm3() {
  var _useTranslation = (0,dist_es/* useTranslation */.$G)(),
    i18n = _useTranslation.i18n,
    t = _useTranslation.t;
  (0,react.useEffect)(function () {
    var language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  return /*#__PURE__*/react.createElement(comm3_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "comm3_title"
  }, t('Privacy Security')), /*#__PURE__*/react.createElement("div", {
    className: "comm3_Conter"
  }, /*#__PURE__*/react.createElement("div", {
    className: "comm3_center"
  }, /*#__PURE__*/react.createElement("img", {
    src: comm3_center_namespaceObject,
    alt: "",
    className: "comm3_cenico"
  }), /*#__PURE__*/react.createElement("div", {
    className: "comm3_pre comm3_left"
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("img", {
    src: comm3_ico1_namespaceObject,
    alt: ""
  }), i18n.language === 'en' ? /*#__PURE__*/react.createElement("em", null, t('Privacy-preserving'), /*#__PURE__*/react.createElement("br", null), t('Infinite Computation')) : /*#__PURE__*/react.createElement("em", null, t('Privacy-preserving Infinite Computation'))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("img", {
    src: comm3_ico2_namespaceObject,
    alt: ""
  }), i18n.language === 'en' ? /*#__PURE__*/react.createElement("em", null, t('Centralized'), /*#__PURE__*/react.createElement("br", null), t('System')) : /*#__PURE__*/react.createElement("em", null, t('Centralized System')))), /*#__PURE__*/react.createElement("div", {
    className: "comm3_pre comm3_right"
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("img", {
    src: comm3_ico3_namespaceObject,
    alt: ""
  }), i18n.language === 'en' ? /*#__PURE__*/react.createElement("em", null, t('Open source and'), /*#__PURE__*/react.createElement("br", null), t('built for the'), /*#__PURE__*/react.createElement("br", null), t('web blockchain')) : /*#__PURE__*/react.createElement("em", null, t('Open Source Blockchain'), /*#__PURE__*/react.createElement("br", null), t('Built for the Web'))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("img", {
    src: comm3_ico4_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("em", null, t('Own Your Data')))))), /*#__PURE__*/react.createElement("div", {
    className: "comm3_des"
  }, t('AleoX is the first platform to provide a completely private application environment. Leveraging decentralized systems and zero-knowledge cryptography, AleoX offers users infinite computations with absolute privacy. By constructing a blockchain that is private by default, open source, and built for the web, AleoX possesses unique advantages in addressing the drawbacks of traditional blockchains. Users can access a truly personalized web service world without compromising control over their private data.')));
}
/* harmony default export */ const comm3 = (Comm3);
;// CONCATENATED MODULE: ./public/images/comm4_left.png
const comm4_left_namespaceObject = __webpack_require__.p + "87c2e92b8e123a6be619.png";
;// CONCATENATED MODULE: ./public/images/comm4_left_m.png
const comm4_left_m_namespaceObject = __webpack_require__.p + "891601c402f6a263447f.png";
;// CONCATENATED MODULE: ./src/components/index/comm4.jsx

var comm4_templateObject;
function comm4_taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }






var comm4_CustomStyle = styled_components_browser_esm/* default.div */.ZP.div(comm4_templateObject || (comm4_templateObject = comm4_taggedTemplateLiteralLoose(["\n\tdisplay: flex;\n\twidth: 70%;\n    margin: auto;\n    margin-top: 19rem;\n\t\n\t.comm4_left {\n\t\twidth: 50%;\n\t}\n\t.comm4_right{\n\t\twidth: 50%;\n\t\tmargin-top: 1rem;\n\t\tmargin-left: 6rem;\n\t\tspan {\n\t\t\tdisplay: block;\n\t\t\tline-height: 60px;\n\t\t\tfont-size: 54px;\n\t\t\tfont-family: \"Poppins-Bold\";\n\t\t\tfont-weight: bold;\n\t\t\tbackground: linear-gradient(90deg,#01F983,#00EBFD);\n\t\t\t-webkit-background-clip: text;\n\t\t\t-webkit-text-fill-color: transparent;\n\t\t}\n\t\tem {\n\t\t\tdisplay: inline-block;\n\t\t\tmargin-top: 2.5rem;\n\t\t\tfont-size: 16px;\n\t\t\tfont-family: \"Poppins-Medium\";\n\t\t\tcolor: #fff;\n\t\t\tline-height: 26px;\n\t\t}\n\t}\n\n\n\n\t@media (max-width: 1600px) {\n\t\twidth: 75%;\n\t\tmargin-top: 14rem;\n\n\t\t.comm4_right {\n\t\t\tspan {\n\t\t\t\tfont-size: 40px;\n\t\t\t\tline-height: 50px;\n\t\t\t}\n\t\t\tem {\n\t\t\t\tmargin-top: 2rem;\n\t\t\t\tfont-size: 15px;\n\t\t\t\tline-height: 22px;\n\t\t\t}\n\t\t}\n\t}\n\n\n\t@media (max-width: 1400px) {\n\t\tmargin-top: 13rem;\n\n\t\t.comm4_right {\n\t\t\tspan {\n\t\t\t\tline-height: 40px;\n\t\t\t}\n\t\t}\n\t}\n\n\n\t@media (max-width: 750px) {\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\tmargin-top: 90px;\n\n\t\t.comm4_left {\n\t\t\twidth: 100%;\n\t\t\timg {\n\t\t\t\twidth: 100%;\n\t\t\t}\n\t\t}\n\t\t.comm4_right {\n\t\t\twidth: 80%;\n\t\t\tmargin: auto;\n\t\t\tmargin-top: -70px;\n\t\t\tspan {\n\t\t\t\tfont-size: 30px;\n\t\t\t\tline-height: 30px;\n\t\t\t}\n\t\t\tem {\n\t\t\t\tmargin-top: 20px;\n\t\t\t\tfont-size: 14px;\n\t\t\t\tline-height: 20px;\n\t\t\t}\n\t\t}\n\t}\n"])));
function Comm4() {
  var _useTranslation = (0,dist_es/* useTranslation */.$G)(),
    i18n = _useTranslation.i18n,
    t = _useTranslation.t;
  (0,react.useEffect)(function () {
    var language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  var _useState = (0,react.useState)(_isMobile()),
    isMobile = _useState[0],
    setIsMobile = _useState[1];
  return /*#__PURE__*/react.createElement(comm4_CustomStyle, null, !isMobile ? /*#__PURE__*/react.createElement("div", {
    className: "comm4_left"
  }, /*#__PURE__*/react.createElement("img", {
    src: comm4_left_namespaceObject,
    alt: ""
  })) : /*#__PURE__*/react.createElement("div", {
    className: "comm4_left"
  }, /*#__PURE__*/react.createElement("img", {
    src: comm4_left_m_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("div", {
    className: "comm4_right"
  }, i18n.language === 'en' ? /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("span", null, t('The fastest POW')), /*#__PURE__*/react.createElement("span", null, t('public chain'))) : /*#__PURE__*/react.createElement("span", null, t('The Fastest POW Public Blockchain')), /*#__PURE__*/react.createElement("em", null, t('Aleo, as a leading star project in the ZK track, is poised to become the second-largest POW project in the industry due to its powerful consensus value. Under its framework, the first token issued on the public market by AleoX is likely to attract a large number of miners and supporters to participate.'))));
}
/* harmony default export */ const comm4 = (Comm4);
;// CONCATENATED MODULE: ./public/images/comm5_left.png
const comm5_left_namespaceObject = __webpack_require__.p + "9d3e906baf07a80a96e3.png";
;// CONCATENATED MODULE: ./public/images/comm5_left_m.png
const comm5_left_m_namespaceObject = __webpack_require__.p + "108e247bf6fce5265d6c.png";
;// CONCATENATED MODULE: ./public/images/comm5_xian.png
const comm5_xian_namespaceObject = "data:image/png;base64,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";
;// CONCATENATED MODULE: ./src/components/index/comm5.jsx

var comm5_templateObject;
function comm5_taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }







var comm5_CustomStyle = styled_components_browser_esm/* default.div */.ZP.div(comm5_templateObject || (comm5_templateObject = comm5_taggedTemplateLiteralLoose(["\n\tdisplay: flex;\n\twidth: 76%;\n    margin: auto;\n    margin-top: 9rem;\n\t\n\t.comm5_left {\n\t\twidth: 53%;\n\t\tspan {\n\t\t\tdisplay: block;\n\t\t\tfont-size: 54px;\n\t\t\tfont-family: \"Poppins-Bold\";\n\t\t\tfont-weight: bold;\n\t\t\tbackground: linear-gradient(90deg,#01F983,#00EBFD);\n\t\t\t-webkit-background-clip: text;\n\t\t\t-webkit-text-fill-color: transparent;\n\t\t\tmargin-left: 9rem;\n\t\t}\n\t\timg {\n\t\t\twidth: 100%;\n\t\t}\n\t}\n\t.comm5_right {\n\t\twidth: 47%;\n\t\tdisplay: flex;\n\t\tpadding-left: 7%;\n\t}\n\t.comm5_rixian {\n\t\tpadding-right: 25px;\n\t\tpadding-top: 5px;\n\t}\n\t.comm5_rifont {\n\t\tspan {\n\t\t\tdisplay: block;\n\t\t\theight: 163px;\n\t\t}\n\t\tem {\n\t\t\tdisplay: block;\n\t\t\tfont-size: 24px;\n\t\t\tfont-family: \"Poppins-Bold\";\n\t\t\tfont-weight: bold;\n\t\t\tcolor: #FFFFFF;\n\t\t\tmargin-bottom: 10px;\n\t\t}\n\t\ti {\n\t\t\tdisplay: block;\n\t\t\tfont-size: 16px;\n\t\t\tfont-family: \"Poppins-Regular\";\n\t\t\tcolor: #FFFFFF;\n\t\t\tline-height: 24px;\n\t\t}\n\t}\n\n\n\n\t@media (max-width: 1600px) {\n\t\tmargin-top: 2rem;\n\n\t\t.comm5_left {\n\t\t\tspan {\n\t\t\t\tfont-size: 40px;\n\t\t\t}\n\t\t}\n\t\t.comm5_rixian {\n\t\t\timg {\n\t\t\t\twidth: 22px;\n\t\t\t}\n\t\t}\n\t\t.comm5_rifont {\n\t\t\tspan {\n\t\t\t\theight: 128px;\n\t\t\t}\n\t\t\tem {\n\t\t\t\tfont-size: 20px;\n\t\t\t\tmargin-bottom: 5px;\n\t\t\t}\n\t\t}\n\t}\n\n\n\t@media (max-width: 750px) {\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\tmargin-top: 100px;\n\n\t\t.comm5_left {\n\t\t\twidth: 100%;\n\t\t\tspan {\n\t\t\t\twidth: 80%;\n\t\t\t\tmargin-left: 10%;\n\t\t\t\tfont-size: 30px;\n\t\t\t}\n\t\t\timg {\n\t\t\t\tmargin-top: -20px;\n\t\t\t}\n\t\t}\n\t\t.comm5_right {\n\t\t\twidth: 70%;\n\t\t\tpadding-left: 0px;\n\t\t\tmargin: auto;\n\t\t\tmargin-top: -15px;\n\t\t}\n\t\t.comm5_rixian {\n\t\t\tpadding-right: 10px;\n\t\t\timg {\n\t\t\t\twidth: 16px;\n\t\t\t}\n\t\t}\n\t\t.comm5_rifont {\n\t\t\tspan {\n\t\t\t\theight: 94px;\n\t\t\t}\n\t\t\tem {\n\t\t\t\tfont-size: 16px;\n\t\t\t}\n\t\t\ti {\n\t\t\t\tfont-size: 12px;\n\t\t\t\tline-height: 18px;\n\t\t\t}\n\t\t}\n\t}\n"])));
function Comm6() {
  var _useTranslation = (0,dist_es/* useTranslation */.$G)(),
    i18n = _useTranslation.i18n,
    t = _useTranslation.t;
  (0,react.useEffect)(function () {
    var language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  var _useState = (0,react.useState)(_isMobile()),
    isMobile = _useState[0],
    setIsMobile = _useState[1];
  return /*#__PURE__*/react.createElement(comm5_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "comm5_left"
  }, /*#__PURE__*/react.createElement("span", null, t('Road Map')), !isMobile ? /*#__PURE__*/react.createElement("img", {
    src: comm5_left_namespaceObject,
    alt: ""
  }) : /*#__PURE__*/react.createElement("img", {
    src: comm5_left_m_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("div", {
    className: "comm5_right"
  }, /*#__PURE__*/react.createElement("div", {
    className: "comm5_rixian"
  }, /*#__PURE__*/react.createElement("img", {
    src: comm5_xian_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("div", {
    className: "comm5_rifont"
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("em", null, t('December 2023')), /*#__PURE__*/react.createElement("i", null, t('Access the decentralized exchange and AleoXswap by logging in, and initiate the 10 million token promotion reward pool.'))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("em", null, t('Q1 2024')), /*#__PURE__*/react.createElement("i", null, t('The number of token holders has reached over twenty thousand.'))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("em", null, t('Q2 2024')), /*#__PURE__*/react.createElement("i", null, t('The market capitalization has reached 10 million US dollars.'))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("em", null, t('Q3 2024')), /*#__PURE__*/react.createElement("i", null, t('Successfully launched on a centralized exchange.'))))));
}
/* harmony default export */ const comm5 = (Comm6);
;// CONCATENATED MODULE: ./public/images/comm6_bg.png
const comm6_bg_namespaceObject = __webpack_require__.p + "4e9b37134a43ca21bc77.png";
;// CONCATENATED MODULE: ./public/images/t1.png
const t1_namespaceObject = __webpack_require__.p + "0d020b873ee0c11a8b14.png";
;// CONCATENATED MODULE: ./public/images/t2.png
const t2_namespaceObject = __webpack_require__.p + "cc7aba9d66cea92fc095.png";
;// CONCATENATED MODULE: ./public/images/t3.png
const t3_namespaceObject = __webpack_require__.p + "1567d5f448b341252a0d.png";
;// CONCATENATED MODULE: ./public/images/t4.png
const t4_namespaceObject = __webpack_require__.p + "de6dba0a2a77a21c7ccb.png";
;// CONCATENATED MODULE: ./src/components/index/comm6.jsx

var comm6_templateObject;
function comm6_taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }









var comm6_CustomStyle = styled_components_browser_esm/* default.div */.ZP.div(comm6_templateObject || (comm6_templateObject = comm6_taggedTemplateLiteralLoose(["\n\tmargin-top: 5.2rem;\n\t\n\t.comm6_conter {\n\t\twidth: 50%;\n\t\tmargin: auto;\n\t\ttext-align: center;\n\t\tbackground: url('", "') no-repeat center;\n\t\tpadding-top: 5rem;\n\t\tpadding-bottom: 6rem;\n\t\tspan {\n\t\t\tdisplay: inline-block;\n\t\t\tfont-size: 54px;\n\t\t\tfont-family: \"Poppins-Bold\";\n\t\t\tfont-weight: bold;\n\t\t\tbackground: linear-gradient(90deg,#01F983,#00EBFD);\n\t\t\t-webkit-background-clip: text;\n\t\t\t-webkit-text-fill-color: transparent;\n\t\t}\n\t\tem {\n\t\t\tdisplay: block;\n\t\t\tfont-size: 16px;\n\t\t\tfont-family: \"Poppins-Regular\";\n\t\t\tcolor: #FFFFFF;\n\t\t\tline-height: 26px;\n\t\t\tmargin-top: 1.5rem;\n\t\t}\n\t}\n\t.comm6_Team {\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\tpadding-left: 0px;\n\t\tmargin-bottom: 0px;\n\t\tli {\n\t\t\twidth: 306px;\n\t\t\theight: 393px;\n\t\t\tlist-style: none;\n\t\t\tbackground: #12161B;\n\t\t\tborder: 1px solid #2B3240;\n\t\t\tborder-radius: 10px;\n\t\t\tmargin: 0px 10px;\n\t\t\ttext-align: center;\n\t\t\tpadding: 25px 0;\n\t\t}\n\t\tspan {\n\t\t\tdisplay: inline-block;\n\t\t\tfont-size: 22px;\n\t\t\tfont-family: \"Poppins-Medium\";\n\t\t\tbackground: linear-gradient(90deg,#01F983,#00EBFD);\n\t\t\t-webkit-background-clip: text;\n\t\t\t-webkit-text-fill-color: transparent;\n\t\t\tmargin-top: 20px;\n\t\t}\n\t\tem {\n\t\t\tdisplay: block;\n\t\t\tfont-size: 14px;\n\t\t\tfont-family: \"Poppins-Regular\";\n\t\t\tcolor: #FFFFFF;\n\t\t}\n\t\ti {\n\t\t\twidth: 77%;\n\t\t\tmargin: auto;\n\t\t\tdisplay: block;\n\t\t\tfont-size: 14px;\n\t\t\tfont-family: \"Poppins-Regular\";\n\t\t\tcolor: #9CAAAF;\n\t\t\tline-height: 18px;\n\t\t\tpadding-top: 10px;\n\t\t}\n\t}\n\n\n\n\t@media (max-width: 1600px) {\n\t\t.comm6_conter {\n\t\t\tspan {\n\t\t\t\tfont-size: 40px;\n\t\t\t}\n\t\t\tem {\n\t\t\t\tfont-size: 15px;\n\t\t\t\tline-height: 22px;\n\t\t\t}\n\t\t}\n\t}\n\n\n\t@media (max-width: 750px) {\n\t\tmargin-top: 30px;\n\n\t\t.comm6_conter {\n\t\t\twidth: 85%;\n\t\t\tbackground-size: 100%;\n\t\t\tpadding-bottom: 50px;\n\t\t\tspan {\n\t\t\t\tfont-size: 30px;\n\t\t\t}\n\t\t\tem {\n\t\t\t\tmargin-top: 5px;\n\t\t\t\tfont-size: 13px;\n\t\t\t\tline-height: 18px;\n\t\t\t}\n\t\t}\n\t\t.comm6_Team {\n\t\t\twidth: 90%;\n\t\t\tmargin: auto;\n\t\t\tjustify-content: space-between;\n    \t\tflex-wrap: wrap;\n\t\t\tli {\n\t\t\t\twidth: 48%;\n\t\t\t\tmargin: 0px;\n\t\t\t\tmargin-bottom: 15px;\n\t\t\t\theight: 320px;\n\t\t\t}\n\t\t\timg {\n\t\t\t\twidth: 50%;\n\t\t\t}\n\t\t\tspan {\n\t\t\t\tfont-size: 14px;\n   \t\t\t \tmargin-top: 10px;\n\t\t\t}\n\t\t\tem {\n\t\t\t\tfont-size: 12px;\n\t\t\t}\n\t\t\ti {\n\t\t\t\twidth: 90%;\n\t\t\t\tfont-size: 13px;\n\t\t\t}\n\t\t}\n\t}\n"])), comm6_bg_namespaceObject);
function comm6_Comm6() {
  var _useTranslation = (0,dist_es/* useTranslation */.$G)(),
    i18n = _useTranslation.i18n,
    t = _useTranslation.t;
  (0,react.useEffect)(function () {
    var language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  return /*#__PURE__*/react.createElement(comm6_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "comm6_conter"
  }, /*#__PURE__*/react.createElement("span", null, t('Core Team')), /*#__PURE__*/react.createElement("em", null, t('The AleoX team consists of a highly talented and experienced group of professionals. The team members hail from renowned companies such as Google, Amazon, and Facebook, as well as prestigious research universities like the University of California, Berkeley, Johns Hopkins University, and New York University. They comprise world-class cryptography experts, engineers, and designers with expertise in areas such as privacy protection, blockchain technology, distributed systems engineering, and design.'))), /*#__PURE__*/react.createElement("ul", {
    className: "comm6_Team"
  }, /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("img", {
    src: t1_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("span", null, "Herb Villaneva"), /*#__PURE__*/react.createElement("em", null, t('(Founder)')), /*#__PURE__*/react.createElement("i", {
    style: {
      lineHeight: i18n.language !== 'en' ? '22px' : ''
    }
  }, t('Extensive experience in the Data-as-a-Service (DaaS) field, specializing in blockchain and privacy protection.'))), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("img", {
    src: t2_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("span", null, "Jeramy Hovden"), /*#__PURE__*/react.createElement("em", null, t('(CEO)')), /*#__PURE__*/react.createElement("i", {
    style: {
      lineHeight: i18n.language !== 'en' ? '22px' : ''
    }
  }, t('Having extensive experience in the Data-as-a-Service (DaaS) sector, specializing in blockchain and privacy protection. Formerly a partner at A16Z, with prior experience at Coinbase.'))), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("img", {
    src: t3_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("span", null, "Donald Wahid"), /*#__PURE__*/react.createElement("em", null, t('(CTA)')), /*#__PURE__*/react.createElement("i", {
    style: {
      lineHeight: i18n.language !== 'en' ? '22px' : ''
    }
  }, t('As a co-founder of the Lightning Network, he is a pioneer in faster and more affordable transactions, specializing in distributed systems and cryptography.'))), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("img", {
    src: t4_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("span", null, "Mitchell Lok"), /*#__PURE__*/react.createElement("em", null, t('(CTO)')), /*#__PURE__*/react.createElement("i", {
    style: {
      lineHeight: i18n.language !== 'en' ? '22px' : ''
    }
  }, t('Formerly the Technical Director at 0(1) Labs, adept in zero-knowledge proof technology and blockchain.')))));
}
/* harmony default export */ const comm6 = (comm6_Comm6);
;// CONCATENATED MODULE: ./public/images/comm7_1.png
const comm7_1_namespaceObject = "data:image/png;base64,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";
;// CONCATENATED MODULE: ./public/images/comm7_2.png
const comm7_2_namespaceObject = __webpack_require__.p + "d498cc193a3819c0e46f.png";
;// CONCATENATED MODULE: ./public/images/comm7_3.png
const comm7_3_namespaceObject = __webpack_require__.p + "5b57a95179e2d8398f56.png";
;// CONCATENATED MODULE: ./public/images/comm7_4.png
const comm7_4_namespaceObject = __webpack_require__.p + "c22b9978798b178f0513.png";
;// CONCATENATED MODULE: ./public/images/comm7_bg.png
const comm7_bg_namespaceObject = __webpack_require__.p + "5e836e3dc735fe679097.png";
;// CONCATENATED MODULE: ./public/images/feiji_footer.png
const feiji_footer_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAcCAYAAAAEN20fAAAAAXNSR0IArs4c6QAABANJREFUWEfFl29olVUcxz+/5zzn3F3vrn+23bmJUS8CV0m+K0pX9EdHqLUgRhEr2dIKNghMMhEbLAtHFIVRYy+GGoIKQTkkBXvRH4qwpMI3ZVAMhpLTte1ua3qfX9x7udu92/2jXa3z5rx4nnN+n+d3vr/v+T3C/zGGJ5aTCG1C2AQsQ/Rp+c84VB0Xxx8l8NvBrAPjzcaWT248yMVzK1HTBvYZ1K8GA2pIzZmh7LsxIMO/LsTIU6hrQ+1dqA9Y0nMeEKHj+oGoCuOnGwlMO4F7AuwC1GUBFAPx7i4fJH5iGQn3bOrrcbeiyYAZgBmQKdS+jhqH+LvmHM00NV7034For2Vy6QYJTBsaegR1JqlFcMwDUXsS4z1PEFpL4L+fEmmORvQ7Yv41ZuTv/gYvYZ9Tta2oq00FTQV35AG5AHYrS27ez/CfXWBfy6sRZS+1prN0RnRPlKnKFlE/qfx7c9JeGGQfhq1EG0a4dP4D1GwuKFbRVmr8jwqDTPSs9ozXroHfAjYyq/ys858Pcha1L7B41UkGB8NE9CDY5uJV460gJr/kgox31eGbVhG/HfVWpEstu/TmCHEW5Ipie4hOdyMPTHHp9GKIHkXdmtlM5K2aEWq8KkQ0DTLV/bCIdoCsB/ycWi8JYr9R7GaiD55J7TX843I89xnYO0qWr8oJar2m5DJhqnubCD25Vp9lOoVBRlXtdipP9SJdQWr92Pe3kfCPo+6mdCZK+IiwmxqzMw0y3f2iKO+mnSczSoG4j5VQJ5HHhmaWjH59DxoaQG1VHh8p4Ky6kZg/kAZJDu2q4rK/UVSbgSYw4Zlaz83IoKrtINL6aU4G//p8PVpxBHHhAoaWHyTw6lgq52dBsnfVt8NMT6/zoFnxNxIkLyobiPp7g7C/E2kfy4EYPd4mhPpUnZfX0GbumHli/YOYuSWzV3Ef0cOGqXNrCCROpPPUvJZhdGCHiNtdwNCKa0T8I9R4LVcHUqhZ0cPGm7DvaGA7izhrKbFuI2beKgvEix96Q9W9WsLii4OovY9a+bIsEIkfPoraDWWAJEjYRdRJvEyQQ1+hbnUZID8Rc6uyT770pZdHJxI/dAZ1t5cB0kfMbbkeIEOoq8+ASBD6MBB3DLX9qK2+CkPbQsz1XQ+QSdRVJEEE915Qufal5MXF8LfL8cMHCVxjUYu/4t1JXejn8kC0v0ImFiRBEOyeoHLD9pzTS3rPyMoucDtImVzGyGYMbYLqioWIJMoDiR+oF9yQBK47iD6+q5DVMPLbQwT2ANj6nFZCzBdUh++fu+7axaq9C5hY1EDkyR8KQmQejJ2t5XJkP+o3ZXVob1IT3lE+SMnoc15I/mZcuvAyal9B/UmMaWRJ+Pe52/wDJr3S/mq28PYAAAAASUVORK5CYII=";
;// CONCATENATED MODULE: ./public/images/github_footer.png
const github_footer_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAABHdJREFUSEut1mtoHFUUB/D/mblz72bTJSbZpKVBGqtWEGprglQs4gMfjSCoNEENFkRBIah51IQq1XQ3NlYIKi2UxFgrBbG1GuqHUtsP/dIPxaQk2NSaD1qjVkm6iZuYdDNrOkdmZl+T3SQ26cKwMDP3/O65cx+H8H9+U59t0ch4kqE2gtVasPKD1Qyz+gUsz4PlCdwU+Rb00Oxi4WjBF2L7XiY2tgPyDrCEc0EB7F6c+E/c+xUsP0Gh2QG63Zwvbm4w1l5OpD4FGw+7SAJbEEx2SA7DMt5AMHgsF5oNxtvuJUudAvQVYCOR1XWBbhtLhFFS8M5c1AvGQ3cTi16w0AGBZYF2ZyH2Ieh/LRNNg7wnQPH474BeABb2yzb4E1iuA6S2+DdMjcIoIGfBxmonBvQ2BNXOJJoCyQwdB6gK0JEA+9nXWIFY9xqN9deZZWNi0kyD1QhYWcxKgdXN7qSRl2EZrTDlFxCiDJpvCBDkxNLocRQbJ23UBWfCjxDhlNsLFyQYnZav4dXUcEwd2gD2FwF5gwg8ccW5z6xhoq8c8N0GXvE9Cm+Jpt6PTF4GxGq38/okgloQRP86IJnhfgAbPSCJQ5Zq3LbYusr5/NIlHwLFw4AoTYB2ajsQ1N8nmKH1BPoh3TA5pPog+5rWLwmMRtdiVvvZnQdOhgBjDCXaStLM0C4GZUxfF2TSa6CavloSyCww9s8BQLyQAp1PYFURxdtOgvlRb4Z6P/taKpaEJRuNTq2Cpv0JFuRk6P4+JDJDQwCtywTJMtqtvDffWhZoN45MXwAbd6ZBOkFkhscBFGaCzKIevuaPlw9ePQ0WD2ZkeM4GrwLI84AQb0M1774B4Fmw2JQCGYM2+BeAVZ4hhThoqeYXbwA4Ahal6Qy51wb7AFTOWRbD7GsuXxZ4JVoBkuc8sxR0jDQzfICBjGxSy+JZqKbDS0Yjk98A4mnvskA7wWyrJvCR7IUvppnUPVB1F68bHRt7CWx0exa+HUSzHiNwq6S4bs/UfGebg36EWWwGRBnYiLOlGuD3fQ7aNr0oHP3tVlhGA1jWOUdb5k4DTNj7qbt5m+F3CWh1NgMSr0Du6KKZjh6wfCpx4o+CjV625EEEao56YD4tMLGyDSzvAxv3p6uDLLADJfp2F+ROg+KjYwAC9oxi6NVQLUcptvcPsCxLBmFLbUVg69de0D4xfvwSLKu95cgcUGrFKKDx9AE8814VkXU8eTyxr5nAnX4tRt0MYw1BnbH8z7fkHNaJC5tgybPzgqzXo1R3NhJPiaGZ4RBD35k4gHvY1/jMot/NfuHvwQ2AGsgJQv8OQbUlGSeriNLiuzvYEo1ueWAMMKseWEYEUNfgf64LRJzViejFSrDoywJJDKAorxJE1ryg82DmgzqyCyBv1TbO+bXFOTPODfagOFADIk9xPH8hbH50F1naHrA9HE6BNML5tRlbYAY9ObgZ19QZJ0OSdr2zC0VF+3N1buHK224R63qA2Kgnluet/NqsOtMJGhkqg67tB4xegPd6aps56n9p2tnEDAEUeQAAAABJRU5ErkJggg==";
;// CONCATENATED MODULE: ./public/images/twimg_footer.png
const twimg_footer_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAcCAYAAACQ0cTtAAAAAXNSR0IArs4c6QAABQtJREFUSEutlntsVEUUh7/Ze+/c7e7Sst0FpQItCGLkZRMDSogFTSTGBEgIDVqkESMkIoggGlECUh4GrQaIGPDBagDDIxpiQiQmFmmw+OIlEAUVKGgF+m53S1v2HrO3srW00JY4/9xk5sz57vnNOTNHeRoLIgL5QB0YPRATMEEsEN0gyppFyswt3Mq43LQFjDzgU8KeGYrosgxlGn+2+DLOIFYcDAuxDET3BS3S7A+TllvZLV55dBVivQLGJUzPEIKqWrkOrqx8VClnDxi7xF489ZpTT2zjVkE/gaP3SyAvp8uw8tp8MCOIWY+2MklT7o+2wABPY8F2wcgVjOnYL291J0WUaoiUIzpdsGbjz93UKbCiYgxiHXCPIm7ey2366LU9SZhLblwVRUyfXNW3E5h/0TVq+HCscrzFiEZIzE9qme9olJ+/A+U75x4B5hTCvs/+a9YGRsPK8UpZX4N5RLwLspNRR7esE7Hngv29BCaO7hAkYlD19++IzkSsxYRTV19v1xbmyvlmRMTIl8Thpsx9IylB/c5zYPcXvPMJPLK2HbCytAiscYiOEAo91dEPtYO5cl55pxIxg6LsIXhnnXI31u0aqpQ+jtiI4e2PL+d80mHV6Q8Q/TToYtL7PHgjlTuEESu8Xyldgugz4ps9MLk5+sVS5ehliH1MUseNdOerTy5CrDWIvkCw/0CUau4eLCFnbP27gn5WYRU6vpkvJuWs23sMsYeLY08D/Rt4f0S0IJ4s0u8svVm2dhzZvztUbONfoPuIWKPwT//BnY7t7aeu2qUiNglJIfG1cgjetb+zsrgpjOh72Up5DyH6svjzeied1RQ9B971LkysKQSHt0nxbsuYTPvYR2+J2AuV6M1OYOrMVmBJMWKPBT2LnsPe7ywqN/G6ZBTdegbRWYJ+hMCkr1oSozgI/gqwFXE9jNDgE5356hKM2m13K491GGwR/5WeqNwm13HNoccRextinyU4aMD/A0tkZ/3OjwV7BmLvlh4TJrfKeWI3jp4IdiHB/sms7XJRtzNs2Jaj4tYesH1uUeOdRo+c7a6dnNBU6ypE+/BY99Ez46dbThAaNmcpRyfODFH2UuXYr7vAuAQJjq9ukfP0BOL6S9BlpPfJuDWY7NCqIZoAZYhY8wnkrqV+7wvKsd8W0cWkjWm9mirORVA6H8faQDg8p9syqtjGA6DHKNGbHH/e7OQtUrvvqIg9ArxzSMvekHRcWXYJ0b3AGkMoteR64A2z0dOwPiKi88EqEt/Mh9psjH3Tj2Zd6hZ13OhHaOQFd728bBRKf4dYlYRTQ12DNRa+qhy9wr2IU8oGoZY57WSpKZmH2GvB/pmeQ0ck1ysqChFrARgRwv42T037yBrXTFVi7kCsZnF0Jv7ZZTesn+rDB0GPRvRSgoOXJ+0u1/6BMgeA9TDhxGPcMtrCmlZnK8c4lOgfxDEfwDfv4E0Lte5ob+LmxUSm4uihhDJPuvaXagbjsU4hZpSwlYpSrjKtMFkVUk2Uuj2IGE+SsrBrvWL18WcQexOiz5GemdUaXWwRmGvA2E4vY1obmGos+AWMIcoxVzgpLy25aUTXL1ad3ofoHMRaRyjj+VZg8+fgmYzIY/Q29yhkh6Gafv0WGAXGTrEX53YL5Bb1iXTigQrQiS76CGJdRcxGMINg3NNyYJ6+ytNYsFxgCUoViX6tbYp3h1p5Ng/sRC/idVt3t4VPtPJGLZCK8Mk/W/HYvEiFsMkAAAAASUVORK5CYII=";
;// CONCATENATED MODULE: ./public/images/comm7_1_m.png
const comm7_1_m_namespaceObject = __webpack_require__.p + "772712b930a97abbe9a8.png";
;// CONCATENATED MODULE: ./src/components/index/comm7.jsx

var comm7_templateObject;
function comm7_taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }













var comm7_CustomStyle = styled_components_browser_esm/* default.div */.ZP.div(comm7_templateObject || (comm7_templateObject = comm7_taggedTemplateLiteralLoose(["\n\tmargin-top: 19.5rem;\n\ttext-align: center;\n\tbackground: url('", "') no-repeat center bottom;\n\n\t.comm7_title {\n\t\tdisplay: inline-block;\n\t\tfont-size: 54px;\n\t\tfont-family: \"Poppins-Bold\";\n\t\tfont-weight: bold;\n\t\tbackground: linear-gradient(90deg,#01F983,#00EBFD);\n\t\t-webkit-background-clip: text;\n\t\t-webkit-text-fill-color: transparent;\n\t\tmargin-bottom: 1.5rem;\n\t}\n\t.comm7_des {\n\t\tfont-size: 18px;\n\t\tfont-family: \"Poppins-Regular\";\n\t\tcolor: #FFFFFF;\n\t\tline-height: 30px;\n\t\tem {\n\t\t\tcolor: #4FCA7B;\n\t\t\tpadding: 0 5px;\n\t\t}\n\t}\n\t.comm7_Img {\n\t\tmargin-top: 8.5rem;\n\t\timg {\n\t\t\tmargin: 0 10px;\n\t\t}\n\t}\n\t.comm7_cont_footer {\n\t\tmargin-top: 22rem;\n\t\tborder-top: 1px solid rgb(255, 255, 255, 0.14);\n\t}\n\t.comm7_footer {\n\t\twidth: 60%;\n\t\tmargin: auto;\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\theight: 5.5rem;\n\t\tline-height: 5.5rem;\n\t\tspan {\n\t\t\tfont-size: 16px;\n\t\t\tfont-family: \"Poppins-Medium\";\n\t\t\tcolor: #FFFFFF;\n\t\t}\n\t\timg {\n\t\t\theight: 28px;\n\t\t\tmargin-right: 35px;\n\t\t}\n\t}\n\n\n\n\t@media (max-width: 1600px) {\n\t\tmargin-top: 9rem;\n\n\t\t.comm7_title {\n\t\t\tmargin-bottom: 1rem;\n\t\t}\n\t\t.comm7_Img {\n\t\t\tmargin-top: 6rem;\n\t\t\timg {\n\t\t\t\theight: 100px;\n\t\t\t}\n\t\t}\n\t\t.comm7_cont_footer {\n\t\t\tmargin-top: 16rem;\n\t\t\t\n\t\t}\n\t}\n\n\n\t@media (max-width: 1400px) {\n\t\t.comm7_Img {\n\t\t\timg {\n\t\t\t\theight: 100px;\n\t\t\t}\n\t\t}\n\t\t.comm7_cont_footer {\n\t\t\tmargin-top: 10rem;\n\t\t}\n\t}\n\n\n\t@media (max-width: 750px) {\n\t\tmargin-top: 90px;\n\n\t\t.comm7_title {\n\t\t\tfont-size: 30px;\n    \t\tmargin-bottom: 10px;\n\t\t}\n\t\t.comm7_des {\n\t\t\twidth: 90%;\n\t\t\tmargin: auto;\n\t\t\tfont-size: 14px;\n\t\t\tline-height: 20px;\n\t\t}\n\t\t.comm7_Img {\n\t\t\tmargin-top: 40px;\n\t\t\timg {\n\t\t\t\twidth: 80%;\n\t\t\t\theight: auto;\n\t\t\t}\n\t\t}\n\t\t.comm7_cont_footer {\n\t\t\tmargin-top: 130px;\n\t\t}\n\t\t.comm7_footer {\n\t\t\twidth: 100%;\n\t\t\tdisplay: block;\n\t\t\tmargin-top: 0px;\n\t\t\theight: auto;\n\t\t\tline-height: 30px;\n\t\t\tpadding: 30px 0;\n\t\t\tspan {\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tfont-size: 14px;\n\t\t\t\tmargin-top: 20px;\n\t\t\t}\n\t\t\timg {\n\t\t\t\tmargin: 0 20px;\n\t\t\t}\n\t\t}\n\t}\n"])), comm7_bg_namespaceObject);
function Comm7() {
  var _useTranslation = (0,dist_es/* useTranslation */.$G)(),
    i18n = _useTranslation.i18n,
    t = _useTranslation.t;
  (0,react.useEffect)(function () {
    var language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  var _useState = (0,react.useState)(_isMobile()),
    isMobile = _useState[0],
    setIsMobile = _useState[1];
  return /*#__PURE__*/react.createElement(comm7_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "comm7_title"
  }, t('Investment institution')), /*#__PURE__*/react.createElement("div", {
    className: "comm7_des"
  }, /*#__PURE__*/react.createElement("span", null, t('AleoX was initiated by')), /*#__PURE__*/react.createElement("em", null, t("Liwayway Capital Partners in Singapore")), /*#__PURE__*/react.createElement("span", null, t('and')), /*#__PURE__*/react.createElement("em", null, t('Harbour Capital in Hong Kong.')), /*#__PURE__*/react.createElement("span", null, t('initiated by'))), !isMobile ? /*#__PURE__*/react.createElement("div", {
    className: "comm7_Img"
  }, /*#__PURE__*/react.createElement("img", {
    src: comm7_1_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("img", {
    src: comm7_2_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("img", {
    src: comm7_3_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("img", {
    src: comm7_4_namespaceObject,
    alt: ""
  })) : /*#__PURE__*/react.createElement("div", {
    className: "comm7_Img"
  }, /*#__PURE__*/react.createElement("img", {
    src: comm7_1_m_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("div", {
    className: "comm7_cont_footer"
  }, /*#__PURE__*/react.createElement("div", {
    className: "comm7_footer"
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("a", {
    href: "https://t.me/AleoXEn",
    target: "_blank"
  }, /*#__PURE__*/react.createElement("img", {
    src: feiji_footer_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("img", {
    src: github_footer_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("img", {
    src: twimg_footer_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("span", null, "Copyright \xA9 2023. Aleox.co All rights reserved."))));
}
/* harmony default export */ const comm7 = (Comm7);
;// CONCATENATED MODULE: ./src/pages/index/index.jsx










function Index() {
  (0,react.useEffect)(function () {
    var dynamicLoads = [];
    var jsList = ['/js/venobox.min.js', '/js/jquery.meanmenu.js', '/js/jquery.scrollUp.js', '/js/jquery.barfiller.js'];
    jsList.forEach(function (u) {
      var script = document.createElement("script");
      script.src = u;
      dynamicLoads.push(script);
      document.head.appendChild(script);
    });
    setTimeout(function () {
      var dynamicLoadsIng = [];
      var jsListIng = ['/js/theme.js'];
      jsListIng.forEach(function (u) {
        var scriptIng = document.createElement("script");
        scriptIng.src = u;
        dynamicLoadsIng.push(scriptIng);
        document.head.appendChild(scriptIng);
      });
    }, 500);
  }, []);
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(comm1, null), /*#__PURE__*/react.createElement(comm2, null), /*#__PURE__*/react.createElement(comm3, null), /*#__PURE__*/react.createElement(comm4, null), /*#__PURE__*/react.createElement(comm5, null), /*#__PURE__*/react.createElement(comm6, null), /*#__PURE__*/react.createElement(comm7, null), /*#__PURE__*/react.createElement("div", {
    className: "scroll-area"
  }, /*#__PURE__*/react.createElement("div", {
    className: "top-wrap"
  }, /*#__PURE__*/react.createElement("div", {
    className: "go-top-btn-wraper"
  }, /*#__PURE__*/react.createElement("div", {
    className: "go-top go-top-button"
  }, /*#__PURE__*/react.createElement("i", {
    className: "fas fa-arrow-up"
  }), /*#__PURE__*/react.createElement("i", {
    className: "fas fa-arrow-up"
  }))))));
}
/* harmony default export */ const index = (Index);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(8674);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(2526);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(1817);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.async-iterator.js
var es_symbol_async_iterator = __webpack_require__(2443);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.to-string-tag.js
var es_symbol_to_string_tag = __webpack_require__(9341);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.json.to-string-tag.js
var es_json_to_string_tag = __webpack_require__(3706);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.math.to-string-tag.js
var es_math_to_string_tag = __webpack_require__(2703);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(4747);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reverse.js
var es_array_reverse = __webpack_require__(5069);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(9714);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(9401);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__(2772);
// EXTERNAL MODULE: ./node_modules/web3/dist/web3.min.js
var web3_min = __webpack_require__(7918);
var web3_min_default = /*#__PURE__*/__webpack_require__.n(web3_min);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CloseOutlined.js + 1 modules
var CloseOutlined = __webpack_require__(4549);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 29 modules
var message = __webpack_require__(8977);
// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 51 modules
var input = __webpack_require__(4993);
;// CONCATENATED MODULE: ./public/images/status1.png
const status1_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAnCAYAAACmE6CaAAAAAXNSR0IArs4c6QAABHlJREFUWEfd2X9sE3UUAPB3vbve2q5bBrjZZgwZE0xnhApRIskcbhBC1Mkfw0SHuEhmTMyMJhCNQ44wo3ExhD90piEwDdGMEraJxOgIbhB0miySyFZ1XemyuBHXTmjXX3f3va+5QZeu63rXbr023N/f3L3Pvdfvve8rAffBReSmARObm2wUH/JpbyNBK/IMkaelBIGe5twBCw/2vSIA4GjsuYeoP0taYEoXokMrgUIlJCaLRCBIUoNnQERThEBOUUKZb9hezwMQs5CcQlRXs5T7ocJ8DR9Zvb7M9HhrY81blrLiSh1Da0cnpsd7f3d+19Z59WuEI6Or9Ks8g7bX+ZxCSACXudio1cys3VNlqTv6ys53peDjy/1Xx/iVfR91HkK6gj9dtiaflI2cyEQUQNPB8rqtlj2tjbUHEwGioNc+Pd/cP+TuHr3pn4Q+Vsg6Ih5wrLHmkJ7R0sk2nJ5fhrsOtv/4PvaQLuf3zZGsItIBSLjewZHeN070vIPIgNPdwYazhkgXICG+uPhbe9u5/uN5geDYsJ3lsoJYCuA/f9jf0NZ5wOG83X9TMHvAvhepjlgKIBTh+SNnLrd2/XTjXKHB6B60NYVU352WCmg5femTb6/dOC9QtMsd+NkPdjtS9TuxHICegeEunte7yif+9ff1sYKqbUcmAfMygTFmAaAOADYBQB8AnCAIonupDWKmAXMIjPF1ANiYIOAOgiAa04WoAZhF3MvAkSSBpgVRCxBFLJaFWFdKEDUBUcTc4UKmbBRB1AZEEdKP+GmFdZ8Ukg1AFPECAHQpREjLEkKyBYjdnToAYH+6kGwC4r8TaUGyDVjQdmCMU4LwPPqy4lXb29ETmZIDTTTbUjMn9UKLtRIpVMXCQYESCMYYkCjCTIiD66OTF34YHPn78Mvbm+VOZJkALNoAxkOkoKXBiIgxiKIInIDAH4zAP14fTHr98Ix1HdYztKK2fjkzINsAIoQ6MIb9PLobNMcj4AQBwpwAdwJhuDXtB4okYduja0DPJD0Sz1VGJgAyrTgm7syEvwpyQoMUsNcXBF5AQBAEMDQJj5WbYIVRp7h0MwWQQbCaDc/rDN2fNfasM63cTpMaxQHHL8wkQDYT5ueO6nSFBebjb+7+Zoe1fEte8klKQmSmATIIgNip3IcHdp3asbliY1F+bpRQ7BuT3VHm5qOAV7e8WGXb9cT6raYVRtnSUiMDsrvTvCjrz5IbjH69yPtKDzdUnazd8vBTySChCI9aTl/6eDk+ZLJvK6WpOMtqLEMP6AVDqPSDfTUna60V20qK8hc8Q9qCj5253NZ55Y/ORId6JUGluka2nObd8B4kTAdM7zVUs9YK80uVa0ogT0vNLhuZ8AoXB/5q//zCtVMRLn8sfiqRanBK16eGkO7KsprSoQLGYOSLdm56xFq59sFnGYYuHpvwOgYc41edtzxOMSh6yqbCgdixitKA0lmXOuLuU4hqliUdowaGQYJWy2CKQiBiiuTQpI5zPjnNA8tKf0mpcqWLUCU4pQ+5LxD/Ayqzn1Uimj1pAAAAAElFTkSuQmCC";
;// CONCATENATED MODULE: ./src/components/modal/Confirm/index.tsx

var Confirm_templateObject;
function Confirm_taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }






var ConfirmStyled = styled_components_browser_esm/* default.div */.ZP.div(Confirm_templateObject || (Confirm_templateObject = Confirm_taggedTemplateLiteralLoose(["\n  width: 100vw;\n  height: 100vh;\n  background: rgba(13, 17, 28, 0.6);\n  border-radius: 0px 0px 0px 0px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 101;\n  .closeIntImg{\n    position: absolute;\n    top: 20px;\n    right: 24px;\n    cursor: pointer;\n  }\n  .ConfirmContent {\n    position: relative;\n    width: 380px;\n    height: 250px;\n    margin: auto;\n    padding: 31px;\n    background: #fff;\n    border-radius: 18px;\n    border: 1px solid #5a5a5a;\n    bottom: -50%;\n    margin-top: -165px;\n  }\n  svg {\n    width: 20px;\n    height: 20px;\n  }\n  .closeIntStatus {\n    width: 70px;\n    height: 70px;\n    margin-top: 20px;\n    background: linear-gradient(128deg, #0FC2F3 0%, #6B1DDD 100%);\n    border-radius: 50px;\n    text-align: center;\n    margin: 20px auto;\n    img {\n      margin-top: 20px;\n      width: 40px;\n    }\n  }\n  .confirmTransaction {\n    font-size: 22px;\n    color: #36B37E;\n    text-align: center;\n    margin-top: 20px;\n  }\n  .confirmHash {\n    display: flex;\n    justify-content: center;\n    font-size: 16px;\n    color: #36B37E;\n    text-align: center;\n    span {\n      display: block;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      margin-left: 5px;\n      color: #00D2A0;\n      cursor: pointer;\n    }\n  }\n  @media (max-width: 750px) {\n    .ConfirmContent {\n      position: fixed;\n      width: 100%;\n      bottom: 0px;\n      margin: 0px;\n      padding: 50px;\n      border: none;\n      border-radius: 18px 18px 0 0;\n    }\n    .closeIntImg {\n      top: 30px;\n    }\n    .closeIntStatus {\n      margin-top: 0px;\n    }\n  }\n"])));
var ConfirmModal = function ConfirmModal(_ref) {
  var _chain$blockExplorers, _chain$blockExplorers2, _chain$blockExplorers3;
  var childShowTransaction = _ref.childShowTransaction,
    hashTransaction = _ref.hashTransaction;
  var _useTranslation = (0,dist_es/* useTranslation */.$G)(),
    t = _useTranslation.t;
  var _useNetwork = (0,wagmi_dist/* useNetwork */.LN)(),
    chain = _useNetwork.chain;
  var txUrl = chain && (chain == null ? void 0 : chain.blockExplorers) && (chain == null ? void 0 : (_chain$blockExplorers = chain.blockExplorers) == null ? void 0 : _chain$blockExplorers.default) && (chain == null ? void 0 : (_chain$blockExplorers2 = chain.blockExplorers) == null ? void 0 : (_chain$blockExplorers3 = _chain$blockExplorers2.default) == null ? void 0 : _chain$blockExplorers3.url);
  var openHash = function openHash(hash) {
    if (txUrl) {
      window.open(txUrl + "/tx/" + hash);
    } else {
      window.open("https://bscscan.com/tx/" + hash);
    }
  };
  return /*#__PURE__*/react.createElement(ConfirmStyled, null, /*#__PURE__*/react.createElement("div", {
    className: "ConfirmContent"
  }, /*#__PURE__*/react.createElement("div", {
    className: "closeIntStatus"
  }, /*#__PURE__*/react.createElement("img", {
    src: status1_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("div", {
    className: "closeIntImg"
  }, /*#__PURE__*/react.createElement(CloseOutlined/* default */.Z, {
    style: {
      color: "#000"
    },
    onClick: function onClick() {
      return childShowTransaction(false);
    }
  })), /*#__PURE__*/react.createElement("div", {
    className: "confirmTransaction"
  }, "Success"), hashTransaction && /*#__PURE__*/react.createElement("div", {
    className: "confirmHash"
  }, "Hash:", /*#__PURE__*/react.createElement("span", {
    onClick: function onClick() {
      return openHash(hashTransaction);
    }
  }, hashTransaction))));
};
/* harmony default export */ const Confirm = (ConfirmModal);
// EXTERNAL MODULE: ./node_modules/bignumber.js/bignumber.mjs
var bignumber = __webpack_require__(794);
// EXTERNAL MODULE: ./node_modules/@ethersproject/constants/lib.esm/bignumbers.js
var bignumbers = __webpack_require__(1046);
;// CONCATENATED MODULE: ./src/config/abi/erc20.json
const erc20_namespaceObject = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]');
;// CONCATENATED MODULE: ./src/config/abi/farms_abi.json
const farms_abi_namespaceObject = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"DAY_SEC","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"H2","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balances","outputs":[{"internalType":"uint256","name":"stakeLp","type":"uint256"},{"internalType":"uint256","name":"stakeTime","type":"uint256"},{"internalType":"uint256","name":"claimAmount","type":"uint256"},{"internalType":"uint256","name":"lastClaimTime","type":"uint256"},{"internalType":"uint256","name":"increase","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"withdraw","type":"bool"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getAccountInfo","outputs":[{"components":[{"internalType":"uint256","name":"stakeLp","type":"uint256"},{"internalType":"uint256","name":"stakeTime","type":"uint256"},{"internalType":"uint256","name":"claimAmount","type":"uint256"},{"internalType":"uint256","name":"lastClaimTime","type":"uint256"},{"internalType":"uint256","name":"increase","type":"uint256"}],"internalType":"struct H2Liquidity.StakeData","name":"stakeData","type":"tuple"},{"components":[{"internalType":"address","name":"lpAddress","type":"address"},{"internalType":"uint256","name":"pancakeLpbalance","type":"uint256"}],"internalType":"struct H2Liquidity.LPData","name":"lpData","type":"tuple"},{"internalType":"uint256","name":"availableAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"dayIndex","type":"uint256"}],"name":"getLpDaily","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lpAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"lpDailyReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"lpDailySupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_H2","type":"address"},{"internalType":"address","name":"lpAddr","type":"address"}],"name":"setAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"update","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawToken","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
;// CONCATENATED MODULE: ./src/config/abi/swap_abi.json
const swap_abi_namespaceObject = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"H2","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"USDT","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WBNB","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"name":"getAmountsOut","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"name":"getAmountsOutByUSD","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getReferrer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minHoldAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"router","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"referrer","type":"address"}],"name":"swapExactETHForH2","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address","name":"referrer","type":"address"}],"name":"swapExactUSDForH2","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
;// CONCATENATED MODULE: ./src/config/abi/mint_abi.json
const mint_abi_namespaceObject = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"MAXMintTimes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"accountMintTimes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintTimes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"setToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawBNB","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]');
;// CONCATENATED MODULE: ./src/config/const/index.ts




var abiErc20 = erc20_namespaceObject;
var abiFarms = farms_abi_namespaceObject;
var abiSwap = swap_abi_namespaceObject;
var abiMint = mint_abi_namespaceObject;
;// CONCATENATED MODULE: ./src/hook/useContract.ts
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-use-before-define */


function useERC20Contract(address) {
  return useContract(address, abiErc20);
}
function useFarmsContract(address) {
  return useContract(address, abiFarms);
}
function useSwapContract(address) {
  return useContract(address, abiSwap);
}
function useMintContract(address) {
  return useContract(address, abiMint);
}
function useContract(address, ABI) {
  var _require = __webpack_require__(9922),
    getContractObj = _require.getContractObj;
  return (0,react.useMemo)(function () {
    try {
      return getContractObj(address, ABI);
    } catch (error) {
      console.error('Failed to get contract', error);
      return null;
    }
  }, [address, ABI]);
}
;// CONCATENATED MODULE: ./src/config/const/address.ts
// 97
// export const addressFarmsLPToken = "0x3CE3f8B0597ffd8d180302F6C448Af5B1aD64031"
// export const addressFarmsContract = "0x0be407c2785ed03b869254384825265a4dd1c011"

// export const addressH2Token = "0xbA4a991dDe01fE5B4EdaA7eE542DB7251822913F"
// export const addressUSDTToken = "0x44004827f2F72566E12884A38f63f72F2a5143ea"
// export const addressSwapContract = "0xfbf72248de8d7eefa6ef82bdee6595b6473223cd"

// export const addressAleoxToken = "0x7ce6f00c90d79b5cd15dead656d752e2d88bd76c"
// export const addressMintContract = "0x180d61298AE0b1b1ec767400515009551c7b0890"

// 56
var addressFarmsLPToken = "0x37C8806f16E41c9e71D4c47Ed997Ae41f908708f";
var addressFarmsContract = "0x48CaEf9774379b0a3A562504720b51C9feA613AA";
var addressH2Token = "0xb78c02c9180D824C7ca999933C7C8641d27cb1C3";
var addressUSDTToken = "0x55d398326f99059fF775485246999027B3197955";
var addressSwapContract = "0xD8e0297c857A7a82858eff6381B44f4de459e524";
var addressAleoxToken = "0xFB19252a4208a01e3c49F0c2D489f5318cDECDe4";
var addressMintContract = "0x68975F53959c3bC8067dcB64cCE73F8AF4E55F57";
;// CONCATENATED MODULE: ./src/components/Loader/Dots.tsx

var Dots_templateObject;
function Dots_taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var Dots = styled_components_browser_esm/* default.span */.ZP.span(Dots_templateObject || (Dots_templateObject = Dots_taggedTemplateLiteralLoose(["\n  &::after {\n    display: inline-block;\n    animation: ellipsis 1.25s infinite;\n    content: '.';\n    width: 1em;\n    text-align: left;\n  }\n  @keyframes ellipsis {\n    0% {\n      content: '.';\n    }\n    33% {\n      content: '..';\n    }\n    66% {\n      content: '...';\n    }\n  }\n"])));
/* harmony default export */ const Loader_Dots = (Dots);
;// CONCATENATED MODULE: ./public/images/farmsToken.png
const farmsToken_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAvCAYAAABKQCL3AAAAAXNSR0IArs4c6QAACLdJREFUaEPFmgl0VOUVx39vtiSTjSKJbBGBglhlSWmBAhYStvTU2kVFegBpjwaNtmA9YKGBoAJK20OpIqWAtdrA6UoXaiGRrQUFQY4sQQUsUGINZIMJmWRmMjPv9dxZ4GUyS95A4Z4zZ87M3O3/vnu/7977jUIUatya1tusWGai8GUU9S6gC3AZjROaSXnHbPJuyproORVN9mZ8p0Qabaq0L9FQfgTYrvymqaCYIll/2mVKyzM3w+lIm+1AOLbbK1GVyQEmRQHNj+p2gR8wgSktDRQzaFpQj6IdanOkF+ROrXfeTDBXQDi2ZezErBUi/plMqK3NaB5I6fsVUvrNw3P2JTxnt6DYwGTPBFVWBxRV+SC7yHn3TQfRVGFfrJmU5+Vxa23NqC6w9hhD2qClWG4pwOeowtJlML6L/8J1ogxvzR5Msii2TEAFVdnQpcg5WwekH1AAjAIGAfI5HcgGmoAW4AxwEtgP7A59TupZKM2VGbl+tFp5rJrPg2LLwpQ6BGu3YVhyp+O98Bre+qNYb7kba89ifPW/x1v3HqqnCq2tCcWaCmhU7NVGTFvaOhZ4GBiWhDdHgN8AvwYcRuQVx/aMUlRtmeZ3ASlkFZ7BZM3GUZmNr8GLrWc3MkbtwXlgIm01NVi6KmRPcaD5PTTv6o+zpYVVm82s2extc7fpNgMjXrTnvQy8ArwIdCrXFEdF+m4Uxmu+FhRLOtmTnbg+moPmc5HafwFt1evwVP8NW95XSenzJO4zK0HxY79rHRvLMpm/xsmFi8l7HEeyBpgDbE6kXXFUpp8Hugd3HAumtB743bV0mSw60gLyaus5TPY+IV1eat/MYf5aKN8q4f1/p/XAXMAdy5KA8MiZoPlaA46m3rEC98ln0bwm0oetwpIT3HGFfI27qNn7JN8uO8e+Kgm/G0ZvA/cBl6JZFBB1QI6Ek+RC1iQH7lOlqO4W/Je2kXrnSqy59+JrqOS/+0r4+jNOjp2sv2He6wwdBSYAjZHGlUuV9rcVlDEBEKndyCqsx3lwArZeM1Cdx1FS+wVyoenfrzDp/mW8d6zWOIB7CmHW7MD5w+bfwj/+YlxHUOJAaOtuFwaKY3vWMvy+Uk2VkEshe9J5FJMN58F78Z7/J+lfXI+t9yM89vAE1pfvMm78zztgnDxAHVUdhoLhV09+Y1pfAx7RiyiNlWl5ZkzV8qXmlXPiVuxDX8WaW4Sr6vt4zm1g64eDmf7DQ8ZMCXfZcpgrZVgU+sNGKJlpXGdQ4kHgT2HhQNnRVJG+UoOnMYfKDS+k9puKpqq40icxeNxCLtQZ3EczM+GjakiTAjgK+f0wtA+c/zQZIJLHAwKVtZRwYQ2OynRJnCHBws+H2uqWN368YwQ/WXfQuKEl8+GJRWCR0qRDsRzU98dN8PgM47qDEi8Ape1A1O3OybB5WvagKPlhrU0tMHhGC5dbDdoZ0AcqysHaGzJ6gmYBzB2VyNlUNBoOvWvQQIBdDqnbpUTp8IgclfZfgFIiXGs2eyld32bcwO+WQ34+OM3Qd2SoNbGAJkAi+pIjh2DSyGBVbJx+APw86jpf2mrPN5mUWSOKXcUnP1HthnRP+Ty8UQoNXqh3Q85A6CWFrDW0ImEwOtNPFUP5q4bMhJilaMyPEawBlr6Gy+MUCxxYAbnd4aIX6tzQDIyeAtYM0KxXwehDrO4CjLgDmgN5apT6xwPxKLDBkMZ5k+G5qeBU4JIvCKTJDzm3w4ChwbDS5CWrIoB0IbZmJZTNM2QuxFwcD4Ssb7tDJa6F7pnw4SJIy4BWU7CIblLBpYA/BQbmgy0rBCIERh9ibSrcMxQ+PmEUyK/igdgLSJPTOXr9QZg5AvxW8JjBZQKXGdrMoKZCWlfomtceRHhVwmDe2g7TvtY5e1e53okH4hOgd6c0jsyD/U8Ehwt+M/gs4JWXFfy2IIh9p6HFBN8oAi3lKpjIEJv2ALy1tVNmQ0yfxgMh+3BWQm3i+L4SGHVbkFX2ftUCqgCwgpoCPhuMLYPLbji8EVIy2wMJrEjodboaxowEj3QInaLmeCBCc5kEimYNBwmlSFJltBNybO1+mCPts9RTM2Hhd3UgdKsS5l+8FFav7hQCYbq2lchMgVPzQJI6Gsk2KufFncugUQYcgD0Fjq6F3r1CQMIgdGCaPTD8HqiVEikhxV2JxDnxYhEsGB/fytw34WVpzHQ0dTSUzw+tlB6EDsimLVDydEIEQE28lRDLY2JqGdANqp4COeBi0fFayH8JfBElheTRzkUwdnBEWOkASU6NfwjeP5YIyIHkz4nyh2DGlVoxuqHCDbD7dPTfhubBgefAlBp7RXa9D/cVJwLxejwQjwNrY2qoWww5MtSLQX/9AL5ZHt+BtdOhuEB3dkTkh+xutxZAa8xBh+gviQfis8DHMb1oXQppUjpEIbcPPvczOJugkcrJgBNLIFtOcilFZBAvO5oOTN63oCHuQHBgPBDi3eGYI8mdxVDYPzqIpTuhbHuiMAj+PmcsrJItWuqocF0V2ppPNsAQCYiYlLCKFUnZHlZGVTG6D+yeDbaIZufdahi3DtrkPqATZDZBxaMwYVCwVA9XupLY96+Gv8ft7WP3EzrT0iD/JzTN7ujRl26DZVNA3htbYdMReH4HtHo74b2OJdUCCwtgxhegR1c4VgfPboOK4/H0xO7sokgtB2KMLIz5ep25O/bYcQxI/SQJnnudnbgWdXKUDwz12XHLDr2RB2Q2cS1Wr7PsVL0/iXYnve1fAo9dZ2eSUddxAmhAi8z55VpKxhc3i6LPYg160w3YAUjDfKNJhnsTgYZIw0bCKSz7GWCLodb12uHGv59IUr/cNkpd9Z0k5Y2IJb4pMqItCq/sWi8DPa5RTzRxuYaTO7sr0+9YNpIJp0hd0tYtAL7XqZ48Mdrw7ekKgqO3hHQ9QOhzRcJrVpKJL4n7RlL32AlhJscg/yAo1P2jQEaiGaGVkicto7WzEf8oiNE9JXbgf43e79Qr31VUAAAAAElFTkSuQmCC";
;// CONCATENATED MODULE: ./src/pages/Farms/index.jsx











var Farms_templateObject;
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }






function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function Farms_taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }


















var Farms_CustomStyle = styled_components_browser_esm/* default.div */.ZP.div(Farms_templateObject || (Farms_templateObject = Farms_taggedTemplateLiteralLoose(["\n\t.farms_posts {\n\t\tposition: relative;\n\t}\n\n\t.farms_bg {\n\t\twidth: 100%;\n\t\theight: 306px;\n\t\tbackground: linear-gradient(-90deg, #61B843, #018095);\n\t}\n\n\t.farms_main {\n\t\tposition: absolute;\n\t\tleft: 50%;\n\t\tbottom: -180px;\n\t\twidth: 760px;\n\t\tmargin-left: -380px;\n\t}\n\n\t.farms_des {\n\t\tfont-size: 39px;\n\t\tcolor: #fff;\n\t\tfont-weight: bold;\n\t\tline-height: 38px;\n\t\tmargin-bottom: 38px;\n\t}\n\n\t.farms_conter {\n\t\tbackground: #12161B;\n\t\tborder-radius: 16px;\n\t\tpadding: 30px;\n\t}\n\n\t.farms_title {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\tline-height: 40px;\n\t\tpadding-right: 20px;\n\t}\n\n\t.farms_tokenImg {\n\t\timg {\n\t\t\tmargin-right: 5px;\n\t\t}\n\t\ti {\n\t\t\tcolor: #fff;\n\t\t\tfont-size: 14px;\n\t\t}\n\t}\n\n\t.farms_tokenNumber {\n\t\twidth: 305px;\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t}\n\n\t.farms_number {\n\t\tdisplay: inline-block;\n\t\tcolor: #fff;\n\t\tfont-size: 15px;\n\t\tem {\n\t\t\tdisplay: block;\n\t\t}\n\t}\n\n\t.farms_setbomt {\n\t\twidth: 100%;\n\t\tbackground: #090B0C;\n\t\tborder-radius: 16px;\n\t\tpadding: 20px 30px;\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\tmargin-top: 20px;\n\t}\n\n\t.farms_kequ {\n\t\tcolor: #fff;\n\t\tfont-size: 15px;\n\t\tspan {\n\t\t\tdisplay: block;\n\t\t}\n\t}\n\n\t.farms_czuo {\n\t\tmargin-top: 10px;\n\t\tem {\n\t\t\tdisplay: inline-block;\n\t\t\twidth: 130px;\n\t\t\theight: 38px;\n\t\t\tline-height: 34px;\n\t\t\tborder: 2px solid #00D2A0;\n\t\t\tborder-radius: 6px;\n\t\t\tfont-size: 14px;\n\t\t\tcolor: #3F3F3F;\n\t\t\ttext-align: center;\n\t\t\tmargin-left: 24px;\n\t\t\tcursor: pointer;\n\t\t\t&:hover {\n\t\t\t\topacity: .8;\n\t\t\t}\n\t\t}\n\t\ti {\n\t\t\tdisplay: inline-block;\n\t\t\twidth: 300px;\n\t\t\theight: 38px;\n\t\t\tline-height: 38px;\n\t\t\tbackground: #36B37E;\n\t\t\tborder-radius: 6px;\n\t\t\tcolor: #fff;\n\t\t\tfont-size: 14px;\n\t\t\ttext-align: center;\n\t\t\tcursor: pointer;\n\t\t\t&:hover {\n\t\t\t\topacity: .8;\n\t\t\t}\n\t\t}\n\t\t.on {\n\t\t\tborder: 2px solid rgb(149, 159, 172) !important;\n\t\t\tcolor: rgb(149, 159, 172) !important;\n\t\t\tcursor: auto !important;\n\t\t\t&:hover {\n\t\t\t\topacity: 1;\n\t\t\t}\n\t\t}\n\t}\n\n\t.farms_start {\n\t\tdisplay: inline-block;\n\t\twidth: 130px;\n\t\theight: 38px;\n\t\tline-height: 38px;\n\t\tbackground: #36B37E;\n\t\tborder-radius: 6px;\n\t\tcolor: #fff;\n\t\tfont-size: 14px;\n\t\ttext-align: center;\n\t\tcursor: pointer;\n\t\t&:hover {\n\t\t\topacity: .8;\n\t\t}\n\t}\n\n\t.farms_ConfirmStyled {\n\t\twidth: 100vw;\n\t\theight: 100vh;\n\t\tbackground: rgba(13, 17, 28, 0.6);\n\t\tborder-radius: 0px 0px 0px 0px;\n\t\tposition: fixed;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tz-index: 101;\n\t}\n\n\t.farms_ConfirmContent {\n\t\tposition: relative;\n\t\twidth: 508px;\n\t\theight: 302px;\n\t\tmargin: auto;\n\t\tpadding: 33px 40px;\n\t\tbackground: #12161B;\n\t\tborder-radius: 16px;\n\t\tbottom: -50%;\n\t\tmargin-top: -165px;\n\t}\n\n\t.closeIntImg{\n\t\tposition: absolute;\n\t\ttop: 20px;\n\t\tright: 24px;\n\t\tcursor: pointer;\n\t}\n\n\t.farms_ConfirmTitle {\n\t\tcolor: #fff;\n\t\tfont-size: 20px;\n\t\tfont-weight: bold;\n\t\tmargin-bottom: 24px;\n\t}\n\n\t.farms_ConfirmLp {\n\t\tfont-size: 14px;\n\t\tcolor: #88919F;\n\t}\n\n\t.farms_ConfirmNumber {\n\t\tmargin-top: 14px;\n\t\tmargin-bottom: 30px;\n\t\tspan {\n\t\t\tfont-size: 14px;\n\t\t\tcolor: #88919F;\n\t\t\theight: 40px;\n\t\t\tline-height: 40px;\n\t\t}\n\t\tinput {\n\t\t\twidth: 70%;\n\t\t\theight: 40px;\n\t\t\tline-height: 40px;\n\t\t\tmargin-left: 5px;\n\t\t\tborder-color: #090B0C;\n\t\t\tbackground-color: #090B0C;\n\t\t\tcolor: #fff;\n\t\t\t&:hover {\n\t\t\t\tborder-color: #36B37E;\n\t\t\t}\n\t\t\t&:focus {\n\t\t\t\tborder-color: #36B37E;\n\t\t\t}\n\t\t}\n\t}\n\n\t.farms_ConfirmStart {\n\t\twidth: 275px;\n\t\theight: 38px;\n\t\tline-height: 38px;\n\t\tbackground: #36B37E;\n\t\tborder-radius: 6px;\n\t\tcolor: #FFFFFF;\n\t\ttext-align: center;\n\t\tmargin: auto;\n\t\tcursor: pointer;\n\t\t&:hover {\n\t\t\topacity: .8;\n\t\t}\n\t}\n\n\t.farms_tables {\n\t\tmargin-left: 15px;\n\t\tmargin-bottom: -1px;\n\t\tspan {\n\t\t\tdisplay: inline-block;\n\t\t\twidth: 171px;\n\t\t\theight: 46px;\n\t\t\tline-height: 46px;\n\t\t\ttext-align: center;\n\t\t\tfont-weight: bold;\n\t\t\tcolor: #FFFFFF;\n\t\t\tcursor: pointer;\n\t\t}\n\t\t.on {\n\t\t\tcolor: #36B37E;\n\t\t\tbackground: #12161B;\n\t\t\tborder-radius: 10px 10px 0px 0px;\n\t\t\tcursor: auto;\n\t\t}\n\t\ta {\n\t\t\tdisplay: block;\n\t\t\tcolor: #FFFFFF;\n\t\t}\n\t}\n\n\n\t@media (max-width: 1500px) {\n\t\t.farms_des {\n\t\t\tmargin-bottom: 2rem;\n\t\t}\n\t}\n\n\t@media (max-width: 1200px) {\n\t\t.farms_des {\n\t\t\tmargin-bottom: 2rem;\n\t\t}\n\t}\n\n\t@media (max-width: 750px) {\n\t\t.farms_bg {\n\t\t\theight: 200px;\n\t\t}\n\t\t.farms_main {\n\t\t\twidth: 90%;\n\t\t\tleft: 0;\n\t\t\tmargin-left: 5%;\n\t\t\tbottom: 0px;\n\t\t\ttop: 25%;\n\t\t}\n\t\t.farms_title {\n\t\t\tdisplay: block;\n\t\t\tline-height: 30px;\n\t\t}\n\t\t.farms_conter {\n\t\t\tpadding: 30px 20px;\n\t\t}\n\t\t.farms_tokenNumber {\n\t\t\tmargin-top: 30px;\n\t\t\twidth: 100%;\n\t\t}\n\t\t.farms_setbomt {\n\t\t\tdisplay: block;\n\t\t\tpadding: 20px 20px 10px;\n\t\t}\n\t\t.farms_kequ {\n\t\t\tspan {\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tmargin-right: 5px;\n\t\t\t\tmargin-bottom: 10px;\n\t\t\t}\n\t\t\tem {\n\t\t\t\tfont-weight: bold;\n\t\t\t}\n\t\t}\n\t\t.farms_start {\n\t\t\tdisplay: block;\n\t\t\twidth: 100%;\n\t\t\theight: 45px;\n\t\t\tline-height: 45px;\n\t\t\tmargin-bottom: 20px;\n\t\t}\n\t\t.farms_czuo {\n\t\t\tem {\n\t\t\t\tdisplay: block;\n\t\t\t\tmargin-left: 0px;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 45px;\n\t\t\t\tline-height: 45px;\n\t\t\t\tmargin-bottom: 20px;\n\t\t\t}\n\t\t}\n\t\t.farms_ConfirmContent {\n\t\t\tposition: fixed;\n\t\t\twidth: 100%;\n\t\t\theight: auto;\n\t\t\tbottom: 0px;\n\t\t\tmargin: 0px;\n\t\t\tpadding: 50px 30px;\n\t\t\tborder: none;\n\t\t\tborder-radius: 16px 16px 0 0;\n\t\t}\n\t\t.farms_ConfirmStart {\n\t\t\theight: 45px;\n\t\t\tline-height: 45px;\n\t\t}\n\t\t.farms_tables {\n\t\t\tspan {\n\t\t\t\twidth: 150px;\n\t\t\t}\n\t\t}\n\t\t.farms_czuo {\n\t\t\ti {\n\t\t\t\twidth: 100%;\n\t\t\t}\n\t\t}\n\t\t.swap_m_bottom {\n\t\t\theight: 100px;\n\t\t}\n\t}\n"])));
var FarmsView = function FarmsView() {
  var _useTranslation = (0,dist_es/* useTranslation */.$G)(),
    i18n = _useTranslation.i18n,
    t = _useTranslation.t;
  (0,react.useEffect)(function () {
    var language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  var _useState = (0,react.useState)(_isMobile()),
    isMobile = _useState[0],
    setIsMobile = _useState[1];
  var _useAccount = (0,wagmi_dist/* useAccount */.mA)(),
    address = _useAccount.address,
    isConnected = _useAccount.isConnected;
  var _useConnect = (0,wagmi_dist/* useConnect */.$4)({
      connector: new chunk_2VZS2JHJ/* InjectedConnector */._()
    }),
    connect = _useConnect.connect;
  var ethereumHelper = window.ethereum || false;
  var web3 = new (web3_min_default())(ethereumHelper);
  var _message$useMessage = message/* default.useMessage */.ZP.useMessage(),
    messageApi = _message$useMessage[0],
    contextHolder = _message$useMessage[1];
  var _useState2 = (0,react.useState)(false),
    showTransaction = _useState2[0],
    setShowTransaction = _useState2[1];
  var _useState3 = (0,react.useState)(''),
    transactionHash = _useState3[0],
    setTransactionHash = _useState3[1];
  var childShowTransaction = function childShowTransaction(show) {
    setShowTransaction(show);
  };
  var lpTokenErc20 = useERC20Contract(addressFarmsLPToken);
  var farmsContractErc20 = useFarmsContract(addressFarmsContract);
  var _useState4 = (0,react.useState)('0.000000'),
    lpBalance = _useState4[0],
    setLpBalance = _useState4[1]; // 我的LP数量
  var _useState5 = (0,react.useState)('0.000000'),
    stakeNumber = _useState5[0],
    setStakeNumber = _useState5[1]; // 已质押数量
  var _useState6 = (0,react.useState)('0.000000'),
    availableAmount = _useState6[0],
    setAvailableAmount = _useState6[1]; // 可领取H2数量
  var _useState7 = (0,react.useState)(0),
    cliamStatus = _useState7[0],
    setCliamStatus = _useState7[1];
  var _useState8 = (0,react.useState)(true),
    showApprove = _useState8[0],
    setShowApprove = _useState8[1]; // 是否授权 true or false
  var _useState9 = (0,react.useState)(false),
    isApproveLoading = _useState9[0],
    setIsApproveLoading = _useState9[1];
  var _useState10 = (0,react.useState)(false),
    isStakeLoading = _useState10[0],
    setIsStakeLoading = _useState10[1];
  var _useState11 = (0,react.useState)(false),
    isClaimLoading = _useState11[0],
    setIsClaimLoading = _useState11[1];
  var _useState12 = (0,react.useState)(false),
    isClaimLPLoading = _useState12[0],
    setIsClaimLPLoading = _useState12[1];
  var _useState13 = (0,react.useState)(''),
    inputValue = _useState13[0],
    setInputValue = _useState13[1];
  var _useState14 = (0,react.useState)(false),
    stakeConfirmShow = _useState14[0],
    setStakeConfirmShow = _useState14[1];
  var handleBalanceData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var balance, balanceBig, getAccountInfo, stakeData, stakeLpNumber, stakeLpNumberBig, _availableAmount, availableAmountBig, balances, lastClaimTime, lastClaimTimeBig, dataTime, days;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            if (!(address && addressFarmsLPToken)) {
              _context.next = 27;
              break;
            }
            _context.next = 4;
            return lpTokenErc20.balanceOf(address);
          case 4:
            balance = _context.sent;
            balanceBig = new bignumber/* default */.Z(balance.toString()).shiftedBy(-18).toFixed(6); // console.log('balanceBig===>', balanceBig)
            setLpBalance(balanceBig);
            _context.next = 9;
            return farmsContractErc20.getAccountInfo(address);
          case 9:
            getAccountInfo = _context.sent;
            // 查询已质押数量 LP
            stakeData = getAccountInfo == null ? void 0 : getAccountInfo[0];
            stakeLpNumber = stakeData == null ? void 0 : stakeData[0];
            stakeLpNumberBig = new bignumber/* default */.Z(stakeLpNumber.toString()).shiftedBy(-18).toFixed(6); // console.log('stakeLpNumberBig===>', stakeLpNumberBig)
            setStakeNumber(stakeLpNumberBig);

            // 可领取H2
            _availableAmount = getAccountInfo == null ? void 0 : getAccountInfo[2];
            availableAmountBig = new bignumber/* default */.Z(_availableAmount.toString()).shiftedBy(-18).toFixed(6); // console.log('availableAmountBig===>', availableAmountBig)
            setAvailableAmount(availableAmountBig);

            // 查询最后领取时间，当前时间-lastClaimTime > 24小时，才可以领取
            _context.next = 19;
            return farmsContractErc20.balances(address);
          case 19:
            balances = _context.sent;
            lastClaimTime = balances == null ? void 0 : balances[3];
            lastClaimTimeBig = parseInt(new bignumber/* default */.Z(lastClaimTime.toString()).shiftedBy(0).toFixed());
            dataTime = parseInt(new Date().getTime() / 1000);
            days = parseInt((dataTime - lastClaimTimeBig) / 86400);
            setCliamStatus(days);
            // console.log('lastClaimTimeBig==>', lastClaimTimeBig)
            // console.log('dataTime==========>', dataTime)
            // console.log('days==>', days)
            _context.next = 31;
            break;
          case 27:
            setLpBalance('0.000000');
            setStakeNumber('0.000000');
            setAvailableAmount('0.000000');
            setCliamStatus(0);
          case 31:
            _context.next = 35;
            break;
          case 33:
            _context.prev = 33;
            _context.t0 = _context["catch"](0);
          case 35:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 33]]);
    }));
    return function handleBalanceData() {
      return _ref.apply(this, arguments);
    };
  }();
  var handleData = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var allowance, allowanceBig;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            if (!(address && addressFarmsLPToken && addressFarmsContract)) {
              _context2.next = 9;
              break;
            }
            _context2.next = 4;
            return lpTokenErc20.allowance(address, addressFarmsContract);
          case 4:
            allowance = _context2.sent;
            allowanceBig = new bignumber/* default */.Z(allowance.toString()).shiftedBy(-18).toFixed(0);
            if (allowanceBig > 0) {
              setShowApprove(false);
            } else {
              setShowApprove(true);
            }
            _context2.next = 10;
            break;
          case 9:
            setShowApprove(true);
          case 10:
            _context2.next = 14;
            break;
          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](0);
          case 14:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 12]]);
    }));
    return function handleData() {
      return _ref2.apply(this, arguments);
    };
  }();
  (0,react.useEffect)(function () {
    var timer = setInterval(function () {
      handleData();
      handleBalanceData();
    }, 1000);
    // 清除定时器
    return function () {
      clearInterval(timer);
    };
  });
  (0,react.useEffect)(function () {
    handleData();
    handleBalanceData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  // 授权
  var approveClick = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var contract, gas;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            setIsApproveLoading(true);
            contract = new web3.eth.Contract(abiErc20, addressFarmsLPToken); // 获取gas费
            _context3.next = 4;
            return web3.eth.getGasPrice();
          case 4:
            gas = _context3.sent;
            _context3.next = 7;
            return contract.methods.approve(addressFarmsContract, bignumbers/* MaxInt256 */.PS).send({
              from: address,
              gasPrice: gas
            }, function (err, result) {
              if (err) {
                setIsApproveLoading(false);
                console.log('Approve err===>', err);
              } else {
                console.log('Approve result===>', result);
              }
            });
          case 7:
            setIsApproveLoading(false);
          case 8:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function approveClick() {
      return _ref3.apply(this, arguments);
    };
  }();

  // input
  var inputChange = function inputChange(e) {
    var value = e.target.value.replace(/[^0-9.]/g, '');
    if (value.indexOf('.') > 0) {
      value = value.slice(0, value.indexOf('.') + 5);
    }

    // 如果数量大于我的LP数量，重置数量为我的LP数量
    if (parseFloat(value) > parseFloat(lpBalance)) {
      setInputValue(lpBalance);
    } else {
      setInputValue(value);
    }
  };
  var valueBig;
  if (inputValue) {
    valueBig = new bignumber/* default */.Z(inputValue.toString()).shiftedBy(parseInt(18)).toFixed();
  }
  var stakeClick = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var contract, gas, hash;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            setIsStakeLoading(true);
            contract = new web3.eth.Contract(abiFarms, addressFarmsContract); // 获取gas费
            _context4.next = 4;
            return web3.eth.getGasPrice();
          case 4:
            gas = _context4.sent;
            hash = null;
            _context4.next = 8;
            return contract.methods.stake(valueBig).send({
              from: address,
              gasPrice: gas
            }, function (err, result) {
              if (err) {
                setIsStakeLoading(false);
                console.log('stake err===>', err);
              } else {
                console.log('stake result===>', result);
                hash = result;
              }
            });
          case 8:
            setStakeConfirmShow(false);
            setIsStakeLoading(false);
            setShowTransaction(true);
            setTransactionHash(hash);
            setInputValue('');
          case 13:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function stakeClick() {
      return _ref4.apply(this, arguments);
    };
  }();

  // 质押
  var hadnleStakeClick = function hadnleStakeClick() {
    if (valueBig) {
      stakeClick();
    } else {
      messageApi.open({
        type: 'error',
        content: t('Please enter the pledged quantity!')
      });
    }
  };

  // 收获--只领取分红
  var claimClick = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(bool) {
      var contract, gas, hash;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            setIsClaimLoading(true);
            contract = new web3.eth.Contract(abiFarms, addressFarmsContract); // 获取gas费
            _context5.next = 4;
            return web3.eth.getGasPrice();
          case 4:
            gas = _context5.sent;
            hash = null;
            _context5.next = 8;
            return contract.methods.claim(bool).send({
              from: address,
              gasPrice: gas
            }, function (err, result) {
              if (err) {
                setIsClaimLoading(false);
                console.log('claim err===>', err);
              } else {
                console.log('claim result===>', result);
                hash = result;
              }
            });
          case 8:
            setIsClaimLoading(false);
            setShowTransaction(true);
            setTransactionHash(hash);
          case 11:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return function claimClick(_x) {
      return _ref5.apply(this, arguments);
    };
  }();

  // 提取--领取分红+质押LP
  var claimLpClick = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(bool) {
      var contract, gas, hash;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            setIsClaimLPLoading(true);
            contract = new web3.eth.Contract(abiFarms, addressFarmsContract); // 获取gas费
            _context6.next = 4;
            return web3.eth.getGasPrice();
          case 4:
            gas = _context6.sent;
            hash = null;
            _context6.next = 8;
            return contract.methods.claim(bool).send({
              from: address,
              gasPrice: gas
            }, function (err, result) {
              if (err) {
                setIsClaimLPLoading(false);
                console.log('claim LP err===>', err);
              } else {
                console.log('claim LP result===>', result);
                hash = result;
              }
            });
          case 8:
            setIsClaimLPLoading(false);
            setShowTransaction(true);
            setTransactionHash(hash);
          case 11:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    }));
    return function claimLpClick(_x2) {
      return _ref6.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react.createElement(react.Fragment, null, contextHolder, /*#__PURE__*/react.createElement(Farms_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "farms_posts"
  }, /*#__PURE__*/react.createElement("div", {
    className: "farms_bg"
  }), /*#__PURE__*/react.createElement("div", {
    className: "farms_main"
  }, /*#__PURE__*/react.createElement("div", {
    className: "farms_des"
  }, t('Incentives')), /*#__PURE__*/react.createElement("div", {
    className: "farms_tables"
  }, /*#__PURE__*/react.createElement("span", {
    className: "on"
  }, t('Dividends')), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/swap"
  }, t('Swap')))), /*#__PURE__*/react.createElement("div", {
    className: "farms_conter"
  }, /*#__PURE__*/react.createElement("div", {
    className: "farms_title"
  }, /*#__PURE__*/react.createElement("div", {
    className: "farms_tokenImg"
  }, /*#__PURE__*/react.createElement("img", {
    src: farmsToken_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("i", null, "ALEOX-BNB LP")), /*#__PURE__*/react.createElement("div", {
    className: "farms_tokenNumber"
  }, /*#__PURE__*/react.createElement("span", {
    className: "farms_number"
  }, t('My LP quantity:'), /*#__PURE__*/react.createElement("em", null, lpBalance)), /*#__PURE__*/react.createElement("span", {
    className: "farms_number"
  }, t('Pledged quantity:'), /*#__PURE__*/react.createElement("em", null, stakeNumber)))), /*#__PURE__*/react.createElement("div", {
    className: "farms_setbomt"
  }, /*#__PURE__*/react.createElement("div", {
    className: "farms_kequ"
  }, /*#__PURE__*/react.createElement("span", null, t('Harvest'), "BNB\uFF1A"), /*#__PURE__*/react.createElement("em", null, availableAmount)), address ? /*#__PURE__*/react.createElement("div", {
    className: "farms_czuo"
  }, showApprove ? /*#__PURE__*/react.createElement("div", {
    className: "farms_start",
    onClick: function onClick() {
      approveClick();
    }
  }, !isApproveLoading && /*#__PURE__*/react.createElement("span", null, t('Approve'), " LP"), isApproveLoading && !showTransaction && /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Loader_Dots, null, t('Approve'), " LP"))) : /*#__PURE__*/react.createElement("div", {
    className: "farms_start",
    onClick: function onClick() {
      setStakeConfirmShow(true);
    }
  }, t('Pledge')), cliamStatus !== 0 ? /*#__PURE__*/react.createElement(react.Fragment, null, availableAmount !== '0.000000' ? /*#__PURE__*/react.createElement("em", {
    onClick: function onClick() {
      claimClick(false);
    }
  }, !isClaimLoading && /*#__PURE__*/react.createElement("span", null, t(' Harvest ')), isClaimLoading && !showTransaction && /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Loader_Dots, null, t(' Harvest ')))) : /*#__PURE__*/react.createElement("em", {
    className: "on"
  }, t(' Harvest '))) : /*#__PURE__*/react.createElement("em", {
    className: "on"
  }, t(' Harvest ')), cliamStatus !== 0 ? /*#__PURE__*/react.createElement(react.Fragment, null, stakeNumber !== '0.000000' ? /*#__PURE__*/react.createElement("em", {
    onClick: function onClick() {
      claimLpClick(true);
    }
  }, !isClaimLPLoading && /*#__PURE__*/react.createElement("span", null, t('Extract')), isClaimLPLoading && !showTransaction && /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Loader_Dots, null, t('Extract')))) : /*#__PURE__*/react.createElement("em", {
    className: "on"
  }, t('Extract'))) : /*#__PURE__*/react.createElement("em", {
    className: "on"
  }, t('Extract'))) : /*#__PURE__*/react.createElement("div", {
    className: "farms_czuo"
  }, /*#__PURE__*/react.createElement("i", {
    onClick: function onClick() {
      return connect();
    }
  }, t('Connect Wallet'))))), /*#__PURE__*/react.createElement("div", {
    className: "swap_m_bottom"
  }))), stakeConfirmShow && /*#__PURE__*/react.createElement("div", {
    className: "farms_ConfirmStyled"
  }, /*#__PURE__*/react.createElement("div", {
    className: "farms_ConfirmContent"
  }, /*#__PURE__*/react.createElement("div", {
    className: "closeIntImg",
    onClick: function onClick() {
      setStakeConfirmShow(false);
    }
  }, /*#__PURE__*/react.createElement(CloseOutlined/* default */.Z, null)), /*#__PURE__*/react.createElement("div", {
    className: "farms_ConfirmTitle"
  }, t('Pledge'), " ALEOX-BNB LP"), /*#__PURE__*/react.createElement("div", {
    className: "farms_ConfirmLp"
  }, "LP", t('address'), addressFarmsLPToken), /*#__PURE__*/react.createElement("div", {
    className: "farms_ConfirmLp"
  }, "LP", t('balance'), lpBalance), /*#__PURE__*/react.createElement("div", {
    className: "farms_ConfirmNumber"
  }, /*#__PURE__*/react.createElement("span", null, t('Pledge amount:')), /*#__PURE__*/react.createElement(input/* default */.Z, {
    type: "text",
    value: inputValue,
    onChange: inputChange
  })), /*#__PURE__*/react.createElement("div", {
    className: "farms_ConfirmStart",
    onClick: function onClick() {
      return hadnleStakeClick();
    }
  }, !isStakeLoading && /*#__PURE__*/react.createElement("span", null, t('Pledge')), isStakeLoading && !showTransaction && /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Loader_Dots, null, t('Pledge'))))))), showTransaction && /*#__PURE__*/react.createElement(Confirm, {
    childShowTransaction: childShowTransaction,
    hashTransaction: transactionHash
  }));
};
/* harmony default export */ const Farms = (FarmsView);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/DownOutlined.js + 1 modules
var DownOutlined = __webpack_require__(7254);
// EXTERNAL MODULE: ./node_modules/copy-to-clipboard/index.js
var copy_to_clipboard = __webpack_require__(640);
var copy_to_clipboard_default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard);
;// CONCATENATED MODULE: ./public/images/BNB.png
const BNB_namespaceObject = "data:image/png;base64,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";
;// CONCATENATED MODULE: ./public/images/USDT.png
const USDT_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAq1BMVEUAAAAgn4Akp4AkqIAjqIAkqYAkqYAlqYAkqoAkqoAlp4AlqoAgp4AjqYAlqoEop4AmrIEkqYAlqoAmqYEkqYAlqYAkqIAlqIAgr4Alp4AjpoAkqYA/tI///fp3yK7j8utow6bI6NxAtJB2yK6S072t3s2649TW7eOEzrZbvp9NuZcyroe749Sf2MQxrofk8utpw6at3szx+PPk8+tAtI/x+PLj8+uR073///8cdPijAAAAG3RSTlMAEEBwkK/P3++/YJ8gUG8gX48wX++gsJ8QoFCoGir2AAAAAWJLR0Q4oAel1gAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+UGEQQPHpcmbLsAAAM5SURBVGjexZrtdqMgEIZRNKhpN036le6UTf2KYmLSNd3d+7+z/ZG2SSwiKHP6/jQn8wADA8xAiJYcl3r+hAUAAAELfY+6DrElJ5oykGgyja4sWKchKBSOZLhK60f518Mbz0BLLBpk/0cA2hqAcBkYyRAx88FYUwN33wQwQNqdcOYwUHOtxTdjMFhMY5gWAYwQW/QOP4zUbc/kh9GiyPaVhBuwos5RWoAlLezPz0vdSWerY80+AJOtuDlY1Pyr/Qis6hbPAR1uuAfL8lEHCADAvQBIBuiZG+iXZCb1dWAs4CJkMAzAnaP2wGjAWRcYDuDTC9eAA/icSA9YgPB9EQMWABzVIrMBOLo5xAOEihGC51VL5wbbv71A9xhph6H4DKD7n8gkjg4BPBJCJpgARsgSMAHgEBcX4BKKC6DEwwV4HYHopOQlzfJ1sSou10GxiuM8K0XV8/cH0n0T3ogyL4ptXaZVsgOAfasHiXgt621RrDOx6TQyIR3HlU0ZF3l60b59xxBVr7+LOKu65qn0QiPiJhPtj3uFD57LVZFKz0dE1vqY17uvn/dqJ2f88Cb5LANseSxrTA8Atvyw0wNw/ufNHLDZcy70ABnnh9QUIArO/8qGSObkrOH8ULebsz2F/6Jt/V/MudRxdx1HlnLFOW/i+qXaqBfSJknrdcM5b2ohn6Zd0Vpk76Ghidd1VqZCVEmSJABJkiSVEGma1fnH8l7VYte1aapChSjruFFvxk2Rl13Gj6GiN9jtKpFmdR5foOI4z7P0tdr1Bzv0cI2+4aBvmYRhAiaEkCfsYwv6wWuJCbhSHH5tAI4XBIoHOCY6l3iA93xCiAV4+MhTYwF+Kq+x4wGnZALFAZxy2csAA3CeDaEYgKgnnTMWwC4LHvYBrWqCbxvw2E4KBnYBXysJkV2ApNzi2QR4kszvsm8mlflJQ1LLOm7QvX5ffU9631p6VlFPozbsK4s4FNm+hVHqrTcuRuX5g8X3lxoJWXpD7Xu6LxWiQZ0IDGrWsydz+77Z+wTTTjDXuKpvggjooHcJughGBz9DudbYSUOXjNEsUj89oRbe0MyiJ2k6gE0jiy90XOr54cfzn4nB85//6QsJ/u8dPR4AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDYtMTdUMDQ6MTQ6MzgrMDA6MDBJi2a/AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA2LTE3VDA0OjE0OjM4KzAwOjAwONbeAwAAAABJRU5ErkJggg==";
;// CONCATENATED MODULE: ./public/images/ALEOX.png
const ALEOX_namespaceObject = "data:image/png;base64,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";
;// CONCATENATED MODULE: ./public/images/xiajiantou.png
const xiajiantou_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAATCAYAAAB2pebxAAAAAXNSR0IArs4c6QAAAYBJREFUOE/tlL9KA0EQxr+J5LATESsRLewEwRdQsVARQSxyRTYrkQRrEbSxEmxEsbNIoSdmb4UF/xSCYBNE9AF8BxtLJcgtuiMXLhBjEh9AtxrYmR/DzHwfocNTSq0BWE+lUgvZbPapXSr9ArkCsEhEK0KIk38IoJT6kzPRWk865wJm3pVSlhpvod1MjDGetfYUwHC1Wp2mMAzzzBzExUS0LIQo10GtIMaYLmvtGYAMAOucGyRmjkHHAPIAPgAs5XK56xjUClIul0tEtArAEVFGCHFRO/uEfh6fOIB3Zp6VUt43Q5RSOwC2kq6LQoijWlxvPQiC7nQ6fQNgCsArM08Q0XZdOwB6mfkgzmfmTSnlXr32mwCNMT1RFFWIaBzACzM/J/EtgJkEsC+l3GhcwA8VG2P6rbWPAEZaqPZYCFEkIu4IiT/DMBxi5gcAAw3Jl57nZXzf/2yGt/UTrfWoc+4OQB+Aiud5c77v21ae0tGUtNZjzrn5KIoOC4XCWztT+gKB3M7lSVpYFwAAAABJRU5ErkJggg==";
;// CONCATENATED MODULE: ./src/pages/Swap/index.jsx











var Swap_templateObject;
function Swap_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ Swap_regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }







function Swap_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function Swap_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { Swap_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { Swap_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function Swap_taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }























var Swap_CustomStyle = styled_components_browser_esm/* default.div */.ZP.div(Swap_templateObject || (Swap_templateObject = Swap_taggedTemplateLiteralLoose(["\n\t.farms_posts {\n\t\tposition: relative;\n\t}\n\n\t.farms_bg {\n\t\twidth: 100%;\n\t\theight: 306px;\n\t\tbackground: linear-gradient(-90deg, #61B843, #018095);\n\t}\n\n\t.farms_main {\n\t\tposition: absolute;\n\t\tleft: 50%;\n\t\tbottom: -712px;\n\t\twidth: 760px;\n\t\tmargin-left: -380px;\n\t\tpadding-bottom: 120px\n\t}\n\n\t.farms_des {\n\t\tfont-size: 39px;\n\t\tcolor: #fff;\n\t\tfont-weight: bold;\n\t\tline-height: 38px;\n\t\tmargin-bottom: 38px;\n\t}\n\n\t.farms_conter {\n\t\tbackground: #12161B;\n\t\tborder-radius: 16px;\n\t\tpadding: 30px;\n\t}\n\n\t.farms_tables {\n\t\tmargin-left: 15px;\n\t\tmargin-bottom: -1px;\n\t\tspan {\n\t\t\tdisplay: inline-block;\n\t\t\twidth: 171px;\n\t\t\theight: 46px;\n\t\t\tline-height: 46px;\n\t\t\ttext-align: center;\n\t\t\tfont-weight: bold;\n\t\t\tcolor: #FFFFFF;\n\t\t\tcursor: pointer;\n\t\t}\n\t\t.on {\n\t\t\tcolor: #36B37E;\n\t\t\tbackground: #12161B;\n\t\t\tborder-radius: 10px 10px 0px 0px;\n\t\t\tcursor: auto;\n\t\t}\n\t\ta {\n\t\t\tdisplay: block;\n\t\t\tcolor: #FFFFFF;\n\t\t}\n\t}\n\n\t.swap_conter {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\theight: 80px;\n\t\tline-height: 80px;\n\t\tbackground: #090B0C;\n\t\tborder-radius: 16px;\n\t\tpadding: 0 24px;\n\t\tspan {\n\t\t\tfont-size: 16px;\n\t\t\tfont-weight: bold;\n\t\t\tcolor: #fff;\n\t\t}\n\t\timg {\n\t\t\tmargin-right: 17px;\n\t\t\twidth: 42px;\n\t\t\theight: 42px;\n\t\t}\n\t\tinput {\n\t\t\twidth: 50%;\n\t\t\ttext-align: right;\n\t\t\tborder: none;\n\t\t\tbackground: #090B0C;\n\t\t\tfont-size: 18px;\n\t\t\tcolor: #fff;\n\t\t\t&:focus {\n\t\t\t\tbox-shadow: none;\n\t\t\t}\n\t\t\t&:focus-visible {\n\t\t\t\toutline: 0;\n\t\t\t}\n\t\t\t::placeholder {\n\t\t\t\tcolor: #eee;\n\t\t\t\topacity: .6;\n\t\t\t\tfont-size: 18px;\n\t\t\t}\n\t\t}\n\t\tem {\n\t\t\tpadding: 0 11px;\n\t\t\tcolor: #eee;\n\t\t}\n\t\ti {\n\t\t\tspan {\n\t\t\t\tcolor: #fff;\n\t\t\t\tfont-size: 13px;\n\t\t\t\tmargin-left: 8px;\n\t\t\t\tvertical-align: middle;\n\t\t\t}\n\t\t}\n\t}\n\n\t.swap_banclot {\n\t\tfont-size: 12px;\n\t\tcolor: #fff;\n\t\ttext-align: right;\n\t\tpadding-top: 10px;\n\t\tspan {\n\t\t\topacity: .7;\n\t\t}\n\t}\n\n\t.swap_tou {\n\t\tmargin-top: -15px;\n\t\tmargin-bottom: 13px;\n\t\tmargin-left: 35px;\n\t}\n\n\t.swap_bottom {\n\t\twidth: 100%;\n\t\theight: 47px;\n\t\tline-height: 47px;\n\t\tbackground: #36B37E;\n\t\tborder-radius: 6px;\n\t\tcolor: rgb(255, 255, 255);\n\t\tfont-size: 16px;\n\t\ttext-align: center;\n\t\tmargin-top: 30px;\n\t\tcursor: pointer;\n\t}\n\n\t.swap_guang {\n\t\tmargin-top: 60px;\n\t}\n\n\t.swap_link {\n\t\tdisplay: inline-block;\n\t\theight: 43px;\n\t\tline-height: 43px;\n\t\tbackground: #090B0C;\n\t\tborder-radius: 6px;\n\t\tpadding: 0 17px;\n\t\tfont-size: 12px;\n\t\tspan {\n\t\t\tcolor: #fff;\n\t\t}\n\t\tem {\n\t\t\tmargin-left: 10px;\n\t\t\tmargin-right: 36px;\n\t\t\tcolor: #36B37E;\n\t\t}\n\t\ti {\n\t\t\tdisplay: inline-block;\n\t\t\twidth: 54px;\n\t\t\theight: 28px;\n\t\t\tline-height: 28px;\n\t\t\tbackground: #36B37E;\n\t\t\tborder-radius: 6px;\n\t\t\tfont-weight: bold;\n\t\t\tcolor: #FFFFFF;\n\t\t\ttext-align: center;\n\t\t\tcursor: pointer;\n\t\t\t&:hover {\n\t\t\t\topacity: .8;\n\t\t\t}\n\t\t}\n\t}\n\n\t.swap_notlink {\n\t\tfont-size: 12px;\n\t\tcolor: #fff;\n\t}\n\t\n\t.swap_pool {\n\t\tfont-size: 16px;\n\t\tcolor: #fff;\n\t\tfont-weight: bold;\n\t\tpadding: 16px 0;\n\t\tmargin-bottom: 16px;\n\t\tborder-bottom: 1px solid rgb(255, 255, 255, 0.14);\n\t}\n\n\t.swap_ming {\n\t\tfont-size: 12px;\n\t\tcolor: #fff;\n\t\tline-height: 25px;\n\t\tspan {\n\t\t\tdisplay: block;\n\t\t}\n\t\ti {\n\t\t\tfont-weight: bold;\n\t\t}\n\t\tem {\n\t\t\tfont-weight: bold;\n\t\t\tcolor: #36B37E;\n\t\t}\n\t}\n\n\t.swap_select {\n\t\tposition: absolute;\n\t\tbackground: #12161B;\n\t\tborder-radius: 16px;\n\t\tpadding-left: 24px;\n\t\tmargin-top: 10px;\n\t\twidth: 200px;\n\t\tpadding-bottom: 15px;\n\t\tz-index: 99;\n\t\tspan {\n\t\t\tdisplay: block;\n\t\t\tpadding-top: 15px;\n\t\t\tcursor: pointer;\n\t\t}\n\t\timg {\n\t\t\twidth: 42px;\n\t\t\theight: 42px;\n\t\t\tmargin-right: 10px;\n\t\t}\n\t}\n\t\n\n\t@media (max-width: 1500px) {\n\t\t.farms_des {\n\t\t\tmargin-bottom: 2rem;\n\t\t}\n\t}\n\n\t@media (max-width: 1200px) {\n\t\t.farms_des {\n\t\t\tmargin-bottom: 2rem;\n\t\t}\n\t}\n\n\t@media (max-width: 750px) {\n\t\t.farms_bg {\n\t\t\theight: 200px;\n\t\t}\n\t\t.farms_main {\n\t\t\twidth: 90%;\n\t\t\tleft: 0;\n\t\t\tmargin-left: 5%;\n\t\t\tbottom: 0px;\n\t\t\ttop: 25%;\n\t\t}\n\t\t.farms_conter {\n\t\t\tpadding: 30px 20px;\n\t\t}\n\t\t.swap_link {\n\t\t\theight: auto;\n\t\t\tem {\n\t\t\t\tdisplay: block;\n\t\t\t\tword-break: break-all;\n\t\t\t\tline-height: 20px;\n\t\t\t\tmargin-left: 0px;\n\t\t\t\tmargin-right: 0px;\n\t\t\t}\n\t\t}\n\t\t.swap_guang {\n\t\t\tmargin-top: 40px;\n\t\t}\n\t\t.swap_m_bottom {\n\t\t\theight: 100px;\n\t\t}\n\t\t.farms_tables  {\n\t\t\tspan {\n\t\t\t\twidth: 150px;\n\t\t\t}\n\t\t}\n\t}\n"])));
var SwapView = function SwapView() {
  var _useTranslation = (0,dist_es/* useTranslation */.$G)(),
    i18n = _useTranslation.i18n,
    t = _useTranslation.t;
  (0,react.useEffect)(function () {
    var language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  var _useState = (0,react.useState)(_isMobile()),
    isMobile = _useState[0],
    setIsMobile = _useState[1];
  var _useAccount = (0,wagmi_dist/* useAccount */.mA)(),
    address = _useAccount.address,
    isConnected = _useAccount.isConnected;
  var _useConnect = (0,wagmi_dist/* useConnect */.$4)({
      connector: new chunk_2VZS2JHJ/* InjectedConnector */._()
    }),
    connect = _useConnect.connect;
  var _useNetwork = (0,wagmi_dist/* useNetwork */.LN)(),
    chain = _useNetwork.chain,
    chains = _useNetwork.chains;
  var ethereumHelper = window.ethereum || false;
  var web3 = new (web3_min_default())(ethereumHelper);
  var _message$useMessage = message/* default.useMessage */.ZP.useMessage(),
    messageApi = _message$useMessage[0],
    contextHolder = _message$useMessage[1];
  var _useState2 = (0,react.useState)(false),
    showTransaction = _useState2[0],
    setShowTransaction = _useState2[1];
  var _useState3 = (0,react.useState)(''),
    transactionHash = _useState3[0],
    setTransactionHash = _useState3[1];
  var childShowTransaction = function childShowTransaction(show) {
    setShowTransaction(show);
  };
  var h2TokenErc20 = useERC20Contract(addressH2Token);
  var usdtTokenErc20 = useERC20Contract(addressUSDTToken);
  var swapContractErc20 = useSwapContract(addressSwapContract);
  var _useState4 = (0,react.useState)([{
      symbol: 'BNB',
      img: BNB_namespaceObject
    }, {
      symbol: 'USDT',
      img: USDT_namespaceObject
    }]),
    selectCurrency = _useState4[0],
    setSelectCurrency = _useState4[1]; // 币种列表
  var _useState5 = (0,react.useState)(selectCurrency[0]),
    onCurrency = _useState5[0],
    setOnCurrency = _useState5[1];
  var _useState6 = (0,react.useState)(false),
    isCurrencyShow = _useState6[0],
    setIsCurrencyShow = _useState6[1];
  var _useState7 = (0,react.useState)('0.000000'),
    bnbBalance = _useState7[0],
    setBnbBalance = _useState7[1]; // 我的BNB数量
  var _useState8 = (0,react.useState)('0.000000'),
    usdtBalance = _useState8[0],
    setUsdtBalance = _useState8[1]; // 我的USDT数量
  var _useState9 = (0,react.useState)('0.00'),
    h2Balance = _useState9[0],
    setH2Balance = _useState9[1]; // 我的H2数量
  var _useState10 = (0,react.useState)(''),
    inputValue = _useState10[0],
    setInputValue = _useState10[1];
  var _useState11 = (0,react.useState)('0.00'),
    h2Number = _useState11[0],
    setH2Number = _useState11[1]; // 可获得H2数量
  var _useState12 = (0,react.useState)('0.00'),
    poolBalance = _useState12[0],
    setPoolBalance = _useState12[1]; // 激励池余额
  var _useState13 = (0,react.useState)(true),
    showApprove = _useState13[0],
    setShowApprove = _useState13[1]; // 是否授权 true or false
  var _useState14 = (0,react.useState)(false),
    isSwapLoading = _useState14[0],
    setIsSwapLoading = _useState14[1];
  var location = (0,react_router_dist/* useLocation */.TH)();
  var pathname = location && location.pathname;
  var referrer = pathname.split('swap/')[1];
  var handleBalanceData = /*#__PURE__*/function () {
    var _ref = Swap_asyncToGenerator( /*#__PURE__*/Swap_regeneratorRuntime().mark(function _callee() {
      var balanceBNB, balanceBNBBig, balanceUSDT, balanceUSDTBig, balance, balanceBig, poolBalanceOf, poolBalanceBig;
      return Swap_regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            if (!(address && addressH2Token)) {
              _context.next = 24;
              break;
            }
            _context.next = 4;
            return web3.eth.getBalance(address);
          case 4:
            balanceBNB = _context.sent;
            balanceBNBBig = new bignumber/* default */.Z(balanceBNB.toString()).shiftedBy(-18).toFixed(6);
            setBnbBalance(balanceBNBBig);
            // console.log('BNB===>', balanceBNB)
            // console.log('BNBBig===>', balanceBNBBig)

            // 查询余额 USDT
            _context.next = 9;
            return usdtTokenErc20.balanceOf(address);
          case 9:
            balanceUSDT = _context.sent;
            balanceUSDTBig = new bignumber/* default */.Z(balanceUSDT.toString()).shiftedBy(-18).toFixed(2);
            setUsdtBalance(balanceUSDTBig);

            // 查询余额 H2
            _context.next = 14;
            return h2TokenErc20.balanceOf(address);
          case 14:
            balance = _context.sent;
            balanceBig = new bignumber/* default */.Z(balance.toString()).shiftedBy(-18).toFixed(2);
            setH2Balance(balanceBig);
            // console.log('h2 balance===>', balance)

            // 查询激励池余额
            _context.next = 19;
            return swapContractErc20.balanceOf();
          case 19:
            poolBalanceOf = _context.sent;
            poolBalanceBig = new bignumber/* default */.Z(poolBalanceOf.toString()).shiftedBy(-18).toFixed(2);
            setPoolBalance(poolBalanceBig);
            _context.next = 28;
            break;
          case 24:
            setBnbBalance('0.000000');
            setUsdtBalance('0.000000');
            setH2Balance('0.00');
            setPoolBalance('0.00');
          case 28:
            _context.next = 33;
            break;
          case 30:
            _context.prev = 30;
            _context.t0 = _context["catch"](0);
            console.log('error===>', _context.t0);
          case 33:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 30]]);
    }));
    return function handleBalanceData() {
      return _ref.apply(this, arguments);
    };
  }();
  var handleData = /*#__PURE__*/function () {
    var _ref2 = Swap_asyncToGenerator( /*#__PURE__*/Swap_regeneratorRuntime().mark(function _callee2() {
      var allowance, allowanceBig;
      return Swap_regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            if (!(address && addressUSDTToken && addressSwapContract)) {
              _context2.next = 9;
              break;
            }
            _context2.next = 4;
            return usdtTokenErc20.allowance(address, addressSwapContract);
          case 4:
            allowance = _context2.sent;
            allowanceBig = new bignumber/* default */.Z(allowance.toString()).shiftedBy(-18).toFixed(0);
            if (allowanceBig > 0) {
              setShowApprove(false);
            } else {
              setShowApprove(true);
            }
            _context2.next = 10;
            break;
          case 9:
            setShowApprove(true);
          case 10:
            _context2.next = 14;
            break;
          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](0);
          case 14:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 12]]);
    }));
    return function handleData() {
      return _ref2.apply(this, arguments);
    };
  }();
  (0,react.useEffect)(function () {
    var timer = setInterval(function () {
      handleBalanceData();
      handleData();
    }, 1000);
    // 清除定时器
    return function () {
      clearInterval(timer);
    };
  });
  (0,react.useEffect)(function () {
    handleBalanceData();
    handleData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address, chain]);

  // 选择资产币种
  var handleClickCurrency = function handleClickCurrency(item) {
    setOnCurrency(item);
    setIsCurrencyShow(false);
    setInputValue('');
  };

  // input
  var inputChange = function inputChange(e) {
    var value = e.target.value.replace(/[^0-9.]/g, '');
    if (value.indexOf('.') > 0) {
      value = value.slice(0, value.indexOf('.') + 5);
    }
    if (onCurrency && (onCurrency == null ? void 0 : onCurrency.symbol) === 'BNB') {
      // 如果数量大于我的BNB数量，重置数量为我的BNB数量
      if (parseFloat(value) > parseFloat(bnbBalance)) {
        setInputValue(bnbBalance - bnbBalance * 0.01);
      } else {
        setInputValue(value);
      }
    } else {
      // 如果数量大于我的USDT数量，重置数量为我的USDT数量
      if (parseFloat(value) > parseFloat(usdtBalance)) {
        setInputValue(usdtBalance);
      } else {
        setInputValue(value);
      }
    }
  };
  var valueBig;
  if (inputValue) {
    valueBig = new bignumber/* default */.Z(inputValue.toString()).shiftedBy(parseInt(18)).toFixed();
  }
  var handleAmountsOut = /*#__PURE__*/function () {
    var _ref3 = Swap_asyncToGenerator( /*#__PURE__*/Swap_regeneratorRuntime().mark(function _callee3() {
      var getAmountsOut, h2NumberOut, h2NumberBig, getAmountsOutByUSD, h2NumberOutByUSD, h2NumberOutByUSDBig;
      return Swap_regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            if (!(address && addressSwapContract)) {
              _context3.next = 19;
              break;
            }
            if (!(onCurrency && (onCurrency == null ? void 0 : onCurrency.symbol) === 'BNB')) {
              _context3.next = 11;
              break;
            }
            _context3.next = 5;
            return swapContractErc20.getAmountsOut(valueBig);
          case 5:
            getAmountsOut = _context3.sent;
            h2NumberOut = getAmountsOut == null ? void 0 : getAmountsOut[1];
            h2NumberBig = new bignumber/* default */.Z(h2NumberOut.toString()).shiftedBy(-18).toFixed(2);
            setH2Number(h2NumberBig);
            _context3.next = 17;
            break;
          case 11:
            _context3.next = 13;
            return swapContractErc20.getAmountsOutByUSD(valueBig);
          case 13:
            getAmountsOutByUSD = _context3.sent;
            h2NumberOutByUSD = getAmountsOutByUSD == null ? void 0 : getAmountsOutByUSD[2];
            h2NumberOutByUSDBig = new bignumber/* default */.Z(h2NumberOutByUSD.toString()).shiftedBy(-18).toFixed(2);
            setH2Number(h2NumberOutByUSDBig);
          case 17:
            _context3.next = 20;
            break;
          case 19:
            setH2Number('0.00');
          case 20:
            _context3.next = 25;
            break;
          case 22:
            _context3.prev = 22;
            _context3.t0 = _context3["catch"](0);
            setH2Number('0.00');
          case 25:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 22]]);
    }));
    return function handleAmountsOut() {
      return _ref3.apply(this, arguments);
    };
  }();
  (0,react.useEffect)(function () {
    if (inputValue > 0) {
      handleAmountsOut();
    } else {
      setH2Number('0.00');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);
  var swapClick = /*#__PURE__*/function () {
    var _ref4 = Swap_asyncToGenerator( /*#__PURE__*/Swap_regeneratorRuntime().mark(function _callee4() {
      var contract, gas, hash, referrerAddress;
      return Swap_regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            setIsSwapLoading(true);
            contract = new web3.eth.Contract(abiSwap, addressSwapContract); // 获取gas费
            _context4.next = 4;
            return web3.eth.getGasPrice();
          case 4:
            gas = _context4.sent;
            hash = null;
            _context4.prev = 6;
            referrerAddress = '0x0000000000000000000000000000000000000000';
            if (referrer) {
              referrerAddress = referrer;
            }
            if (!(referrer === address)) {
              _context4.next = 13;
              break;
            }
            messageApi.open({
              type: 'error',
              content: t('Promoters cannot be themselves!')
            });
            setIsSwapLoading(false);
            return _context4.abrupt("return");
          case 13:
            if (!(onCurrency && (onCurrency == null ? void 0 : onCurrency.symbol) === 'BNB')) {
              _context4.next = 18;
              break;
            }
            _context4.next = 16;
            return contract.methods.swapExactETHForH2(referrerAddress).send({
              from: address,
              value: valueBig,
              gasPrice: gas
            }, function (err, result) {
              if (err) {
                setIsSwapLoading(false);
                console.log('stake err===>', err);
              } else {
                console.log('stake result===>', result);
                hash = result;
              }
            });
          case 16:
            _context4.next = 20;
            break;
          case 18:
            _context4.next = 20;
            return contract.methods.swapExactUSDForH2(valueBig, referrerAddress).send({
              from: address,
              gasPrice: gas
            }, function (err, result) {
              if (err) {
                setIsSwapLoading(false);
                console.log('stake err===>', err);
              } else {
                console.log('stake result===>', result);
                hash = result;
              }
            });
          case 20:
            setIsSwapLoading(false);
            setShowTransaction(true);
            setTransactionHash(hash);
            setInputValue('');
            _context4.next = 29;
            break;
          case 26:
            _context4.prev = 26;
            _context4.t0 = _context4["catch"](6);
            console.log('swap error===>', _context4.t0);
          case 29:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[6, 26]]);
    }));
    return function swapClick() {
      return _ref4.apply(this, arguments);
    };
  }();

  // 兑换
  var hadnleSwapClick = function hadnleSwapClick() {
    if (valueBig) {
      swapClick();
    } else {
      messageApi.open({
        type: 'error',
        content: t('Please enter the redemption quantity!')
      });
    }
  };

  // 授权
  var approveClick = /*#__PURE__*/function () {
    var _ref5 = Swap_asyncToGenerator( /*#__PURE__*/Swap_regeneratorRuntime().mark(function _callee5() {
      var contract, gas;
      return Swap_regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            setIsSwapLoading(true);
            contract = new web3.eth.Contract(abiErc20, addressUSDTToken); // 获取gas费
            _context5.next = 4;
            return web3.eth.getGasPrice();
          case 4:
            gas = _context5.sent;
            _context5.next = 7;
            return contract.methods.approve(addressSwapContract, bignumbers/* MaxInt256 */.PS).send({
              from: address,
              gasPrice: gas
            }, function (err, result) {
              if (err) {
                setIsSwapLoading(false);
                console.log('Approve err===>', err);
              } else {
                console.log('Approve result===>', result);
              }
            });
          case 7:
            setIsSwapLoading(false);
          case 8:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return function approveClick() {
      return _ref5.apply(this, arguments);
    };
  }();
  var handleCopy = function handleCopy() {
    copy_to_clipboard_default()("https://aleox.io/#/swap/" + address);
    messageApi.open({
      type: 'success',
      content: t('Copy successful!')
    });
  };
  return /*#__PURE__*/react.createElement(react.Fragment, null, contextHolder, /*#__PURE__*/react.createElement(Swap_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "farms_posts"
  }, /*#__PURE__*/react.createElement("div", {
    className: "farms_bg"
  }), /*#__PURE__*/react.createElement("div", {
    className: "farms_main"
  }, /*#__PURE__*/react.createElement("div", {
    className: "farms_des"
  }, t('Incentives')), /*#__PURE__*/react.createElement("div", {
    className: "farms_tables"
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/farms"
  }, t('Dividends'))), /*#__PURE__*/react.createElement("span", {
    className: "on"
  }, t('Swap'))), /*#__PURE__*/react.createElement("div", {
    className: "farms_conter"
  }, /*#__PURE__*/react.createElement("div", {
    className: "swap_conter"
  }, /*#__PURE__*/react.createElement("span", {
    style: {
      cursor: 'pointer'
    },
    onClick: function onClick() {
      setIsCurrencyShow(!isCurrencyShow);
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: onCurrency == null ? void 0 : onCurrency.img,
    alt: ""
  }), onCurrency == null ? void 0 : onCurrency.symbol, /*#__PURE__*/react.createElement("i", null, /*#__PURE__*/react.createElement(DownOutlined/* default */.Z, null))), /*#__PURE__*/react.createElement(input/* default */.Z, {
    type: "text",
    placeholder: "0.00",
    value: inputValue,
    onChange: inputChange
  })), isCurrencyShow && /*#__PURE__*/react.createElement("div", {
    className: "swap_select"
  }, selectCurrency && selectCurrency.length > 0 && selectCurrency.map(function (item, index) {
    return /*#__PURE__*/react.createElement("span", {
      key: index,
      onClick: function onClick() {
        handleClickCurrency(item);
      }
    }, /*#__PURE__*/react.createElement("img", {
      src: item.img,
      alt: ""
    }), " ", item.symbol);
  })), onCurrency && (onCurrency == null ? void 0 : onCurrency.symbol) === 'BNB' ? /*#__PURE__*/react.createElement("div", {
    className: "swap_banclot"
  }, /*#__PURE__*/react.createElement("span", null, t('balance')), bnbBalance, " ", /*#__PURE__*/react.createElement("span", null, "BNB")) : /*#__PURE__*/react.createElement("div", {
    className: "swap_banclot"
  }, /*#__PURE__*/react.createElement("span", null, t('balance')), usdtBalance, " ", /*#__PURE__*/react.createElement("span", null, "USDT")), /*#__PURE__*/react.createElement("div", {
    className: "swap_tou"
  }, /*#__PURE__*/react.createElement("img", {
    src: xiajiantou_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("div", {
    className: "swap_conter"
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("img", {
    src: ALEOX_namespaceObject,
    alt: ""
  }), "ALEOX"), /*#__PURE__*/react.createElement("em", null, h2Number)), /*#__PURE__*/react.createElement("div", {
    className: "swap_banclot"
  }, /*#__PURE__*/react.createElement("span", null, t('balance')), h2Balance, " ", /*#__PURE__*/react.createElement("span", null, "ALEOX")), address ? /*#__PURE__*/react.createElement(react.Fragment, null, onCurrency && (onCurrency == null ? void 0 : onCurrency.symbol) === 'BNB' ? /*#__PURE__*/react.createElement("div", {
    className: "swap_bottom",
    onClick: function onClick() {
      return hadnleSwapClick();
    }
  }, !isSwapLoading && /*#__PURE__*/react.createElement("span", null, t(' Swap ')), isSwapLoading && !showTransaction && /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Loader_Dots, null, t(' Swap ')))) : /*#__PURE__*/react.createElement("div", null, showApprove ? /*#__PURE__*/react.createElement("div", {
    className: "swap_bottom",
    onClick: function onClick() {
      return approveClick();
    }
  }, !isSwapLoading && /*#__PURE__*/react.createElement("span", null, t('Approve'), " USDT"), isSwapLoading && !showTransaction && /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Loader_Dots, null, t('Approve'), " USDT"))) : /*#__PURE__*/react.createElement("div", {
    className: "swap_bottom",
    onClick: function onClick() {
      return hadnleSwapClick();
    }
  }, !isSwapLoading && /*#__PURE__*/react.createElement("span", null, t(' Swap ')), isSwapLoading && !showTransaction && /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Loader_Dots, null, t(' Swap ')))))) : /*#__PURE__*/react.createElement("div", {
    className: "swap_bottom",
    onClick: function onClick() {
      return connect();
    }
  }, t('Connect Wallet'))), /*#__PURE__*/react.createElement("div", {
    className: "farms_conter swap_guang"
  }, h2Balance > '1000' ? /*#__PURE__*/react.createElement("div", {
    className: "swap_link"
  }, /*#__PURE__*/react.createElement("span", null, t('Promotion link:')), /*#__PURE__*/react.createElement("em", null, "https://aleox.io/#/swap/", address), /*#__PURE__*/react.createElement("i", {
    onClick: handleCopy
  }, t('Copy'))) : /*#__PURE__*/react.createElement("div", {
    className: "swap_notlink"
  }, t('ALEOX balance is less than 1000, unable to promote!')), /*#__PURE__*/react.createElement("div", {
    className: "swap_pool"
  }, t('Incentive Pool Balance:'), poolBalance, " ALEOX"), /*#__PURE__*/react.createElement("div", {
    className: "swap_ming"
  }, /*#__PURE__*/react.createElement("span", null, t('Community members who promote will receive a'), " ", /*#__PURE__*/react.createElement("i", null, "5%"), " ", t('ALEOX rebate every time they purchase from the official website DApp.')), /*#__PURE__*/react.createElement("span", null, t('Promoters need to hold'), " ", /*#__PURE__*/react.createElement("em", null, "1000"), " ", t('ALEOXs to enjoy rebate privileges.')))), /*#__PURE__*/react.createElement("div", {
    className: "swap_m_bottom"
  })))), showTransaction && /*#__PURE__*/react.createElement(Confirm, {
    childShowTransaction: childShowTransaction,
    hashTransaction: transactionHash
  }));
};
/* harmony default export */ const Swap = (SwapView);
;// CONCATENATED MODULE: ./public/images/mintBg.png
const mintBg_namespaceObject = __webpack_require__.p + "1eadb98d621e94290522.png";
;// CONCATENATED MODULE: ./public/images/mintBg-m.png
const mintBg_m_namespaceObject = __webpack_require__.p + "1eadb98d621e94290522.png";
;// CONCATENATED MODULE: ./src/pages/Mint/index.jsx












var Mint_templateObject;
function Mint_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ Mint_regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }


function Mint_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function Mint_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { Mint_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { Mint_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function Mint_taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }
















var Mint_CustomStyle = styled_components_browser_esm/* default.div */.ZP.div(Mint_templateObject || (Mint_templateObject = Mint_taggedTemplateLiteralLoose(["\n\ttext-align: center;\n\n\t.mint_bg {\n\t\twidth: 100%;\n\t\theight: 250px;\n\t\tbackground: linear-gradient(-90deg, #61B843, #018095);\n\t}\n\n\t.mint_abost {\n\t\tposition: absolute;\n\t\ttop: 0px;\n\t\tleft: 50%;\n\t\twidth: 1033px;\n\t\tmargin-left: -516px;\n\t}\n\n\t.mint_conterbg {\n\t\tposition: relative;\n\t\tmargin: auto;\n\t\timg {\n\t\t\twidth: 1033px;\n\t\t\theight: 100%;\n\t\t\tmargin-top: 110px;\n\t\t}\n\t}\n\t\n\t.mint_title {\n\t\tposition: absolute;\n\t\ttop: 60px;\n\t\twidth: 100%;\n\t\tfont-size: 39px;\n\t\tfont-family: \"Poppins-Bold\";\n\t\tcolor: #FEFEFE;\n\t\tmargin-left: -20px;\n\t}\n\n\t.mint_jindu {\n\t\tposition: absolute;\n\t\tbottom: 180px;\n\t\tleft: 50%;\n\t\tmargin-left: -285px;\n\t\twidth: 573px;\n\t\ttext-align: left;\n\t\tspan {\n\t\t\tposition: relative;\n\t\t\tdisplay: inline-block;\n\t\t\twidth: 573px;\n\t\t\theight: 8px;\n\t\t\tbackground: #FFFFFF;\n\t\t\tborder-radius: 4px;\n\t\t\toverflow: hidden;\n\t\t}\n\t\tem {\n\t\t\tposition: absolute;\n\t\t\tleft: 0px;\n\t\t\theight: 8px;\n\t\t\tbackground: #38FF67;\n\t\t\tborder-radius: 4px;\n\t\t}\n\t}\n\n\t.mint_jinblan {\n\t\tposition: absolute;\n\t\tbottom: 150px;\n\t\tleft: 50%;\n\t\tmargin-left: -285px;\n\t\twidth: 573px;\n\t\ttext-align: left;\n\t\tspan {\n\t\t\tposition: relative;\n\t\t\tdisplay: inline-block;\n\t\t\twidth: 573px;\n\t\t\theight: 8px;\n\t\t\tbackground: #FFFFFF;\n\t\t\tborder-radius: 4px;\n\t\t\toverflow: hidden;\n\t\t}\n\t\tem {\n\t\t\tposition: absolute;\n\t\t\tleft: 0px;\n\t\t\theight: 8px;\n\t\t\tbackground: #38FF67;\n\t\t\tborder-radius: 4px;\n\t\t}\n\t}\n\n\t.mint_jinbnbblan {\n\t\tbottom: 125px;\n\t}\n\n\t.mint_jiflex {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\ti {\n\t\t\tdisplay: block;\n\t\t\tfont-size: 16px;\n\t\t\tfont-family: \"Poppins-Regular\";\n\t\t\tcolor: #FEFEFE;\n\t\t\tline-height: 26px;\n\t\t}\n\t}\n\n\t.mint_bottom {\n\t\tposition: relative;\n\t\twidth: 181px;\n\t\theight: 54px;\n\t\tline-height: 54px;\n\t\tbackground: #36B37E;\n\t\tborder-radius: 10px;\n\t\tmargin: auto;\n\t\tfont-size: 16px;\n\t\tfont-family: \"Poppins-Medium\";\n\t\tcolor: #FEFEFE;\n\t\tcursor: pointer;\n\t\tz-index: 99;\n\t\t&:hover {\n\t\t\topacity: .8;\n\t\t}\n\t}\n\n\n\t@media (max-width: 750px) {\n\t\t.mint_bg {\n\t\t\tdisplay: none;\n\t\t}\n\t\t.mint_conterbg {\n\t\t\timg {\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\tmargin-top: 60px;\n\t\t\t}\n\t\t}\n\t\t.mint_abost {\n\t\t\twidth: 100%;\n\t\t\tleft: 0px;\n\t\t\tmargin-left: 0px;\n\t\t}\n\t\t.mint_title {\n\t\t\tfont-size: 22px;\n\t\t\ttop: 30px;\n\t\t\tmargin-left: 0px;\n\t\t}\n\t\t.mint_jindu {\n\t\t\twidth: 70%;\n\t\t\tleft: 15%;\n\t\t\tmargin-left: 0px;\n\t\t\tbottom: 170px;\n\t\t\tspan {\n\t\t\t\twidth: 100%;\n\t\t\t}\n\t\t}\n\t\t.mint_jinblan {\n\t\t\twidth: 70%;\n\t\t\tleft: 15%;\n\t\t\tmargin-left: 0px;\n\t\t\tbottom: 140px;\n\t\t\tspan {\n\t\t\t\twidth: 100%;\n\t\t\t}\n\t\t}\n\t\t.mint_jinbnbblan {\n\t\t\tbottom: 115px !important;\n\t\t}\n\t\t.mint_bottom {\n\t\t\twidth: 250px;\n\t\t\theight: 45px;\n\t\t\tline-height: 45px;\n\t\t\tmargin-top: 30px;\n\t\t}\n\t}\n"])));
var MintView = function MintView() {
  var _useTranslation = (0,dist_es/* useTranslation */.$G)(),
    i18n = _useTranslation.i18n,
    t = _useTranslation.t;
  (0,react.useEffect)(function () {
    var language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  var _useState = (0,react.useState)(_isMobile()),
    isMobile = _useState[0],
    setIsMobile = _useState[1];
  var _useAccount = (0,wagmi_dist/* useAccount */.mA)(),
    address = _useAccount.address;
  var _useConnect = (0,wagmi_dist/* useConnect */.$4)({
      connector: new chunk_2VZS2JHJ/* InjectedConnector */._()
    }),
    connect = _useConnect.connect;
  var ethereumHelper = window.ethereum || false;
  var web3 = new (web3_min_default())(ethereumHelper);
  var _message$useMessage = message/* default.useMessage */.ZP.useMessage(),
    messageApi = _message$useMessage[0],
    contextHolder = _message$useMessage[1];
  var _useState2 = (0,react.useState)(false),
    showTransaction = _useState2[0],
    setShowTransaction = _useState2[1];
  var _useState3 = (0,react.useState)(''),
    transactionHash = _useState3[0],
    setTransactionHash = _useState3[1];
  var childShowTransaction = function childShowTransaction(show) {
    setShowTransaction(show);
  };
  var aleoxTokenErc20 = useERC20Contract(addressAleoxToken);
  var mintContractErc20 = useMintContract(addressMintContract);
  var _useState4 = (0,react.useState)('0.000000'),
    bnbBalance = _useState4[0],
    setBnbBalance = _useState4[1]; // 我的BNB数量
  var _useState5 = (0,react.useState)('0.00'),
    aleoxBalance = _useState5[0],
    setAleoxBalance = _useState5[1]; // 我的aleox数量
  var _useState6 = (0,react.useState)('0.000000'),
    bnbPrice = _useState6[0],
    setBnbPrice = _useState6[1]; // mint需要支付BNB数量
  var _useState7 = (0,react.useState)('0.0000'),
    bnbPriceFee = _useState7[0],
    setBnbPriceFee = _useState7[1]; // mint需要支付BNB数量 big
  var _useState8 = (0,react.useState)('0%'),
    percentage = _useState8[0],
    setPercentage = _useState8[1]; // 百分比(已经mint总次数 / 最大mint总次数)
  var _useState9 = (0,react.useState)(0),
    mintNumber = _useState9[0],
    setMintNumber = _useState9[1]; // 当前钱包地址mint数量
  var _useState10 = (0,react.useState)(false),
    isTransferLoading = _useState10[0],
    setIsTransferLoading = _useState10[1];
  var handleBalanceData = /*#__PURE__*/function () {
    var _ref = Mint_asyncToGenerator( /*#__PURE__*/Mint_regeneratorRuntime().mark(function _callee() {
      var balanceBNB, balanceBNBBig, balance, balanceBig, price, priceBig, priceFeeBig, mintTimes, mintTimesBig, maxMintTimes, maxMintTimesBig, per, accountMint, accountMintBig;
      return Mint_regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            if (!(address && mintContractErc20)) {
              _context.next = 36;
              break;
            }
            _context.next = 4;
            return web3.eth.getBalance(address);
          case 4:
            balanceBNB = _context.sent;
            balanceBNBBig = new bignumber/* default */.Z(balanceBNB.toString()).shiftedBy(-18).toFixed(6);
            setBnbBalance(balanceBNBBig);

            // 查询余额 aleox
            _context.next = 9;
            return aleoxTokenErc20.balanceOf(address);
          case 9:
            balance = _context.sent;
            balanceBig = new bignumber/* default */.Z(balance.toString()).shiftedBy(-18).toFixed(2); // console.log('balanceBig===>', balanceBig)
            setAleoxBalance(balanceBig);

            // 查询mint需要支付BNB数量
            _context.next = 14;
            return mintContractErc20.price();
          case 14:
            price = _context.sent;
            priceBig = new bignumber/* default */.Z(price.toString()).shiftedBy(0).toFixed(0);
            priceFeeBig = new bignumber/* default */.Z(price.toString()).shiftedBy(-18).toFixed(4);
            setBnbPrice(priceBig);
            setBnbPriceFee(priceFeeBig);

            // 已经mint次数
            _context.next = 21;
            return mintContractErc20.mintTimes();
          case 21:
            mintTimes = _context.sent;
            mintTimesBig = new bignumber/* default */.Z(mintTimes.toString()).shiftedBy(0).toFixed(0); // 最大mint次数
            _context.next = 25;
            return mintContractErc20.MAXMintTimes();
          case 25:
            maxMintTimes = _context.sent;
            maxMintTimesBig = new bignumber/* default */.Z(maxMintTimes.toString()).shiftedBy(0).toFixed(0); // 百分比
            per = mintTimesBig / maxMintTimesBig * 100 + '%';
            setPercentage(per);

            // 当前钱包地址mint数量
            _context.next = 31;
            return mintContractErc20.accountMintTimes(address);
          case 31:
            accountMint = _context.sent;
            accountMintBig = new bignumber/* default */.Z(accountMint.toString()).shiftedBy(0).toFixed(0);
            setMintNumber(accountMintBig);
            _context.next = 41;
            break;
          case 36:
            setBnbBalance('0.000000');
            setAleoxBalance('0.00');
            setPercentage('0%');
            setMintNumber(0);
            setBnbPriceFee('0.0000');
          case 41:
            _context.next = 45;
            break;
          case 43:
            _context.prev = 43;
            _context.t0 = _context["catch"](0);
          case 45:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 43]]);
    }));
    return function handleBalanceData() {
      return _ref.apply(this, arguments);
    };
  }();
  (0,react.useEffect)(function () {
    var timer = setInterval(function () {
      handleBalanceData();
    }, 1000);
    return function () {
      clearInterval(timer);
    };
  });
  (0,react.useEffect)(function () {
    handleBalanceData();
  }, [address]);

  // mint BNB
  var transferClick = /*#__PURE__*/function () {
    var _ref2 = Mint_asyncToGenerator( /*#__PURE__*/Mint_regeneratorRuntime().mark(function _callee2() {
      var gas;
      return Mint_regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (!(mintNumber === '10')) {
              _context2.next = 3;
              break;
            }
            messageApi.open({
              type: 'error',
              content: t('Each wallet address can be Mint up to 10 times!')
            });
            return _context2.abrupt("return");
          case 3:
            setIsTransferLoading(true);

            // 获取gas费
            _context2.next = 6;
            return web3.eth.getGasPrice();
          case 6:
            gas = _context2.sent;
            web3.eth.sendTransaction({
              from: address,
              to: addressMintContract,
              value: bnbPrice,
              gasPrice: gas
            }).on('receipt', function (receipt) {
              // console.log('receipt===>', receipt);
              setIsTransferLoading(false);
              setShowTransaction(true);
              setTransactionHash(receipt.transactionHash);
            }).on('error', function (receipt) {
              setIsTransferLoading(false);
            });
          case 8:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function transferClick() {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react.createElement(react.Fragment, null, contextHolder, /*#__PURE__*/
    react.createElement(Mint_CustomStyle, null,
      react.createElement("div", {
          className: "mint_conterbg"
        },
        react.createElement("div", {
          className: "mint_bg"
        }),
        react.createElement("div", {
            className: "mint_abost"
          }, 
          !isMobile ? react.createElement("img", {
            src: mintBg_namespaceObject,
            alt: ""
          }) : 
          react.createElement("img", {
            src: mintBg_m_namespaceObject,
            alt: ""
          }), 
          react.createElement("div", {
            className: "mint_title"
            }, 
            t('The first rune on BSC')
          ), 
          react.createElement("div", {
              className: "mint_jindu"
            },
            react.createElement("div", {
                className: "mint_jiflex"
              },
              react.createElement("i", null, "GBURN"),
              react.createElement("i", null, t('Fee'), " ", bnbPriceFee, " BNB")),
            /*react.createElement("span", null, react.createElement("em", {
                  style: {
                    width: percentage
                  }
                }
              )
            )
            */
          ),
          react.createElement("div", {
              className: "mint_jinblan"
            },
            react.createElement("div", {
                className: "mint_jiflex"
              }, /*#__PURE__*/
              react.createElement("i", null, "BNB ", t('Balance'), " ", bnbBalance),
              /*react.createElement("i", null, t('Starting block height:'), " ", bnbBalance)*/
            )
          ), 
          react.createElement("div", {
              className: "mint_jinblan mint_jinbnbblan"
            },
            react.createElement("div", {
                className: "mint_jiflex"
              },
              react.createElement("i", null, "GBURN ", t('Balance'), aleoxBalance),
              /*react.createElement("i", null, t('Ending block height:'), " ", bnbBalance)*/
            ),
          ), 
          react.createElement("div", {
              className: "mint_jinblan mint_jinbnbblan"
            },
            react.createElement("div", {
                className: "mint_jiflex"
              },
              react.createElement("i", null, "GBURN ", t('Balance'), aleoxBalance),
              /*react.createElement("i", null, t('Ending block height:'), " ", bnbBalance)*/
            ),
          ), 
          react.createElement("input", {
            type: "text",
            style: { 
              width: '55%', 
              marginTop: '40px',
            },
            onChange: function(event) {
              const inputValue = event.target.value;
              if (isNaN(inputValue)) {
                  alert('The input value must be a number');
                  return; // Dừng xử lý tiếp theo nếu không phải là số
              }
              if (parseInt(inputValue) > 30) {
                alert('Each wallet can only mint a maximum of 30 units (taken from the contract)');
              }
            }
          }),
          address ? 
            react.createElement("div", {
                className: "mint_bottom",
                  onClick: function onClick() {
                    transferClick();
                  }
              },
              !isTransferLoading && react.createElement("span", null, t('Mint')), isTransferLoading && !showTransaction && 
              react.createElement("span", null, 
                  react.createElement(Loader_Dots, null, t('Mint'))
              )
            ) : react.createElement("div", {
                    className: "mint_bottom",
                    onClick: function onClick() {
                      return connect();
                    }
                  }, 
                  t('Connect Wallet')
                ), 
                react.createElement("div", {
                    style: {
                      height: '50px',
                      marginTop:'-30px'
                    }
                  }
                )
        )
      )
    ), showTransaction && /*#__PURE__*/react.createElement(Confirm, {
    childShowTransaction: childShowTransaction,
    hashTransaction: transactionHash
  }));
};
const Mint = (MintView);














var metaMaskConnector = new metaMask/* MetaMaskConnector */.i({
  chains: chains,
  options: {
    shimDisconnect: false,
    shimChainChangedDisconnect: true
  }
});
var injectedConnector = new chunk_2VZS2JHJ/* InjectedConnector */._({
  chains: chains,
  options: {
    shimDisconnect: false,
    shimChainChangedDisconnect: true
  }
});
var app_client = (0,wagmi_dist/* createClient */.eI)({
  autoConnect: true,
  provider: provider,
  connectors: [metaMaskConnector, injectedConnector]
});
function App() {
  var _useState = (0,react.useState)(false),
    ready = _useState[0],
    setReady = _useState[1];
  (0,react.useEffect)(function () {
    setReady(true);
  }, []);
  return /*#__PURE__*/react.createElement(react.Fragment, null, ready ?
    react.createElement(wagmi_dist.eM, {
    client: app_client,
    className: "Index"
  }, /*#__PURE__*/react.createElement(dist/* HashRouter */.UT, null, react.createElement(react_router_dist/* Routes */.Z5, null, /*#__PURE__*/react.createElement(react_router_dist/* Route */.AW, {
    exact: true,
    path: "/",
    element: /*#__PURE__*/react.createElement(index, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.AW, {
    exact: true,
    path: "/index",
    element: /*#__PURE__*/react.createElement(index, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.AW, {
    exact: true,
    path: "/farms",
    element: /*#__PURE__*/react.createElement(Farms, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.AW, {
    exact: true,
    path: "/swap",
    element: /*#__PURE__*/react.createElement(Swap, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.AW, {
    exact: true,
    path: "/swap/:address",
    element: /*#__PURE__*/react.createElement(Swap, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.AW, {
    exact: true,
    path: "/mint",
    element: /*#__PURE__*/react.createElement(Mint, null)
  })))) : null);
}
/* harmony default export */ const app = (App);
// EXTERNAL MODULE: ./node_modules/dayjs/locale/zh-cn.js
var zh_cn = __webpack_require__(3852);
// EXTERNAL MODULE: ./public/css/style.css
var style = __webpack_require__(7885);
// EXTERNAL MODULE: ./public/css/bootstrap.min.css
var bootstrap_min = __webpack_require__(7212);
// EXTERNAL MODULE: ./public/css/meanmenu.min.css
var meanmenu_min = __webpack_require__(4820);
// EXTERNAL MODULE: ./public/css/responsive.css
var responsive = __webpack_require__(4655);
// EXTERNAL MODULE: ./src/assets/css/common.css
var common = __webpack_require__(6755);
;// CONCATENATED MODULE: ./src/index.jsx









var root = client.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/react.createElement(app, null));

/***/ }),

/***/ 9922:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddressZero: () => (/* binding */ AddressZero),
/* harmony export */   axiosUrl: () => (/* binding */ axiosUrl),
/* harmony export */   getContractObj: () => (/* binding */ getContractObj),
/* harmony export */   isAddress: () => (/* binding */ isAddress),
/* harmony export */   parseNumber: () => (/* binding */ parseNumber),
/* harmony export */   unique: () => (/* binding */ unique),
/* harmony export */   uniqueChain: () => (/* binding */ uniqueChain),
/* harmony export */   uniqueNeraChain: () => (/* binding */ uniqueNeraChain)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6992);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1532);
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1539);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3948);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7327);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2772);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4916);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4723);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(241);
/* harmony import */ var lodash_memoize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8306);
/* harmony import */ var lodash_memoize__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_memoize__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ethersproject_address__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4594);
/* harmony import */ var _ethersproject_contracts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6519);












var AddressZero = "0x0000000000000000000000000000000000000000";

// export const axiosUrl = "http://192.168.90.68:8080"
var axiosUrl = "https://portal.ccdao.cc";
var isAddress = lodash_memoize__WEBPACK_IMPORTED_MODULE_8___default()(function (value) {
  try {
    return (0,_ethersproject_address__WEBPACK_IMPORTED_MODULE_9__.getAddress)(value);
  } catch (_unused) {
    return false;
  }
});
function getContractObj(address, ABI) {
  var _window, _window2;
  if (!isAddress(address) || address === AddressZero) {
    throw Error("Invalid 'address' parameter '" + address + "'.");
  }
  if (!((_window = window) != null && _window.ethereum)) {
    return;
  }
  // @ts-ignore
  var provider = new ethers__WEBPACK_IMPORTED_MODULE_10__/* .Web3Provider */ .Q((_window2 = window) == null ? void 0 : _window2.ethereum);
  return new _ethersproject_contracts__WEBPACK_IMPORTED_MODULE_11__/* .Contract */ .CH(address, ABI, provider.getSigner());
}
var unique = function unique(arr) {
  var res = new Map();
  return arr.filter(function (a) {
    return !res.has(a.symbol) && res.set(a.symbol, 1);
  });
};
var uniqueNeraChain = function uniqueNeraChain(arr) {
  var res = new Map();
  return arr.filter(function (a) {
    return !res.has(a.neraChainId) && res.set(a.neraChainId, 1);
  });
};
var uniqueChain = function uniqueChain(arr) {
  var res = new Map();
  return arr.filter(function (a) {
    return !res.has(a.neraChainId) && res.set(a.neraChainId, 1);
  });
};
var parseNumber = function parseNumber(num, decimal) {
  var newNum = "";
  var count = 0;
  var numStr = String(num); // 数字转为字符串;
  // 当字符串不含有小数点
  if (numStr.indexOf(".") == -1) {
    var i;
    for (i = numStr.length - 1; i >= 0; i--) {
      if (count % 3 == 0 && count != 0) {
        newNum = numStr.charAt(i) + "," + newNum;
      } else {
        newNum = numStr.charAt(i) + newNum;
      }
      count++;
    }
    // numStr= newNum + ".00"; // 自动补小数点后两位
    numStr = newNum;
    return numStr;
  } else {
    var _numberArr$;
    // 当字符串含有小数点
    for (var _i = numStr.indexOf(".") - 1; _i >= 0; _i--) {
      if (count % 3 == 0 && count != 0) {
        newNum = numStr.charAt(_i) + "," + newNum;
      } else {
        newNum = numStr.charAt(_i) + newNum; // 字符拼接
      }

      count++;
    }
    var reg = /^0+/;
    var numberArr = String(numStr).split('.');

    //  小数点后面 0 的个数
    var zeroArrCount = numberArr && ((_numberArr$ = numberArr[1]) == null ? void 0 : _numberArr$.match(reg));
    var zeroCount = zeroArrCount == null ? void 0 : zeroArrCount[0];
    var zeroCountLen = (zeroCount == null ? void 0 : zeroCount.length) || 0;
    // 保留几位小数
    var zeroDecimal = zeroCountLen !== 0 ? zeroCountLen + 2 : 0;
    var numDecimal = decimal ? decimal + 1 : 3 + 1;
    var decimalNewNum = zeroDecimal === 0 ? numDecimal : zeroDecimal + 1;
    numStr = newNum + (numStr + "00").substr((numStr + "00").indexOf("."), decimalNewNum);
    return numStr;
  }
};

/***/ }),

/***/ 6601:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 4130:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Connect Wallet":"Connect Wallet","HOME":"HOME","INCENTIVES":"INCENTIVES","Incentives":"Incentives","WHITEPAPER":"WHITEPAPER","Aleo":"Aleo","Privacy Computing Public Chain Leader":" Privacy Computing Public Chain Leader","AleoX expands its practical applications based on this foundation, aiming to construct a Layer-1 public chain similar to Ethereum. The difference lies in its emphasis on privacy computing, zero gas fees, providing the underlying infrastructure for privacy protection, and ultimately achieving integration with the Aleo network.":"AleoX expands its practical applications based on this foundation, aiming to construct a Layer-1 public chain similar to Ethereum. The difference lies in its emphasis on privacy computing, zero gas fees, providing the underlying infrastructure for privacy protection, and ultimately achieving integration with the Aleo network.","Emphasis on privacy computing":"Emphasis on privacy computing","Emphasis on privacy":"Emphasis on privacy","computing":"computing","Layer-1 public chain":"Layer-1 public chain","Layer-1":"LAYER-1","public chain":"public chain","Zero gas fees":"Zero gas fees","Zero gas":"Zero gas","fees":"fees","Supports Web3 Applications":"Supports Web3 Applications","With the continuous development of the blockchain industry, it is proving the potential to support a digitally accessible, efficient, and interoperable defined ecosystem. AleoX is building the foundational layer to ensure the scalability, security, and reliability of the future of Web3, supporting a range of applications including gaming and financial transactions":"With the continuous development of the blockchain industry, it is proving the potential to support a digitally accessible, efficient, and interoperable defined ecosystem. AleoX is building the foundational layer to ensure the scalability, security, and reliability of the future of Web3, supporting a range of applications including gaming and financial transactions","Privacy Security":"Privacy Security","AleoX is the first platform to provide a completely private application environment. Leveraging decentralized systems and zero-knowledge cryptography, AleoX offers users infinite computations with absolute privacy. By constructing a blockchain that is private by default, open source, and built for the web, AleoX possesses unique advantages in addressing the drawbacks of traditional blockchains. Users can access a truly personalized web service world without compromising control over their private data.":"AleoX is the first platform to provide a completely private application environment. Leveraging decentralized systems and zero-knowledge cryptography, AleoX offers users infinite computations with absolute privacy. By constructing a blockchain that is private by default, open source, and built for the web, AleoX possesses unique advantages in addressing the drawbacks of traditional blockchains. Users can access a truly personalized web service world without compromising control over their private data.","Privacy-preserving Infinite Computation":"Privacy-preserving Infinite Computation","Privacy-preserving":"Privacy-preserving","Infinite Computation":"Infinite Computation","Centralized System":"Centralized System","Centralized":"Centralized","System":"System","Open Source Blockchain Built for the Web":"Open Source Blockchain Built for the Web","Open Source Blockchain":"Open Source Blockchain","Built for the Web":"Built for the Web","Open source and":"Open source and","built for the":"built for the","web blockchain":"web blockchain","Own Your Data":"Own Your Data","The Fastest POW Public Blockchain":"The Fastest POW Public Blockchain","The fastest POW":"The fastest POW","Aleo, as a leading star project in the ZK track, is poised to become the second-largest POW project in the industry due to its powerful consensus value. Under its framework, the first token issued on the public market by AleoX is likely to attract a large number of miners and supporters to participate.":"Aleo, as a leading star project in the ZK track, is poised to become the second-largest POW project in the industry due to its powerful consensus value. Under its framework, the first token issued on the public market by AleoX is likely to attract a large number of miners and supporters to participate.","Road Map":"Road Map","Deecmber 2023":"Deecmber 2023","Access the decentralized exchange and AleoXswap by logging in, and initiate the 10 million token promotion reward pool.":"Access the decentralized exchange and AleoXswap by logging in, and initiate the 10 million token promotion reward pool.","Q1 2024":"Q1 2024","The number of token holders has reached over twenty thousand.":"The number of token holders has reached over twenty thousand.","Q2 2024":"Q2 2024","The market capitalization has reached 10 million US dollars.":"The market capitalization has reached 10 million US dollars.","Q3 2024":"Q3 2024","Successfully launched on a centralized exchange.":"Successfully launched on a centralized exchange.","Core Team":"Core Team","The AleoX team consists of a highly talented and experienced group of professionals. The team members hail from renowned companies such as Google, Amazon, and Facebook, as well as prestigious research universities like the University of California, Berkeley, Johns Hopkins University, and New York University. They comprise world-class cryptography experts, engineers, and designers with expertise in areas such as privacy protection, blockchain technology, distributed systems engineering, and design.":"The AleoX team consists of a highly talented and experienced group of professionals. The team members hail from renowned companies such as Google, Amazon, and Facebook, as well as prestigious research universities like the University of California, Berkeley, Johns Hopkins University, and New York University. They comprise world-class cryptography experts, engineers, and designers with expertise in areas such as privacy protection, blockchain technology, distributed systems engineering, and design.","(Founder)":"(Founder)","Extensive experience in the Data-as-a-Service (DaaS) field, specializing in blockchain and privacy protection.":"Extensive experience in the Data-as-a-Service (DaaS) field, specializing in blockchain and privacy protection.","(CEO)":"(CEO)","Having extensive experience in the Data-as-a-Service (DaaS) sector, specializing in blockchain and privacy protection. Formerly a partner at A16Z, with prior experience at Coinbase.":"Having extensive experience in the Data-as-a-Service (DaaS) sector, specializing in blockchain and privacy protection. Formerly a partner at A16Z, with prior experience at Coinbase.","(CTA)":"(CTA)","As a co-founder of the Lightning Network, he is a pioneer in faster and more affordable transactions, specializing in distributed systems and cryptography.":"As a co-founder of the Lightning Network, he is a pioneer in faster and more affordable transactions, specializing in distributed systems and cryptography.","(CTO)":"(CTO)","Formerly the Technical Director at 0(1) Labs, adept in zero-knowledge proof technology and blockchain.":"Formerly the Technical Director at 0(1) Labs, adept in zero-knowledge proof technology and blockchain.","Investment institution":"Investment institution","AleoX was initiated by Liwayway Capital Partners in Singapore and Harbour Capital in Hong Kong.":"AleoX was initiated by Liwayway Capital Partners in Singapore and Harbour Capital in Hong Kong.","AleoX was initiated by":"AleoX was initiated by","Liwayway Capital Partners in Singapore":"Liwayway Capital Partners in Singapore","and":"and","Harbour Capital in Hong Kong.":"Harbour Capital in Hong Kong.","initiated by":"initiated by","Dividends":"Dividends","Swap":"Swap"," Swap ":"Swap","My LP quantity:":"My LP quantity:","Pledged quantity:":"Pledged quantity:","Harvest":"Harvest ","Approve":"Approve","Pledge":"Pledge"," Harvest ":"Harvest","Extract":"Extract","address":" address：","balance":" balance：","Pledge amount:":"Pledge amount:","Please enter the pledged quantity!":"Please enter the pledged quantity!","Promotion link:":"Promotion link:","Copy":"Copy","ALEOX balance is less than 1000, unable to promote!":"ALEOX balance is less than 1000, unable to promote!","Incentive Pool Balance:":"Incentive Pool Balance: ","Community members who promote will receive a":"Community members who promote will receive a","ALEOX rebate every time they purchase from the official website DApp.":"ALEOX rebate every time they purchase from the official website DApp.","Promoters need to hold":"Promoters need to hold","ALEOXs to enjoy rebate privileges.":"ALEOXs to enjoy rebate privileges.","Please enter the redemption quantity!":"Please enter the redemption quantity!","Promoters cannot be themselves!":"Promoters cannot be themselves!","Copy successful!":"Copy successful!","MINT":"MINT","The first rune on BSC":"The first rune on BSC","Mint":"Mint","Each wallet address can be Mint up to 10 times!":"Each wallet address can be Mint up to 10 times!","Balance":" Balance：","Fee":"Fee：","":""}');

/***/ }),

/***/ 6361:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Connect Wallet":"连接钱包","HOME":"首页","INCENTIVES":"生态激励","Incentives":"生态激励","WHITEPAPER":"白皮书","Aleo":"Aleo","Privacy Computing Public Chain Leader":"隐私计算公链的龙头","AleoX expands its practical applications based on this foundation, aiming to construct a Layer-1 public chain similar to Ethereum. The difference lies in its emphasis on privacy computing, zero gas fees, providing the underlying infrastructure for privacy protection, and ultimately achieving integration with the Aleo network.":"AleoX在此基础上拓展其实际应用，旨在构建一条与以太坊类似的Layer-1公链，不同的是，它侧重于隐私计算，零GAS费用,为隐私保护提供底层基础设施，最终实现与Aleo网络的融合。","Emphasis on privacy computing":"侧重隐私计算","Emphasis on privacy":"侧重隐私","computing":"计算","Layer-1 public chain":"LAYER-1公链","Layer-1":"LAYER-1","public chain":"公链","Zero gas fees":"零GAS费用","Zero gas":"零GAS","fees":"费用","Supports Web3 Applications":"支持web3应用","With the continuous development of the blockchain industry, it is proving the potential to support a digitally accessible, efficient, and interoperable defined ecosystem. AleoX is building the foundational layer to ensure the scalability, security, and reliability of the future of Web3, supporting a range of applications including gaming and financial transactions":"随着区块链行业的不断发展，正在证明其支持有可访问性效率和互操作性定义的数字生态系统的潜力，AleoX正在构建基础层，以确保web3的未来具有可扩展性，安全性和可靠性，从而支持游戏和金融交易等一系列应用程序","Privacy Security":"私密安全","AleoX is the first platform to provide a completely private application environment. Leveraging decentralized systems and zero-knowledge cryptography, AleoX offers users infinite computations with absolute privacy. By constructing a blockchain that is private by default, open source, and built for the web, AleoX possesses unique advantages in addressing the drawbacks of traditional blockchains. Users can access a truly personalized web service world without compromising control over their private data.":"AleoX是第一个提供完全私有应用程序平台，AleoX利用去中心化系统和零知识密码学，为用户提供具有绝对隐私的无限计算，通过构建一个默认为私有，开源且为Web构建的区块链,AleoX，具有独特的优势来解决区块链的缺点，用户可以访问真正个性化的Web服务世界，也无需放弃对其私有数据的控制。","Privacy-preserving Infinite Computation":"隐私的无限计算","Privacy-preserving":"隐私的","Infinite Computation":"无限计算","Centralized System":"中心化系统","Centralized":"中心化","System":"系统","Open Source Blockchain Built for the Web":"开源且为WEB构建的区块链","Open Source Blockchain":"开源且为WEB","Built for the Web":"构建的区块链","Open source and":"开源且为","built for the":"WEB构建的","web blockchain":"区块链","Own Your Data":"拥有您的数据","The Fastest POW Public Blockchain":"最快的POW公链","The fastest POW":"最快的POW","Aleo, as a leading star project in the ZK track, is poised to become the second-largest POW project in the industry due to its powerful consensus value. Under its framework, the first token issued on the public market by AleoX is likely to attract a large number of miners and supporters to participate.":"Aleo作为ZK赛道的龙头明星项目凭借其强大的共识价值，极大可能成为行业规模第二大的pow项目，AleoX在其构架下首支在公开市场发行的代币将会吸引大量的矿工及其支持者参与。","Road Map":"路线图","December 2023":"2023年12月","Access the decentralized exchange and AleoXswap by logging in, and initiate the 10 million token promotion reward pool.":"登录去中心化交易所及AleoXswap，开启1000万代币推广奖励池。","Q1 2024":"2024年Q1","The number of token holders has reached over twenty thousand.":"持币人数达到两万+。","Q2 2024":"2024年Q2","The market capitalization has reached 10 million US dollars.":"市值达到1000万美金。","Q3 2024":"2024年Q3","Successfully launched on a centralized exchange.":"成功上线中心化交易所。","Core Team":"核心团队","The AleoX team consists of a highly talented and experienced group of professionals. The team members hail from renowned companies such as Google, Amazon, and Facebook, as well as prestigious research universities like the University of California, Berkeley, Johns Hopkins University, and New York University. They comprise world-class cryptography experts, engineers, and designers with expertise in areas such as privacy protection, blockchain technology, distributed systems engineering, and design.":"AleoX的团队有一群极富才华和经验的专业人士组成，该团队来自谷歌，亚马逊和Facebook等公司以及加州大学伯克利分校，约翰霍普金斯大学，纽约大学等研究型大学的世界级密码学专家，工程师，设计师组成，他们来自隐私保护，区块链技术，分布式系统工程和设计等领域。","(Founder)":"(创始人)","Extensive experience in the Data-as-a-Service (DaaS) field, specializing in blockchain and privacy protection.":"曾在数据即服务(Data-as-a-Service)领域拥有多年经验，擅长区块链和隐私保护。","(CEO)":"(首席执行官)","Having extensive experience in the Data-as-a-Service (DaaS) sector, specializing in blockchain and privacy protection. Formerly a partner at A16Z, with prior experience at Coinbase.":"A16Z联合合伙人之一，曾在Coinbase工作过。","(CTA)":"(技术顾问)","As a co-founder of the Lightning Network, he is a pioneer in faster and more affordable transactions, specializing in distributed systems and cryptography.":"是闪电网络的共同创始人，是更快、更便宜的交易的先驱，擅长分布式系统和密码学。","(CTO)":"(首席技术官)","Formerly the Technical Director at 0(1) Labs, adept in zero-knowledge proof technology and blockchain.":"曾是0(1) Labs的技术总监，精通零知识证明技术和区块链技术。","Investment institution":"投资机构","AleoX was initiated by Liwayway Capital Partners in Singapore and Harbour Capital in Hong Kong.":"AleoX由新加坡利威资本联合香港港湾资本发起","AleoX was initiated by":"AleoX由","Liwayway Capital Partners in Singapore":"新加坡利威资本","and":"联合","Harbour Capital in Hong Kong.":"香港港湾资本","initiated by":"发起","Dividends":"LP分红","Swap":"社区兑换"," Swap ":"兑换","My LP quantity:":"我的LP数量：","Pledged quantity:":"已质押数量：","Harvest":"可收获","Approve":"授权","Pledge":"质押"," Harvest ":"收获","Extract":"提取","address":"地址：","balance":"余额：","Pledge amount:":"质押金额：","Please enter the pledged quantity!":"请输入质押数量！","Promotion link:":"推广链接：","Copy":"复制","ALEOX balance is less than 1000, unable to promote!":"ALEOX余额不足1000，不能进行推广！","Incentive Pool Balance:":"激励池余额：","Community members who promote will receive a":"推广的社区成员每次从官网DApp买入，推广员将获得","ALEOX rebate every time they purchase from the official website DApp.":"ALEOX返利.","Promoters need to hold":"推广员需要持有","ALEOXs to enjoy rebate privileges.":"个ALEOX才能享受返利特权.","Please enter the redemption quantity!":"请输入兑换数量！","Promoters cannot be themselves!":"推广人不能是自己！","Copy successful!":"复制成功！","MINT":"铸造","The first rune on BSC":"币安链上的第一个符文","Mint":"铸造","Each wallet address can be Mint up to 10 times!":"每个钱包地址最多铸造10次!","Balance":"余额：","Fee":"费用：","":""}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkdronelink"] = self["webpackChunkdronelink"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [245], () => (__webpack_require__(6593)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;