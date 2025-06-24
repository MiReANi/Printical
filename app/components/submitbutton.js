'use client'

import { useFormStatus } from 'react-dom'

export default function SubmitButton(){
    const {pending} = useFormStatus();

    return(
        <button className='bg-blue disabled:opacity-25' type="submit" disabled={pending}>{pending ? "Submitting..." : "Submit"}</button>
    );
}
