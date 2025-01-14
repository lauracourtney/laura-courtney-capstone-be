/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex("rates").del();
  await knex("rates").insert([
    { id: 1, dates: new Date(2025, 0, 1), rates: 125 },
    { id: 2, dates: new Date(2025, 0, 2), rates: 125 },
    { id: 3, dates: new Date(2025, 0, 3), rates: 125 },
    { id: 4, dates: new Date(2025, 0, 4), rates: 125 },
    { id: 5, dates: new Date(2025, 0, 5), rates: 125 },
    { id: 6, dates: new Date(2025, 0, 6), rates: 125 },
    { id: 7, dates: new Date(2025, 0, 7), rates: 125 },
    { id: 8, dates: new Date(2025, 0, 8), rates: 125 },
    { id: 9, dates: new Date(2025, 0, 9), rates: 125 },
    { id: 10, dates: new Date(2025, 0, 10), rates: 125 },
    { id: 11, dates: new Date(2025, 0, 11), rates: 125 },
    { id: 12, dates: new Date(2025, 0, 12), rates: 125 },
    { id: 13, dates: new Date(2025, 0, 13), rates: 125 },
    { id: 14, dates: new Date(2025, 0, 14), rates: 125 },
    { id: 15, dates: new Date(2025, 0, 15), rates: 125 },
    { id: 16, dates: new Date(2025, 0, 16), rates: 125 },
    { id: 17, dates: new Date(2025, 0, 17), rates: 125 },
    { id: 18, dates: new Date(2025, 0, 18), rates: 125 },
    { id: 19, dates: new Date(2025, 0, 19), rates: 125 },
    { id: 20, dates: new Date(2025, 0, 20), rates: 125 },
    { id: 21, dates: new Date(2025, 0, 21), rates: 125 },
    { id: 22, dates: new Date(2025, 0, 22), rates: 125 },
    { id: 23, dates: new Date(2025, 0, 23), rates: 125 },
    { id: 24, dates: new Date(2025, 0, 24), rates: 125 },
    { id: 25, dates: new Date(2025, 0, 25), rates: 125 },
    { id: 26, dates: new Date(2025, 0, 26), rates: 125 },
    { id: 27, dates: new Date(2025, 0, 27), rates: 125 },
    { id: 28, dates: new Date(2025, 0, 28), rates: 125 },
    { id: 29, dates: new Date(2025, 0, 29), rates: 125 },
    { id: 30, dates: new Date(2025, 0, 30), rates: 125 },
    { id: 31, dates: new Date(2025, 0, 31), rates: 125 },
  ]);
}
