import { client } from "@/lib/prisma"

export const getAutomations = async (clerkId: string) => {
    return await client.user.findUnique({
      where: {
        clerkId,
      },
      select: {
        automations: {
          orderBy: {
            createdAt: 'asc',
          },
          include: {
            keywords: true,
            listener: true,
          },
        },
      },
    })
}