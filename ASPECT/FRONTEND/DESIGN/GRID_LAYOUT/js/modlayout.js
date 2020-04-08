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