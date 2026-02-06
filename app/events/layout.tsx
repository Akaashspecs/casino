import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Eventi & Cerimonie | Hotel Caroline",
    description: "Organizza il tuo evento perfetto: matrimoni, feste private e meeting aziendali con un servizio impeccabile.",
};

export default function EventsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
