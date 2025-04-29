import './PageChanger.css'
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'

type PageChangerProps = {
	page: number
	totalPages: number
	setPage: (page: number) => void
}

const PageChanger = ({ page, totalPages, setPage }: PageChangerProps) => {
	return (
		<div className='page-changer'>
			<button
				className={`change-page-button ${page == 1 ? 'disabled' : ''}`}
				onClick={() => setPage(page > 1 ? page - 1 : 1)}
				disabled={page == 1}
			>
				<GrFormPrevious className='arrow' />
			</button>
			<p className='page-number'>{page}</p>
			<button
				className={`change-page-button ${page >= totalPages ? 'disabled' : ''}`}
				onClick={() => setPage(page + 1)}
				disabled={page >= totalPages}
			>
				<GrFormNext className='arrow' />
			</button>
		</div>
	)
}

export default PageChanger
