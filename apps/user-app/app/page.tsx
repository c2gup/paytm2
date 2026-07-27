import { prisma } from "@repo/db";

export default async function Home() {
  try {
    const users = await prisma.user.findMany();
    return <pre>{JSON.stringify(users, null, 2)}</pre>;
  } catch (e) {
    console.error(e);

    return (
      <pre>
        {JSON.stringify(
          {
            name: e?.name,
            code: e?.code,
            message: e?.message,
            meta: e?.meta,
          },
          null,
          2,
        )}
      </pre>
    );
  }
}
