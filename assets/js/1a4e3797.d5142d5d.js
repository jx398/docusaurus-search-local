"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7920],{7411:function(e,t,r){r.d(t,{c:function(){return o}});var n=r(3289),a=r(1778),l=["zero","one","two","few","many","other"];function c(e){return l.filter((function(t){return e.includes(t)}))}var s={locale:"en",pluralForms:c(["one","other"]),select:function(e){return 1===e?"one":"other"}};function u(){var e=(0,a.Z)().i18n.currentLocale;return(0,n.useMemo)((function(){try{return t=e,r=new Intl.PluralRules(t),{locale:t,pluralForms:c(r.resolvedOptions().pluralCategories),select:function(e){return r.select(e)}}}catch(n){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+n.message+"\n"),s}var t,r}),[e])}function o(){var e=u();return{selectMessage:function(t,r){return function(e,t,r){var n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error("For locale="+r.locale+", a maximum of "+r.pluralForms.length+" plural forms are expected ("+r.pluralForms.join(",")+"), but the message contains "+n.length+": "+e);var a=r.select(t),l=r.pluralForms.indexOf(a);return n[Math.min(l,n.length-1)]}(r,t,e)}}}},8254:function(e,t,r){r.r(t),r.d(t,{default:function(){return Z}});var n=r(6952),a=r(8099),l=r(9503),c=r(3289),s=r(1778),u=r(1249),o=r(2357),i=r(8042),m=r(4559),h=r(7411),p=r(8795),f=r(4989),d=r(605);var g=function(){var e=(0,f.k6)(),t=(0,f.TH)(),r=(0,s.Z)().siteConfig.baseUrl,n=d.Z.canUseDOM?new URLSearchParams(t.search):null,a=(null==n?void 0:n.get("q"))||"",l=(null==n?void 0:n.get("ctx"))||"",c=(null==n?void 0:n.get("version"))||"",u=function(e){var r=new URLSearchParams(t.search);return e?r.set("q",e):r.delete("q"),r};return{searchValue:a,searchContext:l,searchVersion:c,updateSearchPath:function(t){var r=u(t);e.replace({search:r.toString()})},updateSearchContext:function(r){var n=new URLSearchParams(t.search);n.set("ctx",r),e.replace({search:n.toString()})},generateSearchPageLink:function(e){var t=u(e);return r+"search?"+t.toString()}}},v=r(9539),y=r(2463),E=r(2189),S=r(2308),I=r(6977),w=r(282),R=r(7951),x=r(9189),P={searchVersionInput:"searchVersionInput_Orym",searchQueryInput:"searchQueryInput_Rfes",searchResultItem:"searchResultItem_gF5N",searchResultItemPath:"searchResultItemPath__vrn",searchResultItemSummary:"searchResultItemSummary_Kts6"};function C(){var e=(0,s.Z)().siteConfig.baseUrl,t=(0,h.c)().selectMessage,r=g(),n=r.searchValue,u=r.searchContext,i=r.searchVersion,f=r.updateSearchPath,d=r.updateSearchContext,E=(0,c.useState)(n),S=E[0],I=E[1],R=(0,c.useState)(),C=R[0],Z=R[1],_=(0,c.useState)(),k=_[0],F=_[1],N=""+e+i,T=(0,c.useMemo)((function(){return S?(0,m.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:S}):(0,m.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})}),[S]);(0,c.useEffect)((function(){f(S),C&&(S?C(S,(function(e){F(e)})):F(void 0))}),[S,C]);var q=(0,c.useCallback)((function(e){I(e.target.value)}),[]);return(0,c.useEffect)((function(){n&&n!==S&&I(n)}),[n]),(0,c.useEffect)((function(){function e(){return(e=(0,l.Z)((0,a.Z)().mark((function e(){var t,r,n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,v.w)(N,u);case 2:t=e.sent,r=t.wrappedIndexes,n=t.zhDictionary,Z((function(){return(0,y.v)(r,n,100)}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[u,N]),c.createElement(c.Fragment,null,c.createElement(o.Z,null,c.createElement("meta",{property:"robots",content:"noindex, follow"}),c.createElement("title",null,T)),c.createElement("div",{className:"container margin-vert--lg"},c.createElement("h1",null,T),c.createElement("div",{className:"row"},c.createElement("div",{className:(0,p.Z)("col",P.searchQueryColumn,{"col--9":Array.isArray(x.Kc),"col--12":!Array.isArray(x.Kc)})},c.createElement("input",{type:"search",name:"q",className:P.searchQueryInput,"aria-label":"Search",onChange:q,value:S,autoComplete:"off",autoFocus:!0})),Array.isArray(x.Kc)?c.createElement("div",{className:(0,p.Z)("col","col--3","padding-left--none",P.searchVersionColumn)},c.createElement("select",{name:"search-context",className:P.searchVersionInput,id:"context-selector",value:u,onChange:function(e){return d(e.target.value)}},c.createElement("option",{value:""},x.pQ?(0,m.I)({id:"theme.SearchPage.searchContext.everywhere",message:"everywhere"}):""),x.Kc.map((function(e){return c.createElement("option",{key:e,value:e},e)})))):null),!C&&S&&c.createElement("div",null,c.createElement(w.Z,null)),k&&(k.length>0?c.createElement("p",null,t(k.length,(0,m.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:k.length}))):c.createElement("p",null,(0,m.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),c.createElement("section",null,k&&k.map((function(e){return c.createElement(b,{key:e.document.i,searchResult:e})})))))}function b(e){var t=e.searchResult,r=t.document,a=t.type,l=t.page,s=t.tokens,u=t.metadata,o=0===a,m=2===a,h=(o?r.b:l.b).slice(),p=m?r.s:r.t;o||h.push(l.t);var f="";if(x.vc&&s.length>0){for(var d,g=new URLSearchParams,v=(0,n.Z)(s);!(d=v()).done;){var y=d.value;g.append("_highlight",y)}f="?"+g.toString()}return c.createElement("article",{className:P.searchResultItem},c.createElement("h2",null,c.createElement(i.Z,{to:r.u+f+(r.h||""),dangerouslySetInnerHTML:{__html:m?(0,E.C)(p,s):(0,S.o)(p,(0,I.m)(u,"t"),s,100)}})),h.length>0&&c.createElement("p",{className:P.searchResultItemPath},(0,R.e)(h)),m&&c.createElement("p",{className:P.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,S.o)(r.t,(0,I.m)(u,"t"),s,100)}}))}var Z=function(){return c.createElement(u.Z,null,c.createElement(C,null))}}}]);