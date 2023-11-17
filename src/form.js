const Form = () => {

    function validateInputs() {
        var SubmitForm
        var FormErrors

        SubmitForm = true

        var fullname = new String(document.MyForm.fullname.value)
        var email = new String(document.MyForm.email.value)
        var phone = new String(document.MyForm.phone.value)

        if ( fullname.length < 1 || email.length < 1 || phone.length < 1){
            FormErrors = "All fields are mandatory. Please complete the form."
            SubmitForm = false
        } else {
            var emailFilter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
            var phoneFilter = /^1?-?\(?\d{3}\)?-?\d{3}-?\d{4}$/

            if (!emailFilter.test(email)) {
                FormErrors = "Your form contains invalid field entries. Please correct your form before submitting."
                SubmitForm = false
            } else if(!phoneFilter.test(phone)) {
                FormErrors = "Your phone number is invalid."
                SubmitForm = false
            }
        }




        if(SubmitForm == false) {
            alert(FormErrors)
            return false
        } else {
            fullname = fullname.replace(/[^a-z0-9\s\-]/gim,"")
            fullname = fullname.trim()
            email = email.replace(/[^a-z0-9_@.-]/gim,"")
            email = email.trim()
            phone = phone.replace(/^\+1|[^0-9]+/, "")
            phone = phone.trim()
        }
    }

    return (
        <div className="body">
            <h1>Tim's Newsletter</h1>
            <form name="MyForm">
                <div className="input-container">
                    <input type="text" name="fullname" placeholder="Your full name" maxLength="35" />
                    <input type="email" name="email" placeholder="Your email" maxLength="30" />
                    <input type="tel" name="phone" placeholder="Your phone number" maxLength="14" />
                    <input type="submit" name="submit" value="Submit" onClick={validateInputs} />
                </div>
            </form>
        </div>
    )
}

export default Form