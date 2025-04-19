let top3 = [
    "The Colosseum",
    "Fontain",
    "Restaurant"
]

function showItinerary(place1, place2, place3) {
    console.log("Visit" + place1);
    console.log("Then visit" + place2);
    console.log("Finish a visit in " + place3);
}

showItinerary(top3[0], top3[1], top3[2]);
console.log("----")
showItinerary(...top3);