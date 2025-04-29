import './Skeleton.css'

type SkeletonProps = {
	width?: string
	height?: string
}

const Skeleton = ({ width = '100%', height = '1rem' }: SkeletonProps) => (
	<div className='skeleton' style={{ width, height }} />
)

export default Skeleton
