import React, {Fragment, Suspense} from 'react';
import LazyLoader from "../../components/MasterLayout/LazyLoader";
import {useParams} from "react-router-dom";
import MasterLayout from "../../components/MasterLayout/MasterLayout";
const ProductUpdate = React.lazy(() => import('../../components/Product/ProductUpdate'));

const ProductUpdatePage = () => {

    const params = useParams();

    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={LazyLoader}>
                    <ProductUpdate id={params['id']}/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default ProductUpdatePage;