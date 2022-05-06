import nodemailer from 'nodemailer';
import { SendMailData, MailAdapter } from '../mail-adapter';

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    const transport = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "f85efd0578dc80",
        pass: "01857d1fb41e53"
      }
    });

    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Gabriel Ferreira <gabriel.ferreira5584@gmail.com>',
      subject,
      html: body
    });
  }
}