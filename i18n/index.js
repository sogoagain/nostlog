import { createTranslator } from "next-intl";

export const locales = ["en", "ko"];

export const defaultLocale = locales[0];

export const getTranslations = async (config) => {
  const { locale, namespace } = config;
  const messages = (await import(`@/i18n/messages/${locale}.json`)).default;
  return createTranslator({ locale, messages, namespace }).rich;
};
