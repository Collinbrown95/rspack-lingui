import React from "react";
import { createRoot } from "react-dom/client";

import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { messages } from "./locales/en/messages";

// import { Trans } from "@lingui/react";
import { Trans } from "@lingui/macro";
import Inbox from "./Inbox";

i18n.load("en", messages);
i18n.activate("en");

const App = () => (
  <I18nProvider i18n={i18n}>
    {/* <p><Trans id={"nwR43V"} message="Attachment {name} saved" values={{ name }} /></p> */}
    <p><Trans>test123</Trans></p>
    <Inbox />
  </I18nProvider>
);

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
