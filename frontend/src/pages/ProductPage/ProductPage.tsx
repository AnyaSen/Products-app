import React, { ReactElement, useEffect } from "react";
import { RouteComponentProps } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { IAppState } from "../../redux/store";
import { ThunkDispatch } from "redux-thunk";
import LoadingPage from "../LoadingPage";
import ErrorPage from "../ErrorPage";
import { fetchProductById } from "../../redux/actions";

interface MatchParams {
  id: string;
}

interface Props extends RouteComponentProps<MatchParams> {}
export default function ProductPage({ match }: Props): ReactElement {
  const { id } = match.params;
  const isLoading = useSelector((state: IAppState) => state.app.isLoading);
  const isError = useSelector((state: IAppState) => state.app.isError);
  const currentProduct = useSelector(
    (state: IAppState) => state.app.currentProduct
  );

  const dispatch: ThunkDispatch<{}, {}, any> = useDispatch();

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [id]);

  if (isLoading) return <LoadingPage />;
  if (isError) return <ErrorPage />;

  return (
    <div>
      <h1>{currentProduct.name}</h1>
    </div>
  );
}
