import { Inter } from "next/font/google";

import { locales, getTranslations } from "@/i18n";

import IntlProviders from "@/components/IntlProviders";

import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

async function getMessages(locale) {
  return (await import(`@/i18n/messages/${locale}.json`)).default;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "IndexLayout" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function IndexLayout({ children, params: { locale } }) {
  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <IntlProviders messages={messages} locale={locale}>
          {children}
        </IntlProviders>
      </body>
    </html>
  );
}
