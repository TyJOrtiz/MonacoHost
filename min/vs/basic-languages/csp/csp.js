"use strict";/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.36.1(6c56744c3419458f0dd48864520b759d1a3a1ca8)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
define("vs/basic-languages/csp/csp", ["require","require"],(require)=>{
var moduleExports=(()=>{var o=Object.defineProperty;var i=Object.getOwnPropertyDescriptor;var u=Object.getOwnPropertyNames;var g=Object.prototype.hasOwnProperty;var a=(r,t)=>{for(var s in t)o(r,s,{get:t[s],enumerable:!0})},c=(r,t,s,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let e of u(t))!g.call(r,e)&&e!==s&&o(r,e,{get:()=>t[e],enumerable:!(n=i(t,e))||n.enumerable});return r};var q=r=>c(o({},"__esModule",{value:!0}),r);var p={};a(p,{conf:()=>f,language:()=>l});var f={brackets:[],autoClosingPairs:[],surroundingPairs:[]},l={keywords:[],typeKeywords:[],tokenPostfix:".csp",operators:[],symbols:/[=><!~?:&|+\-*\/\^%]+/,escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,tokenizer:{root:[[/child-src/,"string.quote"],[/connect-src/,"string.quote"],[/default-src/,"string.quote"],[/font-src/,"string.quote"],[/frame-src/,"string.quote"],[/img-src/,"string.quote"],[/manifest-src/,"string.quote"],[/media-src/,"string.quote"],[/object-src/,"string.quote"],[/script-src/,"string.quote"],[/style-src/,"string.quote"],[/worker-src/,"string.quote"],[/base-uri/,"string.quote"],[/plugin-types/,"string.quote"],[/sandbox/,"string.quote"],[/disown-opener/,"string.quote"],[/form-action/,"string.quote"],[/frame-ancestors/,"string.quote"],[/report-uri/,"string.quote"],[/report-to/,"string.quote"],[/upgrade-insecure-requests/,"string.quote"],[/block-all-mixed-content/,"string.quote"],[/require-sri-for/,"string.quote"],[/reflected-xss/,"string.quote"],[/referrer/,"string.quote"],[/policy-uri/,"string.quote"],[/'self'/,"string.quote"],[/'unsafe-inline'/,"string.quote"],[/'unsafe-eval'/,"string.quote"],[/'strict-dynamic'/,"string.quote"],[/'unsafe-hashed-attributes'/,"string.quote"]]}};return q(p);})();
return moduleExports;
});
