var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,i=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,c=f||u||Function("return this")(),l=Object.prototype.toString,s=Math.max,d=Math.min,m=function(){return c.Date.now()};function v(e,t,n){var o,r,i,a,f,u,c=0,l=!1,v=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function j(e){return c=e,f=setTimeout(S,t),l?y(e):a}function O(e){var n=e-u;return void 0===u||n>=t||n<0||v&&e-c>=i}function S(){var e=m();if(O(e))return T(e);f=setTimeout(S,function(e){var n=t-(e-u);return v?d(n,i-(e-c)):n}(e))}function T(e){return f=void 0,b&&o?y(e):(o=r=void 0,a)}function h(){var e=m(),n=O(e);if(o=arguments,r=this,u=e,n){if(void 0===f)return j(u);if(v)return f=setTimeout(S,t),y(u)}return void 0===f&&(f=setTimeout(S,t)),a}return t=p(t)||0,g(n)&&(l=!!n.leading,i=(v="maxWait"in n)?s(p(n.maxWait)||0,t):i,b="trailing"in n?!!n.trailing:b),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=r=f=void 0},h.flush=function(){return void 0===f?a:T(m())},h}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=r.test(e);return f||i.test(e)?a(e.slice(2),f?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:o,maxWait:t,trailing:r})};const b=document.querySelector(".feedback-form");let y={};!function(){const e=localStorage.getItem("feedback-form-state");e&&(y=JSON.parse(e),b.email.value=y.email||"",b.message.value=y.message||"")}(),b.addEventListener("submit",(function(e){e.preventDefault();const t=localStorage.getItem("feedback-form-state"),n=JSON.parse(t);""===b.email.value||""===b.message.value?alert("Заповніть всі поля!"):n&&(console.log(n),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),y={})})),b.addEventListener("input",t((function(e){y[e.target.name]=e.target.value;const t=JSON.stringify(y);localStorage.setItem("feedback-form-state",t)}),500));
//# sourceMappingURL=03-feedback.f37ec842.js.map