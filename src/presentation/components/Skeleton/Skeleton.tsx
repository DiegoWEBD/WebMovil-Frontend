import './Skeleton.css'

type SkeletonProps = {
	width?: string
	height?: string
	className?: string
}

const Skeleton = ({
	width = '100%',
	height = '1rem',
	className,
}: SkeletonProps) => (
	<div className={`skeleton ${className}`} style={{ width, height }} />
)

export default Skeleton
