import React from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppRouter } from '@/app/providers/router';
import { Navbar } from '@/widgets/Navbar';

function App() {
    return (
        <div className={classNames('app', {}, [])}>
            <Navbar />
            <div className="content-page">
                <AppRouter />
            </div>
        </div>
    );
}

export default App;
