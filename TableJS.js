function monthSelector(){
    var month = document.getElementById("Month").value;
};

/*function findMonth(){

};*/

window.onload = function ()
{
    const monthSelect = document.getElementById("Month");
    const month = monthSelect.value;
    const calendarBody = document.getElementById("calendar-body");

    let daysInMonth;

    if (month === "january" ||
        month ==="march"|| 
        month ==="may"|| 
        month ==="july"|| 
        month ==="august"|| 
        month ==="october"|| 
        month ==="december"
    )
    {
        daysInMonth = 31;
    }
    else if (
        month ==="april"|| 
        month ==="june"|| 
        month ==="september"|| 
        month ==="november"
    )
    {
        daysInMonth = 30;
    }else
    {
        daysInMonth = 28
    }

        let startDay;
        let day = 1;

        if (month ==="january" ||
            month ==="october" 
        )
        { startDay = 2 }
        else if(month ==="february" ||
                month ==="march" ||
                month ==="november"
        )
        { startDay = 5 }
        else if(month ==="april" ||
                month ==="july"
        )
        { startDay = 1 }
        else if(month ==="may")
        { startDay = 3 }
        else if(month ==="june")
        { startDay = 6 }
        else if(month ==="august")
        { startDay = 4 }
        else if(month ==="september" ||
                month ==="december"
        )
        { startDay = 0 }

        while (day <= daysInMonth){
            const row = document.createElement("tr");

            for (let i = 0; i < 7; i++){
                let cell = document.createElement("td");

                if (startDay > 0){
                    cell.textContent = "";
                    startDay--
                }
                else if (day <=daysInMonth)
                {
                    cell.textContent = day;
                    day++
                }
                else{
                    cell.textContent = "";
                }
                row.appendChild(cell);
            }
            calendarBody.appendChild(row);
        };
    }
document.getElementById("Month").addEventListener("change", function (){location.reload();});