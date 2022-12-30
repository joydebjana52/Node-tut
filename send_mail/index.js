// const nodemailer = require('nodemailer');
// const trasnport = nodemailer.createTransport({
//     // host: 'smtp.gmail.com',
//     // port: 587,
//     // secure: false,
//     // requireTLS: true,
//     service:'gmail',
//     auth: {
//         user: 'janajoydeb083@gmail.com',
//         pass: 'Joydeb#1234567'
//     }
// })

// const mailOptions = {
//     from: 'janajoydeb083@gmail.com',
//     to: 'joydebjana52@gmail.com',
//     subject: 'This is mail subject',
//     text: 'Hello I am Joydeb Jana this mail is all about your college'
// }

// trasnport.sendMail(mailOptions, (err, info) => {
//     if (err) {
//         // console.log('Error occurred');
//         console.log(err);
//     }
//     else {
//         console.log('Email has been send', info.response);
//     }
// })



//// GFG --->

const nodemailer = require('nodemailer');
 
let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'janajoydeb083@gmail.com',
        pass: 'My Password Will Be Placed Here'
    }
});
 
let mailDetails = {
    from: 'janajoydeb083@gmail.com',
    to: 'joydebjana52@gmail.com',
    subject: 'Test mail',
    text: 'Node.js testing mail for GeeksforGeeks'
};
 
mailTransporter.sendMail(mailDetails, function(err, data) {
    if(err) {
        console.log(err);
    } else {
        console.log('Email sent successfully');
    }
});