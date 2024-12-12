// type Params = {
//   params: {
//     slug: string;
//   };
// };

type Params = Promise<{ slug: string[] }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  return { title: `Post: ${slug}` };
}

export default async function Page({ params }: { params: Params }) {
  const { slug } = await params;
  return <h1>Slug: {slug}</h1>;
}
