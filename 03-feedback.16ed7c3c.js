function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return c.Date.now()};function p(e,t,n){var i,r,o,a,f,u,l=0,c=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=i,o=r;return i=r=void 0,l=t,a=e.apply(o,n)}function j(e){return l=e,f=setTimeout(T,t),c?b(e):a}function S(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=o}function T(){var e=v();if(S(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-u);return s?m(n,o-(e-l)):n}(e))}function h(e){return f=void 0,p&&i?b(e):(i=r=void 0,a)}function w(){var e=v(),n=S(e);if(i=arguments,r=this,u=e,n){if(void 0===f)return j(u);if(s)return f=setTimeout(T,t),b(u)}return void 0===f&&(f=setTimeout(T,t)),a}return t=y(t)||0,g(n)&&(c=!!n.leading,o=(s="maxWait"in n)?d(y(n.maxWait)||0,t):o,p="trailing"in n?!!n.trailing:p),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,i=u=r=f=void 0},w.flush=function(){return void 0===f?a:h(v())},w}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=o.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:i,maxWait:t,trailing:r})};const b=document.querySelector("form"),j=b.querySelector('[name="email"]'),S=b.querySelector('[name="message"]');let T={};!function(){const e=localStorage.getItem("feedback-form-state");if(e){const t=JSON.parse(e);t.email&&(j.value=t.email),t.message&&(S.value=t.message);for(const e in t)T[e]=t[e]}}(),b.addEventListener("submit",(function(e){if(!j.value||!S.value)return void alert("Please fill in all input fields");e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),T={}})),b.addEventListener("input",e(t)((function(e){T[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(T))}),500));
//# sourceMappingURL=03-feedback.16ed7c3c.js.map
