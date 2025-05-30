export const localeNumber = (value: number): string =>
	value.toLocaleString('es-CL')

export const localePrice = (value: number): string => {
	const locale = localeNumber(value)
	return `CLP ${locale}`
}
