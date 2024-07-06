import React from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppRouter } from '@/app/providers/router';

function App() {
    return (
        <div className={classNames('app', {}, [])}>
            <div className="content-page">
                <AppRouter />
            </div>
        </div>
    );
}

export default App;
