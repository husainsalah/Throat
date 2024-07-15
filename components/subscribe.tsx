import { useState } from "react";

const SubscribeForm = () => {
    const [status, setStatus] = useState<string | null>(null)
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")

    const SUBSCRIBE_URL = `https://api.convertkit.com/v3/forms/<form_id>/subscribe`

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()

        const payload = JSON.stringify({
            email,
            first_name: name,
            api_key: process.env.GATSBY_CONVERTKIT_PUBLIC_API_KEY,
        })

        try {
            const response = await fetch(SUBSCRIBE_URL, {
                method: "POST",
                body: payload,
                headers: {
                    Accept: "application/json; charset=utf-8",
                    "Content-Type": "application/json",
                },
            })

            const json = await response.json()

            if (json?.subscription?.id) {
                setStatus("SUCCESS")
                return
            }

            setStatus("ERROR")
            console.error('Failed to subscribe')
        } catch (err) {
            setStatus("ERROR")
            console.error(err)
        }
    }

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        setEmail(value)
    }

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        setName(value)
    }

    return (
        <div>
            {status === "SUCCESS" && (
                <div>
                    <p>
                        Welcome aboard{name ? ', ${name}' : ""}{" "}
                        <span role="img" aria-label="Ship">
                            "
                        </span>
                    </p>
                    <p>Please check your inbox to confirm the subscription!</p>
                </div>
            )}
            {status === "ERROR" && (
                <div>
                    <p>Oops, something went wrong...</p>
                    <p>
                        Please,{" "}
                        <button onClick={() => setStatus(null)}>try again.</button>
                    </p>
                </div>
            )}
            {status === null && (
                <form onSubmit={handleSubmit}>
                    <input
                        aria-label="Your first name"
                        name="fields[first_name]"
                        placeholder="Your first name"
                        type="text"
                        onChange={handleNameChange}
                        value={name}
                    />
                    <input
                        aria-label="Your email address"
                        name="email_address"
                        placeholder="Your email address"
                        required
                        type="email"
                        onChange={handleEmailChange}
                        value={email}
                    />
                    <button>SUBSCRIBE</button>
                </form>
            )}
        </div>
    )
}