// sanity.client.ts
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "your_project_id",   // 👈 from sanity.json / manage.sanity.io
  dataset: "production",          // 👈 or whatever dataset you chose
  apiVersion: "2023-01-01",       // use a fixed date
  useCdn: true,                   // `false` if you need latest data always
});
