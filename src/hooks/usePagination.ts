// hooks/usePagination.ts
import { useState, useContext} from 'react';

const usePagination = (itemsPerPage: number) => {
    const [currentPage, setCurrentPage] = useState(1);

    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return {
        currentPage,
        paginate,
        startIndex: (currentPage - 1) * itemsPerPage,
        endIndex: currentPage * itemsPerPage
    };
};

export default usePagination;
