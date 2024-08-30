/*
  Warnings:

  - You are about to drop the column `created_at` on the `Measure` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `Measure` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Measure" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "measure_uuid" TEXT NOT NULL,
    "confirmed_value" INTEGER,
    "measure_datetime" DATETIME NOT NULL,
    "measure_type" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "customer_code" TEXT NOT NULL,
    "has_confirmed" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Measure" ("confirmed_value", "customer_code", "id", "image_url", "measure_datetime", "measure_type", "measure_uuid") SELECT "confirmed_value", "customer_code", "id", "image_url", "measure_datetime", "measure_type", "measure_uuid" FROM "Measure";
DROP TABLE "Measure";
ALTER TABLE "new_Measure" RENAME TO "Measure";
CREATE UNIQUE INDEX "Measure_measure_uuid_key" ON "Measure"("measure_uuid");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
