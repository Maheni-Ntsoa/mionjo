import { Field, Form, Formik } from "formik";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import SearchGetGeneralec from "../usecases/Generalec/SearchGetGeneralec ";

const SearchBar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const initialValues = { search: "" };
  const validationSchema = Yup.object({
    titre: Yup.string(),
    contenu: Yup.string(),
  });

  const onSubmit = async (values: any, { resetForm }: any) => {
    const result = await new SearchGetGeneralec().execute(values.search);
    resetForm();
    const resultJSON = encodeURIComponent(JSON.stringify(result));
    navigate(`/search?result=${resultJSON}&keyword=${values.search}`);
  };
  return (
    <div className="flex">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="p-8">
          <div
            className="flex h-fit"
            style={{ boxShadow: "0px 0px 5px 1px rgba(0,0,0,0.3)" }}
          >
            <div className="">
              <Field
                name="search"
                className="p-4 w-[160px] md:w-[300px] md:h-[40px] lg:w-[900px] h-[20px] lg:h-[90px] text-xs lg:text-base outline-none text-black/60"
                type="text"
                placeholder={t("SiteSearch")}
              />
            </div>

            <div className="flex justify-center">
              <button className="flex items-center bg-brown p-3 w-[40px] md:w-[40px] md:h-[40px] lg:w-[90px] h-[32px] lg:h-[90px]">
                <img
                  src="/assets/icons/ic_search.svg"
                  width={50}
                  height={70}
                  alt="search"
                />
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBar;
