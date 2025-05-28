import { NextResponse } from "next/server";
import { mailOptions, transporter} from "./nodemailer.js";

type Feedback = {
    name?: string,
    email?: string,
    phone?: string,
    yritys?: string,
    y_tunnus?: string,
    freeWord?: string
}

export async function POST(request: Request){
    
    const data: Feedback = await request.json();
    console.log('data: ', data);
    const {name, email, phone, yritys, y_tunnus, freeWord } = data;

    try {
        await transporter.sendMail({
            ...mailOptions,
            subject: "Uusi yhteydenotto",
            text: "This is a test string",
            html: "Lähettäjä: " + name + "<br></br>" + email + "<br></br>" + phone + "<br></br>" + yritys + "<br></br>" + y_tunnus + "<br></br>" + freeWord,
        });
        
        return NextResponse.json({success: true}, {status: 200});
    } catch(error) {
        console.log(error);
        return NextResponse.json({error: 'Error'}, {status: 400});
    }
    //const {name, email } = data;
    //return NextResponse.json({name, email });
}