import ContactForm from "../ContactForm";

export default function Home() {
  return (
    <div className="flex flex-col max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Kontakta Oss</h1>
      <ContactForm />
    </div>
  );
}
