function ChangeTableLayout() {
    console.log("On change");
    let PersonTableCheckBox__Status = document.getElementById("person_check_box").checked << 0;
    let EventTableCheckBox__Status = document.getElementById("event_check_box").checked << 1;
    let GroupTableCheckBox__Status = document.getElementById("group_check_box").checked << 2;
    let CheckBoxesStatus = PersonTableCheckBox__Status | EventTableCheckBox__Status | GroupTableCheckBox__Status;
    console.log("CheckBoxes Status= " + CheckBoxesStatus.toString(2));
    let NoWindows = (false << 2) | (false << 1) | (false << 0);                // 0  0  0 -> No
    let OnlyPerson = (false << 2) | (false << 1) | (true << 0);                  // 0  0  1 
    let OnlyEvent = (false << 2) | (true << 1) | (false << 0);
    let OnlyGroup = (true << 2) | (false << 1) | (false << 0);
    let PersonEvent = (false << 2) | (true << 1) | (true << 0);
    let PersonGroup = (true << 2) | (false << 1) | (true << 0);
    let EventGroup = (true << 2) | (true << 1) | (false << 0);
    let AllWindows = (true << 2) | (true << 1) | (true << 0);
     if(CheckBoxesStatus == NoWindows){
        document.getElementById("ma-top-container").style.display = "none";
        document.getElementById("ma-mid-container").style.display = "none";
        document.getElementById("ma-bottom-container").style.display = "none";
     }
     else
     {
        document.getElementById("ma-top-container").style.display = "inline-block";
        document.getElementById("ma-mid-container").style.display = "inline-block";
        document.getElementById("ma-bottom-container").style.display ="inline-block";
     }
    switch (CheckBoxesStatus) {
        case NoWindows:
            console.log("No windows");
            document.getElementById("mid-area-grids-organisations").style.gridTemplateRows = '0% 0% 0%';
          /*
            document.getElementById("ma-top-container").style.display = "none";
            document.getElementById("ma-mid-container").style.display = "none";
            document.getElementById("ma-bottom-container").style.display = "none";
            */
            break;
        case AllWindows:
            console.log("AllWindows");
            document.getElementById("mid-area-grids-organisations").style.gridTemplateRows = '33% 34% 33%';
            document.getElementById("db-grids-organisation").style.gridTemplateRows = '10% 90%';
            document.getElementById("evt-grids-organisation").style.gridTemplateRows = '10% 90%';
            document.getElementById("grp-grids-organisation").style.gridTemplateRows = '10% 90%';
           /*
            document.getElementById("ma-top-container").style.display = "inline-block";
            document.getElementById("ma-mid-container").style.display = "inline-block";
            document.getElementById("ma-bottom-container").style.display = "inline-block";
            */
            break;
        case OnlyPerson:
            console.log("Person");
            document.getElementById("mid-area-grids-organisations").style.gridTemplateRows = '100% 0% 0%';
            document.getElementById("db-grids-organisation").style.gridTemplateRows  = '4% 96%';
            document.getElementById("evt-grids-organisation").style.gridTemplateRows = '4% 96%';
            document.getElementById("grp-grids-organisation").style.gridTemplateRows = '4% 96%';
            var x=document.getElementById("mas-grids-organisation");
            console.log(x);
           /*
            document.getElementById("ma-top-container").style.display = "inline-block";
            document.getElementById("ma-mid-container").style.display = "none";
            document.getElementById("ma-bottom-container").style.display = "none";
            */
            break;
        case OnlyEvent:
            console.log("Event");
            document.getElementById("mid-area-grids-organisations").style.gridTemplateRows = '0% 100% 0%';
            document.getElementById("db-grids-organisation").style.gridTemplateRows  = '4% 96%';
            document.getElementById("evt-grids-organisation").style.gridTemplateRows = '4% 96%';
            document.getElementById("grp-grids-organisation").style.gridTemplateRows = '4% 96%';
            var x=document.getElementById("mas-grids-organisation");
            console.log(x);
           /*
            document.getElementById("ma-top-container").style.display = 'none';
            document.getElementById("ma-mid-container").style.display = 'inline-block';
            document.getElementById("ma-bottom-container").style.display = 'none';
          */
            break;
        case OnlyGroup:
            console.log("Group");
            document.getElementById("mid-area-grids-organisations").style.gridTemplateRows = '0% 0% 100%';
            document.getElementById("db-grids-organisation").style.gridTemplateRows  = '4% 96%';
            document.getElementById("evt-grids-organisation").style.gridTemplateRows = '4% 96%';
            document.getElementById("grp-grids-organisation").style.gridTemplateRows = '4% 96%';
            var x=document.getElementById("mas-grids-organisation");
            console.log(x);
           /*
            document.getElementById("ma-top-container").style.display = 'none';
            document.getElementById("ma-mid-container").style.display = 'none';
            document.getElementById("ma-bottom-container").style.display = 'inline-block';
           */
            break;
        case PersonEvent:
            console.log("PersonEvent");
            document.getElementById("mid-area-grids-organisations").style.gridTemplateRows = '50% 50% 0%';
            document.getElementById("db-grids-organisation").style.gridTemplateRows  = '6% 94%';
            document.getElementById("evt-grids-organisation").style.gridTemplateRows = '6% 94%';
            document.getElementById("grp-grids-organisation").style.gridTemplateRows = '6% 94%';
            break;
        case PersonGroup:
            console.log("PersonGroup");
            document.getElementById("mid-area-grids-organisations").style.gridTemplateRows = '50% 0% 50%';
            document.getElementById("db-grids-organisation").style.gridTemplateRows  = '6% 94%';
            document.getElementById("evt-grids-organisation").style.gridTemplateRows = '6% 94%';
            document.getElementById("grp-grids-organisation").style.gridTemplateRows = '6% 94%';
            break;
        case EventGroup:
            console.log("EventGroup");
            document.getElementById("mid-area-grids-organisations").style.gridTemplateRows = '0% 50% 50%';
            document.getElementById("db-grids-organisation").style.gridTemplateRows  = '6% 94%';
            document.getElementById("evt-grids-organisation").style.gridTemplateRows = '6% 94%';
            document.getElementById("grp-grids-organisation").style.gridTemplateRows = '6% 94%';
            break;
        default: console.log("Other");
        // code block
    }
    if( CheckBoxesStatus== OnlyPerson |  CheckBoxesStatus== OnlyEvent   |  CheckBoxesStatus== OnlyGroup){
        console.log("Uno");
    } 
}



/*
let MenuFSM = "Open";
function CloseMainMenu() {
}
function MenuDisplay(obj) {
    if (MenuFSM == "Close") {
        MenuFSM = "Open";
        document.getElementById("main-grid-container").style.gridTemplateColumns = '10% 90%';
        document.getElementById("bt-main-menu").style.display="inline-block";
    }
    else {
        if (MenuFSM == "Open") {
            MenuFSM = "Close";
            document.getElementById("main-grid-container").style.gridTemplateColumns = '2% 98%';
            document.getElementById("bt-main-menu").style.display="none";
            document.getElementById("bt-main-menu").style
        }
    }
}
let ResultFSM = "MinSize";
function ResultDiplay(obj) {
    if (ResultFSM == "MinSize") {
        ResultFSM = "MaxSize";
        document.getElementById("workspace-grid-container").style.gridTemplateColumns = '20% 80%';
        document.getElementById("workspace-Section1").style.display = 'none';
        document.getElementById("workspace-Section2").style.display = 'none';
    }
    else {
        if (ResultFSM == "MaxSize") {
            ResultFSM = "MinSize";
            document.getElementById("workspace-grid-container").style.gridTemplateColumns = '50% 50%';
            document.getElementById("workspace-Section1").style.display = "block";
            document.getElementById("workspace-Section2").style.display = "block";
        }
    }
}
let RowOneFSM = "MinSize";
function RowOneDiplay(obj) {
    if (RowOneFSM == "MinSize") {
        RowOneFSM = "MaxSize";
        document.getElementById("workspace-grid-container").style.gridTemplateRows = '100% 0%';
        document.getElementById("ArrowDown").style.top="97%";
    }
    else {
        if (RowOneFSM == "MaxSize") {
            RowOneFSM = "MinSize";
            document.getElementById("ArrowDown").style.top="95%";
            document.getElementById("workspace-grid-container").style.gridTemplateRows = '50% 50%';
        }
    }
}
let RowTwoFSM = "MinSize";
function RowTwoDiplay(obj) {
    if (RowTwoFSM == "MinSize") {
        RowTwoFSM = "MaxSize";
        document.getElementById("workspace-grid-container").style.gridTemplateRows = '0% 100%';
        document.getElementById("workspace-Section1").style.display = 'none';
    }
    else {
        if (RowTwoFSM == "MaxSize") {
            RowTwoFSM = "MinSize";
            document.getElementById("workspace-grid-container").style.gridTemplateRows = '50% 50%';
            document.getElementById("workspace-Section1").style.display = "block";
        }
    }
}
*/


function MaximizeMidArea(){

CurrentStatus=document.getElementById("workspace-grids-organisation").style.gridTemplateColumns;

if(CurrentStatus=="7% 93% 0%"){
    document.getElementById("workspace-grids-organisation").style.gridTemplateColumns = "7% 46% 46%";
  //  alert("MaxMidtoIDLE");
}
else
{

document.getElementById("workspace-grids-organisation").style.gridTemplateColumns = "7% 93% 0%";

//alert("IdleToMaxMid");
}



   


}



function MaximizeRightArea(){

    CurrentStatus=document.getElementById("workspace-grids-organisation").style.gridTemplateColumns;
    if(CurrentStatus=="7% 0% 93%"){
        document.getElementById("workspace-grids-organisation").style.gridTemplateColumns = "7% 46% 46%";
      //  alert("MaxRighttoIDLE");
    }
    else
    {
    
      document.getElementById("workspace-grids-organisation").style.gridTemplateColumns = "7% 0% 93%";
     // alert("IdleToMaxRight");

    
    }
   
   
    
}