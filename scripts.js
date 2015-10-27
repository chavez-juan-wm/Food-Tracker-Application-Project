var tracker = 1;
var idNames = 1;
var whichRow;

function createTable()
{
    var table = document.getElementById("myTable");
    var row = table.insertRow(tracker);
    row.id = idNames + "row";
    var name = row.insertCell(0);
    var description = row.insertCell(1);
    var date = row.insertCell(2);
    date.id = idNames + "purchase";
    var expiration = row.insertCell(3);
    expiration.id = idNames + "expiration";
    var purchaseId = "purchaseDate" + idNames;
    var expireId = "expirationDate" + idNames;

    name.innerHTML = "<input type='text'>";
    description.innerHTML = "<input type='text'>";
    date.innerHTML = "<input type='text' id = '" + purchaseId + "'>";
    expiration.innerHTML = "<input type='text' id = '" + expireId + "'>";

    tracker++;
    idNames++;
}

function deleteRow()
{
    if(tracker > 2)
    {
        if($("#" + whichRow + "row").length)
        {
            tracker--;
            $("#" + whichRow + "row").remove();
        }
    }
}

$(document).ready(function()
{
    $(document).on("dblclick", "#myTable td", function()
    {
        var originalContent = $(this).text();

        if(isDate(originalContent) || originalContent == "Invalid Date")
        {
            if(this.id.indexOf("expiration") >= 0)
                $(this).html("<input type='text' value='" + originalContent + "' id = 'expiration'/>");
            else if(this.id.indexOf("purchase") >= 0)
                $(this).html("<input type='text' value='" + originalContent + "' id = 'purchase'/>");
        }
        else
            $(this).html("<input type='text' value='" + originalContent + "'/>");
    });

    $(document).on("change", "input", function()
    {
        var newContent = $(this).val();

        if(this.id.indexOf('purchase') >= 0)
        {
            var x = new Date(Date.parse(newContent));
            newContent = x.toDateString();
        }
        else if(this.id.indexOf('expiration') >= 0)
        {
            var y = new Date(Date.parse(newContent));
            newContent = y.toDateString();
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
            $("#" + whichRow + "row").css('background-color','red');
        else
            $("#" + whichRow + "row").css('background-color','transparent');
    }

    function isDate(val)
    {
        var d = new Date(val);
        return !isNaN(d.valueOf());
    }

    $(document).on('click', "#myTable tr", function()
    {
        $("td").css('border-color', 'black');

        whichRow = parseInt(this.id);
        $("#" + whichRow + "row td").css('border-color','blue');
    });
});