(function() {

    const people = [
        {
            firstname: "Dreddy",
            lastname: "Nussgen",
            age: 70,
        },
        {
            firstname: "Yves",
            lastname: "Sear",
            age: 49,
        },
        {
            firstname: "Marcel",
            lastname: "Cowderay",
            age: 59,
        },
        {
            firstname: "Dag",
            lastname: "Binnall",
            age: 31,
        },
        {
            firstname: "Horten",
            lastname: "Claesens",
            age: 75,
        },
        {
            firstname: "Charmian",
            lastname: "Harnes",
            age: 10,
        },
        {
            firstname: "Sean",
            lastname: "Littlejohns",
            age: 37,
        },
        {
            firstname: "Hazlett",
            lastname: "Sprouls",
            age: 87,
        },
        {
            firstname: "Marcel",
            lastname: "Hasted",
            age: 66,
        },
        {
            firstname: "Cary",
            lastname: "Summerson",
            age: 15,
        },
        {
            firstname: "Feodor",
            lastname: "Ollett",
            age: 56,
        },
        {
            firstname: "Kelly",
            lastname: "Ranahan",
            age: 62,
        },
        {
            firstname: "Madelene",
            lastname: "Davie",
            age: 14,
        },
        {
            firstname: "Bent",
            lastname: "Karpe",
            age: 82,
        },
        {
            firstname: "Reinaldo",
            lastname: "Grimbleby",
            age: 81,
        },
    ];
    document.getElementById("run").addEventListener("click", function() {
   let ages = people.filter((people) => people.age > 18);
   console.log(ages);

});

})();

