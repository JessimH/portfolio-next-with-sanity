// sanity/sanity.client.ts

import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "i3gg53z6",
  dataset: "production",
  apiVersion: "2023-08-08",
  useCdn: false,
};

const client = createClient(config);

export default client;
