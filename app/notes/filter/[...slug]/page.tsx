import { fetchNotes } from '@/lib/api';
import type { Response } from '@/types/response';
import Notes from './Notes.client';

type Props = {
  params: Promise<{ slug: string[] }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const tag = slug[0];
  const normalizedTag = tag === 'All' ? undefined : tag;

  const data: Response = await fetchNotes('', 1, normalizedTag);

  return <Notes initialData={data} tag={tag} />;
}
