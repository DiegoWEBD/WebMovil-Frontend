import './NotFoundImage.css'

import { LuImageOff } from 'react-icons/lu'

type NotFoundImageProps = {
	className?: string
}

const NotFoundImage = ({ className }: NotFoundImageProps) => {
	return (
		<div className={`not-found-image ${className}`}>
			<LuImageOff className='not-found-image-icon' />
		</div>
	)
}

export default NotFoundImage
