
class FormSubmit {
    constructor(settings){
        this.settings = settings;
        this.form = document.getElementById(settings.form);
        this.submitBtn = document.getElementById(settings.button);
        if(this.form){
            this.url = this.form.getAttribute("action");
        }
    }

    displaySuccess(){
        this.form.innerHTML= this.settings.success;
    }

    displayError(){
        this.form.innerHTML= this.settings.error;
    }
    getFormObject(){
        const formObject ={}
        const fields = this.form.querySelectorAll("[name]");
        fields.forEach((field) => {
            formObject[field.getAttribute("name")] = field.value;
        });
        return formObject;
    }

    async sendForm(){
        try{
            await fetch(this.url,{
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(this.getFormObject()), //,
            });
            this.displaySuccess();
        }catch(error){
            this.displayError
            throw new Error("error");
            
        }
        
    }

    init(){
        if(this.form)this.formButton.addEventListener("click", () => this.displaySuccess());
        return this;
    }
}

const FormSubmit = new FormSubmit({
    form: "[data-form]",
    button: "[data-button]",
    success: "<p> class='success' Forms enviado!</p>",
    error: "<p> class = 'error' There was an error submitting the form.</p>"
});

FormSubmit.init();