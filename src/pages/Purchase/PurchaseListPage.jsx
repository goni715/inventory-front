import React, {Fragment, Suspense} from 'react';
import LazyLoader from "../../components/MasterLayout/LazyLoader";
import MasterLayout from "../../components/MasterLayout/MasterLayout";
const PurchaseList = React.lazy(() => import('../../components/Purchase/PurchaseList'));


const PurchaseListPage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={LazyLoader}>
                    <PurchaseList/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default PurchaseListPage;