import React from 'react';

export default Component => ({ history, ...rest }) => {
    const goBack = () => {
        history.goBack();
    }

    return <div>
        <Component {...rest} goBack={goBack} />
    </div>

}