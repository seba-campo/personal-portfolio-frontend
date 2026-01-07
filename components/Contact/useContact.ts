import { useState } from "react"


interface ContactForm {
    name: string
    email: string
    company?: string
    subject: string
    message: string
}

const useContact = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)
        setError(null)
        setIsSuccess(false)

        const form = e.currentTarget
        const formData = new FormData(form)

        const messageData = {
            name: formData.get('name'),
            email: formData.get('email'),
            organization: formData.get('company') || '',
            subject: formData.get('subject'),
            message: formData.get('message')
        }

        try {
            const response = await fetch('https://mailer-api-qfoh.onrender.com/portfolio/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(messageData)
            })

            if (!response.ok) {
                throw new Error('Error al enviar el mensaje')
            }

            setIsSuccess(true)
            form.reset()
        } catch (err) {
            console.error(err)
            setError(err instanceof Error ? err.message : 'Ocurrió un error al enviar el mensaje')
        } finally {
            setIsLoading(false)
        }
    }

    return {
        handleSubmit,
        isLoading,
        isSuccess,
        error
    }
}

export default useContact
