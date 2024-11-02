import styles from '@/app/ui/home.module.css';

const Page = () => {
	return (
		<div className={styles.container}>
			<video
				height='452'
				width='768'
				controls
				muted
				autoPlay
			>
				<source
					src='https://ik.imagekit.io/ikmedia/file_example_MOV_640_800kB.mov?tr=orig-true'
					type='video/quicktime'
				/>
				<source
					src='https://ik.imagekit.io/ikmedia/sample-5s.webm?tr=f-mp4'
					type='video/webm'
				/>
				Your browser does not support the video tag...
			</video>
		</div>
	);
};

export default Page;
