import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ristorante & Bar | Hotel Caroline",
    description: "Sinfonia dei gusti. Cucina tradizionale, ingredienti selezionati e cocktail d'autore in un'atmosfera unica.",
};

export default function RestaurantLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
