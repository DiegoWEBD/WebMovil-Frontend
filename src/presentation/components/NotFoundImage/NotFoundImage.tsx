import './NotFoundImage.css'

import { LuImageOff } from 'react-icons/lu'

type NotFoundImageProps = {
	className?: string
	width?: string
	height?: string
}

const NotFoundImage = ({ className, width, height }: NotFoundImageProps) => {
	return (
		<div className={`not-found-image ${className}`} style={{ width, height }}>
			<LuImageOff className='not-found-image-icon' />
		</div>
	)
}

export default NotFoundImage
