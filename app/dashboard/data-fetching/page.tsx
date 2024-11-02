import { unstable_cache } from 'next/cache';
import { notFound } from 'next/navigation';

const getPosts = unstable_cache(
	async () => {
		const data = await fetch('https://api.vercel.app/blog', {});
		return await data.json();
	},
	['posts'],
	{
		revalidate: 36000,
		tags: ['posts'],
	},
);

const getPost = async (id: string) => {
	const res = await fetch(`https://api.vercel.app/blog/${id}`);
	const post = await res.json();
	if (!post) notFound();
	return post;
};

export const generateStaticParams = async () => {
	const posts = await getPosts();

	return posts.map((post: { id: number }) => ({
		id: post.id,
	}));
};

export const generateMetadata = async ({ params }: { params: { id: string } }) => {
	const post = await getPost(params.id);
	return {
		title: post.title,
	};
};

const Page = async () => {
	const posts = await getPosts();
	console.log(posts);

	return (
		<ul>
			{posts.map((post: { id: number; title: string }) => (
				<li key={post.id}>{post.title}</li>
			))}
		</ul>
	);
};

export default Page;
