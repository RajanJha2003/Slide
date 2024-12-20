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


export const findAutomation = async (id: string) => {
    return await client.automation.findUnique({
      where: {
        id,
      },
      include: {
        keywords: true,
        trigger: true,
        posts: true,
        listener: true,
        User: {
          select: {
            subscription: true,
            integrations: true,
          },
        },
      },
    })
  }