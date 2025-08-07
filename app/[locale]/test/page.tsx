export default function LocaleTestPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold text-green-600">Locale Test Page Works!</h1>
    </div>
  );
} 