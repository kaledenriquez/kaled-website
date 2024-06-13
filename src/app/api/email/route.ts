// app/api/email/route.ts

import FormData from "form-data";
import Mailgun from "mailgun.js";

export async function POST(req: Request) {
    const apiKey = process.env.MAILGUN_API_KEY
    const mailgunDomain = process.env.MAILGUN_DOMAIN
    const personalEmail = process.env.PERSONAL_EMAIL
    console.log(apiKey, mailgunDomain, personalEmail)
    if (!apiKey || !mailgunDomain || !personalEmail) {
        console.error("Environment variables are not set");
        return new Response(JSON.stringify({ message: 'Internal server error. Environment variables are not set' }), { status: 500 });
    }    
    const body = await req.json();
    const mailgun = new Mailgun(FormData);
    const mg = mailgun.client({username: 'api', key: apiKey});
    let success = false;

    await mg.messages.create(mailgunDomain, {
        from: "kaledenriquez@gmail.com <kaledenriquez@gmail.com>",
        to: [personalEmail],
        subject: "New contact form from " + [body.firstName] + " " + [body.lastName],
        html: "<h2>" + [body.firstName] + " " + [body.lastName] + "</h2><p><b>Email: </b>" + [body.email] + "</p><p><b>Company: </b>"+ [body.company] + "</p><p>" + [body.message] + "</p>"
    })
    .then(
        (msg: any) => {
            console.log(msg);
            success = true;
        }
    ).catch(
        (err: any) => {
            console.error(err);
            success = false;
        }
    );

    if (success) {
        return new Response(JSON.stringify({ message: 'Thanks for reaching out :)' }), { status: 200 });
    }

    return new Response(JSON.stringify({ message: 'Could not send it. Please try again.' }), { status: 500 });

}