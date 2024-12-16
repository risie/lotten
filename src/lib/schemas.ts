import { z } from "zod";

const emailSchema = z.string().email("Ange en giltig e-postadress");
export const contactSchema = z.object({
  name: z.string().nonempty("Vänligen fyll i ditt namn"),
  email: emailSchema,
  subject: z.string().nonempty("Ange ett ämne"),
  message: z.string().nonempty("Skriv ett meddelande"),
  honeypot: z.string().optional(),
});
