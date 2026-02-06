import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Camere & Suites | Hotel Caroline",
    description: "Camere confortevoli immerse nella natura. Scopri le nostre suite King, Deluxe e Family a Ortisei.",
};

export default function HotelLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
