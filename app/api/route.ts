import { NextResponse } from "next/server";

type Feedback = {
    name?: string,
    email?: string,
}

export async function POST(request: Request){
    
    const data: Feedback = await request.json();
    console.log('data: ', data);

    const {name, email } = data;
    return NextResponse.json({name, email });
}


/*export default function handler(req, res) {
    console.log(req.body);
    res.status(200).json({name: 'John Doe'})
}*/