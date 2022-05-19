import React, { FC, ReactElement, ReactNode } from "react";

//se puede importar PropsWithChildren desde react y pasar las props vacias o con algo
interface DarkLayoutProps {
    children: JSX.Element | JSX.Element[];
}


const DarkLayout: FC<DarkLayoutProps> = ({ children }) => {
    return (
        <div style={{
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            borderRadius: '5px',
            padding: '10px',
        }}>
            <h3>Dark-Layout</h3>
            <div>
                {children}
            </div>
        </div>
    );
};

export default DarkLayout