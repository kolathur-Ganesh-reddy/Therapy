"use client";

export default function Section({ children }: { children: React.ReactNode }) {
return (
<section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
{children}
</section>
)
}