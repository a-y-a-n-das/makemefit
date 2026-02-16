import 'dotenv/config';
import {prisma} from "../src/index"
  

async function main() {
  console.log('🌱 Seeding database...');

  // Clear existing data
  console.log('Clearing existing data...');
  await prisma.workoutSession.deleteMany();
  await prisma.workout.deleteMany();
  await prisma.user.deleteMany();

  // Create users
  console.log('Creating users...');
  const users = await Promise.all([
    prisma.user.create({
      data: {
        email: 'john.doe@example.com',
        name: 'John Doe',
        hashedPassword: '$2a$10$K7L9K7L9K7L9K7L9K7L9K7L9K7L9K7L9K7L9K7L9K7L9K7L9K7L9K', // "password123"
      },
    }),
    prisma.user.create({
      data: {
        email: 'jane.smith@example.com',
        name: 'Jane Smith',
        hashedPassword: '$2a$10$M8M8M8M8M8M8M8M8M8M8M8M8M8M8M8M8M8M8M8M8M8M8M8M8M8M8M8', // "password123"
      },
    }),
    prisma.user.create({
      data: {
        email: 'mike.johnson@example.com',
        name: 'Mike Johnson',
        hashedPassword: '$2a$10$N9N9N9N9N9N9N9N9N9N9N9N9N9N9N9N9N9N9N9N9N9N9N9N9N9N9N9', // "password123"
      },
    }),
  ]);

  console.log(`Created ${users.length} users`);

  // Create CARDIO workouts
  console.log('Creating CARDIO workouts...');
  const cardioWorkouts = await Promise.all([
    prisma.workout.create({
      data: {
        name: 'Running',
        description: 'Outdoor or treadmill running at moderate to high intensity',
        setTime: 30,
        burningRate: 10,
        category: 'CARDIO',
      },
    }),
    prisma.workout.create({
      data: {
        name: 'Cycling',
        description: 'Road cycling or stationary bike workout',
        setTime: 45,
        burningRate: 8,
        category: 'CARDIO',
      },
    }),
    prisma.workout.create({
      data: {
        name: 'Jump Rope',
        description: 'High-intensity interval training with jump rope',
        setTime: 15,
        burningRate: 13,
        category: 'CARDIO',
      },
    }),
    prisma.workout.create({
      data: {
        name: 'Swimming',
        description: 'Freestyle swimming for endurance and full-body cardio',
        setTime: 40,
        burningRate: 11,
        category: 'CARDIO',
      },
    }),
    prisma.workout.create({
      data: {
        name: 'HIIT Cardio',
        description: 'High-Intensity Interval Training with burpees, mountain climbers, and jumping jacks',
        setTime: 20,
        burningRate: 15,
        category: 'CARDIO',
      },
    }),
    prisma.workout.create({
      data: {
        name: 'Rowing',
        description: 'Indoor rowing machine for full-body cardio workout',
        setTime: 30,
        burningRate: 12,
        category: 'CARDIO',
      },
    }),
    prisma.workout.create({
      data: {
        name: 'Elliptical',
        description: 'Low-impact cardio on elliptical machine',
        setTime: 35,
        burningRate: 7,
        category: 'CARDIO',
      },
    }),
  ]);

  // Create STRENGTH workouts
  console.log('Creating STRENGTH workouts...');
  const strengthWorkouts = await Promise.all([
    prisma.workout.create({
      data: {
        name: 'Weight Training - Upper Body',
        description: 'Chest, back, shoulders, and arms workout with dumbbells and barbells',
        setTime: 60,
        burningRate: 6,
        category: 'STRENGTH',
      },
    }),
    prisma.workout.create({
      data: {
        name: 'Weight Training - Lower Body',
        description: 'Squats, lunges, deadlifts, and leg exercises',
        setTime: 60,
        burningRate: 7,
        category: 'STRENGTH',
      },
    }),
    prisma.workout.create({
      data: {
        name: 'Push-ups & Pull-ups',
        description: 'Bodyweight strength training focusing on push and pull movements',
        setTime: 30,
        burningRate: 8,
        category: 'STRENGTH',
      },
    }),
    prisma.workout.create({
      data: {
        name: 'Kettlebell Training',
        description: 'Dynamic strength and conditioning with kettlebells',
        setTime: 40,
        burningRate: 9,
        category: 'STRENGTH',
      },
    }),
    prisma.workout.create({
      data: {
        name: 'CrossFit WOD',
        description: 'Workout of the Day combining strength and conditioning',
        setTime: 45,
        burningRate: 10,
        category: 'STRENGTH',
      },
    }),
    prisma.workout.create({
      data: {
        name: 'Core Training',
        description: 'Planks, crunches, and rotational exercises for core strength',
        setTime: 25,
        burningRate: 5,
        category: 'STRENGTH',
      },
    }),
    prisma.workout.create({
      data: {
        name: 'Powerlifting',
        description: 'Heavy compound lifts: squat, bench press, deadlift',
        setTime: 90,
        burningRate: 5,
        category: 'STRENGTH',
      },
    }),
  ]);

  // Create MOBILITY workouts
  console.log('Creating MOBILITY workouts...');
  const mobilityWorkouts = await Promise.all([
    prisma.workout.create({
      data: {
        name: 'Yoga Flow',
        description: 'Vinyasa flow yoga for flexibility and balance',
        setTime: 60,
        burningRate: 3,
        category: 'MOBILITY',
      },
    }),
    prisma.workout.create({
      data: {
        name: 'Pilates',
        description: 'Core-focused exercises for flexibility and posture',
        setTime: 50,
        burningRate: 4,
        category: 'MOBILITY',
      },
    }),
    prisma.workout.create({
      data: {
        name: 'Dynamic Stretching',
        description: 'Active stretches to improve range of motion and warm up',
        setTime: 20,
        burningRate: 2,
        category: 'MOBILITY',
      },
    }),
    prisma.workout.create({
      data: {
        name: 'Foam Rolling',
        description: 'Self-myofascial release for muscle recovery',
        setTime: 15,
        burningRate: 1,
        category: 'MOBILITY',
      },
    }),
    prisma.workout.create({
      data: {
        name: 'Tai Chi',
        description: 'Gentle flowing movements for balance and mindfulness',
        setTime: 45,
        burningRate: 2,
        category: 'MOBILITY',
      },
    }),
    prisma.workout.create({
      data: {
        name: 'Static Stretching',
        description: 'Deep stretches held for flexibility improvement',
        setTime: 30,
        burningRate: 2,
        category: 'MOBILITY',
      },
    }),
  ]);

  // Create SPORTS workouts
  console.log('Creating SPORTS workouts...');
  const sportsWorkouts = await Promise.all([
    prisma.workout.create({
      data: {
        name: 'Basketball',
        description: 'Full-court basketball game or practice',
        setTime: 60,
        burningRate: 8,
        category: 'SPORTS',
      },
    }),
    prisma.workout.create({
      data: {
        name: 'Soccer',
        description: 'Soccer match or training session',
        setTime: 90,
        burningRate: 9,
        category: 'SPORTS',
      },
    }),
    prisma.workout.create({
      data: {
        name: 'Tennis',
        description: 'Singles or doubles tennis match',
        setTime: 60,
        burningRate: 8,
        category: 'SPORTS',
      },
    }),
    prisma.workout.create({
      data: {
        name: 'Boxing',
        description: 'Boxing training with heavy bag and speed bag work',
        setTime: 45,
        burningRate: 12,
        category: 'SPORTS',
      },
    }),
    prisma.workout.create({
      data: {
        name: 'Rock Climbing',
        description: 'Indoor or outdoor rock climbing session',
        setTime: 90,
        burningRate: 8,
        category: 'SPORTS',
      },
    }),
    prisma.workout.create({
      data: {
        name: 'Badminton',
        description: 'Singles or doubles badminton match',
        setTime: 45,
        burningRate: 7,
        category: 'SPORTS',
      },
    }),
    prisma.workout.create({
      data: {
        name: 'Martial Arts',
        description: 'Karate, Judo, or Taekwondo training session',
        setTime: 60,
        burningRate: 10,
        category: 'SPORTS',
      },
    }),
    prisma.workout.create({
      data: {
        name: 'Volleyball',
        description: 'Beach or indoor volleyball game',
        setTime: 60,
        burningRate: 6,
        category: 'SPORTS',
      },
    }),
  ]);

  const allWorkouts = [
    ...cardioWorkouts,
    ...strengthWorkouts,
    ...mobilityWorkouts,
    ...sportsWorkouts,
  ];

  console.log(`Created ${allWorkouts.length} workouts`);

  // Create workout sessions
  console.log('Creating workout sessions...');
  const sessions = [];

  // User 1 (John) - Cardio enthusiast
  const now = new Date();
  const daysAgo = (days: number) => new Date(now.getTime() - days * 24 * 60 * 60 * 1000);

  // Last 30 days of workouts for John
  sessions.push(
    prisma.workoutSession.create({
      data: {
        userId: users[0].id,
        workoutId: cardioWorkouts[0].id, // Running
        startedAt: daysAgo(2),
        completedAt: new Date(daysAgo(2).getTime() + 30 * 60 * 1000),
        caloriesBurned: 300,
      },
    }),
    prisma.workoutSession.create({
      data: {
        userId: users[0].id,
        workoutId: cardioWorkouts[1].id, // Cycling
        startedAt: daysAgo(5),
        completedAt: new Date(daysAgo(5).getTime() + 45 * 60 * 1000),
        caloriesBurned: 360,
      },
    }),
    prisma.workoutSession.create({
      data: {
        userId: users[0].id,
        workoutId: cardioWorkouts[4].id, // HIIT
        startedAt: daysAgo(7),
        completedAt: new Date(daysAgo(7).getTime() + 20 * 60 * 1000),
        caloriesBurned: 300,
      },
    }),
    prisma.workoutSession.create({
      data: {
        userId: users[0].id,
        workoutId: cardioWorkouts[3].id, // Swimming
        startedAt: daysAgo(10),
        completedAt: new Date(daysAgo(10).getTime() + 40 * 60 * 1000),
        caloriesBurned: 440,
      },
    }),
    prisma.workoutSession.create({
      data: {
        userId: users[0].id,
        workoutId: strengthWorkouts[5].id, // Core Training
        startedAt: daysAgo(12),
        completedAt: new Date(daysAgo(12).getTime() + 25 * 60 * 1000),
        caloriesBurned: 125,
      },
    }),
  );

  // User 2 (Jane) - Strength training focus
  sessions.push(
    prisma.workoutSession.create({
      data: {
        userId: users[1].id,
        workoutId: strengthWorkouts[0].id, // Upper Body
        startedAt: daysAgo(1),
        completedAt: new Date(daysAgo(1).getTime() + 60 * 60 * 1000),
        caloriesBurned: 360,
      },
    }),
    prisma.workoutSession.create({
      data: {
        userId: users[1].id,
        workoutId: strengthWorkouts[1].id, // Lower Body
        startedAt: daysAgo(3),
        completedAt: new Date(daysAgo(3).getTime() + 60 * 60 * 1000),
        caloriesBurned: 420,
      },
    }),
    prisma.workoutSession.create({
      data: {
        userId: users[1].id,
        workoutId: mobilityWorkouts[0].id, // Yoga
        startedAt: daysAgo(4),
        completedAt: new Date(daysAgo(4).getTime() + 60 * 60 * 1000),
        caloriesBurned: 180,
      },
    }),
    prisma.workoutSession.create({
      data: {
        userId: users[1].id,
        workoutId: strengthWorkouts[4].id, // CrossFit
        startedAt: daysAgo(6),
        completedAt: new Date(daysAgo(6).getTime() + 45 * 60 * 1000),
        caloriesBurned: 450,
      },
    }),
    prisma.workoutSession.create({
      data: {
        userId: users[1].id,
        workoutId: strengthWorkouts[3].id, // Kettlebell
        startedAt: daysAgo(8),
        completedAt: new Date(daysAgo(8).getTime() + 40 * 60 * 1000),
        caloriesBurned: 360,
      },
    }),
    prisma.workoutSession.create({
      data: {
        userId: users[1].id,
        workoutId: mobilityWorkouts[1].id, // Pilates
        startedAt: daysAgo(9),
        completedAt: new Date(daysAgo(9).getTime() + 50 * 60 * 1000),
        caloriesBurned: 200,
      },
    }),
  );

  // User 3 (Mike) - Sports enthusiast
  sessions.push(
    prisma.workoutSession.create({
      data: {
        userId: users[2].id,
        workoutId: sportsWorkouts[0].id, // Basketball
        startedAt: daysAgo(1),
        completedAt: new Date(daysAgo(1).getTime() + 60 * 60 * 1000),
        caloriesBurned: 480,
      },
    }),
    prisma.workoutSession.create({
      data: {
        userId: users[2].id,
        workoutId: sportsWorkouts[1].id, // Soccer
        startedAt: daysAgo(3),
        completedAt: new Date(daysAgo(3).getTime() + 90 * 60 * 1000),
        caloriesBurned: 810,
      },
    }),
    prisma.workoutSession.create({
      data: {
        userId: users[2].id,
        workoutId: sportsWorkouts[3].id, // Boxing
        startedAt: daysAgo(5),
        completedAt: new Date(daysAgo(5).getTime() + 45 * 60 * 1000),
        caloriesBurned: 540,
      },
    }),
    prisma.workoutSession.create({
      data: {
        userId: users[2].id,
        workoutId: cardioWorkouts[0].id, // Running
        startedAt: daysAgo(7),
        completedAt: new Date(daysAgo(7).getTime() + 30 * 60 * 1000),
        caloriesBurned: 300,
      },
    }),
    prisma.workoutSession.create({
      data: {
        userId: users[2].id,
        workoutId: sportsWorkouts[2].id, // Tennis
        startedAt: daysAgo(9),
        completedAt: new Date(daysAgo(9).getTime() + 60 * 60 * 1000),
        caloriesBurned: 480,
      },
    }),
    prisma.workoutSession.create({
      data: {
        userId: users[2].id,
        workoutId: mobilityWorkouts[2].id, // Dynamic Stretching
        startedAt: daysAgo(10),
        completedAt: new Date(daysAgo(10).getTime() + 20 * 60 * 1000),
        caloriesBurned: 40,
      },
    }),
  );

  // Add some in-progress sessions
  sessions.push(
    prisma.workoutSession.create({
      data: {
        userId: users[0].id,
        workoutId: cardioWorkouts[5].id, // Rowing
        startedAt: new Date(now.getTime() - 10 * 60 * 1000), // Started 10 minutes ago
      },
    }),
    prisma.workoutSession.create({
      data: {
        userId: users[1].id,
        workoutId: strengthWorkouts[2].id, // Push-ups & Pull-ups
        startedAt: new Date(now.getTime() - 15 * 60 * 1000), // Started 15 minutes ago
      },
    }),
  );

  await Promise.all(sessions);
  console.log(`Created ${sessions.length} workout sessions`);

  console.log('✅ Seeding completed successfully!');
  console.log('\nSummary:');
  console.log(`- Users: ${users.length}`);
  console.log(`- Workouts: ${allWorkouts.length}`);
  console.log(`  * CARDIO: ${cardioWorkouts.length}`);
  console.log(`  * STRENGTH: ${strengthWorkouts.length}`);
  console.log(`  * MOBILITY: ${mobilityWorkouts.length}`);
  console.log(`  * SPORTS: ${sportsWorkouts.length}`);
  console.log(`- Workout Sessions: ${sessions.length}`);
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
