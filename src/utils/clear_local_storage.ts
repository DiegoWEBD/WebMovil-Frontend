export const clearLocalStorage = () => {
	localStorage.removeItem('access_token')
	localStorage.removeItem('user_type')
	localStorage.removeItem('user_email')
	localStorage.removeItem('owner_selected_store_id')
	localStorage.removeItem('owner_selected_store_name')
	localStorage.removeItem('owner_selected_store_is_active')
}
