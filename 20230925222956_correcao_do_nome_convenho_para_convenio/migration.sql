/*
  Warnings:

  - You are about to drop the column `convenho` on the `Consulta` table. All the data in the column will be lost.
  - Added the required column `convenio` to the `Consulta` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Consulta" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "diagnostico" TEXT NOT NULL,
    "prescricao" TEXT NOT NULL,
    "convenio" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL,
    "updated_at" DATETIME NOT NULL,
    "deleted_at" DATETIME NOT NULL
);
INSERT INTO "new_Consulta" ("created_at", "deleted_at", "diagnostico", "id", "prescricao", "status", "updated_at") SELECT "created_at", "deleted_at", "diagnostico", "id", "prescricao", "status", "updated_at" FROM "Consulta";
DROP TABLE "Consulta";
ALTER TABLE "new_Consulta" RENAME TO "Consulta";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
