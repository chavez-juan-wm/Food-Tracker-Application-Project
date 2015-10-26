var tracker = 2;

function createTable()
{
    var table = document.getElementById("myTable");
    var row = table.insertRow(tracker);
    var name = row.insertCell(0);
    var description = row.insertCell(1);
    var date = row.insertCell(2);
    var expiration = row.insertCell(3);
    var purchaseId = "purchaseDate" + tracker;
    var expireId = "expirationDate" + tracker;

    name.innerHTML = "<input type='text'>";
    description.innerHTML = "<input type='text'>";
    date.innerHTML = "<input type='text' id = '" + purchaseId + "'>";
    expiration.innerHTML = "<input type='text' id = '" + expireId + "'>";

    tracker++;
}

function deleteRow()
{
    if(tracker > 2)
    {
        tracker--;
        document.getElementById("myTable").deleteRow(tracker);
    }
}

$(document).ready(function()
{
    $(document).on("dblclick", "#myTable td", function()
    {
        var originalContent = $(this).text();

        if(isDate(originalContent) || originalContent == "Invalid Date")
            $(this).html("<input type='text' value='" + originalContent + "' id = 'expiration'/>");
        else
            $(this).html("<input type='text' value='" + originalContent + "'/>");
    });

    $(document).on("change", "input", function()
    {
        var newContent = $(this).val();

        if(this.id.indexOf('purchase') >= 0)
        {
            alert("It's in the purchase if");
            var x = new Date(Date.parse(newContent));
            newContent = x.toDateString();
            newContent.id = "purchase";
        }
        else if(this.id.indexOf('expiration') >= 0)
        {
            alert("It's in the expiration if");
            var y = new Date(Date.parse(newContent));
            newContent = y.toDateString();
            newContent.id = "expiration";

            expirationColor(newContent)
        }

        $(this).parent().text(newContent);
    });

    function expirationColor(expire)
    {
        expire = new Date(Date.parse(expire));

        var someDate = new Date();
        var numberOfDaysToAdd = 3;
        someDate.setDate(someDate.getDate() + numberOfDaysToAdd);

        if (someDate >= expire)
            $("td").css( "background-color", "red" );
        else
            $("td").css( "background-color", "transparent");
    }

    function isDate(val)
    {
        var d = new Date(val);
        return !isNaN(d.valueOf());
    }

});