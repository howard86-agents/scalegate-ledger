import "dotenv/config";

import { prisma } from "./client";

const DEFAULT_USERS = [
  {
    email: "admin@example.com",
    name: "Admin User",
    role: "ADMIN" as const,
  },
];

async function main() {
  await Promise.all(
    DEFAULT_USERS.map((user) =>
      prisma.user.upsert({
        create: user,
        update: user,
        where: { email: user.email },
      })
    )
  );
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
