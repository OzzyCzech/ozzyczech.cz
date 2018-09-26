const paginate = (array, page_size, page_number) => {
	--page_number; // because pages logically start with 1, but technically with 0
	return array.slice(page_number * page_size, (page_number + 1) * page_size);
};
