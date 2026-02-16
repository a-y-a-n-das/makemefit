/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `Workout` table. All the data in the column will be lost.
  - Added the required column `burningRate` to the `Workout` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `Workout` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "WorkoutCategory" AS ENUM ('CARDIO', 'STRENGTH', 'MOBILITY', 'SPORTS');

-- AlterTable
ALTER TABLE "Workout" DROP COLUMN "updatedAt",
ADD COLUMN     "burningRate" INTEGER NOT NULL,
ADD COLUMN     "category" "WorkoutCategory" NOT NULL;

-- AlterTable
ALTER TABLE "WorkoutSession" ADD COLUMN     "caloriesBurned" INTEGER;
