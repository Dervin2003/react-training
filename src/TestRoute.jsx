import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TestRoute() {

    const navigate = useNavigate();

    const goToAbout = () => {
        navigate('/about'); 
    }

    
    const [formData,setFormData]=useState({
        name:'',
        email:'',
        password:''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const formSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        alert(`Thanks ${formData.name}, your message has been sent!`);

        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div>
            <form onSubmit={formSubmit}>
                <div>
                    <label>Name : </label>
                    <input type="text" value={formData.name} name="name" onChange={handleChange} />
                </div>
                <div>
                    <label>E-mail : </label>
                    <input type="email" value={formData.email} name="email" onChange={handleChange} />
                </div>
                <div>
                    <label>Password : </label>
                    <input type="password" value={formData.password} name="password" onChange={handleChange} />
                </div>
                <button type="submit">Submit</button>
            </form>

            <button onClick={goToAbout}>navigate</button>
        </div>
    )
}

export default TestRoute;