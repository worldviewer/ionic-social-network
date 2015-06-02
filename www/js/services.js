angular.module('app.services', [])

    .factory("Construct", [function() {

    	// fake the data
        var constructs = [{
            name: "Electric Joule Heating",
            type: "Model",
            shortDefinition: "Electric joule heating proposes that the Earth can be electrically heated by the flow of charged particles coming from the Sun and other cosmic phenomena.",
            longDefinition: "Conventional theory models this flow of charged particles fundamentally as a fluid, but these models have been in dispute since their inception. One alternative hypothesis likens these moving charges to an electric current. Advocates point to the fact that the solar wind is oftentimes guided by planetary magnetic fields into the poles, and the presence of hot spots at these poles for a number of planets within our solar system is suggestive of the idea \
            			that this flow of charged particles can heat up the planets it is guided into.",
            status: "Electric joule heating is not widely known, and much of the data necessary to judge the idea has yet to be taken. No known experiments or observational satellites are currently planned to test it. The concept is not taught to climatologists today, and it appears in no climate textbooks. Electric joule heating is a natural implication of the Electric Universe paradigm.",
            experts: [{
                name: "@ChrisReeve",
                title: "Layperson Advocate",
                image: "img/experts/chris-reeve.png"
            },{
            	name: "@BillNichols",
            	title: "Atmospheric Scientist",
            	image: "img/experts/bill-nichols.jpg"
            },{
            	name: "@PiersCorbyn",
            	title: "Theorist, WeatherAction",
            	image: "img/experts/piers-corbyn.jpg"
            },{
            	name: "@BobJohnson",
            	title: "Independent Plasma Theorist",
            	image: "img/experts/bob-johnson.jpg"
            }],
            critiques: [{
            	critic: {image: "img/experts/lief-svalgaard.png",
            			 title: "WUWT's Resident Solar Expert",
            			 name: "@LeifSvalgaard"},
            	text: null,
            	pics: [{url: "http://wattsupwiththat.com/2013/12/26/new-paper-clouds-blown-by-the-solar-wind/#more-99909",
            		    image: "img/critiques/electric-joule-heating-lsvalgaard.jpg"}]
            }],
            cmaps: [{
            	image: "img/concept-maps/electric-joule-heating-cmap-small.jpg",
            	nodes: [{alt:"", title:"", href:"#", shape:"rect", coords:"31,13,91,52"},
                        {alt:"", title:"", href:"#", shape:"rect", coords:"162,10,225,48"},
                        {alt:"", title:"", href:"#", shape:"rect", coords:"238,71,300,98"},
                        {alt:"", title:"", href:"#", shape:"rect", coords:"105,118,148,156"},
                        {alt:"", title:"", href:"#", shape:"rect", coords:"190,143,246,180"},
                        {alt:"", title:"", href:"#", shape:"rect", coords:"188,240,249,276"},
                        {alt:"", title:"", href:"#", shape:"rect", coords:"96,245,158,274"},
                        {alt:"", title:"", href:"#", shape:"rect", coords:"7,125,54,153"},
                        {alt:"", title:"", href:"#", shape:"rect", coords:"3,221,58,277"}],
                mappername: "@ChrisReeve",
                mapperpic: "img/experts/chris-reeve.png",
            	title: "The Primitive Equations"
            },{
            	mappername: "@ChrisReeve",
            	mapperpic: "img/experts/chris-reeve.png",
            	title: "Electric Joule Heating"
            },{
            	mappername: "@JimJohnson",
            	mapperpic: "img/experts/jim-johnson.jpg"
		    }]

        }];

        this.all = function(cb) {
            return cb(constructs);
        };

        this.find = function(constructname, cb) {
            for (var i=0; i < constructs.length; i++) {
                var construct = constructs[i];
                if (construct.name.toLowerCase() === constructname.toLowerCase()) {
                    return cb(construct);
                }
            }

            return cb(false);
        };

        return this;

    }]);