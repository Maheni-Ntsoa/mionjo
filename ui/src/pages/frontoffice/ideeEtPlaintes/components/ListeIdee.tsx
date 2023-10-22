import { useEffect, useState } from "react";
import IdeeRecu from "../../../../models/IdeeRecu";
import GetIdee from "../../../../usecases/Idee/GetIdee";
import OneIdee from "./OneIdee";

interface ListeIdeeProps {
  refetch: boolean;
}

const ListeIdee: React.FC<ListeIdeeProps> = ({ refetch }) => {
  const [listIdees, setListIdees] = useState<IdeeRecu[]>([]);
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 4;

  const handlePageClick = (selectedPage: { selected: number }) => {
    setPageNumber(selectedPage.selected);
  };
  useEffect(() => {
    const fetchIdee = async () => {
      const data = await new GetIdee().execute();
      if (data) {
        setListIdees(data);
      }
    };
    fetchIdee();
  }, [refetch]);

  const pageCount = Math.ceil(listIdees.length / itemsPerPage);
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        {listIdees.length > 0 &&
          listIdees
            .slice(pageNumber * itemsPerPage, (pageNumber + 1) * itemsPerPage)
            .map((idee, index) => (
              <div key={index}>
                <OneIdee idee={idee} />
              </div>
            ))}
      </div>
      {/* <div className="mt-4">
        <ReactPaginate
          pageCount={pageCount}
          onPageChange={handlePageClick}
          previousLabel={"Précédent"}
          nextLabel={"Suivant"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          marginPagesDisplayed={2}
          pageRangeDisplayed={4}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </div> */}
    </div>
  );
};

export default ListeIdee;
