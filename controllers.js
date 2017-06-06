(function(){
    'use strict';

    angular
        .module('sprechen')
        .controller('mainController', mainController);

    mainController.$inject = ['$timeout', '$window', '$mdSidenav', 'DataService'];

    function mainController($timeout, $window, $mdSidenav, DataService) {
        var mainVm = this;

        mainVm.espanol = '';
        mainVm.aleman = '';
        mainVm.title = 'Wähle ein Thema';
        mainVm.disableSubmit = true;
        mainVm.especials = ['ß', 'ä', 'ö', 'ü', 'Ä', 'Ö', 'Ü'];

        // Actions
        mainVm.go = go;
        mainVm.checkResult = checkResult;
        mainVm.speak = speak;
        mainVm.ramdonItem = ramdonItem;
        mainVm.toggleSidenav = toggleSidenav;
        mainVm.addEspecial = addEspecial;

        activate();

        function activate() {
            mainVm.data = DataService.get();
        }

        function go(index, subject) {
            mainVm.currentPractice = mainVm.data.clases[index-1][subject];
            mainVm.title = 'Clase ' + index + ' > ' + subject.charAt(0).toUpperCase() + subject.substr(1).toLowerCase();
            ramdonItem();
        }

        function addEspecial(especial) {
            mainVm.aleman += especial;
            setFocus("aleman");
        }

        function ramdonItem() {
            var itemIndex = Math.floor((Math.random() * mainVm.currentPractice.length));
            mainVm.currentItem = mainVm.currentPractice[itemIndex];
            mainVm.espanol = mainVm.currentItem.espanol[0];
            mainVm.aleman = '';
            mainVm.result = '';
            mainVm.showResult = false;
            mainVm.disableSubmit = false;
            setFocus("aleman");
        }

        function checkResult() {
            var i;

            mainVm.result = false;
            for (i = 0; i < mainVm.currentItem.aleman.length; i++) {
                if (mainVm.aleman === mainVm.currentItem.aleman[i]) {
                    mainVm.result = true;
                    mainVm.alemanAnswer =  mainVm.currentItem.aleman[i];
                }
            }
            mainVm.disableSubmit = true;
            speak();
            setFocus("next");
            mainVm.showResult = true;
        }

        function toggleSidenav(side) {
            $mdSidenav(side).toggle()
        }

        function speak() {
            if(window.speechSynthesis) {
                var voices = window.speechSynthesis.getVoices();
                var msg = new SpeechSynthesisUtterance();
                msg.text = mainVm.alemanAnswer;
                msg.voice = voices.filter(function(voice) { return voice.name == 'Google Deutsch'; })[0];
                msg.lang = 'de-DE';
                window.speechSynthesis.speak(msg);
            }
        };

        function setFocus(id) {
             $timeout(function() {
                var element = $window.document.getElementById(id);
                if(element) { element.focus(); }
            });
        }
    }
})();