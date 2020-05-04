class ShowHide_FixedPosition {
    constructor(modal, onOpenFunction) {
        this.modal = modal;
        this.onOpenFunction = onOpenFunction;
    }
    OpenModal() {
        document.getElementById(this.modal).style.display = "block";
        if (this.onOpenFunction != null) {
            this.onOpenFunction();
        } else {
            console.log("Function not defined");
        }
    }
    CloseModal() {
        document.getElementById(this.modal).style.display = "none";
    }
}
class ShowHide_MousePosition {
    constructor(modal, onOpenFunction) {
        this.modal = modal;
        this.onOpenFunction = onOpenFunction;
    }
    OpenModal(event, id) {
        event.preventDefault();
        console.log("Mouse Eevent");
        if (event.button === 2) {
            let padding_left = (event.clientX) + 'px ';
            let padding_top = (event.clientY) + 'px ';
            document.getElementById(this.modal).style.paddingLeft = padding_left;
            document.getElementById(this.modal).style.paddingTop = padding_top;
            document.getElementById(this.modal).style.display = "block";
            if (this.onOpenFunction != null) {
                this.onOpenFunction(id);
            } else {
                console.log("Function not defined");
            }
        } else {
            console.log("Function not defined");
        }
    }
    CloseModal() {
        document.getElementById(this.modal).style.display = "none";
    }
}

