import './ContentChanger.css'

type ContentChangerProps = {
	content: string
	setContent: (content: string) => void
}

const ContentChanger = ({ content, setContent }: ContentChangerProps) => {
	return (
		<div className='content-changer'>
			<button
				className={`button ${content == 'products' ? 'selected' : ''}`}
				onClick={() => setContent('products')}
			>
				Productos
			</button>
			<button
				className={`button ${content == 'information' ? 'selected' : ''}`}
				onClick={() => setContent('information')}
			>
				Información
			</button>
		</div>
	)
}

export default ContentChanger
