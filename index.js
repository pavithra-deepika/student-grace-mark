let studentMark = [
    {
        Sid:101,
        Name:"Jaya",
        Mark:490,
        
    },
    {
        Sid:102,
        Name:"Muniyandi",
        Mark:480,
        
    },
    {
        Sid:103,
        Name:"Saran",
        Mark:499,
        
    },
    {
        Sid:104,
        Name:"Ram",
        Mark:496,
        
    },
    {
        Sid:105,
        Name:"Pavi",
        Mark:445,
        
    },
    {
        Sid:106,
        Name:"Sangee",
        Mark:450,
        
    },
    {
        Sid:107,
        Name:"Riya",
        Mark:485,
        
    }, 
    {
        Sid:108,
        Name:"Hari",
        Mark:486,
        
    }, 
    {
        Sid:109,
        Name:"Siva",
        Mark:499,
        
    },   {
        Sid:110,
        Name:"Yazhu",
        Mark:500,
       
    }, 

]
// table create 
    var table = document.getElementById("marksTable");
    for (i=0; i<=studentMark.length; i++) {
        var row = table.insertRow(i+1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = studentMark[i].Sid;
        cell2.innerHTML = studentMark[i].Name;
        cell3.innerHTML = studentMark[i].Mark;

    }
    // delete row function
    function deleteRow() {
        var table = document.getElementById("marksTable");
    for (i=studentMark.length; i >= 0 ; i--) {
        table.deleteRow(i+1);
    }}

    // marks add fiv efunction
    function addFive() {
         deleteRow();
        var table = document.getElementById("marksTable");
        for (i=0; i<=studentMark.length; i++) {
        var row = table.insertRow(i+1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = studentMark[i].Sid;
        cell2.innerHTML = studentMark[i].Name;
        studentMark[i].Mark = studentMark[i].Mark +5;
        cell3.innerHTML = studentMark[i].Mark;
    }
    }
    // marks add fiv efunction
    function addTen() {
        deleteRow();
        var table = document.getElementById("marksTable");
        for (i=0; i<=studentMark.length; i++) {
        var row = table.insertRow(i+1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = studentMark[i].Sid;
        cell2.innerHTML = studentMark[i].Name;
        studentMark[i].Mark = studentMark[i].Mark +10;
        cell3.innerHTML = studentMark[i].Mark;
}
}

