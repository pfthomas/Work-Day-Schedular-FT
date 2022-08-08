var currentDay = $("#currentDay");
var timeBlock = $(".time-block")
var today = moment();
var hour = moment().format("H");
var date = moment().format("dddd, MMMM, Do");
var saveBtn = $("#save");
var container = $(".container")
currentDay.text(date);

//adjust backgrounds based on time
function timeBlockColor() {

    timeBlock.each(function() {
        var timeBlock = $(this);
        var blockHour = parseInt(timeBlock.attr("time")); 
        if (blockHour == hour){
            timeBlock.addClass("present").removeClass("future", "past");
        }

        else if (blockHour > hour){
            timeBlock.addClass("future").removeClass("past", "present");
        }
        else if (blockHour < hour){
            timeBlock.addClass("past").removeClass("present", "future");
        }
    });
}


var textContent = [];


//give each timeblock the its given hour and the textarea associated with it
function assignTextEntry() {
    
    textContent = localStorage.getItem("savedText");
    textContent = JSON.parse(textContent);

    for (var i = 0; i < textContent.length; i++) {
    
        var hText = textContent[i].text;

        var hour = textContent[i].textHour;
        $("[time=" + hour + "]").val(hText);


    }
    console.log(textContent);

}

function saveText(id){
    var queryId = `#${id}`;
    var value = $(queryId).val();
    console.log("storing ID with value: ", id, value);
    localStorage.setItem(id, value);

    var item = localStorage.getItem(id);
    console.log("retrieved item: ", item)
    //localStorage.setItem("savedText", JSON.stringify(textContent));
}

function retrieveNotes(){ 
    for (let i = 0; i < TIMESLOTS; i++){
        var id = i.toString();
        console.log("test ID: ", id);
        var note = localStorage.getItem(id);
        console.log("test note: ", note);
        if (note){
            document.getElementById(i.toString()).value = note;
        }
        
    }
    
}
const TIMESLOTS = 8;
timeBlockColor();
retrieveNotes();


console.log("bitch");