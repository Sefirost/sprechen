!function(){"use strict";function e(e){e.theme("default").primaryPalette("red").accentPalette("amber")}angular.module("sprechen",["ngMaterial"]).config(e),e.$inject=["$mdThemingProvider"]}(),function(){"use strict";function e(){function e(){return a}var a={clases:[{numero:1,palabras:[{espanol:["El padre"],aleman:["der Vater"]},{espanol:["La madre"],aleman:["die Mutter"]},{espanol:["El chico","El niño"],aleman:["das Kind"]},{espanol:["Los chicos","Los niños"],aleman:["die Kinder"]},{espanol:["Gracias"],aleman:["Danke"]},{espanol:["Por favor"],aleman:["Bitte"]},{espanol:["Por favor"],aleman:["Bitte"]}],preguntas:[{espanol:["¿Cómo se llama ella?"],aleman:["Wie heißt sie?"]},{espanol:["¿Cómo se llama el?"],aleman:["Wie heißt er?"]},{espanol:["¿Qué es eso?"],aleman:["Wie heißt das?","Was ist das?"]},{espanol:["¿Podría repetir?"],aleman:["Wie bitte?"]}],oraciones:[{espanol:["Mi nombre es Fabricio"],aleman:["Mein name ist Fabricio"]},{espanol:["Yo soy Fabricio Carella"],aleman:["Ich heiße Fabricio Carella"]}]}]};return{get:e}}angular.module("sprechen").factory("DataService",e),e.$inject=[]}(),function(){"use strict";function e(e,a,n,t){function l(e,a){u.currentPractice=u.data.clases[e-1][a],u.title="Clase "+e+" > "+a.charAt(0).toUpperCase()+a.substr(1).toLowerCase(),i()}function r(e){u.aleman+=e,m("aleman")}function i(){var e=Math.floor(Math.random()*u.currentPractice.length);u.currentItem=u.currentPractice[e],u.espanol=u.currentItem.espanol[0],u.aleman="",u.result="",u.showResult=!1,u.disableSubmit=!1,m("aleman")}function o(){var e;for(u.result=!1,u.alemanAnswer=u.currentItem.aleman[0],e=0;e<u.currentItem.aleman.length;e++)u.aleman===u.currentItem.aleman[e]&&(u.result=!0,u.alemanAnswer=u.currentItem.aleman[e]);u.disableSubmit=!0,c(),m("next"),u.showResult=!0}function s(e){n(e).toggle()}function c(){if(window.speechSynthesis){var e=window.speechSynthesis.getVoices(),a=new SpeechSynthesisUtterance;a.text=u.alemanAnswer,a.voice=e.filter(function(e){return"Google Deutsch"==e.name})[0],a.lang="de-DE",window.speechSynthesis.speak(a)}}function m(n){e(function(){var e=a.document.getElementById(n);e&&e.focus()})}var u=this;u.espanol="",u.aleman="",u.title="Wähle ein Thema",u.disableSubmit=!0,u.especials=["ß","ä","ö","ü","Ä","Ö","Ü"],u.go=l,u.checkResult=o,u.speak=c,u.ramdonItem=i,u.toggleSidenav=s,u.addEspecial=r,function(){u.data=t.get()}()}angular.module("sprechen").controller("mainController",e),e.$inject=["$timeout","$window","$mdSidenav","DataService"]}(),angular.module("app").run(["$templateCache",function(e){e.put("app/dummy.html","")}]);
//# sourceMappingURL=../maps/scripts/app-534fa0de74.js.map
