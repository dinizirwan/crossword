// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
    $(function() {
        // provide crossword entries in an array of objects like the following example
        // Position refers to the numerical order of an entry. Each position can have
        // two entries: an across entry and a down entry
        var puzzleData = [
            {
                clue: "du hast ein ...es herz",
                answer: "gut",
                position: 1,
                orientation: "across",
                startx: 1,
                starty: 2
            },
            {
                clue: "das machst du gerne wenn du zuhause bist",
                answer: "baden",
                position: 10,
                orientation: "down",
                startx: 3,
                starty: 15
            },
            {
                clue: "über was denkst du mindestens 3 oder vielleicht 10 mal am Tag?",
                answer: "essen",
                position: 8,
                orientation: "across",
                startx: 3,
                starty: 10
            },
            {
                clue: "wo bin ich, wenn ich bei dir bin",
                answer: "heim",
                position: 11,
                orientation: "across",
                startx: 2,
                starty: 18
            },
            {
                clue: "Das machen wir gefühl immer",
                answer: "chillen",
                position: 14,
                orientation: "across",
                startx: 7,
                starty: 6
            },
            {
                clue: "dieses wort sagst nur du.. wollen wir .... machen",
                answer: "haya",
                position: 5,
                orientation: "down",
                startx: 5,
                starty: 4
            },
            {
                clue: "laufen wir das hier vorbei sagst du immer 'ouhh ich liebe dieses Laden nh'",
                answer: "rituals",
                position: 3,
                orientation: "across",
                startx: 1,
                starty: 5
            },
            {
                clue: "du willst immer dieses Art von wasser trinken",
                answer: "sprudel",
                position: 9,
                orientation: "down",
                startx: 4,
                starty: 10
            },
            {
                clue: "wo ist es morgens laut, auch ohne Party",
                answer: "hof",
                position: 16,
                orientation: "across",
                startx: 5,
                starty: 4
            },
            {
                clue: "wenn die Sonne ...t , freuen wir uns so doll wie Ratti, Waschli und Bärli",
                answer: "schein",
                position: 13,
                orientation: "down",
                startx: 7,
                starty: 5
            },
            {
                clue: "ich habe den Weihnachstmarkt in diese stadt als drittbester weihnachtsmarkt zwischen alle 3 Weihnachstmarkten wo wir dieses Jahr zusammen gewesen waren",
                answer: "wiesbaden",
                position: 15,
                orientation: "across",
                startx: 6,
                starty: 9
            },
            {
                clue: "hier bist du gleichzeitig nass und entspannt",
                answer: "therme",
                position: 4,
                orientation: "down",
                startx: 3,
                starty: 5
            },
            {
                clue: "zu hause ist es am ....sten",
                answer: "bequem",
                position: 10,
                orientation: "across",
                startx: 3,
                starty: 15
            },
            {
                clue: "was hab ich bei der Halloween party an?",
                answer: "anzug",
                position: 7,
                orientation: "down",
                startx: 11,
                starty: 9
            },
            {
                clue: "was sieht teuer aus und ist trotzdem schnell weg",
                answer: "sushi",
                position: 2,
                orientation: "down",
                startx: 2,
                starty: 1
            },
            {
                clue: "das klaue ich immer von dir jeden morgen bevor ich zur arbeit fahre",
                answer: "parfum",
                position: 12,
                orientation: "across",
                startx: 4,
                starty: 11
            },
            {
                clue: "ich kann überall",
                answer: "schlafen",
                position: 6,
                orientation: "down",
                startx: 1,
                starty: 7
            }
        ]

        $('#puzzle-wrapper').crossword(puzzleData);

    })

})(jQuery)