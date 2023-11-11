import nodemailer from 'nodemailer';

export const sendMailRetourPlainte = async (to: string) => {
  try {
    // host mailer
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'mionjo.com@gmail.com', // generated ethereal user
        pass: 'vjwkjfvfezofdbih', // generated ethereal password
      },
    });
    if (to) {
      await transporter.sendMail({
        to: `${to}`, // list of receivers
        subject: 'Retour de dépôt plaintes dans MIONJO', // Subject line
        html: `
              <style>
              body{
                text-align: center;
              }
              </style>
              <h2>Merci d'avoir déposer une plainte</h2>
              <p>Votre plainte a été envoyé et enregistrer</p>
              `, // html body
      });
    }
    // console.log(info.messageId);
    console.log('email retour plainte sent');
  } catch (error) {
    throw error;
  }
};

export const sendMailDepotPlainte = async (
  nom: string,
  prenom: string,
  tel: string,
  email: string,
  plainte: string,
) => {
  try {
    // host mailer
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'mionjo.com@gmail.com', // generated ethereal user
        pass: 'vjwkjfvfezofdbih', // generated ethereal password
      },
    });
    let info = await transporter.sendMail({
      to: 'mionjo.com@gmail.com', // list of receivers
      subject: "Merci d'avoir déposer une plainte", // Subject line
      html: `
          <style>
          body{
            text-align: center;
          }
          </style>
          <h2>Nom : ${nom}</h2>
          <h2>Prenom : ${prenom}</h2>
          <h2>Email : ${email}</h2>
          <h2>Téléphone : ${tel}</h2>
            <p>${plainte}</p>
          `, // html body
    });
    // console.log(info.messageId);
    console.log('email depot plainte sent');
  } catch (error) {
    throw error;
  }
};

export const sendMailRetourNousContacter = async (to: string) => {
  try {
    // host mailer
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'mionjo.com@gmail.com', // generated ethereal user
        pass: 'vjwkjfvfezofdbih', // generated ethereal password
      },
    });
    if (to) {
      await transporter.sendMail({
        to: `${to}`, // list of receivers
        subject: 'Retour de MIONJO', // Subject line
        html: `
              <style>
              body{
                text-align: center;
              }
              </style>
              <h2>Merci de nous avoir contacter</h2>
              <h3>Votre email a bien été reçus</h2>
              `, // html body
      });
    }
    // console.log(info.messageId);
    console.log('email retour nous contacter sent');
  } catch (error) {
    throw error;
  }
};

export const sendMailNousContacter = async (
  nom: string,
  prenom: string,
  email: string,
  objet: string,
  message: string,
) => {
  try {
    // host mailer
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'mionjo.com@gmail.com', // generated ethereal user
        pass: 'vjwkjfvfezofdbih', // generated ethereal password
      },
    });
    let info = await transporter.sendMail({
      to: 'mionjo.com@gmail.com', // list of receivers
      subject: `${objet}`, // Subject line
      html: `
          <style>
          body{
            text-align: center;
          }
          </style>
          <h2>Nom : ${nom}</h2>
          <h2>Prenom : ${prenom}</h2>
          <h2>Email : ${email}</h2>
          <h2>Message : </h2>
            <p>${message}</p>
          `, // html body
    });
    // console.log(info.messageId);
    console.log('email nous contacter sent');
  } catch (error) {
    throw error;
  }
};
