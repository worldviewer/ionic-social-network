angular.module('app.services', [])

    .factory("Construct", [function() {

    	// fake the data
        var constructs = [{
            name: "Electric Joule Heating",
            type: "Model",
            shortDefinition: "Electric joule heating proposes that the Earth can be electrically heated by the flow of charged particles coming from the Sun and other cosmic phenomena.",
            longDefinition: "",
            status: "",
            advocates: [
                {name: "@ChrisReeve",
                title: "Layperson Advocate",
                image: ""

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