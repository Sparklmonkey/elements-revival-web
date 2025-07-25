import RNSmtpMailer from "react-native-smtp-mailer";

export async function sendEmail(to:string, subject:string, body:string) {
    RNSmtpMailer.sendMail({
        mailhost: "live.smtp.mailtrap.io",
        port: "587",
        ssl: true,
        username: "smtp@mailtrap.io",
        password: "c81e4c3f1cc52d630f0ca019d7cb7510",
        recipients: "sparklmonkeygames@gmail.com",
        subject: "This is a test Subject",
        htmlBody: "This is a test Message",
    })
        .then(success => console.log(success))
        .catch(err => console.log(err));
}