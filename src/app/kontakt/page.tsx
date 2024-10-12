import ContactForm from "../ContactForm";

export default function Kontakt() {
  return (
    <section className="flex flex-col max-w-xl mx-auto p-3 prose">
      <h1 className="text-2xl font-bold mb-4">Kontakta Oss</h1>
      <ContactForm />
    </section>
  );
}
