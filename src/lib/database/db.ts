import {PrismaClient} from '@prisma/client';

declare global{
    var prisma: PrismaClient | undefined;
}
const globalforprisma =global as typeof globalThis & {
    prisma?: PrismaClient | undefined;
}
const db = globalforprisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') {
    globalforprisma.prisma = db;
}

export default db;
