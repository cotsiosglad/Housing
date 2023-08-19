import React from "react"
import "./adminLogin.css"

const adminLogin = () => {
    return (
        <>
            <section className='contact mb'>
                <div className='container'>
                    <form className='shadow'>
                        <div>
                            <input type='text' placeholder='Username' />
                            <br></br>
                            <input type='password' placeholder='Password' />
                        </div>
                        <button>Login</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default adminLogin