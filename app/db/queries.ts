// "use server";

// import { sql } from "./postgres";
// import {
//   unstable_noStore as noStore,
// } from "next/cache";

// export async function getBlogViews() {
//   if (!process.env.POSTGRES_URL) {
//     return [];
//   }

//   noStore();
//   let views = await sql`
//     SELECT count
//     FROM views
//   `;

//   return views.reduce((acc, curr) => acc + Number(curr.count), 0);
// }

// export async function getViewsCount(): Promise<
//   { slug: string; count: number }[]
// > {
//   if (!process.env.POSTGRES_URL) {
//     return [];
//   }

//   noStore();
//   return sql`
//     SELECT slug, count
//     FROM views
//   `;
// }

// export async function getCommunityWallEntries() {
//   if (!process.env.POSTGRES_URL) {
//     return [];
//   }

//   noStore();
//   return sql`
//     SELECT id, body, created_by, updated_at
//     FROM community_wall
//     ORDER BY created_at DESC
//     LIMIT 100
//   `;
// }
