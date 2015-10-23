/*Created by session2 on 10/22/15.*/
var tracker = 1;

function updateTable()
{
    var table = document.getElementById("myTable");
    var row = table.insertRow(tracker);
    var name = row.insertCell(0);
    var description = row.insertCell(1);
    var date = row.insertCell(2);
    var expiration = row.insertCell(3);
    var repeat = true;

    while(repeat)
    {
        var foodName = prompt("Enter the food's name: ");

        if(foodName == "")
            alert("Sorry could you repeat that?");
        else
            repeat = false;
    }
    repeat = true;
    while(repeat)
    {
        var foodDescription = prompt("Enter a description for the food: ");

        if(foodDescription == "")
            alert("Sorry could you repeat that?");
        else
            repeat = false;
    }
    repeat = true;
    while(repeat)
    {
        var purchaseDate = prompt("Date of purchase: ");

        if(purchaseDate == "")
            alert("Sorry could you repeat that?");
        else
            repeat = false;
    }
    repeat = true;
    while(repeat)
    {
        var expirationDate = prompt("Expiration date for the food: ");

        if(expirationDate == "")
            alert("Sorry could you repeat that?");
        else
            repeat = false;
    }

    name.innerHTML = tracker +". " + foodName;
    description.innerHTML = foodDescription;
    date.innerHTML = purchaseDate;
    expiration.innerHTML = expirationDate;

    tracker++;
}

function deleteRow()
{
    if(tracker > 1)
    {
        tracker--;
        document.getElementById("myTable").deleteRow(tracker);
    }
}
