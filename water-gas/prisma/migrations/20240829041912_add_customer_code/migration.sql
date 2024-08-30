/*
  Warnings:

  - Added the required column `customer_code` to the `Measure` table without a default value. This is not possible if the table is not empty.

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
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_Measure" ("confirmed_value", "created_at", "id", "image_url", "measure_datetime", "measure_type", "measure_uuid", "updated_at") SELECT "confirmed_value", "created_at", "id", "image_url", "measure_datetime", "measure_type", "measure_uuid", "updated_at" FROM "Measure";
DROP TABLE "Measure";
ALTER TABLE "new_Measure" RENAME TO "Measure";
CREATE UNIQUE INDEX "Measure_measure_uuid_key" ON "Measure"("measure_uuid");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
