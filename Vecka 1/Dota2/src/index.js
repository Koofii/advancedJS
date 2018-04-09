const apiKey = "7A93AC6646DD70647FED1464EADE3C94";
let inputField = $("#inputDota");
let heroes = [];

fetch("https://api.opendota.com/api/heroes")
    .then(response => response.json())
    .then(data => heroes = data)
    .then(() => console.log(heroes))


$("#searchButton").on("click", function(){
    $("#hero").html("")
    let inputValue = $("#inputDota").val();
    var resultObject = search(inputValue, heroes)
    let roles = getRoles(resultObject);
    console.log(roles, "ok")

    $("#hero").append(`
        <p>Name: ${resultObject.localized_name}</p>
        <p>Hero ID: ${resultObject.id}</p>
        <p>Legs: ${resultObject.legs}</p>
        <p>Primary attribute: ${resultObject.primary_attr}</p>
    `).append('<h3>Role(s): </h3>')
    
    for (var i = 0; i < roles.length; i++){
        $("#hero").append('<p>' + roles[i] + '</p>');
    }
});

function getRoles(arr){
    return arr.roles
}

function search(nameKey, myArray){
    for (var i = 0; i < myArray.length; i++){
        if (myArray[i].localized_name === nameKey){
            console.log(myArray[i])
            return myArray[i]
        }
    }
}