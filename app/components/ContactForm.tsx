"use client";

import { useState } from "react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        // phone: "",
        // eventType: "",
        // guests: "",
        // date: "",
        message: "",
    });

    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate submission
        setStatus("success");
        setTimeout(() => setStatus("idle"), 3000);
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className={`${playfair.className} text-4xl md:text-5xl text-gray-900 mb-4`}>
                        Pianifica il tuo evento
                    </h2>
                    <p className="text-gray-500 font-light">
                        Compila il modulo sottostante e ti ricontatteremo al più presto per organizzare il tuo giorno speciale.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nome e Cognome</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-colors bg-white"
                                placeholder="Mario Rossi"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-colors bg-white"
                                placeholder="mario@example.com"
                            />
                        </div>

                         {/* Phone */}
                         {/* <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Telefono</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-colors bg-white"
                                placeholder="+39 333 1234567"
                            />
                        </div> */}

                        {/* Event Type */}
                        {/* <div>
                            <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-2">Tipo di Evento</label>
                            <select
                                id="eventType"
                                name="eventType"
                                required
                                value={formData.eventType}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-colors bg-white"
                            >
                                <option value="" disabled>Seleziona un'opzione</option>
                                <option value="Matrimonio">Matrimonio</option>
                                <option value="Compleanno">Compleanno</option>
                                <option value="Battesimo/Comunione">Battesimo / Comunione</option>
                                <option value="Cena Aziendale">Cena Aziendale</option>
                                <option value="Altro">Altro</option>
                            </select>
                        </div> */}
                         
                         {/* Date */}
                         {/* <div>
                            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">Data Indicativa</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-colors bg-white text-gray-500"
                            />
                        </div> */}

                        {/* Guests */}
                        {/* <div>
                            <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">Numero Ospiti (stimato)</label>
                            <input
                                type="number"
                                id="guests"
                                name="guests"
                                min="1"
                                value={formData.guests}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-colors bg-white"
                                placeholder="es. 50"
                            />
                        </div> */}

                    </div>

                    {/* Message */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Messaggio / Richieste Particolari</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            required
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-colors bg-white resize-none"
                            placeholder="Raccontaci come immagini il tuo evento..."
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center pt-4">
                        <button
                            type="submit"
                            className="bg-amber-500 text-white px-10 py-4 rounded-full font-medium tracking-wide hover:bg-amber-600 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-300"
                        >
                            Invia Richiesta
                        </button>
                    </div>

                    {/* Feedback Messages */}
                    {status === "success" && (
                        <div className="text-green-600 text-center bg-green-50 p-3 rounded-lg border border-green-100">
                            Grazie! La tua richiesta è stata inviata. Ti ricontatteremo presto.
                        </div>
                    )}
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
