(function(){
    'use strict';

    angular
        .module('sprechen')
        .factory('DataService', dataService);
    
    dataService.$inject = [];

    function dataService() {
        var service,
            data = {
                clases: [
                    {
                        numero: 1,
                        palabras: [
                            {
                                espanol: ['El padre'],
                                aleman: ['der Vater']
                            },
                            {
                                espanol: ['La madre'],
                                aleman: ['die Mutter']
                            },
                            {
                                espanol:['El chico', 'El niño'],
                                aleman: ['das Kind']
                            },
                            {
                                espanol:['Los chicos', 'Los niños'],
                                aleman: ['die Kinder']
                            },
                            {
                                espanol:['Gracias'],
                                aleman: ['Danke']
                            },
                            {
                                espanol:['Por favor'],
                                aleman: ['Bitte']
                            },
                            {
                                espanol:['Por favor'],
                                aleman: ['Bitte']
                            },
                        ],
                        preguntas: [
                            {
                                espanol:['¿Cómo se llama ella?'],
                                aleman: ['Wie heißt sie?']
                            },
                            {
                                espanol:['¿Cómo se llama el?'],
                                aleman: ['Wie heißt er?']
                            },
                            {
                                espanol:['¿Qué es eso?'],
                                aleman: ['Wie heißt das?', 'Was ist das?']
                            },
                            {
                                espanol:['¿Podría repetir?'],
                                aleman: ['Wie bitte?']
                            }
                        ],
                        oraciones: [
                            {
                                espanol:['Mi nombre es Fabricio'],
                                aleman: ['Mein name ist Fabricio']
                            },
                            {
                                espanol:['Yo soy Fabricio Carella'],
                                aleman: ['Ich heiße Fabricio Carella']
                            }
                        ]
                    }
                ]
            };
        
        service = {
            get: getData
        };
        return service;

        function getData() {
            return data;
        }
    }
})();