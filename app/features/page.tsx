export const metadata = {
  title: "Features — Coming Soon",
};

export default function FeaturesPage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] flex items-center justify-center bg-gradient-to-r from-black to-brandnavy text-white px-6">
      <div className="text-center space-y-3">
        <h1 className="font-display text-4xl md:text-6xl tracking-tight">
         ✨ Coming Soon ✨
        </h1>
        <p className="text-white/80">
          We’re crafting something lovely. Check back soon.
        </p>
      </div>
    </main>
  );
}