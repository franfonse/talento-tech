import Swal from "sweetalert2";
import useState from "react";

function Form() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();

    function isEmailValid(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function handleSubmit(e) {
        e.preeventDefault();

        if (name.trim() === "" || email.trim() === "") {
            return;
        }
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit()}>
                <label htmlFor="">Name</label>
                <input type="text" />
                <label htmlFor="">Email</label>
                <input type="email" />
            </form>
        </div>
    )

}

export default Form;
