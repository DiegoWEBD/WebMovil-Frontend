import { useInfiniteQuery } from '@tanstack/react-query'
import { useEffect, useMemo, useRef } from 'react'
import useAppState from '../../../../../../global_states/appState'
import GridContainer from '../../../../../containers/GridContainer/GridContainer'
import ProductCard from '../../../../../ProductsViewer/ProductCard/ProductCard'

const ExploreProducts = () => {
	const { stockService } = useAppState()
	const loaderRef = useRef<HTMLDivElement | null>(null)

	const {
		data,
		error,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
		isFetching,
	} = useInfiniteQuery({
		queryKey: ['explore-products'],
		queryFn: async ({ pageParam = 1 }) => {
			const products = await stockService.getProducts(
				undefined,
				undefined,
				pageParam,
				10
			)
			return {
				products: products.products,
				nextPage: pageParam + 1,
				totalPages: products.meta?.total_pages || 1,
			}
		},
		initialPageParam: 1,
		getNextPageParam: lastPage =>
			lastPage.nextPage <= lastPage.totalPages ? lastPage.nextPage : undefined,
	})

	const allProducts = useMemo(() => {
		return data?.pages.flatMap(page => page.products) ?? []
	}, [data])

	useEffect(() => {
		const target = loaderRef.current

		const observer = new IntersectionObserver(
			entries => {
				if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
					fetchNextPage()
				}
			},
			{ threshold: 1.0 }
		)

		if (target) observer.observe(target)

		return () => {
			if (target) observer.unobserve(target)
		}
	}, [fetchNextPage, hasNextPage, isFetchingNextPage])

	if (error) return <p>Error al cargar los productos disponibles</p>

	return (
		<>
			<GridContainer>
				{allProducts?.map(product => (
					<ProductCard key={`explore-${product.getCode()}`} product={product} />
				))}
			</GridContainer>
			<GridContainer ref={loaderRef}>
				{isFetching &&
					Array.from({ length: 5 }).map((_, index) => (
						<ProductCard key={index} />
					))}
			</GridContainer>
		</>
	)
}

export default ExploreProducts
